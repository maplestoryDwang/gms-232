package net.swordie.ms.client.character.skills;

import net.swordie.ms.client.Account;
import net.swordie.ms.client.character.Char;
import net.swordie.ms.connection.OutPacket;
import net.swordie.ms.constants.JobConstants;
import net.swordie.ms.constants.SkillChangeConstants;
import net.swordie.ms.enums.BaseStat;
import net.swordie.ms.util.FileTime;

import java.util.Comparator;
import java.util.HashMap;
import java.util.Map;

/**
 * Created on 02/09/2020.
 *
 * @author Asura
 */
public class CoreAura {
    public static final BaseStat[] BASE_STATS = new BaseStat[] {BaseStat.pad, BaseStat.dex, BaseStat.luk, BaseStat.mad, BaseStat.inte, BaseStat.str};
    public static final int MAX_STAT = 35;
    public static final int MIN_STAT = 0;

    private Map<BaseStat, Double> baseStatMap = new HashMap<>();
    private int tier = 0;


    public CoreAura(Char chr) {
        updateStats(chr);
    }


    public Map<BaseStat, Double> getBaseStatMap() {
        return baseStatMap;
    }

    public void setBaseStatMap(Map<BaseStat, Double> baseStatMap) {
        this.baseStatMap = baseStatMap;
    }

    public int getTier() {
        return tier;
    }

    public void setTier(int tier) {
        this.tier = tier;
    }

    public double getBaseStat(BaseStat baseStat) {
        return getBaseStatMap().getOrDefault(baseStat, 0D);
    }

    public void updateStats(Char chr) {
        getBaseStatMap().clear();

        Account account = chr.getAccount();
        Char jettChr = account.getCharacters().stream().filter(c -> JobConstants.isJett(c.getJob())).max(Comparator.comparingInt(Char::getLevel)).orElse(null); // Grab Highest level Jett on Account
        if (jettChr == null) {
            return;
        }

        var jettLv = jettChr.getLevel();
        var stats = jettLv >= SkillChangeConstants.CORE_AURA_MAXIMUM_LEVEL ? MAX_STAT :
                Math.min(MAX_STAT, Math.max(0, (jettLv - SkillChangeConstants.CORE_AURA_MINIMUM_LEVEL) / SkillChangeConstants.CORE_AURA_EVERY_X_LEVELS));

        for (BaseStat baseStat : BASE_STATS) {
            getBaseStatMap().put(baseStat, (double) stats);
        }

        setTier(jettLv >= 220 ? 13 :
                jettLv >= 180 ? 12 :
                jettLv >= 140 ? 11 :
                                10
        );
    }

    public void encode(Char chr, OutPacket outPacket) {
        outPacket.encodeInt(1); // Core Aura Id
        outPacket.encodeInt(chr.getId()); // Char Id
        outPacket.encodeInt(chr.getLevel()); // Chr Lv

        // Tiers:
        // Yellow(13)
        // Pink(12)
        // Green(11)
        // Blue(10)
        outPacket.encodeInt(getTier()); // Core Aura Tier

        outPacket.encodeInt(0); //

        outPacket.encodeInt((int) getBaseStat(BaseStat.pad)); // w.att
        outPacket.encodeInt((int) getBaseStat(BaseStat.dex)); // dex
        outPacket.encodeInt((int) getBaseStat(BaseStat.luk)); // luk
        outPacket.encodeInt((int) getBaseStat(BaseStat.mad)); // m.att
        outPacket.encodeInt((int) getBaseStat(BaseStat.inte)); // int
        outPacket.encodeInt((int) getBaseStat(BaseStat.str)); // str

        outPacket.encodeInt(0); // avg ?

        outPacket.encodeInt(MAX_STAT); // max possible stat
        outPacket.encodeInt(MIN_STAT); // min total stat
        outPacket.encodeInt(MAX_STAT); // max total stat

        FileTime.MAX_TIME().encode(outPacket); // expire time
        outPacket.encodeByte(0); // unk
    }
}
