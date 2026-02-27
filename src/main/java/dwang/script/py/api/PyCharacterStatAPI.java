package dwang.script.py.api;

import dwang.script.DwangScriptBaseApi;
import net.swordie.ms.client.character.avatar.AvatarLook;
import net.swordie.ms.client.character.skills.temp.CharacterTemporaryStat;
import net.swordie.ms.client.character.skills.temp.TemporaryStatManager;
import net.swordie.ms.connection.packet.*;
import net.swordie.ms.connection.packet.field.FieldPacket;
import net.swordie.ms.connection.packet.model.MessagePacket;
import net.swordie.ms.constants.ItemConstants;
import net.swordie.ms.constants.JobConstants;
import net.swordie.ms.enums.ProgressMessageColourType;
import net.swordie.ms.enums.ProgressMessageFontType;
import net.swordie.ms.enums.Stat;
import net.swordie.ms.loaders.ItemData;
import net.swordie.ms.loaders.containerclasses.ItemInfo;
import net.swordie.ms.world.field.fieldeffect.FieldEffect;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.HashMap;
import java.util.Map;

/**
 * @author dwang
 * @version 1.0.0
 * @Title
 * @ClassName PyCharacterStatAPI.java
 * @Description Character Stat-related
 * @createTime 2026-02-27 16:56
 */

public interface PyCharacterStatAPI extends DwangScriptBaseApi {

    Logger log = LoggerFactory.getLogger(PyCharacterStatAPI.class);


    default void setJob(short jobID) {
        getChr().setJob(jobID);
        Map<Stat, Object> stats = new HashMap<>();
        stats.put(Stat.job, jobID);
        getChr().write(WvsContext.statChanged(stats, getChr().getSubJob()));
    }

    default void addSP(int amount) {
        addSP(amount, false);
    }

    
    default void addSP(int amount, boolean jobAdv) {
        byte jobLevel = (byte) JobConstants.getJobLevel(getChr().getJob());
        int currentSP = getChr().getAvatarData().getCharacterStat().getExtendSP().getSpByJobLevel(jobLevel);
        setSP(currentSP + amount);
        if (jobAdv) {
            getChr().write(WvsContext.message(MessagePacket.incSpMessage(getChr().getJob(), (byte) amount)));
        }
    }

    
    default void setSP(int amount) {
        getChr().setSpToCurrentJob(amount);
        Map<Stat, Object> stats = new HashMap<>();
        stats.put(Stat.sp, getChr().getAvatarData().getCharacterStat().getExtendSP());
        getChr().write(WvsContext.statChanged(stats));
    }

    
    default void addAP(int amount) {
        int currentAP = getChr().getAvatarData().getCharacterStat().getAp();
        setAP(currentAP + amount);
    }

    
    default void setAP(int amount) {
        getChr().setStat(Stat.ap, (short) amount);
        Map<Stat, Object> stats = new HashMap<>();
        stats.put(Stat.ap, (short) amount);
        getChr().write(WvsContext.statChanged(stats));
    }

    
    default void setSTR(short amount) {
        getChr().setStat(Stat.str, amount);
        Map<Stat, Object> stats = new HashMap<>();
        stats.put(Stat.str, amount);
        getChr().write(WvsContext.statChanged(stats));
    }

    
    default void setINT(short amount) {
        getChr().setStat(Stat.inte, amount);
        Map<Stat, Object> stats = new HashMap<>();
        stats.put(Stat.inte, amount);
        getChr().write(WvsContext.statChanged(stats));
    }

    
    default void setDEX(short amount) {
        getChr().setStat(Stat.dex, amount);
        Map<Stat, Object> stats = new HashMap<>();
        stats.put(Stat.dex, amount);
        getChr().write(WvsContext.statChanged(stats));
    }

    
    default void setLUK(short amount) {
        getChr().setStat(Stat.luk, amount);
        Map<Stat, Object> stats = new HashMap<>();
        stats.put(Stat.luk, amount);
        getChr().write(WvsContext.statChanged(stats));
    }

    default void addMaxHP(int amount) {
        getChr().addStatAndSendPacket(Stat.mhp, amount);
    }

    
    default void setMaxHP(int amount) {
        getChr().setStat(Stat.mhp, amount);
        getChr().setStat(Stat.hp, amount);
        Map<Stat, Object> stats = new HashMap<>();
        stats.put(Stat.mhp, amount);
        stats.put(Stat.hp, amount);
        getChr().write(WvsContext.statChanged(stats));
    }

    default void addMaxMP(int amount) {
        getChr().addStatAndSendPacket(Stat.mmp, amount);
    }

    
    default void setMaxMP(int amount) {
        getChr().setStat(Stat.mmp, amount);
        getChr().setStat(Stat.mp, amount);
        Map<Stat, Object> stats = new HashMap<>();
        stats.put(Stat.mmp, amount);
        stats.put(Stat.mp, amount);
        getChr().write(WvsContext.statChanged(stats));
    }

    
    default void jobAdvance(short jobID) {
        setJob(jobID);
        addAP(5); //Standard added AP upon Job Advancing
        addSP(5); //Standard added SP upon Job Advancing
    }

    
    default void giveExp(long expGiven) {
        getChr().addExp(expGiven);
    }

    

    
    default void changeCharacterLook(int look) {
        AvatarLook al = getChr().getAvatarData().getAvatarLook();
        boolean isBeta = getChr().isZeroBeta();
        if (isBeta) {
            al = getChr().getAvatarData().getZeroAvatarLook();
        }
        if (look < 100) { // skin
            al.setSkin(look);
            if (!isBeta) {
                getChr().setStatAndSendPacket(Stat.skin, look);
            } else {
                getChr().getZeroInfo().setSubSkin(look);
            }
        } else if (ItemConstants.isFace(look)) {
            al.setFace(look);

            if (!isBeta) {
                getChr().setStatAndSendPacket(Stat.face, look);
            } else {
                getChr().getZeroInfo().setSubFace(look);
            }
        } else if (ItemConstants.isHair(look)) {
            al.setHair(look);
            if (!isBeta) {
                getChr().setStatAndSendPacket(Stat.hair, look);
            } else {
                getChr().getZeroInfo().setSubHair(look);
            }
        } else {
            log.error(String.format("Tried changing a look with invalid id (%d)", look));
        }
        if (isBeta) {
            getChr().updateZeroInfo();
        } else {
            getChr().broadcastRemoteAvatarModified();
        }
    }

    default void giveSkill(int skillId) {
        giveSkill(skillId, 1);
    }

    default void giveSkill(int skillId, int slv) {
        giveSkill(skillId, slv, slv);
    }

    
    default void giveSkill(int skillId, int slv, int maxLvl) {
        getChr().addSkill(skillId, slv, maxLvl);
    }

    default void removeBuff(CharacterTemporaryStat cts) {
        TemporaryStatManager tsm = getChr().getTemporaryStatManager();
        tsm.removeStat(cts);
    }

    default void removeAllBuffs() {
        TemporaryStatManager tsm = getChr().getTemporaryStatManager();
        tsm.removeAllStats();
    }

    default void removeSkill(int skillId) {
        getChr().removeSkillAndSendPacket(skillId);
    }

    default int getSkillByItem() {
        return getSkillByItem(getParentID());
    }

    default int getSkillByItem(int itemId) {
        ItemInfo itemInfo = ItemData.getItemInfoByID(itemId);
        return itemInfo.getSkillId();
    }

    default boolean hasSkill(int skillId) {
        return getChr().hasSkill(skillId);
    }

    default void heal() {
        getChr().heal(getChr().getMaxHP());
        getChr().healMP(getChr().getMaxMP());
    }

    default void setLevel(int level) {
        getChr().setStatAndSendPacket(Stat.level, level);
        getChr().setStatAndSendPacket(Stat.exp, 0);
        getChr().getJobHandler().handleLevelUp();
        getField().broadcastPacket(UserRemote.effect(getChr().getId(), Effect.levelUpEffect()));
    }

    default void addLevel(int level) {
        int curLevel = getChr().getLevel();
        for (int i = curLevel + 1; i <= curLevel + level; i++) {
            getChr().setStat(Stat.level, i);
            Map<Stat, Object> stats = new HashMap<>();
            stats.put(Stat.level, i);
            stats.put(Stat.exp, (long) 0);
            getChr().write(WvsContext.statChanged(stats));
            getChr().getJobHandler().handleLevelUp();
            getField().broadcastPacket(UserRemote.effect(getChr().getId(), Effect.levelUpEffect()));
        }
    }

    default void levelUntil(int toLevel) {
        short level = getChr().getLevel();
        if (level >= toLevel) {
            return;
        }
        while (level < toLevel) {
            addLevel(1);
            level++;
        }
    }

    default void lockInGameUI(boolean lock) {
        lockInGameUI(lock, true);
    }

    default void lockInGameUI(boolean lock, boolean blackFrame) {
        if (getChr() != null) {
            getChr().write(UserLocal.setInGameDirectionMode(lock, blackFrame, false));
        }
    }

    default void curNodeEventEnd(boolean enable) {
        setCurNodeEventEnd(enable);
        getChr().write(FieldPacket.curNodeEventEnd(enable));
    }

    default void setCurNodeEventEnd(boolean curNodeEventEnd) {
        this.getInitData().setCurNodeEventEnd(curNodeEventEnd);
    }

    default void progressMessageFont(int fontNameType, int fontSize, int fontColorType, int fadeOutDelay, String message) {
        ProgressMessageFontType type = ProgressMessageFontType.getByVal(fontNameType);
        ProgressMessageColourType colour = ProgressMessageColourType.getByVal(fontColorType);
        if (colour == null || type == null) {
            log.warn(String.format("Could not find fontType %d or ColourType %d", fontNameType, fontColorType));
            return;
        }
        progressMessageFont(type, fontSize, colour, fadeOutDelay, message);
    }

    default void progressMessageFont(ProgressMessageFontType fontType, int fontSize, ProgressMessageColourType colour, int fadeOutDelay, String msg) {
        getChr().write(UserPacket.progressMessageFont(fontType, fontSize, colour, fadeOutDelay, msg));
    }

    default void localEmotion(int emotion, int duration, boolean byItemOption) {
        getChr().write(UserLocal.emotion(emotion, duration, byItemOption));
    }

    default void giveExpNoMsg(long expGiven) {
        getChr().addExpNoMsg(expGiven);
    }

    default void showClearStageExpWindow(long expGiven) {
        getChr().write(FieldPacket.fieldEffect(FieldEffect.showClearStageExpWindow((int) expGiven)));
        giveExpNoMsg(expGiven);
    }
}
