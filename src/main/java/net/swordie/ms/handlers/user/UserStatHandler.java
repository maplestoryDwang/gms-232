package net.swordie.ms.handlers.user;

import net.swordie.ms.client.Client;
import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.ExtendSP;
import net.swordie.ms.client.character.hyperstats.HyperStatsModule;
import net.swordie.ms.client.character.skills.Skill;
import net.swordie.ms.client.character.skills.info.SkillInfo;
import net.swordie.ms.connection.InPacket;
import net.swordie.ms.connection.packet.UserLocal;
import net.swordie.ms.connection.packet.WvsContext;
import net.swordie.ms.connection.packet.field.FieldPacket;
import net.swordie.ms.constants.GameConstants;
import net.swordie.ms.constants.JobConstants;
import net.swordie.ms.constants.SkillConstants;
import net.swordie.ms.enums.InstanceTableType;
import net.swordie.ms.enums.Stat;
import net.swordie.ms.handlers.Handler;
import net.swordie.ms.handlers.header.InHeader;
import net.swordie.ms.loaders.SkillData;
import net.swordie.ms.loaders.containerclasses.MakingSkillRecipe;
import net.swordie.ms.world.field.Field;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static net.swordie.ms.client.character.skills.temp.CharacterTemporaryStat.CapDebuff;

public class UserStatHandler {

    private static final Logger log = LogManager.getLogger();

    @Handler(op = InHeader.USER_SKILL_UP_REQUEST)
    public static void handleUserSkillUpRequest(Client c, InPacket inPacket) {
        Char chr = c.getChr();
        inPacket.decodeInt(); // tick
        int skillID = inPacket.decodeInt();
        int amount = inPacket.decodeInt();

        if (amount < 1) {
            chr.dispose();
            return;
        }
        // seperate skill/current skills for adding stuff to the base cache if everything is succesful
        Skill skill = SkillData.getSkillDeepCopyById(skillID);
        Skill curSkill = chr.getSkill(skillID);
        byte jobLevel = (byte) JobConstants.getJobLevel((short) skill.getRootId());
        if (JobConstants.isZero((short) skill.getRootId())) {
            jobLevel = JobConstants.getJobLevelByZeroSkillID(skillID);
        }
        Map<Stat, Object> stats;
        int rootId = skill.getRootId();
        boolean beginnerJob = JobConstants.isBeginnerJob((short) rootId);

        if ((!beginnerJob && !SkillConstants.isValidSkillForJobAndJobLevel(skillID, chr.getJob(), jobLevel))
                || beginnerJob && !JobConstants.isMatchingForBeginnerjob(chr.getJob(), rootId)
                || SkillConstants.isSkillFromItem(skillID)) {
            chr.getOffenseManager().addOffense(String.format("Character %d tried adding an invalid skill (job %d, skill id %d)",
                    chr.getId(), rootId, skillID));
            return;
        }
        if (JobConstants.isBeginnerJob((short) rootId)) {
            stats = new HashMap<>();
            int spentSp = 0;
            for (Skill s : chr.getSkills()) {
                if (SkillConstants.isBeginnerSpAddableSkill(s.getSkillId())) {
                    int currentLevel = s.getCurrentLevel();
                    spentSp += currentLevel;
                }
            }
            int totalSp;
            if (JobConstants.isResistance((short) skill.getRootId())) {
                totalSp = Math.min(chr.getLevel(), GameConstants.RESISTANCE_SP_MAX_LV) - 1; // sp gained from 2~10
            } else {
                totalSp = Math.min(chr.getLevel(), GameConstants.BEGINNER_SP_MAX_LV) - 1; // sp gained from 2~7
            }
            if (totalSp - spentSp >= amount) {
                int curLevel = curSkill == null ? 0 : curSkill.getCurrentLevel();
                int max = curSkill == null ? skill.getMaxLevel() : curSkill.getMaxLevel();
                if (max == 0) {
                    // some beginner skills have no max level, default is 3
                    max = 3;
                }
                var newLevel = curLevel + amount > max ? max : curLevel + amount;
                skill.setCurrentLevel(newLevel);
                for (int extraLvSkill : SkillConstants.getAutoLevelSkillsBySkillID(skillID)) {
                    Skill extraSkill = chr.getSkill(extraLvSkill, true);
                    if (extraSkill == null) {
                        continue;
                    }
                    extraSkill.setCurrentLevel(newLevel);
                }
            }
        } else if (JobConstants.isExtendSpJob(chr.getJob())) {
            ExtendSP esp = chr.getAvatarData().getCharacterStat().getExtendSP();
            int currentSp = esp.getSpByJobLevel(jobLevel);
            if (currentSp >= amount) {
                int curLevel = curSkill == null ? 0 : curSkill.getCurrentLevel();
                int max = curSkill == null ? skill.getMaxLevel() : curSkill.getMaxLevel();
                var newLevel = curLevel + amount > max ? max : curLevel + amount;
                skill.setCurrentLevel(newLevel);
                for (int extraLvSkill : SkillConstants.getAutoLevelSkillsBySkillID(skillID)) {
                    Skill extraSkill = chr.getSkill(extraLvSkill, true);
                    if (extraSkill == null) {
                        continue;
                    }
                    extraSkill.setCurrentLevel(newLevel);
                }
                esp.setSpToJobLevel(jobLevel, currentSp - amount);
                stats = new HashMap<>();
                stats.put(Stat.sp, esp);
            } else {
                chr.getOffenseManager().addOffense(String.format("Character %d tried adding a skill without having the required amount of sp"
                                + " (required %d, has %d)",
                        chr.getId(), currentSp, amount));
                return;
            }
        } else {
            int currentSp = chr.getAvatarData().getCharacterStat().getSp();
            if (currentSp >= amount) {
                int curLevel = curSkill == null ? 0 : curSkill.getCurrentLevel();
                int max = curSkill == null ? skill.getMaxLevel() : curSkill.getMaxLevel();
                var newLevel = curLevel + amount > max ? max : curLevel + amount;
                skill.setCurrentLevel(newLevel);
                for (int extraLvSkill : SkillConstants.getAutoLevelSkillsBySkillID(skillID)) {
                    Skill extraSkill = chr.getSkill(extraLvSkill, true);
                    if (extraSkill == null) {
                        continue;
                    }
                    extraSkill.setCurrentLevel(newLevel);
                }
                chr.getAvatarData().getCharacterStat().setSp(currentSp - amount);
                stats = new HashMap<>();
                stats.put(Stat.sp, chr.getAvatarData().getCharacterStat().getSp());
            } else {
                chr.getOffenseManager().addOffense(String.format("Character %d tried adding a skill without having the required amount of sp"
                                + " (required %d, has %d)",
                        chr.getId(), currentSp, amount));
                return;
            }
        }
        if (stats != null) {
            c.write(WvsContext.statChanged(stats));
            chr.addSkill(skill);
            c.write(WvsContext.changeSkillRecordResult(skill));
        } else {
            chr.getOffenseManager().addOffense(String.format("skill stats are null (%d)", skillID));
            chr.dispose();
        }

        if (SkillConstants.isTimerSkill(skillID)) {
            chr.getJobHandler().updateTimerSkill();
        }
    }


    @Handler(op = InHeader.USER_ABILITY_UP_REQUEST)
    public static void handleUserAbilityUpRequest(Client c, InPacket inPacket) {
        Char chr = c.getChr();
        if (chr.getStat(Stat.ap) <= 0) {
            return;
        }
        inPacket.decodeInt(); // tick
        short stat = inPacket.decodeShort();
        Stat charStat = Stat.getByVal(stat);
        short amount = 1;
        boolean isHpOrMp = false;
        if (charStat == Stat.mmp || charStat == Stat.mhp) {
            isHpOrMp = true;
            amount = 20;
        }
        chr.addStat(charStat, amount);
        chr.addStat(Stat.ap, (short) -1);
        Map<Stat, Object> stats = new HashMap<>();
        if (isHpOrMp) {
            stats.put(charStat, chr.getStat(charStat));
        } else {
            stats.put(charStat, (short) chr.getStat(charStat));
        }
        stats.put(Stat.ap, (short) chr.getStat(Stat.ap));
        c.write(WvsContext.statChanged(stats));
        chr.dispose();

        chr.initBaseStats();
    }

    @Handler(op = InHeader.USER_ABILITY_MASS_UP_REQUEST)
    public static void handleUserAbilityMassUpRequest(Client c, InPacket inPacket) {
        Char chr = c.getChr();
        inPacket.decodeInt(); // tick
        int type = inPacket.decodeInt();
        Stat charStat = null;
        short amount;
        if (type == 1) {
            charStat = Stat.getByVal(inPacket.decodeShort());
        } else if (type == 2) {
            inPacket.decodeInt();
            inPacket.decodeInt();
            inPacket.decodeInt();
            charStat = Stat.getByVal(inPacket.decodeShort());
        }
        inPacket.decodeInt();
        inPacket.decodeShort();
        amount = inPacket.decodeShort();
        short addStat = amount;
        if (chr.getStat(Stat.ap) < amount) {
            return;
        }
        boolean isHpOrMp = false;
        if (charStat == Stat.mmp || charStat == Stat.mhp) {
            isHpOrMp = true;
            addStat *= 20;
        }
        chr.addStat(charStat, addStat);
        chr.addStat(Stat.ap, (short) -amount);
        Map<Stat, Object> stats = new HashMap<>();
        if (isHpOrMp) {
            stats.put(charStat, chr.getStat(charStat));
        } else {
            stats.put(charStat, (short) chr.getStat(charStat));
        }
        stats.put(Stat.ap, (short) chr.getStat(Stat.ap));
        c.write(WvsContext.statChanged(stats));
        chr.dispose();

        chr.initBaseStats();
    }

    @Handler(op = InHeader.USER_CHANGE_STAT_REQUEST)
    public static void handleUserChangeStatRequest(Client c, InPacket inPacket) {
        Char chr = c.getChr();
        inPacket.decodeInt(); // tick
        int mask = inPacket.decodeInt();
        List<Stat> stats = Stat.getStatsByFlag(mask); // should be in correct order
        inPacket.decodeInt();
        HashMap<Stat, Short> hashMap = new HashMap();
        for (Stat stat : stats) {
            hashMap.put(stat, inPacket.decodeShort()); // always short?
        }
        byte option = inPacket.decodeByte();
        if (hashMap.containsKey(Stat.hp)) {
            chr.heal(hashMap.get(Stat.hp));
        }
        if (hashMap.containsKey(Stat.mp)) {
            chr.healMP(hashMap.get(Stat.mp));
        }
//        c.write(WvsContext.statChanged(newStats));
    }

    @Handler(op = InHeader.USER_REQUEST_INSTANCE_TABLE)
    public static void handleUserRequestInstanceTable(Char chr, InPacket inPacket) {
        String requestStr = inPacket.decodeString();
        int type = inPacket.decodeInt();
        int subType = inPacket.decodeInt();

        InstanceTableType itt = InstanceTableType.getByStr(requestStr);
        if (itt == null) {
            log.error(String.format("Unknown instance table type request %s, type %d, subType %d", requestStr, type, subType));
            return;
        }
        int value;
        switch (itt) {
            // HyperSkills: both have the same requestStr. level = type * 5
            case HyperActiveSkill:
            case HyperPassiveSkill:
            case HyperBeastTamer:
                if (subType == InstanceTableType.HyperActiveSkill.getSubType()) {
                    value = SkillConstants.getHyperActiveSkillSpByLv(type * 5);
                } else {
                    value = SkillConstants.getHyperPassiveSkillSpByLv(type * 5);
                }
                break;
            case HyperStatIncAmount:
                // type == level
                value = SkillConstants.getHyperStatSpByLv((short) type);
                break;
            case NeedHyperStatLv:
                // type == skill lv
                value = SkillConstants.getNeededSpForHyperStatSkill(type);
                break;
            case Skill_9200:
            case Skill_9201:
            case Skill_9202:
            case Skill_9203:
            case Skill_9204:
                // type == recommendSkillLevel - 1
                // subType == making skill level
                value = MakingSkillRecipe.getSuccessProb(Integer.parseInt(requestStr), type + 1, chr.getMakingSkillLevel(Integer.parseInt(requestStr)));
                break;
            default:
                log.error(String.format("Unhandled instance table type request %s, type %d, subType %d", itt, type, subType));
                return;
        }

        chr.write(WvsContext.resultInstanceTable(requestStr, type, subType, true, value));
    }


    @Handler(op = InHeader.USER_HYPER_SKILL_UP_REQUEST)
    public static void handleUserHyperSkillUpRequest(Char chr, InPacket inPacket) {
        // TODO: verify hyper skill is of the character's class
        inPacket.decodeInt(); // tick
        int skillID = inPacket.decodeInt();
        SkillInfo si = SkillData.getSkillInfoById(skillID);
        if (si == null) {
            log.error(String.format("Character %d attempted assigning hyper SP to a skill with null skillinfo (%d).", chr.getId(), skillID));
            chr.dispose();
            return;
        }
        if (si.getHyper() == 0 && si.getHyperStat() == 0 ||
                (!SkillConstants.isMatching(si.getRootId(), chr.getJob()) && !SkillConstants.isHyperstatSkill(skillID))) {
            log.error(String.format("Character %d attempted assigning hyper SP to a wrong skill (skill id %d, player job %d)", chr.getId(), skillID, chr.getJob()));
            chr.dispose();
            return;
        }
        Skill skill = chr.getSkill(skillID, true);
        short level = chr.getLevel();
        if (si.getHyper() != 0) { // Passive/Active hyper
            boolean active = si.getHyper() == 2;
            int totalHyperSp;
            int spentSp;
            if (active) {
                totalHyperSp = SkillConstants.getTotalActiveHyperSpByLevel(level);
                spentSp = chr.getSpentActiveHyperSkillSp();
            } else {
                totalHyperSp = SkillConstants.getTotalPassiveHyperSpByLevel(level);
                spentSp = chr.getSpentPassiveHyperSkillSp();
            }
            int availableSp = totalHyperSp - spentSp;
            if (availableSp <= 0 || skill.getCurrentLevel() != 0) {
                log.error(String.format("Character %d attempted assigning hyper skill SP without having it, or too much. Available SP %d, current %d (%d, job %d)",
                        chr.getId(), availableSp, skill.getCurrentLevel(), skillID, chr.getJob()));
                chr.dispose();
                return;
            }
        } else if (si.getHyperStat() != 0) {
            int totalHyperSp = SkillConstants.getTotalHyperStatSpByLevel(level);
            int spentSp = chr.getSpentHyperSp();
            int availableSp = totalHyperSp - spentSp;
            int neededSp = SkillConstants.getNeededSpForHyperStatSkill(skill.getCurrentLevel() + 1);
            if (skill.getCurrentLevel() >= skill.getMaxLevel() || availableSp < neededSp) {
                log.error(String.format("Character %d attempted assigning too many hyper stat levels. Available SP %d, needed %d, current %d (%d, job %d)",
                        chr.getId(), availableSp, neededSp, skill.getCurrentLevel(), skillID, chr.getJob()));
                chr.dispose();
                return;
            }
        } else { // not hyper stat and not hyper skill
            log.error(String.format("Character %d attempted assigning hyper stat to an improper skill. (%d, job %d)", chr.getId(), skillID, chr.getJob()));
            chr.dispose();
            return;
        }
        chr.removeFromBaseStatCache(skill);
        skill.setCurrentLevel(skill.getCurrentLevel() + 1);
        chr.addToBaseStatCache(skill);
        chr.addSkill(skill);
        chr.write(WvsContext.changeSkillRecordResult(skill));
    }

    @Handler(op = InHeader.USER_HYPER_SKILL_RESET_REQUEST)
    public static void handleUserHyperSkillResetRequest(Char chr, InPacket inPacket) {
        if (chr.getMoney() < 100_000) { // Min reset cost 100,000 meso
            chr.chatMessage("You don't have enough mesos.");
            chr.dispose();
            return;
        }
        if (chr.getSpentActiveHyperSkillSp() == 0 && chr.getSpentPassiveHyperSkillSp() == 0) {
            chr.chatMessage("Your Hyper Skills have already been reset.");
            chr.dispose();
            return;
        }
        chr.resetHyperSkills();
    }


    @Handler(op = InHeader.USER_HYPER_STAT_SKILL_UP_REQUEST)
    public static void handleUserHyperStatSkillUpRequest(Char chr, InPacket inPacket) {
        inPacket.decodeInt(); // tick
        var presetIndex = inPacket.decodeInt();
        var skillId = inPacket.decodeInt();

        HyperStatsModule.increaseHyperStatSkill(chr, presetIndex, skillId);
    }

    @Handler(op = InHeader.USER_HYPER_STAT_SKILL_RESET_REQUEST)
    public static void handleUserHyperStatSkillResetRequest(Char chr, InPacket inPacket) {
        inPacket.decodeInt(); // tick
        var presetIndex = inPacket.decodeInt();
        if (chr.getMoney() < GameConstants.HYPER_STAT_RESET_COST) {
            chr.chatMessage("Not enough money for this operation.");
            chr.write(WvsContext.receiveHyperStatSkillResetResult(chr.getId(), true, false));
            return;
        }

        chr.deductMoney(GameConstants.HYPER_STAT_RESET_COST);
        HyperStatsModule.resetPreset(chr, presetIndex);
        chr.write(WvsContext.receiveHyperStatSkillResetResult(chr.getId(), true, true));
    }

    @Handler(op = InHeader.USER_HYPER_SKILL_PRESET_REQUEST)
    public static void handleUserHyperskillPresetRequest(Char chr, InPacket inPacket) {
        inPacket.decodeInt(); // tick
        var presetIndex = inPacket.decodeInt();
        if (chr.getMoney() < GameConstants.HYPER_STAT_PRESET_SWITCH_COST) {
            chr.chatMessage("Not enough money for this operation.");
            return;
        }

        chr.deductMoney(GameConstants.HYPER_STAT_PRESET_SWITCH_COST);
        HyperStatsModule.switchPreset(chr, presetIndex);
    }

    @Handler(op = InHeader.USER_REVIVE_REQUEST)
    public static void handleUserReviveRequest(Char chr, InPacket inPacket) {
/*        if (chr.getHP() <= 0) {
*//*            chr.write(UserLocal.openUIOnDead(true, chr.getBuffProtectorItem() != null,
                    false, false, false,
                    ReviveType.NORMAL, 0));*//*
            chr.runCustomReviveScript();
        }*/
    }

    @Handler(op = InHeader.USER_IN_BOSS_REVIVE_REQUEST)
    public static void handleUserInBossReviveRequest(Char chr, InPacket inPacket) {
        // byte unk = inPacket.decodeByte();

        // buff freezer logic
        var buffProtector = chr.getBuffProtectorItem();
        if (buffProtector != null) {
            chr.setBuffProtector(true);
            chr.consumeItem(buffProtector);
            if (chr.getTemporaryStatManager().hasStat(CapDebuff)) {
                chr.getTemporaryStatManager().removeStat(CapDebuff);
            }
            chr.write(UserLocal.setBuffProtector(buffProtector.getItemId(), true));
        } else {
            chr.getTemporaryStatManager().removeAllStats();
        }

        int deathcount = chr.getDeathCount();
        if (deathcount > 0) {
            deathcount--;
            chr.setDeathCount(deathcount);
            chr.write(UserLocal.deathCountInfo(deathcount));
            chr.write(FieldPacket.teleport(chr.getPosition(), chr));
        } else {
            if (chr.getInstance() != null) {
                chr.getScriptManager().stopEvents(); // stop events if died out
                chr.getInstance().removeChar(chr);
            }
            if (chr.getTransferField() != 0) {
                Field toField = chr.getOrCreateFieldByCurrentInstanceType(chr.getTransferField());
                if (toField != null && chr.getTransferField() > 0) {
                    chr.warp(toField);
                }
                chr.setTransferField(0);
                return;
            } else {
                chr.warp(chr.getOrCreateFieldByCurrentInstanceType(chr.getField().getInfo().getForcedReturn()));
            }
        }
        chr.heal(chr.getMaxHP(), false, true);
        chr.setBuffProtector(false);
        chr.setNextAvailableConsumeItemTime(0);
        if (chr.getJobHandler() != null) {
            chr.getJobHandler().handleRevive();
        }
    }
}
