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

/**
 * Created on 09/07/2021.
 *
 * @author Asura
 */
public interface ICommonSkillHandler {

    void handleSkill(Char chr, TemporaryStatManager tsm, int skillId, int slv, InPacket inPacket, SkillUseInfo skillUseInfo);

    void handleAttack(Client c, AttackInfo attackInfo);

    void handleHit(Client c, HitInfo hitInfo);

    void handleRemoveCTS(CharacterTemporaryStat cts, Option o);

    void handleChangeHP(int curHP, int newHP);

    void handleChangeMP(int curMP, int newMP);
}
