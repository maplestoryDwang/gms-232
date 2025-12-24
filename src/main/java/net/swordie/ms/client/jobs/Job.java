package net.swordie.ms.client.jobs;

import net.swordie.ms.client.Client;
import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.CharacterStat;
import net.swordie.ms.client.character.info.HitInfo;
import net.swordie.ms.client.character.items.BodyPart;
import net.swordie.ms.client.character.items.Equip;
import net.swordie.ms.client.character.items.Item;
import net.swordie.ms.client.character.runestones.RuneStone;
import net.swordie.ms.client.character.skills.*;
import net.swordie.ms.client.character.skills.atom.forceatom.ForceAtom;
import net.swordie.ms.client.character.skills.atom.forceatom.ForceAtomCollisionInfo;
import net.swordie.ms.client.character.skills.debuff.DebuffUtil;
import net.swordie.ms.client.character.skills.info.*;
import net.swordie.ms.client.character.skills.shootobject.ShootObjectSkillInfo;
import net.swordie.ms.client.character.skills.temp.CharacterTemporaryStat;
import net.swordie.ms.client.character.skills.temp.TemporaryStatBase;
import net.swordie.ms.client.character.skills.temp.TemporaryStatManager;
import net.swordie.ms.client.character.skills.vmatrix.MatrixRecord;
import net.swordie.ms.client.jobs.adventurer.BeastTamer;
import net.swordie.ms.client.jobs.adventurer.Kinesis;
import net.swordie.ms.client.jobs.adventurer.archer.Pathfinder;
import net.swordie.ms.client.jobs.adventurer.magician.Bishop;
import net.swordie.ms.client.jobs.adventurer.warrior.DarkKnight;
import net.swordie.ms.client.jobs.adventurer.warrior.Hero;
import net.swordie.ms.client.jobs.adventurer.warrior.Paladin;
import net.swordie.ms.client.jobs.common.*;
import net.swordie.ms.client.jobs.cygnus.BlazeWizard;
import net.swordie.ms.client.jobs.cygnus.Mihile;
import net.swordie.ms.client.jobs.cygnus.NightWalker;
import net.swordie.ms.client.jobs.cygnus.WindArcher;
import net.swordie.ms.client.jobs.flora.Adele;
import net.swordie.ms.client.jobs.legend.Evan;
import net.swordie.ms.client.jobs.legend.Phantom;
import net.swordie.ms.client.jobs.legend.Shade;
import net.swordie.ms.client.jobs.nova.Kain;
import net.swordie.ms.client.jobs.nova.Kaiser;
import net.swordie.ms.client.jobs.resistance.Xenon;
import net.swordie.ms.client.jobs.sengoku.Kanna;
import net.swordie.ms.client.party.Party;
import net.swordie.ms.client.party.PartyMember;
import net.swordie.ms.connection.InPacket;
import net.swordie.ms.connection.packet.*;
import net.swordie.ms.connection.packet.field.FieldPacket;
import net.swordie.ms.constants.*;
import net.swordie.ms.enums.*;
import net.swordie.ms.events.Events;
import net.swordie.ms.handlers.executors.EventManager;
import net.swordie.ms.life.AffectedArea;
import net.swordie.ms.life.Familiar;
import net.swordie.ms.life.Life;
import net.swordie.ms.life.Summon;
import net.swordie.ms.life.mob.Mob;
import net.swordie.ms.life.mob.MobStat;
import net.swordie.ms.life.mob.MobTemporaryStat;
import net.swordie.ms.life.mob.skill.BurnedInfo;
import net.swordie.ms.life.mob.skill.MobSkillID;
import net.swordie.ms.loaders.ItemData;
import net.swordie.ms.loaders.SkillData;
import net.swordie.ms.loaders.StringData;
import net.swordie.ms.loaders.VCoreData;
import net.swordie.ms.loaders.containerclasses.SkillStringInfo;
import net.swordie.ms.loaders.containerclasses.VCoreInfo;
import net.swordie.ms.util.Position;
import net.swordie.ms.util.Rect;
import net.swordie.ms.util.Util;
import net.swordie.ms.world.WorldType;
import net.swordie.ms.world.field.Field;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.util.*;
import java.util.concurrent.ScheduledFuture;
import java.util.concurrent.TimeUnit;
import java.util.stream.Collectors;

import static net.swordie.ms.client.character.skills.BypassCooldownCheckType.BypassCheck;
import static net.swordie.ms.client.character.skills.BypassCooldownCheckType.BypassCheckAndCooldown;
import static net.swordie.ms.client.character.skills.SkillStat.*;
import static net.swordie.ms.client.character.skills.temp.CharacterTemporaryStat.*;
import static net.swordie.ms.client.jobs.adventurer.warrior.Paladin.DIVINE_ECHO_MIMIC;
import static net.swordie.ms.client.jobs.adventurer.warrior.Paladin.PARASHOCK_GUARD;
import static net.swordie.ms.client.jobs.cygnus.Mihile.*;


/**
 * Created on 1/2/2018.
 */
public abstract class Job {
    private static final Logger log = LogManager.getLogger();
    protected String resolution = ""; // For Custom Screen Effects
    protected Char chr;

    private HashMap<CharacterTemporaryStat, ScheduledFuture> ctsTimers = new HashMap<>();


    private static List<ICommonSkillHandler> getCommonSkillHandlers(Char chr) {
        return Arrays.asList(
                // Common Skills
                new DecentSkillHandler(chr),
                new GuildSkillHandler(chr),
                new ItemSkillHandler(chr),
                new OzSkillHandler(chr),
                new SoulSkillHandler(chr),
                new SpecialNodeSkillHandler(chr),

                new LinkSkillHandler(chr),

                // Maple Warrior
                new MapleWarriorSkillHandler(chr), // Handle only skills that are in 'SkillConstants.isMapleWarriorSkill'

                // Hero Will
                new HeroWillSkillHandler(chr) // Handle only skills that are in 'SkillConstants.isHeroWillSkill'
        );
    }


    public static final int OVERCOMING_TERROR = 80002537;

    public static final int HYPER_STAT_ARCANE_FORCE = 80000421;


    public static final int REBOOT = 80000186;
    public static final int REBOOT2 = 80000187;

    public static final int MAPLERUNNER_DASH = 80001965;


    /* Exclusive Spells */
    public static final int EXCLUSIVE_SPELL_KAISER = 60001005;
    public static final int EXCLUSIVE_SPELL_AB = 60011005;
    public static final int EXCLUSIVE_SPELL_CADENA = 60021005;
    public static final int EXCLUSIVE_SPELL_ILLIUM = 150001005;
    public static final int EXCLUSIVE_SPELL_ARK = 150011005;
    public static final int EXCLUSIVE_SPELL_ADELE = 150021005;
    public static final int EXCLUSIVE_SPELL_HOYOUNG = 160001005;
    public static final int EXCLUSIVE_SPELL_LARA = 160011005;


    /* Active Link Skills */
    public static final int CLOSE_CALL_SHADE_LINK = 80000169;
    public static final int CLOSE_CALL_SHADE_LINK_ORIGINAl = 20050286;
    public static final int SOLUS_ARK_LINK = 80000514;
    public static final int TIDE_OF_BATTLE = 80000268;
    public static final int TERMS_AND_CONDITION_AB_LINK = 80001155;
    public static final int TERMS_AND_CONDITION_AB_LINK_ORIGINAL = 60011219;
    public static final int KNIGHT_WATCH = 80001140;
    public static final int KNIGHT_WATCH_ORIGINAL = 50001214;
    public static final int INVINCIBLE_BELIEF = 80002758;
    public static final int EMPIRICAL_KNOWLEDGE = 80002762;
    public static final int ADVENTURERS_CURIOSITY = 80002766;
    public static final int THIEFS_CUNNING = 80002770;
    public static final int PIRATE_BLESSING = 80002774;
    public static final int SPIRIT_OF_FREEDOM = 80000329;


    public static final int[] REMOVE_ON_STOP = new int[]{
            MAPLERUNNER_DASH
    };

    public static final int[] REMOVE_ON_WARP = new int[]{
            MAPLERUNNER_DASH,

            // Runes
            RuneStone.LIBERATE_THE_RUNE_OF_PURIFICATION,
            RuneStone.LIBERATE_THE_RUNE_OF_MIGHT,
            RuneStone.LIBERATE_THE_RUNE_OF_MIGHT_2,
            RuneStone.LIBERATE_THE_RUNE_OF_CONTACT,
            RuneStone.LIBERATE_THE_RUNE_OF_IGNITION
    };

    public static final int MAPLE_TREE_OF_PEACE = 80002593;


    // Common V Skills
    public static final int ROPE_LIFT = 400001000;
    public static final int DECENT_MYSTIC_DOOR_V = 400001001;
    public static final int DECENT_SHARP_EYES_V = 400001002;
    public static final int DECENT_HYPER_BODY_V = 400001003;
    public static final int DECENT_COMBAT_ORDERS_V = 400001004;
    public static final int DECENT_ADV_BLESSING_V = 400001005;
    public static final int DECENT_SPEED_INFUSION_V = 400001006;
    public static final int DECENT_HOLY_SYMBOL = 400001020;
    public static final int ERDA_NOVA = 400001008;
    public static final int WILL_OF_ERDA = 400001009;
    public static final int ERDA_SHOWER = 400001036;

    public static final int TRUE_ARACHNID_REFLECTION_SKILL_USE = 400001039;
    public static final int TRUE_ARACHNID_REFLECTION_SUMMON_1 = 400001040;
    public static final int TRUE_ARACHNID_REFLECTION_SUMMON_2 = 400001041;

    // First Branch V Skills
    public static final int WEAPON_AURA = 400011000;
    public static final int MANA_OVERLOAD = 400021000;
    public static final int GUIDED_ARROW = 400031000;
    public static final int GUIDED_ARROW_ATOM = 400031001;
    public static final int VENOM_BURST_HIDDEN = 400040000;
    public static final int VENOM_BURST = 400041000;
    public static final int VENOM_BURST_ATTACK = 400041030;
    public static final int LOADED_DICE = 400051000;
    public static final int LUCKY_DICE = 400051001;

    // Second Branch V Skills
    public static final int IMPENETRABLE_SKIN = 400011066;
    public static final int ETHEREAL_FORM = 400021060;
    public static final int VICIOUS_SHOT = 400031023;
    public static final int LAST_RESORT = 400041032;
    public static final int OVERDRIVE = 400051033;

    // Race V Skills
    public static final int FREUDS_WISDOM = 400001024;
    public static final int FREUDS_WISDOM_1 = 400001025;
    public static final int FREUDS_WISDOM_2 = 400001026;
    public static final int FREUDS_WISDOM_3 = 400001027;
    public static final int FREUDS_WISDOM_4 = 400001028;
    public static final int FREUDS_WISDOM_5 = 400001029;
    public static final int FREUDS_WISDOM_6 = 400001030;

    public static final int RESISTANCE_INFANTRY_1 = 400001019;
    public static final int RESISTANCE_INFANTRY_2 = 400001022;

    public static final int SENGOKU_FORCE_ASSEMBLE = 400001031;
    public static final int SENGOKU_FORCE_TAKEDA = 400001035;
    public static final int SENGOKU_FORCE_AYAME = 400001034;
    public static final int SENGOKU_FORCE_HARUAKI = 400001033;
    public static final int SENGOKU_FORCE_UESUGI = 400001032;

    public static final int MIGHT_OF_THE_NOVA = 400001014;
    public static final int MIGHT_OF_THE_NOVA_BUFF = 400001015;

    public static final int CONVERSION_OVERDRIVE = 400001037;
    public static final int CONVERSION_OVERDRIVE_ATTACK = 400001038;


    // V skill Blessings
    public static final int MAPLE_WORLD_GODDESS_BLESSING = 400001042;

    public static final int EMPRESS_CYGNUS_BLESSING = 400001043;

    public static final int TRANSCENDENCE_BLESSING_2 = 400001044;
    public static final int TRANSCENDENCE_BLESSING = 400001045;
    public static final int TRANSCENDENCE_BLESSING_3 = 400001056;

    public static final int GRANDIS_BLESSING = 400001046;
    public static final int GRANDIS_BLESSING_NOVA = 400001047;
    public static final int GRANDIS_BLESSING_FLORA = 400001048;
    public static final int GRANDIS_BLESSING_ANIMA = 400001049;

    public static final int OTHERWORLD_GODDESS_BLESSING = 400001050;
    public static final int BLESSING_OF_RECOVERY = 400001051;
    public static final int AEGIS_BLESSING = 400001053;
    public static final int BLESSING_OF_FORTITUDE = 400001054;
    public static final int OTHERWORLDY_VOID = 400001055;

    public static final int PRINCESS_SAKUNOS_BLESSING = 400001057;


    private static final int[] otherworldBlessings = new int[] {
            BLESSING_OF_RECOVERY,
            AEGIS_BLESSING,
            BLESSING_OF_FORTITUDE,
            OTHERWORLDY_VOID,
    };





    //region Job Logic methods  ----------------------------------------------------------------------------------------
    public Job(Char chr) {
        this.chr = chr;

        if (chr.getClient() != null && chr.getClient().getWorld().getWorldType() == WorldType.Reboot) {
            if (!chr.hasSkill(REBOOT)) {
                Skill skill = SkillData.getSkillDeepCopyById(REBOOT);
                skill.setCurrentLevel(1);
                chr.addSkill(skill);
            }
        }

        var qm = chr.getQuestManager();
        if (chr.getLevel() >= 140 && !qm.hasQuestCompleted(QuestConstants.VOYAGE_PRE_QUEST)) {
            chr.getQuestManager().completeQuest(QuestConstants.VOYAGE_PRE_QUEST); // Voyage
        }
    }



    public abstract boolean isHandlerOfJob(short id);



    public SkillInfo getInfo(int skillID) {
        return SkillData.getSkillInfoById(skillID);
    }



    protected Char getChar() {
        return chr;
    }
    //endregion Job Logic methods  -------------------------------------------------------------------------------------



    //region Attack related methods ------------------------------------------------------------------------------------
    public void handleAttack(Client c, AttackInfo attackInfo) {
        Char chr = c.getChr();
        if(chr == null || !chr.isOnline() || chr.getUser() == null) {
            log.error(String.format("[CharId: %d] Tried handling attack for char while being offline.", chr.getId()));
            c.write(WvsContext.returnToTitle());
            c.close();
            return;
        }
        if (chr.isSkillInfoMode()) {
            SkillStringInfo ssi = StringData.getSkillStringById(attackInfo.skillId);
            if (ssi != null) {
                chr.chatMessage(ChatType.Mob, "Name: " + ssi.getName());
                chr.chatMessage(ChatType.Mob, "Desc: " + ssi.getDesc());
                chr.chatMessage(ChatType.Mob, "h: " + ssi.getH());
            }
        }
        Field field = chr.getField();
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        Skill skill = SkillData.getSkillDeepCopyById(attackInfo.skillId);
        int skillID = 0;
        SkillInfo si = null;
        boolean hasHitMobs = attackInfo.mobAttackInfo.size() > 0;
        int slv = 0;
        if (skill != null) {
            si = SkillData.getSkillInfoById(skill.getSkillId());
            slv = (byte) chr.getSkillLevel(skill.getSkillId());
            skillID = skill.getSkillId();
        }

        // Familiar Exp Obtain
        if (chr.getFamiliarCodexManager() != null && chr.getFamiliarCodexManager().isFamiliarsSummoned()) {
            for (MobAttackInfo mai : attackInfo.mobAttackInfo) {
                if (mai.mobDies) {
                    for (Familiar f : chr.getField().getFamiliarsByChrId(chr.getId())) {
                        if (f.isMaxLv()) {
                            continue;
                        }
                        f.incLvExp(GameConstants.EXP_PER_KILL);
                        if (f.canLevelUp()) {
                            f.doLevelUp(chr);
                        }
                    }
                }
            }
        }

        if (tsm.hasStat(GuidedArrow) && !SkillConstants.isForceAtomSkill(attackInfo.skillId) && hasHitMobs) {
            guideGuidedArrowForceAtom(attackInfo);
        }

        if (SkillConstants.getOriginAndLinkByStackingLink(EMPIRICAL_KNOWLEDGE).stream().mapToInt(chr::getSkillLevel).sum() > 0) {
            empiricalKnowledge(attackInfo);
        }


        venomBurstPassiveDoT(attackInfo);


        if (hasHitMobs) {
            var totaldmg = attackInfo.totalDamageDealt;
            vampiricTouch(totaldmg);

            // Recover HP  as % of total dmg done
            if (chr.getTotalStat(BaseStat.hpDrain) > 0) {
                int healedR = Math.min(chr.getTotalStat(BaseStat.hpDrain), 100);
                int healed = (int) ((healedR / 100D) * totaldmg);
                chr.heal(Math.min(chr.getMaxHP(), Math.max(0, healed)));
            }
            // Recover MP  as % of total dmg done
            if (chr.getTotalStat(BaseStat.mpDrain) > 0) {
                int healedR = Math.min(chr.getTotalStat(BaseStat.mpDrain), 100);
                int healed = (int) ((healedR / 100D) * totaldmg);
                chr.healMP(Math.min(chr.getMaxMP(), Math.max(0, healed)));
            }


            // 70% chance to recover X% of MaxHP
            if (chr.getTotalStat(BaseStat.onHitHpRecoveryR) > 0 && !chr.hasSkillOnCooldown(SkillChangeConstants.LEGION_CHANCE_HEAL_HP_SKILLID) && Util.succeedProp(SkillChangeConstants.CHANCE_TO_HEAL_HP)) {
                chr.addSkillCoolTime(SkillChangeConstants.LEGION_CHANCE_HEAL_HP_SKILLID, SkillChangeConstants.HEAL_COOLTIME); // Legion  |  70% chance HP heal
                chr.heal(chr.getHPPerc(Math.min(100, chr.getTotalStat(BaseStat.onHitHpRecoveryR))));
            }
            // 70% chance to recover X% of MaxMP
            if (chr.getTotalStat(BaseStat.onHitMpRecoveryR) > 0 && !chr.hasSkillOnCooldown(SkillChangeConstants.LEGION_CHANCE_HEAL_MP_SKILLID) && Util.succeedProp(SkillChangeConstants.CHANCE_TO_HEAL_MP)) {
                chr.addSkillCoolTime(SkillChangeConstants.LEGION_CHANCE_HEAL_MP_SKILLID, SkillChangeConstants.HEAL_COOLTIME); // Legion  |  70% chance MP heal
                chr.healMP(chr.getMPPerc(Math.min(100, chr.getTotalStat(BaseStat.onHitMpRecoveryR))));
            }


            // Purification Rune
            if (tsm.hasStatBySkillId(RuneStone.LIBERATE_THE_RUNE_OF_PURIFICATION)) {
                doPurificationRune(attackInfo);
            }

            if (tsm.hasStatBySkillId(RuneStone.LIBERATE_THE_RUNE_OF_IGNITION) && !chr.hasSkillOnCooldown(RuneStone.LIBERATE_THE_RUNE_OF_IGNITION)) {
                chr.write(FieldPacket.registerExtraSkill(chr, RuneStone.LIBERATE_THE_RUNE_OF_IGNITION, Collections.singletonList(RuneStone.LIBERATE_THE_RUNE_OF_IGNITION)));
                chr.addSkillCoolTime(RuneStone.LIBERATE_THE_RUNE_OF_IGNITION, 2000);
            }

            //Pierre Hat functionality
            if (tsm.hasStat(CapDebuff)) {
                int msID = tsm.getOption(CapDebuff).rOption & 0xFFFF;
                boolean isRed = msID == MobSkillID.CapDebuffRed.getVal();
                for (MobAttackInfo mobAttackInfo : attackInfo.mobAttackInfo) {
                    int multiplier = 1;

                    if (mobAttackInfo.mob.getTemplateId() == BossConstants.PIERRE_CHAOS_RED || mobAttackInfo.mob.getTemplateId() == BossConstants.PIERRE_NORMAL_RED) {
                        multiplier = isRed ? -1 : 2;
                    } else if (mobAttackInfo.mob.getTemplateId() == BossConstants.PIERRE_CHAOS_BLUE || mobAttackInfo.mob.getTemplateId() == BossConstants.PIERRE_NORMAL_BLUE) {
                        multiplier = isRed ? 2 : -1;
                    }
                    for(int i = 0; i < mobAttackInfo.damages.length; i++) {
                        mobAttackInfo.damages[i] *= multiplier;
                    }
                    mobAttackInfo.totalDamage *= multiplier;
                }
            }


            Events.onAttack(chr, attackInfo);

            // Kain - Incarnation
            if (tsm.hasStat(IncarnationAura)) { // has Incarnation Aura
                var opt = tsm.getOption(IncarnationAura);
                var ownerId = opt.xOption;
                if (ownerId != chr.getId()) { // is Not the owner of the Aura
                    var owner = field.getCharByID(ownerId);
                    if (owner != null && JobConstants.isKain(owner.getJob()) && owner.hasSkill(Kain.DEATH_BLESSING)) { // owner must not be null, be a Kainm and have Death Blessing skill
                        ((Kain) owner.getJobHandler()).materialiseDeathBlessingViaIncarnation(attackInfo);
                    }
                }
            }
        }


        /**
         *
         * Common Skills handled in separate classes as to not bloat the Job.java class with all non-class skills
         *
         */
        getCommonSkillHandlers(chr).forEach(handler -> handler.handleAttack(c, attackInfo));



        // Special Node Activation
        chr.getSpecialNode().activateSpecialNode("Count", chr, attackInfo);

        Option o1 = new Option();
        Option o2 = new Option();
        Option o3 = new Option();
        Option o4 = new Option();
        switch (skillID) {
            case ERDA_SHOWER:
                chr.reduceSkillCoolTime(skillID, 1000 * attackInfo.mobAttackInfo.size());
                break;
            case ERDA_NOVA:
                o1.nOption = 1;
                o1.rOption = skillID;
                o1.tOption = si.getValue(time, slv);

                DebuffUtil.applyDebuffOnMobs(chr, MobStat.Stun, o1, attackInfo.getMobIds());
                break;
            case MIGHT_OF_THE_NOVA:
                if (tsm.hasStatBySkillId(Bishop.HEAVENS_DOOR)) {
                    return;
                }
                si = SkillData.getSkillInfoById(MIGHT_OF_THE_NOVA_BUFF);
                o1.nOption = 1;
                o1.rOption = MIGHT_OF_THE_NOVA_BUFF;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(ReviveOnce, o1, true);
                tsm.sendSetStatPacket();
                break;
            case CONVERSION_OVERDRIVE_ATTACK:
                si = SkillData.getSkillInfoById(CONVERSION_OVERDRIVE);
                slv = (byte) chr.getSkillLevel(CONVERSION_OVERDRIVE);
                chr.addSkillCoolTime(CONVERSION_OVERDRIVE_ATTACK, si.getValue(x, slv) * 1000);
                break;
            case TRUE_ARACHNID_REFLECTION_SKILL_USE:
                Summon arachnid = Summon.getSummonBy(chr, TRUE_ARACHNID_REFLECTION_SUMMON_1, slv);
                arachnid.setAssistType(AssistType.SequenceAttack);
                arachnid.setMoveAbility(MoveAbility.Stop);
                arachnid.setTemplateId(0);
                field.spawnSummonAndRemoveOld(arachnid);
                break;
        }
    }



    private void doPurificationRune(AttackInfo attackInfo) {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        var skillId = RuneStone.LIBERATE_THE_RUNE_OF_PURIFICATION;
        Field field = chr.getField();
        Summon purificationSummon = field.getSummonByChrAndSkillId(chr, skillId);
        if (purificationSummon == null || tsm.getOption(RuneOfPurification).nOption == 2) {
            return;
        }
        var inc = Util.getRandom(6, 9);
        ForceAtomEnum fae = ForceAtomEnum.RUNE_OF_PURIFICATION_1;
        for (MobAttackInfo mai : attackInfo.mobAttackInfo) {
            Mob mob = mai.mob;
            if (mob == null) {
                continue;
            }

            mob.getField().broadcastPacket(MobPool.specialSelectedEffectBySkill(mob, skillId, chr.getId()));
            ForceAtomInfo fai = new ForceAtomInfo(chr.getNewForceAtomKey(), inc, 35, 5,
                    0, 0, Util.getCurrentTime(), 0, 0,
                    new Position());
            chr.createForceAtom(new ForceAtom(true, chr.getId(), mob.getObjectId(), fae,
                    false, mob.getObjectId(), skillId, fai, mob.getRectAround(new Rect(-200, -200, 200, 200)), 0, 0,
                    purificationSummon.getPosition(), 0, purificationSummon.getPosition(), 0));
        }

        Option o = new Option();
        var gauge = tsm.getOption(RuneOfPurification).xOption;
        var newGauge = Math.min(1000, gauge + (5 * attackInfo.mobCount));
        o.nOption = newGauge >= 1000 ? 2 : 1; // 2 means attack | 1 means gather energy
        o.rOption = skillId;
        o.tOption = (int) tsm.getRemainingTime(RuneOfPurification, skillId);
        o.xOption = newGauge;
        o.setInMillis(true);
        tsm.putCharacterStatValue(RuneOfPurification, o, true);
        tsm.sendSetStatPacket();
    }



    private void empiricalKnowledge(AttackInfo attackInfo) {
        Mob selectedMob = getMobForEmpiricalKnowledge(attackInfo);
        if (selectedMob == null) {
            return;
        }

        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        Option o = new Option();

        SkillInfo si = SkillData.getSkillInfoById(EMPIRICAL_KNOWLEDGE);
        int slv = SkillConstants.getOriginAndLinkByStackingLink(EMPIRICAL_KNOWLEDGE).stream().mapToInt(s -> chr.getSkillLevel(s)).sum();

        if (!Util.succeedProp(si.getValue(prop, slv)) || slv <= 0) {
            return;
        }

        int stack = 1;
        int maxStack = si.getValue(x, slv);

        if (tsm.hasStat(EmpiricalKnowledge) && tsm.getOption(EmpiricalKnowledge).xOption == selectedMob.getObjectId()) {
            stack = tsm.getOption(EmpiricalKnowledge).nOption;
            if (stack < maxStack) {
                stack++;
            }
        }

        o.nOption = stack;
        o.rOption = si.getSkillId();
        o.tOption = si.getValue(time, slv);
        o.xOption = selectedMob.getObjectId();

        tsm.putCharacterStatValue(EmpiricalKnowledge, o, true);
        tsm.sendSetStatPacket();
    }



    private Mob getMobForEmpiricalKnowledge(AttackInfo attackInfo) {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        Field field = chr.getField();
        int curMobObjId = tsm.hasStat(EmpiricalKnowledge) ? tsm.getOption(EmpiricalKnowledge).xOption : -1;

        boolean hitsPrevMob = attackInfo.mobAttackInfo.stream().anyMatch(mai -> mai.mobId == curMobObjId);

        if (hitsPrevMob) {
            Mob mob = (Mob) field.getLifeByObjectID(curMobObjId);
            return mob;
        } else {
            List<Mob> mobList = new ArrayList<>();
            boolean hasBossMob = false;
            for (MobAttackInfo mai : attackInfo.mobAttackInfo) {
                Mob mob = mai.mob;
                if (mob == null) {
                    continue;
                }
                mobList.add(mob);
                if (mob.isBoss()) {
                    hasBossMob = true;
                }
            }
            return hasBossMob ? mobList.stream().filter(Mob::isBoss).findAny().orElse(null) : mobList.stream().findAny().orElse(null);
        }
    }



    private void doVenomBurst() {
        if (!chr.hasSkill(VENOM_BURST)) {
            return;
        }

        var maxMobsHit = 10;
        SkillInfo si = SkillData.getSkillInfoById(VENOM_BURST);
        Rect rect = chr.getPosition().getRectAround(si.getFirstRect());
        Field field = chr.getField();
        List<Integer> hitMobs = new ArrayList<>();
        List<Mob> mobs = field.getMobsInRect(rect);
        Set<Integer> skillDots = new HashSet<>();
        for (Mob mob : mobs) {
            if (hitMobs.size() >= maxMobsHit) {
                break;
            }
            MobTemporaryStat mts = mob.getTemporaryStat();
            if (mts.hasBurnFromOwner(chr.getId())) {
                long dmg = 0;
                Set<BurnedInfo> removedBis = mts.getBurnsFromOwner(chr.getId());
                removedBis.forEach(bi -> skillDots.add(bi.getSkillId()));
                for (var bi : removedBis) {
                    dmg += bi.getRemainingDamage();
                }
                mts.removeBurnedInfosByChr(chr);
                if (dmg > 0) {
                    mob.damageBySkill(chr, VENOM_BURST, chr.getSkillLevel(VENOM_BURST), 1, dmg);
                }

                if (mob.isAlive()) {
                    hitMobs.add(mob.getObjectId());
                }
            }
        }
        for (Mob mob : mobs.stream().limit(maxMobsHit).collect(Collectors.toList())) {
            if (hitMobs.contains(mob.getObjectId())) {
                continue;
            }
            MobTemporaryStat mts = mob.getTemporaryStat();
            if (!mts.hasBurnFromOwner(chr.getId())) {
                for (int skillId : skillDots) {
                    mts.createAndAddBurnedInfo(chr, skillId, chr.getSkillLevel(skillId));
                }
            }
        }
        if (hitMobs.size() > 0 && hitMobs.size() <= maxMobsHit) {
            chr.write(UserLocal.userBonusAttackRequest(VENOM_BURST_ATTACK, hitMobs));
        }
    }



    private void venomBurstPassiveDoT(AttackInfo attackInfo) {
        if (!chr.hasSkill(VENOM_BURST)) {
            return;
        }

        var slv = chr.getSkillLevel(VENOM_BURST);
        for (MobAttackInfo mai : attackInfo.mobAttackInfo) {
            Mob mob = mai.mob;
            if (mob == null) {
                continue;
            }
            MobTemporaryStat mts = mob.getTemporaryStat();
            mts.createAndAddBurnedInfo(chr, VENOM_BURST_HIDDEN, slv);
        }
    }



    private void guideGuidedArrowForceAtom(AttackInfo attackInfo) {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        Field field = chr.getField();
        int faKey = tsm.getOption(GuidedArrow).xOption;
        Rect rect = chr.getRectAround(new Rect(-350, -150, 100, 50));
        if (!chr.isLeft()) {
            rect = rect.horizontalFlipAround(chr.getPosition().getX());
        }
        Mob mob = attackInfo.mobAttackInfo.stream().map(mai -> mai.mob).filter(Objects::nonNull).findFirst().orElse(null);
        if (mob == null) {
            if (field.getMobsInRect(rect).size() <= 0) {
                return;
            }
            mob = Util.getRandomFromCollection(field.getMobsInRect(rect));
        }
        chr.getField().broadcastPacket(FieldPacket.guideForceAtom(chr.getId(), faKey, mob.getObjectId()));
    }



    public void bonusConversionOverdriveAttack() {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        if (!JobConstants.isFlora(chr.getJob()) || !chr.hasSkill(CONVERSION_OVERDRIVE) || !tsm.hasStat(ConversionOverdrive) || chr.hasSkillOnCooldown(CONVERSION_OVERDRIVE_ATTACK)) {
            return;
        }

        chr.write(UserLocal.userBonusAttackRequest(CONVERSION_OVERDRIVE_ATTACK));
        chr.addSkillCoolTime(CONVERSION_OVERDRIVE_ATTACK, 4000);


        // Update Damage
        var remainingTime = tsm.getRemainingTime(ConversionOverdrive, CONVERSION_OVERDRIVE);
        tsm.removeStatsBySkill(CONVERSION_OVERDRIVE);
        Option o1 = new Option();
        Option o2 = new Option();

        o1.nOption = 1;
        o1.rOption = CONVERSION_OVERDRIVE;
        o1.tOption = (int) remainingTime;
        o1.setInMillis(true);
        tsm.putCharacterStatValue(ConversionOverdrive, o1);

        var max = chr.getSkillStatValue(y, CONVERSION_OVERDRIVE);
        var dmgInc = (int) ((chr.getMP() / ((double) chr.getMaxMP())) * max);
        o2.nOption = dmgInc;
        o2.rOption = CONVERSION_OVERDRIVE;
        o2.tOption = (int) remainingTime;
        o2.setInMillis(true);
        tsm.putCharacterStatValue(IndieDamR, o2);

        tsm.sendSetStatPacket();
    }



    public int getFinalAttackSkill() {
        return 0;
    }
    //endregion Attack related methods ---------------------------------------------------------------------------------



    //region Skill related methods -------------------------------------------------------------------------------------
    public void handleSkill(Char chr, TemporaryStatManager tsm, int skillId, int slv, InPacket inPacket, SkillUseInfo skillUseInfo) {
        Option o1 = new Option();
        Option o2 = new Option();
        Option o3 = new Option();
        Option o4 = new Option();
        Option o5 = new Option();
        Option o6 = new Option();
        Option o7 = new Option();

        if (chr.isSkillInfoMode()) {
            SkillStringInfo ssi = StringData.getSkillStringById(skillId);
            if (ssi != null) {
                chr.chatMessage(ChatType.Mob, "Name: " + ssi.getName());
                chr.chatMessage(ChatType.Mob, "Desc: " + ssi.getDesc());
                chr.chatMessage(ChatType.Mob, "h: " + ssi.getH());
            }
        }

        Skill skill = SkillData.getSkillDeepCopyById(skillId);
        SkillInfo si = null;
        if (skill != null) {
            si = SkillData.getSkillInfoById(skillId);
        }
        Summon summon;
        Field field = chr.getField();
        // Special Node Activation
        chr.getSpecialNode().activateSpecialNode("cooltime", chr, null);


        /**
         *
         * Common Skills handled in separate classes as to not bloat the Job.java class with all non-class skills
         *
         */
        getCommonSkillHandlers(chr).forEach(handler -> handler.handleSkill(chr, tsm, skillId, slv, inPacket, skillUseInfo));


        // Exclusive Spell
        if (SkillConstants.isExclusiveSpellSkill(skillId)) {
            giveExclusiveSpell(skillId);
        }

        if (chr.hasSkill(skillId) && si.getVehicleId() > 0 && !SkillConstants.isJobHandledVehicleSkill(skillId)) {
            doRideVehicle(tsm, skillId, si);
        } else if (SkillConstants.isHomeTeleportSkill(skillId)) {
            doHomeTeleport(chr, slv, o1, si);
        } else {
            int noviceSkill = SkillConstants.getNoviceSkillFromRace(skillId);
            if (noviceSkill == 1085 || noviceSkill == 1087 || noviceSkill == 1090 || noviceSkill == 1179) {
                summon = Summon.getSummonBy(chr, skillId, slv);
                summon.setMoveAction((byte) 4);
                summon.setAssistType(AssistType.Heal);
                summon.setFlyMob(true);
                field.spawnSummonAndRemoveOld(summon);
            }
            // TOOD: make sure user owns skill
            switch (skillId) {
                case MAPLE_TREE_OF_PEACE:
                    summon = Summon.getSummonBy(chr, skillId, slv);
                    summon.setMoveAbility(MoveAbility.Stop);
                    field.spawnSummonAndRemoveOld(summon);
                    break;
                case VENOM_BURST:
                    doVenomBurst();
                    break;
                case MAPLERUNNER_DASH:
                    o1.rOption = o2.rOption = skillId;
                    o1.tOption = o2.tOption = si.getValue(time, slv);
                    o1.nOption = si.getValue(indieForceJump, slv);
                    tsm.putCharacterStatValue(IndieForceJump, o1);
                    o2.nOption = si.getValue(indieForceSpeed, slv);
                    tsm.putCharacterStatValue(IndieForceSpeed, o2);
                    break;

                case DECENT_SHARP_EYES_V:
                    // Short nOption is split in  2 bytes,  first one = CritDmg  second one = Crit%
                    int cr = si.getValue(x, slv);
                    int crDmg = si.getValue(y, slv);
                    o1.nOption = (cr << 8) + crDmg;
                    o1.rOption = skillId;
                    o1.tOption = si.getValue(time, slv);
                    o1.xOption = cr;
                    o1.yOption = crDmg;
                    tsm.putCharacterStatValue(SharpEyes, o1);
                    break;
                case DECENT_HYPER_BODY_V:
                    o2.nOption = si.getValue(x, slv);
                    o2.rOption = skillId;
                    o2.tOption = si.getValue(time, slv);
                    tsm.putCharacterStatValue(IndieMHPR, o2);
                    o3.nOption = si.getValue(y, slv);
                    o3.rOption = skillId;
                    o3.tOption = si.getValue(time, slv);
                    tsm.putCharacterStatValue(IndieMMPR, o3);
                    break;
                case DECENT_COMBAT_ORDERS_V:
                    o1.nOption = 1;
                    o1.rOption = skillId;
                    o1.tOption = si.getValue(time, slv);
                    tsm.putCharacterStatValue(CombatOrders, o1);
                    break;
                case DECENT_ADV_BLESSING_V:
                    o1.nOption = si.getValue(z, slv);
                    o1.rOption = skillId;
                    o1.tOption = si.getValue(time, slv);
                    tsm.putCharacterStatValue(DEF, o1);
                    o3.nOption = si.getValue(x, slv);
                    o3.rOption = skillId;
                    o3.tOption = si.getValue(time, slv);
                    tsm.putCharacterStatValue(IndiePAD, o3);
                    tsm.putCharacterStatValue(IndieMAD, o3);
                    o4.nOption = si.getValue(indieMhp, slv);
                    o4.rOption = skillId;
                    o4.tOption = si.getValue(time, slv);
                    tsm.putCharacterStatValue(IndieMHP, o4);
                    tsm.putCharacterStatValue(IndieMMP, o4);
                    break;
                case DECENT_SPEED_INFUSION_V:
                    net.swordie.ms.client.character.skills.PartyBooster pb = (net.swordie.ms.client.character.skills.PartyBooster) tsm.getTSBByTSIndex(TSIndex.PartyBooster);
                    pb.setNOption(-1);
                    pb.setROption(skillId);
                    pb.setDynamicTermSet(true);
                    pb.setHasPartyBooster(tsm.hasStat(PartyBooster));
                    pb.setExpireTerm((int) (si.getValue(time, slv) * (chr.getTotalStat(BaseStat.buffTimeR) / 100D)));
                    tsm.putCharacterStatValue(PartyBooster, pb.getOption());
                    break;
                case DECENT_HOLY_SYMBOL:
                    o1.slv = slv;
                    o1.nOption = si.getValue(x, slv);
                    o1.rOption = skillId;
                    o1.tOption = si.getValue(time, slv);
                    o1.sOption = si.getValue(v, slv); // DropR
                    tsm.putCharacterStatValue(HolySymbol, o1);
                    break;

                case LUCKY_DICE:
                    if (chr.getQuestManager().getQuestById(GameConstants.LOADED_DICE_SELECTION) == null) {
                        chr.getScriptManager().createQuestWithQRValue(GameConstants.LOADED_DICE_SELECTION, "1");
                    }
                    int diceThrow1 = Integer.parseInt(chr.getScriptManager().getQRValue(GameConstants.LOADED_DICE_SELECTION));

                    chr.write(UserPacket.effect(Effect.skillAffectedSelect(skillId, slv, diceThrow1, false)));
                    chr.getField().broadcastPacket(UserRemote.effect(chr.getId(), Effect.skillAffectedSelect(skillId, slv, diceThrow1, false)));

                    if (diceThrow1 < 2) {
                        chr.reduceSkillCoolTime(skillId, (1000 * si.getValue(cooltime, slv)) / 2);
                        return;
                    }

                    o1.nOption = diceThrow1;
                    o1.rOption = skillId;
                    o1.tOption = si.getValue(time, slv);

                    o1.dOption = tsm.throwDice(diceThrow1);
                    tsm.putCharacterStatValue(Dice, o1);
                    break;
                case MANA_OVERLOAD:
                    if (tsm.hasStat(ManaOverload)) {
                        tsm.removeStatsBySkill(MANA_OVERLOAD);
                    } else {
                        o1.nOption = 10;
                        o1.rOption = skillId;
                        tsm.putCharacterStatValue(ManaOverload, o1);
                        o2.rOption = skillId;
                        o2.nOption = si.getValue(z, slv);
                        tsm.putCharacterStatValue(IndiePMdR, o2);
                    }
                    break;
                case GUIDED_ARROW:
                    int faKey = chr.getNewForceAtomKey();
                    o1.nOption = si.getValue(z, slv);
                    o1.rOption = skillId;
                    o1.tOption = si.getValue(time, slv);
                    o1.xOption = faKey;
                    tsm.putCharacterStatValue(GuidedArrow, o1);
                    tsm.sendSetStatPacket();

                    ForceAtomEnum fae = ForceAtomEnum.GUIDED_ARROW;
                    ForceAtomInfo forceAtomInfo = new ForceAtomInfo(faKey, fae.getInc(), 41, 3,
                            90, 840, Util.getCurrentTime(), 0, 0,
                            new Position());
                    ForceAtom fa = new ForceAtom(false, 0, chr.getId(), fae,
                            true, 0, skillId, forceAtomInfo, si.getFirstRect(), 0, 300,
                            new Position(), skillId, new Position(), 0);
                    fa.setMaxRecreationCount(si.getValue(z, slv));
                    chr.createForceAtom(fa);
                    break;
                case ETHEREAL_FORM:
                    o1.nOption = si.getValue(x, slv);
                    o1.rOption = skillId;
                    o1.tOption = si.getValue(time, slv);
                    o1.xOption = si.getValue(s, slv); // RGB
                    o1.yOption = si.getValue(y, slv);
                    tsm.putCharacterStatValue(EtherealForm, o1);
                    break;
                case WILL_OF_ERDA:
                    o1.nOption = 100;
                    o1.rOption = skillId;
                    o1.tOption = 3;
                    tsm.putCharacterStatValue(AsrR, o1);
                    tsm.removeAllDebuffs();
                    break;
                case IMPENETRABLE_SKIN:
                    o1.nOption = 1;
                    o1.rOption = skillId;
                    o1.tOption = si.getValue(time, slv);
                    o1.xOption = 0;
                    tsm.putCharacterStatValue(ImpenetrableSkin, o1);
                    o2.rOption = skillId;
                    o2.nOption = si.getValue(indieAsrR, slv);
                    o2.tOption = si.getValue(time, slv);
                    tsm.putCharacterStatValue(IndieAsrR, o2);
                    o3.rOption = skillId;
                    o3.nOption = 100;
                    o3.tOption = si.getValue(time, slv);
                    tsm.putCharacterStatValue(IndieNoKnockBack, o3);
                    break;
                case WEAPON_AURA:
                    o1.nOption = si.getValue(z, slv);
                    o1.rOption = skillId;
                    o1.tOption = si.getValue(time, slv);
                    tsm.putCharacterStatValue(WeaponAura, o1);
                    o2.nOption = si.getValue(indieIgnoreMobpdpR, slv);
                    o2.rOption = skillId;
                    o2.tOption = si.getValue(time, slv);
                    tsm.putCharacterStatValue(IndieIgnoreMobpdpR, o2);
                    o3.nOption = si.getValue(indiePMdR, slv);
                    o3.rOption = skillId;
                    o3.tOption = si.getValue(time, slv);
                    tsm.putCharacterStatValue(IndiePMdR, o3);
                    break;
                case LAST_RESORT:
                    int nOption = tsm.hasStat(LastResort) ? tsm.getOption(LastResort).nOption : 0;
                    long remainingTime = tsm.getRemainingTime(LastResort, LAST_RESORT);
                    tsm.removeStatsBySkill(LAST_RESORT);
                    switch (nOption) {
                        case 0:
                            o1.nOption = 1;
                            o1.rOption = skillId;
                            o1.tOption = si.getValue(time, slv);
                            tsm.putCharacterStatValue(LastResort, o1);
                            o2.nOption = si.getValue(x, slv);
                            o2.rOption = skillId;
                            o2.tOption = si.getValue(time, slv);
                            tsm.putCharacterStatValue(IndieNegativeEVAR, o2);
                            o3.nOption = si.getValue(z, slv);
                            o3.rOption = skillId;
                            o3.tOption = si.getValue(time, slv);
                            tsm.putCharacterStatValue(IndieHitDamageInclHPR, o3);
                            o4.rOption = skillId;
                            o4.nOption = si.getValue(y, slv);
                            o4.tOption = si.getValue(time, slv);
                            tsm.putCharacterStatValue(IndiePMdR, o4);
                            break;
                        case 1:
                            o1.nOption = 2;
                            o1.rOption = skillId;
                            o1.tOption = (int) ((remainingTime) / 2);
                            o1.setInMillis(true);
                            tsm.putCharacterStatValue(LastResort, o1);
                            o2.nOption = si.getValue(w, slv);
                            o2.rOption = skillId;
                            o2.tOption = (int) ((remainingTime) / 2);
                            o2.setInMillis(true);
                            tsm.putCharacterStatValue(IndieNegativeEVAR, o2);
                            o3.nOption = si.getValue(s, slv);
                            o3.rOption = skillId;
                            o3.tOption = (int) ((remainingTime) / 2);
                            o3.setInMillis(true);
                            tsm.putCharacterStatValue(IndieHitDamageInclHPR, o3);
                            o4.rOption = skillId;
                            o4.nOption = si.getValue(q, slv);
                            o4.tOption = (int) ((remainingTime) / 2);
                            o4.setInMillis(true);
                            tsm.putCharacterStatValue(IndiePMdR, o4);
                            break;
                    }
                    break;
                case VICIOUS_SHOT:
                    o1.nOption = si.getValue(x, slv);
                    o1.rOption = skillId;
                    o1.tOption = si.getValue(time, slv);
                    tsm.putCharacterStatValue(ViciousShot, o1);
                    break;
                case OVERDRIVE:
                    o1.nOption = si.getValue(x, slv);
                    o1.rOption = skillId;
                    o1.tOption = si.getValue(time, slv);
                    tsm.putCharacterStatValue(Overdrive, o1);
                    break;

                case RESISTANCE_INFANTRY_1:
                case RESISTANCE_INFANTRY_2:
                    summon = Summon.getSummonBy(chr, skillId, slv);
                    summon.setMoveAbility(MoveAbility.Stop);
                    field.spawnSummonAndRemoveOld(summon);
                    break;

                //Fall through intended for all Freuds Wisdom Skill cases
                case FREUDS_WISDOM_6:
                    o1.nOption = 1;
                    o1.rOption = skillId;
                    o1.tOption = si.getValue(time, slv);
                    tsm.putCharacterStatValue(NotDamaged, o1);
                case FREUDS_WISDOM_5:
                    o2.rOption = skillId;
                    o2.nOption = si.getValue(indieBDR, slv);
                    o2.tOption = si.getValue(time, slv);
                    tsm.putCharacterStatValue(IndieBDR, o2);
                case FREUDS_WISDOM_4:
                    o3.rOption = skillId;
                    o3.nOption = si.getValue(indiePad, slv);
                    o3.tOption = si.getValue(time, slv);
                    tsm.putCharacterStatValue(IndiePAD, o3);
                    tsm.putCharacterStatValue(IndieMAD, o3);
                case FREUDS_WISDOM_3:
                    o4.rOption = skillId;
                    o4.nOption = si.getValue(indieAllStat, slv);
                    o4.tOption = si.getValue(time, slv);
                    tsm.putCharacterStatValue(IndieAllStat, o4);
                case FREUDS_WISDOM_2:
                    o5.rOption = skillId;
                    o5.nOption = si.getValue(indieStance, slv);
                    o5.tOption = si.getValue(time, slv);
                    tsm.putCharacterStatValue(IndieStance, o5);
                case FREUDS_WISDOM_1:
                    for (var skillIdd : chr.getSkillCoolTimes().keySet()) {
                        if (SkillData.getSkillInfoById(skillIdd) != null && !SkillData.getSkillInfoById(skillIdd).isNotCooltimeReset()) {
                            chr.reduceSkillCoolTime(skillIdd, (int) (chr.getRemainingCoolTime(skillIdd) * 0.1F));
                        }
                    }
                    o6.nOption = tsm.hasStat(FreudBlessing) ? tsm.getOption(FreudBlessing).nOption + 1 : 1;
                    o6.rOption = skillId;
                    o6.tOption = si.getValue(time, slv);
                    tsm.putCharacterStatValue(FreudBlessing, o6);

                    int cooldown = 25000; // in ms
                    if (skillId == FREUDS_WISDOM_6) {
                        cooldown = 240000;
                    }
                    chr.addSkillCoolTime(FREUDS_WISDOM, cooldown); // value isn't included in SkillId
                    break;
                case SENGOKU_FORCE_ASSEMBLE:
                    summonSengokuForces();
                    break;
                case CONVERSION_OVERDRIVE:
                    o1.nOption = 1;
                    o1.rOption = skillId;
                    o1.tOption = si.getValue(time, slv);
                    tsm.putCharacterStatValue(ConversionOverdrive, o1);

                    var max = si.getValue(y, slv);
                    var dmgInc = (int) ((chr.getMP() / ((double) chr.getMaxMP())) * max);
                    o2.nOption = dmgInc;
                    o2.rOption = skillId;
                    o2.tOption = si.getValue(time, slv);
                    tsm.putCharacterStatValue(IndieDamR, o2);
                    break;

                // V skill Blessings
                case MAPLE_WORLD_GODDESS_BLESSING:
                    var mwSkill = SkillConstants.getMapleWarriorSkillByJob(chr.getJob());
                    if (!tsm.hasStatBySkillId(mwSkill)) {
                        chr.chatMessage("You must have a Maple Warrior skill applied in order to use this.");
                        return;
                    }
                    var curStat = tsm.getOptByCTSAndSkill(BasicStatUp, mwSkill).nOption;

                    o1.nOption = si.getValue(indieDamR, slv);
                    o1.rOption = skillId;
                    o1.tOption = si.getValue(time, slv);
                    tsm.putCharacterStatValue(IndieDamR, o1);
                    o2.nOption = (int) (curStat * (si.getValue(x, slv) / 100D));
                    o2.rOption = skillId;
                    o2.tOption = si.getValue(time, slv);
                    tsm.putCharacterStatValue(IndieAllStatR, o2);
                    break;
                case EMPRESS_CYGNUS_BLESSING: // TODO  Abnormal Status ignore 1 time
                    o1.nOption = si.getValue(q, slv);
                    o1.rOption = skillId;
                    o1.tOption = si.getValue(time, slv);
                    tsm.putCharacterStatValue(IndieDamR, o1);
                    o2.nOption = 1;
                    o2.rOption = skillId;
                    o2.tOption = si.getValue(time, slv);
                    tsm.putCharacterStatValue(BlessingVSkill, o2);
                    break;
                case TRANSCENDENCE_BLESSING:
                    o1.nOption = si.getValue(x, slv);
                    o1.rOption = skillId;
                    o1.tOption = si.getValue(time, slv);
                    o2.nOption = si.getValue(indiePad, slv);
                    o2.rOption = skillId;
                    o2.tOption = si.getValue(time, slv);
                    o3.nOption = 1;
                    o3.rOption = skillId;
                    o3.tOption = si.getValue(time, slv);
                    tsm.putCharacterStatValue(BlessingVSkill, o3);

                    for (var skillIdd : chr.getSkillCoolTimes().keySet()) {
                        if (!SkillConstants.isNoCooltimeResetSkill(skillIdd)) {
                            chr.resetSkillCoolTime(skillIdd);
                        }
                    }
                    break;
                case GRANDIS_BLESSING_NOVA:
                    si = SkillData.getSkillInfoById(GRANDIS_BLESSING);

                    var kaiserAddedDamR = 0;
                    if (JobConstants.isKaiser(chr.getJob())) {
                        var curGauge = ((Kaiser) chr.getJobHandler()).getCurGauge();
                        var curStage = ((Kaiser) chr.getJobHandler()).getCurStageByGauge(curGauge);
                        var multiplier = si.getValue(q, slv);

                        kaiserAddedDamR = curStage * multiplier;
                    }

                    o1.nOption = si.getValue(v, slv) + kaiserAddedDamR;
                    o1.rOption = skillId;
                    o1.tOption = si.getValue(time, slv);
                    tsm.putCharacterStatValue(IndieDamR, o1);
                    o2.nOption = si.getValue(u, slv);
                    o2.rOption = skillId;
                    o2.tOption = si.getValue(time, slv);
                    tsm.putCharacterStatValue(IndieStance, o2);
                    o3.nOption = 1;
                    o3.rOption = skillId;
                    o3.tOption = si.getValue(time, slv);
                    o3.xOption = si.getValue(y, slv); // Remaining Bypass Count
                    o3.yOption = si.getValue(x, slv); // Bypass Chance (only for server-side)
                    tsm.putCharacterStatValue(BlessingVSkill, o3);

                    // Cooldown Bypass handled in Char.java::setSkillCooldown(int, int)
                    break;
                case GRANDIS_BLESSING_FLORA:
                    si = SkillData.getSkillInfoById(GRANDIS_BLESSING);
                    var job = chr.getJob();

                    var eqpBaseStat = JobConstants.isIllium(job) ? EquipBaseStat.iPAD : EquipBaseStat.iMAD ;
                    var wepBaseStat = JobConstants.isIllium(job) ? EquipBaseStat.iMAD : EquipBaseStat.iPAD;
                    var att = 0;
                    var cap = 0;
                    if (chr.getEquippedInventory().getItemBySlot(BodyPart.Weapon.getVal()) != null) {
                        var weaponBase = ((Equip) chr.getEquippedInventory().getItemBySlot(BodyPart.Weapon.getVal())).getTotalStat(wepBaseStat);
                        cap = (int) (weaponBase * 1.5D);
                    }

                    for (Item item : chr.getEquippedInventory().getItems()) {
                        if (!(item instanceof Equip) || ItemConstants.isWeapon(item.getItemId())) {
                            continue;
                        }
                        Equip equip = (Equip) item;
                        att += equip.getTotalStat(eqpBaseStat);
                    }
                    att = (int) (si.getValue(w, slv) * ((double) att / 100)); // 90% of
                    att = Math.max(0, Math.min(att, cap));

                    o1.nOption = si.getValue(s, slv) + att;
                    o1.rOption = skillId;
                    o1.tOption = si.getValue(time, slv);
                    tsm.putCharacterStatValue(IndiePAD, o1);
                    tsm.putCharacterStatValue(IndieMAD, o1);
                    o2.nOption = 1;
                    o2.rOption = skillId;
                    o2.tOption = si.getValue(time, slv);
                    tsm.putCharacterStatValue(BlessingVSkill, o2);
                    break;
                case GRANDIS_BLESSING_ANIMA:
                    si = SkillData.getSkillInfoById(GRANDIS_BLESSING);

                    var atGaugeBoost = si.getValue(v2, slv); // Anima Thief Gauge boost

                    o1.nOption = si.getValue(q2, slv);
                    o1.rOption = skillId;
                    o1.tOption = si.getValue(time, slv);
                    tsm.putCharacterStatValue(IndieDamR, o1);
                    o2.nOption = si.getValue(w2, slv);
                    o2.rOption = skillId;
                    o2.tOption = si.getValue(time, slv);
                    tsm.putCharacterStatValue(IndieStance, o2);
                    o3.nOption = 1;
                    o3.rOption = skillId;
                    o3.tOption = si.getValue(time, slv);
                    o3.xOption = atGaugeBoost; // used server-side
                    tsm.putCharacterStatValue(BlessingVSkill, o3);
                    break;
                case OTHERWORLD_GODDESS_BLESSING:
                    o1.nOption = si.getValue(indiePMdR, slv);
                    o1.rOption = skillId;
                    o1.tOption = si.getValue(time, slv);
                    tsm.putCharacterStatValue(IndiePMdR, o1);
                    o2.nOption = 1;
                    o2.rOption = skillId;
                    o2.tOption = si.getValue(time, slv);
                    tsm.putCharacterStatValue(BlessingVSkill, o2);
                    break;
                case PRINCESS_SAKUNOS_BLESSING:
                    o1.nOption = si.getValue(q, slv);
                    o1.rOption = skillId;
                    o1.tOption = si.getValue(time, slv);
                    tsm.putCharacterStatValue(IndiePMdR, o1);
                    o2.nOption = 1;
                    o2.rOption = skillId;
                    o2.tOption = si.getValue(time, slv);
                    tsm.putCharacterStatValue(BlessingVSkill, o2);
                    break;

                // Link Skills
                case CLOSE_CALL_SHADE_LINK:
                case CLOSE_CALL_SHADE_LINK_ORIGINAl:
                    o1.nOption = 1;
                    o1.rOption = skillId;
                    tsm.putCharacterStatValue(PreReviveOnce, o1);
                    break;
                case TERMS_AND_CONDITION_AB_LINK:
                case TERMS_AND_CONDITION_AB_LINK_ORIGINAL:
                    o1.nOption = si.getValue(indieDamR, slv);
                    o1.rOption = skillId;
                    o1.tOption = si.getValue(time, slv);
                    tsm.putCharacterStatValue(IndieDamR, o1);
                    break;
                case KNIGHT_WATCH:
                    var duration = si.getValue(time, slv);
                    o1.nOption = si.getValue(indieStance, slv);
                    o1.rOption = skillId;

                    // [Link Skill] Custom Skill Change
                    o1.tOption = SkillChangeConstants.GET_KNIGHTS_WATCH_CUSTOM_DURATION_MULTIPLIER(slv) * duration;
                    tsm.putCharacterStatValue(IndieStance, o1);
                    break;
            }

            tsm.sendSetStatPacket();
        }
    }

    public List<Integer> getJobNonAddBaseStat(BaseStat baseStat) {
        return null;
    }

    public Long getJobBaseStat(BaseStat baseStat) {
        return 0L;
    }

    private void doHomeTeleport(Char chr, int slv, Option o1, SkillInfo si) {
        o1.nOption = si.getValue(x, slv);
        Field toField = chr.getOrCreateFieldByCurrentInstanceType(o1.nOption);
        chr.warp(toField);
    }

    private void doRideVehicle(TemporaryStatManager tsm, int skillId, SkillInfo si) {
        TemporaryStatBase tsb = tsm.getTSBByTSIndex(TSIndex.RideVehicle);
        if (tsm.hasStat(RideVehicle)) {
            tsm.removeStat(RideVehicle);
        }
        tsb.setNOption(si.getVehicleId());
        tsb.setROption(skillId);
        tsm.putCharacterStatValue(RideVehicle, tsb.getOption());
        tsm.sendSetStatPacket();
    }


    private void vampiricTouch(long dmgDone) {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        if (!tsm.hasStat(VampiricTouch) || chr.hasSkillOnCooldown(SkillConstants.VAMPIRIC_TOUCH_COOLDOWN)) {
            return;
        }

        int val = tsm.getOption(VampiricTouch).nOption;
        long healed = (long) (val * (dmgDone / 100D));
        long capHeal = chr.getHPPerc(25);

        long heal = healed > capHeal ? capHeal : healed;
        chr.heal((int) heal);
        chr.addSkillCoolTime(SkillConstants.VAMPIRIC_TOUCH_COOLDOWN, 5000);
    }



    public void handleKeyDownSkill(Char chr, int skillID, InPacket inPacket) {
        // Special Node Activation
        chr.getSpecialNode().activateSpecialNode("cooltime", chr, null);

        //EventManager.stopTimer(mpPerSecConsumptionTimer);
        if (SkillConstants.isCooltimeOnStartSkill(skillID)) {
            chr.setSkillCooldown(skillID, chr.getSkillLevel(skillID));
        }
    }



    public void handleCancelKeyDownSkill(Char chr, int skillID) {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();

        if (!SkillConstants.isCooltimeOnStartSkill(skillID)) {
            chr.setSkillCooldown(skillID, chr.getSkillLevel(skillID));
        }

        tsm.removeStat(IndieKeyDownTime);
        tsm.removeStat(KeyDownAreaMoving);
    }



    public void handleSkillPrepareStart(Char chr, int skillId, SkillUseInfo sui) {

    }



    public void handleSkillPrepareStop(Char chr, int skillId, SkillUseInfo sui) {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        var removedOptions = tsm.removeStatsBySkill(skillId);
        handleSkillRemove(chr, skillId, removedOptions);
    }



    public void handleShootObj(Char chr, ShootObjectSkillInfo sosi) {
        var skillId = sosi.getSkillId();
        var slv = sosi.getSlv();
        // Special Node Activation
        chr.getSpecialNode().activateSpecialNode("cooltime", chr, null);
        chr.setSkillCooldown(skillId, slv);
    }

    public int alterHeal(int oldHP, int amount, int sourceId) {
        return -1;
    }

    public int alterHealMP(int oldMP, int amount, int sourceId) {
        return -1;
    }

    /**
     * Alters the current MP consumption value.
     *
     * @param mpCon current MP Consumption value.
     * @param skillId skillId used that should be consuming MP
     * @param slv skill level of the skillId used.
     * @return the altered MP Consumption ( -1 if should not be altered)
     */
    public int alterMpCon(int mpCon, int skillId, int slv, AttackInfo attackInfo, SkillUseInfo sui, SkillUseSource source) {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();

        /*
        * Common
        * */
        // If Skill was procced by Unreliable Memory. Do not consume MP.
        if (attackInfo.byUnreliableMemory || sui.byUnreliableMemory) {
            return 0;
        }


        /*
        * Buff
        * */
        if (!JobConstants.isNoManaJob(chr.getJob())) {
            // Inside NoManaJob if statement, because DemonSlayers or Zeroes should not benefit from this buff.

            // 3rd Stage of Kanna's  Spirits Domain  will apply no MP Consumption within the AA.
            if (tsm.getOptByCTSAndSkill(IndieBooster, Kanna.SPIRITS_DOMAIN) != null) {
                return 0;
            }


        }


        /*
        * Skill
        * */


        /*
        * Attack
        * */
        // If Attack Header is part of NoCoolTimeHeaders. Do not consume MP.
        if ((source.isAttackRequest() && attackInfo.isNoCoolTimeHeaders())) {
            return 0;
        }

        // If Zero's Counterpart used a Attack/Skill. Do not consume MP.
        if (source.isAttackRequest() && attackInfo.zeroTag == 1) {
            return 0;
        }

        // If Attack request was performed by a Summon. Do not consume MP.
        if (source.isAttackRequest() && attackInfo.summonID > 0) {
            return 0;
        }

        // If Attack request is by dragon, should only consume MP upon cast, not every attack packet
        if (source.isAttackRequest() && attackInfo.dragon && attackInfo.dragonAttackStart != 1) {
            return 0;
        }

        // If Attack request's SkillID is part a 'body attack'. Do not consume MP.
        if (source.isAttackRequest() && SkillConstants.isBodyAttack(skillId)) {
            return 0;
        }

        // If Attack request's SkillID is a ForceAtom Skill. Do not consume MP.
        if (source.isAttackRequest() && SkillConstants.isForceAtomSkill(skillId)) {
            return 0;
        }

        // If Attack request's SkillID is a SecondAtom. Do not consume MP.
        if (source.isAttackRequest() && SkillConstants.isSecondAtom(skillId)) {
            return 0;
        }

        // If Attack request's SkillID is a Grenade Skill. Do not consume MP.
        if (source.isAttackRequest() && SkillConstants.isGrenadeSkill(skillId)) {
            return 0;
        }

        // If Attack request's SkillID is a ShootObj Skill. Do not consume MP.
        if (source.isAttackRequest() && SkillConstants.isShootObj(skillId)) {
            return 0;
        }

        // If Attack request's SkillID is a Summon Skill. Do not consume MP.
        if (source.isAttackRequest() && SkillConstants.isSummon(skillId)) {
            return 0;
        }

        // If Attack request's SkillID is a KeyDown Skill. Do not consume MP.
/*        if (source.isAttackRequest() && SkillConstants.isKeyDownSkill(skillId)) {
            return 0;
        }*/

        // If Attack request's SkillID is a multiAttackSkill. Do not consume MP.
        if (source.isAttackRequest() && SkillConstants.isMultiAttackSkill(skillId)) {
            return 0;
        }

        // If Attack request's SkillID is part of 'ignore cooldown attacks'. Do not consume MP.
        if (source.isAttackRequest() && SkillConstants.isIgnoreCooldownAttack(skillId)) {
            return 0;
        }

        // Do NOT alter MP Consumption
        return -1;
    }


    /**
     * Alters the cooldown time of skills based on specified conditions.
     *
     * @param skillId       skillID in question
     * @param slv           skill level of the skill
     * @param attackInfo    AttackInfo that came with the Attack Request
     * @param sui           SkillUseInfo that came with the Skill Request
     * @param source        Source of alterCooldownskill call
     * @return              returns the new cooldown (in ms). if not altered, return -1
     */
    public int alterCooldownSkill(int skillId, int slv, AttackInfo attackInfo, SkillUseInfo sui, SkillUseSource source) {
        return -1; // -1  means  do not alter
    }


    /**
     * Returns whether or not to bypass the cooldown check, based on specified conditions
     *
     * @param skillId       skillID in question
     * @param attackInfo    AttackInfo that came with the Attack Request
     * @param sui           SkillUseInfo that came with the Skill Request
     * @param source        Source of the canBypassCooldownCheck
     * @return              returns 'BypassCooldownCheckType'.
     */
    public BypassCooldownCheckType canBypassCooldownCheck(int skillId, AttackInfo attackInfo, SkillUseInfo sui, SkillUseSource source) {

        /*
        * Common
        * */
        // If Character has Skill CD Bypass on. Do not check or set the cooldown.
        if (chr.hasSkillCDBypass()) {
            return BypassCheckAndCooldown;
        }

        // If Skill was procced by Unreliable Memory. Do not check or set the cooldown.
        if (attackInfo.byUnreliableMemory || sui.byUnreliableMemory) {
            return BypassCheckAndCooldown;
        }


        /*
        * Skill
        * */
        // If Skill request's SkillID has a function whilst the skill is on cooldown. Do not check or set the cooldown.
        if (source.isSkillRequest() && SkillConstants.isUseWhileCooldownSkill(skillId)) {
            return BypassCheckAndCooldown;
        }

        // If Skill request's SkillID is part of 'put cooldown but bypass check'. Do not check cooldown, do put on cooldown.
        if (source.isSkillRequest() && SkillConstants.isPutCooldownButBypassCheckSkill(skillId)) {
            return BypassCheck;
        }


        /*
        * Attack
        * */
        // If Attack Header is part of NoCoolTimeHeaders. Do not check or set the cooldown.
        if ((source.isAttackRequest() && attackInfo.isNoCoolTimeHeaders())) {
            return BypassCheckAndCooldown;
        }

        // If Zero's Counterpart used a Attack/Skill. Do not check or set the cooldown.
        if (source.isAttackRequest() && attackInfo.zeroTag == 1) {
            return BypassCheckAndCooldown;
        }

        // If Attack request was performed by a Summon. Do not check or set the cooldown.
        if (source.isAttackRequest() && attackInfo.summonID > 0) {
            return BypassCheckAndCooldown;
        }

        // If Attack request is by dragon, should only bypass the cooldown for the consecutive attacks. Not the begin attack
        if (source.isAttackRequest()
                && attackInfo.skillId != Evan.DARK_FOG
                && attackInfo.skillId != Evan.ELEMENTAL_BARRAGE
                && attackInfo.dragon
                && attackInfo.dragonAttackStart == 0) {
            return BypassCheckAndCooldown;
        }

        // If Attack request's SkillID is part a 'body attack'. Do not check or set the cooldown.
        if (source.isAttackRequest() && SkillConstants.isBodyAttack(skillId)) {
            return BypassCheckAndCooldown;
        }

        // If Attack request's SkillID is a ForceAtom Skill. Do not check or set the cooldown.
        if (source.isAttackRequest() && SkillConstants.isForceAtomSkill(skillId)) {
            return BypassCheckAndCooldown;
        }

        // If Attack request's SkillID is a SecondAtom. Do not check or set the cooldown.
        if (source.isAttackRequest() && SkillConstants.isSecondAtom(skillId)) {
            return BypassCheckAndCooldown;
        }

        // If Attack request's SkillID is a Grenade Skill. Do not check or set the cooldown.
        if (source.isAttackRequest() && SkillConstants.isGrenadeSkill(skillId)) {
            return BypassCheckAndCooldown;
        }

        // If Attack request's SkillID is a ShootObj Skill. Do not check or set the cooldown.
        if (source.isAttackRequest() && SkillConstants.isShootObj(skillId)) {
            return BypassCheckAndCooldown;
        }

        // If Attack request's SkillID is a Summon Skill. Do not check or set the cooldown.
        if (source.isAttackRequest() && SkillConstants.isSummon(skillId)) {
            return BypassCheckAndCooldown;
        }

        // If Attack request's SkillID is a KeyDown Skill. Do not check or set the cooldown.
        if (source.isAttackRequest() && SkillConstants.isKeyDownSkill(skillId)) {
            return BypassCheckAndCooldown;
        }

        // If Attack request's SkillID is a multiAttackSkill. Do not check or set the cooldown.
        if (source.isAttackRequest() && SkillConstants.isMultiAttackSkill(skillId)) {
            return BypassCheckAndCooldown;
        }

        // If Attack request's SkillID is part of 'ignore cooldown attacks'. Do not check or set the cooldown.
        if (source.isAttackRequest() && SkillConstants.isIgnoreCooldownAttack(skillId)) {
            return BypassCheckAndCooldown;
        }


        /*
         * Specific Skill Handling
         * */
        // Hero - Sword Illusion
        // Only apply cooldown for SWORD_ILLUSION_2 and if the multiAttackInfoSequenceCounter is 1. Bypass if multiAttackInfoSequenceCounter is any other number.
        if (attackInfo.skillId == Hero.SWORD_ILLUSION_2 && attackInfo.sui.multiAttackInfoSequenceCounter != 1) {
            return BypassCheckAndCooldown;
        }

        // Pathfinder - Ancient Astra (Burst)
        // Only apply cooldown for the first ShootObj creation. All others should bypass the check.
        if (source.equals(SkillUseSource.ShootObjCreateRequest) && sui.skillID == Pathfinder.ANCIENT_ASTRA_BURST_HOLD) {
            return BypassCheck;
        }


        /*
         * Check Cooldown
         * */
        // Do NOT bypass the cooldown check.
        return BypassCooldownCheckType.Check;
    }


    public void handleKeyDownSkillCost(int skillId) {
    }



    public void handleUserSkillInfo(SkillUseInfo sui) {

    }



    /**
     * Called when a player is right-clicking a buff, requesting for it to be disabled.
     *  @param chr     The client
     * @param skillID
     * @param removedOptions
     */
    public void handleSkillRemove(Char chr, int skillID, Map<CharacterTemporaryStat, Option> removedOptions) {

    }



    public void updateTimerSkill() {

    }
    //endregion Skill related methods ----------------------------------------------------------------------------------



    private void giveExclusiveSpell(int skillId) {
        Option o = new Option(4, skillId, 2400);
        Option o1 = new Option(4, skillId, 2400);
        Rect rect = chr.getRectAround(new Rect(new Position(-400, -300), new Position(400, 300)));
        List<Char> chrList = new ArrayList<>() {{add(chr);}};
        if (chr.getParty() != null) {
            chrList = chr.getParty().getPartyMembersInField(chr);
        }
        for (Char pChr : chrList) {
            if (!rect.hasPositionInside(pChr.getPosition())) {
                continue;
            }
            TemporaryStatManager pTsm = pChr.getTemporaryStatManager();
            pTsm.putCharacterStatValue(IndiePADR, o);
            pTsm.putCharacterStatValue(IndieMADR, o1);
            pTsm.sendSetStatPacket();
        }
    }



    public void deductBypassCountNovaBlessing() {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        Option o = new Option();

        if (tsm.getOptByCTSAndSkill(BlessingVSkill, GRANDIS_BLESSING_NOVA) == null) {
            return;
        }

        var curCount = tsm.getOptByCTSAndSkill(BlessingVSkill, GRANDIS_BLESSING_NOVA).xOption;
        var chance = tsm.getOptByCTSAndSkill(BlessingVSkill, GRANDIS_BLESSING_NOVA).yOption;
        var newCount = curCount - 1;

        o.nOption = 1;
        o.rOption = GRANDIS_BLESSING_NOVA;
        o.tOption = (int) tsm.getRemainingTime(BlessingVSkill, GRANDIS_BLESSING_NOVA);
        o.xOption = newCount;
        o.yOption = chance;
        o.setInMillis(true);
        tsm.putCharacterStatValue(BlessingVSkill, o, true);
        tsm.sendSetStatPacket();
    }



    public void updateBlessingVSkill(int skillId) {
        if (!chr.hasSkill(skillId)) {
            // Add Offense
            return;
        }
        SkillInfo si = SkillData.getSkillInfoById(skillId);
        int slv = chr.getSkillLevel(skillId);

        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        Option o1 = new Option();
        Option o2 = new Option();

        switch (skillId) {
            case EMPRESS_CYGNUS_BLESSING:
                //Periodic DamR
                if (tsm.hasStat(BlessingVSkill)) {
                    var nOpt = tsm.getOptByCTSAndSkill(BlessingVSkill, skillId).nOption;
                    var damR = tsm.getOptByCTSAndSkill(IndieDamR, skillId).nOption;

                    var inc = si.getValue(damage, slv);
                    var cap = si.getValue(w, slv);
                    var duration = (int) tsm.getRemainingTime(BlessingVSkill, skillId);

                    o1.nOption = Math.max(0, Math.min(damR + inc, cap));
                    o1.rOption = skillId;
                    o1.tOption = duration;
                    o1.setInMillis(true);
                    tsm.putCharacterStatValue(IndieDamR, o1, true);
                    o2.nOption = nOpt + 1;
                    o2.rOption = skillId;
                    o2.tOption = duration;
                    o2.setInMillis(true);
                    tsm.putCharacterStatValue(BlessingVSkill, o2, true);
                }
                break;
            case PRINCESS_SAKUNOS_BLESSING:
                // Periodic FD
                if (tsm.hasStat(BlessingVSkill)) {
                    var nOpt = tsm.getOptByCTSAndSkill(BlessingVSkill, skillId).nOption;
                    var pmdR = tsm.getOptByCTSAndSkill(IndiePMdR, skillId).nOption;

                    var inc = si.getValue(damage, slv);
                    var cap = si.getValue(w2, slv);
                    var duration = (int) tsm.getRemainingTime(BlessingVSkill, skillId);

                    o1.nOption = Math.max(0, Math.min(pmdR + inc, cap));
                    o1.rOption = skillId;
                    o1.tOption = duration;
                    o1.setInMillis(true);
                    tsm.putCharacterStatValue(IndiePMdR, o1, true);
                    o2.nOption = nOpt + 1;
                    o2.rOption = skillId;
                    o2.tOption = duration;
                    o2.setInMillis(true);
                    tsm.putCharacterStatValue(BlessingVSkill, o2, true);
                }
                break;
            case OTHERWORLD_GODDESS_BLESSING:
                if (tsm.hasStat(BlessingVSkill)) {

                    // Remove previous buffs
                    Arrays.stream(otherworldBlessings).forEach(tsm::removeStatsBySkill);

                    var randomSkillId = Util.getRandomFromCollection(Util.makeSet(otherworldBlessings));
                    var duration = 5;
                    switch (randomSkillId) {
                        case BLESSING_OF_RECOVERY: // TODO Heals through status effects that prevent heal recovery
                            var recoverRate = si.getValue(y, slv);
                            if (JobConstants.isDemonSlayer(chr.getJob())) {
                                // TODO DemonFury
                            } else if (JobConstants.isKinesis(chr.getJob())) {
                                var ppRecovered = recoverRate * (Kinesis.MAX_PP / 100D);
                                ((Kinesis) chr.getJobHandler()).addPP((int) ppRecovered);
                            } else {
                                chr.heal(chr.getHPPerc(recoverRate));
                            }
                            break;
                        case AEGIS_BLESSING:
                            o1.nOption = si.getValue(z, slv);
                            o1.rOption = randomSkillId;
                            o1.tOption = duration;
                            tsm.putCharacterStatValue(DamAbsorbShield, o1, true);
                            break;
                        case BLESSING_OF_FORTITUDE:
                            // TODO Ignore Abnormal Status Once
                            o1.nOption = 100;
                            o1.rOption = randomSkillId;
                            o1.tOption = duration;
                            tsm.putCharacterStatValue(IndieAsrR, o1, true);
                            break;
                        case OTHERWORLDY_VOID:
                            chr.write(UserLocal.userBonusAttackRequest(randomSkillId));
                            break;
                    }
                    Effect effect = Effect.skillUse(randomSkillId, chr.getLevel(), slv, -1);
                    chr.write(UserPacket.effect(effect));
                    chr.getField().broadcastPacket(UserRemote.effect(chr.getId(), effect));
                }
                break;
            default:
                log.debug("Unhandled Blessing V skill = " + skillId);
                break;
        }
        tsm.sendSetStatPacket();
    }



    private void reviveByCloseCall() {
        SkillInfo si = SkillData.getSkillInfoById(20050286); // Shade Skill
        int slv = chr.getSkillLevel(CLOSE_CALL_SHADE_LINK);
        if (Util.succeedProp(si.getValue(prop, slv))) {
            TemporaryStatManager tsm = chr.getTemporaryStatManager();
            chr.heal(chr.getMaxHP(), false, false);
            tsm.removeStatsBySkill(CLOSE_CALL_SHADE_LINK);
            tsm.removeStatsBySkill(CLOSE_CALL_SHADE_LINK_ORIGINAl);
            tsm.sendResetStatPacket();
            chr.chatMessage("You have been revived by Close Call.");
            chr.write(UserPacket.effect(Effect.skillUse(CLOSE_CALL_SHADE_LINK, chr.getLevel(), (byte) 1, 0)));
            chr.getField().broadcastPacket(UserRemote.effect(chr.getId(), Effect.skillUse(CLOSE_CALL_SHADE_LINK, chr.getLevel(), (byte) 1, 0)));
        }
    }



    public static void reviveByMightOfNova(Char chr) {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        chr.heal(chr.getMaxHP(), false, true);
        tsm.removeStatsBySkill(MIGHT_OF_THE_NOVA_BUFF);
        tsm.removeStatsBySkill(MIGHT_OF_THE_NOVA);
        tsm.sendResetStatPacket();
        chr.chatMessage("You have been revived by Might of Nova");
    }



    public void handleRevive() {
        // Resistance Link Skill
        var invi = 0;
        for (var link : SkillConstants.getOriginAndLinkByStackingLink(SPIRIT_OF_FREEDOM)) {
            if (chr.hasSkill(link)) {
                invi += chr.getSkillStatValue(SkillStat.u, link);
            }
        }

        if (invi > 0) {
            TemporaryStatManager tsm = chr.getTemporaryStatManager();
            Option o = new Option();
            o.nOption = 1;
            o.rOption = 80000329; // global link skillID
            o.tOption = Math.min(8, invi);
            tsm.putCharacterStatValue(IndieNotDamaged, o, true);
            tsm.sendSetStatPacket();
        }
    }



    private void setOverdriveCooldown() {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        Option o1 = new Option();
        SkillInfo si = SkillData.getSkillInfoById(OVERDRIVE);
        int slv = chr.getSkillLevel(OVERDRIVE);
        o1.nOption = -si.getValue(y, slv);
        o1.rOption = OVERDRIVE;
        o1.tOption = (int) chr.getRemainingCoolTime(OVERDRIVE);
        o1.setInMillis(true);
        tsm.putCharacterStatValue(Overdrive, o1);
        tsm.sendSetStatPacket();
    }



    public void giveHyperAfBuff() {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        if (chr.hasSkill(HYPER_STAT_ARCANE_FORCE)) {
            Option o = new Option();
            int slv = chr.getSkillLevel(HYPER_STAT_ARCANE_FORCE);
            o.nOption = slv <= 10 ? slv * 5 : 50 + (slv - 10) * 10; // in wz, under level
            tsm.putCharacterStatValue(IndieArcaneForce, o);
            tsm.sendSetStatPacket();
        }
    }



    private void summonSengokuForces() {
        if (!chr.hasSkill(SENGOKU_FORCE_ASSEMBLE) || !JobConstants.isSengoku(chr.getJob())) {
            return;
        }
        List<Integer> summonList = new ArrayList<Integer>() {{
            add(SENGOKU_FORCE_UESUGI);
            add(SENGOKU_FORCE_AYAME);
            add(SENGOKU_FORCE_HARUAKI);
            add(SENGOKU_FORCE_TAKEDA);
        }};

        Skill skill = chr.getSkill(SENGOKU_FORCE_ASSEMBLE);
        SkillInfo si = SkillData.getSkillInfoById(skill.getSkillId());
        int slv = skill.getCurrentLevel();
        Field field = chr.getField();
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        Option o = new Option();
        o.tOption = si.getValue(time, slv);

        for (int i = 0; i < 2; i++) {
            int summonId = Util.getRandomFromCollection(summonList);
            summonList.remove((Object) summonId);
            Summon summon = Summon.getSummonBy(chr, summonId, slv);
            summon.setMoveAbility(MoveAbility.FixVMove);
            summon.setAssistType(AssistType.TeleportToMobs);
            field.spawnSummonAndRemoveOld(summon);
            o.rOption = summonId;

            switch (summonId) {
                case SENGOKU_FORCE_UESUGI: // Ied
                    o.nOption = si.getValue(indieIgnoreMobpdpR, slv);
                    tsm.putCharacterStatValue(IndieIgnoreMobpdpR, o);
                    break;
                case SENGOKU_FORCE_AYAME: // crDmg
                    o.nOption = si.getValue(indieIgnoreMobpdpR, slv);
                    tsm.putCharacterStatValue(IndieCrDmg, o);
                    break;
                case SENGOKU_FORCE_HARUAKI: // dmg reduce
                    o.nOption = si.getValue(indieDamReduceR, slv);
                    tsm.putCharacterStatValue(IndieDamReduceR, o);
                    break;
                case SENGOKU_FORCE_TAKEDA: // flat att/matt
                    o.nOption = si.getValue(indiePad, slv);
                    tsm.putCharacterStatValue(IndieMAD, o);
                    tsm.putCharacterStatValue(IndiePAD, o);
                    break;
            }
        }
        tsm.sendSetStatPacket();
    }
    //endregion Buff related methods -----------------------------------------------------------------------------------



    //region Atom related methods --------------------------------------------------------------------------------------
    /**
     * Handles ForceAtom Collision, recreates the force atom automatically if the curRecreationCount is below maxRecreationCount
     * @param fa
     * @param faci
     */
    public void handleForceAtomCollision(ForceAtom fa, ForceAtomCollisionInfo faci) {
        var faKey = faci.forceAtomKey;
        var mobObjId = faci.mobObjId;
        var position = faci.position;

        if (fa.getCurRecreationCount(faKey) < fa.getMaxRecreationCount(faKey) && Util.succeedProp(fa.getRecreationChance(faKey))) {
            ForceAtom recreateFA = fa.recreate(faKey, chr, mobObjId, position);
            if (recreateFA != null) {
                chr.recreateforceAtom(faKey, recreateFA);
            }
        } else {
            chr.removeForceAtomByKey(faKey);
            if (fa.getForceAtomEnum().isRemoveByPacketAtom()) {
                chr.getField().broadcastPacket(FieldPacket.removeForceAtom(1, chr.getId(), faKey));
            }
        }
    }



    public void handleGuidedForceAtomCollision(int faKey, int skillId, Position position) {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        ForceAtom forceAtom = chr.getForceAtomByKey(faKey);
        if (forceAtom == null) {
            return;
        }

        switch (skillId) {
            case GUIDED_ARROW:
                if (forceAtom.getCurRecreationCount(faKey) < forceAtom.getMaxRecreationCount(faKey)) {
                    forceAtom.incrementCurRecreationCount(faKey);
                } else {
                    tsm.removeStatsBySkill(skillId);
                    chr.removeForceAtomByKey(faKey);
                }
                break;
        }
    }



    public boolean handleSecondAtomRemoveRequest(int objectId) {
        // Only used for extra shit that needs to happen upon Removing SecondAtom.
        // DOES NOT DO THE REMOVAL LOGIC.
        return true;
    }

    public void handleSecondAtomCollisionRequest(Map<Integer, Integer> attackMap) {

    }
    //endregion Atom related methods -----------------------------------------------------------------------------------



    //region CTS related methods ---------------------------------------------------------------------------------------
    /**
     * Handles when specific CTSs are removed.
     *
     * @param cts The Character Temporary Stat
     * @param option
     */
    public void handleRemoveCTS(CharacterTemporaryStat cts, Option option) {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        Option removeOpt = tsm.getOption(cts);


        /**
         *
         * Common Skills handled in separate classes as to not bloat the Job.java class with all non-class skills
         *
         */
        getCommonSkillHandlers(chr).forEach(handler -> handler.handleRemoveCTS(cts, option));



        var o = new Option();

        switch (cts) {
            // Job related
            case None:
                if (option.nOption != 6) {
                    SkillInfo si = SkillData.getSkillInfoById(FREUDS_WISDOM);
                    int slv = chr.getSkillLevel(FREUDS_WISDOM);
                    chr.addSkillCoolTime(FREUDS_WISDOM, (si.getValue(y, slv) * 1000));
                }
                break;
            case Overdrive:
                if (option.nOption > 0) {
                    EventManager.addEvent(this::setOverdriveCooldown, 50, TimeUnit.MILLISECONDS);
                }
                break;
            case GuidedArrow:
                chr.removeForceAtomByKey(tsm.getOption(GuidedArrow).xOption);
                break;
            case IndieInvincibleBelief:
            case DotHealHPPerSecond:
                var sf = ctsTimers.get(cts);
                if (sf != null) {
                    EventManager.stopTimer(sf);
                    ctsTimers.remove(cts);
                }
                break;
            case DivineEcho:
                if (option.rOption == Paladin.DIVINE_ECHO_MIMIC) {
                    for (var mimicSkillId : new int[] {
                            Paladin.WEAPON_BOOSTER_PAGE,
                            Paladin.ELEMENTAL_FORCE,
                            Paladin.SACROSANCTITY,
                            Paladin.HP_RECOVERY}) {
                        tsm.removeStatsBySkill(mimicSkillId);
                    }
                }
                break;

            // Boss related
            case PapulatusTimeLock:
                var papulatusLife = chr.getField().getLifeByTemplateIds(BossConstants.PAPULATUS_EASY_P1, BossConstants.PAPULATUS_EASY_P2,
                        BossConstants.PAPULATUS_NORMAL_P1, BossConstants.PAPULATUS_NORMAL_P2,
                        BossConstants.PAPULATUS_CHAOS_P1, BossConstants.PAPULATUS_CHAOS_P2
                );

                if (papulatusLife instanceof Mob) {
                    var pap = (Mob) papulatusLife;
                    var mts = pap.getTemporaryStat();
                    var timeOption = mts.getCurrentOptionsByMobStat(MobStat.AddEffect);
                    if (mts.hasCurrentMobStat(MobStat.AddEffect) && timeOption != null) {
                        var timeDiff = (int) timeOption.getRemainingTime() / 1000;
                        if (timeDiff > 0) {
                            o.nOption = 1;
                            o.rOption = MobSkillID.PapulatusSkill.getVal();
                            o.slv = 2;
                            o.tOption = timeDiff;
                            o.xOption = timeDiff;
                            tsm.putCharacterStatValueFromMobSkill(PapulatusTimeLock, o);
                        }
                    }
                }
                break;
        }

        tsm.sendSetStatPacket();
    }



    public void handlePutCTS(CharacterTemporaryStat cts, Option o) {

        if (cts.equals(IndieInvincibleBelief) || cts.equals(DotHealHPPerSecond)) {
            int time = cts.isIndie() ? o.tOption : o.tOption;
            int executes = time / 1000;
            ScheduledFuture sf = EventManager.addFixedRateEvent(() -> dotHealHPPerSecond(cts, o), 0, 1000, executes);
            addCTSTimer(cts, sf);
        }
    }



    private void addCTSTimer(CharacterTemporaryStat cts, ScheduledFuture sf) {
        if (ctsTimers.containsKey(cts)) {
            var oldSF = ctsTimers.get(cts);
            EventManager.stopTimer(oldSF);
            ctsTimers.remove(cts);
        }
        ctsTimers.put(cts, sf);
    }



    private void dotHealHPPerSecond(CharacterTemporaryStat cts, Option o) {
        chr.heal(chr.getHPPerc(cts.isIndie() ? o.nOption : o.nOption));
    }
    //endregion CTS related methods ------------------------------------------------------------------------------------



    //region Mob related methods ---------------------------------------------------------------------------------------
    /**
     * Handled when a mob dies
     *
     * @param attackInfo
     * @param mob The Mob that has died.
     */
    public void handleMobDeath(AttackInfo attackInfo, Mob mob) {

    }



    /**
     * Handled when chr applies a MobStat onto a mob
     *
     * @param mob
     *      Mob that the MobStat is applied to
     * @param mobStat
     *      The MobStat that is applied to the mob
     * @param option
     *      The MobStat's Option Info
     */
    public void handleApplyMobStat(Mob mob, MobStat mobStat, Option option) {
        int skillId = option.rOption; // not using Indies atm
        
        // Thief's Cunning  Link Skill
        if (!chr.hasSkillOnCooldown(THIEFS_CUNNING)) {
            SkillInfo si = SkillData.getSkillInfoById(THIEFS_CUNNING);
            int slv = SkillConstants.getOriginAndLinkByStackingLink(THIEFS_CUNNING).stream().mapToInt(s -> chr.getSkillLevel(s)).sum();
            if (slv <= 0) {
                return;
            }
            TemporaryStatManager tsm = chr.getTemporaryStatManager();
            Option o = new Option();

            o.nOption = si.getValue(indieDamR, slv);
            o.rOption = si.getSkillId();
            o.tOption = si.getValue(time, slv);

            tsm.putCharacterStatValue(IndieDamR, o, true);
            tsm.sendSetStatPacket();

            chr.addSkillCoolTime(THIEFS_CUNNING, si.getValue(cooltime, slv) * 1000);
        }
    }



    /**
     * Handled when a MobStat is removed
     *
     * @param mobStat
     */
    public void handleRemoveMobStat(MobStat mobStat, Mob mob, Option option) {
        var tsm = chr.getTemporaryStatManager();

        var o = new Option();

        switch (mobStat) {
            case AddEffect:
                var papulatusTimeClockOption = tsm.getOption(PapulatusTimeLock);
                if (option.slv == 2 && tsm.hasStat(PapulatusTimeLock)) {
                    // Papulatus effect
                    var timeDiff = (int) papulatusTimeClockOption.getRemainingTime() / 1000;
                    if (timeDiff > 0) {
                        o.nOption = 1;
                        o.rOption = MobSkillID.PapulatusSkill.getVal();
                        o.slv = option.slv;
                        o.tOption = timeDiff;
                        o.xOption = timeDiff;
                        tsm.putCharacterStatValueFromMobSkill(PapulatusTimeLock, o);
                    }
                }
                break;
        }

        tsm.sendSetStatPacket();
    }



    /**
     * Handled when a mob is hit
     *
     * @param chr
     * @param mob
     * @param damage
     */
    public void handleMobDamaged(Char chr, Mob mob, long damage) {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        MobTemporaryStat mts = mob.getTemporaryStat();
    }
    //endregion Mob related methods ------------------------------------------------------------------------------------



    //region Char related methods --------------------------------------------------------------------------------------
    /**
     * Handles the initial part of a hit, the initial packet processing.
     *
     * @param inPacket The packet to be processed
     */
    public void handleHit(InPacket inPacket) {
        if (chr.isInvincible()) {
            return;
        }

        HitInfo hitInfo = new HitInfo();
        // cryto.username
        inPacket.decodeInt(); // Unknown
        hitInfo.damagedTime = inPacket.decodeInt();
        hitInfo.attackIdx = inPacket.decodeByte(); // -1 attack idx = body (touch) attack
        hitInfo.elemAttr = inPacket.decodeByte();
        inPacket.decodeByte(); // New 218
        hitInfo.hpDamage = inPacket.decodeInt();
        inPacket.decodeByte(); // Hardcoded 0
        inPacket.decodeByte(); // Unknown
        boolean knockBack;
        if (hitInfo.attackIdx <= AttackIndex.Counter.getVal()) {
            hitInfo.obstacle = inPacket.decodeShort();
        } else {
            hitInfo.mobID = inPacket.decodeInt();
            inPacket.decodeInt(); // new 218

            inPacket.decodeInt(); // -1, new 223
            inPacket.decodeInt(); // new 223
            inPacket.decodeInt(); // -1, new 223
            inPacket.decodeInt(); // new 223
            inPacket.decodeInt(); // new 223
            inPacket.decodeInt(); // new 223
            inPacket.decodeInt(); // new 223

            inPacket.decodeInt(); // another templateId (new 223)
            inPacket.decodeByte();
            inPacket.decodeInt(); // unk 232
            hitInfo.templateID = inPacket.decodeInt();
            hitInfo.mobIdForMissCheck = inPacket.decodeInt();
            hitInfo.isLeft = inPacket.decodeByte() != 0;
            hitInfo.blockSkillId = inPacket.decodeInt();
            hitInfo.reducedDamage = inPacket.decodeInt();
            hitInfo.reflect = inPacket.decodeByte();
            hitInfo.guard = inPacket.decodeByte();
            if (hitInfo.guard == 2) {
                knockBack = true;
            }
            if (hitInfo.guard == 2 || hitInfo.reducedDamage > 0) {
                hitInfo.powerGuard = inPacket.decodeByte() != 0; // && nReflect > 0
                hitInfo.reflectMobID = inPacket.decodeInt();
                hitInfo.hitAction = inPacket.decodeByte();
                hitInfo.hitPos = inPacket.decodePosition();
                hitInfo.userHitPos = inPacket.decodePosition();
                if (hitInfo.powerGuard) {
                    hitInfo.reflectDamage = inPacket.decodeInt();
                }
            }
            hitInfo.stance = inPacket.decodeByte();
            hitInfo.stanceSkillID = inPacket.decodeInt();
            // 1 of these 2 got removed
//            hitInfo.cancelSkillID = inPacket.decodeInt();
            hitInfo.reductionSkillID = inPacket.decodeInt();
        }
        inPacket.decodeByte(); // Hardcoded 0

        hitInfo.setMobAttackSkill(chr.getField());
        handleHit(chr.getClient(), inPacket, hitInfo);
        handleHit(chr.getClient(), hitInfo);
    }

    /**
     * The final part of the hit process. Assumes the correct info (wrt buffs for example) is
     * already in <code>hitInfo</code>.
     *
     * @param c       The client
     * @param hitInfo The completed hitInfo
     */
    public void handleHit(Client c, HitInfo hitInfo) {
        Char chr = c.getChr();
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        hitInfo.hpDamage = Math.max(0, hitInfo.hpDamage); // to prevent -1 (dodges) healing the player.


        /**
         *
         * Common Skills handled in separate classes as to not bloat the Job.java class with all non-class skills
         *
         */
        getCommonSkillHandlers(chr).forEach(handler -> handler.handleHit(c, hitInfo));

        // Revive Skills
        if (chr.getStat(Stat.hp) <= hitInfo.hpDamage) {
            doReviveSkill(chr, tsm);
        }


        int curHP = chr.getStat(Stat.hp);
        int newHP = curHP - hitInfo.hpDamage;

        handleChangeHP(curHP, newHP);

        if (newHP <= 0) {
            curHP = 0;
        } else {
            curHP = newHP;
        }
        chr.setStatAndSendPacket(Stat.hp, curHP);

        int curMP = chr.getStat(Stat.mp);
        int newMP = curMP - hitInfo.mpDamage;

        handleChangeMP(curMP, newMP);

        if (newMP < 0) {
            // should not happen
            curMP = 0;
        } else {
            curMP = newMP;
        }

        if (hitInfo.mobID == 0) {
            hitInfo.type = -3;
        }

        chr.setStatAndSendPacket(Stat.mp, curMP);
        chr.getField().broadcastPacket(UserRemote.hit(chr, hitInfo), chr);

        if (chr.getCopy() != null) {
            chr.write(UserRemote.hit(chr.getCopy(), hitInfo));
        }

        if (chr.getParty() != null) {
            chr.getParty().broadcast(UserRemote.receiveHP(chr), chr);
        }

        if (curHP <= 0) {
            chr.die();

        } else if (hitInfo.mobAttackSkill != null) {
            Life life = chr.getField().getLifeByObjectID(hitInfo.mobID);
            if (life instanceof Mob) {
                ((Mob) life).applyHitDiseaseToPlayer(chr, hitInfo.mobAttackSkill);
            }
        }
    }

    private void doReviveSkill(Char chr, TemporaryStatManager tsm) {
        // Dark Knight - Final Pact
        if (JobConstants.isDarkKnight(chr.getJob())) {
            ((DarkKnight) chr.getJobHandler()).reviveByFinalPact();
        }

        // Global Revives ---------------------------------------

        // Global - Door (Bishop)
        else if (tsm.hasStatBySkillId(Bishop.HEAVENS_DOOR)) {
            Bishop.reviveByHeavensDoor(chr);
        } else if (tsm.hasStatBySkillId(MIGHT_OF_THE_NOVA_BUFF)) {
            Job.reviveByMightOfNova(chr);
        }

        // Global - Shade Link Skill (Shade)
        else if (tsm.getOptByCTSAndSkill(PreReviveOnce, CLOSE_CALL_SHADE_LINK) != null || tsm.getOptByCTSAndSkill(PreReviveOnce, CLOSE_CALL_SHADE_LINK_ORIGINAl) != null) {
            reviveByCloseCall();
        }


        // Class Revives ----------------------------------------

        // Night Walker - Darkness Ascending
        else if (tsm.getOptByCTSAndSkill(ReviveOnce, NightWalker.DARKNESS_ASCENDING) != null) {
            ((NightWalker) chr.getJobHandler()).reviveByDarknessAscending();
        }

        // Blaze Wizard - Phoenix Run
        else if (tsm.getOptByCTSAndSkill(ReviveOnce, BlazeWizard.PHOENIX_RUN) != null) {
            ((BlazeWizard) chr.getJobHandler()).reviveByPhoenixRun();
        }

        // Shade - Summon Other Spirit
        else if (tsm.getOptByCTSAndSkill(ReviveOnce, Shade.SUMMON_OTHER_SPIRIT) != null) {
            ((Shade) chr.getJobHandler()).reviveBySummonOtherSpirit();
        }

        // Beast Tamer - Bear Reborn
        else if (JobConstants.isBeastTamer(chr.getJob())
                && (tsm.hasStat(CritterCrossing) || ((BeastTamer) chr.getJobHandler()).isBearMode())
                && chr.hasSkill(BeastTamer.BEAR_REBORN)
                && !chr.hasSkillOnCooldown(BeastTamer.BEAR_REBORN)
        ) {
            ((BeastTamer) chr.getJobHandler()).reviveByBearReborn();
        }

        // Zero - Rewind
        else if (tsm.getOptByCTSAndSkill(ReviveOnce, Zero.REWIND) != null) {
            ((Zero) chr.getJobHandler()).reviveByRewind();
        }

        // Phantom - Final Feint
        else if (tsm.getOptByCTSAndSkill(ReviveOnce, Phantom.FINAL_FEINT) != null) {
            ((Phantom) chr.getJobHandler()).reviveByFinalFeint();
        }
    }


    /**
     * Handles the 'middle' part of hit processing, namely the job-specific stuff like Magic Guard,
     * and puts this info in <code>hitInfo</code>.
     *
     * @param c        The client
     * @param inPacket packet to be processed
     * @param hitInfo  The hit info that should be altered if necessary
     */
    public void handleHit(Client c, InPacket inPacket, HitInfo hitInfo) {
        Char chr = c.getChr();
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        Option o1 = new Option();
        Option o2 = new Option();
        Field field = chr.getField();

        // Mages - Ethereal Form
        if (chr.hasSkill(ETHEREAL_FORM) && tsm.hasStat(EtherealForm)) {
            int mpDmg = tsm.getOption(EtherealForm).nOption;
            int hpDmg = tsm.getOption(EtherealForm).yOption;
            int remainingMP = chr.getMP() - mpDmg;
            if (chr.getMP() > 0) {
                hitInfo.mpDamage = remainingMP < 0 ? chr.getMP() : mpDmg;
                hitInfo.hpDamage = remainingMP < 0 ? (Math.max(hpDmg - chr.getMP(), 0)) : 0;
            } else {
                hitInfo.hpDamage = hpDmg;
            }
        }

        // Wind Archer - Gale Barrier
        if (chr.hasSkill(WindArcher.GALE_BARRIER) && tsm.hasStat(GaleBarrier) && hitInfo.hpDamage > 0) {
            double hpDmgR = (((double) hitInfo.hpDamage) / chr.getMaxHP()) * 100;
            ((WindArcher) chr.getJobHandler()).diminishGaleBarrier((int) hpDmgR);
            hitInfo.hpDamage = 0;
        }

        // General - Damage Reduce
        if (hitInfo.hpDamage > 0 && hitInfo.fixDamR == 0) {
            long totalDmgReduceR = chr.getTotalStat(BaseStat.dmgReduce);

            if (totalDmgReduceR > 0) {
                hitInfo.hpDamage -= (int) ((hitInfo.hpDamage * totalDmgReduceR / 100D) > hitInfo.hpDamage ? hitInfo.hpDamage : (hitInfo.hpDamage * totalDmgReduceR / 100D));
            }
        }

        // Dodged an attack while affected by Xenon Hypogram Support Field.
        // If Ally dodges an attack, Support field owner gains 1 Power Unit (Xenon Core Unit)
        if (hitInfo.hpDamage <= 0 && tsm.hasStatBySkillId(Xenon.HYPOGRAM_FIELD_SUPPORT)) {
            var opt = tsm.getOptByCTSAndSkill(IndieMHPR, Xenon.HYPOGRAM_FIELD_SUPPORT);
            if (opt != null && opt.chr != chr && chr.isInAPartyWith(opt.chr) && chr.getField() == opt.chr.getField()) { // Only when allies evade
                ((Xenon) opt.chr.getJobHandler()).incrementSupply();
            }
        }

        // Mihile - Shield of Light
        if (tsm.hasStat(RhoAias)) {
            // Hack Checks for Party members being in the shield rect.
            Char mihileChr = chr.getField().getCharByID(tsm.getOption(RhoAias).xOption);
            if (mihileChr != null) {
                ((Mihile) mihileChr.getJobHandler()).hitShieldOfLight();
            }
        }

        // Warrior V - Impenetrable Skin
        if (tsm.hasStat(ImpenetrableSkin) && chr.hasSkill(IMPENETRABLE_SKIN)) {
            Skill skill = chr.getSkill(IMPENETRABLE_SKIN);
            SkillInfo si = SkillData.getSkillInfoById(skill.getSkillId());
            int slv = skill.getCurrentLevel();
            int count = tsm.getOption(ImpenetrableSkin).xOption;
            if (count < si.getValue(y, slv)) {
                count++;

                o1.nOption = 100;
                o1.rOption = skill.getSkillId();
                o1.tOption = (int) (tsm.getRemainingTime(ImpenetrableSkin, IMPENETRABLE_SKIN));
                o1.xOption = count;
                o1.setInMillis(true);
                tsm.putCharacterStatValue(ImpenetrableSkin, o1, true);
                o2.nOption = si.getValue(x, slv) * count;
                o2.rOption = skill.getSkillId();
                o2.tOption = (int) (tsm.getRemainingTime(ImpenetrableSkin, IMPENETRABLE_SKIN));
                o2.setInMillis(true);
                tsm.putCharacterStatValue(IndieDamR, o2, true);
                tsm.sendSetStatPacket();
            }
        }

        // Bishop - Holy Magic Shell
        if (tsm.hasStat(HolyMagicShell)) {
            if (tsm.getOption(HolyMagicShell).xOption > 0) {
                Option o = new Option();
                o.nOption = tsm.getOption(HolyMagicShell).nOption;
                o.rOption = tsm.getOption(HolyMagicShell).rOption;
                o.tOption = (int) tsm.getRemainingTime(HolyMagicShell, o.rOption);
                o.xOption = tsm.getOption(HolyMagicShell).xOption - 1;
                o.setInMillis(true);
                tsm.putCharacterStatValue(HolyMagicShell, o);
                tsm.sendSetStatPacket();
            } else {
                tsm.removeStatsBySkill(Bishop.HOLY_MAGIC_SHELL);
            }
        }

        // Mihile - Soul Link
        if (tsm.hasStat(MichaelSoulLink) && chr.getId() != tsm.getOption(MichaelSoulLink).cOption) {
            Party party = chr.getParty();

            PartyMember mihileInParty = party.getPartyMemberByID(tsm.getOption(MichaelSoulLink).cOption);
            if (mihileInParty != null) {
                Char mihileChr = mihileInParty.getChr();
                Skill skill = mihileChr.getSkill(SOUL_LINK);
                SkillInfo si = SkillData.getSkillInfoById(skill.getSkillId());
                int slv = skill.getCurrentLevel();

                int hpDmg = hitInfo.hpDamage;
                int mihileDmgTaken = (int) (hpDmg * ((double) si.getValue(q, slv) / 100));

                hitInfo.hpDamage = hitInfo.hpDamage - mihileDmgTaken;
                mihileChr.damage(mihileDmgTaken);
            } else {
                tsm.removeStatsBySkill(SOUL_LINK);
                tsm.removeStatsBySkill(ROYAL_GUARD);
                tsm.removeStatsBySkill(ENDURING_SPIRIT);
                tsm.sendResetStatPacket();
            }
        }

        // Paladin - Parashock Guard
        var party = chr.getParty();
        if (tsm.hasStat(FireAura) && chr.getId() != tsm.getOption(FireAura).nOption && party != null) {
            PartyMember paladinInParty = party.getPartyMemberByID(tsm.getOption(FireAura).nOption);
            if (paladinInParty != null) {
                Char paladinChr = paladinInParty.getChr();
                Skill skill = paladinChr.getSkill(PARASHOCK_GUARD);
                SkillInfo si = SkillData.getSkillInfoById(skill.getSkillId());
                int slv = skill.getCurrentLevel();

                int dmgReductionR = si.getValue(y, slv);
                int dmgReduceAmount = (int) (hitInfo.hpDamage * ((double) dmgReductionR / 100));
                hitInfo.hpDamage = hitInfo.hpDamage - dmgReduceAmount;
            }
        }

        // Magic Guard
        if (chr.getTotalStat(BaseStat.magicGuard) > 0 && hitInfo.fixDamR == 0) {
            int dmgPerc = chr.getTotalStat(BaseStat.magicGuard);
            int dmg = hitInfo.hpDamage;
            int mpDmg = (int) (dmg * (dmgPerc / 100D));
            mpDmg = chr.getStat(Stat.mp) - mpDmg < 0 ? chr.getStat(Stat.mp) : mpDmg;
            hitInfo.hpDamage = dmg - mpDmg;
            hitInfo.mpDamage = mpDmg;
        }

        // Protective Shields
        if (chr.getTotalStat(BaseStat.protectiveShield) > 0) {
            var newHpDamage = hitInfo.hpDamage;
            var ctsList = tsm.getProtectiveShields();
            for (var cts : ctsList) {
                var removedSkills = new ArrayList<Integer>();
                var opts = tsm.getOptions(cts);
                for (var opt : opts) {
                    // Update hitInfo.hpDamage
                    newHpDamage = Math.max(0, newHpDamage - opt.nOption);

                    // Update Shield
                    opt.nOption = Math.max(0, opt.nOption - hitInfo.hpDamage);
                    if (opt.nOption <= 0) {
                        removedSkills.add(opt.rOption);
                    } else {
                        tsm.updateBuff(cts, opt);
                    }
                }
                removedSkills.forEach(tsm::removeStatsBySkill);
            }

            hitInfo.hpDamage = newHpDamage;
        }

        // True Nobility
        if (hitInfo.hpDamage > 0 && tsm.hasStat(LW_Nobility)) {
            var nobilityOwner = chr.getField().getCharByID(tsm.getOption(LW_Nobility).xOption);
            if (nobilityOwner != null) {
                var shieldMulti = tsm.getOption(LW_Nobility).yOption;
                var shieldAmount = (int) ((hitInfo.hpDamage * shieldMulti) / 100D);
                nobilityOwner.write(UserLocal.trueNobilityShield(shieldAmount));
            }
        }


        // Miss or Evade
        if (hitInfo.hpDamage <= 0) {

            // Hypogram Field  Support or Fusion
            if (chr.getParty() != null) {
                for (AffectedArea aa : field.getAffectedAreas().stream().filter(aa -> aa.getSkillID() == Xenon.HYPOGRAM_FIELD_SUPPORT || aa.getSkillID() == Xenon.HYPOGRAM_FIELD_FUSION).collect(Collectors.toList())) {
                    boolean isInsideAA = aa.getRect().hasPositionInside(chr.getPosition());
                    if (!isInsideAA) {
                        continue;
                    }
                    Option supportOption = tsm.getOptByCTSAndSkill(IndieMHPR, Xenon.HYPOGRAM_FIELD_SUPPORT);
                    if (supportOption != null) {
                        Char xenonChr = chr.getParty().getPartyMemberByID(supportOption.wOption).getChr();
                        if (xenonChr != null && xenonChr.getField() == chr.getField() && xenonChr != chr) {
                            ((Xenon) xenonChr.getJobHandler()).incrementSupply(1);
                        }
                    }
                    Option fusionOption = tsm.getOptByCTSAndSkill(IndieDamR, Xenon.HYPOGRAM_FIELD_FUSION);
                    if (fusionOption != null) {
                        Char xenonChr = chr.getParty().getPartyMemberByID(fusionOption.wOption).getChr();
                        if (xenonChr != null && xenonChr.getField() == chr.getField() && xenonChr != chr) {
                            ((Xenon) xenonChr.getJobHandler()).incrementSupply(1);
                        }
                    }
                }
            }
        }
    }



    public void handleLevelUp() {
        var cs = chr.getAvatarData().getCharacterStat();

        short level = chr.getLevel();
        Map<Stat, Object> stats = new HashMap<>();
        if (level > 10) {
            chr.addStat(Stat.ap, 5);
            stats.put(Stat.ap, (short) chr.getStat(Stat.ap));
        } else {
            if (level >= 6) {
                chr.addStat(Stat.str, 4);
                chr.addStat(Stat.dex, 1);
            } else {
                chr.addStat(Stat.str, 5);
            }
            stats.put(Stat.str, (short) chr.getStat(Stat.str));
            stats.put(Stat.dex, (short) chr.getStat(Stat.dex));
        }
        int sp = SkillConstants.getBaseSpByLevel(level);
        if ((level % 10) % 3 == 0 && level > 100) {
            sp *= 2; // double sp on levels ending in 3/6/9
        }
        chr.addSpToJobByCurrentLevel(sp);


        if (JobConstants.isExtendSpJob(chr.getJob())) {
            stats.put(Stat.sp, cs.getExtendSP());
        } else {
            stats.put(Stat.sp, cs.getSp());
        }

        // Link Skill
        chr.giveLinkSkillToAccount();

        int[] hpMpToAdd = GameConstants.getHpMpPerLevel(chr.getJob());
        int hp = hpMpToAdd[0];
        int mp = hpMpToAdd[1];
        chr.addStatAndSendPacket(Stat.mhp, hp);
        if (!JobConstants.isNoManaJob(chr.getJob())) {
            chr.addStatAndSendPacket(Stat.mmp, mp);
        }

        chr.write(WvsContext.statChanged(stats));

        if (chr.getWorld().isReboot()) {
            Skill skill = SkillData.getSkillDeepCopyById(REBOOT2);
            skill.setCurrentLevel(level);
            chr.addSkill(skill);
        }

        switch (level) {
            case 10: {
                String message = "#b[Guide] 1st Job Advancement#k\r\n\r\n";
                message += "You've reached level 10, and are ready for your #b[1st Job Advancement]#k!\r\n\r\n";
                message += "Complete the #r[Job Advancement]#k quest and unlock your 1st job advancement!\r\n";
                chr.write(UserLocal.addPopupSay(9010000, 6000, message, "FarmSE.img/boxResult"));
                break;
            }
            case 20: {
                String message;
                if (chr.getJob() == JobConstants.JobEnum.THIEF.getJobId() && chr.getSubJob() == 1) {
                    message = "#b[Guide] 1.5th Job Advancement#k\r\n\r\n";
                    message += "You've reached level 20 and are ready for your #b[1.5th Job Advancement]#k!\r\n\r\n";
                    message += "Complete the #r[Job Advancement]#k quest to unlock your 1.5th job advancement!\r\n";
                    chr.write(UserLocal.addPopupSay(9010000, 6000, message, "FarmSE.img/boxResult"));
                }
                message = "#b[Guide] Upgrade#k\r\n\r\n";
                message += "You've reached level 20, and can now use #b[Scroll Enhancement]#k!\r\n\r\n";
                message += "Accept the quest #bDo You Know About Scroll Enhancements?#k from the Quest Notifier!\r\n";
                chr.write(UserLocal.addPopupSay(9010000, 6000, message, "FarmSE.img/boxResult"));
                break;
            }
            case 30: {
                String message = "#b[Guide] 2nd Job Advancement#k\r\n\r\n";
                message += "You've reached level 30, and are ready for your #b[2nd Job Advancement]#k!\r\n\r\n";
                message += "Complete the #r[Job Advancement]#k quest to unlock your 2nd job advancement!\r\n";
                chr.write(UserLocal.addPopupSay(9010000, 6000, message, "FarmSE.img/boxResult"));

                message = "#b[Guide] Ability#k\r\n\r\n";
                message += "You've reached level 30 and can now unlock #b[Abilities]#k!\r\n\r\n";
                message += "Accept the quest #bFirst Ability - The Eye Opener#k from the Quest Notifier!\r\n";
                chr.write(UserLocal.addPopupSay(9010000, 6000, message, "FarmSE.img/boxResult"));
                break;
            }
            case 31: {
                String message = "#b[Guide] Traits#k\r\n\r\n";
                message += "From level 30 and can now unlock #b[Traits]#k!\r\n\r\n";
                message += "Open your #bProfession UI (Default Hotkey: B)#k and check your #b[Traits]#k!\r\n";
                chr.write(UserLocal.addPopupSay(9010000, 6000, message, "FarmSE.img/boxResult"));
                break;
            }

            // Commerci
            case 140:
                chr.getQuestManager().completeQuest(QuestConstants.VOYAGE_PRE_QUEST);
                break;

            // Exclusive Spell
            case 200:
                var exclusiveSpell = SkillConstants.getExclusiveSpellSkillByJob(chr.getJob());
                if (exclusiveSpell > 0) {
                    chr.addSkill(exclusiveSpell, 1, 1);
                }
                break;
        }
        chr.heal(chr.getMaxHP());
        chr.healMP(chr.getMaxMP());
    }



    public void setCharCreationStats(Char chr) {
        CharacterStat characterStat = chr.getAvatarData().getCharacterStat();
        characterStat.setLevel(1);
        characterStat.setStr(12);
        characterStat.setDex(5);
        characterStat.setInt(4);
        characterStat.setLuk(4);
        characterStat.setHp(50);
        characterStat.setMaxHp(50);
        characterStat.setMp(50);
        characterStat.setMaxMp(50);

        characterStat.setPosMap(100000000);// should be handled for eah job not here
        Item whitePot = ItemData.getItemDeepCopy(2000002);
        whitePot.setQuantity(100);
        chr.addItemToInventory(whitePot);
        Item manaPot = ItemData.getItemDeepCopy(2000006);
        manaPot.setQuantity(100);
        chr.addItemToInventory(manaPot);
        Item hyperTp = ItemData.getItemDeepCopy(5040004);
        chr.addItemToInventory(hyperTp);

    }

    public void GiveVSkills(Char chr) {
        for(int VSkill : JobConstants.GetVSkillsToGiveUponReachingV((int)chr.getJob())) {
            VCoreInfo vci = VCoreData.getJobSkills().get((int) chr.getJob()).stream().filter(skill -> skill.getSkillID() == VSkill).findFirst().orElse(null);
            if (vci != null) {
                MatrixRecord mr = new MatrixRecord(chr);
                mr.setIconID(vci.getIconID());
                mr.setMaxLevel(vci.getMaxLevel());
                mr.setSkillID1(vci.getSkillID());
                mr.setSlv(1);

                chr.addMatrixRecord(mr);
                chr.write(WvsContext.matrixUpdate(chr, false, 0, 0));
            } else {
                chr.chatMessage("the following skillid is an invalid id to give as V skill" + VSkill);
            }
        }
    }



    public void onWarp(Field oldField, Field newField) {

        if (resolution.length() > 0) { // Custom Screen Effect is on. Thus apply it again after warping.
            chr.activateCustomEffect(resolution, 0);
        }

        // BeastTamer - Cat Buffs
        if (!JobConstants.isBeastTamer(chr.getJob())) {
            TemporaryStatManager tsm = chr.getTemporaryStatManager();
            for (int skillId : BeastTamer.catBuffs) {
                if (tsm.hasStatBySkillId(skillId)) {
                    tsm.removeStatsBySkill(skillId);
                }
            }
        }

        // Paladin - Divine Echo
        if (chr.getTemporaryStatManager().hasStatBySkillId(Paladin.DIVINE_ECHO_MIMIC)) {
            var opt = chr.getTemporaryStatManager().getOption(DivineEcho);
            var palaChrId = opt.xOption;
            var palaChr = oldField.getCharByID(palaChrId);
            if (palaChr != null) {
                var palaOpt = palaChr.getTemporaryStatManager().getOption(DivineEcho);
                palaOpt.nOption = palaChrId;  // mark divine echo as inactive
            }
            chr.getTemporaryStatManager().removeStatsBySkill(DIVINE_ECHO_MIMIC);
        }

        // Adele - Nobility
        var tsm = chr.getTemporaryStatManager();
        if (tsm.hasStat(LW_Nobility) && tsm.getOption(LW_Nobility).chr != chr) {
            tsm.removeStatsBySkill(Adele.NOBILITY);
        }
    }


    /**
     * Called when player leaves the party.
     */
    public void onLeaveParty() {

        // If user has Divine Echo (Mimic) remove it.
        if (chr.getTemporaryStatManager().hasStatBySkillId(Paladin.DIVINE_ECHO_MIMIC)) {
            var opt = chr.getTemporaryStatManager().getOption(DivineEcho);
            var palaChrId = opt.xOption;
            var palaChr = chr.getField().getCharByID(palaChrId);
            if (palaChr != null) {
                var palaOpt = palaChr.getTemporaryStatManager().getOption(DivineEcho);
                palaOpt.nOption = palaChrId; // mark divine echo as inactive
            }
            chr.getTemporaryStatManager().removeStatsBySkill(DIVINE_ECHO_MIMIC);
        }

        // Adele - Nobility
        var tsm = chr.getTemporaryStatManager();
        if (tsm.hasStat(LW_Nobility) && tsm.getOption(LW_Nobility).chr != chr) {
            tsm.removeStatsBySkill(Adele.NOBILITY);
        }
    }



    /**
     * Gets called when Character receives a debuff from a Mob Skill
     *
     * @param chr The Character
     */
    public void handleMobDebuffSkill(Char chr) {

    }



    public void handleChangeHP(int curHP, int newHP) {

        /**
         *
         * Common Skills handled in separate classes as to not bloat the Job.java class with all non-class skills
         *
         */
        getCommonSkillHandlers(chr).forEach(handler -> handler.handleChangeHP(curHP, newHP));



        // Invincible Belief  |  Warrior Explorer Link Skill
        if (!chr.hasSkillOnCooldown(INVINCIBLE_BELIEF)) {
            int slv = SkillConstants.getOriginAndLinkByStackingLink(INVINCIBLE_BELIEF).stream().mapToInt(s -> chr.getSkillLevel(s)).sum();
            if (slv > 0) {
                SkillInfo si = SkillData.getSkillInfoById(INVINCIBLE_BELIEF);
                int hpThreshold = chr.getHPPerc(si.getValue(x, slv));
                int healAmount = si.getValue(y, slv);
                if (newHP <= hpThreshold) {
                    TemporaryStatManager tsm = chr.getTemporaryStatManager();
                    Option o = new Option();
                    o.nOption = healAmount;
                    o.rOption = INVINCIBLE_BELIEF;
                    o.tOption = si.getValue(time, slv);
                    tsm.putCharacterStatValue(IndieInvincibleBelief, o, true);
                    tsm.sendSetStatPacket();
                    chr.addSkillCoolTime(INVINCIBLE_BELIEF, si.getValue(cooltime, slv) * 1000);
                }
            }
        }
    }


    public void handleChangeMP(int curMP, int newMP) {
        /**
         *
         * Common Skills handled in separate classes as to not bloat the Job.java class with all non-class skills
         *
         */
        getCommonSkillHandlers(chr).forEach(handler -> handler.handleChangeMP(curMP, newMP));
    }



    public void stopTimers() {
    }


    public void activateCustomEffect(String res, int fadeDuration) {

    }

    public void deactivateCustomEffect() {

    }


    //endregion Char related methods -----------------------------------------------------------------------------------
}
