package net.swordie.ms.client.jobs.adventurer.warrior;

import net.swordie.ms.client.Client;
import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.info.HitInfo;
import net.swordie.ms.client.character.skills.Option;
import net.swordie.ms.client.character.skills.Skill;
import net.swordie.ms.client.character.skills.SkillUseSource;
import net.swordie.ms.client.character.skills.atom.secondatom.SecondAtom;
import net.swordie.ms.client.character.skills.info.AttackInfo;
import net.swordie.ms.client.character.skills.info.MobAttackInfo;
import net.swordie.ms.client.character.skills.info.SkillInfo;
import net.swordie.ms.client.character.skills.info.SkillUseInfo;
import net.swordie.ms.client.character.skills.temp.CharacterTemporaryStat;
import net.swordie.ms.client.character.skills.temp.TemporaryStatManager;
import net.swordie.ms.connection.InPacket;
import net.swordie.ms.connection.packet.*;
import net.swordie.ms.constants.JobConstants;
import net.swordie.ms.enums.AssistType;
import net.swordie.ms.enums.MoveAbility;
import net.swordie.ms.life.Life;
import net.swordie.ms.life.Summon;
import net.swordie.ms.life.mob.Mob;
import net.swordie.ms.life.mob.MobStat;
import net.swordie.ms.life.mob.MobTemporaryStat;
import net.swordie.ms.loaders.SkillData;
import net.swordie.ms.util.Util;
import net.swordie.ms.world.field.Field;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import static net.swordie.ms.client.character.skills.SkillStat.*;
import static net.swordie.ms.client.character.skills.temp.CharacterTemporaryStat.*;

public class DarkKnight extends Warrior {
    public static final int EVIL_EYE = 1301013;
    public static final int HYPER_BODY = 1301007;
    public static final int IRON_WILL = 1301006;
    public static final int SPEAR_SWEEP = 1301012;
    public static final int WEAPON_BOOSTER_SPEARMAN = 1301004;
    public static final int FINAL_ATTACK_SPEARMAN = 1300002;


    public static final int EVIL_EYE_OF_DOMINATION = 1310013;
    public static final int CROSS_SURGE = 1311015;
    public static final int EVIL_EYE_SHOCK = 1311014;
    public static final int EVIL_EYE_HEX_REINFORCE = 1320045;
    public static final int EVIL_EYE_AURA_REINFORCE = 1320044;
    public static final int HEX_OF_THE_EVIL_EYE = 1310016;
    public static final int LORD_OF_DARKNESS = 1310009;

    public static final int LA_MANCHA_SPEAR = 1311011;

    public static final int DARK_THIRST = 1321054; //Lv150
    public static final int SACRIFICE = 1321015; //Resets summon
    public static final int MAPLE_WARRIOR_DARK_KNIGHT = 1321000;
    public static final int REVENGE_OF_THE_EVIL_EYE = 1320011;
    public static final int FINAL_PACT_INFO = 1320016;
    public static final int FINAL_PACT = 1320019;
    public static final int FINAL_PACT_REDUCE_TARGET = 1320047;
    public static final int FINAL_PACT_DAMAGE = 1320046;
    public static final int MAGIC_CRASH_DRK = 1321014;
    public static final int HEROS_WILL_DRK = 1321010;
    public static final int GUNGNIR_DESCENT = 1321013;
    public static final int EPIC_ADVENTURE_DRK = 1321053; //Lv200


    // V skills
    public static final int RADIANT_EVIL = 400011054;
    public static final int CALAMITOUS_CYCLONE = 400011068;
    public static final int CALAMITOUS_CYCLONE_FINAL_ATTACK = 400011069;
    public static final int DARKNESS_AURA = 400011047; // Uses SecondAtom
    public static final int DARKNESS_AURA_2 = 400011085;
    public static final int SPEAR_OF_DARKNESS = 400011004;


    public DarkKnight(Char chr) {
        super(chr);
    }


    @Override
    public boolean isHandlerOfJob(short id) {
        return JobConstants.isDarkKnight(id);
    }

    private void spawnEvilEye(int skillID, int slv) {
        Field field = chr.getField();
        Summon evilEye = Summon.getSummonBy(chr, skillID, slv);
        evilEye.setFlyMob(true);
        evilEye.setMoveAbility(MoveAbility.Fly);
        evilEye.setAssistType(AssistType.Attack);
        field.spawnSummonAndRemoveOld(evilEye);
    }

    private Summon getEvilEye() {
        return chr.getField().getSummonByChrAndSkillId(chr, EVIL_EYE);
    }

    private void removeEvilEye() {
        if (getEvilEye() != null) {
            TemporaryStatManager tsm = chr.getTemporaryStatManager();
            chr.getField().removeSummon(getEvilEye());
            tsm.removeStatsBySkill(EVIL_EYE);
            tsm.removeStat(Beholder);
        }
    }

    public void healByEvilEye() {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        if (chr.hasSkill(EVIL_EYE) && tsm.hasStatBySkillId(EVIL_EYE)) {
            Skill skill = chr.getSkill(EVIL_EYE);
            SkillInfo si = SkillData.getSkillInfoById(skill.getSkillId());
            int slv = skill.getCurrentLevel();
            int amountHealed = si.getValue(hp, slv);
            if (chr.hasSkill(EVIL_EYE_AURA_REINFORCE)) {
                amountHealed = (int) (chr.getMaxHP() * 0.1F);
            }
            chr.heal(amountHealed);
        }
    }

    public void giveHexOfTheEvilEyeBuffs(Summon summon) {
        Skill skill = chr.getSkill(HEX_OF_THE_EVIL_EYE);
        int slv = skill.getCurrentLevel();
        SkillInfo si = SkillData.getSkillInfoById(skill.getSkillId());

        var rect = summon.getRectAround(si.getFirstRect());
        List<Char> chrList = new ArrayList<>() {{ add(chr); }};
        if (chr.getParty() != null) {
            chrList = chr.getParty().getPartyMembersInField(chr).stream().filter(pChr -> rect.hasPositionInside(pChr.getPosition())).collect(Collectors.toList());
        }
        var eff = Effect.skillAffected(HEX_OF_THE_EVIL_EYE, (byte) 1, summon.getObjectId());

        var pad = si.getValue(epad, slv) + chr.getSkillStatValue(x, EVIL_EYE_HEX_REINFORCE);
        var tOpt = si.getValue(time, slv);

        for (var pChr : chrList) {
            var pTsm = pChr.getTemporaryStatManager();
            Option o1 = new Option();
            Option o2 = new Option();
            Option o3 = new Option();
            Option o4 = new Option();
            pChr.write(UserPacket.effect(eff));
            pChr.getField().broadcastPacket(UserRemote.effect(pChr.getId(), eff), pChr);


            o1.nOption = pad;
            o1.rOption = skill.getSkillId();
            o1.tOption = tOpt;
            pTsm.putCharacterStatValue(IndiePAD, o1);

            o2.nOption = pad;
            o2.rOption = skill.getSkillId();
            o2.tOption = tOpt;
            pTsm.putCharacterStatValue(IndieMAD, o2);

            o3.nOption = si.getValue(epdd, slv);
            o3.rOption = skill.getSkillId();
            o3.tOption = tOpt;
            pTsm.putCharacterStatValue(EPDD, o3);

            o4.rOption = skill.getSkillId();
            o4.nOption = si.getValue(indieCr, slv);
            o4.tOption = tOpt;
            pTsm.putCharacterStatValue(IndieCr, o4);
            pTsm.sendSetStatPacket();
        }
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

        if (hasHitMobs) {
            //Lord of Darkness
            lordOfDarkness();

            // Final Pact
            decreaseFinalPactCount(attackInfo);

            //Dark Thirst
            darkThirst();
        }

        Option o1 = new Option();
        Option o2 = new Option();
        Option o3 = new Option();
        Option o4 = new Option();
        switch (attackInfo.skillId) {

            case SPEAR_SWEEP:
                o1.nOption = 1;
                o1.rOption = skill.getSkillId();
                o1.tOption = 5; // no time given
                for (MobAttackInfo mai : attackInfo.mobAttackInfo) {
                    Mob mob = (Mob) chr.getField().getLifeByObjectID(mai.mobId);
                    if (mob == null || mob.isBoss()) {
                        continue;
                    }
                    MobTemporaryStat mts = mob.getTemporaryStat();
                    mts.addStatOptionsAndBroadcast(chr, MobStat.Stun, o1);
                }
                break;
            case EVIL_EYE:
                chr.reduceSkillCoolTime(SACRIFICE, 300); // Sacrifice SkillInfo:  Successful Evil Eye attacks reduce Sacrifice CD by 0.3
                switch (attackInfo.summonSpecialSkillId) {
                    case EVIL_EYE_SHOCK:
                        skill = chr.getSkill(EVIL_EYE_SHOCK);
                        si = SkillData.getSkillInfoById(skill.getSkillId());
                        slv = skill.getCurrentLevel();

                        o1.nOption = 1;
                        o1.rOption = skill.getSkillId();
                        o1.tOption = si.getValue(time, slv);
                        for (MobAttackInfo mai : attackInfo.mobAttackInfo) {
                            if (Util.succeedProp(si.getValue(prop, slv))) {
                                Mob mob = (Mob) chr.getField().getLifeByObjectID(mai.mobId);
                                if (mob == null || mob.isBoss()) {
                                    continue;
                                }
                                MobTemporaryStat mts = mob.getTemporaryStat();
                                mts.addStatOptionsAndBroadcast(chr, MobStat.Stun, o1);
                            }
                        }
                        chr.setSkillCooldown(attackInfo.summonSpecialSkillId, chr.getSkillLevel(attackInfo.summonSpecialSkillId));
                        break;
                }
                break;
            case CALAMITOUS_CYCLONE_FINAL_ATTACK:
                if (hasHitMobs) {
                    chr.heal(chr.getHPPerc(10));
                }
                break;
            case DARKNESS_AURA:
                darknessAuraDrainLifeForce(attackInfo);
                break;
            case SPEAR_OF_DARKNESS:
                o2.nOption = si.getValue(w, slv);
                o2.rOption = SPEAR_OF_DARKNESS;
                o2.tOption = 2;
                tsm.putCharacterStatValue(IndieHitDamageInclHPR, o2);
                break;
        }
        super.handleAttack(c, attackInfo);
    }

    private void darkThirst() {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        if (tsm.getOptByCTSAndSkill(IndiePAD, DARK_THIRST) != null) {
            Skill skill = chr.getSkill(DARK_THIRST);
            int slv = skill.getCurrentLevel();
            SkillInfo si = SkillData.getSkillInfoById(skill.getSkillId());
            int heal = si.getValue(x, slv);
            chr.heal(chr.getHPPerc(heal));
        }
    }

    private void lordOfDarkness() {
        if (chr.hasSkill(LORD_OF_DARKNESS)) {
            Skill skill = chr.getSkill(LORD_OF_DARKNESS);
            int slv = skill.getCurrentLevel();
            SkillInfo si = SkillData.getSkillInfoById(skill.getSkillId());
            int proc = si.getValue(prop, slv);
            if (Util.succeedProp(proc)) {
                int heal = si.getValue(x, slv);
                chr.heal((int) (chr.getMaxHP() / ((double) 100 / heal)));
            }
        }
    }

    private Skill getFinalAtkSkill() {
        Skill skill = null;
        if (chr.hasSkill(FINAL_ATTACK_SPEARMAN)) {
            skill = chr.getSkill(FINAL_ATTACK_SPEARMAN);
        }
        return skill;
    }

    @Override
    public int getFinalAttackSkill() {
        Skill faSkill = getFinalAtkSkill();
        if (faSkill != null) {
            SkillInfo si = SkillData.getSkillInfoById(faSkill.getSkillId());
            int slv = faSkill.getCurrentLevel();
            int proc = si.getValue(prop, slv);

            if (Util.succeedProp(proc)) {
                return faSkill.getSkillId();
            }
        }
        return super.getFinalAttackSkill();
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
        Option o1 = new Option();
        Option o2 = new Option();
        Option o3 = new Option();
        switch (skillId) {
            case IRON_WILL:
                o1.nOption = si.getValue(pdd, slv);
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(DEF, o1);
                break;
            case HYPER_BODY:
                o1.nOption = si.getValue(x, slv);
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(MaxHP, o1);
                o2.nOption = si.getValue(y, slv);
                o2.rOption = skillId;
                o2.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(MaxMP, o2);
                break;
            case CROSS_SURGE:
                int totalHP = chr.getMaxHP();
                int currentHP = chr.getHP();
                o1.rOption = skillId;
                o1.nOption = (int) ((si.getValue(x, slv) * ((double) currentHP) / totalHP));
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndiePMdR, o1);
                o2.nOption = 8;
                o2.rOption = skillId;
                o2.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(DamageReduce, o2);
                break;
            case EVIL_EYE:
                if (getEvilEye() != null) {
                    removeEvilEye();
                }
                spawnEvilEye(skillId, slv);
                if (chr.hasSkill(EVIL_EYE_OF_DOMINATION)) {
                    o1.nOption = 1;
                    o1.sOption = EVIL_EYE_OF_DOMINATION;
                    o1.ssOption = 0;
                    tsm.putCharacterStatValue(Beholder, o1);
                }
                break;
            case SACRIFICE:
                if (chr.getField().getSummonByChrAndSkillId(chr, EVIL_EYE) != null) {
                    removeEvilEye();
                    chr.resetSkillCoolTime(GUNGNIR_DESCENT);

                    o2.rOption = skillId;
                    o2.nOption = si.getValue(x, slv);
                    o2.tOption = si.getValue(time, slv);
                    tsm.putCharacterStatValue(IndieIgnoreMobpdpR, o2);
                    o3.rOption = skillId;
                    o3.nOption = si.getValue(indieBDR, slv);
                    o3.tOption = si.getValue(time, slv);
                    tsm.putCharacterStatValue(IndieBDR, o3);

                    chr.heal((int) (chr.getMaxHP() / ((double) 100 / si.getValue(y, slv))));
                }
                break;
            case DARK_THIRST:
                o1.rOption = skillId;
                o1.nOption = si.getValue(indiePad, slv);
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndiePAD, o1);
                break;
            case DARKNESS_AURA:
                o1.nOption = 1;
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                o1.xOption = 0; // life force
                tsm.putCharacterStatValue(DarknessAura, o1);
                if (tsm.hasStatBySkillId(IRON_WILL)) {
                    o2.nOption = -si.getValue(w, slv);
                    o2.rOption = skillId;
                    o2.tOption = si.getValue(time, slv);
                    tsm.putCharacterStatValue(IndieHitDamageInclHPR, o2);
                }
                break;

        }
        tsm.sendSetStatPacket();
    }

    public void increaseDarknessAuraLifeForce() {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        if (!tsm.hasStat(DarknessAura)) {
            return;
        }

        Option o = tsm.getOption(DarknessAura);
        o.xOption += 1;
        var capLifeForce = chr.getSkillStatValue(s, DARKNESS_AURA);
        o.xOption = Math.max(0, Math.min(capLifeForce, o.xOption)); // cap to 15 Life Force

        tsm.updateBuff(DarknessAura, o);
    }

    public void darknessAuraDrainLifeForce(AttackInfo attackInfo) {
        var skillId = DARKNESS_AURA;
        if (!chr.hasSkill(skillId)) {
            return;
        }

        var si = SkillData.getSkillInfoById(skillId);

        if (si == null || si.getSecondAtomInfos().size() <= 0) {
            return;
        }
        var sai = si.getSecondAtomInfos().get(0);

        List<SecondAtom> saList = new ArrayList<>();
        for (MobAttackInfo mai : attackInfo.mobAttackInfo) {
            Mob mob = (Mob) chr.getField().getLifeByObjectID(mai.mobId);
            if (mob == null) {
                continue;
            }
            var sa = SecondAtom.createFromInfo(chr, skillId, sai);
            sa.setTargetId(chr.getId());
            sa.setPosition(mob.getPosition());
            saList.add(sa);
        }

        chr.spawnSecondAtoms(saList);

        // Benefits of Darkness Aura Attack
        var healed = chr.getHPPerc(chr.getSkillStatValue(x, skillId));
        var diff = chr.getMaxHP() - chr.getHP();
        if (healed > diff) {
            var overMaxHp = healed - diff;
            var multi = chr.getSkillStatValue(v, DARKNESS_AURA);
            var protectiveShield = (int) ((multi * overMaxHp) / 100D);
            increaseDarknessAuraProtectiveShield(protectiveShield);
        }
        chr.heal(healed);
        increaseDarknessAuraLifeForce();
    }

    public void increaseDarknessAuraProtectiveShield() {
        var tsm = chr.getTemporaryStatManager();
        if (tsm.hasStatBySkillId(HYPER_BODY)) {
            var max = chr.getHPPerc(chr.getSkillStatValue(y, DARKNESS_AURA));
            increaseDarknessAuraProtectiveShield(max);
        }
    }

    private void increaseDarknessAuraProtectiveShield(int shield) {
        var tsm = chr.getTemporaryStatManager();
        var newShield = shield;
        if (tsm.hasStat(ProtectiveShield)) {
            newShield += tsm.getOption(ProtectiveShield).nOption;
        }

        var opt = new Option(Math.max(0, Math.min(newShield, chr.getHPPerc(chr.getSkillStatValue(y, DARKNESS_AURA)))), 0, 40);
        tsm.putCharacterStatValue(ProtectiveShield, opt);
        tsm.sendSetStatPacket();
    }

    public int alterCooldownSkill(int skillId, int slv, AttackInfo attackInfo, SkillUseInfo sui, SkillUseSource source) {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        Skill skill = chr.getSkill(skillId);
        if (skill != null) {
            SkillInfo si = SkillData.getSkillInfoById(skill.getSkillId());

            switch (skillId) {
                case GUNGNIR_DESCENT:
                    if (tsm.hasStatBySkillId(SACRIFICE) || tsm.hasStat(Reincarnation)) {
                        return 0;
                    }
            }
        }
        return super.alterCooldownSkill(skillId, slv, attackInfo, sui, source);
    }

    public void handleRemoveCTS(CharacterTemporaryStat cts, Option o) {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        if (cts == Reincarnation) {
            if (o.xOption > 0) {
                chr.die();
            } else {
                chr.reduceSkillCoolTime(FINAL_PACT_INFO, 300);
            }

        } else if (cts == IndieSummon && tsm.hasStat(Beholder)) {
            tsm.removeStat(Beholder);
        } else if (cts == DarknessAura) {
            chr.write(UserLocal.userBonusAttackRequest(DARKNESS_AURA_2));
            tsm.removeStat(ProtectiveShield);
        }
        super.handleRemoveCTS(cts, o);
    }

    @Override
    public void handleKeyDownSkill(Char chr, int skillID, InPacket inPacket) {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        Option o1 = new Option();
        if (skillID == CALAMITOUS_CYCLONE) {
            o1.nOption = 100; // speed change
            o1.rOption = skillID;
            tsm.putCharacterStatValue(KeyDownMoving, o1);
            tsm.sendSetStatPacket();
        }
        super.handleKeyDownSkill(chr, skillID, inPacket);
    }

    // Hit related methods ---------------------------------------------------------------------------------------------

    @Override
    public void handleHit(Client c, InPacket inPacket, HitInfo hitInfo) {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        super.handleHit(c, inPacket, hitInfo);

        //Dark Knight - Revenge of the Evil Eye
        if (chr.hasSkill(REVENGE_OF_THE_EVIL_EYE)) {
            Field field = chr.getField();
            Skill skill = chr.getSkill(REVENGE_OF_THE_EVIL_EYE);
            int slv = skill.getCurrentLevel();
            SkillInfo si = SkillData.getSkillInfoById(skill.getSkillId());
            int proc = si.getValue(prop, slv);
            int heal = si.getValue(x, slv);
            if (field.getSummonByChrAndSkillId(chr, EVIL_EYE) != null
                    && !chr.hasSkillOnCooldown(REVENGE_OF_THE_EVIL_EYE)
                    && Util.succeedProp(proc)) {
                Life life = field.getLifeByObjectID(hitInfo.mobID);
                if (life instanceof Mob) {
                    chr.write(Summoned.summonBeholderRevengeAttack(getEvilEye(), hitInfo.mobID));
                    chr.heal(chr.getHPPerc(heal));
                    chr.addSkillCoolTime(REVENGE_OF_THE_EVIL_EYE, si.getValue(cooltime, slv) * 1000);
                }
            }
        }
    }

    public void reviveByFinalPact() {
        var skill = chr.getSkill(FINAL_PACT_INFO);
        if (skill == null || chr.hasSkillOnCooldown(FINAL_PACT_INFO)) {
            return;
        }

        var skillId = skill.getSkillId();
        var slv = skill.getCurrentLevel();
        var si = SkillData.getSkillInfoById(skillId);

        var mobsToDefeat = si.getValue(z, slv);

        var tsm = chr.getTemporaryStatManager();
        var o1 = new Option();
        var o2 = new Option();
        var o3 = new Option();
        var o4 = new Option();
        var o5 = new Option();

        chr.heal(chr.getMaxHP(), false, true);
        chr.healMP(chr.getMaxMP());

        var eff = Effect.showFinalPactEffect(FINAL_PACT, slv, 0, true);
        chr.write(UserPacket.effect(eff));
        chr.getField().broadcastPacket(UserRemote.effect(chr.getId(), eff), chr);

        o1.nOption = 1;
        o1.rOption = FINAL_PACT;
        o1.tOption = si.getValue(time, slv);
        o1.xOption = (int) (chr.hasSkill(FINAL_PACT_REDUCE_TARGET) ? mobsToDefeat * 0.7F : mobsToDefeat);
        tsm.putCharacterStatValue(Reincarnation, o1);
        o2.nOption = 1;
        o2.rOption = FINAL_PACT;
        o2.tOption = si.getValue(time, slv);
        tsm.putCharacterStatValue(IndieNotDamaged, o2);
        var damR = chr.getSkillStatValue(damage, FINAL_PACT_DAMAGE);
        if (damR > 0) {
            o3.rOption = FINAL_PACT;
            o3.nOption = damR;
            o3.tOption = si.getValue(time, slv);
            tsm.putCharacterStatValue(IndiePMdR, o3);
        }
        o4.nOption = 100;
        o4.rOption = FINAL_PACT;
        o4.tOption = si.getValue(time, slv);
        tsm.putCharacterStatValue(IgnoreAllImmune, o4);
        o5.nOption = 100;
        o5.rOption = FINAL_PACT;
        o5.tOption = si.getValue(time, slv);
        tsm.putCharacterStatValue(IgnoreAllCounter, o5);
        tsm.sendSetStatPacket();

        chr.addSkillCoolTime(FINAL_PACT_INFO, si.getValue(cooltime, slv) * 1000);
        chr.resetSkillCoolTime(GUNGNIR_DESCENT);
    }

    public void decreaseFinalPactCount(AttackInfo attackInfo) {
        var tsm = chr.getTemporaryStatManager();
        if (tsm.hasStat(Reincarnation)) {
            var opt = tsm.getOption(Reincarnation);
            opt.xOption -= attackInfo.mobAttackInfo.stream().filter(mai -> mai.mobDies || mai.mob.isBoss()).count();
            opt.xOption = Math.max(0, Math.min(opt.xOption, 30));
            tsm.updateBuff(Reincarnation, opt);
        }
    }


    @Override
    public void stopTimers() {

        super.stopTimers();
    }
}


