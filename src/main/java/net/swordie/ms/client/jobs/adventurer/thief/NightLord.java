package net.swordie.ms.client.jobs.adventurer.thief;

import net.swordie.ms.client.Client;
import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.skills.*;
import net.swordie.ms.client.character.skills.atom.forceatom.ForceAtom;
import net.swordie.ms.client.character.skills.info.*;
import net.swordie.ms.client.character.skills.shootobject.ShootObject;
import net.swordie.ms.client.character.skills.shootobject.ShootObjectSkillInfo;
import net.swordie.ms.client.character.skills.temp.TemporaryStatManager;
import net.swordie.ms.connection.InPacket;
import net.swordie.ms.connection.packet.UserLocal;
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

import static net.swordie.ms.client.character.skills.BypassCooldownCheckType.BypassCheckAndCooldown;
import static net.swordie.ms.client.character.skills.BypassCooldownCheckType.Check;
import static net.swordie.ms.client.character.skills.SkillStat.*;
import static net.swordie.ms.client.character.skills.temp.CharacterTemporaryStat.*;

public class NightLord extends Thief {
    public static final int LUCKY_SEVEN = 4001344;

    public static final int SHURIKEN_BURST = 4101008;
    public static final int GUST_CHARM = 4101010;
    public static final int ASSASSINS_MARK = 4101011; //Buff (ON/OFF)
    public static final int ASSASSIN_MARK_ATOM = 4100012;
    public static final int NIGHTLORD_MARK_ATOM = 4120019;
    public static final int CLAW_BOOSTER = 4101003; //Buff


    public static final int TRIPLE_THROW = 4111010;
    public static final int SHADE_SPLITTER = 4111015;
    public static final int SHADOW_STARS = 4111009; //Buff
    public static final int SHADOW_PARTNER_NL = 4111002; //Buff
    public static final int EXPERT_THROWING_STAR_HANDLING = 4110012;
    public static final int DARK_FLARE_NL = 4111007; //Summon
    public static final int SHADOW_WEB = 4111003; //Special Attack (Dot + Bind)
    public static final int VENOM_NL = 4110011; //Passive DoT


    public static final int QUAD_STAR = 4121013;
    public static final int MAPLE_WARRIOR_NL = 4121000; //Buff
    public static final int SHOWDOWN = 4121017; //Special Attack
    public static final int SHOWDOWN_ENHANCE = 4120045;
    public static final int SUDDEN_RAID_NL = 4121016; //Special Attack
    public static final int FRAILTY_CURSE = 4121015; //AoE
    public static final int FRAILTY_CURSE_SLOW = 4120047;
    public static final int FRAILTY_CURSE_ENHANCE = 4120046;
    public static final int FRAILTY_CURSE_BOSS_RUSH = 4120048;
    public static final int NIGHT_LORD_MARK = 4120018;
    public static final int TOXIC_VENOM_NL = 4120011; //Passive DoT
    public static final int HEROS_WILL_NL = 4121009;
    public static final int BLEED_DART = 4121054;
    public static final int EPIC_ADVENTURE_NL = 4121053;


    // V skills
    public static final int DARK_LORDS_OMEN = 400041038;
    public static final int THROWING_STAR_BARRAGE = 400041001;
    public static final int THROWING_STAR_BARRAGE_DOUBLE = 400041016; // Lucky Seven
    public static final int THROWING_STAR_BARRAGE_TRIPLE = 400041017; // Triple Throw
    public static final int THROWING_STAR_BARRAGE_QUAD = 400041018; // Quad Throw
    public static final int SHURRIKANE = 400041020;
    public static final int THROW_BLASTING_BUFF = 400041061; // buff
    public static final int THROW_BLASTING_ATTACK = 400041062; //  attack
    public static final int THROW_BLASTING_CD = 400041079; // cooldown

    ShootObjectSkillInfo sosi = null;

    public NightLord(Char chr) {
        super(chr);
    }

    @Override
    public boolean isHandlerOfJob(short id) {
        return JobConstants.isNightLord(id);
    }


    @Override
    public void handleShootObj(Char chr, ShootObjectSkillInfo sosi) {
        var skillId = sosi.getSkillId();
        if (skillId == THROWING_STAR_BARRAGE_DOUBLE || skillId == THROWING_STAR_BARRAGE_TRIPLE || skillId == THROWING_STAR_BARRAGE_QUAD) {
            this.sosi = sosi;
        }
        super.handleShootObj(chr, sosi);
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
        if (!SkillConstants.isSummon(attackInfo.skillId) && hasHitMobs) {

            // NightLord's Mark & ForceAtom
            if (attackInfo.skillId != THROWING_STAR_BARRAGE_DOUBLE && attackInfo.skillId != THROWING_STAR_BARRAGE_TRIPLE && attackInfo.skillId != THROWING_STAR_BARRAGE_QUAD &&
                    chr.hasSkill(ASSASSINS_MARK)) {

                setMarkonMob(attackInfo);
                if (!SkillConstants.isForceAtomSkill(attackInfo.skillId)) {
                    handleMark(attackInfo);
                }
            }
            // Expert Throwing Star Handling
            if (!SkillConstants.isForceAtomSkill(attackInfo.skillId) && chr.hasSkill(EXPERT_THROWING_STAR_HANDLING) && Util.succeedProp(chr.getSkillStatValue(prop, EXPERT_THROWING_STAR_HANDLING))) {
                chr.write(UserLocal.setNextShootExJablin());
            }
            // Night Lord Hyper
            applyBleedDartOnMob(attackInfo);


            // Throw Blasting
            if (isShurikenAttack(attackInfo.skillId) && chr.hasSkill(THROW_BLASTING_BUFF)) {
                if (tsm.hasStat(ThrowBlasting)) {
                    doActiveThrowBlasting(attackInfo);
                } else {
                    doPassiveThrowBlasting(attackInfo);
                }
            }
        }


        Option o1 = new Option();
        Option o2 = new Option();
        Option o3 = new Option();
        Option o4 = new Option();
        switch (attackInfo.skillId) {
            case SHADOW_WEB:
                o1.nOption = 1;
                o1.rOption = skill.getSkillId();
                o1.tOption = si.getValue(time, slv);
                for (MobAttackInfo mai : attackInfo.mobAttackInfo) {
                    Mob mob = (Mob) chr.getField().getLifeByObjectID(mai.mobId);
                    if (Util.succeedProp(si.getValue(prop, slv))) {
                        if (mob == null || mob.isBoss()) {
                            continue;
                        }
                        MobTemporaryStat mts = mob.getTemporaryStat();
                        mts.addStatOptionsAndBroadcast(chr, MobStat.Stun, o1);
                        mts.createAndAddBurnedInfo(chr, skill);
                    }
                }
                break;
            case SHOWDOWN:
                o1.nOption = si.getValue(x, slv);
                o1.rOption = skill.getSkillId();
                o1.tOption = si.getValue(time, slv);
                o2.nOption = 1;
                o2.rOption = skillID;
                o2.tOption = si.getValue(time, slv);
                for (MobAttackInfo mai : attackInfo.mobAttackInfo) {
                    Mob mob = (Mob) chr.getField().getLifeByObjectID(mai.mobId);
                    if (mob == null) {
                        continue;
                    }
                    MobTemporaryStat mts = mob.getTemporaryStat();
                    if (!mob.isBoss()) {
                        mts.addStatOptionsAndBroadcast(chr, MobStat.Showdown, o1);
                    }

                    int bonus = si.getValue(x, slv) + chr.getSkillStatValue(x, SHOWDOWN_ENHANCE);
                    o2.xOption = mob.isBoss() ? bonus / 2 : bonus; // Exp
                    o2.yOption = mob.isBoss() ? bonus / 2 : bonus; // Item Drop
                    mts.addStatOptionsAndBroadcast(chr, MobStat.Treasure, o2);
                }
                break;
            case THROWING_STAR_BARRAGE_DOUBLE:
            case THROWING_STAR_BARRAGE_TRIPLE:
            case THROWING_STAR_BARRAGE_QUAD:
                Map<Integer, ShootObject> shootObjectMap = new HashMap<>();
                List<ShootObject> shootObjectList = sosi.getShootObjects();
                Collections.reverse(shootObjectList);
                for (ShootObject so : shootObjectList) {
                    shootObjectMap.put((int) so.getDirection(), so);
                }

                for (ShootObject shootObject : shootObjectMap.values()) {
                    if (shootObject.getId() == attackInfo.shootObjId) {
                        if (chr.hasSkill(ASSASSINS_MARK)) {
                            setMarkonMob(attackInfo);
                            handleMark(attackInfo);
                        }
                    }
                }
                break;
            case DARK_LORDS_OMEN:
                if (attackInfo.attackActionType == 25 && attackInfo.summon != null) {
                    tsm.removeStatsBySkill(attackInfo.summon.getSkillID());
                    chr.getField().removeSummon(attackInfo.summon);
                }
                break;
        }
        super.handleAttack(c, attackInfo);
    }

    @Override
    public BypassCooldownCheckType canBypassCooldownCheck(int skillId, AttackInfo attackInfo, SkillUseInfo sui, SkillUseSource source) {
        switch (skillId) {
            case SHURRIKANE:
                return BypassCheckAndCooldown;
            case DARK_LORDS_OMEN:
                if (source.equals(SkillUseSource.AttackUseRequest)) {
                    return BypassCheckAndCooldown;
                } else {
                    return Check;
                }
        }

        return super.canBypassCooldownCheck(skillId, attackInfo, sui, source);
    }

    private boolean isShurikenAttack(int skillId) {
        return skillId == LUCKY_SEVEN
                || skillId == SHURIKEN_BURST
                || skillId == GUST_CHARM
                || skillId == TRIPLE_THROW
                || skillId == SHADE_SPLITTER
                || skillId == QUAD_STAR
                || skillId == SHOWDOWN;
    }

    public void doActiveThrowBlasting(AttackInfo attackInfo) {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        if (!tsm.hasStat(ThrowBlasting) || attackInfo.mobAttackInfo.size() <= 0) {
            return;
        }

        Option o = tsm.getOption(ThrowBlasting);
        var charmCount = o.nOption;
        var minCharms = o.sOption;
        var maxCharms = o.wOption;

        minCharms = Math.min(charmCount, minCharms);
        maxCharms = Math.min(charmCount, maxCharms);

        var charmsThrown = Util.getRandomInclUpperBound(minCharms, maxCharms);

        Mob mob = (Mob) chr.getField().getLifeByObjectID(attackInfo.mobAttackInfo.get(0).mobId);
        Rect rect = mob.getRectAround(new Rect(-130, -130, 130, 130));
        List<ExtraSkillInfo> extraSkillInfoList = new ArrayList<>();
        for (int i = 0; i < charmsThrown; i++) {
            extraSkillInfoList.add(new ExtraSkillInfo(THROW_BLASTING_ATTACK,
                    rect.getRandomPositionInside(), Util.getRandomBool(), Util.getRandom(50, 550), 0));
        }
        if (extraSkillInfoList.size() > 0) {
            chr.write(FieldPacket.registerExtraSkill(THROW_BLASTING_BUFF, extraSkillInfoList));
        }

        o.nOption -= charmsThrown;
        if (o.nOption <= 0) {
            tsm.removeStatsBySkill(THROW_BLASTING_BUFF);
            return;
        }
        tsm.updateBuff(ThrowBlasting, o);
    }

    public void doPassiveThrowBlasting(AttackInfo attackInfo) {
        if (attackInfo.mobAttackInfo.size() <= 0 || chr.hasSkillOnCooldown(THROW_BLASTING_CD)) {
            return;
        }

        Mob mob = (Mob) chr.getField().getLifeByObjectID(attackInfo.mobAttackInfo.get(0).mobId);
        Rect rect = mob.getRectAround(new Rect(-80, -80, 80, 80));
        var esi = new ExtraSkillInfo(THROW_BLASTING_ATTACK, rect.getRandomPositionInside(), Util.getRandomBool(), 125, 0);
        chr.write(FieldPacket.registerExtraSkill(THROW_BLASTING_BUFF, esi));
        chr.addSkillCoolTime(THROW_BLASTING_CD, chr.getSkillStatValue(subTime, THROW_BLASTING_BUFF));
    }

    public void createDarkLordOmenForceAtoms(Position position) {
        Skill skill = chr.getSkill(DARK_LORDS_OMEN);
        if (skill == null) {
            return;
        }
        SkillInfo si = SkillData.getSkillInfoById(skill.getSkillId());
        int slv = chr.getSkillLevel(skill.getSkillId());

        Rect rect = position.getRectAround(si.getFirstRect());
        ForceAtomEnum fae = chr.hasSkill(NIGHT_LORD_MARK) ? ForceAtomEnum.DARK_LORD_OMEN_2 : ForceAtomEnum.DARK_LORD_OMEN;
        int mobCountInRect = chr.getField().getMobsInRect(rect).size();
        int forceAtomCount = ((mobCountInRect * si.getValue(bulletCount, slv)) + si.getValue(x, slv));
        List<Integer> targetList = new ArrayList<>();
        List<ForceAtomInfo> faiList = new ArrayList<>();
        for (int i = 0; i < forceAtomCount; i++) {
            int angle = (360 / forceAtomCount) * i;
            Mob mob = Util.getRandomFromCollection(chr.getField().getMobs().stream().filter(m -> !MobConstants.isFriendlyMob(m.getTemplateId())).collect(Collectors.toList()));
            ForceAtomInfo forceAtomInfo = new ForceAtomInfo(chr.getNewForceAtomKey(), fae.getInc(), 30, 4,
                    angle, 0, Util.getCurrentTime(), 1, 0,
                    new Position());
            targetList.add(mob != null ? mob.getObjectId() : 0);
            faiList.add(forceAtomInfo);
        }
        Summon darkOmenSummon = chr.getField().getSummonByChrAndSkillId(chr, DARK_LORDS_OMEN);
        chr.createForceAtom(new ForceAtom(false, darkOmenSummon.getObjectId(), chr.getId(), fae,
                true, targetList, DARK_LORDS_OMEN, faiList, rect, 0, 0,
                position, chr.getBulletIDForAttack(), position, 0));
    }

    private void handleMark(AttackInfo attackInfo) {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        if (getMarkSkill() == null || !tsm.hasStat(NightLordMark)) {
            return;
        }
        Field field = chr.getField();
        Skill skill = getMarkSkill();
        Rect rect = new Rect(-250, -250, 250, 250);
        int starCount = chr.getSkillStatValue(bulletCount, skill.getSkillId());
        int fImpact = 40;

        // [Night Lord] Custom Skill Change
        if (SkillChangeConstants.SHADOW_STARS_CUSTOM_BUFF && tsm.hasAOptByCTSAndSkill(IndiePMdR, SHADOW_STARS)) {
            starCount += SkillChangeConstants.SHADOW_STARS_ADDITIONAL_STARS;
            fImpact = 50;
        }

        ForceAtomEnum fae = ForceAtomEnum.ASSASSIN_MARK;
        int atom = ASSASSIN_MARK_ATOM;
        if (chr.hasSkill(NIGHT_LORD_MARK)) {
            fae = ForceAtomEnum.NIGHTLORD_MARK;
            atom = NIGHTLORD_MARK_ATOM;
        }

        for (MobAttackInfo mai : attackInfo.mobAttackInfo) {
            int randomInt = Util.getRandom((360 / starCount) - 1);
            Mob mob = mai.mob;
            if (mob == null) {
                continue;
            }

            MobTemporaryStat mts = mob.getTemporaryStat();

            if (mts.hasBurnFromSkillAndOwner(skill.getSkillId(), chr.getId())) {
                List<Integer> targetList = new ArrayList<>();
                List<ForceAtomInfo> faiList = new ArrayList<>();
                for (int i = 0; i < starCount; i++) {
                    Mob targetMob;
                    List<Mob> targetBosses = field.getBossMobsInRect(mob.getRectAround(rect)).stream().filter(m -> !MobConstants.isFriendlyMob(m.getTemplateId())).collect(Collectors.toList());
                    List<Mob> targetMobs = field.getMobsInRect(mob.getRectAround(rect)).stream().filter(m -> !MobConstants.isFriendlyMob(m.getTemplateId())).collect(Collectors.toList());
                    if (targetBosses.size() > 0) {
                        targetMob = Util.getRandomFromCollection(targetBosses);
                    } else if (targetMobs.size() > 0) {
                        targetMob = Util.getRandomFromCollection(targetMobs);
                    } else {
                        targetMob = null;
                    }
                    targetList.add(targetMob == null ? 0 : targetMob.getObjectId());

                    int angle = (360 / starCount) * i;
                    ForceAtomInfo fai = new ForceAtomInfo(chr.getNewForceAtomKey(), fae.getInc(), fImpact, 4,
                            randomInt + angle, 170, Util.getCurrentTime(), 0, 0,
                            new Position());
                    faiList.add(fai);
                }
                chr.createForceAtom(new ForceAtom(true, chr.getId(), mob.getObjectId(), fae,
                        true, targetList, atom, faiList, mob.getRectAround(rect), 0, 300,
                        new Position(), chr.getBulletIDForAttack(), new Position(), 0));
            }
        }
    }

    private Skill getMarkSkill() {
        Skill skill = null;
        if (chr.hasSkill(ASSASSINS_MARK)) {
            skill = chr.getSkill(ASSASSINS_MARK);
        }
        if (chr.hasSkill(NIGHT_LORD_MARK)) {
            skill = chr.getSkill(NIGHT_LORD_MARK);
        }
        return skill;
    }

    private void setMarkonMob(AttackInfo attackInfo) {
        Skill skill = getMarkSkill();
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        SkillInfo si = SkillData.getSkillInfoById(skill.getSkillId());
        int slv = skill.getCurrentLevel();
        int markprop = si.getValue(prop, slv);
        if (tsm.hasStat(NightLordMark)) {
            for (MobAttackInfo mai : attackInfo.mobAttackInfo) {
                if (Util.succeedProp(markprop)) {
                    Mob mob = (Mob) chr.getField().getLifeByObjectID(mai.mobId);
                    if (mob == null) {
                        continue;
                    }
                    MobTemporaryStat mts = mob.getTemporaryStat();
                    mts.createAndAddBurnedInfo(chr, skill);
                }
            }
        }
    }

    private void applyBleedDartOnMob(AttackInfo attackInfo) {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        if (tsm.hasStat(BleedingToxin)) {
            Skill skill = chr.getSkill(BLEED_DART);
            for (MobAttackInfo mai : attackInfo.mobAttackInfo) {
                Mob mob = (Mob) chr.getField().getLifeByObjectID(mai.mobId);
                if (mob == null) {
                    continue;
                }
                MobTemporaryStat mts = mob.getTemporaryStat();
                mts.createAndAddBurnedInfo(chr, skill);
            }
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
        Option o1 = new Option();
        Option o2 = new Option();
        Option o3 = new Option();
        switch (skillId) {
            case FRAILTY_CURSE:
                SkillInfo fci = SkillData.getSkillInfoById(skillId);
                AffectedArea aa2 = AffectedArea.getPassiveAA(chr, skillId, slv);
                aa2.setPosition(chr.getPosition());
                aa2.setRect(aa2.getPosition().getRectAround(fci.getFirstRect()));
                aa2.setFlip(!chr.isLeft());
                aa2.setDelay((short) 9);
                chr.getField().spawnAffectedAreaAndRemoveOld(aa2);
                break;

            case ASSASSINS_MARK:
                if (tsm.hasStat(NightLordMark)) {
                    tsm.removeStatsBySkill(skillId);
                    tsm.sendResetStatPacket();
                } else {
                    o1.nOption = 1;
                    o1.rOption = skillId;
                    tsm.putCharacterStatValue(NightLordMark, o1);
                }
                break;
            case SHADOW_STARS:
                if (SkillChangeConstants.SHADOW_STARS_CUSTOM_BUFF) {
                    o1.nOption = SkillChangeConstants.SHADOW_STARS_FINAL_DAMAGE;
                    o1.rOption = skillId;
                    o1.tOption = si.getValue(time, slv);
                    tsm.putCharacterStatValue(IndiePMdR, o1);
                }
                break;
            case BLEED_DART:
                o1.nOption = 1;
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(BleedingToxin, o1);
                o2.rOption = skillId;
                o2.nOption = si.getValue(indiePad, slv);
                o2.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndiePAD, o2);
                break;
            case THROWING_STAR_BARRAGE:
                o1.nOption = 1;
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(SpreadThrow, o1);
                break;
            case DARK_LORDS_OMEN:
                Summon summon = Summon.getSummonBy(chr, skillId, slv);
                summon.setFlyMob(false);
                summon.setAttackActive(true);
                summon.setMoveAbility(MoveAbility.Stop);
                summon.setAssistType(AssistType.CreateForceAtom);
                chr.getField().spawnSummonAndRemoveOld(summon);
                break;
            case THROW_BLASTING_BUFF:
                o1.nOption = si.getValue(x, slv); // count
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                o1.sOption = si.getValue(s, slv); // min blasts
                o1.wOption = si.getValue(w, slv); // max blasts
                tsm.putCharacterStatValue(ThrowBlasting, o1);
                break;
        }
        tsm.sendSetStatPacket();
    }


    // Hit related methods ---------------------------------------------------------------------------------------------


    @Override
    public void stopTimers() {
        sosi = null;
        super.stopTimers();
    }
}
