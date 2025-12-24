package net.swordie.ms.life.mob;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.skills.Option;
import net.swordie.ms.client.character.skills.Skill;
import net.swordie.ms.client.character.skills.SkillStat;
import net.swordie.ms.client.character.skills.info.SkillInfo;
import net.swordie.ms.connection.OutPacket;
import net.swordie.ms.connection.packet.BattleRecordMan;
import net.swordie.ms.connection.packet.MobPool;
import net.swordie.ms.constants.SkillConstants;
import net.swordie.ms.enums.BaseStat;
import net.swordie.ms.handlers.executors.EventManager;
import net.swordie.ms.life.mob.skill.BurnedInfo;
import net.swordie.ms.loaders.SkillData;
import net.swordie.ms.util.FileTime;
import net.swordie.ms.util.Util;

import java.util.*;
import java.util.concurrent.ScheduledFuture;
import java.util.stream.Collectors;

import static net.swordie.ms.life.mob.MobStat.*;


public class MobTemporaryStat {
	private static final long STUN_COOLDOWN = 60000; // 1 minute

	private final TreeMap<MobStat, Option> currentStatVals = new TreeMap<>();
	private final TreeMap<MobStat, Option> newStatVals = new TreeMap<>();
	private final TreeMap<MobStat, Option> removedStatVals = new TreeMap<>();
	private final TreeMap<MobStat, List<Option>> indieStatVals = new TreeMap<>();
	private final Map<Integer, Map<Integer, List<BurnedInfo>>> burnedInfos = new HashMap<>(); // chrId -> skillId -> bis
	private final Map<MobStat, Long> mobStatEndTimes = new HashMap<>(); // mobstat -> long end time

	private Map<BurnedInfo, ScheduledFuture> burnCancelSchedules = new HashMap<>();
	private Map<BurnedInfo, ScheduledFuture> burnSchedules = new HashMap<>();
	private String linkTeam;

	private Mob mob;
	private long lastStunTime;
	// Separate Incapacitate Skills
	private Map<Integer, Long> stunCooldownMap = new HashMap<>(); // Used for skills that stun and don't share a cooldown with the other stun skills. Example: Critical Bind(Zero)

	public MobTemporaryStat(Mob mob) {
		this.mob = mob;
	}

	public MobTemporaryStat deepCopy() {
		MobTemporaryStat copy = new MobTemporaryStat(getMob());
		for (BurnedInfo bi : getAllBurnedInfos()) {
			copy.addBurnedInfo(bi);
		}
		copy.setLinkTeam(getLinkTeam());
		for (MobStat ms : getCurrentStatVals().keySet()) {
			copy.addStatOptions(ms, getCurrentStatVals().get(ms).deepCopy());
		}
		return copy;
	}

	public Option getNewOptionsByMobStat(MobStat mobStat) {
		return getNewStatVals().getOrDefault(mobStat, null);
	}

	public Option getCurrentOptionsByMobStat(MobStat mobStat) {
		Option option;
		synchronized (currentStatVals) {
			option = getCurrentStatVals().getOrDefault(mobStat, null);
		}
		return option;
	}

	public Option getRemovedOptionsByMobStat(MobStat mobStat) {
		return getRemovedStatVals().getOrDefault(mobStat, null);
	}

	public void encode(OutPacket outPacket) {
		synchronized (newStatVals) {
			// DecodeBuffer(20) + MobStat::DecodeTemporary
			int[] mask = getNewMask();
			for (int value : mask) {
				outPacket.encodeInt(value);
			}
			encodeIndieTempStat(outPacket);
			for (Map.Entry<MobStat, Option> entry : getNewStatVals().entrySet()) {
				MobStat mobStat = entry.getKey();
				if (mobStat.ordinal() <= Unk208_94.ordinal()) {
					outPacket.encodeInt(getNewOptionsByMobStat(mobStat).nOption);
					outPacket.encodeInt(getNewOptionsByMobStat(mobStat).rOption);
					outPacket.encodeShort(getNewOptionsByMobStat(mobStat).tOption / 500);
				}
			}
			if (hasNewMobStat(PDR)) {
				outPacket.encodeInt(getNewOptionsByMobStat(PDR).cOption);
			}
			if (hasNewMobStat(MDR)) {
				outPacket.encodeInt(getNewOptionsByMobStat(MDR).cOption);
			}
			if (hasNewMobStat(Speed)) {
				outPacket.encodeByte(getNewOptionsByMobStat(Speed).mOption);
			}
			if (hasNewMobStat(Freeze)) {
				outPacket.encodeInt(getNewOptionsByMobStat(Freeze).cOption);
			}
			if (hasNewMobStat(PCounter)) {
				outPacket.encodeInt(getNewOptionsByMobStat(PCounter).wOption);
			}
			if (hasNewMobStat(MCounter)) {
				outPacket.encodeInt(getNewOptionsByMobStat(MCounter).wOption);
			}
			if (hasNewMobStat(PCounter)) {
				outPacket.encodeInt(getNewOptionsByMobStat(PCounter).mOption); // nCounterProb
				outPacket.encodeByte(getNewOptionsByMobStat(PCounter).bOption); // bCounterDelay
				outPacket.encodeInt(getNewOptionsByMobStat(PCounter).rOption); // nAggroRank
			} else if (hasNewMobStat(MCounter)) {
				outPacket.encodeInt(getNewOptionsByMobStat(MCounter).mOption); // nCounterProb
				outPacket.encodeByte(getNewOptionsByMobStat(MCounter).bOption); // bCounterDelay
				outPacket.encodeInt(getNewOptionsByMobStat(MCounter).rOption); // nAggroRank
			}
			if (hasNewMobStat(Unk205_33)) {
				outPacket.encodeInt(getNewOptionsByMobStat(Unk205_33).wOption);
				outPacket.encodeInt(getNewOptionsByMobStat(Unk205_33).pOption);
				outPacket.encodeInt(getNewOptionsByMobStat(Unk205_33).cOption);
			}
			if (hasNewMobStat(AddDamParty)) {
				outPacket.encodeInt(getNewOptionsByMobStat(AddDamParty).wOption);
				outPacket.encodeInt(getNewOptionsByMobStat(AddDamParty).pOption);
				outPacket.encodeInt(getNewOptionsByMobStat(AddDamParty).cOption);
			}
			if (hasNewMobStat(Fatality)) {
				outPacket.encodeInt(getNewOptionsByMobStat(Fatality).wOption); // chrId
				outPacket.encodeInt(getNewOptionsByMobStat(Fatality).uOption); // 0 in sniff
				outPacket.encodeInt(getNewOptionsByMobStat(Fatality).pOption); // Final Dmg% for PartyMembers
				outPacket.encodeInt(getNewOptionsByMobStat(Fatality).mOption); // 0 in sniff
			}
			if (hasNewMobStat(SpiritGate)) {
				outPacket.encodeInt(getNewOptionsByMobStat(SpiritGate).xOption);
			}
			if (hasNewMobStat(Curseweaver)) {
				outPacket.encodeInt(getNewOptionsByMobStat(Curseweaver).xOption); // sniff show always encoding of 1
			}
			if (hasNewMobStat(ElementDarkness)) {
				outPacket.encodeInt(getNewOptionsByMobStat(ElementDarkness).xOption);
			}
			if (hasNewMobStat(DeadlyCharge)) {
				outPacket.encodeInt(getNewOptionsByMobStat(DeadlyCharge).pOption);
				outPacket.encodeInt(getNewOptionsByMobStat(DeadlyCharge).pOption);
			}
			if (hasNewMobStat(Incizing)) {
				outPacket.encodeInt(getNewOptionsByMobStat(Incizing).wOption);
				outPacket.encodeInt(getNewOptionsByMobStat(Incizing).uOption);
				outPacket.encodeInt(getNewOptionsByMobStat(Incizing).pOption);
			}
			if (hasNewMobStat(BMageDebuff)) {
				outPacket.encodeInt(getNewOptionsByMobStat(BMageDebuff).cOption);
			}
			if (hasNewMobStat(DarkLightning)) {
				outPacket.encodeInt(getNewOptionsByMobStat(DarkLightning).cOption);
			}
			if (hasNewMobStat(MultiPMDR)) {
				outPacket.encodeInt(getNewOptionsByMobStat(MultiPMDR).cOption);
			}
			if (hasNewMobStat(ElementResetBySummon)) {
				outPacket.encodeInt(getNewOptionsByMobStat(ElementResetBySummon).cOption);
				outPacket.encodeInt(getNewOptionsByMobStat(ElementResetBySummon).pOption);
				outPacket.encodeInt(getNewOptionsByMobStat(ElementResetBySummon).uOption);
				outPacket.encodeInt(getNewOptionsByMobStat(ElementResetBySummon).wOption);
			}
			if (hasNewMobStat(BahamutLightElemAddDam)) {
				outPacket.encodeInt(getNewOptionsByMobStat(BahamutLightElemAddDam).pOption);
				outPacket.encodeInt(getNewOptionsByMobStat(BahamutLightElemAddDam).cOption);
			}
			if (hasNewMobStat(MultiDamSkill)) {
				outPacket.encodeInt(getNewOptionsByMobStat(MultiDamSkill).cOption);
			}
			if (hasNewMobStat(UmbralBrand)) {
				outPacket.encodeInt(getNewOptionsByMobStat(UmbralBrand).xOption); // -DEF%
				outPacket.encodeInt(getNewOptionsByMobStat(UmbralBrand).yOption);
				outPacket.encodeInt(getNewOptionsByMobStat(UmbralBrand).zOption); // rOption
			}
			if (hasNewMobStat(AddEffect)) {
				outPacket.encodeInt(getNewOptionsByMobStat(AddEffect).xOption);
			}
			if (hasNewMobStat(Unknown2)) {
				outPacket.encodeInt(getNewOptionsByMobStat(Unknown2).xOption);
			}
			if (hasNewMobStat(Poison)) {
				outPacket.encodeInt(getNewOptionsByMobStat(Poison).xOption);
			}
			if (hasNewMobStat(Ambush)) {
				outPacket.encodeInt(getNewOptionsByMobStat(Ambush).xOption);
			}
			if (hasNewMobStat(Unk209_83)) {
				outPacket.encodeInt(getNewOptionsByMobStat(Unk209_83).xOption);
			}
			if (hasNewMobStat(Suction)) {
				outPacket.encodeInt(getNewOptionsByMobStat(Suction).xOption); // chrId
			}
			if (hasNewMobStat(Unk214_86)) {
				outPacket.encodeInt(getNewOptionsByMobStat(Unk214_86).xOption);
			}
			if (hasNewMobStat(Explosion)) {
				outPacket.encodeInt(getNewOptionsByMobStat(Explosion).wOption);
			}
			if (hasNewMobStat(BurnedInfo)) {
				Set<BurnedInfo> bis = getAllBurnedInfos();
				outPacket.encodeByte(bis.size());
				for (BurnedInfo bi : bis) {
					bi.encode(outPacket);
				}
			}
			if (hasNewMobStat(InvincibleBalog)) {
				outPacket.encodeByte(getNewOptionsByMobStat(InvincibleBalog).nOption);
				outPacket.encodeByte(getNewOptionsByMobStat(InvincibleBalog).bOption);
			}
			if (hasNewMobStat(ExchangeAttack)) {
				outPacket.encodeByte(getNewOptionsByMobStat(ExchangeAttack).bOption);
			}
			if (hasNewMobStat(ExtraBuffStat)) {
				List<Option> values = getNewOptionsByMobStat(ExtraBuffStat).extraOpts;
				outPacket.encodeByte(values.size() > 0);
				if (values.size() > 0) {
					outPacket.encodeInt(getNewOptionsByMobStat(ExtraBuffStat).extraOpts.get(0).nOption); // nPAD
					outPacket.encodeInt(getNewOptionsByMobStat(ExtraBuffStat).extraOpts.get(0).mOption); // nMAD
					outPacket.encodeInt(getNewOptionsByMobStat(ExtraBuffStat).extraOpts.get(0).xOption); // nPDR
					outPacket.encodeInt(getNewOptionsByMobStat(ExtraBuffStat).extraOpts.get(0).yOption); // nMDR
				}
			}
			if (hasNewMobStat(LinkTeam)) {
				outPacket.encodeString(getLinkTeam());
			}
			if (hasNewMobStat(Unk199_99)) {
				outPacket.encodeInt(getNewOptionsByMobStat(Unk199_99).xOption);
			}
			if (hasNewMobStat(Unk199_100)) {
				outPacket.encodeLong(getNewOptionsByMobStat(Unk199_100).xOption);
			}
			if (hasNewMobStat(Unk199_101)) {
				outPacket.encodeInt(getNewOptionsByMobStat(Unk199_101).xOption);
			}
			if (hasNewMobStat(Unk199_102)) {
				outPacket.encodeInt(getNewOptionsByMobStat(Unk199_102).xOption);
			}
			if (hasNewMobStat(Unk199_103)) {
				outPacket.encodeInt(getNewOptionsByMobStat(Unk199_103).xOption);
			}
			if (hasNewMobStat(Unk199_104)) {
				outPacket.encodeInt(getNewOptionsByMobStat(Unk199_104).xOption);
			}
			if (hasNewMobStat(SoulExplosion)) {
				outPacket.encodeInt(getNewOptionsByMobStat(SoulExplosion).nOption);
				outPacket.encodeInt(getNewOptionsByMobStat(SoulExplosion).rOption);
				outPacket.encodeInt(getNewOptionsByMobStat(SoulExplosion).wOption);
			}
			if (hasNewMobStat(SeperateSoulP)) {
				outPacket.encodeInt(getNewOptionsByMobStat(SeperateSoulP).nOption);
				outPacket.encodeInt(getNewOptionsByMobStat(SeperateSoulP).rOption);
				outPacket.encodeShort(getNewOptionsByMobStat(SeperateSoulP).tOption / 500);
				outPacket.encodeInt(getNewOptionsByMobStat(SeperateSoulP).wOption);
				outPacket.encodeInt(getNewOptionsByMobStat(SeperateSoulP).uOption);
			}
			if (hasNewMobStat(SeperateSoulC)) {
				outPacket.encodeInt(getNewOptionsByMobStat(SeperateSoulC).nOption);
				outPacket.encodeInt(getNewOptionsByMobStat(SeperateSoulC).rOption);
				outPacket.encodeShort(getNewOptionsByMobStat(SeperateSoulC).tOption / 500);
				outPacket.encodeInt(getNewOptionsByMobStat(SeperateSoulC).wOption);
			}
			if (hasNewMobStat(Ember)) {
				outPacket.encodeInt(getNewOptionsByMobStat(Ember).nOption);
				outPacket.encodeInt(getNewOptionsByMobStat(Ember).rOption);
				outPacket.encodeInt(getNewOptionsByMobStat(Ember).wOption);
				outPacket.encodeInt(getNewOptionsByMobStat(Ember).tOption / 500);
				outPacket.encodeInt(getNewOptionsByMobStat(Ember).uOption);
			}
			if (hasNewMobStat(TrueSight)) {
				outPacket.encodeInt(getNewOptionsByMobStat(TrueSight).nOption); // Elemental Resistance
				outPacket.encodeInt(getNewOptionsByMobStat(TrueSight).rOption);
				outPacket.encodeInt(getNewOptionsByMobStat(TrueSight).tOption / 500);
				outPacket.encodeInt(getNewOptionsByMobStat(TrueSight).cOption);
				outPacket.encodeInt(getNewOptionsByMobStat(TrueSight).pOption);
				outPacket.encodeInt(getNewOptionsByMobStat(TrueSight).uOption);
				outPacket.encodeInt(getNewOptionsByMobStat(TrueSight).wOption);
			}
			if (hasNewMobStat(Laser)) {
				outPacket.encodeInt(getNewOptionsByMobStat(Laser).nOption);
				outPacket.encodeInt(getNewOptionsByMobStat(Laser).rOption);
				outPacket.encodeInt(getNewOptionsByMobStat(Laser).tOption / 500);
				outPacket.encodeInt(getNewOptionsByMobStat(Laser).wOption);
				outPacket.encodeInt(getNewOptionsByMobStat(Laser).uOption);
			}
			if (hasNewMobStat(Unk188_97)) {
				outPacket.encodeInt(getNewOptionsByMobStat(Unk188_97).xOption);
				outPacket.encodeInt(getNewOptionsByMobStat(Unk188_97).yOption);
				outPacket.encodeInt(getNewOptionsByMobStat(Unk188_97).zOption);
			}
			if (hasNewMobStat(Unk205_110)) {
				outPacket.encodeInt(getNewOptionsByMobStat(Unk205_110).xOption);
				outPacket.encodeInt(getNewOptionsByMobStat(Unk205_110).yOption);
			}
			if (hasNewMobStat(Unk218_124)) {
				outPacket.encodeInt(getNewOptionsByMobStat(Unk218_124).xOption);
				outPacket.encodeInt(getNewOptionsByMobStat(Unk218_124).yOption);
				outPacket.encodeInt(getNewOptionsByMobStat(Unk218_124).zOption);
			}
			if (hasCurrentMobStat(IndieMdr)) {
				outPacket.encodeInt(getNewOptionsByMobStat(IndieMdr).xOption);
				outPacket.encodeInt(getNewOptionsByMobStat(IndieMdr).yOption);
				outPacket.encodeInt(getNewOptionsByMobStat(IndieMdr).zOption);
			}
			if (hasNewMobStat(Unk218_98)) {
				outPacket.encodeInt(getNewOptionsByMobStat(Unk218_98).xOption);
				outPacket.encodeInt(getNewOptionsByMobStat(Unk218_98).yOption);
			}
			getNewStatVals().clear();
		}
	}

	public void encodeIndieTempStat(OutPacket outPacket) {
		Map<MobStat, List<Option>> stats = getIndieStatVals().entrySet().stream()
				.filter(stat -> stat.getKey().isIndie())
				.collect(Collectors.toMap(Map.Entry::getKey, Map.Entry::getValue));

		TreeMap<MobStat, List<Option>> sortedStats = new TreeMap<>(stats);
		for (Map.Entry<MobStat, List<Option>> stat : sortedStats.entrySet()) {
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

	private int[] getMaskByCollection(Map<MobStat, Option> map) {
		int[] res = new int[MobStat.LENGTH];

		for (MobStat mobStat : getIndieStatVals().keySet()) {
			res[mobStat.getPos()] |= mobStat.getVal();
		}

		for (MobStat mobStat : map.keySet()) {
			res[mobStat.getPos()] |= mobStat.getVal();
		}

		OutPacket outPacket = new OutPacket();
		for (int val : res) {
			outPacket.encodeInt(val);
		}
		return res;
	}

	public int[] getNewMask() {
		return getMaskByCollection(getNewStatVals());
	}

	public int[] getCurrentMask() {
		return getMaskByCollection(getCurrentStatVals());
	}

	public int[] getRemovedMask() {
		return getMaskByCollection(getRemovedStatVals());
	}

	public boolean hasNewMobStat(MobStat mobStat) {
		return getNewStatVals().containsKey(mobStat);
	}

	public boolean hasCurrentMobStat(MobStat mobStat) {
		return getCurrentStatVals().containsKey(mobStat);
	}

	public boolean hasAMobStat() {return getCurrentStatVals().size() > 0;}

	public boolean hasCurrentMobStatBySkillId(int skillId) {
		boolean hasStat;
		synchronized (currentStatVals) {
			hasStat = getCurrentStatVals().entrySet().stream().anyMatch(map -> map.getValue().rOption == skillId);
		}
		return hasStat;
	}

	public Option getOptByMobStatAndSkill(MobStat mobStat, int skillId) {
		if (getCurrentOptionsByMobStat(mobStat) != null) {
			for (Map.Entry<MobStat, Option> entry : getCurrentStatVals().entrySet()) {
				if (entry.getKey() == mobStat && entry.getValue().rOption == skillId) {
					return entry.getValue();
				}
			}
		}
		return null;
	}

	public boolean isCrashed() {
		return getCurrentStatVals().keySet().stream().anyMatch(MobStat::isCrash);
	}

	public boolean hasBurnFromSkillAndOwner(int skillID, int ownerCID) {
		return getBurnBySkillAndOwner(skillID, ownerCID) != null;
	}

	private synchronized List<BurnedInfo> getBurnsBySkillAndOwner(int skillID, int ownerCID) {
		return getBurnedInfos().getOrDefault(ownerCID, new HashMap<>()).getOrDefault(skillID, new ArrayList<>());
	}

	private int getAmountOfBurnsBySkillAndOwner(int skillID, int ownerCID) {
		return getBurnsBySkillAndOwner(skillID, ownerCID).size();
	}

	/**
	 * Checks if this MTS has a burn skill by a given skillID and owner character id. If the given owner's id is 0,
	 * ignores the given owner id. Takes the first burnedInfo if one exists, null otherwise.
	 *
	 * @param skillID the skill id of which the burn should exist
	 * @param ownerCID the burn skill's owner's id that should match (or 0 if ignored)
	 * @return the BurnedInfo of the burn on this MTS, or null if there is none
	 */
	public synchronized BurnedInfo getBurnBySkillAndOwner(int skillID, int ownerCID) {
		List<BurnedInfo> bis = getBurnsBySkillAndOwner(skillID, ownerCID);
		return bis.size() == 0 ? null : bis.get(0);
	}

	public synchronized Set<BurnedInfo> getBurnsFromOwner(int chrId) {
		Set<BurnedInfo> bis = new HashSet<>();
		Map<Integer, List<BurnedInfo>> chrBis = getBurnedInfos().get(chrId);
		if (chrBis != null) {
			for (List<BurnedInfo> biList : chrBis.values()) {
				bis.addAll(biList);
			}
		}
		return bis;
	}

	public synchronized boolean hasBurnFromOwner(int ownerCID) {
		return getBurnsFromOwner(ownerCID).size() > 0;
	}

	public synchronized boolean hasRemovedMobStat(MobStat mobStat) {
		return getRemovedStatVals().keySet().contains(mobStat);
	}

	public Map<MobStat, Option> getCurrentStatVals() {
		return currentStatVals;
	}

	public TreeMap<MobStat, Option> getNewStatVals() {
		return newStatVals;
	}

	public TreeMap<MobStat, Option> getRemovedStatVals() {
		return removedStatVals;
	}

	public TreeMap<MobStat, List<Option>> getIndieStatVals() {
		return indieStatVals;
	}

	public void removeMobStat(MobStat mobStat) {
		if (mobStat.isIndie()) {
			synchronized (indieStatVals) {
				// TODO logic
			}
		} else {
			synchronized (currentStatVals) {
				var currentOptionsbyMobStat = getCurrentOptionsByMobStat(mobStat);
				if (currentOptionsbyMobStat != null && currentOptionsbyMobStat.chr != null) {
					currentOptionsbyMobStat.chr.getJobHandler().handleRemoveMobStat(mobStat, getMob(), currentOptionsbyMobStat);
				}
				getRemovedStatVals().put(mobStat, getCurrentStatVals().get(mobStat));
				getCurrentStatVals().remove(mobStat);
				getMob().getField().broadcastPacket(MobPool.statReset(getMob(), (byte) 1, false));
			}
			synchronized (mobStatEndTimes) {
				getMobStatEndTimes().remove(mobStat);
			}
		}
	}

	public void removeAllMobStats(boolean sendToClient) {
		for (var ms : getCurrentStatVals().keySet()) {
			var currentOptionsbyMobStat = getCurrentOptionsByMobStat(ms);
			if (currentOptionsbyMobStat != null && currentOptionsbyMobStat.chr != null) {
				currentOptionsbyMobStat.chr.getJobHandler().handleRemoveMobStat(ms, getMob(), currentOptionsbyMobStat);
			}
			getRemovedStatVals().put(ms, getCurrentStatVals().get(ms));
		}

		if (sendToClient && getRemovedStatVals().size() > 0) {
			getMob().getField().broadcastPacket(MobPool.statReset(getMob(), (byte) 1, false));
		}

		getCurrentStatVals().clear();
		getMobStatEndTimes().clear();
	}

	/**
	 * Adds a new MobStat to this MobTemporaryStat. Will immediately broadcast the reaction to all
	 * clients.
	 * Only works for user skills, not mob skills. For the latter, use {@link
	 * #addMobSkillOptionsAndBroadCast(MobStat, Option)}.
	 *
	 * @param chr
	 * 		The character that applies the MobStat
	 * @param mobStat
	 * 		The MobStat to add.
	 * @param option
	 */
	public void addStatOptionsAndBroadcast(Char chr, MobStat mobStat, Option option) {
		addStatOptionsAndBroadcast(chr, mobStat, option, (short) 0);
	}

	public void addStatOptionsAndBroadcast(Char chr, MobStat mobStat, Option option, short delay) {
		if (chr != null && chr.getJobHandler() != null) {
			option.chr = chr;
			chr.getJobHandler().handleApplyMobStat(getMob(), mobStat, option);
		}
		addStatOptions(mobStat, option);
		if (mobStat.isCrash()) {
			mob.getField().broadcastPacket(MobPool.timeResist(getMob().getObjectId(), option));
		}
		mob.getField().broadcastPacket(MobPool.statSet(getMob(), delay));
	}

	/**
	 * Adds a new MobStat to this MobTemporary stat. Will immediately broadcast the reaction to all
	 * clients.
	 * Only works for mob skills, not user skills. For the latter, use {@link
	 * #addStatOptionsAndBroadcast(Char, MobStat, Option)}.
	 *
	 * @param mobStat
	 * 		The MobStat to add.
	 * @param o
	 * 		The option that contains the values of the stat.
	 */
	public void addMobSkillOptionsAndBroadCast(MobStat mobStat, Option o) {
		addMobSkillOptionsAndBroadCast(mobStat, o, (short) 0);
	}

	public void addMobSkillOptionsAndBroadCast(MobStat mobStat, Option o, short delay) {
		o.rOption |= o.slv << 16; // mob skills are encoded differently: not an int, but short (skill ID), then short (slv).
		addStatOptionsAndBroadcast(null, mobStat, o, delay);
	}

	public void addStatOptions(MobStat mobStat, Option option) {
		var skillId = option.rOption;
		if (mobStat.isMobStun()) {
			if (!SkillConstants.isSeparateIncapacitateSkillId(skillId)) { // Share cooldown with multiple stun skills
				if (cannotBeStunned()) {
					return;
				} else {
					setLastStunTime(System.currentTimeMillis());
				}
			} else { // Separate Cooldown for some stun skills
				if (canByStunnedBySkill(skillId)) {
					addStunCooldown(skillId, option.mobStunSkillCooldown);
				} else {
					return;
				}
			}
		}

		if (!option.isInMillis()) {
			option.tOption *= 1000;
			option.setInMillis(true);
		}
		int tAct = option.tOption;
		if (mobStat.isIndie()) {
			List<Option> currentOptions = getIndieStatVals().computeIfAbsent(mobStat, k -> new ArrayList<>());
			currentOptions.add(option);
		} else {
			synchronized (newStatVals) {
				getNewStatVals().put(mobStat, option);
			}
			synchronized (currentStatVals) {
				getCurrentStatVals().put(mobStat, option);
			}
		}
		if (tAct > 0 && mobStat != BurnedInfo) {
			synchronized (mobStatEndTimes) {
				getMobStatEndTimes().put(mobStat, System.currentTimeMillis() + tAct);
			}
		}
	}

	private void setLastStunTime(long currentTimeMillis) {
		lastStunTime = currentTimeMillis;
	}

	private boolean cannotBeStunned() {
		return lastStunTime + STUN_COOLDOWN > System.currentTimeMillis();
	}


	public Set<BurnedInfo> getAllBurnedInfos() {
		Set<BurnedInfo> bis = new HashSet<>();
		synchronized (burnedInfos) {
			for (Map<Integer, List<BurnedInfo>> chrBis : getBurnedInfos().values()) {
				for (List<BurnedInfo> biList : chrBis.values()) {
					bis.addAll(biList);
				}
			}
		}
		return bis;
	}

	public Map<Integer, Map<Integer, List<BurnedInfo>>> getBurnedInfos() {
		return burnedInfos;
	}

	public String getLinkTeam() {
		return linkTeam;
	}

	public void setLinkTeam(String linkTeam) {
		this.linkTeam = linkTeam;
	}

	public boolean hasNewMovementAffectingStat() {
		return getNewStatVals().keySet().stream().anyMatch(MobStat::isMovementAffectingStat);
	}

	public boolean hasCurrentMovementAffectingStat() {
		return getCurrentStatVals().keySet().stream().anyMatch(MobStat::isMovementAffectingStat);
	}

	public boolean hasRemovedMovementAffectingStat() {
		return getRemovedStatVals().keySet().stream().anyMatch(MobStat::isMovementAffectingStat);
	}

	public Map<MobStat, Long> getMobStatEndTimes() {
		return mobStatEndTimes;
	}

	public Mob getMob() {
		return mob;
	}

	public void setMob(Mob mob) {
		this.mob = mob;
	}

	public void clear() {
		for (ScheduledFuture t : new HashSet<>(getBurnSchedules().values())) {
			EventManager.stopTimer(t);
		}
		getBurnSchedules().clear();
		for (ScheduledFuture t : new HashSet<>(getBurnCancelSchedules().values())) {
			EventManager.stopTimer(t);
		}
		getBurnCancelSchedules().clear();
		getMobStatEndTimes().clear();
		synchronized (currentStatVals) {
			var mobStats = new HashSet<>(getCurrentStatVals().keySet());
			mobStats.forEach(this::removeMobStat);
		}
		getStunCooldownMap().clear();
	}

	public void createAndAddBurnedInfo(Char chr, Skill skill) {
		createAndAddBurnedInfo(chr, skill.getSkillId(), skill.getCurrentLevel());
	}

	public void createAndAddBurnedInfo(Char chr, int skillId, int slv) {
		createAndAddBurnedInfo(chr, skillId, slv, 1);
	}

	public void createAndAddBurnedInfo(Char chr, int skillId, int slv, int maxDotStacks) {
		SkillInfo si = SkillData.getSkillInfoById(skillId);
		int dotDmg = si.getValue(SkillStat.dot, slv);
		int dotInterval = si.getValue(SkillStat.dotInterval, slv);
		if (dotInterval <= 0) {
			dotInterval = 1;
		}
		if (maxDotStacks <= 0) {
			maxDotStacks = 1;
		}
		int dotTime = si.getValue(SkillStat.dotTime, slv);

		// DoT Duration Multiplier
		dotTime = (int) (dotTime * chr.getTotalStat(BaseStat.dotBuffTimeR) / 100D);

		createAndAddBurnedInfo(chr, mob, skillId, slv, dotDmg, dotInterval, dotTime, maxDotStacks);
	}

	public void createAndAddBurnedInfo(Char chr, int skillId, int slv, int maxDotStacks, int dotDmg) {
		SkillInfo si = SkillData.getSkillInfoById(skillId);
		int dotInterval = si.getValue(SkillStat.dotInterval, slv);
		if (dotInterval <= 0) {
			dotInterval = 1;
		}
		if (maxDotStacks <= 0) {
			maxDotStacks = 1;
		}
		int dotTime = si.getValue(SkillStat.dotTime, slv);

		// DoT Duration Multiplier
		dotTime = (int) (dotTime * chr.getTotalStat(BaseStat.dotBuffTimeR) / 100D);

		createAndAddBurnedInfo(chr, mob, skillId, slv, dotDmg, dotInterval, dotTime, maxDotStacks);
	}

	/**
	 * Creates a BurnedInfo from the given arguments. Will go until a max amount of stacks, and will override the oldest
	 * BurnedInfo if the max is reached.
	 *
	 * @param chr The Char who is the creator of the BurnedInfo
	 * @param skillId the skillId of the used skill
	 * @param slv the slv of the used skill
	 * @param dotDmg the damage % of the skill
	 * @param dotInterval the interval (seconds) of the DoT
	 * @param dotTime the amount of time the DoT takes
	 * @param maxDotStacks the max amount of DoT stacks of one skillId + chr combination
	 */
	public void createAndAddBurnedInfo(Char chr, Mob mob, int skillId, int slv, int dotDmg, int dotInterval, int dotTime, int maxDotStacks) {
		int charId = chr.getId();
		List<BurnedInfo> bis = getBurnsBySkillAndOwner(skillId, chr.getId());
		int time = dotTime * 1000;
		BurnedInfo bi = new BurnedInfo();
		bi.setCharacterId(charId);
		bi.setChr(chr);
		bi.setSkillId(skillId);
		bi.setDamage(chr.getDamageCalc().calcPDamageForPvM(mob, skillId, slv, dotDmg));
		bi.setInterval(dotInterval < 10 ? dotInterval * 1000 : dotInterval);
		bi.setDotCount(time / bi.getInterval());
		bi.setAttackDelay(0);
		bi.setDotTickIdx(0);
		bi.setDotTickDamR(0); //damage added for every tick
		bi.setDotAnimation(bi.getAttackDelay() + bi.getInterval() + time);
		bi.setStartTime(Util.getCurrentTimeLong());
		bi.setLastUpdate(Util.getCurrentTimeLong());
		bi.setEnd(Util.getCurrentTimeLong() + time);

		//Handle fixed damage mobs
		if(getMob().getMobInfo().getFixedDamage() != 0){
			bi.setDamage(getMob().getMobInfo().getFixedDamage());
		}

		long damage = bi.getDamage();
		if (bis != null && bis.size() >= maxDotStacks) {
			// replace the oldest one by a new one
			BurnedInfo toRemove = bis.get(0);
			removeBurnedInfo(toRemove, false);
		}
		addBurnedInfo(bi);
		Option o = new Option();
		o.nOption = 0;
		o.rOption = skillId;
		o.chr = chr;
		addStatOptionsAndBroadcast(chr, MobStat.BurnedInfo, o);
		ScheduledFuture sf = EventManager.addEvent(() -> removeBurnedInfo(bi, true), time);
		ScheduledFuture burn = EventManager.addFixedRateEvent(
				() -> getMob().damage(chr, damage), bi.getAttackDelay() + bi.getInterval(), bi.getInterval(), bi.getDotCount());
		getBurnCancelSchedules().put(bi, sf);
		getBurnSchedules().put(bi, burn);
	}

	private void addBurnedInfo(BurnedInfo bi) {
		int chrId = bi.getCharacterId();
		int skillId = bi.getSkillId();
		synchronized (burnedInfos) {
			if (!burnedInfos.containsKey(chrId)) {
				burnedInfos.put(chrId, new HashMap<>());
			}
			Map<Integer, List<BurnedInfo>> chrBis = burnedInfos.get(chrId);
			if (!chrBis.containsKey(skillId)) {
				chrBis.put(skillId, new ArrayList<>());
			}
			List<BurnedInfo> bis = chrBis.get(skillId);
			bis.add(bi);
			for (int i = 0; i < bis.size(); i++) {
				bis.get(i).setSuperPos(i);
			}
		}
	}

	/**
	 * Removes a BurnedInfo from this MTS, removes its schedules, notifies the Char of its damage, and broadcasts the
	 * changes to the Field.
	 *
	 * @param burnedInfo the BurnedInfo to delete
	 * @param fromSchedule whether or not this BurnedInfo was deleted according to its schedule
	 */
	public void removeBurnedInfo(BurnedInfo burnedInfo, boolean fromSchedule) {
		Char chr = burnedInfo.getChr();
		removeBurnedInfo(burnedInfo); // removes it properly from the inner list (thread safe)
		getRemovedStatVals().put(BurnedInfo, getCurrentOptionsByMobStat(BurnedInfo));
		if (getBurnedInfos().size() == 0) {
			synchronized (currentStatVals) {
				getCurrentStatVals().remove(BurnedInfo);
			}
		}
		Set<BurnedInfo> bis = getAllBurnedInfos();
		getMob().getField().broadcastPacket(MobPool.statReset(getMob(), (byte) 1, false, bis));
		if (chr.isBattleRecordOn()) {
			int count = Math.min(
					burnedInfo.getDotCount(),
					(int) ((Util.getCurrentTimeLong() - burnedInfo.getStartTime()) / burnedInfo.getInterval())
			);
			chr.write(BattleRecordMan.dotDamageInfo(burnedInfo, count));
		}
		if (!fromSchedule && getBurnCancelSchedules().get(burnedInfo) != null) {
			getBurnCancelSchedules().get(burnedInfo).cancel(true);
			getBurnSchedules().get(burnedInfo).cancel(true);
		}
		getBurnCancelSchedules().remove(burnedInfo);
		getBurnSchedules().remove(burnedInfo);

		chr.getJobHandler().handleRemoveMobStat(BurnedInfo, getMob(), null);
	}


	public void removeBurnedInfoFromChr(Char chr, boolean fromSchedule) {
		Set<BurnedInfo> bis = getBurnsFromOwner(chr.getId());
		for (var burnedInfo : bis) {
			removeBurnedInfo(burnedInfo); // removes it properly from the inner list (thread safe)
		}
		getRemovedStatVals().put(BurnedInfo, getCurrentOptionsByMobStat(BurnedInfo));
		if (getBurnedInfos().size() == 0) {
			synchronized (currentStatVals) {
				getCurrentStatVals().remove(BurnedInfo);
			}
		}
		getMob().getField().broadcastPacket(MobPool.statReset(getMob(), (byte) 1, false, bis));
		for (var burnedInfo : bis) {
			if (chr.isBattleRecordOn()) {
				int count = Math.min(
						burnedInfo.getDotCount(),
						(int) ((Util.getCurrentTimeLong() - burnedInfo.getStartTime()) / burnedInfo.getInterval())
				);
				chr.write(BattleRecordMan.dotDamageInfo(burnedInfo, count));
			}

			if (!fromSchedule && getBurnCancelSchedules().get(burnedInfo) != null) {
				getBurnCancelSchedules().get(burnedInfo).cancel(true);
				getBurnSchedules().get(burnedInfo).cancel(true);
			}
			getBurnCancelSchedules().remove(burnedInfo);
			getBurnSchedules().remove(burnedInfo);
		}

		chr.getJobHandler().handleRemoveMobStat(BurnedInfo, getMob(), null);
	}


	/**
	 * Removes a BurnedInfo from a Char's burnedinfo list. Ensures the containing map/lists are removed if their size
	 * reaches 0.
	 *
	 * @param burnedInfo the BurnedInfo to remove
	 */
	private void removeBurnedInfo(BurnedInfo burnedInfo) {
		int chrId = burnedInfo.getCharacterId();
		int skillId = burnedInfo.getSkillId();
		synchronized (burnedInfos) {
			Map<Integer, List<BurnedInfo>> chrBis = getBurnedInfos().get(chrId);
			if (chrBis != null && chrBis.containsKey(skillId)) {
				List<BurnedInfo> bis = chrBis.get(skillId);
				bis.remove(burnedInfo);
				if (bis.size() == 0) {
					chrBis.remove(skillId);
				}
			}
			if (chrBis != null && chrBis.size() == 0) {
				getBurnedInfos().remove(chrId);
			}
		}
	}

	public Map<BurnedInfo, ScheduledFuture> getBurnCancelSchedules() {
		return burnCancelSchedules;
	}

	public Map<BurnedInfo, ScheduledFuture> getBurnSchedules() {
		return burnSchedules;
	}

	public void removeBuffs() {
		removeMobStat(PowerUp);
		removeMobStat(MagicUp);
		removeMobStat(PGuardUp);
		removeMobStat(MGuardUp);
		removeMobStat(PImmune);
		removeMobStat(MImmune);
		removeMobStat(PCounter);
		removeMobStat(MCounter);
		if (hasCurrentMobStat(ACC) && getCurrentOptionsByMobStat(ACC).nOption > 0) {
			removeMobStat(ACC);
		}
		if (hasCurrentMobStat(EVA) && getCurrentOptionsByMobStat(EVA).nOption > 0) {
			removeMobStat(EVA);
		}
		getMob().getField().broadcastPacket(MobPool.statReset(getMob(), (byte) 0, false));
	}

	public void removeBurnedInfosByChr(Char chr) {
		removeBurnedInfoFromChr(chr, false);
		getMob().getField().broadcastPacket(MobPool.burnedInfoRemove(getMob().getObjectId(), Collections.singletonList(chr)));
	}

	public Map<Integer, Long> getStunCooldownMap() {
		return stunCooldownMap;
	}

	public void setStunCooldownMap(Map<Integer, Long> stunCooldownMap) {
		this.stunCooldownMap = stunCooldownMap;
	}

	public long getStunCooldownBySkill(int skillId) {
		return getStunCooldownMap().getOrDefault(skillId, 0L);
	}

	public boolean canByStunnedBySkill(int skillId) {
		return getStunCooldownBySkill(skillId) < Util.getCurrentTimeLong();
	}

	public void addStunCooldown(int skillId, int cooldownMS) {
		getStunCooldownMap().put(skillId, Util.getCurrentTimeLong() + cooldownMS);
	}

	public boolean hasInvincibilityStat() {
		return hasCurrentMobStat(Invincible);
	}

	public void update() {
		var toRemove = new HashSet<MobStat>();
		synchronized (mobStatEndTimes) {
			for (var entry : getMobStatEndTimes().entrySet()) {
				var mobStat = entry.getKey();
				var endTime = entry.getValue();
				if (FileTime.isExpired(endTime)) {
					toRemove.add(mobStat);
				}
			}
		}
		toRemove.forEach(this::removeMobStat);
	}
}
