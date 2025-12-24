package net.swordie.ms.client.jobs.sengoku;

import net.swordie.ms.client.Client;
import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.CharacterStat;
import net.swordie.ms.client.character.info.HitInfo;
import net.swordie.ms.client.character.items.BodyPart;
import net.swordie.ms.client.character.items.Equip;
import net.swordie.ms.client.character.skills.BypassCooldownCheckType;
import net.swordie.ms.client.character.skills.Option;
import net.swordie.ms.client.character.skills.Skill;
import net.swordie.ms.client.character.skills.SkillUseSource;
import net.swordie.ms.client.character.skills.atom.forceatom.ForceAtom;
import net.swordie.ms.client.character.skills.atom.forceatom.ForceAtomCollisionInfo;
import net.swordie.ms.client.character.skills.debuff.DebuffInfo;
import net.swordie.ms.client.character.skills.debuff.DebuffUtil;
import net.swordie.ms.client.character.skills.info.*;
import net.swordie.ms.client.character.skills.shootobject.ShootObjectSkillInfo;
import net.swordie.ms.client.character.skills.temp.CharacterTemporaryStat;
import net.swordie.ms.client.character.skills.temp.TemporaryStatManager;
import net.swordie.ms.client.jobs.Job;
import net.swordie.ms.client.party.Party;
import net.swordie.ms.connection.InPacket;
import net.swordie.ms.connection.packet.*;
import net.swordie.ms.constants.JobConstants;
import net.swordie.ms.constants.SkillConstants;
import net.swordie.ms.enums.AssistType;
import net.swordie.ms.enums.ForceAtomEnum;
import net.swordie.ms.enums.MoveAbility;
import net.swordie.ms.life.AffectedArea;
import net.swordie.ms.life.Haku;
import net.swordie.ms.life.Summon;
import net.swordie.ms.life.mob.Mob;
import net.swordie.ms.life.mob.MobStat;
import net.swordie.ms.life.mob.MobTemporaryStat;
import net.swordie.ms.loaders.SkillData;
import net.swordie.ms.util.Position;
import net.swordie.ms.util.Rect;
import net.swordie.ms.util.Util;
import net.swordie.ms.world.field.Field;
import net.swordie.ms.world.field.Foothold;

import java.util.*;
import java.util.stream.Collectors;

import static net.swordie.ms.client.character.skills.SkillStat.*;
import static net.swordie.ms.client.character.skills.temp.CharacterTemporaryStat.*;

/**
 * Created on 12/14/2017.
 */

public class Kanna extends Job {

    // Beginner Job
    public static final int HAKU = 40020109;
    public static final int HAKU_TOGGLE = 40021109;
    public static final int RETURN_OF_THE_FIVE_PLANETS = 40021227;
    public static final int BLESSING_OF_THE_FIVE_ELEMENTS = 40020000;
    public static final int MANAFLOW = 40020001;

    // 1st Job
    public static final int SHIKIGAMI_HAUNTING_1_1 = 42001000;
    public static final int SHIKIGAMI_HAUNTING_1_2 = 42001005;
    public static final int SHIKIGAMI_HAUNTING_1_3 = 42001006; // spawns mana vein
    public static final int SHIKIGAME_HAUNTING_1_SLOW = 42100024; // mob debuff
    public static final int MANA_WARP = 42001002;
    public static final int GEOMANCY = 42000000;
    public static final int MANA_VEIN = 42001101;
    public static final int GHOST_YAKSHA_TRAINEE = 42001100;


    // 2nd Job
    public static final int SOUL_BOMB = 42100007; // 1162  ?
    public static final int SOUL_BOMB_ATTACK = 33000036;
    public static final int SHIKIGAMI_HAUNTING_2_1 = 42101100;
    public static final int SHIKIGAMI_HAUNTING_2_2 = 42101101;
    public static final int SHIKIGAMI_HAUNTING_2_3 = 42101102; // spawns mana vein
    public static final int SHIKIGAMI_HAUNTING_2_SLOW = 42101103; // mob debuff
    public static final int RADIANT_PEACOCK = 42101003;
    public static final int GHOST_YAKSHA_BROTHER = 42100000;
    public static final int SHIKIGAMI_CHARM = 42101104; // spawns mana vein
    public static final int EXORCIST_CHARM = 42101005;
    public static final int HAKU_REBORN = 42101002;


    // 3rd Job
    public static final int SHIKIGAMI_ACTIVATION_SKILL = 42110013;
    public static final int SHIKIGAMI_HAUNTING_3_1 = 42111110;
    public static final int SHIKIGAMI_HAUNTING_3_2 = 42111111;
    public static final int SHIKIGAMI_HAUNTING_3_3 = 42111112; // spawns mana vein
    public static final int GHOST_YAKSHA_LIEUTENANT = 42110000;
    public static final int BLOSSOM_BARRIER = 42111004;
    public static final int YOSUZUME = 42110002;
    public static final int TENGU_STRIKE_SUMMON_R = 42111101;
    public static final int TENGU_STRIKE_SUMMON_L = 42111102;
    public static final int TENGU_STRIKE = 42111103;
    public static final int TENGU_STRIKE_MAIN = 42111100;
    public static final int MANA_BALANCE = 42111012;
    public static final int WARDING_BARRIER = 42110001;
    public static final int VANQUISHER_CHARM = 42121000;


    // 4th Job
    public static final int SHIKIGAMI_HAUNTING_4_1 = 42120026;
    public static final int SHIKIGAMI_HAUNTING_4_2 = 42120027;
    public static final int SHIKIGAMI_HAUNTING_4_3 = 42120028; // spawns mana vein
    public static final int GHOST_YAKSHA_BOSS = 42120001;
    public static final int FALLING_SAKURA = 42121002; // spawns mana vein
    public static final int SHIKIGAMI_DOPPELGANGER = 42121104;
    public static final int SHIKIGAMI_DOPPELGANGER_ATTACK = 42121104;
    public static final int OROCHI_UNBOUND = 42121100;
    public static final int OROCHI_UNBOUND_FIRST_HIT = 42121101;
    public static final int NINE_TAILED_FURY_NEW = 42121102; //Attacking Skill + Buff
    public static final int NIGHTGHOST_GUIDE = 42120003;


    // Hyper Skills
    public static final int GEOMANCY_SPREAD = 42120044;
    public static final int GEOMANCY_PERSIST = 42120050;


    // V Skills
    public static final int YUKI_MUSUME_SHOUKAN = 400021017;
    public static final int YUKI_MUSUME_SHOUKAN_SUMMON = 400021018;
    public static final int SPIRITS_DOMAIN = 400021054;
    public static final int LIBERATED_SPIRIT_CIRCLE_SMALL = 400021078;
    public static final int LIBERATED_SPIRIT_CIRCLE_BIG = 400021080;
    public static final int LIBERATED_SPIRIT_CIRCLE_SUMMON = 400021079;
    public static final int LIBERATED_SPIRIT_CIRCLE_SUMMON_2 = 400021081;
    public static final int YAKSHA_GHOST_GREAT_ONI_LORD = 400021114;





    //Old Skills        ------------------------------------------------------------------------------------------------
    public static final int KISHIN_SHOUKAN = 42111003; //summon
    public static final int LIFEBLOOD_RITUAL = 42110008;
    public static final int SOUL_SHEAR = 42111002; //Reactive Skill [4033270 - soul shear balls]
    public static final int SOUL_SHEAR_BOMB_ITEM_ID = 4033270;

    public static final int BELLFLOWER_BARRIER = 42121005; //AoE
    public static final int BELLFLOWER_BARRIER_PERSIST_H = 42120049;
    public static final int BELLFLOWER_BARRIER_BOSS_RUSH_H = 42120051;
    public static final int AKATSUKI_HERO_KANNA = 42121006;
    public static final int NINE_TAILED_FURY = 42121024; //Attacking Skill + Buff
    public static final int BINDING_TEMPEST = 42121004;
    public static final int BLOSSOMING_DAWN = 42121007;
    public static final int FALLING_SAKURA_VITALITY_H = 42120048;

    public static final int VERITABLE_PANDEMONIUM = 42121052; //Immobility Debuff
    public static final int PRINCESS_VOW_KANNA = 42121053;
    public static final int CIRCLE_OF_SUPRESSION = 42121054;

    //Haku Buffs
    public static final int HAKUS_GIFT = 42121020;
    public static final int FOXFIRE_2 = 42121021;
    public static final int HAKUS_BLESSING_2 = 42121022;
    public static final int BREATH_UNSEEN_2 = 42121023;



    private static final int[] addedSkills = new int[]{
            RETURN_OF_THE_FIVE_PLANETS,
            BLESSING_OF_THE_FIVE_ELEMENTS,
            MANAFLOW,
            HAKU_TOGGLE
    };

    private static final int LIBERATED_SPIRIT_CIRCLE_HITS_PER_SPAWN = 5;
    private static final int LIBERATED_SPIRIT_CIRCLE_SPAWNS_FOR_BIG_SPAWN = 5;

    private Haku haku;

    private int hitsForSpiritCircle;
    private int spiritCircleSpawns;
    private long lastSpiritCircleSpawn = Long.MIN_VALUE;

    public Kanna(Char chr) {
        super(chr);
        if (isHandlerOfJob(chr.getJob())) {
            for (int id : addedSkills) {
                if (!chr.hasSkill(id) || chr.getSkill(id).getCurrentLevel() == 0) {
                    Skill skill = SkillData.getSkillDeepCopyById(id);
                    skill.setCurrentLevel(skill.getMasterLevel());
                    chr.addSkill(skill);
                }
            }

            if (!chr.getQuestManager().hasQuestCompleted(57439)) {
                chr.getQuestManager().completeQuest(57439, false); // required to job adv
            }
        }
    }

    @Override
    public boolean isHandlerOfJob(short id) {
        return JobConstants.isKanna(id);
    }

    public Haku getHaku() {
        return haku;
    }

    private void setHaku(Haku haku) {
        this.haku = haku;
    }

    public void spawnHaku() {
        if (getHaku() == null) {
            setHaku(Haku.getHakuBy(chr, HAKU));
        }
        if (getHaku().isHumanForm()) {
            chr.write(FoxManPacket.foxManEnterField(getHaku()));
        } else {
            chr.write(SkillPetPacket.skillPetCreated(getHaku()));
        }
    }

    public void hakuFoxFire() {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        SkillInfo si = SkillData.getSkillInfoById(FOXFIRE_2);
        int slv = chr.getSkillLevel(HAKU_REBORN);
        Option o1 = new Option();

        o1.nOption = 3;
        o1.rOption = FOXFIRE_2;
        o1.tOption = si.getValue(time, slv);
        tsm.putCharacterStatValue(FireBarrier, o1);
        tsm.sendSetStatPacket();
    }

    public void hakuHakuBlessing() {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        SkillInfo si = SkillData.getSkillInfoById(HAKUS_BLESSING_2);
        int slv = chr.getSkillLevel(HAKU_REBORN);
        Option o1 = new Option();
        int matt = 0;
        Equip hakuFan = (Equip) chr.getEquippedItemByBodyPart(BodyPart.HakuFan);
        if (hakuFan != null) {
            int multiplier = si.getValue(x, slv);
            int hakuFanMatt = hakuFan.getiMad();
            matt = (int) (hakuFanMatt * (multiplier / 100F));
        }

        o1.nOption = matt;
        o1.rOption = HAKUS_BLESSING_2;
        o1.tOption = 300; // TODO  actually should be 0 | have yet to remove it upon leaving party
        tsm.putCharacterStatValue(HakuBlessing, o1);
        tsm.sendSetStatPacket();
    }

    public void hakuBreathUnseen() {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        Option o1 = new Option();
        int size = 1;
        Party party = chr.getParty();
        if (party != null) {
            Set<Char> pChrs = party.getPartyMembersInSameField(chr);
            pChrs.add(chr);
            size = pChrs.size();
            for (Char pChr : pChrs) {
                TemporaryStatManager pTSM = pChr.getTemporaryStatManager();
                o1.nOption = size * 5;
                o1.rOption = BREATH_UNSEEN_2;
                o1.tOption = 150; // TODO  actually should be 0 | have yet to remove it upon leaving party
                pTSM.putCharacterStatValue(BlessEnsenble, o1);
                pTSM.sendSetStatPacket();
            }
        } else {

            o1.nOption = size * 5;
            o1.rOption = BREATH_UNSEEN_2;
            o1.tOption = 150; // TODO  actually should be 0 | have yet to remove it upon leaving party
            tsm.putCharacterStatValue(BlessEnsenble, o1);
            tsm.sendSetStatPacket();
        }
    }

    public void hakuHakusGift() {
        chr.heal(chr.getHPPerc(80));
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

        if (hasHitMobs && attackInfo.skillId != SOUL_BOMB && attackInfo.skillId != YOSUZUME && attackInfo.skillId != 0) {
            yosuzume();
        }

        if (SkillConstants.isSpiritWalkerSkill(attackInfo.skillId)) {
            spawnManaVein();
        }

        if (chr.getField().getSummonByChrAndSkillId(chr, YUKI_MUSUME_SHOUKAN_SUMMON) != null
                && chr.hasSkill(YUKI_MUSUME_SHOUKAN)
                && tsm.hasStat(YukiMusumeShoukan)
                && hasHitMobs) {
            doYukiMusumeShoukanAttack();
        }

        if (attackInfo.skillId != SPIRITS_DOMAIN
                && attackInfo.skillId != LIBERATED_SPIRIT_CIRCLE_BIG
                && attackInfo.skillId != LIBERATED_SPIRIT_CIRCLE_SMALL) {
            createSpiritDomainForceAtom(attackInfo);
        }

        if (hasHitMobs) {
            // Soul Bomb
            doSoulBomb(attackInfo);

            lifeBloodRitual(attackInfo);

            checkLiberationCircleSpawn(attackInfo);
        }
        Option o1 = new Option();
        Option o2 = new Option();
        Option o3 = new Option();
        switch (attackInfo.skillId) {
            case GHOST_YAKSHA_TRAINEE:
            case GHOST_YAKSHA_BROTHER:
            case GHOST_YAKSHA_LIEUTENANT:
            case GHOST_YAKSHA_BOSS:
                if (attackInfo.attackActionType == 25 && attackInfo.summon != null) { // 25 is ActionType for the Leaving Attack
                    chr.getField().removeSummon(attackInfo.summon);
                    tsm.removeStatsBySkill(attackInfo.skillId);
                }
                break;

            case SHIKIGAMI_HAUNTING_1_1:
            case SHIKIGAMI_HAUNTING_1_2:
            case SHIKIGAMI_HAUNTING_1_3:

            case SHIKIGAMI_HAUNTING_2_1:
            case SHIKIGAMI_HAUNTING_2_2:
            case SHIKIGAMI_HAUNTING_2_3:

            case SHIKIGAMI_HAUNTING_3_1:
            case SHIKIGAMI_HAUNTING_3_2:
            case SHIKIGAMI_HAUNTING_3_3:

            case SHIKIGAMI_HAUNTING_4_1:
            case SHIKIGAMI_HAUNTING_4_2:
            case SHIKIGAMI_HAUNTING_4_3:
                si = SkillData.getSkillInfoById(SHIKIGAMI_HAUNTING_2_SLOW);
                slv = 1;
                o1.nOption = si.getValue(x, slv);
                o1.rOption = si.getSkillId();
                o1.tOption = si.getValue(time, slv);
                for (MobAttackInfo mai : attackInfo.mobAttackInfo) {
                    Mob mob = mai.mob;
                    if (mob == null || !(Util.succeedProp(si.getValue(prop, slv)))) {
                        continue;
                    }
                    MobTemporaryStat mts = mob.getTemporaryStat();
                    mts.addStatOptionsAndBroadcast(chr, MobStat.Speed, o1);
                    if (chr.hasSkill(SHIKIGAMI_ACTIVATION_SKILL)) {
                        mts.createAndAddBurnedInfo(chr, SHIKIGAMI_HAUNTING_2_SLOW, chr.getSkillLevel(SHIKIGAMI_ACTIVATION_SKILL));
                    }
                }
                break;

            case EXORCIST_CHARM:
                AffectedArea aa = AffectedArea.getPassiveAA(chr, skillID, (byte) slv);
                aa.setPosition(chr.getPosition());
                aa.setRect(aa.getPosition().getRectAround(si.getFirstRect()));
                aa.setDelay((short) 5);
                chr.getField().spawnAffectedArea(aa);
                break;

            case YOSUZUME:
                o1.nOption = si.getValue(v, slv);
                o1.rOption = skillID;
                o1.tOption = si.getValue(time, slv);

                DebuffUtil.applyDebuffOnMobs(chr, MobStat.FinalDmgReceived, o1, attackInfo.getMobIds());
                break;

            case BINDING_TEMPEST:
            case VERITABLE_PANDEMONIUM:
                o1.nOption = 1;
                o1.rOption = skill.getSkillId();
                o1.tOption = si.getValue(time, slv);

                DebuffUtil.applyDebuffOnMobs(chr, MobStat.Stun, o1, attackInfo.getMobIds());
                break;

            case FALLING_SAKURA:
                if (hasHitMobs) {
                    List<Char> chrList = new ArrayList<>();
                    if (chr.getParty() != null) {
                        chrList.addAll(chr.getParty().getPartyMembersInSameField(chr));
                    }
                    chrList.add(chr);
                    int percentHealed = si.getValue(x, slv) + (chr.hasSkill(FALLING_SAKURA_VITALITY_H) ? 20 : 0);
                    for (Char pChr : chrList) {
                        pChr.heal((int) ((pChr.getMaxHP() * percentHealed) / 100D));
                    }
                }
                break;

            case NINE_TAILED_FURY_NEW:
                o1.rOption = skillID;
                o1.nOption = si.getValue(indieDamR, slv);
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieDamR, o1);
                tsm.sendSetStatPacket();
                break;

            case MANA_WARP:
                o1.nOption = 1;
                o1.rOption = attackInfo.skillId;
                o1.tOption = si.getValue(time, slv);

                DebuffUtil.applyDebuffOnMobs(chr, MobStat.Stun, o1, attackInfo.getMobIds(), new DebuffInfo(true, si.getValue(prop, slv)));
                break;

            case YUKI_MUSUME_SHOUKAN:
                o2.nOption = si.getValue(x, slv);
                o2.rOption = skillID;
                o2.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(YukiMusumeShoukan, o2);
                Summon summon = Summon.getSummonBy(chr, skillID, slv);
                summon.setSkillID(YUKI_MUSUME_SHOUKAN_SUMMON);
                summon.setAssistType(AssistType.AttackCounter);
                summon.setMoveAbility(MoveAbility.Walk);
                chr.getField().spawnSummonAndRemoveOld(summon);
                break;

            case NIGHTGHOST_GUIDE:
                o1.nOption = 1;
                o1.rOption = skillID;
                o1.tOption = si.getValue(subTime, slv);
                o1.xOption = si.getValue(expR, slv); // exp
                DebuffUtil.applyDebuffOnMobs(chr, MobStat.Treasure, o1, attackInfo.getMobIds(), new DebuffInfo(si.getValue(prop, slv)));
                break;
        }

        super.handleAttack(c, attackInfo);
    }

    private void checkLiberationCircleSpawn(AttackInfo attackInfo) {
        if (!chr.hasSkill(LIBERATED_SPIRIT_CIRCLE_SMALL)) {
            return;
        }

        if (attackInfo.skillId != VANQUISHER_CHARM && attackInfo.skillId != SHIKIGAMI_HAUNTING_4_1) {
            return;
        }

        var si = SkillData.getSkillInfoById(LIBERATED_SPIRIT_CIRCLE_SMALL);
        var slv = chr.getSkillLevel(LIBERATED_SPIRIT_CIRCLE_SMALL);

        if (false && System.currentTimeMillis() < lastSpiritCircleSpawn + si.getValue(cooltime, slv)) {
            return;
        }

        if (false && hitsForSpiritCircle++ < LIBERATED_SPIRIT_CIRCLE_HITS_PER_SPAWN) {
            return;
        }
        hitsForSpiritCircle = 0;

        spiritCircleSpawns++;
        int skillId;
        if (true || spiritCircleSpawns >= LIBERATED_SPIRIT_CIRCLE_SPAWNS_FOR_BIG_SPAWN) {
            spiritCircleSpawns = 0;
            skillId = LIBERATED_SPIRIT_CIRCLE_SUMMON_2;
        } else {
            skillId = LIBERATED_SPIRIT_CIRCLE_SUMMON;
        }

        var field = chr.getField();
        SkillInfo ssi = SkillData.getSkillInfoById(skillId);
        int soulAmount = si.getValue((skillId == LIBERATED_SPIRIT_CIRCLE_SUMMON_2 ? u2 : u), slv);
        Rect rect = chr.getRectAround(ssi.getFirstRect());

        for (int i = 0; i < soulAmount; i++) {
            Foothold fh = Util.getRandomFromCollection(field.getInfo().getFootholdsInRect(rect));
            if (fh == null) {
                continue;
            }
            Position randPos = fh.getRandomPosition();
            if (randPos == null) {
                continue;
            }
            var summon = Summon.getSummonByNoCTS(chr, skillId, slv);
            summon.setMoveAbility(MoveAbility.Stop);
            summon.setAssistType(AssistType.Attack);
            summon.setPosition(randPos);
            summon.setCurFoothold((short) field.findFootHoldBelow(summon.getPosition()).getId());
            field.spawnSummon(summon);
        }
    }

    private void doSoulBomb(AttackInfo attackInfo) {
        if (!chr.hasSkill(SOUL_BOMB) || attackInfo.skillId == SOUL_BOMB) {
            return;
        }

        var positionList = attackInfo.mobAttackInfo.stream().filter(mai -> mai.mobDies).map(mai -> new Position(mai.hitX, mai.hitY)).collect(Collectors.toList());
        if (positionList.size() > 0) {
            chr.write(UserLocal.kannaSoulBomb(120, positionList));
        }
    }

    private int getAmountOfManaVeins() {
        return (int) chr.getField().getAffectedAreas().stream().filter(aa -> aa.getSkillID() == MANA_VEIN && aa.getOwner() == chr).count();
    }

    private void spawnManaVein() {
        Skill skill = chr.getSkill(GEOMANCY);
        if (!chr.hasSkill(skill.getSkillId())) {
            return;
        }
        SkillInfo si = SkillData.getSkillInfoById(skill.getSkillId());
        int slv = skill.getCurrentLevel();

        SkillInfo mvsi = SkillData.getSkillInfoById(MANA_VEIN);

        int maxManaVeins = si.getValue(x, slv) + chr.getSkillStatValue(x, GEOMANCY_SPREAD);
        if (getAmountOfManaVeins() < maxManaVeins && !chr.hasSkillOnCooldown(GEOMANCY)) {
            Field field = chr.getField();
            Rect rect = new Rect(-300, -300, 300, 300);
            var fh2 = Util.getRandomFromCollection(field.getInfo().getFootholdsInRect(chr.getPosition().getRectAround(rect)).stream().filter(fh -> !fh.isWall()).collect(Collectors.toList()));
            if (fh2 == null) {
                return;
            }
            Position position = fh2.getRandomPosition();

            AffectedArea aa = AffectedArea.getPassiveAA(chr, MANA_VEIN, slv);
            aa.setPosition(position);
            aa.setDuration((mvsi.getValue(time, 1) + (chr.getSkillStatValue(time, GEOMANCY_PERSIST))) * 1000);
            aa.setRect(aa.getPosition().getRectAround(SkillData.getSkillInfoById(MANA_VEIN).getFirstRect()));
            aa.setDelay((short) 4);
            field.spawnAffectedArea(aa);
            aa.activateTimer(1000, 1000);
            chr.addSkillCoolTime(skill.getSkillId(), si.getValue(cooltime, slv) * 1000);
        }
    }

    private void yosuzume() {
        Skill skill = chr.getSkill(YOSUZUME);
        if (!chr.hasSkill(YOSUZUME)) {
            return;
        }
        SkillInfo si = SkillData.getSkillInfoById(skill.getSkillId());
        int slv = skill.getCurrentLevel();

        int chance = si.getValue(prop, slv);
        if (Util.succeedProp(chance)) {
            createYosuzumeForceAtoms();
        }
    }

    private void createYosuzumeForceAtoms() {
        Random random = new Random();
        ForceAtomEnum fae = ForceAtomEnum.YOSUZUME_1;
        Mob mob = Util.getRandomFromCollection(chr.getField().getMobsInRect(chr.getPosition().getRectAround(new Rect(-300, -300, 300, 300))));
        int angle = random.nextInt(360);
        if (mob != null) {
            angle = (int) Util.getAngleOfTwoPositions(chr.getPosition(), mob.getPosition());
        }
        ForceAtomInfo fai = new ForceAtomInfo(chr.getNewForceAtomKey(), fae.getInc(), random.nextInt(13) + 50, 6,
                angle, 500, Util.getCurrentTime(), 0, 0,
                new Position());
        ForceAtom fa = new ForceAtom(chr.getId(), fae, mob == null ? 0 : mob.getObjectId(), YOSUZUME, fai);
        chr.createForceAtom(fa);
    }

    private void lifeBloodRitual(AttackInfo attackInfo) {
        if (!chr.hasSkill(LIFEBLOOD_RITUAL)) {
            return;
        }
        Skill skill = chr.getSkill(LIFEBLOOD_RITUAL);
        SkillInfo si = SkillData.getSkillInfoById(skill.getSkillId());
        int slv = skill.getCurrentLevel();
        int healed = (int) ((chr.getMaxHP() * si.getValue(x, slv)) / 100D);
        boolean hasHealed = false;
        for (MobAttackInfo mai : attackInfo.mobAttackInfo) {
            if (mai.mobDies) {
                chr.heal(healed);
                hasHealed = true;
            }
        }
        if (hasHealed) {
            chr.write(UserPacket.effect(Effect.skillAffected(skill.getSkillId(), slv, healed)));
            chr.getField().broadcastPacket(UserRemote.effect(chr.getId(), Effect.skillAffected(skill.getSkillId(), slv, healed)), chr);
        }
    }

    private void doYukiMusumeShoukanAttack() {
        if (!chr.hasSkill(YUKI_MUSUME_SHOUKAN)) {
            return;
        }
        Skill skill = chr.getSkill(YUKI_MUSUME_SHOUKAN);
        SkillInfo si = SkillData.getSkillInfoById(skill.getSkillId());
        int slv = skill.getCurrentLevel();
        int randomInt = new Random().nextInt(2) + 10;
        chr.getField().broadcastPacket(Summoned.summonedAssistAttackRequest(chr.getField().getSummonByChrAndSkillId(chr, YUKI_MUSUME_SHOUKAN_SUMMON), randomInt));
        chr.heal((int) ((chr.getMaxHP() * si.getValue(y, slv)) / 100D));
    }

    private int getManaConsumptionBySkill(int skillId) {
        SkillInfo si = SkillData.getSkillInfoById(skillId);
        if (si != null) {
            return si.getValue(epCon, chr.getSkillLevel(skillId));
        }
        return 0;
    }

    private void createSpiritDomainForceAtom(AttackInfo attackInfo) {
        Summon summon = getSpiritDomainSummon();
        if (summon == null) {
            return;
        }
        ForceAtomEnum fae = ForceAtomEnum.SPIRIT_DOMAIN;
        List<ForceAtomInfo> faiList = new ArrayList<>();
        int atomsCreated = getManaConsumptionBySkill(attackInfo.skillId) / 5;
        int angle = chr.isLeft() ? 220 : 140;
        for (int i = 0; i < atomsCreated; i++) {
            int fImpact = new Random().nextInt(7) + 23;
            int sImpact = new Random().nextInt(3) + 3;
            ForceAtomInfo fai = new ForceAtomInfo(chr.getNewForceAtomKey(), fae.getInc(), fImpact, sImpact,
                    new Random().nextInt(30) + angle - 15, 0, Util.getCurrentTime(), 1, 0, new Position());
            faiList.add(fai);
        }
        chr.createForceAtom(new ForceAtom(false, chr.getId(), chr.getId(), fae,
                false, Collections.singletonList(0), SPIRITS_DOMAIN, faiList, new Rect(), 0, 0,
                summon.getPosition(), SPIRITS_DOMAIN, summon.getPosition(), 0), false);
    }

    private void incrementSpiritDomainCount() {
        Summon summon = getSpiritDomainSummon();
        if (summon == null) {
            return;
        }
        int countPerAtom = 3;
        Skill skill = chr.getSkill(SPIRITS_DOMAIN);
        SkillInfo si = SkillData.getSkillInfoById(skill.getSkillId());
        int slv = skill.getCurrentLevel();
        int stateIncReq = si.getValue(z, slv);
        summon.incCount(countPerAtom);
        if (summon.getCount() >= stateIncReq) {
            incrementSpiritDomainState();
        }
    }

    private void incrementSpiritDomainState() {
        Summon summon = getSpiritDomainSummon();
        if (summon == null) {
            return;
        }
        if (summon.getState() < 2) {
            summon.incState();
            summon.setCount(0);
            createSpiritDomainAA(summon);
            broadcastSpiritDomainState(summon);
        }
    }

    private void createSpiritDomainAA(Summon summon) {
        if (summon == null) {
            return;
        }
        SkillInfo si = SkillData.getSkillInfoById(summon.getSkillID());
        AffectedArea aa = AffectedArea.getPassiveAA(chr, summon.getSkillID(), summon.getSlv());
        aa.setPosition(summon.getPosition());
        aa.setRect(aa.getRectAround(si.getRects().get(summon.getState())));
        aa.setOption(summon.getState());
        aa.activateTimer(3000, 3000);
        chr.getField().spawnAffectedAreaAndRemoveOld(aa);
    }

    private void broadcastSpiritDomainState(Summon summon) {
        Field field = chr.getField();
        for (Char otherChr : field.getChars()) {
            otherChr.write(Summoned.broadcastSpiritDomainState(otherChr.getId(), chr.getId(), summon));
        }
    }

    private Summon getSpiritDomainSummon() {
        return chr.getField().getSummonByChrAndSkillId(chr, SPIRITS_DOMAIN);
    }

    public void handleForceAtomCollision(ForceAtom fa, ForceAtomCollisionInfo faci) {
        switch (fa.getSkillId()) {
            case SPIRITS_DOMAIN:
                incrementSpiritDomainCount();
                break;
        }

        super.handleForceAtomCollision(fa, faci);
    }


    // Skill related methods -------------------------------------------------------------------------------------------

    @Override
    public void handleSkill(Char chr, TemporaryStatManager tsm, int skillId, int slv, InPacket inPacket, SkillUseInfo skillUseInfo) {
        super.handleSkill(chr, tsm, skillId, slv, inPacket, skillUseInfo);
        Skill skill = chr.getSkill(skillId);
        SkillInfo si = null;
        Field field = chr.getField();
        Summon summon;
        if (skill != null) {
            si = SkillData.getSkillInfoById(skillId);
        }
        Option o1 = new Option();
        Option o2 = new Option();
        Option o3 = new Option();
        switch (skillId) {
            case GHOST_YAKSHA_TRAINEE:
            case GHOST_YAKSHA_BROTHER:
            case GHOST_YAKSHA_LIEUTENANT:
            case GHOST_YAKSHA_BOSS:
                summon = Summon.getSummonBy(chr, skillId, slv);
                summon.setMoveAbility(MoveAbility.Stop);
                summon.setAssistType(AssistType.Attack);
                field.spawnSummonAndRemoveOld(summon);
                break;
            case RADIANT_PEACOCK:
                o1.nOption = si.getValue(x, slv);
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieBooster, o1);
                break;
            case TENGU_STRIKE_MAIN:
                Position position = inPacket.decodePosition();
                Summon tenguMain = field.getSummonByChrAndSkillId(chr, TENGU_STRIKE);
                Summon tenguLeft = field.getSummonByChrAndSkillId(chr, TENGU_STRIKE_SUMMON_L);
                Summon tenguRight = field.getSummonByChrAndSkillId(chr, TENGU_STRIKE_SUMMON_R);

                if (tenguMain != null && tenguLeft != null && tenguRight != null) {
                    // On First SkillUseReq
                    chr.addSkillCoolTime(skillId, 1000);
                    field.broadcastPacket(Summoned.summonedSetNewPosition(tenguMain, position));
                    field.broadcastPacket(Summoned.repositionSummon(tenguMain, skillId, position));

                    // On SkillUseReq After First SkillUseReq
                    field.broadcastPacket(Summoned.repositionSummon(tenguLeft, TENGU_STRIKE_SUMMON_L, position));
                    tenguLeft.setPosition(new Position(position.getX() + 600, position.getY()));
                    field.broadcastPacket(Summoned.assistSpecialAttackRequest(tenguLeft, 11));

                    field.broadcastPacket(Summoned.repositionSummon(tenguRight, TENGU_STRIKE_SUMMON_R, position));
                    tenguRight.setPosition(new Position(position.getX() - 600, position.getY()));
                    field.broadcastPacket(Summoned.assistSpecialAttackRequest(tenguRight, 11));
                }
                if (tenguMain != null) {
                    field.removeSummon(tenguMain);
                }
                break;
            case TENGU_STRIKE_SUMMON_L:
                position = inPacket.decodePosition();
                slv = chr.getSkillLevel(TENGU_STRIKE_MAIN);

                // Spawn Left
                tenguLeft = Summon.getSummonBy(chr, skillId, slv);
                tenguLeft.setAttackActive(false);
                tenguLeft.setPosition(position);
                tenguLeft.setMoveAbility(MoveAbility.Fly);
                tenguLeft.setCurFoothold((short) 0);
                tenguLeft.setFlip(true);
                tenguLeft.setTemplateId(0);

                tenguLeft.setSummonTerm(8);

                field.spawnSummonAndRemoveOld(tenguLeft);
                break;
            case TENGU_STRIKE_SUMMON_R:
                position = inPacket.decodePosition();
                slv = chr.getSkillLevel(TENGU_STRIKE_MAIN);

                // Spawn Right
                tenguRight = Summon.getSummonBy(chr, skillId, slv);
                tenguRight.setAttackActive(false);
                tenguRight.setPosition(position);
                tenguRight.setMoveAbility(MoveAbility.Fly);
                tenguRight.setCurFoothold((short) 0);
                tenguRight.setFlip(true);
                tenguRight.setTemplateId(0);

                tenguRight.setSummonTerm(8);

                field.spawnSummonAndRemoveOld(tenguRight);
                break;
            case TENGU_STRIKE:
                position = inPacket.decodePosition();

                // Spawn Main
                tenguMain = Summon.getSummonByNoCTS(chr, skillId, 1);
                tenguMain.setMoveAbility(MoveAbility.Crystal);
                tenguMain.setAssistType(AssistType.AttackCounter);
                tenguMain.setSummonTerm(1);
                tenguMain.setPosition(position);
                tenguMain.setAttackActive(true);
                tenguMain.setCurFoothold((short) 0);
                tenguMain.setFlip(true);
                tenguMain.setTemplateId(0);

                tenguMain.setSummonTerm(8);

                field.spawnSummonAndRemoveOld(tenguMain);

                chr.addSkillCoolTime(skillId, 1000);
                break;
            case MANA_BALANCE: // HP subtraction  done by client, this is only to server matches.
                chr.damagePerc(si.getValue(hp, slv));
                break;
            case BLOSSOM_BARRIER:
                spawnBlossomBarrier();
                break;
            case BELLFLOWER_BARRIER:
                spawnBellflowerBarrier();
                break;
            case SHIKIGAMI_DOPPELGANGER:
                o1.nOption = slv;
                o1.rOption = skillId;
                tsm.putCharacterStatValue(ShikigamiDoppelganger, o1);
                break;


            case LIBERATED_SPIRIT_CIRCLE_SUMMON:
            case LIBERATED_SPIRIT_CIRCLE_SUMMON_2:
                Position endPosition = inPacket.decodePosition();

                SkillInfo ssi = SkillData.getSkillInfoById(skillId);
                si = SkillData.getSkillInfoById(LIBERATED_SPIRIT_CIRCLE_SMALL);
                slv = chr.getSkillLevel(LIBERATED_SPIRIT_CIRCLE_SMALL);
                int soulAmount = si.getValue((skillId == LIBERATED_SPIRIT_CIRCLE_SUMMON_2 ? u2 : u), slv);
                Rect rect = endPosition.getRectAround(ssi.getFirstRect());

                for (int i = 0; i < soulAmount; i++) {
                    Foothold fh = Util.getRandomFromCollection(field.getInfo().getFootholdsInRect(rect));
                    if (fh == null) {
                        continue;
                    }
                    Position randPos = fh.getRandomPosition();
                    if (randPos == null) {
                        continue;
                    }
                    summon = Summon.getSummonByNoCTS(chr, skillId, slv);
                    summon.setMoveAbility(MoveAbility.Stop);
                    summon.setAssistType(AssistType.Attack);
                    summon.setPosition(randPos);
                    summon.setCurFoothold((short) field.findFootHoldBelow(summon.getPosition()).getId());
                    field.spawnSummon(summon);
                }
                break;
            case HAKU_REBORN:
                o1.nOption = 1;
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(ChangeFoxMan, o1);
                getHaku().setHumanForm(true); // shouldn't ever be null
                chr.write(FoxManPacket.foxManEnterField(haku));
                chr.write(FoxManPacket.foxManShowChangeEffect(haku));
                chr.write(SkillPetPacket.skillPetState(haku, HakuStateType.Disappear.getVal()));
                break;
            case KISHIN_SHOUKAN:
                new HashSet<>(field.getSummons()).stream().filter(s -> s.getSkillID() == skillId && s.getChr() == chr).forEach(field::removeLife);
                Foothold foothold = field.findFootHoldBelow(chr.getPosition());
                List<Foothold> footholds = field.getInfo().getFootholdsByGroupId(foothold.getGroupId());
                int x1 = Integer.MAX_VALUE;
                int x2 = Integer.MIN_VALUE;
                for (Foothold fh : footholds) {
                    if (foothold.getY1() != fh.getY1() || foothold.getY2() != fh.getY2() || fh.getY1() != fh.getY2()) {
                        continue;
                    }
                    if (fh.getX1() < x1 && fh.getX1() > chr.getPosition().getX() - 350) {
                        x1 = fh.getX1();
                    }
                    if (fh.getX2() > x2 && fh.getX2() < chr.getPosition().getX() + 350) {
                        x2 = fh.getX2();
                    }
                }
                if (footholds.size() <= 0) {
                    chr.chatMessage("You cannot spawn kishin shoukan here.");
                    return;
                }

                // Left
                Summon kishinL = Summon.getSummonByNoCTS(chr, skillId, slv);
                kishinL.setMoveAbility(MoveAbility.Stop);
                kishinL.setPosition(new Position(x1, chr.getPosition().getY()));
                if (field.findFootHoldBelow(kishinL.getPosition()) == null) {
                    chr.chatMessage("You cannot spawn kishin shoukan here.");
                    return;
                }
                kishinL.setCurFoothold((short) field.findFootHoldBelow(kishinL.getPosition()).getId());
                kishinL.setFlip(true);

                // Right
                Summon kishinR = Summon.getSummonByNoCTS(chr, skillId, slv);
                kishinR.setMoveAbility(MoveAbility.Stop);
                kishinR.setMoveAction((byte) 5);
                kishinR.setPosition(new Position(x2, chr.getPosition().getY()));
                if (field.findFootHoldBelow(kishinR.getPosition()) == null) {
                    chr.chatMessage("You cannot spawn kishin shoukan here.");
                    return;
                }
                kishinR.setCurFoothold((short) field.findFootHoldBelow(kishinR.getPosition()).getId());
                kishinR.setFlip(false);

                kishinL.setKishinPositions(new Position[]{new Position(kishinL.getX(), kishinR.getX()), new Position(kishinL.getY() - 120, kishinR.getY())});
                kishinR.setKishinPositions(new Position[]{new Position(kishinL.getX(), kishinR.getX()), new Position(kishinL.getY() - 120, kishinR.getY())});

                field.spawnSummon(kishinL);
                field.spawnSummon(kishinR);
                break;
            case PRINCESS_VOW_KANNA:
                o1.rOption = skillId;
                o1.nOption = si.getValue(indieDamR, slv);
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieDamR, o1);
                break;
            case CIRCLE_OF_SUPRESSION:
                o1.nOption = 1;
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(BlackHeartedCurse, o1);
                break;
            case SPIRITS_DOMAIN:
                summon = Summon.getSummonByNoCTS(chr, skillId, slv);
                summon.setMoveAbility(MoveAbility.Stop);
                chr.getField().spawnSummonAndRemoveOld(summon);
                createSpiritDomainAA(summon);
                break;
            case YAKSHA_GHOST_GREAT_ONI_LORD:
                if (tsm.getOptByCTSAndSkill(IndieSummon, skillId) != null) {
                    tsm.removeStatsBySkill(skillId);
                    // field.removeSummon(tsm.getOptByCTSAndSkill(IndieSummon, skillId).summon);
                } else {
                    summon = Summon.getSummonBy(chr, skillId, slv);
                    chr.getField().spawnSummonAndRemoveOld(summon);
                    o2.nOption = 100;
                    o2.rOption = skillId;
                    o2.tOption = si.getValue(time, slv);
                    tsm.putCharacterStatValue(IndieMDF, o2);
                    o3.nOption = 1;
                    o3.rOption = skillId;
                    o3.tOption = si.getValue(time, slv);
                    o3.xOption = 0;
                    tsm.putCharacterStatValue(YakshaGreatLord, o3);
                }
                break;
        }
        tsm.sendSetStatPacket();
    }

    @Override
    public BypassCooldownCheckType canBypassCooldownCheck(int skillId, AttackInfo attackInfo, SkillUseInfo sui, SkillUseSource source) {

        if (source.isSkillRequest() && skillId == YAKSHA_GHOST_GREAT_ONI_LORD) {
            var tsm = chr.getTemporaryStatManager();
            if (tsm.hasAOptByCTSAndSkill(IndieSummon, skillId)) {
                return BypassCooldownCheckType.BypassCheckAndCooldown;
            }
        }

        return super.canBypassCooldownCheck(skillId, attackInfo, sui, source);
    }

    public void updateGreatOniLord(int time) {
        var curTime = 0;
        var tsm = chr.getTemporaryStatManager();

        if (tsm.hasAOptByCTSAndSkill(IndieSummon, YAKSHA_GHOST_GREAT_ONI_LORD)) {
            return;
        }

        if (tsm.hasStat(YakshaGreatLord)) {
            curTime = tsm.getOption(YakshaGreatLord).xOption;
        }
        curTime += time;

        var o = new Option();
        o.xOption = curTime;
        tsm.putCharacterStatValue(YakshaGreatLord, o);
        tsm.sendSetStatPacket();
    }

    public void spawnBlossomBarrier() {
        if (!chr.hasSkill(BLOSSOM_BARRIER)) {
            return;
        }
        Skill skill = chr.getSkill(BLOSSOM_BARRIER);
        SkillInfo si = SkillData.getSkillInfoById(skill.getSkillId());
        int slv = skill.getCurrentLevel();
        int maxBarriers = chr.getSkillStatValue(x, WARDING_BARRIER);
        if (getBlossomBarriers() < maxBarriers) {
            Field field = chr.getField();
            Rect rect = chr.getRectAround(new Rect(-100, -100, 100, 100));
            List<AffectedArea> affectAreasInRect = field.getAffectAreasInRect(rect).stream().filter(aa -> aa.getOwner() == chr && aa.getSkillID() == MANA_VEIN).collect(Collectors.toList());
            boolean hasAAsInRect = affectAreasInRect.size() > 0;
            if (hasAAsInRect) {
                affectAreasInRect.forEach(field::removeLife);
            }
            AffectedArea aa = AffectedArea.getPassiveAA(chr, skill.getSkillId(), slv);
            aa.setPosition(chr.getPosition());
            aa.setRect(aa.getPosition().getRectAround(si.getFirstRect()));
            aa.setDelay((short) 3);
            field.spawnAffectedArea(aa);
            if (hasAAsInRect) {
                aa.activateTimer(1000, 1000);
            }
        }
    }

    public int getBlossomBarriers() {
        return (int) chr.getField().getAffectedAreas().stream().filter(aa -> aa.getOwner() == chr && aa.getSkillID() == BLOSSOM_BARRIER).count();
    }

    public void spawnBellflowerBarrier() {
        if (!chr.hasSkill(BELLFLOWER_BARRIER)) {
            return;
        }
        Field field = chr.getField();
        Skill skill = chr.getSkill(BELLFLOWER_BARRIER);
        SkillInfo si = SkillData.getSkillInfoById(skill.getSkillId());
        int slv = skill.getCurrentLevel();

        Rect rect = chr.getRectAround(new Rect(-100, -100, 100, 100));
        List<AffectedArea> affectAreasInRect = field.getAffectAreasInRect(rect).stream().filter(aa -> aa.getOwner() == chr && aa.getSkillID() == MANA_VEIN).collect(Collectors.toList());
        boolean hasAAsInRect = affectAreasInRect.size() > 0;
        if (hasAAsInRect) {
            affectAreasInRect.forEach(field::removeLife);
        }

        AffectedArea aa = AffectedArea.getPassiveAA(chr, skill.getSkillId(), slv);
        aa.setPosition(chr.getPosition());
        aa.setDuration((si.getValue(time, slv) + (chr.hasSkill(BELLFLOWER_BARRIER_PERSIST_H) ? 20 : 0)) * 1000);
        aa.setRect(aa.getPosition().getRectAround(si.getRects().get(0)));
        aa.setDelay((short) 3);
        field.spawnAffectedAreaAndRemoveOld(aa);
        if (hasAAsInRect) {
            aa.activateTimer(1000, 1000);
        }
    }

    @Override
    public void handleRemoveCTS(CharacterTemporaryStat cts, Option o) {
        if (cts.equals(ChangeFoxMan)) {
            getHaku().setHumanForm(false);
            chr.write(SkillPetPacket.skillPetState(getHaku(), HakuStateType.Appear.getVal()));
            chr.write(FoxManPacket.foxManLeaveField(chr));
        }
        super.handleRemoveCTS(cts, o);
    }

    public void handleShootObj(Char chr, ShootObjectSkillInfo sosi) {
        var skillId = sosi.getSkillId();
        var slv = sosi.getSlv();
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        SkillInfo si = SkillData.getSkillInfoById(skillId);
        Option o1 = new Option();
        switch (skillId) {
            case LIBERATED_SPIRIT_CIRCLE_SMALL:
            case LIBERATED_SPIRIT_CIRCLE_BIG:
                si = SkillData.getSkillInfoById(LIBERATED_SPIRIT_CIRCLE_SMALL);
                slv = chr.getSkillLevel(LIBERATED_SPIRIT_CIRCLE_SMALL);
                o1.nOption = skillId == LIBERATED_SPIRIT_CIRCLE_SMALL ? (tsm.hasStat(LiberatedSpiritCircle) ? tsm.getOption(LiberatedSpiritCircle).nOption + 1 : 1) : 0;
                o1.rOption = LIBERATED_SPIRIT_CIRCLE_SMALL;
                o1.xOption = skillId == LIBERATED_SPIRIT_CIRCLE_SMALL ? (tsm.hasStat(LiberatedSpiritCircle) ? tsm.getOption(LiberatedSpiritCircle).xOption + 1 : 1) : 0;
                tsm.putCharacterStatValue(LiberatedSpiritCircle, o1);
                tsm.sendSetStatPacket();
                chr.addSkillCoolTime(LIBERATED_SPIRIT_CIRCLE_SMALL, si.getValue(cooltime, slv) * 1000);
                chr.addSkillCoolTime(LIBERATED_SPIRIT_CIRCLE_BIG, si.getValue(cooltime, slv) * 1000);
                break;

        }
        super.handleShootObj(chr, sosi);
    }


    // Hit related methods ---------------------------------------------------------------------------------------------

    @Override
    public void handleHit(Client c, InPacket inPacket, HitInfo hitInfo) {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        if (tsm.hasStat(FireBarrier)) {
            decreaseFireBarrier();
        }
        super.handleHit(c, inPacket, hitInfo);
    }

    public void decreaseFireBarrier() {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        Option o = new Option();
        int cur = tsm.getOption(FireBarrier).nOption;
        cur--;
        if (cur <= 0) {
            tsm.removeStatsBySkill(FOXFIRE_2);
            return;
        }
        o.nOption = cur;
        o.rOption = FOXFIRE_2;
        o.tOption = (int) tsm.getRemainingTime(FireBarrier, FOXFIRE_2);
        o.setInMillis(true);
        tsm.putCharacterStatValue(FireBarrier, o);
        tsm.sendSetStatPacket();
    }

    @Override
    public void setCharCreationStats(Char chr) {
        super.setCharCreationStats(chr);
        CharacterStat cs = chr.getAvatarData().getCharacterStat();
        cs.setPosMap(807100000);
    }

    @Override
    public void onWarp(Field oldField, Field newField) {
        super.onWarp(oldField, newField);
        spawnHaku();
    }

    public enum HakuStateType {
        Create(0),
        Appear(1),
        Disappear(2),
        ;

        private byte val;

        public byte getVal() {
            return val;
        }

        HakuStateType(int val) {
            this.val = (byte) val;
        }
    }
}
