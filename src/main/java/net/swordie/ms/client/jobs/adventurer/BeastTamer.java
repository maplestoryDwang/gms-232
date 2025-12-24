package net.swordie.ms.client.jobs.adventurer;

import net.swordie.ms.client.Client;
import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.CharacterStat;
import net.swordie.ms.client.character.items.BodyPart;
import net.swordie.ms.client.character.items.Item;
import net.swordie.ms.client.character.skills.Option;
import net.swordie.ms.client.character.skills.Skill;
import net.swordie.ms.client.character.skills.SkillStat;
import net.swordie.ms.client.character.skills.SkillUseSource;
import net.swordie.ms.client.character.skills.atom.forceatom.ForceAtom;
import net.swordie.ms.client.character.skills.debuff.DebuffInfo;
import net.swordie.ms.client.character.skills.debuff.DebuffUtil;
import net.swordie.ms.client.character.skills.info.*;
import net.swordie.ms.client.character.skills.temp.CharacterTemporaryStat;
import net.swordie.ms.client.character.skills.temp.TemporaryStatManager;
import net.swordie.ms.client.jobs.Job;
import net.swordie.ms.client.jobs.adventurer.magician.Bishop;
import net.swordie.ms.connection.InPacket;
import net.swordie.ms.connection.packet.*;
import net.swordie.ms.connection.packet.model.MessagePacket;
import net.swordie.ms.constants.JobConstants;
import net.swordie.ms.constants.QuestConstants;
import net.swordie.ms.enums.AssistType;
import net.swordie.ms.enums.ForceAtomEnum;
import net.swordie.ms.enums.MoveAbility;
import net.swordie.ms.enums.Stat;
import net.swordie.ms.handlers.header.InHeader;
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
import net.swordie.ms.world.field.Field;
import net.swordie.ms.world.field.Foothold;

import java.util.*;

import static net.swordie.ms.client.character.skills.SkillStat.*;
import static net.swordie.ms.client.character.skills.temp.CharacterTemporaryStat.*;

/**
 * Created on 12/14/2017.
 */
public class BeastTamer extends Job {

    public static final int KEYMAPS = 5;


    //Common
    public static final int HOMEWARD_BOUND = 110001514;
    public static final int MAPLE_GUARDIAN = 110001511;
    public static final int BEASTLY_RESOLVE = 110001512;
    public static final int GROWTH_SPURT = 110000513;
    public static final int BEAST_TAMER_MASTERY = 110000515;
    public static final int MODE_CANCEL = 110001500;
    public static final int BEAR_MODE = 110001501;
    public static final int SNOW_LEOPARD_MODE = 110001502;
    public static final int HAWK_MODE = 110001503;
    public static final int CAT_MODE = 110001504;

    //Bear Mode
    public static final int LIL_FORT = 112001007;
    public static final int FORT_FOLLOW_UP = 112000015;
    public static final int MAJESTIC_TRUMPET = 112001006;
    public static final int BEAR_REBORN = 112000016;
    public static final int BEAR_ASSAULT = 112001009;
    public static final int FISHY_SLAP = 112001008;
    public static final int BILLOWING_TRUMPET = 112000020;

    //Snow Leopard Mode
    public static final int LEOPARD_HIDE = 112100011;
    public static final int BRO_ATTACK = 112101016;
    public static final int THUNDER_DASH = 112101007;
    public static final int ADV_THUNDER_DASH = 112100012;
    public static final int THUNDER_TRAIL = 112100008; //tile
    public static final int MACHO_INCARNATE = 112100006;

    //Hawk Mode
    public static final int FORMATION_ATTACK = 112110003;
    public static final int EKA_EXPRESS = 112111010;    //Door skill
    public static final int FLY = 112111000;
    public static final int HAWK_FLOCK = 112111007;
    public static final int RAPTOR_TALONS = 112111006;
    public static final int BIRDS_EYE_VIEW = 112111009;
    public static final int RAZOR_BEAK = 112111008;
    public static final int REGROUP = 112111011;    //Warp Party to player
    public static final int DEFENSIVE_FORMATION = 112110005;
    public static final int BABY_BOMBERS_ATTACK = 112111018;
    public static final int TORNADO_FLIGHT = 112111016;

    //Cat Mode
    public static final int MEOW_HEAL = 112121013;
    public static final int PURR_ZONE = 112121005; // Special Skill
    public static final int MEOW_CARD = 112121006; // Meow Card
    public static final int MEOW_CARD_RED = 112121007; //Red
    public static final int MEOW_CARD_BLUE = 112121008; //Blue
    public static final int MEOW_CARD_GREEN = 112121009; //Green
    public static final int MEOW_CARD_GOLD = 112121020; //112120009;    //Gold
    public static final int MEOW_CARD_GOLD_SKILL = 112120019; // If chr has the Gold Card Skill
    public static final int FIRE_KITTY = 112121004;
    public static final int CATS_CRADLE_BLITZKRIEG = 112121057; // Special Skill (like PURR_ZONE)
    public static final int KITTY_BATTLE_SQUAD = 112120021;
    public static final int KITTY_TREATS = 112120023;
    public static final int STICKY_PAWS = 112120017;
    public static final int CAT_CLAWS = 112120018;
    public static final int MOUSERS_INSIGHT = 112120022;
    public static final int FRIENDS_OF_ARBY = 112120016;
    public static final int MEOW_CURE = 112121010;
    public static final int MEOW_REVIVE = 112121011;


    //Hyper
    public static final int TEAM_ROAR = 112121056;
    public static final int GROUP_BEAR_BLASTER = 112121055;
    public static final int ALL_TOGETHER_CRITTER_CROSSING = 112121058;

    // V
    public static final int CHAMP_CHARGE = 400021019;
    public static final int CHAMP_CHARGE_1 = 400021020;
    public static final int CHAMP_CHARGE_2 = 400021021;
    public static final int CHAMP_CHARGE_3 = 400021022;
    public static final int CHAMP_CHARGE_4 = 400021023;
    public static final int CHAMP_CHARGE_5 = 400021024;
    public static final int CHAMP_CHARGE_6 = 400021025;
    public static final int CHAMP_CHARGE_7 = 400021026;
    public static final int CHAMP_CHARGE_8 = 400021027;
    public static final int CHAMP_CHARGE_9 = 400021034;
    public static final int CHAMP_CHARGE_10 = 400021035;
    public static final int CHAMP_CHARGE_11 = 400021036;
    public static final int CHAMP_CHARGE_12 = 400021037;
    public static final int CHAMP_CHARGE_13 = 400021038;
    public static final int CHAMP_CHARGE_14 = 400021039;

    public static final int CHAMP_CHARGE_BEAR_STARTER = 400021020;
    public static final int CHAMP_CHARGE_LEOPARD_STARTER = 400021038;
    public static final int CHAMP_CHARGE_HAWK_STARTER = 400021020;
    public static final int CHAMP_CHARGE_CAT_STARTER = 400021020;
    public static final int CHAMP_CHARGE_HAWK_FINISHER = 400021037;
    public static final int CHAMP_CHARGE_LEOPARD_FINISHER = 400021023;
    public static final int CHAMP_CHARGE_BEAR_FINISHER = 400021034;
    public static final int CHAMP_CHARGE_CAT_FINISHER = 400021039;
    public static final int CUB_CAVALRY = 400021055;
    public static final int CUB_CAVALRY_SUMMON_1 = 400021056;
    public static final int CUB_CAVALRY_SUMMON_2 = 400021057;
    public static final int CUB_CAVALRY_SUMMON_3 = 400021058;
    public static final int CUB_CAVALRY_SUMMON_4 = 400021059;
    public static final int AERIAL_RELIEF = 400021082;
    public static final int AERIAL_RELIEF_2 = 400021083;
    public static final int AERIAL_RELIEF_3 = 400021084;
    public static final int AERIAL_RELIEF_SKILL_USE = 400021085;
    public static final int THE_GREATEST_SHOW_ON_MAPLE_WORLD_IS_COMING = 400021116;
    public static final int THE_GREATEST_SHOW_ON_MAPLE_WORLD_IS_COMING_AA = 400021117;
    public static final int THE_GREATEST_SHOW_ON_MAPLE_WORLD_IS_COMING_BEAR = 400021118;
    public static final int THE_GREATEST_SHOW_ON_MAPLE_WORLD_IS_COMING_LEOPARD = 400021119;
    public static final int THE_GREATEST_SHOW_ON_MAPLE_WORLD_IS_COMING_HAWK = 400021120;
    public static final int THE_GREATEST_SHOW_ON_MAPLE_WORLD_IS_COMING_CAT = 400021121;


    private static final int[] addedSkills = new int[]{
            MODE_CANCEL,
            BEAR_MODE,
            SNOW_LEOPARD_MODE,
            HAWK_MODE,
            CAT_MODE,
            HOMEWARD_BOUND,
    };

    private static final int[] bearBuffs = new int[]{
            BEAR_ASSAULT,
            LIL_FORT
    };

    private static final int[] leopardBuffs = new int[]{
            BRO_ATTACK,

    };

    private static final int[] hawkBuffs = new int[]{
            HAWK_FLOCK,
            RAPTOR_TALONS,
            BIRDS_EYE_VIEW,
            RAZOR_BEAK,
    };

    public static final int[] catBuffs = new int[]{
/*            MEOW_CARD,
            MEOW_CARD_RED,
            MEOW_CARD_BLUE,
            MEOW_CARD_GREEN,
            MEOW_CARD_GOLD,
            MEOW_CARD_GOLD_SKILL,*/
            KITTY_BATTLE_SQUAD,
            KITTY_TREATS,
            STICKY_PAWS,
            CAT_CLAWS,
            MOUSERS_INSIGHT,
            FRIENDS_OF_ARBY,
    };

    private static final int[] cards = new int[]{
            MEOW_CARD_RED,
            MEOW_CARD_GREEN,
            MEOW_CARD_BLUE,
            MEOW_CARD_GOLD
    };

    private static final HashMap<Integer, int[]> buffsByMode;

    static {
        buffsByMode = new HashMap<>();
        buffsByMode.put(BEAR_MODE, bearBuffs);
        buffsByMode.put(SNOW_LEOPARD_MODE, leopardBuffs);
        buffsByMode.put(HAWK_MODE, hawkBuffs);
        buffsByMode.put(CAT_MODE, catBuffs);
    }

    private int fortFollowUpAddAttack = 0;

    public BeastTamer(Char chr) {
        super(chr);
        if (isHandlerOfJob(chr.getJob())) {
            for (int id : addedSkills) {
                if (!chr.hasSkill(id)) {
                    Skill skill = SkillData.getSkillDeepCopyById(id);
                    skill.setCurrentLevel(skill.getMasterLevel());
                    chr.addSkill(skill);
                }
            }

            // Hack to update old BTs with new skills
            if (chr.getLevel() > 150) {
                var qm = chr.getQuestManager();
                if (!qm.hasQuestInProgress(QuestConstants.GROWTH_SPURT_SLV)) {
                    var growthSpurtSkill = chr.getSkill(GROWTH_SPURT, true);
                    growthSpurtSkill.setCurrentLevel(30);
                    chr.addSkillAndSendPacket(growthSpurtSkill);

                    var growthSpurtSkillSlvQr = qm.getOrCreateQuestById(QuestConstants.GROWTH_SPURT_SLV);
                    growthSpurtSkillSlvQr.setQrValue(String.valueOf(growthSpurtSkill.getCurrentLevel()));
                    chr.write(WvsContext.message(MessagePacket.questRecordExMessage(growthSpurtSkillSlvQr)));
                }

                if (!chr.hasSkill(BEASTLY_RESOLVE) || chr.getSkill(BEASTLY_RESOLVE).getCurrentLevel() < 5) {
                    var beastlyResolve = chr.getSkill(BEASTLY_RESOLVE, true);
                    beastlyResolve.setCurrentLevel(5);
                    chr.addSkillAndSendPacket(beastlyResolve);
                }
            }
        }
    }

    @Override
    public boolean isHandlerOfJob(short id) {
        return JobConstants.isBeastTamer(id);
    }

    public boolean isBearMode() {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        return tsm.hasStat(BeastMode) && tsm.getOption(BeastMode).nOption == 1;
    }

    public boolean isLeopardMode() {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        return tsm.hasStat(BeastMode) && tsm.getOption(BeastMode).nOption == 2;
    }

    public boolean isHawkMode() {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        return tsm.hasStat(BeastMode) && tsm.getOption(BeastMode).nOption == 3;
    }

    public boolean isCatMode() {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        return tsm.hasStat(BeastMode) && tsm.getOption(BeastMode).nOption == 4;
    }


    //  Buff related methods -------------------------------------------------------------------------------------------

    private void giveMeowCard(Char pChr, int meowCardSkill, int slv) {
        if (!chr.hasSkill(MEOW_CARD) && !chr.hasSkill(MEOW_CARD_GOLD_SKILL)) {
            return;
        }
        SkillInfo mc = SkillData.getSkillInfoById(MEOW_CARD);
        TemporaryStatManager tsm = pChr.getTemporaryStatManager();

        resetPrevMeowCards(tsm);
        var tOpt = mc.getValue(time, slv);
        switch (meowCardSkill) {
            case MEOW_CARD_RED:
                tsm.putCharacterStatValue(IndieDamR, new Option(mc.getValue(indieDamR, slv), meowCardSkill, tOpt));
                break;

            case MEOW_CARD_GREEN:
                tsm.putCharacterStatValue(IndieBooster, new Option(mc.getValue(indieBooster, slv), meowCardSkill, tOpt));
                tsm.putCharacterStatValue(IndieSpeed, new Option(mc.getValue(indieSpeed, slv), meowCardSkill, tOpt));
                break;

            case MEOW_CARD_BLUE:
                tsm.putCharacterStatValue(DEF, new Option(mc.getValue(pdd, slv), meowCardSkill, tOpt));
                tsm.putCharacterStatValue(IndieMHPR, new Option(mc.getValue(mhpR, slv), meowCardSkill, tOpt));
                tsm.putCharacterStatValue(IndieMMPR, new Option(mc.getValue(mhpR, slv), meowCardSkill, tOpt));
                break;

            case MEOW_CARD_GOLD:
                tsm.putCharacterStatValue(IndieDamR, new Option(mc.getValue(indieDamR, slv), meowCardSkill, tOpt));
                tsm.putCharacterStatValue(IndieBooster, new Option(mc.getValue(indieBooster, slv), meowCardSkill, tOpt));
                tsm.putCharacterStatValue(IndieSpeed, new Option(mc.getValue(indieSpeed, slv), meowCardSkill, tOpt));
                tsm.putCharacterStatValue(DEF, new Option(mc.getValue(pdd, slv), meowCardSkill, tOpt));
                tsm.putCharacterStatValue(IndieMHPR, new Option(mc.getValue(mhpR, slv), meowCardSkill, tOpt));
                tsm.putCharacterStatValue(IndieMMPR, new Option(mc.getValue(mhpR, slv), meowCardSkill, tOpt));
                break;
        }

        Effect effect = Effect.skillAffected(meowCardSkill, slv, 0);
        pChr.write(UserPacket.effect(effect));
        pChr.getField().broadcastPacket(UserRemote.effect(pChr.getId(), effect), pChr);

        tsm.sendSetStatPacket();
    }

    private int getRandomMeowCard() {
        int rng = new Random().nextInt((chr.hasSkill(MEOW_CARD_GOLD_SKILL) ? cards.length : cards.length - 1));
        return cards[rng];
    }

    private void resetPrevMeowCards(TemporaryStatManager tsm) {
        for (int cardBuffId : cards) {
            if (tsm.hasStatBySkillId(cardBuffId)) {
                tsm.removeStatsBySkill(cardBuffId);
            }
        }
    }

    private void giveCatBuffs() {
        List<Char> chrList = new ArrayList<>() {{ add(chr); }};
        if (chr.getParty() != null) {
            chrList = chr.getParty().getPartyMembersInField(chr);
        }

        var kittyBattleSquadSLV = chr.getSkillLevel(KITTY_BATTLE_SQUAD);
        var kittyTreatsSLV = chr.getSkillLevel(KITTY_TREATS);
        var stickyPawsSLV = chr.getSkillLevel(STICKY_PAWS);
        var catClawsSLV = chr.getSkillLevel(CAT_CLAWS);
        var mouserInsightSLV = chr.getSkillLevel(MOUSERS_INSIGHT);
        var friendsOfArbySLV = chr.getSkillLevel(FRIENDS_OF_ARBY);
        for (Char pChr : chrList) {
            TemporaryStatManager pTsm = pChr.getTemporaryStatManager();

            // Kitty Battle Squad
            if (kittyBattleSquadSLV > 0) {
                SkillInfo si = SkillData.getSkillInfoById(KITTY_BATTLE_SQUAD);
                Option o1 = new Option(si.getValue(indiePad, kittyBattleSquadSLV), KITTY_BATTLE_SQUAD, 0);
                o1.chr = chr;
                Option o2 = new Option(si.getValue(indiePad, kittyBattleSquadSLV), KITTY_BATTLE_SQUAD, 0);
                o2.chr = chr;
                pTsm.putCharacterStatValue(IndiePAD, o1, true);
                pTsm.putCharacterStatValue(IndieMAD, o2, true);
            }

            // Kitty Treats
            if (kittyTreatsSLV > 0) {
                SkillInfo si = SkillData.getSkillInfoById(KITTY_TREATS);
                Option o1 = new Option(si.getValue(indieMhp, kittyTreatsSLV), KITTY_TREATS, 0);
                o1.chr = chr;
                Option o2 = new Option(si.getValue(indieMmp, kittyTreatsSLV), KITTY_TREATS, 0);
                o2.chr = chr;
                pTsm.putCharacterStatValue(IndieMHP, o1, true);
                pTsm.putCharacterStatValue(IndieMMP, o2, true);
            }

            // Sticky Paws
            if (stickyPawsSLV > 0) {
                SkillInfo si = SkillData.getSkillInfoById(STICKY_PAWS);
                Option o1 = new Option(si.getValue(v, stickyPawsSLV), STICKY_PAWS, 0);
                o1.chr = chr;
                pTsm.putCharacterStatValue(DropRate, o1, true);
            }

            // Cat Claws
            if (catClawsSLV > 0) {
                SkillInfo si = SkillData.getSkillInfoById(CAT_CLAWS);
                Option o1 = new Option(si.getValue(x, catClawsSLV), CAT_CLAWS, 0);
                o1.chr = chr;
                Option o2 = new Option(si.getValue(y, catClawsSLV), CAT_CLAWS, 0);
                o2.chr = chr;
                pTsm.putCharacterStatValue(IndieCr, o1, true);
                pTsm.putCharacterStatValue(IndieCrDmg, o2, true);
            }

            // Mouser Insight
            if (mouserInsightSLV > 0) {
                SkillInfo si = SkillData.getSkillInfoById(MOUSERS_INSIGHT);
                Option o1 = new Option(si.getValue(x, mouserInsightSLV), MOUSERS_INSIGHT, 0);
                o1.chr = chr;
                pTsm.putCharacterStatValue(IgnoreTargetDEF, o1, true);
            }

            // Friends of Arby

            int holySymbolSLV = pTsm.getOptByCTSAndSkill(HolySymbol, Bishop.HOLY_SYMBOL) == null ? 0 : pTsm.getOptByCTSAndSkill(HolySymbol, Bishop.HOLY_SYMBOL).slv;
            if(holySymbolSLV == 0){
                holySymbolSLV = pTsm.getOptByCTSAndSkill(HolySymbol, Job.DECENT_HOLY_SYMBOL) == null ? 0 : pTsm.getOptByCTSAndSkill(HolySymbol, Job.DECENT_HOLY_SYMBOL).slv;
            }
            if (friendsOfArbySLV > 0 && friendsOfArbySLV > holySymbolSLV) {
                SkillInfo si = SkillData.getSkillInfoById(FRIENDS_OF_ARBY);
                Option o1 = new Option(si.getValue(x, friendsOfArbySLV), FRIENDS_OF_ARBY, 0);
                o1.chr = chr;
                pTsm.putCharacterStatValue(HolySymbol, o1, true);
            }

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
            slv = (byte) skill.getCurrentLevel();
            skillID = skill.getSkillId();
        }

        if (hasHitMobs && skillID != BRO_ATTACK) { // Leopard
            var leopardMode = isLeopardMode();
            if (leopardMode) {
                procBroAttack(attackInfo);
            }
            if (leopardMode || tsm.hasStat(CritterCrossing)) {
                procLeopardHide(attackInfo);
            }
        }

        if (isHawkMode() && hasHitMobs) { // Hawk
            applyRaptorTalonsOnMob(attackInfo);
        }

        if (isCatMode() || tsm.hasStat(CritterCrossing)) { // Cat
            giveCatBuffs();
        }

        if (hasHitMobs && tsm.hasStatBySkillId(THE_GREATEST_SHOW_ON_MAPLE_WORLD_IS_COMING) && !chr.hasSkillOnCooldown(THE_GREATEST_SHOW_ON_MAPLE_WORLD_IS_COMING_AA)) {
            var mob = (Mob) chr.getField().getLifeByObjectID(Util.getRandomFromCollection(attackInfo.mobAttackInfo).mobId);
            if (mob != null) {
                placeTheGreatestShowAA(mob.getPosition());
            }
        }

        Option o1 = new Option();
        Option o2 = new Option();
        Option o3 = new Option();
        Field field = chr.getField();
        switch (attackInfo.skillId) {
            // Bear Mode
            case MAJESTIC_TRUMPET:
                if (attackInfo.inHeader.equals(InHeader.USER_MAGIC_ATTACK)) {
                    AffectedArea aa = AffectedArea.getPassiveAA(chr, skillID, slv);
                    aa.setPosition(new Position(attackInfo.forcedX, attackInfo.forcedY));
                    aa.setRect(aa.getRectAround(si.getFirstRect()));
                    aa.setDelay((short) 6);
                    field.spawnAffectedArea(aa);
                }
                break;

            // Leopard Mode
            case ADV_THUNDER_DASH:
            case THUNDER_TRAIL:
            case THUNDER_DASH:
                if (chr.hasSkill(THUNDER_TRAIL)) {
                    if (attackInfo.inHeader.equals(InHeader.USER_MELEE_ATTACK) || attackInfo.inHeader.equals(InHeader.USER_MAGIC_ATTACK)) {
                        if (attackInfo.skillId != THUNDER_TRAIL) {
                            skillID = THUNDER_TRAIL;
                            si = SkillData.getSkillInfoById(THUNDER_TRAIL);
                            slv = chr.getSkillLevel(THUNDER_TRAIL);
                        }
                        AffectedArea aa = AffectedArea.getPassiveAA(chr, skillID, slv);
                        aa.setPosition(attackInfo.chrPos);
                        Rect rect = si.getFirstRect();
                        if (!attackInfo.left) {
                            rect = rect.moveRight();
                        }
                        aa.setRect(aa.getRectAround(rect));
                        aa.setDelay((short) 4);
                        field.spawnAffectedArea(aa);
                    }
                }
                break;
            case MACHO_INCARNATE:
                o1.nOption = 1;
                o1.rOption = skillID;
                o1.tOption = si.getValue(time, slv);

                DebuffUtil.applyDebuffOnMobs(chr, MobStat.Stun, o1, attackInfo.getMobIds(), new DebuffInfo(true));
                break;

            // Hawk Mode
            case FORMATION_ATTACK:
                if (hasHitMobs) {
                    chr.reduceSkillCoolTime(FLY, 500);
                }
                break;

            // Cat Mode
            case PURR_ZONE:
                AffectedArea aa = AffectedArea.getAffectedArea(chr, attackInfo);
                aa.setPosition(chr.getPosition());
                aa.setRect(aa.getPosition().getRectAround(si.getFirstRect()));
                aa.activateTimer(1000, 1000);
                field.spawnAffectedArea(aa);
                break;
            case FIRE_KITTY:
                o1.nOption = si.getValue(SkillStat.x, slv);
                o1.rOption = skillID;
                o1.tOption = si.getValue(time, slv);

                DebuffUtil.applyDebuffOnMobs(chr, MobStat.PDR, o1, attackInfo.getMobIds());
                break;

            // Common
            case GROUP_BEAR_BLASTER:
                o1.nOption = 1;
                o1.rOption = skillID;
                o1.tOption = 6;
                tsm.putCharacterStatValue(IndieNotDamaged, o1, true);
                tsm.sendSetStatPacket();
                break;
            case CUB_CAVALRY_SUMMON_1:
            case CUB_CAVALRY_SUMMON_2:
            case CUB_CAVALRY_SUMMON_3:
            case CUB_CAVALRY_SUMMON_4:
                if (attackInfo.attackActionType == 25 && attackInfo.summon != null) {
                    chr.getField().removeSummon(attackInfo.summon);
                }
                break;

            case CHAMP_CHARGE_LEOPARD_STARTER:
            case CHAMP_CHARGE_CAT_STARTER:
                chr.setSkillCooldown(CHAMP_CHARGE, chr.getSkillLevel(CHAMP_CHARGE));
                break;
        }

        super.handleAttack(c, attackInfo);
    }

    @Override
    public int alterCooldownSkill(int skillId, int slv, AttackInfo attackInfo, SkillUseInfo sui, SkillUseSource source) {
        switch (skillId) {
            case THUNDER_DASH:
                if (chr.hasSkill(ADV_THUNDER_DASH)) {
                    var cd = 2000;
                    chr.addSkillCoolTime(ADV_THUNDER_DASH, cd);
                    return cd;
                }
        }
        return super.alterCooldownSkill(skillId, slv, attackInfo, sui, source);
    }

    private void procBroAttack(AttackInfo attackInfo) {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        if (tsm.getOptByCTSAndSkill(BroAttack, BRO_ATTACK) != null && attackInfo.mobCount > 0) {
            Field field = chr.getField();
            Skill skill = chr.getSkill(BRO_ATTACK);
            if (skill == null) {
                return;
            }
            SkillInfo si = SkillData.getSkillInfoById(BRO_ATTACK);
            int slv = skill.getCurrentLevel();
            int summonProp = si.getValue(prop, slv);

            Mob mob = attackInfo.mobAttackInfo.get(0).mob;
            if (mob == null) {
                return;
            }
            if (Util.succeedProp(summonProp)) {
                Summon summon = Summon.getSummonByNoCTS(chr, BRO_ATTACK, slv);
                summon.setFlyMob(false);
                summon.setPosition(mob.getPosition());
                summon.setSummonTerm(si.getValue(x, slv));
                summon.setMoveAbility(MoveAbility.WalkRandom);
                field.spawnSummon(summon);
            }
        }
    }

    private void procLeopardHide(AttackInfo attackInfo) {
        Skill skill = chr.getSkill(LEOPARD_HIDE);
        if (skill == null) {
            return;
        }
        SkillInfo si = SkillData.getSkillInfoById(skill.getSkillId());
        var slv = skill.getCurrentLevel();
        var chance = si.getValue(prop, slv);
        if (!Util.succeedProp(chance)) {
            return;
        }
        var restore = si.getValue(x, slv);
        var cap = 10; // Hardcoded
        long totalDmg = attackInfo.totalDamageDealt;
        var hpRestored = Math.max(0, Math.min(chr.getHPPerc(cap), (totalDmg * restore) / 100D));
        chr.heal((int) hpRestored);
    }

    private void applyRaptorTalonsOnMob(AttackInfo attackInfo) {
        if (!chr.hasSkill(RAPTOR_TALONS)) {
            return;
        }
        Skill skill = chr.getSkill(RAPTOR_TALONS);
        SkillInfo si = SkillData.getSkillInfoById(skill.getSkillId());
        int slv = skill.getCurrentLevel();
        for (MobAttackInfo mai : attackInfo.mobAttackInfo) {
            Mob mob = (Mob) chr.getField().getLifeByObjectID(mai.mobId);
            if (mob == null) {
                return;
            }
            MobTemporaryStat mts = mob.getTemporaryStat();
            if (Util.succeedProp(si.getValue(prop, slv))) {
                mts.createAndAddBurnedInfo(chr, skill);
            }
        }
    }

    @Override
    public int getFinalAttackSkill() {
        fortFollowUpAddAttack++;
        if (isBearMode() && chr.hasSkill(FORT_FOLLOW_UP) && fortFollowUpAddAttack >= 4) {
            fortFollowUpAddAttack = 0;
            return FORT_FOLLOW_UP;
        }

        return super.getFinalAttackSkill();
    }


    // Skill related methods -------------------------------------------------------------------------------------------

    @Override
    public void handleSkill(Char chr, TemporaryStatManager tsm, int skillID, int slv, InPacket inPacket, SkillUseInfo skillUseInfo) {
        super.handleSkill(chr, tsm, skillID, slv, inPacket, skillUseInfo);
        Skill skill = chr.getSkill(skillID);
        SkillInfo si = null;
        if (skill != null) {
            si = SkillData.getSkillInfoById(skillID);
        }
        Summon summon;
        Field field = chr.getField();
        Option o1 = new Option();
        Option o2 = new Option();
        Option o3 = new Option();
        Option o4 = new Option();
        Option o5 = new Option();

        if (isCatMode() || tsm.hasStat(CritterCrossing)) { // Cat
            giveCatBuffs();
        }

        switch (skillID) {
            //Common
            case MODE_CANCEL:
                var oldNOption = tsm.hasStat(BeastMode) ? tsm.getOption(BeastMode).nOption : 0;
                tsm.removeStat(BeastMode);
                List<Char> chrList = new ArrayList<>() {{add(chr);}};
                if (chr.getParty() != null) {
                    chrList = chr.getParty().getPartyMembersInField(chr);
                }
                for (Char pChr : chrList) {
                    TemporaryStatManager pTsm = pChr.getTemporaryStatManager();
                    for (int modeId : buffsByMode.keySet()) {
                        for (int buffId : buffsByMode.get(modeId)) {
                            pTsm.removeStatsBySkill(buffId);
                        }
                    }
                }

                if (tsm.hasStatBySkillId(THE_GREATEST_SHOW_ON_MAPLE_WORLD_IS_COMING)) {
                    modeChangeForGreatestShow(oldNOption, 0);
                }
                break;
            case BEAR_MODE:
            case SNOW_LEOPARD_MODE:
            case HAWK_MODE:
            case CAT_MODE:
                oldNOption = tsm.hasStat(BeastMode) ? tsm.getOption(BeastMode).nOption : 0;
                var newNOption = (skillID - MODE_CANCEL);

                o1.nOption = newNOption;
                o1.rOption = skillID;
                tsm.putCharacterStatValue(BeastMode, o1);

                // Critter Crossing
                if (!tsm.hasStat(CritterCrossing)) {
                    chrList = new ArrayList<>() {{add(chr);}};
                    if (chr.getParty() != null) {
                        chrList = chr.getParty().getPartyMembersInField(chr);
                    }
                    for (Char pChr : chrList) {
                        TemporaryStatManager pTsm = pChr.getTemporaryStatManager();
                        for (int modeId : buffsByMode.keySet()) {
                            if (skillID == modeId) {
                                continue;
                            }
                            for (int buffId : buffsByMode.get(modeId)) {
                                pTsm.removeStatsBySkill(buffId);
                            }
                        }
                    }
                }

                // The Greatest Show On Maple World Is Coming
                if (tsm.hasStatBySkillId(THE_GREATEST_SHOW_ON_MAPLE_WORLD_IS_COMING)) {
                    modeChangeForGreatestShow(oldNOption, newNOption);
                }
                break;

            //Bear Mode
            case LIL_FORT:
                summon = Summon.getSummonBy(chr, skillID, slv);
                summon.setMoveAbility(MoveAbility.SmartFollow);
                field.spawnSummonAndRemoveOld(summon);
                break;
            case BEAR_ASSAULT:
                int fd = si.getValue(x, slv);
                o1.nOption = fd; // dmg 20,  mobsHit 01
                o1.rOption = skillID;
                o1.xOption = fd;
                tsm.putCharacterStatValue(Enrage, o1);
                o2.nOption = si.getValue(y, slv);
                o2.rOption = skillID;
                tsm.putCharacterStatValue(EnrageCrDamMin, o2);
                o3.nOption = si.getValue(indiePMdR, slv);
                o3.rOption = skillID;
                tsm.putCharacterStatValue(IndiePMdR, o3);
                break;

            //Leopard Mode
            case BRO_ATTACK:
                o1.nOption = 1;
                o1.rOption = skillID;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(BroAttack, o1);
                break;

            //Hawk Mode
            case FLY:
                o1.nOption = 1;
                o1.rOption = skillID;
                o1.tOption = si.getValue(z, slv);
                o1.xOption = (chr.hasSkill(DEFENSIVE_FORMATION) ? DEFENSIVE_FORMATION : 0);
                tsm.putCharacterStatValue(NewFlying, o1);
                break;
            case HAWK_FLOCK:
                o1.nOption = si.getValue(speed, slv);
                o1.rOption = skillID;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieSpeed, o1);
                o2.nOption = si.getValue(jump, slv);
                o2.rOption = skillID;
                o2.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieJump, o2);
                break;
            case RAPTOR_TALONS:
                o1.rOption = skillID;
                o1.nOption = si.getValue(indieMad, slv);
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieMAD, o1);
                break;
            case BIRDS_EYE_VIEW:
                o1.rOption = skillID;
                o1.nOption = si.getValue(indieCr, slv);
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieCr, o1);
                o3.nOption = si.getValue(epdd, slv);
                o3.rOption = skillID;
                o3.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(EPDD, o3);
                o4.nOption = si.getValue(acc, slv);
                o4.rOption = skillID;
                o4.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(ACC, o4);
                o5.nOption = si.getValue(eva, slv);
                o5.rOption = skillID;
                o5.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(EVA, o5);
                break;
            case RAZOR_BEAK:
                o1.rOption = skillID;
                o1.nOption = si.getValue(indieMad, slv);
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieMAD, o1);
                o2.rOption = skillID;
                o2.nOption = si.getValue(indiePad, slv);
                o2.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndiePAD, o2);
                break;
            case DEFENSIVE_FORMATION:
                var size = inPacket.decodeByte();
                List<Integer> targetList = new ArrayList<>();
                for (int i = 0; i < size; i++) {
                    targetList.add(inPacket.decodeInt());
                }
                if (size > 0 && tsm.hasStatBySkillId(FLY)) {
                    createDefensiveFormationForceAtom(si, slv, targetList);
                }
                break;

            //Cat Mode
            case MEOW_CARD:
            case MEOW_CARD_GOLD_SKILL:
                if (skillID != MEOW_CARD) {
                    slv = chr.getSkillLevel(MEOW_CARD);
                }
                int randomMeowCard = getRandomMeowCard();
                chrList = new ArrayList<>() {{add(chr);}};
                if (chr.getParty() != null) {
                    chrList = chr.getParty().getPartyMembersInField(chr);
                }
                for (Char pChr : chrList) {
                    giveMeowCard(pChr, randomMeowCard, slv);
                }
                break;
            case MEOW_CURE:
                tsm.removeAllDebuffs();
                break;
            case MEOW_HEAL:
                chrList = new ArrayList<>() {{add(chr);}};
                if (chr.getParty() != null) {
                    chrList = chr.getParty().getPartyMembersInField(chr);
                }
                var hpRecoveredR = si.getValue(hp, slv);
                Effect effect = Effect.skillAffected(skillID, slv, 0);
                for (Char pChr : chrList) {
                    pChr.heal(pChr.getHPPerc(hpRecoveredR));
                    pChr.write(UserPacket.effect(effect));
                    field.broadcastPacket(UserRemote.effect(pChr.getId(), effect), pChr);
                }
                break;
            case MEOW_REVIVE:
                Rect rect = chr.getPosition().getRectAround(si.getFirstRect());
                if (!chr.isLeft()) {
                    rect = rect.horizontalFlipAround(chr.getPosition().getX());
                }
                if (chr.getParty() != null) {
                    Rect fRect = rect;
                    Char pChr = chr.getParty().getPartyMembersInField(chr).stream().filter(pC -> !pC.equals(chr) && pC.getHP() <= 0 && fRect.hasPositionInside(pC.getPosition())).findFirst().orElse(null);
                    if (pChr != null) {
                        pChr.heal(pChr.getMaxHP(), false, true);

                        TemporaryStatManager pTsm = pChr.getTemporaryStatManager();
                        o1.nOption = 1;
                        o1.rOption = skillID;
                        o1.tOption = 2;
                        pTsm.putCharacterStatValue(IndieNotDamaged, o1, true);
                        pTsm.sendSetStatPacket();

                        effect = Effect.skillAffected(skillID, (byte) 1, 0);
                        pChr.write(UserPacket.effect(effect));
                        field.broadcastPacket(UserRemote.effect(pChr.getId(), effect), pChr);
                    }
                }
                break;

            case CATS_CRADLE_BLITZKRIEG:
                var aa = AffectedArea.getPassiveAA(chr, skillID, slv);
                aa.setPosition(chr.getPosition());
                aa.setRect(aa.getPosition().getRectAround(si.getFirstRect()));
                field.spawnAffectedArea(aa);
                break;

            //Hyper
            case TEAM_ROAR:
                o1.rOption = skillID;
                o1.nOption = si.getValue(indieDamR, slv);
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieDamR, o1);
                o2.nOption = 1;
                o2.rOption = skillID;
                o2.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieNotDamaged, o2, true);
                o3.nOption = 1;
                o3.rOption = skillID;
                o3.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(TeamRoar, o3);
                break;
            case ALL_TOGETHER_CRITTER_CROSSING:
                tsm.putCharacterStatValue(CritterCrossing, new Option(1, skillID, si.getValue(time, slv)));
                break;

            // V skill
            case CHAMP_CHARGE_CAT_FINISHER:
                aa = AffectedArea.getPassiveAA(chr, skillID, slv);
                aa.setPosition(inPacket.decodePosition());
                rect = chr.getRectAround(si.getFirstRect());
                if (!chr.isLeft()) {
                    rect = rect.horizontalFlipAround(chr.getPosition().getX());
                }
                aa.setRect(rect);
                aa.setFlip(!chr.isLeft());
                field.spawnAffectedArea(aa);
                break;
            case CHAMP_CHARGE_CAT_STARTER:
            case CHAMP_CHARGE_LEOPARD_STARTER:
                chr.setSkillCooldown(CHAMP_CHARGE, chr.getSkillLevel(CHAMP_CHARGE));
                break;
            case CUB_CAVALRY:
                List<Integer> cubCavalrySummons = new ArrayList<>() {{
                    add(CUB_CAVALRY_SUMMON_1);
                    add(CUB_CAVALRY_SUMMON_2);
                    add(CUB_CAVALRY_SUMMON_3);
                    add(CUB_CAVALRY_SUMMON_4);
                }};
                rect = chr.getRectAround(si.getFirstRect());
                if (!chr.isLeft()) {
                    rect = rect.horizontalFlipAround(chr.getPosition().getX());
                }
                int mobAmountInRange = chr.getField().getMobsInRect(rect).size();
                int minSummoned = si.getValue(x, slv); // 4
                int maxSummoned = si.getValue(y, slv); // 8
                int additionalSummons = mobAmountInRange / 3;
                int amountSummoned = Math.min(minSummoned + additionalSummons, maxSummoned);
                for (int i = 0; i < amountSummoned; i++) {
                    int skillId = Util.getRandomFromCollection(cubCavalrySummons);
                    Foothold fh = Util.getRandomFromCollection(field.getInfo().getFootholdsInRect(rect));
                    summon = Summon.getSummonByNoCTS(chr, skillId, slv);
                    var randPos = fh.getRandomPositionFromEdges(40);
                    summon.setPosition(new Position(randPos.getX(), randPos.getY()));
                    summon.setCurFoothold((short) fh.getId());
                    summon.setMoveAbility(MoveAbility.WalkAcrossFootHold);
                    summon.setFlip(new Random().nextBoolean());
                    summon.setAssistType(AssistType.WalkAttack);
                    field.spawnSummon(summon);
                }
                break;
            case AERIAL_RELIEF_SKILL_USE:
                o1.nOption = 1;
                o1.rOption = AERIAL_RELIEF;
                o1.tOption = 7; // no time skillStat
                tsm.putCharacterStatValue(IndieNotDamaged, o1, true);
                o2.nOption = 100;
                o2.rOption = AERIAL_RELIEF;
                o2.tOption = 7; // no time skillStat
                tsm.putCharacterStatValue(IndieAsrR, o2, true);
                break;
            case THE_GREATEST_SHOW_ON_MAPLE_WORLD_IS_COMING:
                var tOpt = si.getValue(time, slv);

                int[] summons = new int[] {
                        THE_GREATEST_SHOW_ON_MAPLE_WORLD_IS_COMING_BEAR,
                        THE_GREATEST_SHOW_ON_MAPLE_WORLD_IS_COMING_LEOPARD,
                        THE_GREATEST_SHOW_ON_MAPLE_WORLD_IS_COMING_HAWK,
                        THE_GREATEST_SHOW_ON_MAPLE_WORLD_IS_COMING_CAT,
                };
                for (var summonSkillId : summons) {
                    Summon sum = Summon.getSummonByNoCTS(chr, summonSkillId, slv);
                    field.spawnSummonAndRemoveOld(sum);
                    o1.summons.add(sum);
                }

                o1.nOption = 1;
                o1.rOption = skillID;
                o1.tOption = tOpt;
                tsm.putCharacterStatValue(IndieSummon, o1);
                break;
        }
        tsm.sendSetStatPacket();
    }

    private void modeChangeForGreatestShow(int oldNOption, int newNOption) {
        Field field = chr.getField();
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        var opt = tsm.getOptByCTSAndSkill(IndieSummon, THE_GREATEST_SHOW_ON_MAPLE_WORLD_IS_COMING);
        var addedSummonSkillId = THE_GREATEST_SHOW_ON_MAPLE_WORLD_IS_COMING_AA + oldNOption;
        var removedSummonSkillId = THE_GREATEST_SHOW_ON_MAPLE_WORLD_IS_COMING_AA + newNOption;

        if (addedSummonSkillId > THE_GREATEST_SHOW_ON_MAPLE_WORLD_IS_COMING_AA) {
            opt.summons.stream().filter(s -> s.getSkillID() == addedSummonSkillId).findFirst().ifPresent(field::spawnSummonAndRemoveOld);
        }

        if (removedSummonSkillId > THE_GREATEST_SHOW_ON_MAPLE_WORLD_IS_COMING_AA) {
            // Not actually removed. just in-game hidden
            opt.summons.stream().filter(s -> s.getSkillID() == removedSummonSkillId).findFirst().ifPresent(s -> chr.write(Summoned.assistSpecialAttackRequest(s, 25)));
        }
    }

    private void placeTheGreatestShowAA(Position position) {
        var skillId = THE_GREATEST_SHOW_ON_MAPLE_WORLD_IS_COMING_AA;
        AffectedArea aa = AffectedArea.getPassiveAA(chr, skillId, chr.getSkillLevel(THE_GREATEST_SHOW_ON_MAPLE_WORLD_IS_COMING));
        var si = SkillData.getSkillInfoById(skillId);
        aa.setPosition(position);
        aa.setRect(aa.getPosition().getRectAround(si.getFirstRect()));
        aa.setDuration(2000);
        chr.getField().spawnAffectedArea(aa);
        chr.addSkillCoolTime(skillId, 4000);
    }

    @Override
    public void onWarp(Field oldField, Field newField) {
        if (oldField != null) {
            for (Char fChr : oldField.getChars()) {
                if (fChr.equals(chr)) {
                    continue;
                }
                TemporaryStatManager fTsm = fChr.getTemporaryStatManager();
                List<Integer> removedSkills = new ArrayList<>();
                for (var options : fTsm.getCurrentStats().values()) {
                    for (var option : options) {
                        if (option.chr != null && option.chr.equals(chr)) {
                            removedSkills.add(option.rOption);
                        }
                    }
                }
                for (var removedSkill : removedSkills) {
                    fTsm.removeStatsBySkill(removedSkill);
                }
            }
        }

        super.onWarp(oldField, newField);
    }

    private void createDefensiveFormationForceAtom(SkillInfo si, int slv, List<Integer> targetList) {
        Field field = chr.getField();
        var count = 4;
        if (si != null) {
            count = si.getValue(bulletCount, slv);
        }
        ForceAtomEnum fae = ForceAtomEnum.DEFENSIVE_FORMATION;
        List<ForceAtomInfo> faiList = new ArrayList<>();
        var curTime = Util.getCurrentTime();
        Position chrPos = chr.getPosition();
        for (int i = 0; i < count; i++) {
            Mob mob = (Mob) field.getLifeByObjectID(Util.getRandomFromCollection(targetList));
            var mobPos = new Position();
            if (mob != null) {
                mobPos = mob.getPosition();
            }
            var fImpact = Util.getRandom(37, 45);
            var sImpact = Util.getRandom(6, 9);
            ForceAtomInfo fai = new ForceAtomInfo(chr.getNewForceAtomKey(), fae.getInc(), fImpact, sImpact,
                    (int) Util.getAngleOfTwoPositions(chrPos, mobPos), 200, curTime, 0, 0,
                    new Position());
            faiList.add(fai);
        }
        chr.createForceAtom(new ForceAtom(false, chr.getId(), chr.getId(), fae,
                true, targetList, DEFENSIVE_FORMATION, faiList, new Rect(), 0, 0,
                new Position(), 0, new Position(), 0));
    }

    @Override
    public void handleRemoveCTS(CharacterTemporaryStat cts, Option option) {
        if (cts.equals(CritterCrossing)) {
            List<Char> chrList = new ArrayList<>() {{add(chr);}};
            if (chr.getParty() != null) {
                chrList = chr.getParty().getPartyMembersInField(chr);
            }
            for (Char pChr : chrList) {
                TemporaryStatManager pTsm = pChr.getTemporaryStatManager();
                for (int modeId : buffsByMode.keySet()) {
                    for (int buffId : buffsByMode.get(modeId)) {
                        pTsm.removeStatsBySkill(buffId);
                    }
                }
            }
        }
        super.handleRemoveCTS(cts, option);
    }

    public static void beastTamerRegroup(Char chr) { // Handled in JobSkillHandler
/*        Party party = chr.getParty();
        if (party != null) {
            for (PartyMember pm : party.getOnlineMembers()) {
                Char pmChr = pm.getChr();
                if (pmChr.getId() != chr.getId() && pmChr.getChannel() == chr.getChannel() && pmChr.getLevel() > 9) {
                    pmChr.warp(chr.getField());
                    pmChr.write(FieldPacket.teleport(chr.getPosition(), pmChr));
                }
                pmChr.dispose();
            }
        }*/
    }

    // Hit related methods ---------------------------------------------------------------------------------------------


    public void reviveByBearReborn() {
        var slv = chr.getSkillLevel(BEAR_REBORN);
        chr.setSkillCooldown(BEAR_REBORN, slv);

        chr.heal(chr.getMaxHP(), false, true);
        chr.chatMessage("You have been revived by Bear Reborn.");

        Effect effect = Effect.skillAffected(BEAR_REBORN, (byte) 1, 0);
        chr.write(UserPacket.effect(effect));
        chr.getField().broadcastPacket(UserRemote.effect(chr.getId(), effect), chr);

        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        tsm.putCharacterStatValue(IndieNotDamaged, new Option(1, BEAR_REBORN, 10), true);
        tsm.sendSetStatPacket();
    }

    @Override
    public void setCharCreationStats(Char chr) {
        super.setCharCreationStats(chr);
        CharacterStat cs = chr.getAvatarData().getCharacterStat();
        cs.setPosMap(866101000);
        cs.setJob(11212);
        Item item = ItemData.getItemDeepCopy(1352810); // Secondary
        item.setBagIndex(BodyPart.Shield.getVal());
        chr.getEquippedInventory().addItem(item);
    }

    @Override
    public void handleLevelUp() {
        super.handleLevelUp();

        var level = chr.getLevel();

        // every 10 levels after 30, 10 times
        if (level >= 30 && level <= 120 && level % 10 == 0) {
            var masterySkill = chr.getSkill(BEAST_TAMER_MASTERY, true);
            masterySkill.setCurrentLevel(masterySkill.getCurrentLevel() + 1);
            chr.addSkillAndSendPacket(masterySkill);
        }

        if (level >= 60 && level < 90) {
            var growthSpurtSkill = chr.getSkill(GROWTH_SPURT, true);
            growthSpurtSkill.setCurrentLevel(growthSpurtSkill.getCurrentLevel() + 1);
            chr.addSkillAndSendPacket(growthSpurtSkill);

            var growthSpurtSkillSlvQr = chr.getQuestManager().getOrCreateQuestById(QuestConstants.GROWTH_SPURT_SLV);
            growthSpurtSkillSlvQr.setQrValue(String.valueOf(growthSpurtSkill.getCurrentLevel()));
            chr.write(WvsContext.message(MessagePacket.questRecordExMessage(growthSpurtSkillSlvQr)));
        }

        if (level == 150) {
            var beastlyResolve = chr.getSkill(BEASTLY_RESOLVE, true);
            beastlyResolve.setCurrentLevel(5);
            chr.addSkillAndSendPacket(beastlyResolve);
        }

        // 572 additional SP is required to max everything. Every 10 levels you get 40 sp (=560), with the last (140) giving 12 extra.
        if (level % 10 == 0) {
            chr.getAvatarData().getCharacterStat().addSp(level == 140 ? 52 : 40);
            Map<Stat, Object> stats = new HashMap<>();
            stats.put(Stat.sp, chr.getAvatarData().getCharacterStat().getSp());
            chr.write(WvsContext.statChanged(stats));
        }
    }
}