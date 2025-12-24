package net.swordie.ms.client.jobs.adventurer.archer;

import net.swordie.ms.client.Client;
import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.CharacterStat;
import net.swordie.ms.client.character.items.Item;
import net.swordie.ms.client.character.skills.Option;
import net.swordie.ms.client.character.skills.Skill;
import net.swordie.ms.client.character.skills.SkillUseSource;
import net.swordie.ms.client.character.skills.atom.forceatom.ForceAtom;
import net.swordie.ms.client.character.skills.debuff.DebuffUtil;
import net.swordie.ms.client.character.skills.info.*;
import net.swordie.ms.client.character.skills.temp.CharacterTemporaryStat;
import net.swordie.ms.client.character.skills.temp.TemporaryStatBase;
import net.swordie.ms.client.character.skills.temp.TemporaryStatManager;
import net.swordie.ms.connection.InPacket;
import net.swordie.ms.connection.packet.*;
import net.swordie.ms.constants.JobConstants;
import net.swordie.ms.constants.MobConstants;
import net.swordie.ms.constants.SkillConstants;
import net.swordie.ms.enums.AssistType;
import net.swordie.ms.enums.ForceAtomEnum;
import net.swordie.ms.enums.MoveAbility;
import net.swordie.ms.enums.TSIndex;
import net.swordie.ms.life.AffectedArea;
import net.swordie.ms.life.Summon;
import net.swordie.ms.life.mob.Mob;
import net.swordie.ms.life.mob.MobStat;
import net.swordie.ms.life.mob.MobTemporaryStat;
import net.swordie.ms.loaders.ItemData;
import net.swordie.ms.loaders.SkillData;
import net.swordie.ms.util.Position;
import net.swordie.ms.util.Rect;
import net.swordie.ms.util.Util;
import net.swordie.ms.util.container.Tuple;
import net.swordie.ms.world.field.Field;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Random;
import java.util.stream.Collectors;

import static net.swordie.ms.client.character.skills.SkillStat.*;
import static net.swordie.ms.client.character.skills.temp.CharacterTemporaryStat.*;

public class Pathfinder extends Archer {
    private static final int MAX_RELIC_GAUGE = 1000;

    public static final int ANCIENT_CURSE = 1298;
    public static final int RETURN_TO_PARTEM = 1297;


    public static final int CARDINAL_DELUGE = 3011004; // Cardinal Force
    public static final int ANCIENT_BOW_BOOSTER = 3301010;
    public static final int CARDINAL_BURST = 3301004;
    public static final int SWARM_SHOT = 3301008;
    public static final int SWARM_SHOT_ATOM = 3301009;
    public static final int BOUNTIFUL_DELUGE = 3300005;
    public static final int CARDINAL_DELUGE_AMPLIFICATION = 3300002;
    public static final int RELIC_CHARGE_I = 3300000;


    public static final int RAVEN = 3311009;
    public static final int EVASION_BOOST_ABOW = 3310005;
    public static final int CARDINAL_BURST_AMPLIFICATION = 3311013;
    public static final int BOUNTIFUL_BURST = 3310004;
    public static final int TRIPLE_IMPACT = 3311010;
    public static final int CARDINAL_TORRENT = 3311002;
    public static final int CARDINAL_TORRENT_SWEEP = 3311003;
    public static final int GUIDANCE_OF_THE_ANCIENTS = 3310006;
    public static final int CURSEBOUND_ENDURANCE = 3311012;


    public static final int AWAKENED_RELIC = 3321034;
    public static final int SHARP_EYES_ABOW = 3321022;
    public static final int MAPLE_WARRIOR_PF = 3321023;
    public static final int HEROS_WILL_PF = 3321024;
    public static final int CARDINAL_DELUGE_ADVANCED = 3321003;
    public static final int CARDINAL_BURST_ADVANCED = 3321005;
    public static final int CARDINAL_TORRENT_ADVANCED = 3321006;
    public static final int CARDINAL_TORRENT_SWEEP_ADVANCED = 3321007;
    public static final int BOUNTIFUL_TORRENT = 3320008;
    public static final int GLYPH_OF_IMPALEMENT = 3321012;
    public static final int COMBO_ASSAULT_NONE = 3321014;
    public static final int COMBO_ASSAULT_NONE_2 = 3321015;
    public static final int COMBO_ASSAULT_DELUGE = 3321016;
    public static final int COMBO_ASSAULT_DELUGE_2 = 3321017;
    public static final int COMBO_ASSAULT_BURST = 3321018;
    public static final int COMBO_ASSAULT_BURST_2 = 3321019;
    public static final int COMBO_ASSAULT_TORRENT = 3321020;
    public static final int COMBO_ASSAULT_TORRENT_2 = 3321021;
    public static final int RELIC_CHARGE_II = 3320000;
    public static final int SHARP_EYES_ABOW_PERSIST = 3320025;
    public static final int SHARP_EYES_ABOW_GUARDBREAK = 3320026;
    public static final int SHARP_EYES_ABOW_CRITICAL_CHANCE = 3320027;
    public static final int CARDINAL_FORCE_BOUNTIFUL_ENHANCE = 3320029;
    public static final int EPIC_ADVENTURE_ABOW = 3321041;
    public static final int ANCIENT_ASTRA_NONE = 3321035;
    public static final int ANCIENT_ASTRA_DELUGE = 3321036;
    public static final int ANCIENT_ASTRA_DELUGE_ATOM = 3321037;
    public static final int ANCIENT_ASTRA_BURST = 3321039;
    public static final int ANCIENT_ASTRA_BURST_HOLD = 3321038;
    public static final int ANCIENT_ASTRA_TORRENT = 3321040;
    public static final int ILLUSION_STEP_ABOW = 3320011;


    // V skills
    public static final int NOVA_BLAST = 400031034;
    public static final int RAVEN_TEMPEST = 400031036;
    public static final int OBSIDIAN_BARRIER_NONE = 400031037;
    public static final int OBSIDIAN_BARRIER_TORRENT = 400031040;
    public static final int OBSIDIAN_BARRIER_BURST = 400031039;
    public static final int OBSIDIAN_BARRIER_DELUGE = 400031038;
    public static final int RELIC_UNBOUND = 400031057;
    public static final int RELIC_UNBOUND_DELUGE_1 = 400031047;
    public static final int RELIC_UNBOUND_DELUGE_2 = 400031048;
    public static final int RELIC_UNBOUND_BURST_1 = 400031049;
    public static final int RELIC_UNBOUND_BURST_2 = 400031050;
    public static final int RELIC_UNBOUND_TORRENT = 400031051; // Summon


    // Curse Dampening
    public static final int CURSE_DAMPENING_I = 3010001;
    public static final int CURSE_DAMPENING_II = 3300001;
    public static final int CURSE_DAMPENING_III = 3310000;
    public static final int CURSEWEAVER = 3320001;



    private static final int[] addedSkills = new int[]{
            ANCIENT_CURSE,
            RETURN_TO_PARTEM,
    };

    private static final int[] ancientSkills = new int[]{
            SWARM_SHOT,
            TRIPLE_IMPACT,
            GLYPH_OF_IMPALEMENT,
    };


    private int lastSkillID = 0;
    private long lastRelicUnboundAttack = Long.MIN_VALUE;
    private static final int intervalRelicUnboundBurst = 1000; // ms


    public Pathfinder(Char chr) {
        super(chr);
        if (isHandlerOfJob(chr.getJob())) {
            for (int skillId : addedSkills) {
                if (!chr.hasSkill(skillId)) {
                    Skill skill = SkillData.getSkillDeepCopyById(skillId);
                    skill.setCurrentLevel(1);
                    chr.addSkill(skill);
                }
            }
        }
    }

    @Override
    public boolean isHandlerOfJob(short id) {
        return JobConstants.isPathFinder(id);
    }

    public enum EmblemType {
        None(0),
        Deluge(1),
        Burst(2),
        Torrent(3);
        int val;

        EmblemType(int val) {
            this.val = val;
        }

        public int getVal() {
            return val;
        }
    }

    private boolean inDeluge() {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        return tsm.hasStat(RelicEmblem) && tsm.getOption(RelicEmblem).nOption == 1;
    }

    private boolean inBurst() {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        return tsm.hasStat(RelicEmblem) && tsm.getOption(RelicEmblem).nOption == 2;
    }

    private boolean inTorrent() {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        return tsm.hasStat(RelicEmblem) && tsm.getOption(RelicEmblem).nOption == 3;
    }

    private void setEmblem(EmblemType emblemType) {
        if (emblemType == null) {
            return;
        }
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        Option o = new Option();
        o.nOption = emblemType.getVal();
        tsm.putCharacterStatValue(RelicEmblem, o);
        tsm.sendSetStatPacket();
    }

    public void handleKeyDownSkill(Char chr, int skillID, InPacket inPacket) {
        switch (skillID) {
            case ANCIENT_ASTRA_DELUGE:
            case ANCIENT_ASTRA_BURST_HOLD:
            case ANCIENT_ASTRA_TORRENT:
                setEmblem(EmblemType.None);
                break;
            default:
                super.handleKeyDownSkill(chr, skillID, inPacket);
        }
    }

    public void handleAncientAstraRelicCost(int skillID) {
        int relicCost = chr.getSkillStatValue(forceCon, ANCIENT_ASTRA_NONE);
        reduceRelicGauge(relicCost);
        if (getRelicGauge() <= 0) {
            chr.write(UserLocal.stopKeyDownSkillRequest(skillID));
        }
    }

    private void addRelicGauge(int amount) {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        TemporaryStatBase tsb = tsm.getTSBByTSIndex(TSIndex.RelicGauge);
        int gauge = tsb.getNOption();
        gauge += amount;
        if (gauge < 0) {
            gauge = 0;
        } else if (gauge > MAX_RELIC_GAUGE) {
            gauge = MAX_RELIC_GAUGE;
        }
        tsb.setNOption(gauge);
        tsm.putCharacterStatValue(RelicGauge, tsb.getOption());
        tsm.sendSetStatPacket();
        if (chr.hasSkill(GUIDANCE_OF_THE_ANCIENTS) && amount > 0) {
            addAncientGuidanceGauge(amount);
        }
    }

    private void reduceRelicGauge(int amount) {
        addRelicGauge(-amount);
    }

    private int getRelicGauge() {
        return chr.getTemporaryStatManager().getTSBByTSIndex(TSIndex.RelicGauge).getNOption();
    }

    private void addAncientGuidanceGauge(int amount) {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        Option o = new Option();
        int newAmount = amount + getAncientGuidanceGauge();
        if (newAmount > MAX_RELIC_GAUGE) {
            resetAncientGuidanceGauge();
            giveAncientGuidanceBuff();
        } else {
            o.nOption = 1;
            o.xOption = 1;
            o.yOption = newAmount > MAX_RELIC_GAUGE ? MAX_RELIC_GAUGE : newAmount < 0 ? 0 : newAmount;
            tsm.putCharacterStatValue(AncientGuidance, o);
            tsm.sendSetStatPacket();
        }
    }

    private int getAncientGuidanceGauge() {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        return tsm.hasStat(AncientGuidance) ? tsm.getOption(AncientGuidance).yOption : 0;
    }

    private void resetAncientGuidanceGauge() {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        tsm.removeStat(AncientGuidance);
    }

    private void giveAncientGuidanceBuff() {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        Skill skill = chr.getSkill(GUIDANCE_OF_THE_ANCIENTS);
        SkillInfo si = SkillData.getSkillInfoById(skill.getSkillId());
        int slv = skill.getCurrentLevel();
        Option o1 = new Option();
        o1.nOption = si.getValue(indiePMdR, slv);
        o1.rOption = skill.getSkillId();
        o1.tOption = si.getValue(time, slv);
        tsm.putCharacterStatValue(IndiePMdR, o1);
        tsm.sendSetStatPacket();

        chr.heal(chr.getHPPerc(20));
        chr.healMP(chr.getMPPerc(20));

        chr.write(UserPacket.effect(Effect.skillUse(skill.getSkillId(), chr.getLevel(), slv, 0)));
        chr.getField().broadcastPacket(UserRemote.effect(chr.getId(), Effect.skillUse(skill.getSkillId(), chr.getLevel(), slv, 0)));
    }

    public void incrementSwiftStrikeCharge() {
        if (!chr.hasSkill(CARDINAL_TORRENT) || chr.hasSkillOnCooldown(SkillConstants.CARDINAL_TORRENT_COOLDOWN)) {
            return;
        }
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        Skill skill = chr.getSkill(CARDINAL_TORRENT);
        SkillInfo si = SkillData.getSkillInfoById(skill.getSkillId());
        int slv = skill.getCurrentLevel();
        int maxStack = si.getValue(y, slv);
        int count = 1;
        if (tsm.hasStat(StackOverTimeSkill)) {
            count = getSwiftStrikeCharge();
            if (count < maxStack) {
                count++;
            }
        }
        updateSwiftStrikeCharge(count);
        if (!hasAwakenedRelic()) {
            chr.addSkillCoolTime(SkillConstants.CARDINAL_TORRENT_COOLDOWN, si.getValue(s2, slv) * 1000);
        } else {
            chr.addSkillCoolTime(SkillConstants.CARDINAL_TORRENT_COOLDOWN, 3 * 1000); // Awakened Relic Buff effect
        }
    }

    private void updateSwiftStrikeCharge(int count) {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        Option o = new Option();
        o.nOption = count;
        o.rOption = chr.getJob();
        tsm.putCharacterStatValue(StackOverTimeSkill, o);
        tsm.sendSetStatPacket();
    }

    private int getSwiftStrikeCharge() {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        return tsm.hasStat(StackOverTimeSkill) ? tsm.getOption(StackOverTimeSkill).nOption : 0;
    }

    // Attack related methods ------------------------------------------------------------------------------------------

    @Override
    public void handleAttack(Client c, AttackInfo attackInfo) {
        Char chr = c.getChr();
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        Skill skill = chr.getSkill(attackInfo.skillId);
        int skillID = 0;
        SkillInfo si = null;
        boolean hasHitMobs = attackInfo.mobAttackInfo.size() > 0;
        int slv = 0;
        if (skill != null) {
            si = SkillData.getSkillInfoById(skill.getSkillId());
            slv = skill.getCurrentLevel();
            skillID = skill.getSkillId();
        }
        if (attackInfo.skillId != RAVEN_TEMPEST) {
            relicCost(attackInfo.skillId);
        }
        if (hasHitMobs) {
            if (attackInfo.skillId != CARDINAL_DELUGE
                    && attackInfo.skillId != CARDINAL_DELUGE_AMPLIFICATION
                    && attackInfo.skillId != CARDINAL_DELUGE_ADVANCED) {
                relicChargeLogic(attackInfo.skillId);
            }
            if (SkillConstants.isCardinalForceSkill(attackInfo.skillId)) {
                incrementDampening();
            }
            if (lastSkillID != skillID && SkillConstants.isCardinalForceSkill(lastSkillID) && SkillConstants.isCardinalForceSkill(attackInfo.skillId)) {
                decrementAncientForceSkillCooltime();
            }
            if (getBountifulTorrentStack() > 0) {
                applyCurseweaver(attackInfo);
            }

            if (hasRelicUnboundOnField() && !isRelicUnboundSkill(attackInfo.skillId)) {
                activateRelicUnboundAttack();
            }
        }

        Option o1 = new Option();
        Option o2 = new Option();
        Option o3 = new Option();
        Option o4 = new Option();
        Field field = chr.getField();
        switch (attackInfo.skillId) {
            case SWARM_SHOT:
                createSplitMistelForceAtom(attackInfo);
                break;
            case BOUNTIFUL_DELUGE:
                if (getRelicChargeSkill() != null) {
                    addRelicGauge(5);
                }
                break;
            case RAVEN:
            case FURY_OF_THE_WILD:
                if (getRelicChargeSkill() != null && getRelicChargeSkill().getSkillId() == RELIC_CHARGE_II) {
                    addRelicGauge(10);
                }
                break;
            case CARDINAL_BURST:
            case CARDINAL_BURST_AMPLIFICATION:
            case CARDINAL_BURST_ADVANCED:
                if (inDeluge()) {
                    createBountifulForceAtoms(BOUNTIFUL_DELUGE);
                }
                if (inTorrent()) {
                    o1.nOption = chr.getSkillStatValue(y, BOUNTIFUL_TORRENT);
                    o1.rOption = BOUNTIFUL_TORRENT;
                    o1.tOption = chr.getSkillStatValue(u, BOUNTIFUL_TORRENT);
                    tsm.putCharacterStatValue(ExtraSkillCTS, o1);
                    tsm.sendSetStatPacket();
                }
                break;
            case COMBO_ASSAULT_NONE:
            case COMBO_ASSAULT_BURST:
            case COMBO_ASSAULT_DELUGE:
            case COMBO_ASSAULT_TORRENT:
                setEmblem(EmblemType.None);
                var bonusAttackSkillId = attackInfo.skillId + 1;
                chr.write(UserLocal.bonusAttackDelayRequest(Collections.singletonList(new Tuple<>(bonusAttackSkillId, 650))));
                chr.setSkillCooldown(COMBO_ASSAULT_NONE, chr.getSkillLevel(COMBO_ASSAULT_NONE));
                relicCost(COMBO_ASSAULT_NONE);
                break;
            case COMBO_ASSAULT_TORRENT_2:
                Skill curseWeaverSkill = chr.getSkill(CURSEWEAVER);
                if (curseWeaverSkill != null) {
                    SkillInfo curseWeaverSI = SkillData.getSkillInfoById(curseWeaverSkill.getSkillId());
                    int curseWeaverSLV = curseWeaverSkill.getCurrentLevel();
                    o1.nOption = 5;
                    o1.rOption = curseWeaverSkill.getSkillId();
                    o1.tOption = curseWeaverSI.getValue(time, curseWeaverSLV);

                    DebuffUtil.applyDebuffOnMobs(chr, MobStat.Curseweaver, o1, attackInfo.getMobIds());
                }
                break;
            case CARDINAL_TORRENT_ADVANCED:
            case CARDINAL_TORRENT_SWEEP_ADVANCED:
                applyCurseweaver(attackInfo);
                break;
            case RAVEN_TEMPEST:
                addRelicGauge(si.getValue(v, slv));
                break;
            case ANCIENT_ASTRA_DELUGE:
                createAncientAstraForceAtom(attackInfo);
                break;
        }
        if (!SkillConstants.isForceAtomSkill(attackInfo.skillId)) {
            lastSkillID = attackInfo.skillId;
        }
        reapplyEmblem(attackInfo.skillId,
                attackInfo.skillId != COMBO_ASSAULT_NONE
                        && attackInfo.skillId != COMBO_ASSAULT_BURST
                        && attackInfo.skillId != COMBO_ASSAULT_DELUGE
                        && attackInfo.skillId != COMBO_ASSAULT_TORRENT);
        super.handleAttack(c, attackInfo);
    }

    private void decrementBountifulTorrent() {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        Option o = new Option();
        if (getBountifulTorrentStack() > 1) {
            o.nOption = getBountifulTorrentStack() - 1;
            o.rOption = BOUNTIFUL_TORRENT;
            o.tOption = (int) tsm.getRemainingTime(ExtraSkillCTS, BOUNTIFUL_TORRENT);
            o.setInMillis(true);
            tsm.putCharacterStatValue(ExtraSkillCTS, o);
            tsm.sendSetStatPacket();
        } else {
            tsm.removeStatsBySkill(BOUNTIFUL_TORRENT);
        }
    }

    private int getBountifulTorrentStack() {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        return tsm.hasStat(ExtraSkillCTS) ? tsm.getOptByCTSAndSkill(ExtraSkillCTS, BOUNTIFUL_TORRENT).nOption : 0;
    }

    private void applyCurseweaver(AttackInfo attackInfo) {
        boolean byCardinalTorrent = attackInfo.skillId == CARDINAL_TORRENT_ADVANCED || attackInfo.skillId == CARDINAL_TORRENT_SWEEP_ADVANCED;
        Skill skill = chr.getSkill(CURSEWEAVER);
        if (skill != null && (chr.hasSkill(BOUNTIFUL_TORRENT) || byCardinalTorrent)) {
            Field field = chr.getField();
            SkillInfo si = SkillData.getSkillInfoById(skill.getSkillId());
            int slv = skill.getCurrentLevel();
            Option o = new Option();
            o.rOption = skill.getSkillId();
            o.tOption = si.getValue(time, slv);
            o.xOption = 1; // sniffs show xOption to always be encoded as 1.

            for (MobAttackInfo mai : attackInfo.mobAttackInfo) {
                Mob mob = mai.mob;
                if (mob != null && (byCardinalTorrent || (Util.succeedProp((chr.getSkillStatValue(prop, BOUNTIFUL_TORRENT) + chr.getSkillStatValue(x, CARDINAL_FORCE_BOUNTIFUL_ENHANCE))) && getBountifulTorrentStack() > 0))) {
                    o.nOption = 1;
                    MobTemporaryStat mts = mob.getTemporaryStat();
                    if (mts.hasCurrentMobStat(MobStat.Curseweaver)) {
                        o.nOption = mts.getCurrentOptionsByMobStat(MobStat.Curseweaver).nOption;
                        if (o.nOption < si.getValue(x, slv)) {
                            o.nOption++;
                        }
                    }
                    mts.addStatOptionsAndBroadcast(chr, MobStat.Curseweaver, o);
                    if (!byCardinalTorrent) {
                        decrementBountifulTorrent();
                    }
                }
            }
        }
    }

    private void decrementAncientForceSkillCooltime() {
        Skill skill = getRelicChargeSkill();
        if (skill == null) {
            return;
        }
        int reductionInMS = chr.getSkillStatValue(v, skill.getSkillId());
        for (int skillID : ancientSkills) {
            chr.reduceSkillCoolTime(skillID, reductionInMS);
        }
    }

    private void incrementDampening() {
        Skill skill = getCurseDampeningSkill();
        if (skill == null) {
            return;
        }
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        Option o = new Option();
        SkillInfo si = SkillData.getSkillInfoById(skill.getSkillId());
        int slv = skill.getCurrentLevel();
        int skillID = skill.getSkillId();
        int stack = 2;
        CharacterTemporaryStat cts =
                (skillID == CURSE_DAMPENING_III ? IndieAsrR :
                (skillID == CURSE_DAMPENING_II ? IndiePDDR :
                (skillID == CURSE_DAMPENING_I ? IndieCr : None)));
        Option stackOpt = tsm.getOptByCTSAndSkill(cts, skillID);
        if (stackOpt != null) {
            stack = stackOpt.nOption;
            if (stack < (si.getValue(x, slv) * 2)) {
                stack += 2;
            }
        }

        o.nOption = stack;
        o.rOption = skillID;
        o.tOption = si.getValue(time, slv);
        tsm.putCharacterStatValue(cts, o);
        tsm.sendSetStatPacket();
    }

    private Skill getCurseDampeningSkill() {
        Skill skill = null;
        if (chr.hasSkill(CURSEWEAVER)) {
            return null;
        } else if (chr.hasSkill(CURSE_DAMPENING_III)) {
            return chr.getSkill(CURSE_DAMPENING_III);
        } else if (chr.hasSkill(CURSE_DAMPENING_II)) {
            return chr.getSkill(CURSE_DAMPENING_II);
        } else if (chr.hasSkill(CURSE_DAMPENING_I)) {
            return chr.getSkill(CURSE_DAMPENING_I);
        } else {
            return skill;
        }
    }

    private boolean hasAwakenedRelic() {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        return tsm.hasStat(Unk188_492);
    }

    private void relicChargeLogic(int skillID) {
        if (getRelicChargeSkill() == null || !SkillConstants.isCardinalForceSkill(skillID)) {
            return;
        }
        Skill skill = getRelicChargeSkill();
        SkillInfo si = SkillData.getSkillInfoById(skill.getSkillId());
        int slv = skill.getCurrentLevel();
        addRelicGauge(si.getValue(y, slv));
    }

    private void reapplyEmblem(int skillID, boolean byAttack) {
        if (SkillConstants.isDelugeSkill(skillID) && !inDeluge() && !byAttack) {
            setEmblem(EmblemType.Deluge);
        } else if (SkillConstants.isBurstAttackingSkill(skillID) && !inBurst()) {
            setEmblem(EmblemType.Burst);
        } else if (SkillConstants.isTorrentSkill(skillID) && !inTorrent()) {
            setEmblem(EmblemType.Torrent);
        }
    }

    private Skill getRelicChargeSkill() {
        Skill skill = null;
        if (chr.hasSkill(RELIC_CHARGE_I)) {
            skill = chr.getSkill(RELIC_CHARGE_I);
        }
        if (chr.hasSkill(RELIC_CHARGE_II)) {
            skill = chr.getSkill(RELIC_CHARGE_II);
        }
        return skill;
    }

    private void relicCost(int skillID) {
        SkillInfo si = SkillData.getSkillInfoById(skillID);
        if (si == null) {
            return;
        }
        int slv = chr.getSkillLevel(skillID);
        var skillStat = forceCon;
        if (skillID == RELIC_UNBOUND) {
            skillStat = x;
        }
        int relicCost = si.getValue(skillStat, slv);
        if (relicCost > 0) {
            reduceRelicGauge(relicCost);
        }
    }


    // Skill related methods -------------------------------------------------------------------------------------------

    @Override
    public void handleSkill(Char chr, TemporaryStatManager tsm, int skillId, int slv, InPacket inPacket, SkillUseInfo skillUseInfo) {
        super.handleSkill(chr, tsm, skillId, slv, inPacket, skillUseInfo);
        Skill skill = chr.getSkill(skillId);
        SkillInfo si = null;
        if (skill != null) {
            si = SkillData.getSkillInfoById(skillId);
        }
        if (SkillConstants.isEnchantForceSkill(skillId)) {
            setEmblem(EmblemType.None);
        }
        Option o1 = new Option();
        Option o2 = new Option();
        Option o3 = new Option();
        Field field = chr.getField();
        switch (skillId) {
            case CARDINAL_DELUGE:
            case CARDINAL_DELUGE_AMPLIFICATION:
            case CARDINAL_DELUGE_ADVANCED:
                relicChargeLogic(skillId);
                Position position = inPacket.decodePosition();
                byte mobSize = inPacket.decodeByte();
                if (mobSize > 0) {
                    if (inBurst()) {
                        createBountifulForceAtoms(BOUNTIFUL_BURST);
                    }
                    if (inTorrent()) {
                        o1.nOption = chr.getSkillStatValue(y, BOUNTIFUL_TORRENT);
                        o1.rOption = BOUNTIFUL_TORRENT;
                        o1.tOption = chr.getSkillStatValue(u, BOUNTIFUL_TORRENT);
                        tsm.putCharacterStatValue(ExtraSkillCTS, o1);
                        tsm.sendSetStatPacket();
                    }
                    List<Integer> targetList = new ArrayList<>();
                    for (int i = 0; i < mobSize; i++) {
                        int mobObjId = inPacket.decodeInt();
                        var life = field.getLifeByObjectID(mobObjId);
                        if (life instanceof Mob) {
                            Mob mob = (Mob) life;
                            if (mob != null && mob.isBoss() && skillId != CARDINAL_DELUGE) {
                                targetList.add(mobObjId);
                            }
                            targetList.add(mobObjId);
                        }
                    }
                    // 3 more bytes, (unknown)
                    createCardinalDelugeForceAtoms(skillId, position, targetList);
                }
                lastSkillID = skillId;
                relicCost(skillId);
                break;
            case CARDINAL_TORRENT:
            case CARDINAL_TORRENT_ADVANCED:
                if (getSwiftStrikeCharge() > 0) {
                    updateSwiftStrikeCharge(getSwiftStrikeCharge() - 1);
                } else {
                    chr.chatMessage("You don't have enough Swiftstrike Charges to use this.");
                }
                lastSkillID = skillId;
                break;
            case RAVEN_TEMPEST: // TODO  Re-Summon once RavenTempest is done
                tsm.removeStatsBySkill(RAVEN);
                tsm.removeStatsBySkill(FURY_OF_THE_WILD);
                break;
            case AWAKENED_RELIC:
                o1.nOption = 1;
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(Unk188_492, o1); // Awakened Relic placeholder
                addRelicGauge(MAX_RELIC_GAUGE);
                break;
            case CURSEBOUND_ENDURANCE:
                o1.nOption = si.getValue(s, slv);
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieAsrR, o1);
                break;
            case OBSIDIAN_BARRIER_DELUGE:
                si = SkillData.getSkillInfoById(OBSIDIAN_BARRIER_NONE);
                slv = chr.getSkillLevel(OBSIDIAN_BARRIER_NONE);
                o1.nOption = si.getValue(x, slv);
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(DamAbsorbShield, o1);
                chr.setSkillCooldown(OBSIDIAN_BARRIER_NONE, chr.getSkillLevel(OBSIDIAN_BARRIER_NONE));
                relicCost(OBSIDIAN_BARRIER_NONE);
                break;
            case OBSIDIAN_BARRIER_BURST:
            case OBSIDIAN_BARRIER_TORRENT: // TODO  Repositioning
                si = SkillData.getSkillInfoById(OBSIDIAN_BARRIER_NONE);
                slv = chr.getSkillLevel(OBSIDIAN_BARRIER_NONE);
                AffectedArea aa = AffectedArea.getPassiveAA(chr, skillId, slv);
                chr.getField().spawnAffectedAreaAndRemoveOld(aa);
                chr.setSkillCooldown(OBSIDIAN_BARRIER_NONE, chr.getSkillLevel(OBSIDIAN_BARRIER_NONE));
                relicCost(OBSIDIAN_BARRIER_NONE);
                break;

            case RELIC_UNBOUND_DELUGE_1:
                inPacket.decodeInt();
                var isLeft = inPacket.decodeByte() != 0;

                relicCost(RELIC_UNBOUND);
                setEmblem(EmblemType.None);

                Summon summon = Summon.getSummonBy(chr, skillId, slv);
                summon.setAssistType(AssistType.SequenceAttack);
                summon.setMoveAbility(MoveAbility.Stop);
                summon.setFlip(!isLeft);
                field.spawnSummon(summon);
                break;
            case RELIC_UNBOUND_BURST_1:
                inPacket.decodeInt();
                isLeft = inPacket.decodeByte() != 0;

                relicCost(RELIC_UNBOUND);
                setEmblem(EmblemType.None);

                summon = Summon.getSummonBy(chr, skillId, slv);
                lastRelicUnboundAttack = Long.MIN_VALUE;
                summon.setAssistType(AssistType.None);
                summon.setMoveAbility(MoveAbility.Stop);
                summon.setFlip(!isLeft);
                field.spawnSummon(summon);
                break;
            case RELIC_UNBOUND_TORRENT:
                si = SkillData.getSkillInfoById(skillId);

                relicCost(RELIC_UNBOUND);
                setEmblem(EmblemType.None);

                lastRelicUnboundAttack = Long.MIN_VALUE;
                for (int i = 0; i < si.getValue(u, slv); i++) {
                    summon = Summon.getSummonBy(chr, skillId, slv);
                    summon.setAssistType(AssistType.None);
                    summon.setMoveAbility(MoveAbility.Stop);

                    summon.setPosition(field.getRandomWalkableFoothold().getRandomPosition());
                    field.spawnSummon(summon);
                }
                break;
        }
        tsm.sendSetStatPacket();
        reapplyEmblem(skillId, false);
    }

    private boolean isRelicUnboundSkill(int skillId) {
        return skillId == RELIC_UNBOUND_DELUGE_1 || skillId == RELIC_UNBOUND_DELUGE_2
                || skillId == RELIC_UNBOUND_BURST_1 || skillId == RELIC_UNBOUND_BURST_2
                || skillId == RELIC_UNBOUND_TORRENT || skillId == RELIC_UNBOUND;
    }

    private boolean hasRelicUnboundOnField() {
        return getRelicUnboundOnField() != null;
    }

    private Summon getRelicUnboundOnField() {
        return chr.getField().getSummons().stream()
                .filter(s -> s.hasChrAsOwner(chr)
                        && (s.getSkillID() == RELIC_UNBOUND_DELUGE_1 || s.getSkillID() == RELIC_UNBOUND_BURST_1 || s.getSkillID() == RELIC_UNBOUND_TORRENT))
                .findFirst()
                .orElse(null);
    }

    private int getRelicUnboundSkillId() {
        return chr.getTemporaryStatManager().getOptions(IndieSummon).stream().filter(o -> isRelicUnboundSkill(o.rOption)).map(o -> o.rOption).findFirst().orElse(0);
    }

    private void activateRelicUnboundAttack() {
        var skillId = getRelicUnboundSkillId();
        if (skillId == 0) {
            return;
        }

        switch (skillId) {
            case RELIC_UNBOUND_DELUGE_1:
                activateRelicUnboundDelugeAttack();
                break;
            case RELIC_UNBOUND_BURST_1:
                activateRelicUnboundBurstAttack();
                break;
            case RELIC_UNBOUND_TORRENT:
                activateRelicUnboundTorrentAttack();
                break;
        }
    }

    private void activateRelicUnboundTorrentAttack() {
        List<Summon> torrentSummons = chr.getField().getSummons().stream().filter(s -> s.hasChrAsOwner(chr) && s.getSkillID() == RELIC_UNBOUND_TORRENT).collect(Collectors.toList());
        if (torrentSummons.size() <= 0 || (lastRelicUnboundAttack + intervalRelicUnboundBurst > Util.getCurrentTimeLong())) {
            return;
        }

        for (var summon : torrentSummons) {
            chr.write(Summoned.summonedDoAttackRequest(summon, 0));
        }
        lastRelicUnboundAttack = Util.getCurrentTimeLong();
    }

    private void activateRelicUnboundBurstAttack() {
        var summon = getRelicUnboundOnField();
        if (summon == null || (lastRelicUnboundAttack + intervalRelicUnboundBurst > Util.getCurrentTimeLong())) {
            return;
        }

        chr.write(Summoned.summonedDoAttackRequest(summon, summon.getSkillID()));
        lastRelicUnboundAttack = Util.getCurrentTimeLong();
        summon.setCount(summon.getCount() + 1);

        if (summon.getCount() >= 4) {
            summon.getField().removeSummon(summon);
        }
    }

    private void activateRelicUnboundDelugeAttack() {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        Option o = new Option(1, RELIC_UNBOUND_DELUGE_2, 4);
        tsm.putCharacterStatValue(RelicUnbound, o);
        tsm.sendSetStatPacket();
    }

    private void createCardinalDelugeForceAtoms(int skillID, Position position, List<Integer> targetList) {
        ForceAtomEnum fae = ForceAtomEnum.CARDINAL_DISCHARGE_1;
        int xOffset = -50;
        int yOffset = -15;
        int yRand = 30;
        if (skillID == CARDINAL_DELUGE_ADVANCED) {
            fae = ForceAtomEnum.CARDINAL_DISCHARGE_2;
            xOffset = -90;
            yOffset = -35;
            yRand = 70;
        }

        List<ForceAtomInfo> faiList = new ArrayList<>();
        Random random = new Random();
        int randInt = random.nextInt(2);
        for (int i = randInt; i < targetList.size() + randInt; i++) {
            int angle = random.nextInt(20) + 5;
            if (i % 2 == 0) {
                angle += 150;
            }
            if (chr.isLeft()) {
                angle += 180;
            }
            int fImpact = random.nextInt(5) + 28;
            ForceAtomInfo fai = new ForceAtomInfo(chr.getNewForceAtomKey(), fae.getInc(), fImpact, 4,
                    angle, 150, Util.getCurrentTime(), 0, 0,
                    new Position(xOffset, random.nextInt(yRand) + yOffset));
            faiList.add(fai);
        }
        ForceAtom fa = new ForceAtom(chr.getId(), fae, targetList, skillID, faiList);
        chr.createForceAtom(fa);
    }

    private void createBountifulForceAtoms(int skillID) {
        if (!chr.hasSkill(skillID)) {
            return;
        }
        Skill skill = chr.getSkill(skillID);
        SkillInfo si = SkillData.getSkillInfoById(skill.getSkillId());
        int slv = skill.getCurrentLevel();
        int proc = si.getValue(prop, slv) + chr.getSkillStatValue(x, CARDINAL_FORCE_BOUNTIFUL_ENHANCE);
        Rect rect = si.getLastRect();

        List<Mob> mobList = new ArrayList<>(chr.getField().getMobs().stream().filter(mob -> !MobConstants.isFriendlyMob(mob.getTemplateId())).collect(Collectors.toList()));
        if (mobList.size() <= 0 || !Util.succeedProp(proc)) {
            return;
        }
        ForceAtomEnum fae = skillID == BOUNTIFUL_DELUGE ? ForceAtomEnum.BOUNTIFUL_DELUGE : ForceAtomEnum.BOUNTIFUL_BURST;
        List<Integer> targetList = new ArrayList<>();
        List<ForceAtomInfo> faiList = new ArrayList<>();
        int faCount = si.getValue(bulletCount, slv);

        Random rand = new Random();
        for (int i = 0; i < faCount + (hasAwakenedRelic() ? 1 : 0); i++) {
            Mob mob = Util.getRandomFromCollection(mobList);
            targetList.add(mob.getObjectId());

            int angle = rand.nextInt(125) + 20;
            int fImpact = rand.nextInt(10) + 28;
            ForceAtomInfo fai = new ForceAtomInfo(chr.getNewForceAtomKey(), fae.getInc(), fImpact, 3,
                    angle + (chr.isLeft() ? 180 : 0), rand.nextInt(350) + 100, Util.getCurrentTime(), 0, 0,
                    chr.getPosition());
            faiList.add(fai);
        }
        ForceAtom fa = new ForceAtom(false, chr.getId(), chr.getId(), fae,
                true, targetList, skill.getSkillId(), faiList, rect, 0, 0,
                chr.getPosition(), 0, chr.getPosition(), 0);
        chr.createForceAtom(fa);
    }

    private void createSplitMistelForceAtom(AttackInfo attackInfo) {
        ForceAtomEnum fae = ForceAtomEnum.SPLIT_MISTEL;
        List<Integer> targetList = new ArrayList<>();
        List<ForceAtomInfo> faiList = new ArrayList<>();

        Rect rect = new Rect(-500, -500, 500, 500);
        Random rand = new Random();
        for (MobAttackInfo mai : attackInfo.mobAttackInfo) {
            Mob mob = (Mob) chr.getField().getLifeByObjectID(mai.mobId);
            if (mob == null) {
                continue;
            }

            int fImpact = rand.nextInt(10) + 36;
            int sImpact = rand.nextInt(2) + 7;
            ForceAtomInfo fai = new ForceAtomInfo(chr.getNewForceAtomKey(), fae.getInc(), fImpact, sImpact,
                    0, 0, Util.getCurrentTime(), 0, 0,
                    new Position(mob.getX(), mob.getY() - 50));
            faiList.add(fai);
            fai = new ForceAtomInfo(chr.getNewForceAtomKey(), fae.getInc(), fImpact, sImpact,
                    180, 0, Util.getCurrentTime(), 0, 0,
                    new Position(mob.getX(), mob.getY() + 50));
            faiList.add(fai);
            targetList.add(Util.getRandomFromCollection(chr.getField().getMobsInRect(mob.getRectAround(rect)).stream().filter(m -> !MobConstants.isFriendlyMob(m.getTemplateId())).collect(Collectors.toList())).getObjectId());
            targetList.add(Util.getRandomFromCollection(chr.getField().getMobsInRect(mob.getRectAround(rect)).stream().filter(m -> !MobConstants.isFriendlyMob(m.getTemplateId())).collect(Collectors.toList())).getObjectId());
        }
        ForceAtom fa = new ForceAtom(false, chr.getId(), chr.getId(), fae,
                true, targetList, SWARM_SHOT_ATOM, faiList, rect, 0, 0,
                new Position(), 0, new Position(), 0);
        chr.createForceAtom(fa);
    }

    private void createAncientAstraForceAtom(AttackInfo attackInfo) {
        ForceAtomEnum fae = ForceAtomEnum.ANCIENT_ASTRA;
        List<Integer> targetList = new ArrayList<>();
        List<ForceAtomInfo> faiList = new ArrayList<>();

        Rect rect = new Rect(-600, -600, 600, 600);
        Random rand = new Random();
        int proc = 30;
        int randAngle = 20;
        int initXdistance = 70;
        int initYdistance = 25;
        for (MobAttackInfo mai : attackInfo.mobAttackInfo) {
            Mob mob = (Mob) chr.getField().getLifeByObjectID(mai.mobId);
            if (mob == null || !Util.succeedProp(proc)) {
                continue;
            }

            int fImpact = rand.nextInt(20) + 55;
            int sImpact = rand.nextInt(2) + 3;
            ForceAtomInfo fai = new ForceAtomInfo(chr.getNewForceAtomKey(), fae.getInc(), fImpact, sImpact,
                    (chr.isLeft() ? 80 : 275) - rand.nextInt(randAngle), rand.nextInt(100), Util.getCurrentTime(), 0, 0,
                    new Position(mob.getX() + (chr.isLeft() ? -initXdistance : initXdistance), mob.getY() - initYdistance));
            faiList.add(fai);
            fai = new ForceAtomInfo(chr.getNewForceAtomKey(), fae.getInc(), fImpact, sImpact,
                    rand.nextInt(randAngle) + (chr.isLeft() ? 100 : 265), rand.nextInt(100), Util.getCurrentTime(), 0, 0,
                    new Position(mob.getX() + (chr.isLeft() ? -initXdistance : initXdistance), mob.getY() + initYdistance));
            faiList.add(fai);
            targetList.add(Util.getRandomFromCollection(chr.getField().getMobsInRect(mob.getRectAround(rect))).getObjectId());
            targetList.add(Util.getRandomFromCollection(chr.getField().getMobsInRect(mob.getRectAround(rect))).getObjectId());
        }
        ForceAtom fa = new ForceAtom(false, chr.getId(), chr.getId(), fae,
                true, targetList, ANCIENT_ASTRA_DELUGE_ATOM, faiList, rect, 0, 0,
                new Position(), 0, new Position(), 0);
        chr.createForceAtom(fa);
    }


    public int alterCooldownSkill(int skillId, int slv, AttackInfo attackInfo, SkillUseInfo sui, SkillUseSource source) {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        Skill skill = chr.getSkill(skillId);
        if (skill != null) {
            SkillInfo si = SkillData.getSkillInfoById(skill.getSkillId());

            switch (skillId) {
                case BowMaster.ARROW_PLATTER:
                    return 0;
            }
        }
        return super.alterCooldownSkill(skillId, slv, attackInfo, sui, source);
    }

    @Override
    public void handleKeyDownSkillCost(int skillId) {
        super.handleKeyDownSkillCost(skillId);

        handleAncientAstraRelicCost(skillId);
    }

    // Hit related methods ---------------------------------------------------------------------------------------------

    @Override
    public void setCharCreationStats(Char chr) {
        super.setCharCreationStats(chr);
        CharacterStat cs = chr.getAvatarData().getCharacterStat();
        chr.addItemToInventory(ItemData.getItemDeepCopy(1592000)); // ancient bow
        chr.addItemToInventory(ItemData.getItemDeepCopy(1353700)); // potential relic
        cs.setPosMap(910090301);
        cs.setJob(JobConstants.JobEnum.BEGINNER.getJobId());
        cs.setDex(35);
        Item arrows = ItemData.getItemDeepCopy(2060000);
        arrows.setQuantity(9999);
        chr.addItemToInventory(arrows);
    }
}
