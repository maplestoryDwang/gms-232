package net.swordie.ms.client.jobs.common;

import net.swordie.ms.client.Client;
import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.info.HitInfo;
import net.swordie.ms.client.character.skills.Option;
import net.swordie.ms.client.character.skills.Skill;
import net.swordie.ms.client.character.skills.info.AttackInfo;
import net.swordie.ms.client.character.skills.info.SkillInfo;
import net.swordie.ms.client.character.skills.info.SkillUseInfo;
import net.swordie.ms.client.character.skills.temp.CharacterTemporaryStat;
import net.swordie.ms.client.character.skills.temp.TemporaryStatManager;
import net.swordie.ms.connection.InPacket;
import net.swordie.ms.constants.SkillConstants;
import net.swordie.ms.enums.MoveAbility;
import net.swordie.ms.handlers.header.OutHeader;
import net.swordie.ms.life.Summon;
import net.swordie.ms.loaders.SkillData;
import net.swordie.ms.world.field.Field;

import static net.swordie.ms.client.character.skills.SkillStat.*;
import static net.swordie.ms.client.character.skills.temp.CharacterTemporaryStat.*;

/**
 * Created on 09/07/2021.
 *
 * @author Asura
 */
public class SoulSkillHandler implements ICommonSkillHandler {


    /* Soul Skills */
    public static final int EMPRESS_OF_FLAMES = 80001266;
    public static final int HELLFIRE_SNEEZE = 80001267;
    public static final int CAT_SMACK = 80001268;
    public static final int CUTE_OVERLOAD = 80001269;
    public static final int EMPRESS_OF_FURY = 80001270;
    public static final int BAAA_BAAA_ATTACK = 80001273;
    public static final int BURNING_TOTEM_DROP = 80001274;
    public static final int A_QUEENLY_FRAGRANCE = 80001280;
    public static final int SNAKE_EYE = 80001281;
    public static final int SNAKE_BITE = 80001282;
    public static final int TERRIBLE_PIANUS = 80001321;
    public static final int HILLA_FURY = 80001322;
    public static final int HILLA_THUNDER = 80001323;
    public static final int PINK_POISON_FOG = 80001339;
    public static final int ADVANCE_OF_MAGNUS = 80001340;
    public static final int WRATH_OF_MAGNUS = 80001341;
    public static final int MURGOTH_STRANGE_COMPANY = 80001395;
    public static final int MURGOTH_SUSPICIOUS_COMPANY = 80001396;
    public static final int BLACK_KNIGHT = 80001493;
    public static final int PITCH_BLACK_KNIGHT = 80001494;
    public static final int MAD_MAGE = 80001495;
    public static final int COMPLETELY_MAD_MAGE = 80001496;
    public static final int RAMPANT_CYBORG = 80001497;
    public static final int FULLY_RAMPANT_CYBORG = 80001498;
    public static final int VICIOUS_HUNTER = 80001499;
    public static final int UTTERLY_VICIOUS_HUNTER = 80001500;
    public static final int BAD_BRAWLER = 80001501;
    public static final int REAL_BAD_BRAWLER = 80001502;
    public static final int PIERRES_HAT_TRICK = 80001680;
    public static final int PIERRES_SURPRISE_SUMMON_1 = 80001681;
    public static final int PIERRES_SURPRISE_SUMMON_2 = 80001682;
    public static final int PIERRES_SURPRISE_SUMMON_3 = 80001683;
    public static final int CHICKEN_LICKIN = 80001684;
    public static final int CHICKEN_RISING = 80001685;
    public static final int FICKLE_QUEEN_BUFF_1 = 80001686;
    public static final int FICKLE_QUEEN_BUFF_2 = 80001687;
    public static final int FICKLE_QUEEN_BUFF_3 = 80001688;
    public static final int FICKLE_QUEEN_BUFF_4 = 80001689;
    public static final int LONG_LIVE_THE_QUEEN_SUMMON_1 = 80001690;
    public static final int LONG_LIVE_THE_QUEEN_SUMMON_2 = 80001691;
    public static final int LONG_LIVE_THE_QUEEN_SUMMON_3 = 80001692;
    public static final int LONG_LIVE_THE_QUEEN_SUMMON_4 = 80001693;
    public static final int VELLUM_RAGE = 80001694;
    public static final int JR_VELLUM = 80001695;
    public static final int LOTUS_STRIKE = 80001696;
    public static final int LOTUS_ENRAGED = 80001697;
    public static final int PIERRE_SURPRISE = 80001698;
    public static final int FICKLE_QUEEN = 80001699;
    public static final int LONG_LIVE_THE_QUEEN = 80001700;
    public static final int HELLFIRE_BURP = 80001797;
    public static final int GET_OUTTA_THE_WAY = 80001799;
    public static final int THE_ONE_AND_ONLY = 80001800;
    public static final int WIND_PALM = 80001801;
    public static final int KITTY_CLAWS = 80001802;
    public static final int HOT_TOTEM_DROP = 80001803;
    public static final int ROCK_AND_ROLL_BABY = 80001804;
    public static final int MEMORIES = 80001805;
    public static final int MORE_THAN_A_CUTIE = 80001806;
    public static final int MIGHTY_ROAR = 80001807;
    public static final int FEROCIOUS_ROAR = 80001808;
    public static final int HAPPY_NEW_WEEK = 80001948;
    public static final int DARK_HUNT = 80001984;
    public static final int SWORD_OF_DESTRUCTION = 80001985;
    public static final int NIGHTMARE_INVITE = 80002230;
    public static final int MASTER_OF_NIGHTMARES = 80002231;
    public static final int RULER_OF_SPACE = 80002333;
    public static final int TIME_MASTER = 80002334;
    public static final int CRUSHING_LUNGE = 80002405;
    public static final int KING_OF_SPIDERS = 80002406;
    public static final int SOUL_REND = 80002638;
    public static final int RED_WITCH = 80002639;
    public static final int GROUND_SLASH = 80002640;
    public static final int GROUND_SMASH = 80002641;
    public static final int BEAST_OF_FURY = 80011173;
    public static final int TIGERS_TEETH = 80011174;
    public static final int NENES_SOUL = 80011337;
    public static final int TUTUS_SOUL = 80011338;
    public static final int WEIGHED_DOWN = 80011490;
    public static final int ELUNITE_VORTEX = 80011491;


    private Char chr;

    public SoulSkillHandler(Char chr) {
        this.chr = chr;
    }

    @Override
    public void handleSkill(Char chr, TemporaryStatManager tsm, int skillId, int slv, InPacket inPacket, SkillUseInfo skillUseInfo) {
        Option o1 = new Option();
        Option o2 = new Option();
        Skill skill = SkillData.getSkillDeepCopyById(skillId);
        SkillInfo si = null;
        if (skill != null) {
            si = SkillData.getSkillInfoById(skillId);
        }
        Field field = chr.getField();

        if (SkillConstants.isSoulSkill(skillId) && tsm.hasStat(SoulMP)) {
            doSoulSkill(chr, tsm, skillId, slv, si, field);
        }

        switch (skillId) {
            case A_QUEENLY_FRAGRANCE:
                o1.nOption = si.getValue(indieMhpR, slv);
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieMHPR, o1);
                o2.nOption = si.getValue(indieMmpR, slv);
                o2.rOption = skillId;
                o2.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieMMPR, o2);
                break;

            case FICKLE_QUEEN_BUFF_1: //
                slv = chr.getSkillLevel(FICKLE_QUEEN);
                o1.nOption = si.getValue(x, slv);
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieDrainHP, o1);
                break;

            case FICKLE_QUEEN_BUFF_2:
                slv = chr.getSkillLevel(FICKLE_QUEEN);
                o1.nOption = si.getValue(indieBooster, slv);
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieBooster, o1);
                break;

            case FICKLE_QUEEN_BUFF_3:
                slv = chr.getSkillLevel(FICKLE_QUEEN);
                o1.nOption = si.getValue(indiePad, slv);
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndiePAD, o1);
                o2.nOption = si.getValue(indieMad, slv);
                o2.rOption = skillId;
                o2.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieMAD, o2);
            case FICKLE_QUEEN_BUFF_4:
                slv = chr.getSkillLevel(FICKLE_QUEEN);
                o1.nOption = si.getValue(indiePdd, slv);
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieDEF, o1);
                o2.nOption = si.getValue(indieMhpR, slv);
                o2.rOption = skillId;
                o2.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieMHPR, o2);
                break;
        }

        tsm.sendSetStatPacket();
    }

    @Override
    public void handleAttack(Client c, AttackInfo attackInfo) {
        Char chr = c.getChr();
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

        // Soul Skill
        if (SkillConstants.isSoulSkill(skillID) && attackInfo.attackHeader != OutHeader.SUMMONED_ATTACK && tsm.hasStat(SoulMP)) {
            int soulMPCon = si.getValue(soulmpCon, 1);
            int curSoulMP = tsm.getOption(SoulMP).nOption;
            if (curSoulMP < soulMPCon) {
                chr.getOffenseManager().addOffense(String.format("Used a Soul Skill whilst not having enough SoulMP"));
            }
            tsm.updateSoulMP(curSoulMP - soulMPCon);
        }

        switch (skillID) {

        }
    }

    @Override
    public void handleHit(Client c, HitInfo hitInfo) {

    }

    @Override
    public void handleRemoveCTS(CharacterTemporaryStat cts, Option o) {

    }

    @Override
    public void handleChangeHP(int curHP, int newHP) {

    }

    @Override
    public void handleChangeMP(int curMP, int newMP) {

    }

    private void doSoulSkill(Char chr, TemporaryStatManager tsm, int skillId, int slv, SkillInfo si, Field field) {
        Summon summon;
        int soulMPCon = si.getValue(soulmpCon, 1);
        int curSoulMP = tsm.getOption(SoulMP).nOption;
        if (curSoulMP >= soulMPCon) {
            tsm.updateSoulMP(curSoulMP - soulMPCon);
            if (si.isSummon()) {
                summon = Summon.getSummonByNoCTS(chr, skillId, slv);
                if (skillId == NIGHTMARE_INVITE) {
                    summon.setMoveAbility(MoveAbility.Stop);
                }
                field.spawnSummonAndRemoveOld(summon);
            }
        } else {
            chr.getOffenseManager().addOffense(String.format("Used a Soul Skill whilst not having enough SoulMP"));
        }
    }
}
