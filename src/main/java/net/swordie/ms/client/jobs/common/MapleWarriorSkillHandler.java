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
import net.swordie.ms.loaders.SkillData;

import static net.swordie.ms.client.character.skills.SkillStat.time;
import static net.swordie.ms.client.character.skills.SkillStat.x;
import static net.swordie.ms.client.character.skills.temp.CharacterTemporaryStat.BasicStatUp;

/**
 * Created on 08/12/2021.
 *
 * @author Asura
 */
public class MapleWarriorSkillHandler implements ICommonSkillHandler {

    private Char chr;

    public MapleWarriorSkillHandler(Char chr) {
        this.chr = chr;
    }

    @Override
    public void handleSkill(Char chr, TemporaryStatManager tsm, int skillId, int slv, InPacket inPacket, SkillUseInfo skillUseInfo) {
        Skill skill = chr.getSkill(skillId);
        SkillInfo si = null;
        if (skill != null) {
            si = SkillData.getSkillInfoById(skillId);
        }
        if (si != null && SkillConstants.isMapleWarriorSkill(skillId)) {
            // TODO -> Logic about what MW skills can stack and which one cancel out
            tsm.putCharacterStatValue(BasicStatUp, new Option(si.getValue(x, slv), skillId, si.getValue(time, slv)));
            tsm.sendSetStatPacket();
        }
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
