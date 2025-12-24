package net.swordie.ms.client.jobs.cygnus;

import net.swordie.ms.client.Client;
import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.skills.Option;
import net.swordie.ms.client.character.skills.Skill;
import net.swordie.ms.client.character.skills.SkillStat;
import net.swordie.ms.client.character.skills.SkillUseSource;
import net.swordie.ms.client.character.skills.atom.forceatom.ForceAtom;
import net.swordie.ms.client.character.skills.atom.secondatom.SecondAtom;
import net.swordie.ms.client.character.skills.info.*;
import net.swordie.ms.client.character.skills.temp.CharacterTemporaryStat;
import net.swordie.ms.client.character.skills.temp.TemporaryStatManager;
import net.swordie.ms.connection.InPacket;
import net.swordie.ms.connection.packet.*;
import net.swordie.ms.connection.packet.field.FieldPacket;
import net.swordie.ms.constants.JobConstants;
import net.swordie.ms.constants.MobConstants;
import net.swordie.ms.constants.SkillChangeConstants;
import net.swordie.ms.constants.SkillConstants;
import net.swordie.ms.enums.AssistType;
import net.swordie.ms.enums.ForceAtomEnum;
import net.swordie.ms.enums.MoveAbility;
import net.swordie.ms.life.AffectedArea;
import net.swordie.ms.life.Summon;
import net.swordie.ms.life.mob.Mob;
import net.swordie.ms.life.mob.MobStat;
import net.swordie.ms.life.mob.MobTemporaryStat;
import net.swordie.ms.loaders.SkillData;
import net.swordie.ms.util.Position;
import net.swordie.ms.util.Rect;
import net.swordie.ms.util.Util;
import net.swordie.ms.world.field.Field;

import java.util.*;
import java.util.stream.Collectors;

import static net.swordie.ms.client.character.skills.SkillStat.*;
import static net.swordie.ms.client.character.skills.temp.CharacterTemporaryStat.*;

/**
 * Created on 12/14/2017.
 */
public class BlazeWizard extends Noblesse {

    public static final int ELEMENTAL_HARMONY_INT = 10000248;

    public static final int ORBITAL_FLAME = 12001020;
    public static final int GREATER_ORBITAL_FLAME = 12100020;
    public static final int GRAND_ORBITAL_FLAME = 12110020;
    public static final int FINAL_ORBITAL_FLAME = 12120006;

    public static final int ORBITAL_FLAME_ATOM = 12000026;
    public static final int GREATER_ORBITAL_FLAME_ATOM = 12100028;
    public static final int GRAND_ORBITAL_FLAME_ATOM = 12110028;
    public static final int FINAL_ORBITAL_FLAME_ATOM = 12120010;

    public static final int FIREWALK_HORIZONTAL = 12001028;
    public static final int FIREWALK_VERTICAL = 12001027;

    public static final int IGNITION = 12101024; //Buff
    public static final int IGNITION_EXPLOSION = 12100029; // Explosion Attack
    public static final int FLASHFIRE = 12101025; //Special Skill
    public static final int WORD_OF_FIRE = 12101023; //Buff
    public static final int CONTROLLED_BURN = 12101022; //Special Skill

    public static final int CINDER_MAELSTROM = 12111022; //Special Skill
    public static final int PHOENIX_RUN = 12111023; //Special Buff
    public static final int PHOENIX_RUN_EFFECTS = 12111029;

    public static final int TOWERING_INFERNO = 12121002;
    public static final int BURNING_CONDUIT = 12121005;
    public static final int FIRES_OF_CREATION = 12121004; //only used for visual cooldown
    public static final int FIRES_OF_CREATION_FOX = 12120014; //Buff
    public static final int FIRES_OF_CREATION_LION = 12120013; //Buff
    public static final int FLAME_BARRIER = 12121003; //Buff
    public static final int CALL_OF_CYGNUS_BW = 12121000; //Buff
    public static final int ORBITAL_FLAME_RANGE = 12121043; // Buff - toggle
    public static final int IGNITION_MAX_IGNITION = 12120049;
    public static final int IGNITION_REINFORCE = 12120050;

    public static final int CATACLYSM = 12121052;
    public static final int GLORY_OF_THE_GUARDIANS_BW = 12121053;
    public static final int DRAGON_BLAZE = 12121054;
    public static final int DRAGON_BLAZE_FINAL = 12121055;

    public static final int SAVAGE_FLAME = 400021042;
    public static final int SAVAGE_FLAME_LION = 400021043;
    public static final int SAVAGE_FLAME_FOX = 400021044;
    public static final int SAVAGE_FLAME_FOX_ATOM = 400021045;
    public static final int INFERNO_SPHERE = 400021072;
    public static final int SALAMANDER_MISCHIEF = 400021092;
    public static final int SALAMANDER_MISCHIEF_END_BUFF = 400021093;
    public static final int ORBITAL_INFERNO = 400021004;

    //Flame Elements
    public static final int FLAME_ELEMENT = 12000022;
    public static final int GREATER_FLAME_ELEMENT = 12100026;
    public static final int GRAND_FLAME_ELEMENT = 12110024;
    public static final int FINAL_FLAME_ELEMENT = 12120007;

    private static final int[] addedSkills = new int[]{
            ELEMENTAL_HARMONY_INT,
            CALL_OF_CYGNUS_BW
    };

    private static final int[] cannotApplyIgnition = new int[] {
            IGNITION_EXPLOSION,
            TOWERING_INFERNO,
            DRAGON_BLAZE,
            DRAGON_BLAZE_FINAL,
            SAVAGE_FLAME,
            SAVAGE_FLAME_LION,
            SAVAGE_FLAME_FOX,
            SAVAGE_FLAME_FOX_ATOM,
            SALAMANDER_MISCHIEF,
            SALAMANDER_MISCHIEF_END_BUFF,
    };

    boolean used;
    Position chrPos;
    int prevmap;
    private int flameCharge = 0;
    private byte phoenixFeatherCount = 0;

    public byte getPhoenixFeatherCount() {
        return phoenixFeatherCount;
    }

    public void setPhoenixFeatherCount(byte phoenixFeatherCount) {
        this.phoenixFeatherCount = phoenixFeatherCount;
    }

    public BlazeWizard(Char chr) {
        super(chr);
        if (isHandlerOfJob(chr.getJob())) {
            for (int id : addedSkills) {
                if (!chr.hasSkill(id) || chr.getSkill(id).getCurrentLevel() == 0) {
                    Skill skill = SkillData.getSkillDeepCopyById(id);
                    skill.setCurrentLevel(skill.getMasterLevel());
                    chr.addSkill(skill);
                }
            }
        }
    }

    @Override
    public boolean isHandlerOfJob(short id) {
        return JobConstants.isBlazeWizard(id);
    }

    private void summonFlameElement() {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        var flameElement = getFlameElement();
        if (flameElement == 0) {
            return;
        }

        var skill = chr.getSkill(flameElement);
        var si = SkillData.getSkillInfoById(skill.getSkillId());
        int slv = skill.getCurrentLevel();

        if (tsm.getOptByCTSAndSkill(EMAD, flameElement) == null) {
            var o1 = new Option();
            var field = chr.getField();
            var summon = Summon.getSummonByNoCTS(chr, flameElement, slv);
            summon.setFlyMob(false);
            summon.setAttackActive(false);
            summon.setAssistType(AssistType.None);
            summon.setSummonTerm(0);
            field.spawnSummonAndRemoveOld(summon);

            o1.nOption = si.getValue(x, slv);
            o1.rOption = flameElement;
            o1.tOption = si.getValue(time, slv);
            o1.summon = summon;
            tsm.putCharacterStatValue(EMAD, o1, true);
            tsm.sendSetStatPacket();
        } else {
            var opt = tsm.getOptByCTSAndSkill(EMAD, flameElement);
            opt.tOption = si.getValue(time, slv);
            tsm.updateBuffExtendTime(EMAD, opt);
        }
    }

    private int getFlameElement() {
        int skill = 0;
        if (chr.hasSkill(FLAME_ELEMENT)) {
            skill = FLAME_ELEMENT;
        }
        if (chr.hasSkill(GREATER_FLAME_ELEMENT)) {
            skill = GREATER_FLAME_ELEMENT;
        }
        if (chr.hasSkill(GRAND_FLAME_ELEMENT)) {
            skill = GRAND_FLAME_ELEMENT;
        }
        if (chr.hasSkill(FINAL_FLAME_ELEMENT)) {
            skill = FINAL_FLAME_ELEMENT;
        }
        return skill;
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
            slv = (byte) skill.getCurrentLevel();
            skillID = skill.getSkillId();
        }
        if (hasHitMobs) {
            if (JobConstants.isBlazeWizard(SkillConstants.getSkillRootFromSkill(attackInfo.skillId)) && !canNotApplyIgnition(attackInfo.skillId)) {
                applyIgniteOnMob(attackInfo);
            }

            if (attackInfo.skillId == SALAMANDER_MISCHIEF) {
                increaseSalamanderHitCount();
            }
            if (attackInfo.skillId != SALAMANDER_MISCHIEF && chr.getField().getSummonByChrAndSkillId(chr, SALAMANDER_MISCHIEF) != null) {
                var targetId = Util.getRandomFromCollection(attackInfo.mobAttackInfo).mobId;
                createSalamanderSecondAtom(targetId);
            }
        }
        Option o1 = new Option();
        Option o2 = new Option();
        Option o3 = new Option();

        switch (attackInfo.skillId) {
            case ORBITAL_FLAME_ATOM:
            case GRAND_ORBITAL_FLAME_ATOM:
            case FINAL_ORBITAL_FLAME_ATOM:
                break;
            case FIRES_OF_CREATION_LION:
                chr.setSkillCooldown(SAVAGE_FLAME, chr.getSkillLevel(SAVAGE_FLAME));
                updateFlameCharge(0);
                chr.dispose();
                break;
            case CATACLYSM:
                o1.nOption = 1;
                o1.rOption = skillID;
                o1.tOption = 5;
                tsm.putCharacterStatValue(IndieNotDamaged, o1, true);
                tsm.sendSetStatPacket();
                break;
        }

        super.handleAttack(c, attackInfo);
    }

    private boolean canNotApplyIgnition(int skillId) {
        return Arrays.stream(cannotApplyIgnition).anyMatch(s -> s == skillId);
    }

    public void createOrbitalFlameForceAtom(int skillID, int dir) {
        SkillInfo si = SkillData.getSkillInfoById(skillID);
        var slv = (byte) chr.getSkillLevel(skillID);
        int range = si.getValue(SkillStat.range, slv);
        ForceAtomEnum fae;
        switch (skillID) {
            case BlazeWizard.FINAL_ORBITAL_FLAME:
                fae = ForceAtomEnum.ORBITAL_FLAME_4;
                skillID = BlazeWizard.FINAL_ORBITAL_FLAME_ATOM;
                break;
            case BlazeWizard.GRAND_ORBITAL_FLAME:
                fae = ForceAtomEnum.ORBITAL_FLAME_3;
                skillID = BlazeWizard.GRAND_ORBITAL_FLAME_ATOM;
                break;
            case BlazeWizard.GREATER_ORBITAL_FLAME:
                fae = ForceAtomEnum.ORBITAL_FLAME_2;
                skillID = BlazeWizard.GREATER_ORBITAL_FLAME_ATOM;
                break;
            default:
                fae = ForceAtomEnum.ORBITAL_FLAME_1;
                skillID = BlazeWizard.ORBITAL_FLAME_ATOM;
                break;
        }

        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        boolean hasRangeHyperBuff = tsm.hasStatBySkillId(BlazeWizard.ORBITAL_FLAME_RANGE);
        if (hasRangeHyperBuff) {
            range = tsm.getOptByCTSAndSkill(CharacterTemporaryStat.AddRangeOnOff, BlazeWizard.ORBITAL_FLAME_RANGE).nOption;
        }
        int angle = 0;
        int curTime = Util.getCurrentTime();
        int firstImpact = 5;
        int secondImpact = 21;
        switch (dir) {
            case 1: // right
                break;
            case 2: // up
                angle = 90;
                firstImpact = 11;
                secondImpact = 13;
                if (tsm.hasStat(CharacterTemporaryStat.AddRangeOnOff)) {
                    range /= 1.4;
                }
                break;
            case 3: // down
                angle = 90;
                firstImpact = 11;
                secondImpact = 13;
                if (tsm.hasStat(CharacterTemporaryStat.AddRangeOnOff)) {
                    range /= 1.4;
                }
                break;
        }

        if (hasRangeHyperBuff) {
            secondImpact = (int) (secondImpact * SkillChangeConstants.ORBITAL_FLAME_RANGE_MULTIPLIER); // [BlazeWizard] Custom Skill Change
        }

        ForceAtomInfo fai = new ForceAtomInfo(chr.getNewForceAtomKey(), fae.getInc(), firstImpact, secondImpact,
                angle, 0, curTime, si.getValue(SkillStat.mobCount, slv), skillID, new Position(0, 0));
        List<ForceAtomInfo> faiList = new ArrayList<>();
        faiList.add(fai);
        chr.createForceAtom(new ForceAtom(false, 0, chr.getId(), fae, false,
                new ArrayList<>(), skillID, faiList, null, dir, range, null, 0, null, 0));

        summonFlameElement();
    }

    private void applyIgniteOnMob(AttackInfo attackInfo) {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        if (tsm.hasStat(Ember)) {
            Skill skill = chr.getSkill(IGNITION);
            SkillInfo si = SkillData.getSkillInfoById(skill.getSkillId());
            int slv = skill.getCurrentLevel();
            Option o = new Option();
            o.nOption = 1;
            o.rOption = skill.getSkillId();
            o.tOption = 10;
            o.wOption = 10;
            o.chr = chr;
            var interval = chr.hasSkill(IGNITION_MAX_IGNITION) ? 500 : si.getValue(dotInterval, slv);
            var dotDmg = si.getValue(dot, slv) + (chr.hasSkill(IGNITION_REINFORCE) ? 20 : 0);

            for (MobAttackInfo mai : attackInfo.mobAttackInfo) {
                if (Util.succeedProp(si.getValue(prop, slv))) {
                    Mob mob = (Mob) chr.getField().getLifeByObjectID(mai.mobId);
                    if (mob == null) {
                        continue;
                    }
                    MobTemporaryStat mts = mob.getTemporaryStat();
                    if (mts.hasBurnFromSkillAndOwner(skill.getSkillId(), chr.getId())) {
                        continue;
                    }
                    mts.addStatOptionsAndBroadcast(chr, MobStat.Ember, o);

                    mts.createAndAddBurnedInfo(chr, mob, skill.getSkillId(), slv, dotDmg, interval, si.getValue(dotTime, slv), 1);
                    incrementFlameCharge();
                }
            }
        }
    }

    private void incrementFlameCharge() {
        if (!chr.hasSkill(SAVAGE_FLAME)) {
            return;
        }
        updateFlameCharge(flameCharge + 1);
    }

    private void updateFlameCharge(int stack) {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        SkillInfo si = SkillData.getSkillInfoById(SAVAGE_FLAME);
        int slv = chr.getSkillLevel(SAVAGE_FLAME);
        if (!chr.hasSkill(SAVAGE_FLAME)) {
            return;
        }
        int maxFlameCharge = si.getValue(y, slv);
        int remainingTime = (int) tsm.getRemainingTime(Ember, IGNITION);
        Option o = new Option();

        o.nOption = tsm.hasStat(Ember) ? 1 : 0;
        o.rOption = IGNITION;
        o.tOption = remainingTime;
        o.xOption = stack < 0 ? 0 : stack > maxFlameCharge ? maxFlameCharge : stack;
        o.setInMillis(true);
        tsm.putCharacterStatValue(Ember, o, true);
        tsm.sendSetStatPacket();
        flameCharge = o.xOption;
    }

    public void handleRemoveMobStat(MobStat mobStat, Mob mob, Option option) {
        if (mobStat == MobStat.Ember && option.rOption == IGNITION) {
            chr.write(UserLocal.explosionAttack(IGNITION_EXPLOSION, mob.getPosition(), mob.getObjectId(), 1));
        }
    }

    @Override
    public int alterMpCon(int mpCon, int skillId, int slv, AttackInfo attackInfo, SkillUseInfo sui, SkillUseSource source) {
        if (source.isAttackRequest() && skillId == SALAMANDER_MISCHIEF) {
            return chr.getSkillStatValue(v, SALAMANDER_MISCHIEF);
        }
        return super.alterMpCon(mpCon, skillId, slv, attackInfo, sui, source);
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
        Summon summon;
        Field field = chr.getField();
        Option o1 = new Option();
        Option o2 = new Option();
        Option o3 = new Option();
        switch (skillId) {
            case FLASHFIRE: // TODO
                Position flamepos = chr.getPosition();
                if (used) {
                    if (chr.getFieldID() != prevmap) {
                        //Set Blink
                        prevmap = chr.getFieldID();
                        chr.write(WvsContext.flameWizardFlareBlink(chr, flamepos, false));
                        chrPos = chr.getPosition();
                        used = true;
                    } else {
                        //Clear Blink + Teleport
                        chr.write(WvsContext.flameWizardFlareBlink(chr, chrPos, true));
                        used = false;
                    }
                } else {
                    //Set Blink
                    prevmap = chr.getFieldID();
                    chr.write(WvsContext.flameWizardFlareBlink(chr, flamepos, false));
                    chrPos = chr.getPosition();
                    used = true;
                }
                break;
            case CONTROLLED_BURN:
                int healmp = si.getValue(x, slv);
                int healpercent = (chr.getMaxMP() * healmp) / 100;
                chr.healMP(healpercent);
                break;
            case BURNING_CONDUIT:
                AffectedArea aa = AffectedArea.getPassiveAA(chr, skillId, slv);
                aa.setPosition(chr.getPosition());
                aa.setRect(aa.getPosition().getRectAround(si.getFirstRect()));
                aa.setDelay((short) 15);
                field.spawnAffectedArea(aa);
                break;
            case FIREWALK_HORIZONTAL:
            case FIREWALK_VERTICAL:
                field.broadcastPacket(WvsContext.flameWizardFlameWalkEffect(chr));
                break;
            case WORD_OF_FIRE:
                o1.nOption = si.getValue(indieBooster, slv);
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieBooster, o1);
                o2.nOption = si.getValue(indieMad, slv);
                o2.rOption = skillId;
                o2.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieMAD, o2);
                break;
            case FLAME_BARRIER:
                o1.nOption = si.getValue(x, slv);
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(DamageReduce, o1);
                break;
            case IGNITION:
                o1.nOption = 1;
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                o1.xOption = flameCharge;
                tsm.putCharacterStatValue(Ember, o1); // xOption = Savage Flame
                break;
            case FIRES_OF_CREATION_FOX:
            case FIRES_OF_CREATION_LION:
                si = SkillData.getSkillInfoById(FIRES_OF_CREATION);
                slv = chr.getSkillLevel(FIRES_OF_CREATION);

                if (chr.hasSkillOnCooldown(FIRES_OF_CREATION_FOX) || chr.hasSkillOnCooldown(FIRES_OF_CREATION_LION)) {
                    break;
                }
                chr.setSkillCooldown(FIRES_OF_CREATION, slv); // to display cooldown in quickslot
                chr.setSkillCooldown(FIRES_OF_CREATION_FOX, slv);
                chr.setSkillCooldown(FIRES_OF_CREATION_LION, slv);

                field.getSummons().stream()
                        .filter(s -> (s.getSkillID() == FIRES_OF_CREATION_FOX || s.getSkillID() == FIRES_OF_CREATION_LION)
                                && s.getChr() == chr)
                        .forEach(field::removeLife);

                summon = Summon.getSummonBy(chr, skillId, slv);
                summon.setFlyMob(skillId == FIRES_OF_CREATION_FOX);
                summon.setMoveAbility(skillId == FIRES_OF_CREATION_LION ? MoveAbility.WalkSmart : MoveAbility.Walk);
                summon.setAssistType(AssistType.AttackCounter);
                summon.setSummonTerm(SkillData.getSkillInfoById(FIRES_OF_CREATION).getValue(time, slv));
                field.spawnSummonAndRemoveOld(summon);

                o1.nOption = si.getValue(y, slv);
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IgnoreTargetDEF, o1, true);
                o2.nOption = si.getValue(z, slv);
                o2.rOption = skillId;
                o2.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(ElementalReset, o2, true);
                break;
            case CINDER_MAELSTROM:  //Special Summon
                if (inPacket.getUnreadAmount() < 11) {
                    return;
                }
                Position position = inPacket.decodePosition();
                inPacket.decodeArr(3); // Unused
                int mobId = inPacket.decodeInt();

                Mob mob = (Mob) field.getLifeByObjectID(mobId);
                if (mob == null) {
                    return;
                }

                summon = Summon.getSummonByNoCTS(chr, skillId, slv);
                summon.setMoveAbility(MoveAbility.Stop);
                summon.setMobTemplateId(mob.getTemplateId());
                summon.setPosition(position);
                summon.setCurFoothold((short) field.findFootHoldBelow(summon.getPosition()).getId());
                field.spawnSummonAndRemoveOld(summon);
                break;
            case PHOENIX_RUN:
                o1.nOption = 1;
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(ReviveOnce, o1, true);
                break;
            case GLORY_OF_THE_GUARDIANS_BW:
                o1.rOption = skillId;
                o1.nOption = si.getValue(indieDamR, slv);
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieDamR, o1);
                break;

            case ORBITAL_FLAME_RANGE:
                if (tsm.hasStat(AddRangeOnOff)) {
                    tsm.removeStatsBySkill(skillId);
                    tsm.sendResetStatPacket();
                } else {
                    o1.nOption = (int) (si.getValue(range, slv) * SkillChangeConstants.ORBITAL_FLAME_RANGE_MULTIPLIER); // [BlazeWizard] Custom Skill Change
                    o1.rOption = skillId;
                    tsm.putCharacterStatValue(AddRangeOnOff, o1);
                }
                break;
            case SALAMANDER_MISCHIEF:
                createSalamanderSummon(slv);
                break;
        }
        tsm.sendSetStatPacket();
    }

    @Override
    public void handleSkillPrepareStart(Char chr, int skillId, SkillUseInfo sui) {
        switch (skillId) {
            case SAVAGE_FLAME_LION:
                chr.setSkillCooldown(SAVAGE_FLAME, sui.slv);
                updateFlameCharge(0);
                break;
        }
        super.handleSkillPrepareStart(chr, skillId, sui);
    }

    public void handleSecondAtomCollisionRequest(Map<Integer, Integer> attackMap) {
        for (var entry : attackMap.entrySet()) {
            var saObjId = entry.getKey();
            var targetId = entry.getValue();

            var sa = chr.getSecondAtomById(saObjId);
            if (sa != null && targetId == 0) {
                chr.removeSecondAtom(Collections.singletonList(saObjId));
                handleSecondAtomRemoveRequest(saObjId); // if targetid == 0 -> salamander will return to player. Thus we have to do that logic
            }
        }
    }

    private void increaseSalamanderHitCount() {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();

        if (tsm.hasStat(SalamanderMischief)) {
            var si = SkillData.getSkillInfoById(SALAMANDER_MISCHIEF);
            var slv = chr.getSkillLevel(SALAMANDER_MISCHIEF);
            var maxCount = si.getValue(z, slv);
            var o = tsm.getOption(SalamanderMischief);

            o.nOption += 1;
            o.nOption = Math.min(maxCount, o.nOption);
            tsm.updateBuff(SalamanderMischief, o);
        } else {
            Option o = new Option(1, SALAMANDER_MISCHIEF, 60000);
            tsm.putCharacterStatValue(SalamanderMischief, o);
            tsm.sendSetStatPacket();
        }

    }

    private void createSalamanderSummon(int slv) {
        Summon summon = Summon.getSummonBy(chr, SALAMANDER_MISCHIEF, slv);
        chr.getField().spawnSummon(summon);
    }

    private void createSalamanderSecondAtom(int targetId) {
        var skillId = SALAMANDER_MISCHIEF;
        if (!chr.hasSkill(skillId)) {
            return;
        }

        Summon summon = chr.getField().getSummonByChrAndSkillId(chr, skillId);

        if (summon == null || summon.isHide()) {
            return;
        }

        var si = SkillData.getSkillInfoById(skillId);
        var sai = si.getSecondAtomInfos().get(0);

        var sa = SecondAtom.createFromInfo(chr, skillId, sai);
        sa.setTargetId(targetId);

        summon.setHide(true);
        chr.getField().broadcastPacket(Summoned.summonedSkill(summon, (byte) 0, 0, null));

        chr.spawnSecondAtoms(Collections.singletonList(sa));
    }

    @Override
    public boolean handleSecondAtomRemoveRequest(int objectId) {
        Summon summon = chr.getField().getSummonByChrAndSkillId(chr, SALAMANDER_MISCHIEF);
        if (summon != null) {
            summon.setHide(false);
            chr.getField().broadcastPacket(Summoned.summonedSkill(summon, (byte) 0, 0, null));
        }

        return super.handleSecondAtomRemoveRequest(objectId);
    }

    private void giveSalamanderMischiefEndBuff(int count) {
        Skill skill = chr.getSkill(SALAMANDER_MISCHIEF);
        if (count <= 0 || skill == null) {
            return;
        }
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        var si = SkillData.getSkillInfoById(skill.getSkillId());
        var endBuffSI = SkillData.getSkillInfoById(SALAMANDER_MISCHIEF_END_BUFF);
        var slv = skill.getCurrentLevel();
        var maxCount = si.getValue(z, slv);
        count = Math.min(maxCount, count);
        var startMad = endBuffSI.getValue(indieMad, slv);
        var multiplier = endBuffSI.getValue(x, slv);
        var finalMad = startMad + (multiplier * count);
        Option o = new Option(finalMad, endBuffSI.getSkillId(), endBuffSI.getValue(time, slv));
        tsm.putCharacterStatValue(IndieMAD, o, true);
        tsm.sendSetStatPacket();
    }

    @Override
    public void handleRemoveCTS(CharacterTemporaryStat cts, Option option) {
        if (cts == IndieSummon && option.rOption == SALAMANDER_MISCHIEF) {
            TemporaryStatManager tsm = chr.getTemporaryStatManager();
            if (tsm.hasStat(SalamanderMischief)) {
                tsm.removeStatsBySkill(SALAMANDER_MISCHIEF);
                int count = option.nOption;
                giveSalamanderMischiefEndBuff(count);
            }
        }

        super.handleRemoveCTS(cts, option);
    }

    public void doFoxSavageFlameAttack() {
        createSavageFlameForceAtoms();
        chr.setSkillCooldown(BlazeWizard.SAVAGE_FLAME, chr.getSkillLevel(BlazeWizard.SAVAGE_FLAME));
        updateFlameCharge(0);
    }

    private void createSavageFlameForceAtoms() {
        SkillInfo si = SkillData.getSkillInfoById(SAVAGE_FLAME);
        Field field = chr.getField();
        int slv = chr.getSkillLevel(SAVAGE_FLAME);
        int flameChargeOverReq = flameCharge - si.getValue(x, slv);
        Rect rect = chr.getPosition().getRectAround(SkillData.getSkillInfoById(SAVAGE_FLAME_FOX).getFirstRect());
        if (!chr.isLeft()) {
            rect = rect.horizontalFlipAround(chr.getPosition().getX());
        }
        if (flameChargeOverReq < 0) {
            return;
        }
        int atomsCreated = si.getValue(q, slv);
        int maxRecreations = si.getValue(u2, slv) + (flameChargeOverReq * 2);
        List<Integer> targetList = new ArrayList<>();
        List<ForceAtomInfo> faiList = new ArrayList<>();
        ForceAtomEnum fae = ForceAtomEnum.FLAME_DISCHARGE;
        List<Mob> bossMobs = field.getBossMobsInRect(rect).stream().filter(m -> !MobConstants.isFriendlyMob(m.getTemplateId())).collect(Collectors.toList());
        List<Mob> possibleTargetMobs = field.getMobsInRect(rect).stream().filter(m -> !MobConstants.isFriendlyMob(m.getTemplateId())).collect(Collectors.toList());
        for (int i = 0; i < atomsCreated; i++) {
            Mob mob;
            if (field.getBossMobsInRect(rect).size() > 0) {
                mob = Util.getRandomFromCollection(bossMobs);
            } else {
                mob = Util.getRandomFromCollection(possibleTargetMobs);
            }
            if (mob != null) {
                targetList.add(mob.getObjectId());
            } else {
                targetList.add(0);
            }
            int fImpact = new Random().nextInt(4) + 10;
            int sImpact = new Random().nextInt(2) + 4;
            int angle = new Random().nextInt(20) + ((chr.isLeft() ? 260 : 260) - 10);
            ForceAtomInfo fai = new ForceAtomInfo(chr.getNewForceAtomKey(), fae.getInc(), fImpact, sImpact,
                    angle, 750, Util.getCurrentTime(), 0, 0,
                    new Position());
            faiList.add(fai);
        }
        ForceAtom fa = new ForceAtom(false, chr.getId(), chr.getId(), fae,
                true, targetList, SAVAGE_FLAME_FOX_ATOM, faiList, new Rect(), 0, 0,
                new Position(), 0, new Position(), 0);
        fa.setMaxRecreationCount(maxRecreations);
        chr.createForceAtom(fa);
    }


    // Hit related methods ---------------------------------------------------------------------------------------------

    public void reviveByPhoenixRun() {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        Option o = new Option();
        Skill skill = chr.getSkill(PHOENIX_RUN);
        SkillInfo si = SkillData.getSkillInfoById(skill.getSkillId());
        int slv = skill.getCurrentLevel();

        chr.heal(chr.getMaxHP() / 2, false, true); // 50%
        tsm.removeStatsBySkill(PHOENIX_RUN);
        tsm.sendResetStatPacket();
        chr.chatMessage("You have been revived by Phoenix Run.");

        Position position = chr.getPosition();
        chr.write(FieldPacket.teleport(new Position(position.getX() + (chr.isLeft() ? +350 : -350), position.getY()), chr));

        // Hit effect
        chr.write(UserPacket.effect(Effect.skillUse(PHOENIX_RUN_EFFECTS, chr.getLevel(), slv, 0)));
        chr.getField().broadcastPacket(UserRemote.effect(chr.getId(), Effect.skillUse(PHOENIX_RUN_EFFECTS, chr.getLevel(), slv, 0)));

        // Backstep effect
        chr.write(UserPacket.effect(Effect.skillAffected(PHOENIX_RUN_EFFECTS, slv, 0)));
        chr.getField().broadcastPacket(UserRemote.effect(chr.getId(), Effect.skillAffected(PHOENIX_RUN_EFFECTS, slv, 0)));

        o.nOption = 1;
        o.rOption = PHOENIX_RUN;
        o.tOption = si.getValue(x, slv); // duration
        tsm.putCharacterStatValue(NotDamaged, o);
        tsm.sendSetStatPacket();
    }
}
