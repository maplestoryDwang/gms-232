package net.swordie.ms.handlers.life.modules;

import net.swordie.ms.Server;
import net.swordie.ms.client.character.Char;
import net.swordie.ms.connection.packet.MobPool;
import net.swordie.ms.connection.packet.MobSkillAttackInfo;
import net.swordie.ms.connection.packet.UserPacket;
import net.swordie.ms.constants.BossConstants;
import net.swordie.ms.constants.GameConstants;
import net.swordie.ms.constants.MobConstants;
import net.swordie.ms.enums.ChatType;
import net.swordie.ms.enums.ProgressMessageColourType;
import net.swordie.ms.enums.ProgressMessageFontType;
import net.swordie.ms.events.Events;
import net.swordie.ms.handlers.executors.EventManager;
import net.swordie.ms.life.AffectedArea;
import net.swordie.ms.life.mob.Mob;
import net.swordie.ms.life.mob.skill.*;
import net.swordie.ms.life.movement.MovementInfo;
import net.swordie.ms.loaders.SkillData;
import net.swordie.ms.loaders.containerclasses.MobSkillInfo;
import net.swordie.ms.util.Rect;
import net.swordie.ms.util.Util;
import net.swordie.ms.world.field.Field;

import java.util.ArrayList;
import java.util.List;

public class MobModule {

    public static void processMobMove(Char chr, Field field, MobSkillAttackInfo msai, Mob mob, Char controller, short moveId, MovementInfo movementInfo) {
        int skillId = msai.skillID;
        int slv = msai.slv;
        int afterAttack = -1;
        int afterAttackCount = 0;

        boolean didSkill = false;
        var preparedSkill = mob.getPreparedSkill();
        if (isDoingSkill(msai, mob, slv)) {
            // Apply effect from the prepared skill.
            MobSkill mobSkill = mob.findPrepareSkill(msai);

            // skill prepared from attack
            if (mobSkill == null) {
                mobSkill = mob.getPreparedSkillFromAttack();
                if (mobSkill != null) {
                    mob.setPreparedSkillFromAttack(null);
                    skillId = mobSkill.getSkillID();
                    slv = mobSkill.getLevel();
                }
            }

            if (mobSkill == null) {
                chr.chatMessage(ChatType.Mob, String.format("Could not find prepared mob skill with id %d, slv %d for mob %d.",
                        skillId, slv, mob.getTemplateId()));
            } else {
                didSkill = true;
                doSkill(chr, field, mob, skillId, slv, mobSkill);
                afterAttack = mobSkill.getAfterAttack();
                afterAttackCount = mobSkill.getAfterAttackCount();

                if (afterAttackCount > 0) {
                    logToChars(field, mob, String.format("Prepared afterAttack action %s", mobSkill.getAfterAttack()));
                }
            }
            skillId = 0;
            slv = 0;
        } else if (canPrepareMobSkill(mob, slv)) {
            // prepare next skill
            var mobSkill = mob.getForcedSkill();
            if (mobSkill != null) {
                mob.setForcedSkill(null);
            }

            // no forced skill, grab random skill
            if (mobSkill == null) {
                mobSkill = mob.getRandomAvailableSkill();
            }
            if (mobSkill != null) {
                skillId = mobSkill.getSkillID();
                slv = mobSkill.getLevel();
                mob.setPreparedSkill(mobSkill);

                logToChars(field, mob, String.format("Prepared skill %s (%s), slv %s",
                        skillId, MobSkillID.getMobSkillIDByVal(skillId), slv));
            }
        } else if (preparedSkill != null) {
            skillId = preparedSkill.getSkillID();
            slv = preparedSkill.getLevel();
        }

        mob.setInAttack(false);

        if (!didSkill) {
            // didn't do a skill, so ensure that the attack gets properly formed
            int attackIdx = (msai.action + msai.actionAndDirMask - 27) / 2;
            var mobAttack = mob.getAttackById(attackIdx);
            if (mobAttack != null) {
                logToChars(field, mob, String.format("Did attack %s", mobAttack.getSkillIdx()));

                var mobAttackSkill = prepareNextAttack(mob, attackIdx);
                if (mobAttackSkill != null) {
                    afterAttack = mobAttackSkill.getAfterAttack();
                    afterAttackCount = mobAttackSkill.getAfterAttackCount();

                    if (afterAttackCount > 0) {
                        logToChars(field, mob, String.format("Prepared attack %s", mobAttack.getSkillIdx()));
                    }
                }

                if (mobAttack.getRange() != null) {
                    handleRange(mob, mobAttack);
                }

                var cswd = mobAttack.getCallSkillWithData();
                if (cswd != null) {
                    var cswdPreparedSkill = mob.getSkillByMobSkillInfo(cswd.getSkill(), cswd.getLevel());
                    if (cswdPreparedSkill != null) {
                        cswdPreparedSkill.setDelay(cswd.getDelay());

                        mob.setPreparedSkillFromAttack(cswdPreparedSkill);
                        mob.setForcedSkill(cswdPreparedSkill);
                        logToChars(field, mob, String.format("Prepared attack -> skill %s (%s), slv %s",
                                cswd.getSkill(), MobSkillID.getMobSkillIDByVal(cswd.getSkill()), cswd.getLevel()));

                    }
                }
                var callSkills = mobAttack.getCallSkills();
                if (callSkills != null) {
                    for (CallSkillWithData callSkill : callSkills) {
                        //Some additional skills aren't owned by mob, so we need to make our own skill (Queen/Vellum)
                        MobSkill ms = new MobSkill();
                        ms.setSkillID(callSkill.getSkill());
                        ms.setLevel(callSkill.getLevel());
                        if (callSkill.getDelay() == 0) {
                            ms.applyEffect(mob, true);
                        } else {
                            EventManager.addEvent(() -> ms.applyEffect(mob, true), callSkill.getDelay());
                        }
                    }
                }
            }
        }

        if (mob.getAttackCooldown() > 0) {
            mob.setAttackCooldown(mob.getAttackCooldown() - 1);
        }

        boolean nextAttackPossible = !mob.isBlockEverything()
                && !mob.isBlockAttack()
                && mob.getAttackCooldown() == 0
                && Util.succeedProp(GameConstants.MOB_ATTACK_CHANCE);

        mob.setInAttack(afterAttackCount > 0);

        chr.write(MobPool.ctrlAck(mob, nextAttackPossible, moveId, skillId, (short) slv, -1));

        if (afterAttackCount > 0) {
            chr.write(MobPool.setAfterAttack(mob.getObjectId(), (short) afterAttack, msai.action, afterAttackCount, mob.isLeft()));
        }
        field.checkMobInAffectedAreas(mob);
        field.checkCharsInMobZone(mob);

        field.broadcastPacket(MobPool.move(mob, msai, movementInfo), controller);



        Events.onMobMove(mob);


    }

    private static boolean canPrepareMobSkill(Mob mob, int slv) {
        return slv == 0 && mob.hasSkillDelayExpired() && !mob.isInAttack() && mob.getPreparedSkill() == null;
    }

    private static MobSkill prepareNextAttack(Mob mob, int attackIdx) {
        if (mob.hasAttackOffCooldown(attackIdx)) {
            MobSkill ms = mob.getAttackById(attackIdx);
            if (ms != null && ms.getAfterAttack() >= 0) {
                mob.setInAttack(true);
                return ms;
            } else {
                if (attackIdx > 0) {
                    int min = GameConstants.MOB_ATTACK_COOLDOWN_MIN;
                    int max = GameConstants.MOB_ATTACK_COOLDOWN_MAX;
                    if (mob.isBoss()) {
                        max = max / 2 + 1;
                    }
                    mob.setAttackCooldown(Util.getRandom(min, max));
                }
            }
        }
        return null;
    }

    private static boolean isDoingSkill(MobSkillAttackInfo msai, Mob mob, int slv) {
        return (msai.skillID >= MobSkillID.PowerUp.getVal() && msai.skillID <= MobSkillID.No.getVal()
                && slv > 0
                && mob.hasSkillDelayExpired()
                && !mob.isInAttack()) || mob.getPreparedSkillFromAttack() != null;
    }

    private static void doSkill(Char chr, Field field, Mob mob, int skillID, int slv, MobSkill mobSkill) {
        MobSkillInfo msi = SkillData.getMobSkillInfoByIdAndLevel(skillID, slv);
        long curTime = System.currentTimeMillis();
        long interval = msi.getSkillStatIntValue(MobSkillStat.interval) * 1000L;
        long nextUseableTime = curTime + interval;
        String broadCastScreenMsg = msi.getMobSkillStats().get(MobSkillStat.broadCastScreenMsg);
        if (broadCastScreenMsg != null) {
            field.broadcastPacket(UserPacket.progressMessageFont(ProgressMessageFontType.Normal, 16, ProgressMessageColourType.Yellow, 2000, broadCastScreenMsg));
        }
        logToChars(field, mob, String.format("Did skill with ID %d (%s), level = %d", mobSkill.getSkillID(), MobSkillID.getMobSkillIDByVal(mobSkill.getSkillID()), mobSkill.getLevel()));
        mob.putSkillCooldown(skillID, slv, nextUseableTime);

        int skillAfter = mobSkill.getSkillAfter();
        if (skillAfter == 0) {
            skillAfter = msi.getSkillStatIntValue(MobSkillStat.skillAfter);
        }

        if (skillAfter > 0) {
            mob.getSkillDelays().add(mobSkill);
            mob.setSkillDelay(skillAfter + MobConstants.MOB_SKILL_DEFAULT_DELAY);

            List<Rect> rects = new ArrayList<>();
            MobSkill.extraSkillDelayInfo(mob, msi, rects); // adds rects according to MSI
            field.broadcastPacket(MobPool.setSkillDelay(mob.getObjectId(), skillAfter, skillID, slv, msi.getSkillStatIntValue(MobSkillStat.areaSequenceDelay), rects));
        } else {
            mobSkill.applyEffect(mob, false);
            mob.setSkillDelay(MobConstants.getSkillDelay(mob.getTemplateId()));
        }

        mob.setPreparedSkill(null);
    }

    private static void logToChars(Field field, Mob mob, String str) {
        if (Server.DEBUG) {
            for (var chr : field.getChars()) {
                chr.chatMessage(ChatType.Mob, String.format("[Mob | TID = %s | OID = %s] %s", mob.getTemplateId(), mob.getObjectId(), str));
            }
        }
    }

    public static void afterMobSpawnByRevive(Mob mob) {
        if (MobConstants.isZakumArmRegen(mob.getTemplateId())) {
            mob.setForcedSkill(mob.getSkillByIdx(0));
        }
    }

    private static void handleRange(Mob mob, MobSkill attack) {
        if (mob.getTemplateId() == BossConstants.CHAOS_CRIMSON_QUEEN_JOYOUS && attack.getAction() == 2) { //Start of suck attack

            //Make aa on rect
            AffectedArea aa = new AffectedArea(0);
            Rect rect = attack.getRange();
            if (!mob.isLeft()) {
                rect = rect.horizontalFlipAround(0);
            }
            rect = rect.move(mob.getX(), mob.getY());
            aa.setAaType((byte) 1); // From Mob Type
            aa.setRect(rect);
            aa.setPosition(mob.getPosition());
            aa.setDuration(1);
            aa.setMobOwnerTID(mob.getObjectId());
            aa.setMobOwnerTID(mob.getTemplateId());
            aa.setMobLv(mob.getLevel());
            mob.getField().spawnAffectedArea(aa);
        }
    }
}
