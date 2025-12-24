package net.swordie.ms.client.jobs.adventurer.magician;

import net.swordie.ms.client.Client;
import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.skills.Option;
import net.swordie.ms.client.character.skills.Skill;
import net.swordie.ms.client.character.skills.atom.forceatom.ForceAtom;
import net.swordie.ms.client.character.skills.info.*;
import net.swordie.ms.client.character.skills.shootobject.ShootObjectSkillInfo;
import net.swordie.ms.client.character.skills.temp.TemporaryStatManager;
import net.swordie.ms.connection.InPacket;
import net.swordie.ms.connection.packet.UserPacket;
import net.swordie.ms.constants.JobConstants;
import net.swordie.ms.constants.SkillChangeConstants;
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
import net.swordie.ms.util.Util;
import net.swordie.ms.world.field.Field;

import java.util.ArrayList;
import java.util.List;

import static net.swordie.ms.client.character.skills.SkillStat.*;
import static net.swordie.ms.client.character.skills.temp.CharacterTemporaryStat.*;

public class FirePoison extends Magician {
    public static final int MP_EATER_FP = 2100000;
    public static final int IGNITE = 2101010;
    public static final int MAGIC_BOOSTER_FP = 2101008;
    public static final int POISON_BREATH = 2101005;
    public static final int MEDITATION_FP = 2101001;
    public static final int IGNITE_AA = 2100010;


    public static final int VIRAL_SLIME = 2111010;
    public static final int ELEMENTAL_ADAPTATION_FP = 2111011;
    public static final int BURNING_MAGIC = 2110000;
    public static final int POISON_MIST = 2111003;
    public static final int TELEPORT_MASTERY_FP = 2111007;
    public static final int ELEMENTAL_DECREASE_FP = 2111008;


    public static final int PARALYZE = 2121006;
    public static final int MIST_ERUPTION = 2121003;
    public static final int FLAME_HAZE = 2121011;
    public static final int INFINITY_FP = 2121004;
    public static final int IFRIT = 2121005;
    public static final int MAPLE_WARRIOR_FP = 2121000;
    public static final int ELEMENTAL_DRAIN = 2100009;
    public static final int FERVENT_DRAIN = 2120014;
    public static final int METEOR_SHOWER = 2121007;
    public static final int METEOR_SHOWER_FA = 2120013;
    public static final int ARCANE_AIM_FP = 2120010;
    public static final int HEROS_WILL_FP = 2121008;
    public static final int POISON_MIST_AFTERMATH = 2120044;
    public static final int POISON_MIST_CRIPPLE = 2120045;
    public static final int PARALYZE_CRIPPLE = 2120047;
    public static final int EPIC_ADVENTURE_FP = 2121053;
    public static final int INFERNO_AURA = 2121054;
    public static final int MEGIDDO_FLAME = 2121052;
    public static final int MEGIDDO_FLAME_ATOM = 2121055;


    // V skills
    public static final int DOT_PUNISHER = 400021001;
    public static final int POISON_NOVA = 400021028;
    public static final int POISON_NOVA_EXPLOSION = 400021029;
    public static final int ELEMENTAL_FURY = 400021066;
    public static final int POISON_CHAIN_1 = 400021101;
    public static final int POISON_CHAIN_2 = 400021102;
    public static final int POISON_CHAIN_3 = 400021103;


    public static final List<Integer> unreliableMemFP = new ArrayList<Integer>() {{
        add(2001008);
        add(2101004);
        add(2101005);
        add(2111002);
        add(2111003);
        add(2111010);
        add(2121006);
        add(2121003);
        add(2121007);
        add(2121011);
        add(2121004);
        add(2121005);
        add(2121052);
        add(2121053);
    }};


    private List<Integer> explodeShootObjList;
    private int ferventDrainStack;

    public FirePoison(Char chr) {
        super(chr);
        if (isHandlerOfJob(chr.getJob())) {

        }
    }

    public List<Integer> getExplodeShootObjList() {
        return explodeShootObjList;
    }

    public void setExplodeShootObjList(List<Integer> explodeShootObjList) {
        this.explodeShootObjList = explodeShootObjList;
    }

    @Override
    public boolean isHandlerOfJob(short id) {
        return JobConstants.isFirePoison(id);
    }

    private void summonViralSlime(Position position) {
        Summon viralSlime = Summon.getSummonByNoCTS(chr, VIRAL_SLIME, (byte) chr.getSkillLevel(VIRAL_SLIME));
        Field field = chr.getField();
        viralSlime.setFlyMob(false);
        viralSlime.setPosition(position);
        viralSlime.setCurFoothold((short) chr.getField().findFootHoldBelow(viralSlime.getPosition()).getId());
        viralSlime.setMoveAbility(MoveAbility.WalkRandom);
        viralSlime.setAssistType(AssistType.Attack);
        field.spawnSummon(viralSlime);
    }

    private int getViralSlimeCount() {
        return (int) chr.getField().getSummons().stream().filter(s -> s.getSkillID() == VIRAL_SLIME && s.getChr() == chr).count();
    }

    @Override
    public void handleMobDeath(AttackInfo attackInfo, Mob mob) {
        MobTemporaryStat mts = mob.getTemporaryStat();
        if (mts.hasBurnFromSkillAndOwner(VIRAL_SLIME, chr.getId()) && getViralSlimeCount() < 10) {
            summonViralSlime(mob.getPosition());
            summonViralSlime(mob.getPosition());
        }
        super.handleMobDeath(attackInfo, mob);
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
        // Ignite
        applyIgniteOnMob(attackInfo, tsm);

        Option o1 = new Option();
        Option o2 = new Option();
        Option o3 = new Option();
        Option o4 = new Option();
        Field field = chr.getField();
        switch (attackInfo.skillId) {
            case POISON_BREATH:
                for (MobAttackInfo mai : attackInfo.mobAttackInfo) {
                    if (Util.succeedProp(si.getValue(prop, slv))) {
                        Mob mob = mai.mob;
                        if (mob == null) {
                            continue;
                        }
                        MobTemporaryStat mts = mob.getTemporaryStat();
                        mts.createAndAddBurnedInfo(chr, skillID, slv);
                    }
                }
                break;
            case POISON_MIST:
                AffectedArea aa = AffectedArea.getAffectedArea(chr, attackInfo);
                aa.setPosition(new Position(attackInfo.forcedXSh, attackInfo.forcedYSh));
                aa.setRect(aa.getPosition().getRectAround(si.getFirstRect()));
                aa.setDelay((short) 9);
                field.spawnAffectedArea(aa);
                break;
            case TELEPORT_MASTERY_FP:
                for (MobAttackInfo mai : attackInfo.mobAttackInfo) {
                    if (Util.succeedProp(si.getValue(prop, slv))) {
                        Mob mob = mai.mob;
                        if (mob == null) {
                            continue;
                        }
                        MobTemporaryStat mts = mob.getTemporaryStat();
                        if (!mob.isBoss()) {
                            o1.nOption = 1;
                            o1.rOption = skill.getSkillId();
                            o1.tOption = si.getValue(time, slv);
                            mts.addStatOptions(MobStat.Stun, o1);
                        }
                        mts.createAndAddBurnedInfo(chr, skillID, slv);
                    }
                }
                break;
            case FLAME_HAZE:
                o1.nOption = 1;
                o1.rOption = skill.getSkillId();
                o1.tOption = si.getValue(time, slv);

                o2.nOption = si.getValue(x, slv); // already negative in si
                o2.rOption = skill.getSkillId();
                o2.tOption = si.getValue(time, slv);
                for (MobAttackInfo mai : attackInfo.mobAttackInfo) {
                    Mob mob = mai.mob;
                    if (mob == null) {
                        continue;
                    }
                    if (Util.succeedProp(si.getValue(prop, slv))) {
                        MobTemporaryStat mts = mob.getTemporaryStat();
                        if (!mob.isBoss()) {
                            mts.addStatOptionsAndBroadcast(chr, MobStat.DodgeBodyAttack, o1); //Untouchable (physical dmg) Mob Stat
                        }
                        mts.addStatOptionsAndBroadcast(chr, MobStat.Speed, o2);
                        mts.createAndAddBurnedInfo(chr, skillID, slv);
                    }
                }
                break;
            case PARALYZE:
                o1.nOption = 1;
                o1.rOption = skillID;
                o1.tOption = si.getValue(time, slv);
                for (MobAttackInfo mai : attackInfo.mobAttackInfo) {
                    Mob mob = mai.mob;
                    if (mob == null) {
                        continue;
                    }
                    MobTemporaryStat mts = mob.getTemporaryStat();
                    if (!mob.isBoss()) {
                        mts.addStatOptionsAndBroadcast(chr, MobStat.Stun, o1);
                    }
                    int dotDmg = si.getValue(dot, slv);
                    if (chr.hasSkill(PARALYZE_CRIPPLE)) {
                        dotDmg += chr.getSkillStatValue(dot, PARALYZE_CRIPPLE);
                    }
                    mts.createAndAddBurnedInfo(chr, skillID, slv, 1, dotDmg);
                }
                break;
            case MIST_ERUPTION:
                if (getExplodeShootObjList() != null && getExplodeShootObjList().size() > 0) {
                    chr.write(UserPacket.shootObjectExplodeResult(chr.getId(), getExplodeShootObjList()));
                    getExplodeShootObjList().clear();
                }
                var hasHitMobWith5DotCount = false;
                for (MobAttackInfo mai : attackInfo.mobAttackInfo) {
                    Mob mob = mai.mob;
                    if (mob == null) {
                        continue;
                    }
                    var dotCount = mob.getTemporaryStat().getBurnsFromOwner(chr.getId()).size();
                    if (dotCount > 5) {
                        hasHitMobWith5DotCount = true;
                        break;
                    }
                }
                if (hasHitMobWith5DotCount) {
                    chr.reduceSkillCoolTime(skillID, 2000);
                }
                for (int id : attackInfo.mists) {
                    field.removeAffectedAreaByMistEruption(id, false);
                }
                if (attackInfo.mists.length > 0) {
                    chr.resetSkillCoolTime(FLAME_HAZE);
                }
                break;
            case MEGIDDO_FLAME_ATOM:
                skillID = MEGIDDO_FLAME;
                slv = chr.getSkillLevel(MEGIDDO_FLAME);
                for (MobAttackInfo mai : attackInfo.mobAttackInfo) {
                    Mob mob = mai.mob;
                    if (mob == null) {
                        continue;
                    }
                    MobTemporaryStat mts = mob.getTemporaryStat();
                    mts.createAndAddBurnedInfo(chr, skillID, slv, SkillChangeConstants.MEGIDDO_FLAME_DOT_STACK); // [Fire Poison] Custom Skill Change
                }
                break;
            case VIRAL_SLIME:
            case IFRIT:
                if (attackInfo.skillId == MEGIDDO_FLAME_ATOM) {
                    skillID = MEGIDDO_FLAME;
                    slv = chr.getSkillLevel(MEGIDDO_FLAME);
                }
                for (MobAttackInfo mai : attackInfo.mobAttackInfo) {
                    Mob mob = mai.mob;
                    if (mob == null) {
                        continue;
                    }
                    MobTemporaryStat mts = mob.getTemporaryStat();
                    mts.createAndAddBurnedInfo(chr, skillID, slv);
                }
                if (attackInfo.skillId == VIRAL_SLIME) {
                    Summon viralSlime = attackInfo.summon;
                    field.removeLife(viralSlime.getObjectId(), true);
                }
                break;
            case DOT_PUNISHER:
                for (MobAttackInfo mai : attackInfo.mobAttackInfo) {
                    Mob mob = mai.mob;
                    if (mob == null) {
                        continue;
                    }
                    MobTemporaryStat mts = mob.getTemporaryStat();
                    mts.createAndAddBurnedInfo(chr, skillID, slv);
                }
                break;
            case POISON_NOVA:
            case POISON_NOVA_EXPLOSION:
                skillID = POISON_NOVA;
                slv = chr.getSkillLevel(POISON_NOVA);
                for (MobAttackInfo mai : attackInfo.mobAttackInfo) {
                    Mob mob = mai.mob;
                    if (mob == null) {
                        continue;
                    }
                    MobTemporaryStat mts = mob.getTemporaryStat();
                    mts.createAndAddBurnedInfo(chr, skillID, slv);
                }
                break;
            case POISON_CHAIN_1:
                for (MobAttackInfo mai : attackInfo.mobAttackInfo) {
                    Mob mob = mai.mob;
                    if (mob == null) {
                        continue;
                    }
                    MobTemporaryStat mts = mob.getTemporaryStat();
                    mts.createAndAddBurnedInfo(chr, POISON_CHAIN_2, slv);
                }
                break;
        }
        super.handleAttack(c, attackInfo);
        giveFerventDrain();
    }

    private void createMegiddoFlameForceAtom(List<Mob> mobs) {
        if (mobs.size() == 0) {
            return;
        }

        for (Mob mob : mobs) {
            ForceAtomEnum fae = ForceAtomEnum.MEGIDDO_FLAME;
            ForceAtomInfo forceAtomInfo = new ForceAtomInfo(chr.getNewForceAtomKey(), fae.getInc(), 20, 40,
                    0, 500, Util.getCurrentTime(), 1, 0,
                    new Position(0, -100));
            ForceAtom fa = new ForceAtom(chr.getId(), fae, mob.getObjectId(), MEGIDDO_FLAME_ATOM, forceAtomInfo);
            fa.setMaxRecreationCount(5);
            fa.setRecreationChance(80);
            chr.createForceAtom(fa);
        }
    }

    private void createDoTPunisherForceAtom() {
        Field field = chr.getField();
        if (!chr.hasSkill(DOT_PUNISHER)) {
            return;
        }
        Skill skill = chr.getSkill(DOT_PUNISHER);
        SkillInfo si = SkillData.getSkillInfoById(DOT_PUNISHER);
        int slv = skill.getCurrentLevel();
        int forceAtomCount = si.getValue(x, slv);
        ForceAtomEnum fae = ForceAtomEnum.DOT_PUNISHER;
        List<Integer> targetList = new ArrayList<>();
        List<ForceAtomInfo> faiList = new ArrayList<>();
        int doTMobs = field.getMobs().stream().mapToInt(m -> m.getTemporaryStat().getBurnsFromOwner(chr.getId()).size()).sum();
        var c = forceAtomCount + doTMobs;
        int circleRadii = c < 25 ? 150 : c < 40 ? 200 : c < 70 ? 260 : 390;
        int height = c < 25 ? 250 : c < 40 ? 300 : c < 70 ? 340 : 400;
        int circleRadiiDecPer = circleRadii / c;
        for (int i = 0; i < c; i++) {
            int angle = (360 / c) * i;
            int hTranslation = (int) (Math.sin(angle) * circleRadii);
            int vTranslation = (int) (Math.cos(angle) * circleRadii);
            circleRadii -= circleRadiiDecPer;

            Mob mob = Util.getRandomFromCollection(field.getMobs());
            ForceAtomInfo forceAtomInfo = new ForceAtomInfo(chr.getNewForceAtomKey(), fae.getInc(), 43, 6,
                    angle, 2000 + (i * 20), Util.getCurrentTime(), 1, 0,
                    new Position(chr.getPosition().getX() + hTranslation, chr.getPosition().getY() + vTranslation - height));
            targetList.add(mob != null ? mob.getObjectId() : 0);
            faiList.add(forceAtomInfo);
        }
        ForceAtom fa = new ForceAtom(chr.getId(), fae, targetList, DOT_PUNISHER, faiList);
        fa.setRect(chr.getPosition().getRectAround(si.getFirstRect()));
        chr.createForceAtom(fa);
    }

    private void applyIgniteOnMob(AttackInfo attackInfo, TemporaryStatManager tsm) {
        SkillInfo si = SkillData.getSkillInfoById(attackInfo.skillId);
        if (si == null || !si.getElemAttr().contains("f") || attackInfo.skillId == IGNITE || attackInfo.skillId == IGNITE_AA || attackInfo.skillId == INFERNO_AURA) {
            return;
        }
        if (tsm.hasStat(WizardIgnite)) {
            SkillInfo igniteInfo = SkillData.getSkillInfoById(IGNITE);
            Skill skill = chr.getSkill(IGNITE);
            int slv = skill.getCurrentLevel();
            for (MobAttackInfo mai : attackInfo.mobAttackInfo) {
                Mob mob = (Mob) chr.getField().getLifeByObjectID(mai.mobId);
                if (mob == null) {
                    continue;
                }
                if (Util.succeedProp(igniteInfo.getValue(prop, slv))) {
                    AffectedArea aa = AffectedArea.getPassiveAA(chr, IGNITE_AA, slv);
                    aa.setPosition(mob.getPosition());
                    aa.setRect(aa.getRectAround(igniteInfo.getFirstRect()));
                    aa.setDelay((short) 3);
                    chr.getField().spawnAffectedArea(aa);
                }
            }
        }
    }//Elemental/Fervent Drain - FP

    private int getFerventDrainStack() {
        return ferventDrainStack;
    }

    private void setFerventDrainStack(int ferventDrainStack) {
        this.ferventDrainStack = ferventDrainStack;
    }


    private void updateElementDrain() {
        if (!chr.hasSkill(ELEMENTAL_DRAIN) || chr.hasSkillOnCooldown(ELEMENTAL_DRAIN)) {
            return;
        }
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        Option o = new Option();
        o.nOption = Math.min(getFerventDrainStack(), 5);
        o.rOption = ELEMENTAL_DRAIN;
        tsm.putCharacterStatValue(DotBasedBuff, o);

        if (getFerventDrainStack() <= 0 && tsm.hasStatBySkillId(ELEMENTAL_DRAIN)) {
            tsm.removeStatsBySkill(ELEMENTAL_DRAIN);
        } else {
            tsm.sendSetStatPacket();
        }
        chr.addSkillCoolTime(ELEMENTAL_DRAIN, 250);
    }

    private void giveFerventDrain() {
        Field field = chr.getField();
        if (field != null) {
            setFerventDrainStack(field.getMobs().stream().mapToInt(m -> m.getTemporaryStat().getBurnsFromOwner(chr.getId()).size()).sum());
            updateElementDrain();
        }
    }

    @Override
    public int getFinalAttackSkill() {
        SkillInfo si = SkillData.getSkillInfoById(METEOR_SHOWER_FA);
        if (chr.getSkill(METEOR_SHOWER) != null && chr.hasSkillOnCooldown(METEOR_SHOWER)) {
            int slv = chr.getSkill(METEOR_SHOWER).getCurrentLevel();
            if (Util.succeedProp(si.getValue(prop, slv))) {
                return METEOR_SHOWER_FA;
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
        Field field = chr.getField();
        switch (skillId) {
            case MEGIDDO_FLAME:
                byte mobCount = inPacket.decodeByte();
                List<Mob> mobs = new ArrayList<>();
                for (int i = 0; i < mobCount; i++) {
                    int mobId = inPacket.decodeInt();
                    Mob mob = (Mob) field.getLifeByObjectID(mobId);
                    if (mob != null) {
                        mobs.add(mob);
                    }
                }
                createMegiddoFlameForceAtom(mobs);
                break;
            case DOT_PUNISHER:
                createDoTPunisherForceAtom();
                break;
            case IGNITE:
                if (tsm.hasStat(WizardIgnite)) {
                    tsm.removeStatsBySkill(skillId);
                    tsm.sendResetStatPacket();
                } else {
                    o1.nOption = 1;
                    o1.rOption = skillId;
                    tsm.putCharacterStatValue(WizardIgnite, o1);
                }
                break;
            case ELEMENTAL_ADAPTATION_FP:
                o1.nOption = 6;
                o1.rOption = skillId;
                // no bOption for FP's AntiMagicShell
                tsm.putCharacterStatValue(AntiMagicShell, o1);
                break;
            case VIRAL_SLIME:
                summonViralSlime(chr.getPosition());
                break;
            case INFERNO_AURA:
                if (tsm.hasStat(FireAura)) {
                    tsm.removeStatsBySkill(skillId);
                } else {
                    o1.nOption = 1;
                    o1.rOption = skillId;
                    tsm.putCharacterStatValue(FireAura, o1);
                }
                break;
        }
        tsm.sendSetStatPacket();
        giveFerventDrain();
    }

    @Override
    public void handleRemoveMobStat(MobStat mobStat, Mob mob, Option o) {
        if (mobStat.equals(MobStat.BurnedInfo)) {
            giveFerventDrain();
        }

        super.handleRemoveMobStat(mobStat, mob, o);
    }


    public void handleShootObj(Char chr, ShootObjectSkillInfo sosi) {
        var skillId = sosi.getSkillId();
        var slv = sosi.getSlv();
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        SkillInfo si = SkillData.getSkillInfoById(skillId);
        switch (skillId) {
            case FirePoison.POISON_NOVA:
                chr.addSkillCoolTime(skillId, si.getValue(cooltime, slv) * 1000);
                break;

        }
        super.handleShootObj(chr, sosi);
    }


    // Hit related methods ---------------------------------------------------------------------------------------------

}
