package net.swordie.ms.client.character.skills.temp;

import io.netty.util.internal.ConcurrentSet;
import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.skills.GuidedBullet;
import net.swordie.ms.client.character.skills.PartyBooster;
import net.swordie.ms.client.character.skills.*;
import net.swordie.ms.client.character.skills.atom.forceatom.StopForceAtom;
import net.swordie.ms.client.jobs.Job;
import net.swordie.ms.client.jobs.resistance.demon.DemonAvenger;
import net.swordie.ms.connection.OutPacket;
import net.swordie.ms.connection.packet.UserRemote;
import net.swordie.ms.connection.packet.WvsContext;
import net.swordie.ms.constants.BossConstants;
import net.swordie.ms.constants.GameConstants;
import net.swordie.ms.constants.ItemConstants;
import net.swordie.ms.constants.SkillConstants;
import net.swordie.ms.enums.BaseStat;
import net.swordie.ms.enums.TSIndex;
import net.swordie.ms.events.Events;
import net.swordie.ms.life.AffectedArea;
import net.swordie.ms.life.Summon;
import net.swordie.ms.util.FileTime;
import net.swordie.ms.util.Util;
import net.swordie.ms.util.container.Tuple;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.util.*;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;
import java.util.stream.Collectors;

import static net.swordie.ms.client.character.skills.temp.CharacterTemporaryStat.*;

/**
 * Created on 1/3/2018.
 */
public class TemporaryStatManager {
    private static final Logger log = LogManager.getRootLogger();

    public final Map<CharacterTemporaryStat, List<Option>> currentStats = new ConcurrentHashMap<>();
    public final Map<CharacterTemporaryStat, List<Option>> newStats = new ConcurrentHashMap<>();
    public final Map<CharacterTemporaryStat, List<Option>> removedStats = new ConcurrentHashMap<>();

    private final Lock statLock = new ReentrantLock();

    private int pvpDamage;
    private byte defenseState;
    private byte defenseAtt;
    private int[] diceInfo = new int[22];
    private int[] diceOption = new int[8];
    private Set<Integer> mobZoneStates = new HashSet<>();
    private int viperEnergyCharge;
    private StopForceAtom stopForceAtom;
    private LarknessManager larknessManager;
    private Char chr;
    private List<TemporaryStatBase> twoStates = new ArrayList<>();
    private Set<AffectedArea> affectedAreas = new ConcurrentSet<>();
    private Map<BaseStat, Integer> baseStats = new HashMap<>();
    private Map<BaseStat, List<Integer>> nonAddBaseStats = new HashMap<>();
    private Set<OutPacket> resetStatsUpdate = new HashSet<>();

    private long lastStun = Long.MIN_VALUE;

    public TemporaryStatManager(Char chr) {
        this.chr = chr;
        for (CharacterTemporaryStat cts : TSIndex.getAllCTS()) {
            switch (cts) {
                case PartyBooster:
                    twoStates.add(new PartyBooster());
                    break;
                case GuidedBullet:
                    twoStates.add(new GuidedBullet());
                    break;
                case EnergyCharged:
                    twoStates.add(new TemporaryStatBase(true));
                    break;
                case RideVehicle:
                case RelicGauge:
                    twoStates.add(new TwoStateTemporaryStat(false));
                    break;
                case Grave:
                    twoStates.add(new GraveProclomation(false));
                    break;
                default:
                    twoStates.add(new TwoStateTemporaryStat(true));
                    break;
            }
        }
    }

    public List<TemporaryStatBase> getTwoStates() {
        return twoStates;
    }

    public TemporaryStatBase getTSBByTSIndex(TSIndex tsi) {
        return getTwoStates().get(tsi.getIndex());
    }

    public void putCharacterStatValue(CharacterTemporaryStat cts, Option option) {
        putCharacterStatValue(cts, option, false);
    }

    public void putCharacterStatValue(CharacterTemporaryStat cts, Option option, boolean noBuffDurationInc) { // reapply is used when the buff's Options have to be changed whilst the duration stays the same (e.g. Infinity)
        boolean indie = cts.isIndie();
        option.setTimeToMillis();
        int skillId = option.rOption;
        if (!SkillConstants.isNoBuffDurationAppliedSkill(skillId) && !noBuffDurationInc) {
            int duration = (indie ? option.tOption : option.tOption);
            long buffTimeR = getChr().getTotalStat(BaseStat.buffTimeR); // includes the 100% base
            option.tOption = (int) ((buffTimeR * duration) / 100D);
        }

        if (cts == CombatOrders) {
            chr.setCombatOrders(option.nOption);
        }

        if (TSIndex.isTwoState(cts) && TSIndex.getTSEFromCTS(cts) != null) {
            var twoState = getTSBByTSIndex(TSIndex.getTSEFromCTS(cts));
            if (twoState != null) {
                twoState.setLastUpdated(FileTime.currentTime());
            }
        }

        if (!indie) {
            List<Option> optList = new ArrayList<>();
            optList.add(option);
            if (hasStat(cts)) {
                Option oldOption = getCurrentStats().get(cts).get(0);
                // remove old base stats from map
                for (Map.Entry<BaseStat, Integer> stats : BaseStat.getFromCTS(chr, cts, oldOption).entrySet()) {
                    removeBaseStat(stats.getKey(), stats.getValue());
                }
            }
            getNewStats().put(cts, optList);
            getCurrentStats().put(cts, optList);
            for (Map.Entry<BaseStat, Integer> stats : BaseStat.getFromCTS(chr, cts, option).entrySet()) {
                addBaseStat(stats.getKey(), stats.getValue());
            }
        } else {
            List<Option> optList;
            if (hasStat(cts)) {
                optList = getCurrentStats().get(cts);
            } else {
                optList = new ArrayList<>();
            }
            if (optList.contains(option)) {
                // remove old option of the same skill
                Option oldOption = getOptByCTSAndSkill(cts, option.rOption);
                for (Map.Entry<BaseStat, Integer> stats : BaseStat.getFromCTS(chr, cts, oldOption).entrySet()) {
                    removeBaseStat(stats.getKey(), stats.getValue());
                }
                optList.remove(oldOption);
            }
            optList.add(option);
            getNewStats().put(cts, optList);
            getCurrentStats().put(cts, optList);
            // Add stats to basestat
            for (Map.Entry<BaseStat, Integer> stats : BaseStat.getFromCTS(chr, cts, option).entrySet()) {
                addBaseStat(stats.getKey(), stats.getValue());
            }
        }
        if (cts != LifeTidal && chr.getJobHandler() instanceof DemonAvenger) {
            ((DemonAvenger) chr.getJobHandler()).sendHpUpdate();
        }
        // Handler for specific CTSs
        if (getChr() != null && getChr().getJobHandler() != null) {
            Events.onPutCTS(getChr(), cts, option);
        }
    }

    public Option getOptByCTSAndSkill(CharacterTemporaryStat cts, int skillID) {
        Option res = null;
        if (getCurrentStats().containsKey(cts)) {
            for (Option o : getCurrentStats().get(cts)) {
                if (o.rOption == skillID) {
                    res = o;
                    break;
                }
            }
        }
        return res;
    }

    public boolean hasAOptByCTSAndSkill(CharacterTemporaryStat cts, int skillId) {
        return getOptByCTSAndSkill(cts, skillId) != null;
    }

    public void removeStat(CharacterTemporaryStat cts) {
        removeStat(cts, true);
    }

    public void removeStat(CharacterTemporaryStat cts, boolean removeByTimer) {
        if (cts == null || getRemovedStats() == null || getCurrentStats() == null || getCurrentStats().get(cts) == null) {
            return;
        }

        if (!hasStat(cts)) {
            return;
        }

        synchronized (statLock) {
            if (cts == CombatOrders) {
                chr.setCombatOrders(0);
            }
            Option opt = getOption(cts);

            Summon summon = opt.summon;
            if (summon != null && !SkillConstants.isExplodeOnDeathSummon(summon.getSkillID()) && !(summon.getSkillID() >= 42111100 && summon.getSkillID() <= 42111103)) { // Not null and not Tengu Strike
                if (summon.getField() != null) {
                    summon.getField().removeSummon(summon);
                }
                opt.summon = null;
            }

            for (var sum : opt.summons) {
                if (sum != null && sum.getField() != null) {
                    sum.getField().removeSummon(sum);
                }
            }
            opt.summons = new ArrayList<>();


            for (Map.Entry<BaseStat, Integer> stats : BaseStat.getFromCTS(chr, cts, opt).entrySet()) {
                removeBaseStat(stats.getKey(), stats.getValue());
            }
            getRemovedStats().put(cts, getCurrentStats().get(cts));
            getCurrentStats().remove(cts);
            sendResetStatPacket(cts == RideVehicle || cts == RideVehicleExpire);

            // Handler for specific CTSs
            if (getChr() != null && getChr().getJobHandler() != null) {
                Events.onRemoveCTS(getChr(), cts, opt);

                if (SkillConstants.isLowerStackCTS(cts) && SkillConstants.getStackByCTS(cts, opt) > 0) {
                    return;
                }
            }

            if (TSIndex.isTwoState(cts)) {
                getTSBByTSIndex(TSIndex.getTSEFromCTS(cts)).reset();
            }

            if (!chr.isUnloaded()) {
                chr.capHpMpToMax();
            }

            if (cts == Lapidification && removeByTimer) { //Kill player because lapidification ran out
                getChr().die();
            }
        }
    }

    public void removeIndieStat(CharacterTemporaryStat cts, Option option) {
        synchronized (statLock) {
            List<Option> optList = new ArrayList<>();
            optList.add(option);
            getRemovedStats().put(cts, optList);

            for (Map.Entry<BaseStat, Integer> stats : BaseStat.getFromCTS(chr, cts, option).entrySet()) {
                removeBaseStat(stats.getKey(), stats.getValue());
            }
        }

        if (getCurrentStats().containsKey(cts)) {
            Summon summon = option.summon;
            if (summon != null && !SkillConstants.isExplodeOnDeathSummon(summon.getSkillID()) && !(summon.getSkillID() >= 42111100 && summon.getSkillID() <= 42111103)) { // Not null and not Tengu Strike
                if (summon.getField() != null) {
                    summon.getField().removeSummon(summon);
                }
                option.summon = null;
            }

            for (var sum : option.summons) {
                if (sum != null && sum.getField() != null) {
                    sum.getField().removeSummon(sum);
                }
            }
            option.summons = new ArrayList<>();

            synchronized (statLock) {
                getCurrentStats().get(cts).remove(option);
                if (getCurrentStats().get(cts).size() == 0) {
                    getCurrentStats().remove(cts);
                }
            }
        }

        sendResetStatPacket();

        // Handler for specific CTSs
        if (getChr() != null && getChr().getJobHandler() != null) {
            Events.onRemoveCTS(getChr(), cts, option);
        }

        if (!chr.isUnloaded()) {
            chr.capHpMpToMax();
        }
    }

    public boolean hasNewStat(CharacterTemporaryStat cts) {
        return newStats.containsKey(cts);
    }

    public boolean hasStat(CharacterTemporaryStat cts) {
        return getCurrentStats().containsKey(cts);
    }

    public boolean hasStat(Map<CharacterTemporaryStat, List<Option>> collection, CharacterTemporaryStat cts) {
        return collection.containsKey(cts);
    }

    public Option getOption(CharacterTemporaryStat cts) {
        if (getCurrentStats() == null) {
            return new Option();
        }

        var options = getCurrentStats().get(cts);
        if (options != null && options.size() > 0) {
            return options.get(0);
        }

        return new Option();
    }

    public Option getOptionElseNull(CharacterTemporaryStat cts) {
        if (hasStat(cts)) {
            return getCurrentStats().get(cts).get(0);
        }
        return null;
    }

    public List<Option> getOptions(CharacterTemporaryStat cts) {
        if (hasStat(cts)) {
            return getCurrentStats().get(cts);
        }
        return new ArrayList<>();
    }

    public long getRemainingTime(CharacterTemporaryStat cts, int skillId) {
        if (getOptByCTSAndSkill(cts, skillId) != null) {
            Option opt = getOptByCTSAndSkill(cts, skillId);
            return opt.getRemainingTime();
        }
        return 0;
    }

    public int[] getMaskByCollection(Map<CharacterTemporaryStat, List<Option>> map) {
        int[] res = new int[CharacterTemporaryStat.length];
        for (CharacterTemporaryStat cts : map.keySet()) {
            res[cts.getPos()] |= cts.getVal();
        }
        return res;
    }

    public int[] getTotalMask() {
        return getMaskByCollection(getCurrentStats());
    }

    public int[] getNewMask() {
        return getMaskByCollection(getNewStats());
    }

    public int[] getRemovedMask() {
        return getMaskByCollection(getRemovedStats());
    }

    public void encodeForLocal(OutPacket outPacket) {
        Map<CharacterTemporaryStat, List<Option>> collection = new HashMap<>(getNewStats());
        int[] mask = getMaskByCollection(collection);
        for (int i = 0; i < getNewMask().length; i++) {
            outPacket.encodeInt(mask[i]);
        }
        List<CharacterTemporaryStat> orderedAndFilteredCtsList = new ArrayList<>(getNewStats().keySet()).stream()
                .filter(cts -> cts.getOrder() != -1)
                .sorted(Comparator.comparingInt(CharacterTemporaryStat::getOrder)).toList();
        for (CharacterTemporaryStat cts : orderedAndFilteredCtsList) {
            Option o = getOption(cts);
            if (cts.isEncodeInt() || containsAllEncode4CTS(collection.keySet()) || SkillConstants.isEncode4Reason(o.rOption)) {
                outPacket.encodeInt(o.nOption);
            } else {
                outPacket.encodeShort(o.nOption);
            }
            outPacket.encodeInt(o.rOption);
            outPacket.encodeInt(o.tOption);
        }

        if (hasStat(collection, SoulMP)) {
            outPacket.encodeInt(getOption(SoulMP).xOption);
            outPacket.encodeInt(getOption(SoulMP).rOption);
        }
        if (hasStat(collection, FullSoulMP)) {
            outPacket.encodeInt(getOption(FullSoulMP).xOption);
        }
        short size = 0;
        outPacket.encodeShort(size);
        for (int i = 0; i < size; i++) {
            outPacket.encodeInt(0); // nKey
            outPacket.encodeByte(0); // bEnable
        }
        if (hasStat(collection, HayatoStance)) {
            outPacket.encodeInt(getOption(HayatoStance).xOption);
        }
        if (hasStat(collection, Unk176_471)) {
            outPacket.encodeInt(getOption(Unk176_471).xOption);
        }
        outPacket.encodeByte(getDefenseAtt());
        outPacket.encodeByte(getDefenseState());
        outPacket.encodeByte(getPvpDamage());
        outPacket.encodeInt(getOption(EtherealForm).xOption); // new 199  Red Blue Green, used in Ethereal Form  so far
        if (hasStat(collection, Dice)) {
            for (int i = 0; i < getDiceInfo().length; i++) {
                outPacket.encodeInt(diceInfo[i]);
            }
        }
        if (hasStat(collection, CurseOfCreation)) {
            outPacket.encodeInt(getOption(CurseOfCreation).xOption);
        }
        if (hasStat(collection, CurseOfDestruction)) {
            outPacket.encodeInt(getOption(CurseOfDestruction).xOption);
        }
        if (hasStat(collection, BigBangAttackCharge)) {
            outPacket.encodeInt(getOption(BigBangAttackCharge).xOption);
        }
        if (hasStat(collection, KeyDownMoving)) {
            outPacket.encodeInt(getOption(KeyDownMoving).xOption);
        }
        if (hasStat(collection, KillingPoint)) {
            outPacket.encodeByte(getOption(KillingPoint).nOption);
        }
        if (hasStat(collection, PinkbeanRollingGrade)) {
            outPacket.encodeByte(getOption(PinkbeanRollingGrade).nOption);
        }
        if (hasStat(collection, Judgement)) {
            outPacket.encodeInt(getOption(Judgement).xOption);
        }
        if (hasStat(collection, StackBuff)) {
            outPacket.encodeByte(getOption(StackBuff).mOption);
        }
        if (hasStat(collection, Trinity)) {
            outPacket.encodeByte(getOption(Trinity).mOption);
        }
        if (hasStat(collection, ElementalCharge)) {
            outPacket.encodeByte(getOption(ElementalCharge).mOption);
            outPacket.encodeShort(getOption(ElementalCharge).wOption);
            outPacket.encodeByte(getOption(ElementalCharge).uOption);
            outPacket.encodeByte(getOption(ElementalCharge).zOption);
        }
        if (hasStat(collection, LifeTidal)) {
            outPacket.encodeInt(getOption(LifeTidal).mOption);
        }
        if (hasStat(collection, AntiMagicShell)) {
            outPacket.encodeByte(getOption(AntiMagicShell).bOption);
            outPacket.encodeInt(getOption(AntiMagicShell).xOption);
        }
        if (hasStat(collection, Larkness)) {
            getLarknessManager().encode(outPacket);
        }
        if (hasStat(collection, IgnoreTargetDEF)) {
            outPacket.encodeInt(getOption(IgnoreTargetDEF).mOption);
        }
        if (hasStat(collection, StopForceAtomInfo)) {
            getStopForceAtom().encode(outPacket);
        }
        if (hasStat(collection, SmashStack)) {
            outPacket.encodeInt(getOption(SmashStack).xOption);
            outPacket.encodeInt(getOption(SmashStack).yOption);
            outPacket.encodeInt(getOption(SmashStack).zOption);
        }
        if (hasStat(collection, MobZoneState)) {
            for (int mobZoneOwnerObjId : getMobZoneStates()) {
                outPacket.encodeInt(mobZoneOwnerObjId);
            }
            outPacket.encodeInt(-1); // notify end
        }
        if (hasStat(collection, RadiantOrb)) {
            int orbSize = 0;
            outPacket.encodeInt(orbSize);
            for (int i = 0; i < orbSize; i++) {
                outPacket.encodeInt(0);
            }
        }
        if (hasStat(collection, Slow)) {
            outPacket.encodeByte(getOption(Slow).bOption);
        }
        if (hasStat(collection, IgnoreMobpdpR)) {
            outPacket.encodeByte(getOption(IgnoreMobpdpR).bOption);
        }
        if (hasStat(collection, BdR)) {
            outPacket.encodeByte(getOption(BdR).bOption);
        }
        if (hasStat(collection, DropRIncrease)) {
            outPacket.encodeInt(getOption(DropRIncrease).xOption);
            outPacket.encodeByte(getOption(DropRIncrease).bOption);
        }
        if (hasStat(collection, PoseType)) {
            outPacket.encodeByte(getOption(PoseType).bOption);
        }
        if (hasStat(collection, Beholder)) {
            outPacket.encodeInt(getOption(Beholder).sOption);
            outPacket.encodeInt(getOption(Beholder).ssOption);
        }
        if (hasStat(collection, CrossOverChain)) {
            outPacket.encodeInt(getOption(CrossOverChain).xOption);
        }
        if (hasStat(collection, Reincarnation)) {
            outPacket.encodeInt(getOption(Reincarnation).xOption);
        }
        if (hasStat(collection, ExtremeArchery)) {
            outPacket.encodeInt(getOption(ExtremeArchery).bOption);
            outPacket.encodeInt(getOption(ExtremeArchery).xOption);
        }
        if (hasStat(collection, QuiverCatridge)) {
            outPacket.encodeInt(getOption(QuiverCatridge).xOption);
        }
        if (hasStat(collection, ImmuneBarrier)) {
            outPacket.encodeInt(getOption(ImmuneBarrier).xOption);
        }
        if (hasStat(collection, ArmorPiercing)) {
            outPacket.encodeInt(getOption(ArmorPiercing).bOption);
        }
        if (hasStat(collection, SharpEyes)) {
            outPacket.encodeInt(getOption(SharpEyes).mOption);
        }
        if (hasStat(collection, AdvancedBless)) {
            outPacket.encodeInt(getOption(AdvancedBless).xOption);
        }
        if (hasStat(collection, DotHealHPPerSecond)) { // Unsure
            outPacket.encodeInt(getOption(DotHealHPPerSecond).xOption);
        }
        if (hasStat(collection, SpiritGuard)) {
            outPacket.encodeInt(getOption(SpiritGuard).nOption);
        }
        if (hasStat(collection, PreReviveOnce)) {
            outPacket.encodeInt(getOption(PreReviveOnce).xOption);
        }
        if (hasStat(collection, MastemasMark)) {
            outPacket.encodeInt(getOption(MastemasMark).xOption);
        }
        if (hasStat(collection, KnockBack)) {
            outPacket.encodeInt(getOption(KnockBack).nOption);
            outPacket.encodeInt(getOption(KnockBack).bOption);
        }
        if (hasStat(collection, ShieldAttack)) {
            outPacket.encodeInt(getOption(ShieldAttack).xOption);
        }
        if (hasStat(collection, SSFShootingAttack)) {
            outPacket.encodeInt(getOption(SSFShootingAttack).xOption);
        }
        if (hasStat(collection, BattlePvPLangEProtection)) {
            outPacket.encodeInt(getOption(BattlePvPLangEProtection).cOption);
        }
        if (hasStat(collection, PinkbeanAttackBuff)) {
            outPacket.encodeInt(getOption(PinkbeanAttackBuff).bOption);
        }
        if (hasStat(collection, RoyalGuardState)) {
            outPacket.encodeInt(getOption(RoyalGuardState).bOption);
            outPacket.encodeInt(getOption(RoyalGuardState).xOption);
        }
        if (hasStat(collection, MichaelSoulLink)) {
            outPacket.encodeInt(getOption(MichaelSoulLink).xOption);
            outPacket.encodeByte(getOption(MichaelSoulLink).bOption);
            outPacket.encodeInt(getOption(MichaelSoulLink).cOption); // chrId
            outPacket.encodeInt(getOption(MichaelSoulLink).yOption); // dmgReduce
        }
        if (hasStat(collection, AdrenalinBoost)) {
            outPacket.encodeByte(getOption(AdrenalinBoost).cOption);
        }
        if (hasStat(collection, RWCylinder)) {
            outPacket.encodeByte(getOption(RWCylinder).bOption);
            outPacket.encodeShort(getOption(RWCylinder).cOption);
            outPacket.encodeByte(getOption(RWCylinder).xOption);
        }
        if (hasStat(collection, ImpenetrableSkin)) {
            outPacket.encodeInt(getOption(ImpenetrableSkin).xOption);
        }
        if (hasStat(collection, Unk188_460)) {
            outPacket.encodeInt(getOption(Unk188_460).xOption);
        }
        if (hasStat(collection, RWMagnumBlow)) {
            outPacket.encodeShort(getOption(RWMagnumBlow).bOption);
            outPacket.encodeByte(getOption(RWMagnumBlow).xOption);
        }
        outPacket.encodeInt(getViperEnergyCharge());
        if (hasStat(collection, BladeStance)) {
            outPacket.encodeInt(getOption(BladeStance).xOption);
        }
        if (hasStat(collection, DarkSight)) {
            outPacket.encodeInt(getOption(DarkSight).cOption);
            outPacket.encodeInt(getOption(DarkSight).xOption);
        }
        if (hasStat(collection, Stigma)) {
            outPacket.encodeInt(getOption(Stigma).bOption);
        }
        // new 188 until TwoState
        if (hasStat(collection, ExtraSkillCTS)) {
            outPacket.encodeInt(getOption(ExtraSkillCTS).xOption);
        }
        if (hasStat(collection, CriticalGrowing)) {
            outPacket.encodeInt(getOption(CriticalGrowing).xOption);
        }
        if (hasStat(collection, Ember)) {
            outPacket.encodeInt(getOption(Ember).xOption);
        }
        if (hasStat(collection, PickPocket)) {
            outPacket.encodeInt(getOption(PickPocket).xOption);
        }
        if (hasStat(collection, DivineEcho)) {
            outPacket.encodeShort(getOption(DivineEcho).xOption);
        }
        if (hasStat(collection, DemonFrenzy)) {
            outPacket.encodeShort(getOption(DemonFrenzy).xOption);
        }
        if (hasStat(collection, ShadowSpear)) {
            outPacket.encodeShort(getOption(ShadowSpear).xOption);
        }
        if (hasStat(collection, RhoAias)) {
            outPacket.encodeInt(getOption(RhoAias).xOption);
            outPacket.encodeInt(getOption(RhoAias).cOption);
            outPacket.encodeInt(getOption(RhoAias).bOption);
            outPacket.encodeInt(getOption(RhoAias).wOption);
        }
        if (hasStat(collection, VampDeath)) { // incorrect?
            outPacket.encodeInt(getOption(VampDeath).xOption);
        }
        if (hasStat(collection, HolyMagicShell)) {
            outPacket.encodeInt(getOption(HolyMagicShell).xOption);
        }
        for (int i = 0; i < TSIndex.values().length; i++) {
            if (hasStat(collection, TSIndex.getCTSFromTwoStatIndex(i))) {
                getTwoStates().get(i).encode(TSIndex.getCTSFromTwoStatIndex(i), outPacket);
            }
        }
        encodeIndieTempStat(outPacket, collection);
        if (hasStat(collection, UsingScouter)) {
            // skillID check: 80011295
            outPacket.encodeInt(getOption(UsingScouter).nOption);
            outPacket.encodeInt(getOption(UsingScouter).xOption);
        }
        if (hasStat(collection, SylvidiaFlight)) {
            outPacket.encodeInt(getOption(SylvidiaFlight).xOption);
        }
        if (hasStat(collection, WingsOfGlory)) {
            outPacket.encodeInt(getOption(WingsOfGlory).xOption);
            outPacket.encodeInt(getOption(WingsOfGlory).cOption);
        }
        if (hasStat(collection, LucentBrand)) {
            outPacket.encodeInt(getOption(LucentBrand).xOption);
            outPacket.encodeInt(getOption(LucentBrand).cOption);
        }
        if (hasStat(collection, TrickBladeMobStat)) {
            outPacket.encodeInt(getOption(TrickBladeMobStat).xOption);
        }
        if (hasStat(collection, MuscleMemory)) {
            outPacket.encodeInt(getOption(MuscleMemory).xOption);
        }
        if (hasStat(collection, OverloadMode)) {
            outPacket.encodeInt(getOption(OverloadMode).xOption);
        }
        if (hasStat(collection, SpecterEnergy)) {
            outPacket.encodeInt(getOption(SpecterEnergy).xOption); // energy (out of 1000)
        }
        if (hasStat(collection, BasicCast)) {
            outPacket.encodeInt(getOption(BasicCast).xOption);
            outPacket.encodeInt(getOption(BasicCast).cOption);
        }
        if (hasStat(collection, ScarletCast)) {
            outPacket.encodeInt(getOption(ScarletCast).xOption);
            outPacket.encodeInt(getOption(ScarletCast).cOption);
        }
        if (hasStat(collection, GustCast)) {
            outPacket.encodeInt(getOption(GustCast).xOption);
            outPacket.encodeInt(getOption(GustCast).cOption);
        }
        if (hasStat(collection, AbyssalCast)) {
            outPacket.encodeInt(getOption(AbyssalCast).xOption);
            outPacket.encodeInt(getOption(AbyssalCast).cOption);
        }
        if (hasStat(collection, WillPoison)) {
            outPacket.encodeInt(getOption(WillPoison).xOption);
        }
        if (hasStat(collection, InfernoSphere)) {
            outPacket.encodeInt(getOption(InfernoSphere).xOption);
        }
        if (hasStat(collection, PhantomMark)) {
            outPacket.encodeInt(getOption(PhantomMark).xOption);
        }
        if (hasStat(collection, PhantomMarkMobStat)) {
            outPacket.encodeInt(getOption(PhantomMarkMobStat).xOption);
        }
        if (hasStat(collection, Unk218_590)) {
            outPacket.encodeInt(getOption(Unk218_590).xOption);
            outPacket.encodeInt(getOption(Unk218_590).yOption);
        }
        if (hasStat(collection, TreasureHunt)) {
            outPacket.encodeInt(getOption(TreasureHunt).xOption);
            outPacket.encodeInt(getOption(TreasureHunt).yOption);
        }
        if (hasStat(collection, PMdReduce)) {
            outPacket.encodeInt(getOption(PMdReduce).xOption);
        }
        if (hasStat(collection, ForbidEquipChange)) {
            outPacket.encodeInt(getOption(ForbidEquipChange).xOption);
        }
        if (hasStat(collection, TanadianRuin)) {
            outPacket.encodeInt(getOption(TanadianRuin).xOption);
        }
        if (hasStat(collection, ComboCounter)) {
            outPacket.encodeInt(getOption(ComboCounter).xOption); // bHide
        }
        if (hasStat(collection, BlessingVSkill)) {
            outPacket.encodeInt(getOption(BlessingVSkill).xOption); // Remaining Bypasses for Nova Blessing | Not used by others
        }
        if (hasStat(collection, AncientGuidance)) {
            outPacket.encodeInt(getOption(AncientGuidance).xOption);
            outPacket.encodeInt(getOption(AncientGuidance).yOption);
        }
        if (hasStat(collection, BattlePvPWonkyAttack)) {
            outPacket.encodeInt(getOption(BattlePvPWonkyAttack).xOption);
        }
        if (hasStat(collection, BattlePvPWonkyProtection)) {
            outPacket.encodeInt(getOption(BattlePvPWonkyProtection).xOption);
        }
        if (hasStat(collection, HolySymbol)) {
            outPacket.encodeInt(getOption(HolySymbol).xOption);
            outPacket.encodeInt(getOption(HolySymbol).yOption);
            outPacket.encodeInt(getOption(HolySymbol).zOption);
            outPacket.encodeInt(getOption(HolySymbol).wOption);
            outPacket.encodeInt(getOption(HolySymbol).bOption);
            outPacket.encodeInt(getOption(HolySymbol).cOption);
        }
        if (hasStat(collection, Unk208_597)) {
            outPacket.encodeInt(getOption(Unk208_597).xOption);
            outPacket.encodeInt(getOption(Unk208_597).yOption);
            outPacket.encodeInt(getOption(Unk208_597).zOption);
        }
        if (hasStat(collection, AT_Attributes)) {
            outPacket.encodeInt(getOption(AT_Attributes).xOption);
            outPacket.encodeInt(getOption(AT_Attributes).yOption);
        }
        if (hasStat(collection, AT_Energy)) {
            outPacket.encodeInt(getOption(AT_Energy).xOption); // Scroll Power
        }
        if (hasStat(collection, AT_GodsComing)) {
            outPacket.encodeInt(getOption(AT_GodsComing).xOption);
        }
        if (hasStat(collection, EmpiricalKnowledge)) {
            outPacket.encodeInt(getOption(EmpiricalKnowledge).xOption); // Mob Object ID
        }
        if (hasStat(collection, Unk209_611)) {
            outPacket.encodeInt(getOption(Unk209_611).xOption);
        }
        if (hasStat(collection, LW_Nobility)) {
            outPacket.encodeInt(getOption(LW_Nobility).xOption);
            outPacket.encodeInt(getOption(LW_Nobility).bOption);
        }
        if (hasStat(collection, Revenant)) {
            outPacket.encodeInt(getOption(Revenant).xOption);
        }
        if (hasStat(collection, RevenantDamage)) {
            outPacket.encodeInt(getOption(RevenantDamage).xOption);
            outPacket.encodeInt(getOption(RevenantDamage).yOption);
        }
        if (hasStat(collection, SilhouetteMirage)) {
            outPacket.encodeInt(getOption(SilhouetteMirage).xOption);
        }
        if (hasStat(collection, RuneOfPurification)) {
            var progress = getOption(RuneOfPurification).xOption;
            outPacket.encodeShort(progress);
            outPacket.encodeInt(progress == 1000 ? 1 : 0); // max progress bar
        }
        if (hasStat(collection, HastyAura)) {
            outPacket.encodeInt(getOption(HastyAura).xOption); // Aura Owner ChrId
            outPacket.encodeInt(getOption(HastyAura).bOption); // Aura Owner bool 1=Owner 0=Affected
        }
        if (hasStat(collection, DrainingAura)) {
            outPacket.encodeInt(getOption(DrainingAura).xOption); // Aura Owner ChrId
            outPacket.encodeInt(getOption(DrainingAura).bOption); // Aura Owner bool 1=Owner 0=Affected
        }
        if (hasStat(collection, BlueAura)) {
            outPacket.encodeInt(getOption(BlueAura).xOption); // Aura Owner ChrId
            outPacket.encodeInt(getOption(BlueAura).bOption); // Aura Owner bool 1=Owner 0=Affected
            outPacket.encodeInt(getOption(BlueAura).zOption); // Dispel Hyper Passive Active
        }
        if (hasStat(collection, DarkAura)) {
            outPacket.encodeInt(getOption(DarkAura).xOption); // Aura Owner ChrId
            outPacket.encodeInt(getOption(DarkAura).bOption); // Aura Owner bool 1=Owner 0=Affected
        }
        if (hasStat(collection, WeakeningAura)) {
            outPacket.encodeInt(getOption(WeakeningAura).xOption); // Aura Owner ChrId
            outPacket.encodeInt(getOption(WeakeningAura).bOption); // Aura Owner bool 1=Owner 0=Affected
        }
        if (hasStat(collection, AuraScythe)) {
            outPacket.encodeInt(getOption(AuraScythe).xOption); // Aura Owner ChrId
            outPacket.encodeInt(getOption(AuraScythe).bOption); // Aura Owner bool 1=Owner 0=Affected
        }
        if (hasStat(collection, IceAura)) {
            outPacket.encodeInt(getOption(IceAura).xOption); // Aura Owner ChrId
            outPacket.encodeInt(getOption(IceAura).bOption); // Aura Owner bool 1=Owner 0=Affected
        }
        if (hasStat(collection, ParashockGuard)) {
            outPacket.encodeInt(getOption(ParashockGuard).xOption); // Aura Owner ChrId
            outPacket.encodeInt(getOption(ParashockGuard).bOption); // Aura Owner bool 1=Owner 0=Affected
        }
        if (hasStat(collection, DivineForce)) {
            outPacket.encodeInt(getOption(DivineForce).xOption); // Aura Owner ChrId
            outPacket.encodeInt(getOption(DivineForce).bOption); // Aura Owner bool 1=Owner 0=Affected
        }
        if (hasStat(collection, DivineSpeed)) {
            outPacket.encodeInt(getOption(DivineSpeed).xOption); // Aura Owner ChrId
            outPacket.encodeInt(getOption(DivineSpeed).bOption); // Aura Owner bool 1=Owner 0=Affected
        }
        if (hasStat(collection, IncarnationAura)) {
            outPacket.encodeInt(getOption(IncarnationAura).xOption); // Aura Owner ChrId
            outPacket.encodeInt(getOption(IncarnationAura).bOption); // Aura Owner bool 1=Owner 0=Affected
        }
        if (hasStat(collection, Unk228_634)) {
            outPacket.encodeInt(getOption(Unk228_634).xOption); // Aura Owner ChrId
            outPacket.encodeInt(getOption(Unk228_634).bOption); // Aura Owner bool 1=Owner 0=Affected
        }
        if (hasStat(collection, Unk228_635)) {
            outPacket.encodeInt(getOption(Unk228_635).xOption); // Aura Owner ChrId
            outPacket.encodeInt(getOption(Unk228_635).bOption); // Aura Owner bool 1=Owner 0=Affected
        }
        if (hasStat(collection, Unk228_636)) {
            outPacket.encodeInt(getOption(Unk228_636).xOption); // Aura Owner ChrId
            outPacket.encodeInt(getOption(Unk228_636).bOption); // Aura Owner bool 1=Owner 0=Affected
        }
        if (hasStat(collection, BlizzardTempest)) {
            outPacket.encodeInt(getOption(BlizzardTempest).xOption); // Aura Owner ChrId
            outPacket.encodeInt(getOption(BlizzardTempest).bOption); // Aura Owner bool 1=Owner 0=Affected
        }
        if (hasStat(collection, PhotonRay)) {
            outPacket.encodeInt(getOption(PhotonRay).xOption);
        }
        if (hasStat(collection, AbyssalLightning)) {
            outPacket.encodeInt(getOption(AbyssalLightning).xOption);
        }
        if (hasStat(collection, LawOfGravity)) {
            outPacket.encodeInt(getOption(LawOfGravity).xOption);
        }
        if (hasStat(collection, CrystalGate)) {
            outPacket.encodeInt(getOption(CrystalGate).xOption); // Gates Remaining
        }
        if (hasStat(collection, MuscleMemoryFinale)) {
            outPacket.encodeInt(getOption(MuscleMemoryFinale).xOption); // Remaining Finales
        }
        if (hasStat(collection, LiberationOrbPassive)) {
            outPacket.encodeInt(getOption(LiberationOrbPassive).xOption); // Light Attribute Stack
            outPacket.encodeInt(getOption(LiberationOrbPassive).yOption); // Dark Attribute Stack
        }
        if (hasStat(collection, DarknessAura)) {
            outPacket.encodeInt(getOption(DarknessAura).xOption);
        }
        if (hasStat(collection, LiberationOrb)) {
            outPacket.encodeInt(getOption(LiberationOrb).xOption);
        }
        if (hasStat(collection, BlessOfDarkness)) { // nOption = Matt
            outPacket.encodeInt(getOption(BlessOfDarkness).xOption); // Orb Count
        }
        if (hasStat(collection, ThanatosDescent)) { // Kain V skill
            outPacket.encodeInt(getOption(ThanatosDescent).xOption);
        }
        if (hasStat(collection, DragonFang)) {
            outPacket.encodeInt(getOption(DragonFang).xOption);
            outPacket.encodeInt(getOption(DragonFang).yOption);
        }
        if (hasStat(collection, Magnet)) {
            outPacket.encodeInt(getOption(Magnet).xOption);
        }
        if (hasStat(collection, Unk227_674)) {
            outPacket.encodeInt(getOption(Unk227_674).xOption);
            outPacket.encodeInt(getOption(Unk227_674).yOption);
        }
        if (hasStat(collection, Unk227_675)) {
            outPacket.encodeInt(getOption(Unk227_675).xOption);
            outPacket.encodeInt(getOption(Unk227_675).yOption);
        }
        if (hasStat(collection, Unk227_676)) {
            outPacket.encodeInt(getOption(Unk227_676).xOption);
            outPacket.encodeInt(getOption(Unk227_676).yOption);
        }
        if (hasStat(collection, Unk227_269)) {
            outPacket.encodeInt(getOption(Unk227_269).xOption);
            outPacket.encodeInt(getOption(Unk227_269).bOption);
        }
        if (hasStat(collection, Unk227_270)) {
            outPacket.encodeInt(getOption(Unk227_270).xOption);
            outPacket.encodeInt(getOption(Unk227_270).bOption);
        }
        if (hasStat(collection, NewFlying)) {
            outPacket.encodeInt(getOption(NewFlying).xOption);
        }
        if (hasStat(collection, Unk176_491)) {
            outPacket.encodeArr(Util.toPackedInt(getOption(Unk176_491).xOption));
            outPacket.encodeArr(Util.toPackedInt(getOption(Unk176_491).yOption));
        }
        if (hasStat(collection, Unk176_492)) {
            outPacket.encodeArr(Util.toPackedInt(getOption(Unk176_492).xOption));
            outPacket.encodeArr(Util.toPackedInt(getOption(Unk176_492).yOption));
        }
        if (hasStat(collection, YukiMusumeShoukan)) {
            outPacket.encodeInt(getOption(YukiMusumeShoukan).nOption);
            outPacket.encodeInt(getOption(YukiMusumeShoukan).yOption);
            outPacket.encodeInt(getOption(YukiMusumeShoukan).rOption);
        }
        if (hasStat(collection, Unk199_595)) {
            outPacket.encodeInt(getOption(Unk199_595).xOption);
            outPacket.encodeInt(getOption(Unk199_595).yOption);
            outPacket.encodeInt(getOption(Unk199_595).zOption);
        }
        if (hasStat(collection, Unk199_596)) {
            outPacket.encodeInt(getOption(Unk199_596).xOption);
            outPacket.encodeInt(getOption(Unk199_596).yOption);
            outPacket.encodeInt(getOption(Unk199_596).zOption);
        }
        if (hasStat(collection, Unk199_597)) {
            outPacket.encodeInt(getOption(Unk199_597).xOption);
            outPacket.encodeInt(getOption(Unk199_597).yOption);
            outPacket.encodeInt(getOption(Unk199_597).zOption);
            outPacket.encodeInt(getOption(Unk199_597).cOption);
        }
        if (hasStat(collection, BroAttack)) {
            outPacket.encodeInt(getOption(BroAttack).xOption);
            outPacket.encodeInt(getOption(BroAttack).yOption);
            outPacket.encodeInt(getOption(BroAttack).zOption);
        }
        if (hasStat(collection, LiberatedSpiritCircle)) {
            outPacket.encodeInt(getOption(LiberatedSpiritCircle).xOption);
        }
        if (hasStat(collection, Unk205_639)) {
            outPacket.encodeInt(getOption(Unk205_639).xOption);
        }
        if (hasStat(collection, Unk208_648)) {
            outPacket.encodeInt(getOption(Unk208_648).xOption);
        }
        if (hasStat(collection, Unk218_703)) {
            outPacket.encodeInt(getOption(Unk218_703).xOption);
        }
        if (hasStat(collection, Unk218_704)) {
            outPacket.encodeInt(getOption(Unk218_704).xOption);
        }
        if (hasStat(collection, Unk218_705)) {
            outPacket.encodeInt(getOption(Unk218_705).xOption);
        }
        if (hasStat(collection, YakshaGreatLord)) {
            outPacket.encodeInt(getOption(YakshaGreatLord).xOption);
        }
        if (hasStat(collection, Unk218_708)) {
            outPacket.encodeArr(Util.toPackedInt(getOption(Unk218_708).xOption));
            outPacket.encodeArr(Util.toPackedInt(getOption(Unk218_708).yOption));
        }
        if (hasStat(collection, Unk218_709)) {
            outPacket.encodeInt(getOption(Unk218_709).xOption);
            outPacket.encodeInt(getOption(Unk218_709).yOption);
            outPacket.encodeInt(getOption(Unk218_709).zOption);
        }
        getNewStats().clear();
    }


    public void encodeForRemote(OutPacket outPacket, Map<CharacterTemporaryStat, List<Option>> collection) {
        collection = new HashMap<>(collection);

        int[] mask = getMaskByCollection(collection);
        for (int maskElem : mask) {
            outPacket.encodeInt(maskElem);
        }
        Set<CharacterTemporaryStat> ctses = new HashSet<>(collection.keySet());
        for (CharacterTemporaryStat cts : collection.keySet()) {
            // add duplicate but distinct cts for those that have a seperate encoding
            if (cts.requiresDuplicate()) {
                ctses.add(cts.getDuplicateCts());
            }
        }
        List<CharacterTemporaryStat> orderedAndFilteredCtsList = ctses.stream()
                .filter(cts -> cts.getRemoteOrder() != -1)
                .sorted(Comparator.comparingInt(CharacterTemporaryStat::getRemoteOrder))
                .collect(Collectors.toList());
        for (CharacterTemporaryStat cts : orderedAndFilteredCtsList) {
            Option o = getOption(cts);
            switch (cts) {
                case Poison:
                    outPacket.encodeShort(o.xOption);
                    break;
                case Unk176_471:
                    outPacket.encodeByte(o.xOption);
                    break;
            }
            if (!cts.isNotEncodeAnything()) {
                if (cts.isRemoteEncode1()) {
                    outPacket.encodeByte(o.nOption);
                } else if (cts.isRemoteEncode4()) {
                    outPacket.encodeInt(o.nOption);
                } else {
                    outPacket.encodeShort(o.nOption);
                }
                if (!cts.isNotEncodeReason()) {
                    outPacket.encodeInt(o.rOption);
                }
            }
            // Extra options that are directly after the n/r encodes
            switch (cts) {
                case Contagion:
                    outPacket.encodeInt(o.tOption);
                    break;
                case BladeStance:
                case HayatoStance:
                case ImmuneBarrier:
                case PapulatusTimeLock:
                case AfterImageShock:
                case OmegaBlaster:
                    outPacket.encodeInt(o.xOption);
                    break;
                case FullSoulMP: // doesn't actually encode n/r, but r/x instead
                    outPacket.encodeInt(o.rOption);
                    outPacket.encodeInt(o.xOption);
                    break;
            }
            // Extra options that are seperated from the normal encode
            if (cts.isSeperatedDuplicate()) {
                CharacterTemporaryStat origin = cts.getOriginalFromDuplicate();
                Option originOpt = getOption(origin);
                switch (origin) {
                    case AntiMagicShell:
                        outPacket.encodeByte(originOpt.bOption);
                        outPacket.encodeInt(originOpt.xOption);
                        break;
                    case Unk199_521:
                        outPacket.encodeInt(originOpt.xOption);
                        break;
                }
            }
        }
        outPacket.encodeByte(getDefenseAtt());
        outPacket.encodeByte(getDefenseState());
        outPacket.encodeByte(getPvpDamage());
        outPacket.encodeInt(getOption(EtherealForm).xOption); // Red Blue Green, used in Ethereal Form  so far
        outPacket.encodeInt(getViperEnergyCharge()); // maybe?
        if (hasStat(collection, CurseOfCreation)) {
            outPacket.encodeInt(collection.get(CurseOfCreation).get(0).xOption);
        }
        if (hasStat(collection, CurseOfDestruction)) {
            outPacket.encodeInt(collection.get(CurseOfDestruction).get(0).xOption);
        }
        if (hasStat(collection, PoseType)) {
            outPacket.encodeByte(collection.get(PoseType).get(0).bOption);
        }
        if (hasStat(collection, BattlePvPLangEProtection)) {
            outPacket.encodeInt(collection.get(BattlePvPLangEProtection).get(0).nOption);
            outPacket.encodeInt(collection.get(BattlePvPLangEProtection).get(0).rOption);
            outPacket.encodeInt(collection.get(BattlePvPLangEProtection).get(0).cOption);
        }
        if (hasStat(collection, BattlePvPRevive)) {
            outPacket.encodeInt(collection.get(BattlePvPRevive).get(0).nOption);
            outPacket.encodeInt(collection.get(BattlePvPRevive).get(0).rOption);
        }
        if (hasStat(collection, MichaelSoulLink)) {
            outPacket.encodeInt(collection.get(MichaelSoulLink).get(0).xOption);
            outPacket.encodeByte(collection.get(MichaelSoulLink).get(0).bOption);
            outPacket.encodeInt(collection.get(MichaelSoulLink).get(0).cOption);
            outPacket.encodeInt(collection.get(MichaelSoulLink).get(0).yOption);
        }
        if (hasStat(collection, AdrenalinBoost)) {
            outPacket.encodeByte(collection.get(AdrenalinBoost).get(0).cOption);
        }
        if (hasStat(collection, Stigma)) {
            outPacket.encodeInt(collection.get(Stigma).get(0).bOption);
        }
        if (hasStat(collection, DivineEcho)) {
            outPacket.encodeShort(collection.get(DivineEcho).get(0).xOption);
        }
        if (hasStat(collection, DemonFrenzy)) {
            outPacket.encodeShort(getOption(DemonFrenzy).xOption);
        }
        if (hasStat(collection, ShadowSpear)) {
            outPacket.encodeShort(getOption(ShadowSpear).xOption);
        }
        if (hasStat(collection, RhoAias)) {
            outPacket.encodeInt(collection.get(RhoAias).get(0).xOption);
            outPacket.encodeInt(collection.get(RhoAias).get(0).cOption);
            outPacket.encodeInt(collection.get(RhoAias).get(0).bOption);
            outPacket.encodeInt(collection.get(RhoAias).get(0).wOption);
        }
        if (hasStat(collection, VampDeath)) {
            outPacket.encodeInt(collection.get(VampDeath).get(0).xOption);
        }
        if (hasStat(collection, WingsOfGlory)) {
            outPacket.encodeInt(collection.get(WingsOfGlory).get(0).xOption);
            outPacket.encodeInt(collection.get(WingsOfGlory).get(0).cOption);
        }
        if (hasStat(collection, LucentBrand)) {
            outPacket.encodeInt(collection.get(LucentBrand).get(0).xOption);
            outPacket.encodeInt(collection.get(LucentBrand).get(0).cOption);
        }
        if (hasStat(collection, BattlePvPRyudeSword)) {
            outPacket.encodeInt(collection.get(BattlePvPRyudeSword).get(0).xOption);
            outPacket.encodeInt(collection.get(BattlePvPRyudeSword).get(0).yOption);
            outPacket.encodeInt(collection.get(BattlePvPRyudeSword).get(0).zOption);
        }
        if (hasStat(collection, BattlePvPLangEClaw)) {
            outPacket.encodeInt(collection.get(BattlePvPLangEClaw).get(0).xOption);
            outPacket.encodeInt(collection.get(BattlePvPLangEClaw).get(0).yOption);
            outPacket.encodeInt(collection.get(BattlePvPLangEClaw).get(0).zOption);
        }
        if (hasStat(collection, BattlePvPWonkyAttack)) {
            outPacket.encodeInt(collection.get(BattlePvPWonkyAttack).get(0).xOption);
            outPacket.encodeInt(collection.get(BattlePvPWonkyAttack).get(0).yOption);
            outPacket.encodeInt(collection.get(BattlePvPWonkyAttack).get(0).zOption);
        }
        if (hasStat(collection, BattlePvPWonkyProtection)) {
            outPacket.encodeInt(collection.get(BattlePvPWonkyProtection).get(0).xOption);
        }

        if (getStopForceAtom() != null) {
            getStopForceAtom().encode(outPacket);
        } else {
            new StopForceAtom().encode(outPacket);
        }
        for (int i = 0; i < TSIndex.values().length; i++) {
            if (hasStat(collection, TSIndex.getCTSFromTwoStatIndex(i))) {
                getTwoStates().get(i).encode(TSIndex.getCTSFromTwoStatIndex(i), outPacket);
            }
        }
        encodeIndieTempStat(outPacket, collection);
        if (hasStat(collection, NewFlying)) {
            outPacket.encodeInt(collection.get(NewFlying).get(0).xOption);
        }
        if (hasStat(collection, SylvidiaFlight)) {
            outPacket.encodeInt(collection.get(SylvidiaFlight).get(0).xOption);
        }
        if (hasStat(collection, KeyDownMoving)) {
            outPacket.encodeInt(collection.get(KeyDownMoving).get(0).xOption);
        }
        if (hasStat(collection, WillPoison)) {
            outPacket.encodeInt(collection.get(WillPoison).get(0).xOption);
        }
        if (hasStat(collection, ComboCounter)) {
            outPacket.encodeInt(collection.get(ComboCounter).get(0).xOption);
        }
        if (hasStat(collection, Unk208_597)) {
            outPacket.encodeInt(collection.get(Unk208_597).get(0).xOption);
            outPacket.encodeInt(collection.get(Unk208_597).get(0).yOption);
            outPacket.encodeInt(collection.get(Unk208_597).get(0).zOption);
        }

        if (hasStat(collection, Unk209_611)) {
            outPacket.encodeInt(collection.get(Unk209_611).get(0).xOption);
        }

        outPacket.encodeByte(0);

        if (hasStat(collection, LW_Nobility)) {
            outPacket.encodeInt(collection.get(LW_Nobility).get(0).xOption);
            outPacket.encodeInt(collection.get(LW_Nobility).get(0).bOption);
        }

        if (hasStat(collection, HastyAura)) {
            outPacket.encodeInt(collection.get(HastyAura).get(0).xOption);
            outPacket.encodeInt(collection.get(HastyAura).get(0).bOption);
        }

        if (hasStat(collection, DrainingAura)) {
            outPacket.encodeInt(collection.get(DrainingAura).get(0).xOption);
            outPacket.encodeInt(collection.get(DrainingAura).get(0).bOption);
        }
        if (hasStat(collection, BlueAura)) {
            outPacket.encodeInt(collection.get(BlueAura).get(0).xOption); // Aura Owner ChrId
            outPacket.encodeInt(collection.get(BlueAura).get(0).bOption); // Aura Owner bool 1=Owner 0=Affected
            outPacket.encodeInt(collection.get(BlueAura).get(0).zOption); // Dispel Hyper Passive Active
        }
        if (hasStat(collection, DarkAura)) {
            outPacket.encodeInt(collection.get(DarkAura).get(0).xOption);
            outPacket.encodeInt(collection.get(DarkAura).get(0).bOption);
        }

        if (hasStat(collection, WeakeningAura)) {
            outPacket.encodeInt(collection.get(WeakeningAura).get(0).xOption);
            outPacket.encodeInt(collection.get(WeakeningAura).get(0).bOption);
        }

        if (hasStat(collection, AuraScythe)) {
            outPacket.encodeInt(collection.get(AuraScythe).get(0).xOption);
            outPacket.encodeInt(collection.get(AuraScythe).get(0).bOption);
        }

        if (hasStat(collection, IceAura)) {
            outPacket.encodeInt(collection.get(IceAura).get(0).xOption);
            outPacket.encodeInt(collection.get(IceAura).get(0).bOption);
        }

        if (hasStat(collection, ParashockGuard)) {
            outPacket.encodeInt(collection.get(ParashockGuard).get(0).xOption);
            outPacket.encodeInt(collection.get(ParashockGuard).get(0).bOption);
        }

        if (hasStat(collection, DivineForce)) {
            outPacket.encodeInt(collection.get(DivineForce).get(0).xOption);
            outPacket.encodeInt(collection.get(DivineForce).get(0).bOption);
        }

        if (hasStat(collection, DivineSpeed)) {
            outPacket.encodeInt(collection.get(DivineSpeed).get(0).xOption);
            outPacket.encodeInt(collection.get(DivineSpeed).get(0).bOption);
        }

        if (hasStat(collection, IncarnationAura)) {
            outPacket.encodeInt(collection.get(IncarnationAura).get(0).xOption);
            outPacket.encodeInt(collection.get(IncarnationAura).get(0).bOption);
        }

        if (hasStat(collection, Unk228_634)) {
            outPacket.encodeInt(collection.get(Unk228_634).get(0).xOption);
            outPacket.encodeInt(collection.get(Unk228_634).get(0).bOption);
        }

        if (hasStat(collection, Unk228_635)) {
            outPacket.encodeInt(collection.get(Unk228_635).get(0).xOption);
            outPacket.encodeInt(collection.get(Unk228_635).get(0).bOption);
        }

        if (hasStat(collection, Unk228_636)) {
            outPacket.encodeInt(collection.get(Unk228_636).get(0).xOption);
            outPacket.encodeInt(collection.get(Unk228_636).get(0).bOption);
        }

        if (hasStat(collection, BlizzardTempest)) {
            outPacket.encodeInt(collection.get(BlizzardTempest).get(0).xOption);
            outPacket.encodeInt(collection.get(BlizzardTempest).get(0).bOption);
        }

        if (hasStat(collection, PhotonRay)) {
            outPacket.encodeInt(collection.get(PhotonRay).get(0).xOption);
        }

        if (hasStat(collection, SilhouetteMirage)) {
            outPacket.encodeInt(collection.get(SilhouetteMirage).get(0).xOption);
        }

        if (hasStat(collection, BlessOfDarkness)) {
            outPacket.encodeInt(collection.get(BlessOfDarkness).get(0).xOption);
        }

        if (hasStat(collection, Unk218_703)) {
            outPacket.encodeInt(collection.get(Unk218_703).get(0).xOption);
        }

        if (hasStat(collection, Unk218_704)) {
            outPacket.encodeInt(collection.get(Unk218_704).get(0).xOption);
        }
    }

    private void encodeIndieTempStat(OutPacket outPacket, Map<CharacterTemporaryStat, List<Option>> collection) {
        Map<CharacterTemporaryStat, List<Option>> stats = collection.entrySet().stream()
                .filter(stat -> stat.getKey().isIndie())
                .collect(Collectors.toMap(Map.Entry::getKey, Map.Entry::getValue));

        TreeMap<CharacterTemporaryStat, List<Option>> sortedStats = new TreeMap<>(stats);
        for (Map.Entry<CharacterTemporaryStat, List<Option>> stat : sortedStats.entrySet()) {
            int curTime = Util.getCurrentTime();
            List<Option> options = stat.getValue();
            if (options == null) {
                outPacket.encodeInt(0);
                continue;
            }
            outPacket.encodeInt(options.size());
            for (Option option : options) {
                outPacket.encodeInt(option.rOption);
                outPacket.encodeInt(option.nOption);
                outPacket.encodeInt(option.nKey);
                outPacket.encodeInt(curTime - option.tStart); // elapsedTime

                outPacket.encodeInt(option.tOption);
                outPacket.encodeInt(0); // new 218
                int size = 0;
                outPacket.encodeInt(size);
                for (int i = 0; i < size; i++) {
                    outPacket.encodeInt(0); // MValueKey
                    outPacket.encodeInt(0); // MValue
                }
                size = 0;
                outPacket.encodeInt(size);
                for (int i = 0; i < size; i++) {
                    outPacket.encodeInt(0); // MValueKey2
                    outPacket.encodeInt(0); // MValue2
                }
            }
        }
    }

    public void encodeRemovedIndieTempStat(OutPacket outPacket) {
        TreeMap<CharacterTemporaryStat, List<Option>> sortedStats = new TreeMap<>();
        // add removed stats into a sorted map
        for (Map.Entry<CharacterTemporaryStat, List<Option>> entry : getRemovedStats().entrySet()) {
            if (entry.getKey().isIndie() && entry.getValue() != null) {
                sortedStats.put(entry.getKey(), entry.getValue());
            }
        }

        for (Map.Entry<CharacterTemporaryStat, List<Option>> stat : sortedStats.entrySet()) {
            int curTime = Util.getCurrentTime();
            // encode remaining stats
            CharacterTemporaryStat key = stat.getKey();
            List<Option> options = getOptions(key);
            options.remove(null);
            if (options == null) {
                outPacket.encodeInt(0);
                continue;
            }
            outPacket.encodeInt(options.size());
            for (Option option : options) {
                outPacket.encodeInt(option.rOption);
                outPacket.encodeInt(option.nOption);
                outPacket.encodeInt(option.nKey); // nKey
                outPacket.encodeInt(curTime - option.tStart);
                outPacket.encodeInt(option.tOption); // tTerm
                outPacket.encodeInt(0); // new 218
                int size = 0;
                outPacket.encodeInt(size);
                for (int i = 0; i < size; i++) {
                    outPacket.encodeInt(0); // MValueKey
                    outPacket.encodeInt(0); // MValue
                }
                size = 0;
                outPacket.encodeInt(size);
                for (int i = 0; i < size; i++) {
                    outPacket.encodeInt(0); // MValueKey2
                    outPacket.encodeInt(0); // MValue2
                }
            }
        }
    }

    public boolean hasNewMovingEffectingStat() {
        return getNewStats().keySet().stream().anyMatch(CharacterTemporaryStat::isMovingEffectingStat);
    }

    public boolean hasMovingEffectingStat() {
        return getCurrentStats().keySet().stream().anyMatch(CharacterTemporaryStat::isMovingEffectingStat);
    }

    public boolean hasRemovedMovingEffectingStat() {
        return getRemovedStats().keySet().stream().anyMatch(CharacterTemporaryStat::isMovingEffectingStat);
    }

    public Map<CharacterTemporaryStat, List<Option>> getCurrentStats() {
        return currentStats;
    }

    public Map<CharacterTemporaryStat, List<Option>> getNewStats() {
        return newStats;
    }

    public Map<CharacterTemporaryStat, List<Option>> getRemovedStats() {
        return removedStats;
    }

    public int getPvpDamage() {
        return pvpDamage;
    }

    public void setPvpDamage(int pvpDamage) {
        this.pvpDamage = pvpDamage;
    }

    public byte getDefenseState() {
        return defenseState;
    }

    public void setDefenseState(byte defenseState) {
        this.defenseState = defenseState;
    }

    public byte getDefenseAtt() {
        return defenseAtt;
    }

    public void setDefenseAtt(byte defenseAtt) {
        this.defenseAtt = defenseAtt;
    }

    public int[] getDiceInfo() {
        return diceInfo;
    }

    public void setDiceInfo(int[] diceInfo) {
        this.diceInfo = diceInfo;
    }

    public int[] throwDice(int roll) {
        return throwDice(roll, 0);
    }

    public int[] throwDice(int dice1, int dice2) {
        return throwDice(dice1, dice2, 0);
    }

    public static int[] array = {0, 0, 30, 20, 15, 20, 30, 20};   // Stats for Normal Rolls
    public static int[] arrayDD = {0, 0, 40, 30, 25, 30, 40, 30}; // Stats for 2 identical numbers
    public static int[] arrayLD = {0, 0, 50, 40, 40, 40, 50, 40}; // Stats for 3 identical numbers

    public int[] throwDice(int dice1, int dice2, int dice3) {
        for (int i = 0; i < diceOption.length; i++) {
            diceOption[i] = 0;
        }

        if (dice1 == dice2 && dice1 == dice3) { // 3 identical numbers
            diceOption[dice1] = arrayLD[dice1];
        } else if (dice1 == dice2) {
            diceOption[dice1] = arrayDD[dice1];
            diceOption[dice3] = array[dice3];
        } else if (dice1 == dice3) {
            diceOption[dice1] = arrayDD[dice1];
            diceOption[dice2] = array[dice2];
        } else if (dice2 == dice3) {
            diceOption[dice2] = arrayDD[dice2];
            diceOption[dice1] = array[dice1];
        } else {                                // 3 non-identical numbers
            diceOption[dice1] = array[dice1];
            diceOption[dice2] = array[dice2];
            diceOption[dice3] = array[dice3];
        }

        int[] diceinfo = new int[]{
                diceOption[3],  //nOption 3 (MHPR)
                diceOption[3],  //nOption 3 (MMPR)
                diceOption[4],  //nOption 4 (Cr)
                0,  // CritDamage Min
                0,  // ???  ( CritDamage Max (?) )
                0,  // EVAR
                0,  // AR
                0,  // ER
                diceOption[2],  //nOption 2 (PDDR)
                diceOption[2],  //nOption 2 (MDDR)
                0,  // PDR
                0,  // MDR
                diceOption[5],  //nOption 5 (PIDR)
                0,  // PDamR
                0,  // MDamR
                0,  // PADR
                0,  // MADR
                diceOption[6], //nOption 6 (EXP)
                diceOption[7], //nOption 7 (IED)
                0,  // ASRR
                0,  // TERR
                0,  // MesoRate
                0,
        };
        setDiceInfo(diceinfo);
        return diceinfo;
    }

    public Set<Integer> getMobZoneStates() {
        return mobZoneStates;
    }

    public void setMobZoneStates(Set<Integer> mobZoneOwnerObjId) {
        this.mobZoneStates = mobZoneOwnerObjId;
    }

    public void addMobZoneState(int mobZoneOwnerObjId) {
        getMobZoneStates().add(mobZoneOwnerObjId);
    }

    public void removeMobZoneState(int mobZoneOwnerObjId) {
        getMobZoneStates().removeIf(i -> i == mobZoneOwnerObjId);
    }

    public int getViperEnergyCharge() {
        return viperEnergyCharge;
    }

    public void setViperEnergyCharge(int viperEnergyCharge) {
        this.viperEnergyCharge = viperEnergyCharge;
    }

    public StopForceAtom getStopForceAtom() {
        return stopForceAtom;
    }

    public void setStopForceAtom(StopForceAtom stopForceAtom) {
        this.stopForceAtom = stopForceAtom;
    }

    public LarknessManager getLarknessManager() {
        return larknessManager;
    }

    public Char getChr() {
        return chr;
    }

    public void sendSetStatPacket() {
        Char copy = chr.getCopy();
        if (copy != null) {
            chr.write(UserRemote.setTemporaryStat(copy, (short) 0));
        }
        synchronized (statLock) {
            if (newStats.size() != 0) {
                if (chr.getField() != null) {
                    getChr().getField().broadcastPacket(UserRemote.setTemporaryStat(getChr(), (short) 0), getChr());
                }
                getChr().write(WvsContext.temporaryStatSet(this));
            }
        }
    }

    public void sendResetStatPacket() {
        sendResetStatPacket(false);
    }

    public void sendResetStatPacket(boolean demount) {
        synchronized (statLock) {
            if (getRemovedStats() != null && getRemovedStats().size() > 0) {
                var localPacket = WvsContext.temporaryStatReset(this, demount);
                var chr = getChr();

                if (chr.getField() != null) {
                    chr.getField().broadcastPacket(UserRemote.resetTemporaryStat(getChr()), getChr());
                }

                chr.write(localPacket);
                var copy = chr.getCopy();
                if (copy != null) {
                    chr.write(UserRemote.resetTemporaryStat(copy));
                }

                if (chr.isChangingChannel() || chr.isInCashShop() || chr.isInAuctionHouse()) {
                    chr.getTemporaryStatManager().getResetStatsUpdate().add(localPacket);
                }

                getRemovedStats().clear();
            }
        }
    }

    public void removeAllDebuffs() {
        if (hasStat(Stun)) {
            removeStat(CharacterTemporaryStat.Stun);
        }
        if (hasStat(Poison)) {
            removeStat(CharacterTemporaryStat.Poison);
        }
        if (hasStat(Seal)) {
            removeStat(CharacterTemporaryStat.Seal);
        }
        if (hasStat(Darkness)) {
            removeStat(CharacterTemporaryStat.Darkness);
        }
        if (hasStat(Thaw)) {
            removeStat(CharacterTemporaryStat.Thaw);
        }
        if (hasStat(Weakness)) {
            removeStat(CharacterTemporaryStat.Weakness);
        }
        if (hasStat(Curse)) {
            removeStat(CharacterTemporaryStat.Curse);
        }
        if (hasStat(Slow)) {
            removeStat(CharacterTemporaryStat.Slow);
        }
        if (hasStat(Blind)) {
            removeStat(CharacterTemporaryStat.Blind);
        }
        if (hasStat(Attract)) {
            removeStat(Attract);
        }
        if (hasStat(FireBomb)) {
            removeStat(FireBomb);
        }
        if (hasStat(PainMark)) {
            removeStat(PainMark);
        }
        if (hasStat(DeathMark)) {
            removeStat(DeathMark);
        }
        sendResetStatPacket();
    }

    public void setLarknessManager(LarknessManager larknessManager) {
        this.larknessManager = larknessManager;
    }

    public Set<AffectedArea> getAffectedAreas() {
        return affectedAreas;
    }

    public void addAffectedArea(AffectedArea aa) {
        getAffectedAreas().add(aa);
    }

    public void removeAffectedArea(AffectedArea aa) {
        getAffectedAreas().remove(aa);
        if (!SkillConstants.isNoRemoveAA(aa.getSkillID())) {
            removeStatsBySkill(aa.getSkillID());
        }
    }

    public boolean hasAffectedArea(AffectedArea affectedArea) {
        return getAffectedAreas().contains(affectedArea);
    }

    public boolean hasStatBySkillId(int skillId) {
        for (CharacterTemporaryStat cts : getCurrentStats().keySet()) {
            if (getOption(cts).rOption == skillId || getOption(cts).rOption == skillId) {
                return true;
            }
        }
        return false;
    }

    public Map<CharacterTemporaryStat, Option> removeStatsBySkill(int skillId) {
        Map<CharacterTemporaryStat, Option> removedMap = new HashMap<>();
        for (CharacterTemporaryStat cts : getCurrentStats().keySet()) {
            var option = getOption(cts);

            Option checkOpt = new Option();
            checkOpt.rOption = skillId;
            if (cts.isIndie() && getOptions(cts) != null && getOptions(cts).contains(checkOpt)) {
                Option o = Util.findWithPred(getOptions(cts), opt -> opt.equals(checkOpt));
                if (o == null) {
                    log.error("Found option null, yet the options contained it?");
                } else {
                    removedMap.put(cts, o);
                }
            } else if (option.rOption == skillId) {
                removedMap.put(cts, getOption(cts));
            }
        }
        removedMap.forEach((cts, opt) -> {
            if (cts.isIndie()) {
                removeIndieStat(cts, opt);
            } else {
                removeStat(cts);
            }
        });

        return removedMap;
    }

    public void addSoulMPFromMobDeath() {
        if (hasStat(SoulMP)) {
            Option o = getOption(SoulMP);

            if (o.nOption < ItemConstants.MAX_SOUL_CAPACITY) {
                o.nOption = Math.min(ItemConstants.MAX_SOUL_CAPACITY, o.nOption + ItemConstants.MOB_DEATH_SOUL_MP_COUNT);
                putCharacterStatValue(SoulMP, o);
/*                if (o.nOption >= ItemConstants.MAX_SOUL_CAPACITY && !hasStat(FullSoulMP)) {
                    Option o2 = new Option();
                    o2.rOption = ItemConstants.getSoulSkillFromSoulID(((Equip) chr.getEquippedItemByBodyPart(BodyPart.Weapon)).getSoulOptionId());
                    if (o2.rOption == 0) {
                        System.out.println(String.format("Unknown corresponding skill for soul socket id %d!",
                                ((Equip) chr.getEquippedItemByBodyPart(BodyPart.Weapon)).getSoulOptionId()));
                    }
                    o2.nOption = ItemConstants.MAX_SOUL_CAPACITY;
                    o2.xOption = ItemConstants.MAX_SOUL_CAPACITY;
                    putCharacterStatValue(FullSoulMP, o2);
                }*/
            }
            sendSetStatPacket();
        }
    }

    public void updateSoulMP(int nOpt) {
        if (hasStat(SoulMP)) {
            Option prev = getOption(SoulMP);
            Option o = new Option();
            o.nOption = Math.min(1000, Math.max(0, nOpt));
            o.rOption = prev.rOption;
            o.xOption = prev.xOption;
            putCharacterStatValue(SoulMP, o);
            removeStat(FullSoulMP);
            sendSetStatPacket();
        }
    }

    public void updateBuff(CharacterTemporaryStat cts, Option o) {
        Option oldOpt = getOptByCTSAndSkill(cts, o.rOption);
        if (oldOpt != null) {
            Option newOpt = oldOpt.deepCopy();
            newOpt.nKey = Util.random.nextInt();
            newOpt.tOption = (int) getRemainingTime(cts, o.rOption);
            newOpt.setInMillis(true);

            putCharacterStatValue(cts, newOpt, true);
            sendSetStatPacket();
        }
    }

    public void updateBuffExtendTime(CharacterTemporaryStat cts, Option o) {
        Option oldOpt = getOptByCTSAndSkill(cts, o.rOption);
        if (oldOpt != null) {
            Option newOpt = oldOpt.deepCopy();
            newOpt.nKey = Util.random.nextInt();

            putCharacterStatValue(cts, newOpt, true);
            sendSetStatPacket();
        }
    }

    public void putCharacterStatValueFromMobSkill(CharacterTemporaryStat cts, Option o) {
        if (cts == null) {
            return;
        }

        o.byMob = true;
        o.rOption |= o.slv << 16; // mob skills are encoded differently: not an int, but short (skill ID), then short (slv).

        if (cts.equals(Stun) && Util.getCurrentTime() <= lastStun + (o.tOption * 1000) + GameConstants.STUN_COOLDOWN * 1000) {
            return;
        }
        putCharacterStatValue(cts, o);
        if (cts.equals(Stun)) {
            lastStun = Util.getCurrentTime();
        }
        Job sourceJobHandler = chr.getJobHandler();
        sourceJobHandler.handleMobDebuffSkill(chr);
    }

    public void removeAllStats() {
        Map<CharacterTemporaryStat, List<Option>> stats = new HashMap<>();
        for (Map.Entry<CharacterTemporaryStat, List<Option>> entry : getNewStats().entrySet()) {
            stats.put(entry.getKey(), entry.getValue());
        }
        for (Map.Entry<CharacterTemporaryStat, List<Option>> entry : getCurrentStats().entrySet()) {
            stats.put(entry.getKey(), entry.getValue());
        }

        for (var entry : stats.entrySet()) {
            var cts = entry.getKey();
            var options = new HashSet<>(entry.getValue());
            if (!cts.isNotRemovedOnDeath()) {
                if (cts.isIndie()) {
                    for (var o : options) {
                        removeIndieStat(cts, o);
                    }
                } else {
                    removeStat(cts);
                }
            }
        }
    }

    public Map<BaseStat, Integer> getBaseStats() {
        return baseStats;
    }

    public Map<BaseStat, List<Integer>> getNonAddBaseStats() {
        return nonAddBaseStats;
    }

    public void addBaseStat(BaseStat bs, int value) {
        if (bs.isNonAdditiveStat()) {
            if (!getNonAddBaseStats().containsKey(bs)) {
                getNonAddBaseStats().put(bs, new ArrayList<>());
            }
            getNonAddBaseStats().get(bs).add(value);
        } else {
            getBaseStats().put(bs, getBaseStats().getOrDefault(bs, 0) + value);
        }
    }

    public void removeBaseStat(BaseStat bs, int value) {
        addBaseStat(bs, -value);
    }

    public long getTotalNOptionOfStat(CharacterTemporaryStat cts) {
        if (cts.isIndie()) {
            return getOptions(cts).stream().mapToLong(o -> o.nOption).sum();
        } else {
            return getOptions(cts).stream().mapToLong(o -> o.nOption).sum();
        }
    }

    public void increaseGolluxStack() {
        int maxStack = BossConstants.MAX_GOLLUX_STACKS;
        int stack = getCurrentStats().get(Stigma) != null ? getCurrentStats().get(Stigma).get(0).nOption : 0;
        stack++;
        Option o = new Option();
        if (stack >= maxStack) {
            chr.damage(chr.getHP());
            stack = maxStack;
        }
        o.nOption = stack;
        o.rOption = 800;
        o.bOption = maxStack;
        putCharacterStatValue(Stigma, o);
        // no tOption  as it would probably be permanent (till death)
        sendSetStatPacket();
    }

    public Set<OutPacket> getResetStatsUpdate() {
        return resetStatsUpdate;
    }

    public void resendLostStatResetPackets() {
        for (var packet : getResetStatsUpdate()) {
            chr.write(packet);
        }
        getResetStatsUpdate().clear();
    }

    public boolean isInvincible() {
        return hasStat(IndieNotDamaged) || hasStat(NotDamaged);
    }

    public List<CharacterTemporaryStat> getProtectiveShields() {
        return getCurrentStats().keySet().stream().filter(CharacterTemporaryStat::isProtectiveShield).collect(Collectors.toList());
    }

    public void update() {
        var toRemove = new HashSet<CharacterTemporaryStat>();
        var toRemoveIndie = new HashSet<Tuple<CharacterTemporaryStat, Option>>();

        synchronized (statLock) {
            for (var entry : getCurrentStats().entrySet()) {
                var cts = entry.getKey();
                if (cts.isIndie()) {
                    for (var opt : entry.getValue()) {
                        var endTime = opt.tStartLong + opt.tOption;
                        if (opt.tOption != 0 && FileTime.isExpired(endTime)) {
                            toRemoveIndie.add(new Tuple<>(cts, opt));
                        }
                    }
                } else if (TSIndex.isTwoState(cts)) {
                    TemporaryStatBase tsb = getTSBByTSIndex(TSIndex.getTSEFromCTS(cts));
                    if (tsb.hasExpired()) {
                        removeStat(cts);
                    }
                } else {
                    var opt = entry.getValue().get(0);
                    var endTime = opt.tStartLong + opt.tOption;
                    if (opt.tOption != 0 && FileTime.isExpired(endTime)) {
                        toRemove.add(cts);
                    }
                }
            }
        }
        toRemove.forEach(this::removeStat);
        toRemoveIndie.forEach(tup -> removeIndieStat(tup.getLeft(), tup.getRight()));
    }
}
