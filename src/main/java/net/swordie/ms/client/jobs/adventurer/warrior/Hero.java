package net.swordie.ms.client.jobs.adventurer.warrior;

import net.swordie.ms.client.Client;
import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.info.HitInfo;
import net.swordie.ms.client.character.quest.Quest;
import net.swordie.ms.client.character.skills.Option;
import net.swordie.ms.client.character.skills.Skill;
import net.swordie.ms.client.character.skills.SkillUseSource;
import net.swordie.ms.client.character.skills.info.AttackInfo;
import net.swordie.ms.client.character.skills.info.MobAttackInfo;
import net.swordie.ms.client.character.skills.info.SkillInfo;
import net.swordie.ms.client.character.skills.info.SkillUseInfo;
import net.swordie.ms.client.character.skills.temp.TemporaryStatManager;
import net.swordie.ms.connection.InPacket;
import net.swordie.ms.connection.packet.*;
import net.swordie.ms.constants.JobConstants;
import net.swordie.ms.constants.QuestConstants;
import net.swordie.ms.enums.MoveAbility;
import net.swordie.ms.handlers.executors.EventManager;
import net.swordie.ms.life.Life;
import net.swordie.ms.life.Summon;
import net.swordie.ms.life.mob.Mob;
import net.swordie.ms.life.mob.MobStat;
import net.swordie.ms.life.mob.MobTemporaryStat;
import net.swordie.ms.loaders.SkillData;
import net.swordie.ms.util.Util;
import net.swordie.ms.world.field.Field;

import java.util.Arrays;
import java.util.List;
import java.util.concurrent.ScheduledFuture;
import java.util.concurrent.TimeUnit;

import static net.swordie.ms.client.character.skills.SkillStat.*;
import static net.swordie.ms.client.character.skills.temp.CharacterTemporaryStat.*;

public class Hero extends Warrior {
    public static final int RAGE = 1101006;
    public static final int WEAPON_BOOSTER_FIGHTER = 1101004;
    public static final int COMBO_ATTACK = 1101013;
    public static final int FINAL_ATTACK_FIGHTER = 1100002;
    public static final int COMBO_FURY = 1101012;
    public static final int COMBO_FURY_DOWN = 1100012;


    public static final int COMBO_SYNERGY = 1110013;
    public static final int SELF_RECOVERY = 1110000;
    public static final int PANIC = 1111003;
    public static final int SHOUT = 1111008;
    public static final int SHOUT_DOWN = 1111014;


    public static final int ADVANCED_FINAL_ATTACK = 1120013;
    public static final int ADVANCED_FINAL_ATTACK_OPPORTUNITY = 1120048;
    public static final int PUNCTURE = 1121015;
    public static final int MAGIC_CRASH_HERO = 1121016;
    public static final int HEROS_WILL_HERO = 1121011;
    public static final int ADVANCED_COMBO = 1120003;
    public static final int ENRAGE = 1121010;
    public static final int ADVANCED_COMBO_REINFORCE = 1120043;
    public static final int ADVANCED_COMBO_OPPORTUNITY = 1120044;
    public static final int MAPLE_WARRIOR_HERO = 1121000;
    public static final int CRY_VALHALLA = 1121054; //Lv150
    public static final int EPIC_ADVENTURE_HERO = 1121053; //Lv200


    // V skills
    public static final int BURNING_SOUL_BLADE = 400011001;
    public static final int BURNING_SOUL_BLADE_STATIONARY = 400011002;
    public static final int WORLDREAVER = 400011027;
    public static final int COMBO_INSTINCT = 400011073;
    public static final int COMBO_INSTINCT_SLASH_STRAIGHT = 400011076;
    public static final int COMBO_INSTINCT_SLASH_DOWN = 400011075;
    public static final int COMBO_INSTINCT_SLASH_UP = 400011074;
    public static final int SWORD_ILLUSION = 400011124;
    public static final int SWORD_ILLUSION_2 = 400011125;
    public static final int SWORD_ILLUSION_3 = 400011126;


    private static final List<Integer> comboInstinctAttack = Arrays.asList(
            COMBO_INSTINCT_SLASH_DOWN,
            COMBO_INSTINCT_SLASH_UP,
            COMBO_INSTINCT_SLASH_STRAIGHT
    );
    private long soulBladeTime;
    private ScheduledFuture selfRecoveryTimer;


    public Hero(Char chr) {
        super(chr);
        if (isHandlerOfJob(chr.getJob())) {
            startSelfRecovery();
        }
    }


    @Override
    public boolean isHandlerOfJob(short id) {
        return JobConstants.isHero(id);
    }


    private void addCombo() {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        Option o1 = new Option();
        if (tsm.hasStat(ComboCounter) && chr.hasSkill(COMBO_ATTACK)) {
            Skill skill = chr.getSkill(COMBO_ATTACK);
            int slv = skill.getCurrentLevel();
            int count = getComboCount();
            if (count < getMaxCombo()) {
                count++;
                if (chr.hasSkill(ADVANCED_COMBO) && !tsm.hasStatBySkillId(COMBO_INSTINCT)) {
                    SkillInfo acsi = SkillData.getSkillInfoById(ADVANCED_COMBO);
                    int acslv = chr.getSkillLevel(ADVANCED_COMBO);
                    var extraComboChance = acsi.getValue(prop, acslv) + chr.getSkillStatValue(prop, ADVANCED_COMBO_OPPORTUNITY);
                    if (slv > 0 && Util.succeedProp(extraComboChance)) {
                        count++;
                    }
                }
            }
            if (count > getMaxCombo()) {
                count = getMaxCombo();
            }

            var lock = false;
            int questId = QuestConstants.SKILL_COMMAND_LOCK_QUEST_ID_2; // questId 1544
            Quest quest = chr.getQuestManager().getQuestById(questId);
            if (quest != null) {
                lock = quest.getQRValue().equalsIgnoreCase("");
            }

            o1.nOption = count;
            o1.rOption = skill.getSkillId();
            o1.xOption = lock ? 0 : 1;
            tsm.putCharacterStatValue(ComboCounter, o1);
            tsm.sendSetStatPacket();
        }
    }

    private void removeCombo(int count) {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        if (!tsm.hasStat(ComboCounter)) {
            return;
        }
        Option o = new Option();
        int currentCount = getComboCount();
        int newCount = currentCount - count;

        var lock = false;
        int questId = QuestConstants.SKILL_COMMAND_LOCK_QUEST_ID_2; // questId 1544
        Quest quest = chr.getQuestManager().getQuestById(questId);
        if (quest != null) {
            lock = quest.getQRValue().equalsIgnoreCase("");
        }

        o.nOption = Math.max(newCount, 0);
        o.rOption = COMBO_ATTACK;
        o.xOption = lock ? 0 : 1;
        tsm.putCharacterStatValue(ComboCounter, o);
        tsm.sendSetStatPacket();
    }

    private int getComboProp() {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        Skill skill = null;
        if (chr.hasSkill(COMBO_SYNERGY)) {
            skill = chr.getSkill(COMBO_SYNERGY);
        } else if (chr.hasSkill(COMBO_ATTACK)) {
            skill = chr.getSkill(COMBO_ATTACK);
        }
        if (skill == null) {
            return 0;
        }
        int proc = SkillData.getSkillInfoById(skill.getSkillId()).getValue(prop, skill.getCurrentLevel());
        if (tsm.hasStatBySkillId(COMBO_INSTINCT)) {
            proc -= 50;
        }
        return proc < 0 ? 0 : proc;
    }

    private int getComboCount() {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        if (tsm.hasStat(ComboCounter)) {
            return tsm.getOption(ComboCounter).nOption;
        }
        return -1;
    }

    private int getMaxCombo() {
        int num = 0;
        if (chr.hasSkill(COMBO_ATTACK)) {
            num = 6;
        }
        if (chr.hasSkill(ADVANCED_COMBO)) {
            num = 11;
        }
        return num;
    }

    public Skill getComboAttackSkill() {
        Skill skill = null;
        if (chr.hasSkill(ADVANCED_COMBO)) {
            skill = chr.getSkill(ADVANCED_COMBO);
        } else if (chr.hasSkill(COMBO_SYNERGY)) {
            skill = chr.getSkill(COMBO_SYNERGY);
        } else if (chr.hasSkill(COMBO_ATTACK)) {
            skill = chr.getSkill(COMBO_ATTACK);
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
            slv = skill.getCurrentLevel();
            skillID = skill.getSkillId();
        }

        if (hasHitMobs) {
            //Combo
            if (tsm.hasStat(ComboCounter) && !isComboIgnoreSkill(attackInfo.skillId)) {
                int comboProp = getComboProp();
                if (Util.succeedProp(comboProp)) {
                    addCombo();
                }
            }
        }
        // Instinctual Combo
        if (tsm.hasStatBySkillId(COMBO_INSTINCT) && (attackInfo.skillId == 1121008 || attackInfo.skillId == 1120017)) { // Raging Blow
            for (int comboInstinctSkillId : comboInstinctAttack) {
                chr.write(UserLocal.userBonusAttackRequest(comboInstinctSkillId));
            }
        }

        Option o1 = new Option();
        Option o2 = new Option();
        Option o3 = new Option();
        Option o4 = new Option();
        switch (attackInfo.skillId) {
            case COMBO_FURY:
                o1.nOption = 1;
                o1.rOption = skillID;
                o1.tOption = si.getValue(time, slv);
                for (MobAttackInfo mai : attackInfo.mobAttackInfo) {
                    Mob mob = (Mob) chr.getField().getLifeByObjectID(mai.mobId);
                    if (mob == null) {
                        continue;
                    }
                    MobTemporaryStat mts = mob.getTemporaryStat();
                    if (Util.succeedProp(si.getValue(prop, slv))) {
                        addCombo();
                        if (!mob.isBoss()) {
                            mts.addStatOptionsAndBroadcast(chr, MobStat.Stun, o1);
                        }
                    }
                }
                break;
            case COMBO_FURY_DOWN:
                if (hasHitMobs) {
                    int mobId = attackInfo.mobAttackInfo.get(0).mobId;
                    Life mob = chr.getField().getLifeByObjectID(mobId);
                    if (mob instanceof Mob) {
                        chr.write(UserPacket.effect(Effect.showHookEffect(attackInfo.skillId, chr.getLevel(), 1, 0,
                                attackInfo.left, mobId, mob.getX(), mob.getY())));
                        chr.getField().broadcastPacket(UserRemote.effect(chr.getId(), Effect.showHookEffect(attackInfo.skillId, chr.getLevel(), 1,
                                0, attackInfo.left, mobId, mob.getX(), mob.getY())));
                    }
                }
                break;
            case PANIC:
                removeCombo(!tsm.hasStat(ComboCostInc) ? 2 : tsm.getOption(ComboCostInc).nOption + 2);
                panicComboCostInc();
                if (hasHitMobs) {
                    int dur = si.getValue(time, slv);

                    o1.nOption = -si.getValue(w, slv);
                    o1.rOption = skill.getSkillId();
                    o1.tOption = dur;
                    o2.nOption = -si.getValue(w, slv);
                    o2.rOption = skill.getSkillId();
                    o2.tOption = dur / 2;

                    o3.nOption = -si.getValue(x, slv);
                    o3.rOption = skill.getSkillId();
                    o3.tOption = dur;
                    o4.nOption = -si.getValue(x, slv);
                    o4.rOption = skill.getSkillId();
                    o4.tOption = dur / 2;
                    for (MobAttackInfo mai : attackInfo.mobAttackInfo) {
                        Mob mob = (Mob) chr.getField().getLifeByObjectID(mai.mobId);
                        if (mob == null) {
                            continue;
                        }
                        MobTemporaryStat mts = mob.getTemporaryStat();
                        mts.addStatOptionsAndBroadcast(chr, MobStat.PAD, mob.isBoss() ? o2 : o1);
                        mts.addStatOptionsAndBroadcast(chr, MobStat.MAD, mob.isBoss() ? o2 : o1);
                        if (Util.succeedProp(si.getValue(prop, slv))) {
                            mts.addStatOptionsAndBroadcast(chr, MobStat.ACC, mob.isBoss() ? o4 : o3);
                            mts.addStatOptionsAndBroadcast(chr, MobStat.Blind, mob.isBoss() ? o4 : o3);
                        }
                    }
                }
                break;
            case SHOUT:
                removeCombo(si.getValue(y, slv));
                break;
            case SHOUT_DOWN:
                Skill orig = chr.getSkill(SHOUT);
                slv = orig.getCurrentLevel();
                si = SkillData.getSkillInfoById(SHOUT_DOWN);
                o1.nOption = -10;
                o1.rOption = SHOUT_DOWN;
                o1.tOption = si.getValue(time, slv);

                o2.nOption = 1;
                o2.rOption = SHOUT_DOWN;
                o2.tOption = si.getValue(time, slv);
                for (MobAttackInfo mai : attackInfo.mobAttackInfo) {
                    Mob mob = (Mob) chr.getField().getLifeByObjectID(mai.mobId);
                    if (mob == null) {
                        continue;
                    }
                    MobTemporaryStat mts = mob.getTemporaryStat();
                    if (mob.isBoss()) {
                        mts.addStatOptionsAndBroadcast(chr, MobStat.PDR, o1);
                        mts.addStatOptionsAndBroadcast(chr, MobStat.MDR, o1);
                    } else {
                        mts.addStatOptionsAndBroadcast(chr, MobStat.Stun, o2);
                    }
                }
                removeCombo(1);
                //chr.setSkillCooldown(orig.getSkillId(), slv);
                break;
            case PUNCTURE:
                o1.nOption = si.getValue(x, slv);
                o1.rOption = skillID;
                o1.tOption = si.getValue(time, slv);
                removeCombo(si.getValue(y, slv));
                for (MobAttackInfo mai : attackInfo.mobAttackInfo) {
                    Mob mob = (Mob) chr.getField().getLifeByObjectID(mai.mobId);
                    if (mob == null) {
                        continue;
                    }
                    MobTemporaryStat mts = mob.getTemporaryStat();

                    mts.addStatOptionsAndBroadcast(chr, MobStat.HitCriDamR, o1);
                    if (Util.succeedProp(si.getValue(prop, slv))) {
                        mts.createAndAddBurnedInfo(chr, skill);
                    }
                }
                break;
            case WORLDREAVER:
                for (MobAttackInfo mai : attackInfo.mobAttackInfo) {
                    if (mai.mob != null && mai.mobDies) {
                        chr.getField().broadcastPacket(MobPool.specialSelectedEffectBySkill(mai.mob, skillID, chr.getId()));
                    }
                }
                removeCombo(si.getValue(y, slv));

                o1.nOption = si.getValue(y, slv); // 6 combo orbs * 10% FD
                o1.rOption = attackInfo.skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(WorldReaver, o1, true);
                tsm.sendSetStatPacket();

                o2.nOption = 1;
                o2.rOption = attackInfo.skillId;
                o2.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieNotDamaged, o2, true);
                tsm.sendSetStatPacket();
                break;
        }
        super.handleAttack(c, attackInfo);
    }

    @Override
    public int alterMpCon(int mpCon, int skillId, int slv, AttackInfo attackInfo, SkillUseInfo sui, SkillUseSource source) {
        // Hero - Sword Illusion
        // Only apply MP Consumption on the first attack of SWORD_ILLUSION_2. Bypass MP Con for every other attack of Sword Illusion
        if (attackInfo.skillId == Hero.SWORD_ILLUSION_2 && attackInfo.sui.multiAttackInfoSequenceCounter != 1) {
            return 0;
        }

        return super.alterMpCon(mpCon, skillId, slv, attackInfo, sui, source);
    }

    private void panicComboCostInc() {
        if (!chr.hasSkill(PANIC)) {
            return;
        }
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        Option o = new Option();
        Skill skill = chr.getSkill(PANIC);
        SkillInfo si = SkillData.getSkillInfoById(skill.getSkillId());
        int slv = skill.getCurrentLevel();

        int count = 1;
        if (tsm.hasStat(ComboCostInc)) {
            count = tsm.getOption(ComboCostInc).nOption;
            if (count < 8) {
                count++;
            }
        }
        o.nOption = count;
        o.rOption = skill.getSkillId();
        o.tOption = si.getValue(subTime, slv);
        tsm.putCharacterStatValue(ComboCostInc, o, true);
        tsm.sendSetStatPacket();
    }

    private Skill getFinalAtkSkill() {
        Skill skill = null;
        if (chr.hasSkill(FINAL_ATTACK_FIGHTER)) {
            skill = chr.getSkill(FINAL_ATTACK_FIGHTER);

        }
        if (chr.hasSkill(ADVANCED_FINAL_ATTACK)) {
            skill = chr.getSkill(ADVANCED_FINAL_ATTACK); // Hero Adv FA
        }

        return skill;
    }

    @Override
    public int getFinalAttackSkill() {
        Skill faSkill = getFinalAtkSkill();
        if (faSkill != null) {
            SkillInfo si = SkillData.getSkillInfoById(faSkill.getSkillId());
            int slv = faSkill.getCurrentLevel();
            int proc = si.getValue(prop, slv) + chr.getSkillStatValue(prop, ADVANCED_FINAL_ATTACK_OPPORTUNITY);

            if (Util.succeedProp(proc)) {
                return faSkill.getSkillId();
            }
        }
        return super.getFinalAttackSkill();
    }


    private boolean isComboIgnoreSkill(int skillID) {
        return skillID == SHOUT ||
                skillID == SHOUT_DOWN ||
                skillID == PANIC ||
                skillID == COMBO_FURY ||
                skillID == COMBO_FURY_DOWN ||
                skillID == PUNCTURE ||
                skillID == COMBO_INSTINCT_SLASH_DOWN ||
                skillID == COMBO_INSTINCT_SLASH_UP ||
                skillID == COMBO_INSTINCT_SLASH_STRAIGHT;
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
        Option o4 = new Option();
        switch (skillId) {
            case RAGE:
                o1.rOption = skillId;
                o1.nOption = si.getValue(indiePad, slv);
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndiePAD, o1);
                o2.nOption = si.getValue(y, slv);
                o2.rOption = skillId;
                o2.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndiePowerGuard, o2);
                break;
            case COMBO_ATTACK:
                var lock = false;
                int questId = QuestConstants.SKILL_COMMAND_LOCK_QUEST_ID_2; // questId 1544
                Quest quest = chr.getQuestManager().getQuestById(questId);
                if (quest != null) {
                    lock = quest.getQRValue().equalsIgnoreCase("");
                }
                o1.nOption = 1;
                o1.rOption = skillId;
                o1.xOption = lock ? 0 : 1;
                tsm.putCharacterStatValue(ComboCounter, o1);
                break;
            case ENRAGE:
                removeCombo(1);
                int xValue = si.getValue(x, slv);
                o1.nOption = xValue;
                o1.rOption = skillId;
                o1.xOption = xValue;
                tsm.putCharacterStatValue(Enrage, o1);
                o2.nOption = si.getValue(y, slv);
                o2.rOption = skillId;
                tsm.putCharacterStatValue(EnrageCrDamMin, o2);
                break;
            case CRY_VALHALLA:
                o1.rOption = skillId;
                o1.nOption = si.getValue(indieCr, slv);
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieCr, o1);
                o2.nOption = si.getValue(x, slv);
                o2.rOption = skillId;
                o2.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(AsrR, o2);
                tsm.putCharacterStatValue(TerR, o2);
                o3.nOption = 100;
                o3.rOption = skillId;
                o3.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(Stance, o3);
                o4.rOption = skillId;
                o4.nOption = si.getValue(indiePad, slv);
                o4.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndiePAD, o4);
                break;
            case BURNING_SOUL_BLADE:
                if (field.getSummons().stream().anyMatch(s -> s.getSkillID() == BURNING_SOUL_BLADE_STATIONARY && s.getChr() == chr)) {
                    field.removeSummon(BURNING_SOUL_BLADE_STATIONARY, chr.getId());
                    summon = Summon.getSummonByNoCTS(chr, BURNING_SOUL_BLADE, slv);
                    summon.setMoveAbility(MoveAbility.Walk);
                    summon.setSummonTerm((int) ((soulBladeTime - Util.getCurrentTimeLong())) / 1000);
                    if (summon.getSummonTerm() <= 0) {
                        summon.setSummonTerm(1);
                    }
                    field.spawnSummonAndRemoveOld(summon);
                } else if (field.getSummons().stream().anyMatch(s -> s.getSkillID() == BURNING_SOUL_BLADE && s.getChr() == chr)) {
                    field.removeSummon(BURNING_SOUL_BLADE, chr.getId());
                    summon = Summon.getSummonByNoCTS(chr, BURNING_SOUL_BLADE_STATIONARY, slv);
                    summon.setMoveAbility(MoveAbility.Stop);
                    summon.setSummonTerm((int) ((soulBladeTime - Util.getCurrentTimeLong())) / 1000);
                    if (summon.getSummonTerm() <= 0) {
                        summon.setSummonTerm(1);
                    }
                    field.spawnSummonAndRemoveOld(summon);
                } else {
                    soulBladeTime = Util.getCurrentTimeLong() + 1000 * si.getValue(time, slv);
                    summon = Summon.getSummonBy(chr, BURNING_SOUL_BLADE, slv);
                    summon.setMoveAbility(MoveAbility.Walk);
                    field.spawnSummonAndRemoveOld(summon);
                    chr.setSkillCooldown(skillId, slv);
                }
                break;
            case COMBO_INSTINCT:
                o1.nOption = 1;
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(ComboInstinct, o1);
                break;
        }
        tsm.sendSetStatPacket();
    }

    @Override
    public int alterCooldownSkill(int skillId, int slv, AttackInfo attackInfo, SkillUseInfo sui, SkillUseSource source) {
        switch (skillId) {
            case BURNING_SOUL_BLADE:
                var si = SkillData.getSkillInfoById(skillId);
                return si.getValue(x, slv) * 1000;
        }
        return super.alterCooldownSkill(skillId, slv, attackInfo, sui, source);
    }

    private void selfRecovery() {
        if (chr != null && chr.getField() != null && chr.hasSkill(SELF_RECOVERY)) {
            Skill skill = chr.getSkill(SELF_RECOVERY);
            SkillInfo si = SkillData.getSkillInfoById(skill.getSkillId());
            int slv = skill.getCurrentLevel();
            int healHP = si.getValue(hp, slv);
            int healMP = si.getValue(mp, slv);
            chr.heal(healHP, true, false);
            chr.healMP(healMP);
        } else if (selfRecoveryTimer != null && !selfRecoveryTimer.isDone()) {
            selfRecoveryTimer.cancel(true);
        }
    }


    // Hit related methods ---------------------------------------------------------------------------------------------

    @Override
    public void handleHit(Client c, InPacket inPacket, HitInfo hitInfo) {
        //Hero - Combo Synergy
        comboSynergy();

        super.handleHit(c, inPacket, hitInfo);
    }

    public void comboSynergy() {
        if (chr.hasSkill(COMBO_SYNERGY)) {
            Skill skill = chr.getSkill(COMBO_SYNERGY);
            SkillInfo si = SkillData.getSkillInfoById(skill.getSkillId());
            int slv = skill.getCurrentLevel();
            int comboprop = si.getValue(subProp, slv);
            if (Util.succeedProp(comboprop)) {
                addCombo();
            }
        }
    }

    private void startSelfRecovery() {
        if (!chr.hasSkill(SELF_RECOVERY)) {
            return;
        }
        int interval = 6;
        EventManager.stopTimer(selfRecoveryTimer);
        if (interval > 0) {
            selfRecoveryTimer = EventManager.addFixedRateEvent(this::selfRecovery, interval, interval, TimeUnit.SECONDS);
        }
    }

    @Override
    public void updateTimerSkill() {
        EventManager.stopTimer(selfRecoveryTimer);
        startSelfRecovery();
        super.updateTimerSkill();
    }

    @Override
    public void stopTimers() {
        EventManager.stopTimer(selfRecoveryTimer);

        super.stopTimers();
    }
}
