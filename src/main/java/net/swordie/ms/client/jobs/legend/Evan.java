package net.swordie.ms.client.jobs.legend;

import net.swordie.ms.client.Client;
import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.CharacterStat;
import net.swordie.ms.client.character.skills.BypassCooldownCheckType;
import net.swordie.ms.client.character.skills.Option;
import net.swordie.ms.client.character.skills.Skill;
import net.swordie.ms.client.character.skills.SkillUseSource;
import net.swordie.ms.client.character.skills.atom.forceatom.ForceAtom;
import net.swordie.ms.client.character.skills.info.*;
import net.swordie.ms.client.character.skills.temp.CharacterTemporaryStat;
import net.swordie.ms.client.character.skills.temp.TemporaryStatBase;
import net.swordie.ms.client.character.skills.temp.TemporaryStatManager;
import net.swordie.ms.client.jobs.Job;
import net.swordie.ms.connection.InPacket;
import net.swordie.ms.connection.packet.Effect;
import net.swordie.ms.connection.packet.Summoned;
import net.swordie.ms.connection.packet.UserPacket;
import net.swordie.ms.connection.packet.UserRemote;
import net.swordie.ms.connection.packet.field.FieldPacket;
import net.swordie.ms.constants.JobConstants;
import net.swordie.ms.constants.SkillConstants;
import net.swordie.ms.enums.*;
import net.swordie.ms.life.*;
import net.swordie.ms.life.mob.Mob;
import net.swordie.ms.life.mob.MobStat;
import net.swordie.ms.life.mob.MobTemporaryStat;
import net.swordie.ms.loaders.SkillData;
import net.swordie.ms.util.Position;
import net.swordie.ms.util.Rect;
import net.swordie.ms.util.Util;
import net.swordie.ms.world.field.Field;

import java.util.ArrayList;
import java.util.List;

import static net.swordie.ms.client.character.skills.BypassCooldownCheckType.BypassCheckAndCooldown;
import static net.swordie.ms.client.character.skills.SkillStat.*;
import static net.swordie.ms.client.character.skills.temp.CharacterTemporaryStat.*;

/**
 * Created on 12/14/2017.
 */
public class Evan extends Job {

    public static final int INHERITED_WILL = 20010194;
    public static final int BACK_TO_NATURE = 20011293;

    public static final int MAGIC_GUARD = 22001012; // Buff

    public static final int MAGIC_BOOSTER = 22111020; // Buff
    public static final int ELEMENTAL_DECREASE = 22141016; // Buff
    public static final int PARTNERS = 22110016;
    public static final int DRAGON_FLASH = 22111012;
    public static final int DRAGON_FLASH_2 = 22110022;
    public static final int DRAGON_FLASH_3 = 22110023;
    public static final int WIND_FLASH = 22110014;
    public static final int WIND_FLASH_2 = 22110024;
    public static final int WIND_FLASH_3 = 22110025;

    public static final int DRAGON_DIVE = 22141012;
    public static final int DRAGON_DIVE_2 = 22140022;
    public static final int THUNDER_DIVE = 22140015;
    public static final int THUNDER_DIVE_2 = 22140024;
    public static final int THUNDER_FLASH = 22140014;
    public static final int THUNDER_FLASH_2 = 22140023;

    public static final int BLESSING_OF_THE_ONYX = 22171073; // Buff
    public static final int MAPLE_WARRIOR_EVAN = 22171068; // Buff
    public static final int MAGIC_DEBRIS = 22141017;

    public static final int DRAGON_MASTER = 22171080; // Mount
    public static final int DRAGON_MASTER_2 = 22171083; // Add-on
    public static final int SUMMON_ONYX_DRAGON = 22171081; // Summon
    public static final int HEROIC_MEMORIES_EVAN = 22171082;
    public static final int ENHANCED_MAGIC_DEBRIS = 22170070;
    public static final int HEROS_WILL_EVAN = 22171004;
    public static final int DRAGON_FURY = 22170074;
    public static final int EARTH_BREATH = 22170094;
    public static final int DRAGON_BREATH = 22171063;
    public static final int WIND_BREATH = 22170066;
    public static final int EARTH_DIVE = 22170067;


    //Returns
    public static final int RETURN_FLASH = 22110013; // Return after Wind Skills (Mob Debuff)
    public static final int RETURN_DIVE = 22140013; // Return Dive (Buff)
    public static final int RETURN_FLAME = 22170064; // Return Flame (Flame  AoE)
    public static final int RETURN_FLAME_TILE = 22170093; // Return Flames Tile


    //Evan Attacks
    public static final int MANA_BURST_I = 22001010;
    public static final int MANA_BURST_II = 22110010;
    public static final int MANA_BURST_III = 22140010;
    public static final int MANA_BURST_IV_1 = 22170060;
    public static final int MANA_BURST_IV_2 = 22170061;
    public static final int WIND_CIRCLE = 22111011;
    public static final int THUNDER_CIRCLE = 22141011;
    public static final int EARTH_CIRCLE = 22171062;
    public static final int DARK_FOG = 22171095;

    //Final Attack
    public static final int DRAGON_SPARK = 22000015;
    public static final int ADV_DRAGON_SPARK = 22110021;

    public static final int SPEEDY_DRAGON_FLASH = 22170084;
    public static final int SPEEDY_DRAGON_DIVE = 22170087;
    public static final int SPEEDY_DRAGON_BREATH = 22170090;

    // V skills
    public static final int ELEMENTAL_BARRAGE = 400021012;
    public static final int DRAGON_SLAM = 400021046;
    public static final int WYRMKINGS_BREATH = 400020046;
    public static final int LUDICROUS_SPEED = 400020051;
    public static final int ELEMENTAL_RADIANCE = 400021073;
    public static final int SPIRAL_OF_MANA = 400021095;

    private int prevSkill = 0;
    private Dragon dragon;

    private static final int[] addedSkills = new int[]{
            INHERITED_WILL,
            BACK_TO_NATURE,
    };

    private static final int[] cooltimeRHypers = new int[]{
            SPEEDY_DRAGON_FLASH,
            SPEEDY_DRAGON_DIVE,
            SPEEDY_DRAGON_BREATH
    };


    public Evan(Char chr) {
        super(chr);
        if (isHandlerOfJob(chr.getJob())) {
            for (int id : addedSkills) {
                if (!chr.hasSkill(id)) {
                    Skill skill = SkillData.getSkillDeepCopyById(id);
                    skill.setCurrentLevel(skill.getMasterLevel());
                    chr.addSkill(skill);
                }
            }
        }
    }

    public void spawnMir() {
        Dragon dragon = getDragon();
        dragon.resetToPlayer();
        chr.getField().spawnLife(dragon, null);
    }

    public int getEvanSkill(int skillID) {
        switch (skillID) {
            case MANA_BURST_I:
            case MANA_BURST_II:
            case MANA_BURST_III:
            case MANA_BURST_IV_1:
            case MANA_BURST_IV_2:
            case WIND_CIRCLE:
            case THUNDER_CIRCLE:
            case EARTH_CIRCLE:
            case DARK_FOG:
                return 1;
        }
        return skillID;
    }


    @Override
    public boolean isHandlerOfJob(short id) {
        return JobConstants.isEvan(id);
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
            // Partners
            if (getEvanSkill(skillID) != 1) {
                givePartnersBuff(skillID);
            }
            if (chr.hasSkill(MAGIC_DEBRIS)) {
                createWreckage(attackInfo);
            }
            if (chr.hasSkill(ELEMENTAL_RADIANCE) && hasElementalRadianceInField() && attackInfo.skillId != ELEMENTAL_RADIANCE) {
                createElementalRadianceForceAtom(attackInfo);
            }
        }
        Option o1 = new Option();
        Option o2 = new Option();
        Option o3 = new Option();
        switch (attackInfo.skillId) {

        }

        super.handleAttack(c, attackInfo);
    }

    @Override
    public BypassCooldownCheckType canBypassCooldownCheck(int skillId, AttackInfo attackInfo, SkillUseInfo sui, SkillUseSource source) {
        switch (skillId) {
            case Evan.DRAGON_FLASH_3:
            case Evan.DRAGON_DIVE_2:
            case Evan.DRAGON_BREATH:
            case Evan.DRAGON_SLAM:
                // Unconventionally applying the cooldown here. As Skills are being used that the user does not technically have.
                if (attackInfo.dragonAttackStart == 1) {
                    var slv = attackInfo.slv;
                    if (slv == 0) {
                        slv = sui.slv;
                    }
                    chr.setSkillCooldown(skillId, slv, attackInfo, sui, source);
                }
                return BypassCheckAndCooldown;
        }

        return super.canBypassCooldownCheck(skillId, attackInfo, sui, source);
    }

    public void givePartnersBuff(int skillID) {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        SkillInfo si = SkillData.getSkillInfoById(PARTNERS);
        Option o = new Option();
        Option o1 = new Option();
        if (tsm.getOptByCTSAndSkill(Stance, PARTNERS) == null) {
            prevSkill = skillID;
            o.rOption = PARTNERS;
            o.nOption = si.getValue(indieDamR, 1);
            o.tOption = 3;
            tsm.putCharacterStatValue(IndieDamR, o);
            o1.nOption = si.getValue(stanceProp, 1);
            o1.rOption = PARTNERS;
            o1.tOption = 3;
            tsm.putCharacterStatValue(Stance, o1);
            tsm.sendSetStatPacket();
        }
    }

    private boolean hasElementalRadianceInField() {
        return getElementalRadiance() != null;
    }

    private Summon getElementalRadiance() {
        return chr.getField().getSummonByChrAndSkillId(chr, ELEMENTAL_RADIANCE);
    }

    private void createElementalRadianceForceAtom(AttackInfo attackInfo) {
        ForceAtomEnum fae = ForceAtomEnum.ELEMENTAL_RADIANCE;
        Rect rect = new Rect(-250, -250, 250, 250);
        Summon eleRadiance = getElementalRadiance();
        Position elePos = eleRadiance.getPosition();
        var max = chr.getSkillStatValue(x, ELEMENTAL_RADIANCE);
        if (eleRadiance.getCount() < max) {
            for (MobAttackInfo mai : attackInfo.mobAttackInfo) {
                if (eleRadiance.getCount() < max) {
                    Mob mob = mai.mob;
                    if (mob == null) {
                        continue;
                    }
                    ForceAtomInfo fai = new ForceAtomInfo(chr.getNewForceAtomKey(), 1, 45, 6,
                            0, 0, Util.getCurrentTime(), 0, 4,
                            new Position());
                    ForceAtom fa = new ForceAtom(true, chr.getId(), mob.getObjectId(), fae,
                            false, mob.getObjectId(), ELEMENTAL_RADIANCE, fai, mob.getPosition().getRectAround(rect), 0, 0,
                            elePos, 0, elePos, 0);
                    chr.createForceAtom(fa, false);

                    incElementalRadianceCount(eleRadiance, 1);
                }
            }
        }
    }

    private void incElementalRadianceCount(Summon eleRadiance, int add) {
        var max = chr.getSkillStatValue(x, ELEMENTAL_RADIANCE);
        if (eleRadiance.getCount() >= max) {
            return;
        }
        eleRadiance.incCount(add);
        Field field = chr.getField();

        field.broadcastPacket(Summoned.summonUpgradeStage(eleRadiance, 2, 0, 0));
        field.broadcastPacket(Summoned.effect(eleRadiance, 2, 0));

        if (eleRadiance.getCount() >= chr.getSkillStatValue(x, ELEMENTAL_RADIANCE)) {
            field.broadcastPacket(Summoned.assistSpecialAttackRequest(eleRadiance, 10));
        }
    }

    private void createWreckageForceAtom() {
        Field field = chr.getField();
        SkillInfo si = SkillData.getSkillInfoById(getDebrisSkill());
        Rect rect = chr.getPosition().getRectAround(si.getFirstRect());
        if (!chr.isLeft()) {
            rect = rect.horizontalFlipAround(chr.getPosition().getX());
        }
        List<Mob> lifes = field.getMobsInRect(rect);
        if (lifes.size() <= 0) {
            return;
        }
        for (Wreckage wreckage : field.getWreckageByChrId(chr.getId())) {
            if (wreckage.getField() != chr.getField()) {
                continue;
            }
            Life life = Util.getRandomFromCollection(lifes);
            int mobID = (life).getObjectId();
            ForceAtomEnum fae = ForceAtomEnum.WRECKAGE;
            if (chr.hasSkill(ENHANCED_MAGIC_DEBRIS)) {
                fae = ForceAtomEnum.ADV_WRECKAGE;
            }
            ForceAtomInfo forceAtomInfo = new ForceAtomInfo(chr.getNewForceAtomKey(), fae.getInc(), 15, 10,
                    0, 200, Util.getCurrentTime(), 1, 0,
                    wreckage.getPosition());
            chr.createForceAtom(new ForceAtom(false, 0, chr.getId(), fae,
                    true, mobID, getDebrisSkill(), forceAtomInfo, new Rect(), 0, 300,
                    life.getPosition(), getDebrisSkill(), life.getPosition(), 0));
        }
        chr.getField().broadcastPacket(FieldPacket.delWreckage(chr, field.getWreckageByChrId(chr.getId())));
    }

    private void createWreckage(AttackInfo attackInfo) {
        if (SkillConstants.isEvanFusionSkill(attackInfo.skillId) && (attackInfo.skillId != MAGIC_DEBRIS && attackInfo.skillId != ENHANCED_MAGIC_DEBRIS)) {
            Field field = chr.getField();
            for (MobAttackInfo mai : attackInfo.mobAttackInfo) {
                Mob mob = (Mob) chr.getField().getLifeByObjectID(mai.mobId);
                if (mob == null) {
                    continue;
                }
                if (field.getWreckages().size() < getMaxDebris()) {
                    Wreckage wreckage = Wreckage.getWreckageBy(chr, getDebrisSkill(), mob.getPosition(), 30000, 1);
                    field.spawnWreckage(chr, wreckage);
                }
            }
        }
    }

    private int getMaxDebris() {
        Skill skill = null;
        if (chr.hasSkill(MAGIC_DEBRIS)) {
            skill = chr.getSkill(MAGIC_DEBRIS);
        }
        if (chr.hasSkill(ENHANCED_MAGIC_DEBRIS)) {
            skill = chr.getSkill(ENHANCED_MAGIC_DEBRIS);
        }
        if (skill == null) {
            return 0;
        }
        SkillInfo si = SkillData.getSkillInfoById(skill.getSkillId());
        int slv = skill.getCurrentLevel();
        return si.getValue(x, slv);
    }

    private int getDebrisSkill() {
        int skill = 0;
        if (chr.hasSkill(MAGIC_DEBRIS)) {
            skill = MAGIC_DEBRIS;
        }
        if (chr.hasSkill(ENHANCED_MAGIC_DEBRIS)) {
            skill = ENHANCED_MAGIC_DEBRIS;
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

    private Skill getFinalAtkSkill() {
        Skill skill = null;
        if (chr.hasSkill(DRAGON_SPARK)) {
            skill = chr.getSkill(DRAGON_SPARK);
        }
        if (chr.hasSkill(ADV_DRAGON_SPARK)) {
            skill = chr.getSkill(ADV_DRAGON_SPARK);
        }
        return skill;
    }

    public Dragon getDragon() {
        if (dragon == null && chr.getJob() != JobConstants.JobEnum.EVAN_NOOB.getJobId()) {
            dragon = new Dragon(0);
            dragon.setOwner(chr);
        }
        return dragon;
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
            case RETURN_FLAME:
                SkillInfo rft = SkillData.getSkillInfoById(RETURN_FLAME_TILE);
                AffectedArea aa = AffectedArea.getPassiveAA(chr, RETURN_FLAME_TILE, slv);
                aa.setPosition(chr.getPosition());
                aa.setRect(aa.getPosition().getRectAround(rft.getRects().get(0)));
                chr.getField().spawnAffectedArea(aa);
                break;
            case RETURN_FLASH:
                SkillInfo rflash = SkillData.getSkillInfoById(RETURN_FLASH);
                Rect rect = new Rect(       //Skill itself doesn't give a Rect
                        new Position(
                                chr.getPosition().deepCopy().getX() - 300,
                                chr.getPosition().deepCopy().getY() - 300),
                        new Position(
                                chr.getPosition().deepCopy().getX() + 300,
                                chr.getPosition().deepCopy().getY() + 300)
                );
                o1.nOption = rflash.getValue(x, slv);
                o1.rOption = skillId;
                o1.tOption = rflash.getValue(time, slv);
                for (Life life : chr.getField().getLifesInRect(rect)) {
                    if (life instanceof Mob && ((Mob) life).getHp() > 0) {
                        Mob mob = (Mob) life;
                        MobTemporaryStat mts = mob.getTemporaryStat();
                        mts.addStatOptionsAndBroadcast(chr, MobStat.AddDamParty, o1);

                    }
                }
                break;
            case MAGIC_DEBRIS:
            case ENHANCED_MAGIC_DEBRIS:
                createWreckageForceAtom();
                break;
            case MAGIC_GUARD:
                o1.nOption = si.getValue(x, slv);
                o1.rOption = skillId;
                tsm.putCharacterStatValue(MagicGuard, o1);
                o2.nOption = si.getValue(y, slv);
                o2.rOption = skillId;
                tsm.putCharacterStatValue(DamageReduce, o2);
                break;
            case MAGIC_BOOSTER:
                o1.nOption = si.getValue(x, slv);
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieBooster, o1);
                break;
            case RETURN_DIVE:
                List<Char> chrList = new ArrayList<>() {{add(chr);}};
                if (chr.getParty() != null) {
                    chrList = chr.getParty().getPartyMembersInField(chr);
                }
                o1.nOption = si.getValue(indieBooster, slv);
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                Effect effect = Effect.skillAffected(skillId, slv, 0);
                for (Char pChr : chrList) {
                    if (!chr.getRectAround(si.getFirstRect()).hasPositionInside(pChr.getPosition())) {
                        continue;
                    }
                    TemporaryStatManager pTSM = pChr.getTemporaryStatManager();
                    pTSM.putCharacterStatValue(IndieBooster, o1);
                    pTSM.sendSetStatPacket();
                    pChr.write(UserPacket.effect(effect));
                    field.broadcastPacket(UserRemote.effect(pChr.getId(), effect), pChr);
                }
                break;
            case ELEMENTAL_DECREASE:
                o1.nOption = si.getValue(x, slv);
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(ElementalReset, o1);
                break;
            case BLESSING_OF_THE_ONYX:
                o1.nOption = si.getValue(emad, slv);
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(EMAD, o1);
                o3.nOption = si.getValue(epdd, slv);
                o3.rOption = skillId;
                o3.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(EPDD, o3);
                break;
            case HEROIC_MEMORIES_EVAN:
                o1.rOption = skillId;
                o1.nOption = si.getValue(indieDamR, slv);
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieDamR, o1);
                break;
            case SUMMON_ONYX_DRAGON:
                summon = Summon.getSummonBy(chr, skillId, slv);
                summon.setFlyMob(true);
                summon.setMoveAbility(MoveAbility.SmartFollow);
                field.spawnSummonAndRemoveOld(summon);
                break;
            case DRAGON_MASTER:
                TemporaryStatBase tsb = tsm.getTSBByTSIndex(TSIndex.RideVehicleExpire);
                var tOption = si.getValue(time, slv);

                o1.nOption = 1;
                o1.rOption = skillId;
                o1.tOption = tOption;
                tsm.putCharacterStatValue(IndieNotDamaged, o1, true);

                o2.nOption = 1;
                o2.rOption = skillId;
                o2.tOption = tOption;
                tsm.putCharacterStatValue(NewFlying, o2);

                tsb.setNOption(1939007);
                tsb.setROption(skillId);
                tsb.setDynamicTermSet(false);
                tsb.setExpireTerm(tOption);
                tsm.putCharacterStatValue(RideVehicleExpire, tsb.getOption());
                // DragonMaster_2 => KeyDownMoving
                break;
            case ELEMENTAL_RADIANCE:
                summon = Summon.getSummonBy(chr, skillId, slv);
                summon.setMoveAbility(MoveAbility.Stop); // MoveAbility 0
                summon.setAssistType(AssistType.AttackJaguar); // AssistType 11
                summon.setFlip(!chr.isLeft());
                field.spawnSummonAndRemoveOld(summon);
                break;
            case LUDICROUS_SPEED:
                si = SkillData.getSkillInfoById(skillId);
                Position position = inPacket.decodePosition();
                aa = AffectedArea.getPassiveAA(chr, skillId, chr.getSkillLevel(DRAGON_SLAM));
                aa.setPosition(position);
                aa.setRect(aa.getPosition().getRectAround(si.getFirstRect()));
                field.spawnAffectedArea(aa);
                break;
            case SPIRAL_OF_MANA:
                var pos = inPacket.decodePosition();
                var isLeft = inPacket.decodeByte() != 0;

                summon = Summon.getSummonBy(chr, skillId, slv);
                summon.setMoveAbility(MoveAbility.Stop);
                summon.setPosition(pos);
                summon.setFlip(!isLeft);

                field.spawnSummonAndRemoveOld(summon);
                break;
        }
        tsm.sendSetStatPacket();
    }

    @Override
    public void handleRemoveCTS(CharacterTemporaryStat cts, Option option) {
        if (cts.equals(NewFlying) && option.rOption == DRAGON_MASTER) {
            TemporaryStatManager tsm = chr.getTemporaryStatManager();
            tsm.removeStat(IndieNotDamaged);
            tsm.removeStat(RideVehicleExpire);
        }
        super.handleRemoveCTS(cts, option);
    }

    @Override
    public void handleCancelKeyDownSkill(Char chr, int skillID) {
        if (skillID == DRAGON_MASTER_2) {
            TemporaryStatManager tsm = chr.getTemporaryStatManager();
            tsm.removeStatsBySkill(skillID);

        } else {
            super.handleCancelKeyDownSkill(chr, skillID);
        }
    }

    // Hit related methods ---------------------------------------------------------------------------------------------

    @Override
    public void setCharCreationStats(Char chr) {
        super.setCharCreationStats(chr);
        CharacterStat cs = chr.getAvatarData().getCharacterStat();
        cs.setPosMap(900010000);
    }

    @Override
    public void handleLevelUp() {
        super.handleLevelUp();
        int job = -1;
        switch (chr.getLevel()) {
            case 10:
                job = JobConstants.JobEnum.EVAN_1.getJobId();
                break;
            case 30:
                job = JobConstants.JobEnum.EVAN_2.getJobId();
                break;
            case 60:
                job = JobConstants.JobEnum.EVAN_3.getJobId();
                break;
            case 100:
                job = JobConstants.JobEnum.EVAN_4.getJobId();
                break;

        }
        if (job != -1) {
            chr.setJob(job);
            chr.setStatAndSendPacket(Stat.job, job);
            chr.addSpToJobByCurrentJob(5);
            spawnMir();
        }
    }

    @Override
    public void onWarp(Field oldField, Field newField) {
        super.onWarp(oldField, newField);
        if (chr.getJob() != JobConstants.JobEnum.EVAN_NOOB.getJobId()) {
            spawnMir();
        }
    }
}
