package net.swordie.ms.client.jobs.common;

import net.swordie.ms.client.Client;
import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.info.HitInfo;
import net.swordie.ms.client.character.skills.Option;
import net.swordie.ms.client.character.skills.info.AttackInfo;
import net.swordie.ms.client.character.skills.info.SkillUseInfo;
import net.swordie.ms.client.character.skills.temp.CharacterTemporaryStat;
import net.swordie.ms.client.character.skills.temp.TemporaryStatManager;
import net.swordie.ms.connection.InPacket;
import net.swordie.ms.loaders.SkillData;
import net.swordie.ms.world.field.Field;

import static net.swordie.ms.client.character.skills.SkillStat.*;
import static net.swordie.ms.client.character.skills.temp.CharacterTemporaryStat.*;

/**
 * Created on 09/07/2021.
 *
 * @author Asura
 */
public class SpecialNodeSkillHandler implements ICommonSkillHandler {

    public static final int FRENZIED_STRENGTH = 400007002;
    public static final int LETHAL_STRIKE = 400007003;
    public static final int CONSECUTIVE_STRIKE = 400007004;
    public static final int DEFENSE_SMASH = 400007005;
    public static final int RUNE_BLESSED = 400007006;
    public static final int RUNE_EXP = 400007007;
    public static final int BOSS_SLAYER = 400007008;
    public static final int RUNE_FRENZIED = 400007009;
    public static final int FATAL_STRIKE = 400007010;
    public static final int CHARACTER_BUILDING = 400007011;


    private Char chr;

    public SpecialNodeSkillHandler(Char chr) {
        this.chr = chr;
    }

    @Override
    public void handleSkill(Char chr, TemporaryStatManager tsm, int skillId, int slv, InPacket inPacket, SkillUseInfo skillUseInfo) {
        var si = SkillData.getSkillInfoById(skillId);
        Option o1 = new Option();
        Option o2 = new Option();
        Option o3 = new Option();
        Option o4 = new Option();
        Option o5 = new Option();
        Option o6 = new Option();
        Field field = chr.getField();

        switch (skillId) {
            case FRENZIED_STRENGTH:
            case RUNE_FRENZIED:
            case FATAL_STRIKE:
                o1.nOption = si.getValue(indieDamR, slv);
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieDamR, o1);
                break;
            case LETHAL_STRIKE:
                o1.nOption = si.getValue(indieCr, slv);
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieCr, o1);
                break;
            case DEFENSE_SMASH:
                o1.nOption = si.getValue(indieIgnoreMobpdpR, slv);
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieIgnoreMobpdpR, o1);
                break;
            case CONSECUTIVE_STRIKE:
                o1.nOption = si.getValue(indieCD, slv);
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieCrDmg, o1);
                break;
            case RUNE_BLESSED:
                o1.nOption = si.getValue(indieNotDamaged, slv);
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieNotDamaged, o1, true);
                break;
            case CHARACTER_BUILDING:
            case RUNE_EXP:
                o1.nOption = si.getValue(indieExp, slv);
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieEXP, o1);
                break;
            case BOSS_SLAYER:
                o1.nOption = si.getValue(indieBDR, slv);
                o1.rOption = skillId;
                o1.tOption = si.getValue(time, slv);
                tsm.putCharacterStatValue(IndieBDR, o1);
                break;
        }

        tsm.sendSetStatPacket();
    }

    @Override
    public void handleAttack(Client c, AttackInfo attackInfo) {

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
}
