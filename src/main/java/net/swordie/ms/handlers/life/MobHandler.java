package net.swordie.ms.handlers.life;

import net.swordie.ms.client.Client;
import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.quest.Quest;
import net.swordie.ms.client.character.skills.temp.CharacterTemporaryStat;
import net.swordie.ms.client.jobs.cygnus.DawnWarrior;
import net.swordie.ms.client.jobs.nova.AngelicBuster;
import net.swordie.ms.client.jobs.resistance.Xenon;
import net.swordie.ms.connection.InPacket;
import net.swordie.ms.connection.packet.MobPool;
import net.swordie.ms.connection.packet.MobSkillAttackInfo;
import net.swordie.ms.connection.packet.UserLocal;
import net.swordie.ms.connection.packet.WvsContext;
import net.swordie.ms.connection.packet.field.DemianFieldPacket;
import net.swordie.ms.connection.packet.field.FieldPacket;
import net.swordie.ms.connection.packet.field.LucidFieldPacket;
import net.swordie.ms.connection.packet.model.MessagePacket;
import net.swordie.ms.constants.BossConstants;
import net.swordie.ms.constants.FieldConstants;
import net.swordie.ms.constants.JobConstants;
import net.swordie.ms.constants.MobConstants;
import net.swordie.ms.events.Events;
import net.swordie.ms.handlers.Handler;
import net.swordie.ms.handlers.executors.EventManager;
import net.swordie.ms.handlers.header.InHeader;
import net.swordie.ms.handlers.life.modules.MobModule;
import net.swordie.ms.life.AffectedArea;
import net.swordie.ms.life.AppearingFoothold;
import net.swordie.ms.life.Life;
import net.swordie.ms.life.mob.EscortDest;
import net.swordie.ms.life.mob.Mob;
import net.swordie.ms.life.mob.MobStat;
import net.swordie.ms.life.mob.MobTemporaryStat;
import net.swordie.ms.life.mob.boss.demian.stigma.DemianStigma;
import net.swordie.ms.life.mob.boss.demian.stigma.DemianStigmaIncinerateObject;
import net.swordie.ms.life.mob.boss.demian.stigma.StigmaDeliveryType;
import net.swordie.ms.life.mob.boss.demian.sword.DemianFlyingSword;
import net.swordie.ms.life.mob.boss.demian.sword.DemianFlyingSwordPath;
import net.swordie.ms.life.mob.boss.demian.sword.DemianFlyingSwordPathIdx;
import net.swordie.ms.life.mob.boss.demian.sword.DemianFlyingSwordType;
import net.swordie.ms.life.mob.boss.will.WillModule;
import net.swordie.ms.life.mob.skill.MobSkill;
import net.swordie.ms.life.mob.skill.MobSkillID;
import net.swordie.ms.life.mob.skill.MobSkillModule;
import net.swordie.ms.life.mob.skill.MobSkillStat;
import net.swordie.ms.life.movement.MovementInfo;
import net.swordie.ms.loaders.MobData;
import net.swordie.ms.loaders.QuestData;
import net.swordie.ms.loaders.SkillData;
import net.swordie.ms.loaders.containerclasses.MobSkillInfo;
import net.swordie.ms.util.Position;
import net.swordie.ms.util.Rect;
import net.swordie.ms.util.Util;
import net.swordie.ms.util.container.Tuple;
import net.swordie.ms.world.field.Field;
import net.swordie.ms.world.field.Portal;
import net.swordie.ms.world.field.fieldeffect.FieldEffect;
import net.swordie.ms.world.field.fieldevents.timedfieldevents.elitechampions.IllusionFlowerEvent;
import net.swordie.ms.world.field.instance.instancehelper.boss.VonBonInstanceHelper;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.util.Arrays;
import java.util.List;
import java.util.concurrent.TimeUnit;

public class MobHandler {

    private static final Logger log = LogManager.getLogger();


    @Handler(op = InHeader.MOB_APPLY_CTRL)
    public static void handleMobApplyCtrl(Client c, InPacket inPacket) {
        // Mob controller logic is handled in char field enter/leaving, so this can be ignored for now.
        /*
        Char chr = c.getChr();
        Field field = chr.getField();
        int mobID = inPacket.decodeInt();
        Mob mob = (Mob) field.getLifeByObjectID(mobID);

        if (mob != null && field.getLifeToControllers().get(mob) == null) {
            // only update if there's no controller for the mob
            field.putLifeController(mob, chr);
            mob.notifyControllerChange(chr);
        }
        */
    }

    @Handler(op = InHeader.MOB_MOVE)
    public static void handleMobMove(Char chr, InPacket inPacket) {
        // CMob::GenerateMovePath (line 918 onwards)
        // Can be found in CMob::OnDoSkillOnHit (last sub)
        Field field = chr.getField();
        int objectID = inPacket.decodeInt();

        Life life = field.getLifeByObjectID(objectID);
        if (!(life instanceof Mob)) {
            return;
        }

        MobSkillAttackInfo msai = new MobSkillAttackInfo();
        Mob mob = (Mob) life;
        Char controller = field.getLifeToControllers().get(mob);

        var mobInfo = mob.getMobInfo();

        short moveID = inPacket.decodeShort();
        msai.actionAndDirMask = inPacket.decodeByte();
        msai.action = inPacket.decodeByte();

        msai.skillID = inPacket.decodeShort();
        msai.slv = inPacket.decodeShort();
        msai.option = inPacket.decodeInt();

        inPacket.decodeByte(); // new 223
        inPacket.decodeByte(); // new 223

        byte multiTargetForBallSize = inPacket.decodeByte();
        for (int i = 0; i < multiTargetForBallSize; i++) {
            Position pos = inPacket.decodePosition(); // list of ball positions
            msai.multiTargetForBalls.add(pos);
        }

        byte randTimeForAreaAttackSize = inPacket.decodeByte();
        for (int i = 0; i < randTimeForAreaAttackSize; i++) {
            short randTimeForAreaAttack = inPacket.decodeShort(); // could be used for cheat detection, but meh
            msai.randTimeForAreaAttacks.add(randTimeForAreaAttack);
        }

        msai.idk2 = inPacket.decodeInt();
        if (msai.idk2 > 0) {
            msai.ints2 = new int[11];
            for (int i = 0; i < msai.ints2.length; i++) {
                msai.ints2[i] = inPacket.decodeInt();
            }
        }

        // start new 199
        msai.idk1 = inPacket.decodeByte();
        msai.ints = new int[10];
        for (int i = 0; i < 10; i++) {
            msai.ints[i] = inPacket.decodeInt(); // looks like a mask
        }
        // end 199

        byte mask = inPacket.decodeByte();
        boolean targetUserIDFromSvr = (mask & 1) != 0;
        boolean isCheatMobMoveRand = ((mask >>> 4) & 1) != 0;
        int hackedCode = inPacket.decodeInt();
        int oneTimeActionCS = inPacket.decodeInt();
        int moveActionCS = inPacket.decodeInt();
        int hitExpire = inPacket.decodeInt();
        int unk = inPacket.decodeInt(); // new 218
        byte idk = inPacket.decodeByte();
        MovementInfo movementInfo = new MovementInfo(inPacket);
        movementInfo.applyTo(mob);

        // xd
        var idk1 = inPacket.decodeByte();
        var idk2 = inPacket.decodeInt();
        var idk3 = inPacket.decodeInt();
        var idk4 = inPacket.decodeInt();
        var idk5 = inPacket.decodeInt();
        var idk6 = inPacket.decodeInt();

        var idk9 = inPacket.decodeByte();
        var idk8 = inPacket.decodeInt();
        var idk10 = inPacket.decodeByte();
        msai.teleportDone = inPacket.decodeByte() != 0;
        var idk12 = inPacket.decodeByte();

        MobModule.processMobMove(chr, field, msai, mob, controller, moveID, movementInfo);
    }

    @Handler(op = InHeader.MOB_SKILL_DELAY_END)
    public static void handleMobSkillDelayEnd(Char chr, InPacket inPacket) {
        Life life = chr.getField().getLifeByObjectID(inPacket.decodeInt());
        if (!(life instanceof Mob)) {
            return;
        }
        Mob mob = (Mob) life;
        int skillID = inPacket.decodeInt();
        int slv = inPacket.decodeInt();
        int remainCount = 0; // only set in MobDelaySkill::UpdateSequenceMode
        if (inPacket.decodeByte() != 0) {
            remainCount = inPacket.decodeInt();
        }
        List<MobSkill> delays = mob.getSkillDelays();
        MobSkill ms = Util.findWithPred(delays, skill -> skill.getSkillID() == skillID && skill.getLevel() == slv);
        if (ms != null) {
            ms.applyEffect(mob, false);
        }

    }

    @Handler(op = InHeader.MOB_HIT_BY_MOB)
    public static void handleMobHitByMob(Char chr, InPacket inPacket) {
        Life attackerLife = chr.getField().getLifeByObjectID(inPacket.decodeInt());
        if (!(attackerLife instanceof Mob)) {
            return;
        }
        Mob attacker = (Mob) attackerLife;
        int damage = inPacket.decodeInt();

        Life hitLife = chr.getField().getLifeByObjectID(inPacket.decodeInt());
        if (!(hitLife instanceof Mob)) {
            return;
        }
        Mob hitMob = (Mob) hitLife;

        if (hitMob.getTemplateId() == IllusionFlowerEvent.ILLUSION_FLOWER) {
            damage = 10;
        }

        hitMob.damage(chr, damage);
        chr.getField().broadcastPacket(MobPool.damaged(hitMob.getObjectId(), damage, (byte) 1, hitMob.getHp(), hitMob.getMaxHp()));

    }

    @Handler(op = InHeader.MOB_ATTACK_MOB)
    public static void handleMobAttackMob(Char chr, InPacket inPacket) {
        Life attackerLife = chr.getField().getLifeByObjectID(inPacket.decodeInt());
        if (!(attackerLife instanceof Mob)) {
            return;
        }
        Mob attacker = (Mob) attackerLife;
        inPacket.decodeInt();

        Life hitLife = chr.getField().getLifeByObjectID(inPacket.decodeInt());
        if (!(hitLife instanceof Mob)) {
            return;
        }
        Mob hitMob = (Mob) hitLife;

        inPacket.decodeByte();
        inPacket.decodeByte();
        inPacket.decodeByte();

        var damage = inPacket.decodeInt();

        hitMob.damage(chr, damage);
        chr.getField().broadcastPacket(MobPool.damaged(hitMob.getObjectId(), damage, (byte) 1, hitMob.getHp(), hitMob.getMaxHp()));
    }

    @Handler(op = InHeader.USER_BAN_MAP_BY_MOB)
    public static void handleBanMapByMob(Client c, InPacket inPacket) {
        Field field = c.getChr().getField();
        int mobID = inPacket.decodeInt();
        Life life = field.getLifeByTemplateId(mobID);
        if (!(life instanceof Mob)) {
            return;
        }
        Mob mob = (Mob) life;
        var mobInfo = mob.getMobInfo();
        Char chr = c.getChr();
        if (mobInfo.isBanMap()) {
            if (mobInfo.getBanType() == 1) {
                if (mobInfo.getBanMsgType() == 1) { // found 2 types (1(most of ban types), 2).
                    String banMsg = mobInfo.getBanMsg();
                    if (banMsg != null && !banMsg.equals("")) {
                        chr.write(WvsContext.message(MessagePacket.systemMessage(banMsg)));
                    }
                }
                Tuple<Integer, String> banMapField = mobInfo.getBanMapFields().get(0);
                if (banMapField != null) {
                    Field toField = chr.getOrCreateFieldByCurrentInstanceType(banMapField.getLeft());
                    if (toField == null) {
                        return;
                    }
                    Portal toPortal = toField.getInfo().getPortalByName(banMapField.getRight());
                    if (toPortal == null) {
                        toPortal = toField.getInfo().getPortalByName("sp");
                    }

                    chr.warp(toField, toPortal);
                }
            }
        }
    }

    @Handler(op = InHeader.MOB_EXPLOSION_START)
    public static void handleMobExplosionStart(Client c, InPacket inPacket) {
        int mobID = inPacket.decodeInt();
        int charID = inPacket.decodeInt();
        int skillID = inPacket.decodeInt(); //tick
        Char chr = c.getChr();
        if (JobConstants.isXenon(chr.getJob()) && chr.hasSkill(Xenon.TRIANGULATION)) {
            skillID = Xenon.TRIANGULATION;
        } else if (JobConstants.isDawnWarrior(chr.getJob()) && chr.hasSkill(DawnWarrior.IMPALING_RAYS)) {
            skillID = DawnWarrior.IMPALING_RAYS_EXPLOSION;
        } else if (JobConstants.isAngelicBuster(chr.getJob()) && chr.hasSkill(AngelicBuster.LOVELY_STING)) {
            skillID = AngelicBuster.LOVELY_STING_EXPLOSION;
        } else {
            return;
        }
        Mob mob = (Mob) chr.getField().getLifeByObjectID(mobID);
        if (mob != null) {
            MobTemporaryStat mts = mob.getTemporaryStat();
            if ((mts.hasCurrentMobStat(MobStat.Explosion) && mts.getCurrentOptionsByMobStat(MobStat.Explosion).wOption == chr.getId())
                    || (mts.hasCurrentMobStat(MobStat.SoulExplosion) && mts.getCurrentOptionsByMobStat(MobStat.SoulExplosion).wOption == chr.getId())) {
                chr.write(UserLocal.explosionAttack(skillID, mob.getPosition(), mobID, 1));

                if (mts.hasCurrentMobStat(MobStat.SoulExplosion) && skillID == DawnWarrior.IMPALING_RAYS_EXPLOSION) {
                    mts.removeMobStat(MobStat.SoulExplosion);
                } else if (mts.hasCurrentMobStat(MobStat.Explosion)) {
                    mts.removeMobStat(MobStat.Explosion);
                }
            }
        }
    }

    @Handler(op = InHeader.MOB_LIFTING_END)
    public static void handleMobLiftingEnd(Char chr, InPacket inPacket) {
        Field field = chr.getField();
        if (field == null) {
            return;
        }
        int mobId = inPacket.decodeInt();
        Mob mob = (Mob) field.getLifeByObjectID(mobId);
        if (mob != null) {
            MobTemporaryStat mts = mob.getTemporaryStat();
            mts.removeMobStat(MobStat.Lifting);
        }
    }

    @Handler(op = InHeader.MOB_CREATE_AFFECTED_AREA)
    public static void handleMobCreateAffectedArea(Char chr, InPacket inPacket) {
        Field field = chr.getField();
        int mobId = inPacket.decodeInt();
        byte attackID = inPacket.decodeByte();
        Mob mob = (Mob) field.getLifeByObjectID(mobId);
        if (mob != null) {
            MobSkill mobAttack = mob.getAttackById(attackID);
            MobTemporaryStat mts = mob.getTemporaryStat();
            AffectedArea aa = new AffectedArea(0);
            Rect attRect = mobAttack.getRange().deepCopy();
            if (attRect == null) {
                log.info("Mob " + Integer.toString(mob.getTemplateId()) + "attempting attack " + Integer.toString(attackID) + "Doesn't have an attack range rect");
                return;
            }

            aa.setAaType((byte) 1); // From Mob Type

            //Flip rect around if mob is right
            if (!mob.isLeft()) {
                attRect = attRect.horizontalFlipAround(0);
            }

            attRect = attRect.move(mob.getX(), mob.getY());
            aa.setType(1);
            aa.setRect(attRect);
            aa.setPosition(mob.getPosition());
            aa.setMobOwnerOID(mob.getObjectId());
            aa.setMobOwnerTID(mob.getTemplateId());
            aa.setDuration(1);
            aa.setMobLv(mob.getLevel());
            aa.setPosition(mob.getPosition());
            log.info("Left" + aa.getRect().getLeft() + "right" + aa.getRect().getRight());

            EventManager.addEvent(() -> field.spawnAffectedArea(aa), 2300, TimeUnit.MILLISECONDS);
        }
    }

    @Handler(op = InHeader.USER_REQUEST_CHANGE_MOB_ZONE_STATE)
    public static void handleUserRequestChangeMobZoneState(Client c, InPacket inPacket) {
        Char chr = c.getChr();
        var field = chr.getField();
        int mobID = inPacket.decodeInt();
        Position pos = inPacket.decodePositionInt();
        Life life = chr.getField().getLifeByObjectID(mobID);
        if (life instanceof Mob) {
            Mob mob = (Mob) life;

            var zoneId = 0;
            switch (life.getTemplateId()) {
                case BossConstants.HARD_MAGNUS_TEMPLATE: // Hard magnus
                case BossConstants.NORMAL_MAGNUS_TEMPLATE: // Normal magnus
                case BossConstants.EASY_MAGNUS_TEMPLATE: // Easy magnus
                    double perc = mob.getHp() / (double) mob.getMaxHp();
                    if (perc <= 0.25) {
                        zoneId = 4;
                    } else if (perc <= 0.5) {
                        zoneId = 3;
                    } else if (perc <= 0.75) {
                        zoneId = 2;
                    } else {
                        zoneId = 1;
                    }
                    break;

                // Gloom
                case BossConstants.GLOOM:
                    zoneId = 1;
                    break;

                default:
                    log.error("Unhandled mob zone stat for mob template id " + life.getTemplateId());
            }

            if (zoneId == 0) {
                chr.getField().broadcastPacket(UserLocal.serverAckMobZoneStateChange(true));
                return;
            }

            var mobInfo = MobData.getMobInfoById(life.getTemplateId());
            if (!mobInfo.getMobZones().containsKey(zoneId)) {
                chr.getField().broadcastPacket(UserLocal.serverAckMobZoneStateChange(true));
                return;
            }

            field.checkCharsInMobZone();

            // Only changeZone
            if (mob.getCurZoneDataType() != zoneId) {
                if (MobConstants.isMagnus(mob.getTemplateId())) {
                    mob.changePhase(zoneId);
                }
                mob.changeZoneId(zoneId);
            }
        }

        chr.getField().broadcastPacket(UserLocal.serverAckMobZoneStateChange(true));
    }

    @Handler(ops = {InHeader.MOB_SELF_DESTRUCT, InHeader.MOB_SELF_DESTRUCT_COLLISION_GROUP})
    public static void handleMobSelfDestruct(Char chr, InPacket inPacket) {
        int mobID = inPacket.decodeInt();
        Field field = chr.getField();
        Mob mob = (Mob) field.getLifeByObjectID(mobID);
        if (mob != null && mob.getMobInfo().isSelfDestruction()) {
            if (mob.getTemplateId() == 8920004) { //Spirit bombs doing 45% max hp damage
                chr.damage((int) (chr.getMaxHP() * 0.45D), true);
            }
            mob.selfDestruct();
        }
    }

    @Handler(op = InHeader.MOB_AREA_ATTACK_DISEASE)
    public static void handleMobAreaAttackDisease(Char chr, InPacket inPacket) {
        int mobID = inPacket.decodeInt();
        int attackIdx = inPacket.decodeInt();
        Position areaPos = inPacket.decodePositionInt();
        int nextTickPossible = inPacket.decodeInt();
        MobSkillModule.createAreaPoison(chr, mobID, attackIdx, areaPos);
    }

    @Handler(op = InHeader.MOB_REQUEST_ESCORT_INFO)
    public static void handleMobRequestEscortInfo(Char chr, InPacket inPacket) {
        Field field = chr.getField();
        int objectID = inPacket.decodeInt();
        Life life = field.getLifeByObjectID(objectID);
        if (!(life instanceof Mob)) {
            return;
        }
        Mob mob = (Mob) life;
        if (mob.getMobInfo().isEscortMob()) {

            // [Grand Athenaeum] Ariant : Escort Hatsar's Servant
            if (mob.getTemplateId() == 8230000) {
                mob.addEscortDest(-1616, 233, -1);
                mob.addEscortDest(1898, 233, 0);
                mob.escortFullPath(-1);
                chr.write(FieldPacket.removeBlowWeather());
                chr.write(FieldPacket.blowWeather(5120118, "I'm glad you're here, " + chr.getName() + "! Please get rid of these pesky things."));
            }
        }
    }

    @Handler(op = InHeader.MOB_ESCORT_COLLISION)
    public static void handleMobEscortCollision(Char chr, InPacket inPacket) {
        Field field = chr.getField();
        int objectID = inPacket.decodeInt();
        Life life = field.getLifeByObjectID(objectID);
        if (!(life instanceof Mob)) {
            return;
        }
        Mob mob = (Mob) life;
        int collision = inPacket.decodeInt();

        EscortDest escortDest = mob.getEscortDest().get(collision - 1);
        if (escortDest != null) {
            // mob movement don't updating mob position so I disabled it until it will.
            /*if (escortDest.getDestPos().getX() != mob.getPosition().getX() || escortDest.getDestPos().getY() != mob.getPosition().getY()) {
             return;
             }*/

            // [Grand Athenaeum] Ariant : Escort Hatsar's Servant
            if (mob.getTemplateId() == 8230000) {
                if (collision == 1) {
                    chr.write(FieldPacket.removeBlowWeather());
                    chr.write(FieldPacket.blowWeather(5120118, "I'm glad you're here, " + chr.getName() + "! Please get rid of these pesky things."));
                } else if (collision == 2) {
                    chr.write(FieldPacket.fieldEffect(FieldEffect.getFieldEffectFromWz("quest/party/clear", 0)));
                    chr.write(FieldPacket.fieldEffect(FieldEffect.playSound("Party1/Clear", 100)));
                    chr.write(FieldPacket.removeBlowWeather());
                    chr.write(FieldPacket.blowWeather(5120118, "Looks like we all arrived in one piece. Now, get out of here before those pesky things start bothering you again."));
                    Quest quest = chr.getQuestManager().getQuestById(32628);
                    if (quest == null) {
                        quest = QuestData.createQuestFromId(32628);
                        chr.getQuestManager().addQuest(quest);
                    }
                    quest.setProperty("guard1", "1");// needed to complete quest
                    chr.write(WvsContext.message(MessagePacket.questRecordExMessage(quest)));
                }
            }
            mob.setCurrentDestIndex(collision);
            if (collision == mob.getEscortDest().size()) {
                mob.clearEscortDest();// finished escort
            }
        }
    }

    @Handler(op = InHeader.DEMIAN_OBJECT_NODE_END)
    public static void handleDemianObjectNodeEnd(Char chr, InPacket inPacket) {
        Field field = chr.getField();

        DemianFlyingSword flyingSword = (DemianFlyingSword) field.getLifeByObjectID(inPacket.decodeInt());
        short pathIdx = inPacket.decodeShort(); // pathIdx
        short nodeIdx = inPacket.decodeShort(); // nodeIdx that just ended
        Position swordPosition = inPacket.decodePositionInt(); // sword position
        Position targetChrPosition = inPacket.decodePositionInt(); // targeted character position

        flyingSword.setPosition(swordPosition);
        DemianFlyingSwordPathIdx path = DemianFlyingSwordPathIdx.getByVal(pathIdx);
        if (nodeIdx == flyingSword.getDemianFlyingSwordPath().getNodes().size() - 2 || path.equals(DemianFlyingSwordPathIdx.Creation)) {
            switch (path) {
                case Creation: // Creation -> Bouncing1 or Bouncing2
                    flyingSword.setDemianFlyingSwordPath(DemianFlyingSwordPath.flyingSwordBouncingPath(DemianFlyingSwordPath.flyingSwordPathBouncing2));
                    EventManager.addEvent(flyingSword::startPath, 1800, TimeUnit.MILLISECONDS);
                    break;
                case Bouncing1: // Bouncing -> Targeting
                case Bouncing2: // Bouncing -> Targeting
                    flyingSword.setDemianFlyingSwordPath(DemianFlyingSwordPath.flyingSwordTargetingPath(targetChrPosition));
                    flyingSword.startPath();
                    break;
                case Targeting: // Targeting -> AA and FlyingSwordTarget OutPacket
                    flyingSword.target();

                    // Create Affected Area
                    Mob mob = flyingSword.getOwner();
                    if (mob == null) {
                        return;
                    }
                    MobSkillInfo msi = SkillData.getMobSkillInfoByIdAndLevel(131, 28);
                    AffectedArea aa = AffectedArea.getMobAA(mob, (short) 131, (short) 28, SkillData.getMobSkillInfoByIdAndLevel(131, 28));
                    Rect rect = new Rect(msi.getLt(), msi.getRb());
                    Position position = new Position(swordPosition.getX(), 16);
                    aa.setPosition(position);
                    aa.setRect(position.getRectAround(rect));
                    aa.setIdk(flyingSword.getObjectId());
                    aa.setOption(5);
                    field.spawnAffectedArea(aa);
                    break;
            }

        }
    }

    @Handler(op = InHeader.DEMIAN_OBJECT_ERR__RECREATE)
    public static void handleDemianObjectErrRecreate(Char chr, InPacket inPacket) {
        Field field = chr.getField();

        DemianFlyingSword sword = (DemianFlyingSword) field.getLifeByObjectID(inPacket.decodeInt());
        DemianFlyingSwordType type = DemianFlyingSwordType.getValBy(inPacket.decodeInt());

        field.removeLife(sword);

        sword.startPath();
        sword.target();
        Mob mob = field.getMobs().stream().findFirst().orElse(null);
        if (mob != null) {
            DemianFlyingSword newSword = DemianFlyingSword.createDemianFlyingSword(chr, mob);
            newSword.setSwordType(type);
            newSword.setPosition(sword.getPosition());
            newSword.setDemianFlyingSwordPath(sword.getDemianFlyingSwordPath());
            field.spawnLife(newSword, null);
            newSword.startPath();
            newSword.target();
        }

    }

    @Handler(op = InHeader.STIGMA_DELIVERY_REQUEST)
    public static void handleStigmaDeliveryRequest(Char chr, InPacket inPacket) {
        Field field = chr.getField();

        int stigmaDelivery = inPacket.decodeInt();
        int unk = inPacket.decodeInt();
        int chrId = inPacket.decodeInt();
        StigmaDeliveryType stigmaDeliveryType = StigmaDeliveryType.getValBy(stigmaDelivery);

        if (stigmaDeliveryType.equals(StigmaDeliveryType.Success)) {
            DemianStigmaIncinerateObject o = (DemianStigmaIncinerateObject) field.getLifes().values().stream().filter(l -> l instanceof DemianStigmaIncinerateObject).findFirst().orElse(null);
            if (o == null) {
                return;
            }
            field.removeLife(o); // remove pillar
            DemianStigma.resetStigma(chr); // reset stigma
            field.broadcastPacket(DemianFieldPacket.stigmaEffect(chr.getId(), false)); // show stigma reset effect
        }
    }

    @Handler(op = InHeader.LOTUS_FOOTHOLD_OBJECT_FALL_ACK)
    public static void handleLotusFootholdObjectFallAck(Char chr, InPacket inPacket) {
        Field field = chr.getField();
        AppearingFoothold afh = (AppearingFoothold) field.getLifeByObjectID(inPacket.decodeInt());
        boolean hitByUser = inPacket.decodeInt() != 0;
        if (!hitByUser && afh != null) {
            afh.show(chr);
        }
    }

    @Handler(op = InHeader.LUCID_WELCOME_BARRAGE_END_REQUEST)
    public static void handleLucidWelcomeBarrageEndRequest(Char chr, InPacket inPacket) {
        chr.write(LucidFieldPacket.lucidStainedGlassOnOff(true, Arrays.asList("Bblue1", "Bblue2", "Bblue3", "Bred1", "Bred2", "Bred3", "Mred2", "Mred3", "Myellow1", "Myellow2", "Myellow3")));
        chr.write(LucidFieldPacket.lucidFlyingMode(false));
    }

    @Handler(op = InHeader.OBSTACLE_ATOM_COLLISION)
    public static void handleObstacleAtomCollision(Char chr, InPacket inPacket) {
        inPacket.decodeInt();
        int atomType = inPacket.decodeInt(); // actually key
        var hitType = inPacket.decodeInt(); // 1 = hit player, 2 = hit FH
        var pos = inPacket.decodePositionInt();

        var field = chr.getField();
        if (hitType == 1 && FieldConstants.isWillP1Field(field.getId())) {
            WillModule.onWillFieldAtomCollision(field, atomType);
        }
    }

    @Handler(op = InHeader.TIMER_GAUGE_TIMEOUT)
    public static void handleTimerGaugeTimeout(Char chr, InPacket inPacket) {
        if (FieldConstants.isVonBonInstanceField(chr.getFieldID()) && chr.getInstance() != null) {
            if (chr.getInstance().getInstanceHelper() != null) {
                ((VonBonInstanceHelper) chr.getInstance().getInstanceHelper()).onTimerGaugeTimeout(chr);
            }
        }
    }

    @Handler(op = InHeader.FALLING_CATCHER_HACK_CHECK)
    public static void handleFallingCatcherHackCheck(Char chr, InPacket inPacket) {
        if (chr.isDead()) {return;}
        boolean caught = inPacket.decodeInt() == 1;
        if (caught) {
            if (FieldConstants.isPierreField(chr.getFieldID())) {
                if (!chr.getTemporaryStatManager().hasStat(CharacterTemporaryStat.Lapidification) && !chr.getTemporaryStatManager().hasStat(CharacterTemporaryStat.Invincible)) {
                    chr.getOffenseManager().addOffense("caught by falling catcher hack check but doesn't have cap debuff");
                }
            }
        }
    }

    @Handler(op = InHeader.MOB_UPDATE_FIXED_MOVE_DIR)
    public static void handleMobUpdateFixedMoveDir(Char chr, InPacket inPacket) {
        var objId = inPacket.decodeInt();

        var mob = chr.getField().getLifeByObjectID(Mob.class, objId);

        if (mob != null) {
            var field = mob.getField();
            var fieldId = field.getId();

            Events.onMobFixedMoveDirUpdate(mob);

            mob.die(false);
        }
    }

    @Handler(op = InHeader.MOB_CREATE_FIRE_WALK)
    public static void handleMobCreateFireWalk(Char chr, InPacket inPacket) {
        int mobID = inPacket.decodeInt();
        int idk1 = inPacket.decodeInt();
        int idk2 = inPacket.decodeInt();
        short x = inPacket.decodeShort();
        short y = inPacket.decodeShort();
        Mob mob = (Mob) chr.getField().getLifeByObjectID(mobID);
        if (mob != null) {
            Position pos = new Position(x, 551);
            if (pos.distanceTo(mob.getPosition()) > 400) {
                chr.getOffenseManager().addOffense("Distance between expected and actual value too big in MOB_CREATE_FIRE_WALK");
            }
            MobSkillInfo msi = SkillData.getMobSkillInfoByIdAndLevel(MobSkillID.AreaPoison.getVal(), 16);
            AffectedArea aa = new AffectedArea(0);
            aa.setSkillID(MobSkillID.AreaPoison.getVal());
            aa.setSlv(16);
            aa.setAaType((byte) 1);
            aa.setFh(mob.getFh());
            aa.setMobOwnerOID(mob.getObjectId());
            aa.setMobOwnerTID(mob.getTemplateId());
            aa.setRect(pos.getRectAround(msi.getRect()));
            aa.setPosition(pos);
            aa.setDuration(msi.getSkillStatIntValue(MobSkillStat.time) * 1000);
            mob.getField().spawnAffectedArea(aa);
        }
    }

    @Handler(op = InHeader.MOB_AFTER_DEAD_REQUEST)
    public static void handleMobAfterDeadRequest(Char chr, InPacket inPacket) {
        int mobID = inPacket.decodeInt();
        Mob mob = (Mob) chr.getField().getLifeByObjectID(mobID);
        if (mob != null) {
            mob.disappear();
        }

    }
}
