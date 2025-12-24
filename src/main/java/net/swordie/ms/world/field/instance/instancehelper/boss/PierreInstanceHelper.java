package net.swordie.ms.world.field.instance.instancehelper.boss;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.quest.QuestManager;
import net.swordie.ms.client.character.skills.Option;
import net.swordie.ms.client.character.skills.temp.CharacterTemporaryStat;
import net.swordie.ms.client.character.skills.temp.TemporaryStatManager;
import net.swordie.ms.connection.packet.MobPool;
import net.swordie.ms.connection.packet.field.FieldPacket;
import net.swordie.ms.connection.packet.field.LucidFieldPacket;
import net.swordie.ms.constants.BossConstants;
import net.swordie.ms.handlers.executors.EventManager;
import net.swordie.ms.life.DeathType;
import net.swordie.ms.life.mob.Mob;
import net.swordie.ms.life.mob.MobStat;
import net.swordie.ms.life.mob.skill.MobSkillID;
import net.swordie.ms.life.mob.skill.MobSkillStat;
import net.swordie.ms.loaders.SkillData;
import net.swordie.ms.loaders.containerclasses.MobSkillInfo;
import net.swordie.ms.util.Position;
import net.swordie.ms.util.Util;
import net.swordie.ms.world.field.Field;
import net.swordie.ms.world.field.bosses.gollux.FallingCatcher;
import net.swordie.ms.world.field.fieldeffect.FieldEffect;
import net.swordie.ms.world.field.instance.Instance;
import net.swordie.ms.world.field.instance.instancehelper.InstanceHelper;

import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ScheduledFuture;


public class PierreInstanceHelper extends InstanceHelper {

    //Dropping Hats
    private static final int HAT_DROP_TIMER = 15000; //ms
    private static final int MOST_LEFT_X = -430;
    private static final int FIELD_Y = 551;
    private static final int SPACE_BETWEEN_HATS = 200;
    private static final int HAT_AMOUNT = 10;
    private static final int HAT_SPAWN_CHANCE = 75; //% out of 100
    private static final String HAT_CATCHER_ID = "CapEffect";
    private FallingCatcher hats = null;
    private ScheduledFuture hatDropTimer = null;

    //Player Hats
    private static final int HAT_ATTACH_TIMER = 20000; //ms
    private ScheduledFuture hatAttachTimer = null;

    private boolean startedTimers = false;
    private boolean isChaos = false;
    private boolean isSplit = false;
    private boolean isHalfKilled = false;

    private LocalDateTime timeSinceLastTransform = null;
    private static final int TRANSFORM_COOLDOWN = 20;

    private static final int LINK_KILL_WINDOW = 15000;

    private ScheduledFuture transformAttemptTimer = null;
    private static final int TRANSFORM_ATTEMPT_TIMER = 50000;

    private static final Position SPLIT_SPAWN_POS = new Position(458, 551);
    private ScheduledFuture splitBothKilledTimer = null;
    private boolean cleared = false;

    @Override
    public void setup(Instance instance) {
        super.setup(instance);
        timeSinceLastTransform = LocalDateTime.now().minusSeconds(300);
    }


    @Override
    public void onMobSpawn(Field field, Mob mob) {
        super.onMobSpawn(field, mob);
        if (mob.getTemplateId() == 8900100 && startedTimers == false) {
            startedTimers = true;
            hatDropTimer = addTimer(EventManager.addFixedRateEvent(() -> createDroppingHats(), 5000, HAT_DROP_TIMER));
            hatAttachTimer = addTimer(EventManager.addFixedRateEvent(() -> attachHats(), 5000, HAT_ATTACH_TIMER));
            transformAttemptTimer = addTimer(EventManager.addFixedRateEvent(() -> transformTimer(), 5000, TRANSFORM_ATTEMPT_TIMER));

        }
        if (mob.getTemplateId() == 8900000 && startedTimers == false) {
            startedTimers = true;
            hatDropTimer = addTimer(EventManager.addFixedRateEvent(() -> createDroppingHats(), 5000, HAT_DROP_TIMER));
            hatAttachTimer = addTimer(EventManager.addFixedRateEvent(() -> attachHats(), 5000, HAT_ATTACH_TIMER));
            transformAttemptTimer = addTimer(EventManager.addFixedRateEvent(() -> transformTimer(), 5000, TRANSFORM_ATTEMPT_TIMER));
            isChaos = true;
        }

        if (mob.getTemplateId() == BossConstants.PIERRE_NORMAL_BOX || mob.getTemplateId() == BossConstants.PIERRE_CHAOS_BOX) {
            if (hatDropTimer != null) {
                EventManager.stopTimer(hatDropTimer);
            }
            if (hatAttachTimer != null) {
                EventManager.stopTimer(hatAttachTimer);
            }
            if (transformAttemptTimer != null) {
                EventManager.stopTimer(transformAttemptTimer);
            }
        }
    }

    @Override
    public void onMobDeath(Field field, Mob mob) {
        super.onMobDeath(field, mob);

        if (isSplit) {
            if (mob.getTemplateId() == BossConstants.PIERRE_CHAOS_RED || mob.getTemplateId() == BossConstants.PIERRE_CHAOS_BLUE) {
                if (isHalfKilled && !cleared) {
                    cleared = true;
                    mob.getField().spawnMob(BossConstants.PIERRE_CHAOS_BOX, SPLIT_SPAWN_POS);
                    if (splitBothKilledTimer != null) {
                        EventManager.stopTimer(splitBothKilledTimer);
                    }
                    for (Char chr : field.getChars()) {
                        QuestManager qm = chr.getQuestManager();
                        if (qm.hasQuestInProgress(30010)) {
                            qm.completeQuest(30010); //[Root Abyss] Defeat the First Seal Guardian
                        }
                    }

                } else {
                    isHalfKilled = true;
                    if (splitBothKilledTimer != null) {
                        EventManager.stopTimer(splitBothKilledTimer);
                    }
                    splitBothKilledTimer = addTimer(EventManager.addEvent(() -> isSplitBothKilled(), LINK_KILL_WINDOW));
                }
            }
        }

        //need to check if people burst, then immediately spawn chest
        if (mob.getHp() <= 0 && !isSplit) {
            if (mob.getTemplateId() == BossConstants.PIERRE_CHAOS_RED || mob.getTemplateId() == BossConstants.PIERRE_CHAOS_BLUE || mob.getTemplateId() == BossConstants.PIERRE_CHAOS_PURPLE) {
                cleared = true;
                mob.getField().spawnMob(BossConstants.PIERRE_CHAOS_BOX, SPLIT_SPAWN_POS);
                if (splitBothKilledTimer != null) {
                    EventManager.stopTimer(splitBothKilledTimer);
                }
                for (Char chr : field.getChars()) {
                    QuestManager qm = chr.getQuestManager();
                    if (qm.hasQuestInProgress(30010)) {
                        qm.completeQuest(30010); //[Root Abyss] Defeat the First Seal Guardian
                    }
                }
            }
        }

        if (mob.getTemplateId() == BossConstants.PIERRE_NORMAL_PURPLE || mob.getTemplateId() == BossConstants.PIERRE_NORMAL_RED || mob.getTemplateId() == BossConstants.PIERRE_NORMAL_BLUE) {
            mob.getField().spawnMob(BossConstants.PIERRE_NORMAL_BOX, SPLIT_SPAWN_POS);
        }
    }


    @Override
    public void onMobDamaged(Char attacker, Mob mob, long damage, long oldHp, long newHp) {
        super.onMobDamaged(attacker, mob, damage, oldHp, newHp);

        if (newHp <= 0) return;

        if ((mob.getTemplateId() == BossConstants.PIERRE_CHAOS_BLUE || mob.getTemplateId() == BossConstants.PIERRE_CHAOS_RED || mob.getTemplateId() == BossConstants.PIERRE_CHAOS_PURPLE ||
                mob.getTemplateId() == BossConstants.PIERRE_NORMAL_PURPLE || mob.getTemplateId() == BossConstants.PIERRE_NORMAL_RED || mob.getTemplateId() == BossConstants.PIERRE_NORMAL_BLUE)) {

            if (mob.getHpPerc() < 30 && !isSplit && isChaos) {
                if(!mob.getTemporaryStat().hasCurrentMobStat(MobStat.Stun)) {
                    isSplit = true;

                    //Spawn red
                    spawnClone(BossConstants.PIERRE_CHAOS_RED, SPLIT_SPAWN_POS);
                    //Spawn blue
                    spawnClone(BossConstants.PIERRE_CHAOS_BLUE, new Position(SPLIT_SPAWN_POS.getX() + 200, SPLIT_SPAWN_POS.getY()));
                    //Kill of original
                    removeMob(mob);
                }
            }

            //check if can transform
            if (ChronoUnit.SECONDS.between(timeSinceLastTransform, LocalDateTime.now()) > TRANSFORM_COOLDOWN) {
                if (mob.getHpPerc() < 70 && !isSplit) {
                    //check if not bound
                    if(!mob.getTemporaryStat().hasCurrentMobStat(MobStat.Stun)) {
                        attemptTransform(mob);
                    }
                }

                //Transform both pierres at same time if theyre split
                else if (mob.getHpPerc() < 30 && isChaos && !isHalfKilled) {
                    for (Mob fieldMob : mob.getField().getMobs()) {
                        attemptTransform(fieldMob);
                    }
                }
            }
        }
    }

    public void transformTimer(){
        if (isSplit) return;

        Mob mob = getUnsplitPierre();
        if (mob == null) return;
        if (ChronoUnit.SECONDS.between(timeSinceLastTransform, LocalDateTime.now()) > TRANSFORM_COOLDOWN) {
            if (mob.getHpPerc() < 70 && !isSplit) {
                //check if not bound
                if (!mob.getTemporaryStat().hasCurrentMobStat(MobStat.Freeze)) {
                    attemptTransform(mob);
                }
            }
        }
    }

    public void isSplitBothKilled() {
        //Check if theyre both killed
        if (!cleared) {
            isHalfKilled = false;
            Field field = getInstance().getField(isChaos ? BossConstants.PIERRE_CHAOS_FIELDID : BossConstants.PIERRE_NORMAL_FIELDID);
            spawnClone(field.getLifeByTemplateId(BossConstants.PIERRE_CHAOS_RED) == null ? BossConstants.PIERRE_CHAOS_RED : BossConstants.PIERRE_CHAOS_BLUE, SPLIT_SPAWN_POS);
        }
    }

    private void attemptTransform(Mob mob) {
        List<Integer> transformTargets = getTransformTargets(mob.getTemplateId(), mob.getHpPerc());
        if (transformTargets.size() == 0) return;
        int transformTarget = Util.getRandomFromCollection(transformTargets);
        if (mob.getField().getLifeByTemplateId(transformTarget) != null)
            return; //Already a mob of type for this target. Do this to ensure there's no duplicates
        transformMob(transformTarget, mob);
    }

    private void spawnClone(int cloneTemplateID, Position pos) {
        Field field = getInstance().getField(isChaos ? BossConstants.PIERRE_CHAOS_FIELDID : BossConstants.PIERRE_NORMAL_FIELDID);
        Mob transformedMob = field.spawnMob(cloneTemplateID, pos);
        transformedMob.setHp((long) (transformedMob.getHp() * 0.3));
        field.broadcastPacket(FieldPacket.fieldEffect(FieldEffect.mobHPTagFieldEffect(transformedMob)));
    }

    private void removeMob(Mob mob) {
        Field field = getInstance().getField(isChaos ? BossConstants.PIERRE_CHAOS_FIELDID : BossConstants.PIERRE_NORMAL_FIELDID);
        //Kill off current mob
        mob.setBroadcastLeaveField(true);
        field.removeLife(mob.getObjectId());
        mob.getTemporaryStat().removeAllMobStats(false);
        field.broadcastPacket(MobPool.leaveField(mob.getObjectId(), DeathType.EXPLODE));
        mob.clear();
    }

    private void transformMob(int transformTarget, Mob originalMob) {
        Field field = getInstance().getField(isChaos ? BossConstants.PIERRE_CHAOS_FIELDID : BossConstants.PIERRE_NORMAL_FIELDID);
        Mob transformedMob = field.spawnMob(transformTarget, originalMob.getPosition());
        transformedMob.setHp(originalMob.getHp());
        transformedMob.setDamageDone(originalMob.getDamageDone());
        field.broadcastPacket(FieldPacket.fieldEffect(FieldEffect.mobHPTagFieldEffect(transformedMob)));
        transformedMob.displayAggroRank();

        timeSinceLastTransform = LocalDateTime.now();
        removeMob(originalMob);


        if (transformedMob.getTemplateId() == 8900002) {
            setChasingEffect(transformedMob);
        }
    }

    private void setChasingEffect(Mob mob) {
        Char controller = mob.getField().getLifeToControllers().getOrDefault(mob, null);
        if (controller != null) {
            mob.getField().broadcastPacket(FieldPacket.setChaseEffect(controller, mob.getObjectId(), true));
        }
    }


    private void attachHats() {
        Field field = getInstance().getField(isChaos ? BossConstants.PIERRE_CHAOS_FIELDID : BossConstants.PIERRE_NORMAL_FIELDID);
        for (Char chr : field.getChars()) {
            if (!chr.isDead()) {
                TemporaryStatManager tsm = chr.getTemporaryStatManager();
                tsm.removeStat(CharacterTemporaryStat.CapDebuff);

                int val = isSplit == true ? Util.getRandom(10, 100) : Util.getRandom(100);
                //45% chance for blue hat
                if (val >= 55) {
                    MobSkillInfo msi = SkillData.getMobSkillInfoByIdAndLevel(MobSkillID.CapDebuffRed.getVal(), 1);
                    Option o = new Option(MobSkillID.CapDebuffRed.getVal());
                    o.slv = 1;
                    o.nOption = msi.getSkillStatIntValue(MobSkillStat.x);
                    o.tOption = msi.getSkillStatIntValue(MobSkillStat.time);
                    o.yOption = MobSkillID.CapDebuffRed.getVal(); //Used in damage handle to check which hat player has
                    tsm.putCharacterStatValueFromMobSkill(CharacterTemporaryStat.CapDebuff, o);
                    tsm.sendSetStatPacket();
                }
                //45% chance for red hat
                else if (val >= 10) {
                    MobSkillInfo msi = SkillData.getMobSkillInfoByIdAndLevel(MobSkillID.CapDebuffBlue.getVal(), 1);
                    Option o = new Option(MobSkillID.CapDebuffBlue.getVal());
                    o.slv = 1;
                    o.nOption = msi.getSkillStatIntValue(MobSkillStat.x);
                    o.tOption = msi.getSkillStatIntValue(MobSkillStat.time);
                    o.yOption = MobSkillID.CapDebuffBlue.getVal(); //Used in damage handle to check which hat player has
                    tsm.putCharacterStatValueFromMobSkill(CharacterTemporaryStat.CapDebuff, o);
                    tsm.sendSetStatPacket();
                }
                //10% chance for no hat
            }
        }
    }


    private void createDroppingHats() {
        List<Position> positions = new ArrayList<>();
        for (int i = 0; i < HAT_AMOUNT; i++) {
            if (Util.succeedProp(HAT_SPAWN_CHANCE)) {
                positions.add(new Position(MOST_LEFT_X + SPACE_BETWEEN_HATS * i, FIELD_Y));
            }
        }
        hats = new FallingCatcher(HAT_CATCHER_ID, 50, positions);
        Field field = getInstance().getField(isChaos ? BossConstants.PIERRE_CHAOS_FIELDID : BossConstants.PIERRE_NORMAL_FIELDID);
        field.broadcastPacket(LucidFieldPacket.createFallingCatcher(hats));
    }

    private List<Integer> getTransformTargets(int templateID, double hpPerc) {
        List<Integer> transformTargets = new ArrayList<>();
        switch (templateID) {
            case BossConstants.PIERRE_CHAOS_PURPLE: //Purple
                transformTargets.add(BossConstants.PIERRE_CHAOS_RED);
                transformTargets.add(BossConstants.PIERRE_CHAOS_BLUE);
                break;
            case BossConstants.PIERRE_CHAOS_RED: //Red
                if (!isSplit) {
                    transformTargets.add(BossConstants.PIERRE_CHAOS_PURPLE);
                } else {
                    transformTargets.add(BossConstants.PIERRE_CHAOS_BLUE);
                }
                break;
            case BossConstants.PIERRE_CHAOS_BLUE: //Blue
                if (!isSplit) {
                    transformTargets.add(BossConstants.PIERRE_CHAOS_PURPLE);
                } else {
                    transformTargets.add(BossConstants.PIERRE_CHAOS_RED);
                }
                break;
            case BossConstants.PIERRE_NORMAL_PURPLE:
                transformTargets.add(BossConstants.PIERRE_NORMAL_RED);
                transformTargets.add(BossConstants.PIERRE_NORMAL_BLUE);
                break;
            case BossConstants.PIERRE_NORMAL_RED:
            case BossConstants.PIERRE_NORMAL_BLUE:
                transformTargets.add(BossConstants.PIERRE_NORMAL_PURPLE);
                break;
        }
        return transformTargets;
    }

    private Mob getUnsplitPierre() {
        Mob pierre = getInstance().getField(BossConstants.PIERRE_NORMAL_FIELDID).getMobs().stream().filter(mob -> mob.getTemplateId() == BossConstants.PIERRE_NORMAL_BLUE ||  mob.getTemplateId() == BossConstants.PIERRE_NORMAL_RED ||  mob.getTemplateId() == BossConstants.PIERRE_NORMAL_PURPLE).findFirst().orElse(null);
        if (pierre == null) {
            pierre = getInstance().getField(BossConstants.PIERRE_CHAOS_FIELDID).getMobs().stream().filter(mob -> mob.getTemplateId() == BossConstants.PIERRE_CHAOS_BLUE ||  mob.getTemplateId() == BossConstants.PIERRE_CHAOS_RED ||  mob.getTemplateId() == BossConstants.PIERRE_CHAOS_PURPLE).findFirst().orElse(null);
        }
        return pierre;
    }
}
