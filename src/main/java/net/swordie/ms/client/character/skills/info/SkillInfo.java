package net.swordie.ms.client.character.skills.info;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.skills.SkillStat;
import net.swordie.ms.constants.SkillConstants;
import net.swordie.ms.enums.BaseStat;
import net.swordie.ms.enums.Stat;
import net.swordie.ms.enums.WeaponType;
import net.swordie.ms.util.Rect;
import net.swordie.ms.util.Util;
import net.swordie.ms.util.container.Tuple;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.openjdk.nashorn.api.scripting.NashornScriptEngineFactory;

import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import javax.script.ScriptException;
import java.util.*;

/**
 * Created on 12/20/2017.
 */
public class SkillInfo {
    private static final Logger log = LogManager.getLogger();

    private int skillId;
    private int rootId;
    private int maxLevel;
    private int currentLevel;
    private Map<SkillStat, String> skillStatInfo = new HashMap<>();
    private boolean invisible;
    private int masterLevel;
    private int fixLevel;
    private List<Rect> rects = new ArrayList<>();
    private boolean massSpell;
    private int type, infoType;
    private Set<Integer> psdSkills = new HashSet<>(); // Skills this Skill benefits
    private Set<Integer> psdSkillsOrigin = new HashSet<>(); // PSD Skills benefiting this Skill Id
    private String elemAttr = "";
    private int hyper;
    private int hyperstat;
    private int vehicleId;
    private int reqTierPoint;
    private Map<Integer, Integer> reqSkills = new HashMap<>();
    private boolean notCooltimeReset;
    private boolean notIncBuffDuration;
    private byte vSkill;
    private static ScriptEngine engine = new NashornScriptEngineFactory().getScriptEngine("JavaScript");
    private boolean psd;
    private Set<Integer> addAttackSkills = new HashSet<>();
    private List<HashMap<Integer, Integer>> extraSkillInfo = new ArrayList<>();
    private List<Map<Integer, Integer>> randomSkills = new ArrayList<>();
    private boolean ignoreCounter;
    private int normalGauge;
    private boolean isBallSkill;
    private boolean isSummon;
    private boolean isDragonAction;
    private boolean isFinalAttack;
    private boolean isShootObject;
    private boolean isAffectedArea;
    private Map<WeaponType, Map<SkillStat, Double>> psdWT = new HashMap<>(); // <WeaponType, <SkillStat, Value>>
    private Map<Integer, Map<SkillStat, Double>> cachedData = new HashMap<>(); // <Level, <SkillStat, Value>>
    private Map<Integer, Map<SkillStat, String>> oldSkillStats = new HashMap<>(); // <Level, <SkillStat, Value>>
    private int assistSkillLink;
    private int keyDownConsumptionInterval;
    private boolean isPetAutoBuff;
    private List<SecondAtomInfo> secondAtomInfos = new ArrayList<>();

    public int getSkillId() {
        return skillId;
    }

    public void setSkillId(int skillId) {
        this.skillId = skillId;
    }

    public int getRootId() {
        return rootId;
    }

    public void setRootId(int rootId) {
        this.rootId = rootId;
    }

    public int getMaxLevel() {
        return maxLevel;
    }

    public void setMaxLevel(int maxLevel) {
        this.maxLevel = maxLevel;
    }

    public int getCurrentLevel() {
        return currentLevel;
    }

    public void setCurrentLevel(int currentLevel) {
        this.currentLevel = currentLevel;
    }

    public Map<SkillStat, String> getSkillStatInfo() {
        return skillStatInfo;
    }

    public void setSkillStatInfo(Map<SkillStat, String> skillStatInfo) {
        this.skillStatInfo = skillStatInfo;
    }

    public void addSkillStatInfo(SkillStat sc, String value) {
        getSkillStatInfo().put(sc, value);
    }

    public int getValue(SkillStat skillStat, int slv) {
        return (int) getValueD(skillStat, slv);
    }

    public double getValueD(SkillStat skillStat, int slv) {
        double result = 0;
        String value = getSkillStatInfo().get(skillStat);
        if (value == null) {
            value = getValueOldSS(slv, skillStat);
        }
        if (value == null || slv == 0) {
            return 0;
        }
        // maybe only cache max lv data
        if (!cachedData.containsKey(slv)) {
            cachedData.put(slv, new HashMap<>());
        }
        Map<SkillStat, Double> lvCache = cachedData.get(slv);
        if (lvCache.containsKey(skillStat)) {
            return lvCache.get(skillStat);
        }
        // Not in cache: evaluate
        // Sometimes newlines get taken, just remove those
        value = value.replace("\n", "").replace("\r", "");
        value = value.replace("\\n", "").replace("\\r", ""); // unluko
        String original = value;
        if (Util.isNumber(value)) {
            result = Double.parseDouble(value);
        } else {
            try {
                if (value.contains("log")) {
                    String[] split = value.split("log");
                    String[] afterLog = split[1].split("[(]");
                    String base = afterLog[0];
                    String var = afterLog[1].split("[)]")[0];
                    value = value.replace(String.format("log%s(%s)", base, var),
                            String.format("(Math.log(%s) / Math.log(%s))", var, base));
                }
                if (value.contains("min")) {
                    value = value.replaceAll("min", "Math.min");
                }
                if (value.contains("max")) {
                    value = value.replaceAll("max", "Math.max");
                }
                value = value.replace("u", "Math.ceil");
                value = value.replace("d", "Math.floor");
                String toReplace = value.contains("y") ? "y"
                        : value.contains("X") ? "X"
                        : "x";
                Object res = engine.eval(value.replace(toReplace, slv + ""));
                if (res instanceof Integer) {
                    result = (Integer) res;
                } else if (res instanceof Double) {
                    result = (Double) res;
                }
            } catch (ScriptException e) {
                log.error(String.format("Error when parsing: skill %d, level %d, skill stat %s, tried to eval %s.",
                        getSkillId(), slv, skillStat, original));
                e.printStackTrace();
            }
        }
        lvCache.put(skillStat, result);
        return result;
    }

    public void setInvisible(boolean invisible) {
        this.invisible = invisible;
    }

    public boolean isInvisible() {
        return invisible;
    }

    public int getMasterLevel() {
        return masterLevel;
    }

    public void setMasterLevel(int masterLevel) {
        this.masterLevel = masterLevel;
    }

    public int getFixLevel() {
        return fixLevel;
    }

    public void setFixLevel(int fixLevel) {
        this.fixLevel = fixLevel;
    }

    public void addRect(Rect rect) {
        getRects().add(rect);
    }

    public List<Rect> getRects() {
        return rects;
    }

    public Rect getLastRect() {
        return rects != null && rects.size() > 0 ? rects.get(rects.size() - 1) : null;
    }

    public Rect getFirstRect() {
        return rects != null && rects.size() > 0 ? rects.get(0) : null;
    }

    public boolean isMassSpell() {
        return massSpell;
    }

    public void setMassSpell(boolean massSpell) {
        this.massSpell = massSpell;
    }

    public boolean hasCooltime() {
        return getValue(SkillStat.cooltime, 1) > 0
                || getValue(SkillStat.cooltimeMS, 1) > 0
                || SkillConstants.getCooldownBySkillId(skillId) > 0; // for when nexon decides using their cooltime/cooltimeMS SkillStat isn't good enough and they use a random-ass SkillStat instead
    }

    public Map<BaseStat, Integer> getBaseStatValues(Char chr, int slv) {
        Map<BaseStat, Integer> stats = new HashMap<>();
        for (SkillStat ss : getSkillStatInfo().keySet()) {
            Tuple<BaseStat, Integer> bs = getBaseStatValue(ss, slv, chr);
            stats.put(bs.getLeft(), bs.getRight());
        }
        if (getOldSkillStats().size() > 0) {
            for (SkillStat ss : getOldSkillStats().get(1).keySet()) {
                Tuple<BaseStat, Integer> bs = getBaseStatValue(ss, slv, chr);
                stats.put(bs.getLeft(), bs.getRight());
            }
        }
        SkillConstants.putMissingBaseStatsBySkill(stats, this, slv);
        return stats;
    }

    public Tuple<BaseStat, Integer> getBaseStatValue(SkillStat ss, int slv, Char chr) {
        return getBaseStatValue(ss, chr, getValue(ss, slv));
    }

    public Tuple<BaseStat, Integer> getBaseStatValue(SkillStat ss, Char chr, int value) {
        BaseStat bs = ss.getBaseStat();
        switch (ss) {
            case lv2damX:
                value *= chr.getLevel();
                break;
            case str2dex:
                value *= chr.getStat(Stat.str);
                break;
            case dex2luk:
            case dex2str:
                value *= chr.getStat(Stat.dex);
                break;
            case int2luk:
                value *= chr.getStat(Stat.inte);
                break;
            case luk2dex:
            case luk2int:
                value *= chr.getStat(Stat.luk);
                break;
            case mhp2damX:
                value *= chr.getStat(Stat.mhp);
                break;
            case mmp2damX:
                value *= chr.getStat(Stat.mmp);
                break;
        }
        if (ss.isPerM()) {
            value = (int) Math.ceil(value / 100D);
        }
        return new Tuple<>(bs, value);
    }

    public void setType(int type) {
        this.type = type;
    }

    public int getType() {
        return type;
    }

    public int getInfoType() {
        return infoType;
    }

    public void setInfoType(int infoType) {
        this.infoType = infoType;
    }

    public void setRects(List<Rect> rects) {
        this.rects = rects;
    }

    public void addPsdSkill(int skillID) {
        getPsdSkills().add(skillID);
    }

    public Set<Integer> getPsdSkills() {
        return psdSkills;
    }

    public void setPsdSkills(Set<Integer> psdSkills) {
        this.psdSkills = psdSkills;
    }

    public String getElemAttr() {
        return elemAttr;
    }

    public void setElemAttr(String elemAttr) {
        this.elemAttr = elemAttr;
    }

    public void setHyper(int hyper) {
        this.hyper = hyper;
    }

    public int getHyper() {
        return hyper;
    }

    public void setHyperStat(int hyperstat) {
        this.hyperstat = hyperstat;
    }

    public int getHyperStat() {
        return hyperstat;
    }

    public int getVehicleId() {
        return vehicleId;
    }

    public void setVehicleId(int vehicleId) {
        this.vehicleId = vehicleId;
    }

    public void setReqTierPoint(int reqTierPoint) {
        this.reqTierPoint = reqTierPoint;
    }

    public int getReqTierPoint() {
        return reqTierPoint;
    }

    public void addReqSkill(int skillID, int slv) {
        getReqSkills().put(skillID, slv);
    }

    public Map<Integer, Integer> getReqSkills() {
        return reqSkills;
    }

    public void setNotCooltimeReset(boolean notCooltimeReset) {
        this.notCooltimeReset = notCooltimeReset;
    }

    public boolean isNotCooltimeReset() {
        return notCooltimeReset;
    }

    public void setNotIncBuffDuration(boolean notIncBuffDuration) {
        this.notIncBuffDuration = notIncBuffDuration;
    }

    public boolean isNotIncBuffDuration() {
        return notIncBuffDuration;
    }

    public byte getvSkill() {
        return vSkill;
    }

    public void setvSkill(byte vSkill) {
        this.vSkill = vSkill;
    }

    public void setPsd(boolean psd) {
        this.psd = psd;
    }

    public boolean isPsd() {
        return psd;
    }

    public Set<Integer> getAddAttackSkills() {
        return addAttackSkills;
    }

    public void setAddAttackSkills(Set<Integer> addAttackSkills) {
        this.addAttackSkills = addAttackSkills;
    }

    public void addAddAttackSkills(int skillId) {
        getAddAttackSkills().add(skillId);
    }

    public List<HashMap<Integer, Integer>> getExtraSkillInfo() {
        return extraSkillInfo;
    }

    public void setExtraSkillInfo(List<HashMap<Integer, Integer>> extraSkillInfo) {
        this.extraSkillInfo = extraSkillInfo;
    }

    public void addExtraSkillInfo(int skillid, int delay) {
        HashMap<Integer, Integer> hashMap = new HashMap<>();
        hashMap.put(skillid, delay);
        getExtraSkillInfo().add(hashMap);
    }

    public void addExtraSkillInfo(HashMap hashMap) {
        getExtraSkillInfo().add(hashMap);
    }

    public boolean isIgnoreCounter() {
        return getValue(SkillStat.ignoreCounter, 1) != 0;
    }

    public List<Map<Integer, Integer>> getRandomSkills() {
        return randomSkills;
    }

    public void setRandomSkills(List<Map<Integer, Integer>> randomSkills) {
        this.randomSkills = randomSkills;
    }

    public void addRandomSkill(Map<Integer, Integer> randomSkillMap) {
        getRandomSkills().add(randomSkillMap);
    }

    public int getNormalGauge() {
        return normalGauge;
    }

    public void setNormalGauge(int normalGauge) {
        this.normalGauge = normalGauge;
    }

    public boolean isBallSkill() {
        return isBallSkill;
    }

    public void setBallSkill(boolean ballSkill) {
        isBallSkill = ballSkill;
    }

    public boolean isSummon() {
        return isSummon;
    }

    public void setSummon(boolean summon) {
        isSummon = summon;
    }

    public boolean isAffectedArea() {
        return isAffectedArea;
    }

    public void setAffectedArea(boolean affectedArea) {
        isAffectedArea = affectedArea;
    }

    public boolean isFinalAttack() {
        return isFinalAttack;
    }

    public void setFinalAttack(boolean finalAttack) {
        isFinalAttack = finalAttack;
    }

    public boolean isShootObject() {
        return isShootObject;
    }

    public void setShootObject(boolean shootObject) {
        isShootObject = shootObject;
    }

    public Map<WeaponType, Map<SkillStat, Double>> getPsdWT() {
        return psdWT;
    }

    public void setPsdWT(Map<WeaponType, Map<SkillStat, Double>> psdWT) {
        this.psdWT = psdWT;
    }

    public Map<SkillStat, Double> getSkillStatsByWT(WeaponType weaponType) {
        return getPsdWT().getOrDefault(weaponType, new HashMap<>());
    }

    public void addPsdWT(WeaponType wt, Map<SkillStat, Double> skillStats) {
        getPsdWT().put(wt, skillStats);
    }

    public boolean isPsdWTSkill() {
        if (getPsdWT() == null) {
            return false;
        }

        return getPsdWT().size() > 0;
    }

    public boolean isDragonAction() {
        return isDragonAction;
    }

    public void setDragonAction(boolean dragonAction) {
        isDragonAction = dragonAction;
    }

    public int getAssistSkillLink() {
        return assistSkillLink;
    }

    public void setAssistSkillLink(int assistSkillLink) {
        this.assistSkillLink = assistSkillLink;
    }

    public Map<Integer, Map<SkillStat, String>> getOldSkillStats() {
        return oldSkillStats;
    }

    public void setOldSkillStats(Map<Integer, Map<SkillStat, String>> oldSkillStats) {
        this.oldSkillStats = oldSkillStats;
    }

    public void addOldSkillStats(int slv, Map<SkillStat, String> ssMap) {
        getOldSkillStats().put(slv, ssMap);
    }

    public void addOldSkillStats(int slv, SkillStat ss, String value) {
        if (getOldSkillStats().containsKey(slv)) {
            getOldSkillStats().get(slv).put(ss, value);
        } else {
            Map<SkillStat, String> ssMap = new HashMap<>();
            ssMap.put(ss, value);
            getOldSkillStats().put(slv, ssMap);
        }
    }

    private String getValueOldSS(int slv, SkillStat ss) {
        Map<SkillStat, String> ssMap = getOldSkillStats().getOrDefault(slv, null);
        if (ssMap == null) {
            return null;
        }
        return ssMap.getOrDefault(ss, null);
    }

    public Set<Integer> getPsdSkillsOrigin() {
        return psdSkillsOrigin;
    }

    public void setPsdSkillsOrigin(Set<Integer> psdSkillsOrigin) {
        this.psdSkillsOrigin = psdSkillsOrigin;
    }

    public void addPsdSkillsOrigin(int skillId) {
        getPsdSkillsOrigin().add(skillId);
    }

    public int getKeyDownConsumptionInterval() {
        return keyDownConsumptionInterval;
    }

    public void setKeyDownConsumptionInterval(int keyDownConsumptionInterval) {
        this.keyDownConsumptionInterval = keyDownConsumptionInterval;
    }

    public List<SecondAtomInfo> getSecondAtomInfos() {
        return secondAtomInfos;
    }

    public void setSecondAtomInfos(List<SecondAtomInfo> secondAtomInfos) {
        this.secondAtomInfos = secondAtomInfos;
    }

    public void addSecondAtomInfo(SecondAtomInfo sai) {
        getSecondAtomInfos().add(sai);
    }

    public boolean isPetAutoBuff() {
        return isPetAutoBuff;
    }

    public void setPetAutoBuff(boolean petAutoBuff) {
        isPetAutoBuff = petAutoBuff;
    }
}
