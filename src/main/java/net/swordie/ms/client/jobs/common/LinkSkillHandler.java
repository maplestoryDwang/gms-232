package net.swordie.ms.client.jobs.common;

import net.swordie.ms.client.Client;
import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.info.HitInfo;
import net.swordie.ms.client.character.skills.Option;
import net.swordie.ms.client.character.skills.info.AttackInfo;
import net.swordie.ms.client.character.skills.info.SkillUseInfo;
import net.swordie.ms.client.character.skills.temp.CharacterTemporaryStat;
import net.swordie.ms.client.character.skills.temp.TemporaryStatManager;
import net.swordie.ms.client.jobs.anima.Lara;
import net.swordie.ms.connection.InPacket;
import net.swordie.ms.loaders.SkillData;

import static net.swordie.ms.client.character.skills.SkillStat.*;
import static net.swordie.ms.client.character.skills.temp.CharacterTemporaryStat.IndieNBDR;
import static net.swordie.ms.client.character.skills.temp.CharacterTemporaryStat.NatureFriend;

/**
 * Created on 28/12/2021.
 *
 * @author Asura
 */
public class LinkSkillHandler implements ICommonSkillHandler {


    private Char chr;

    public LinkSkillHandler(Char chr) {
        this.chr = chr;
    }

    @Override
    public void handleSkill(Char chr, TemporaryStatManager tsm, int skillId, int slv, InPacket inPacket, SkillUseInfo skillUseInfo) {

    }

    @Override
    public void handleAttack(Client c, AttackInfo attackInfo) {
        //
        // Lara : Nature's Friend
        // Upon mob death, increment count. Upon defeating {x} monsters. give {w} NBDR buff for {time} and place skill on cooldown for {cooltime}
        //
        if (chr.hasSkill(Lara.NATURE_FRIEND_ORIGIN) || chr.hasSkill(Lara.NATURE_FRIEND_LINKED)) {
            natureFriend(attackInfo);
        }
    }

    private void natureFriend(AttackInfo attackInfo) {
        if (chr.hasSkillOnCooldown(Lara.NATURE_FRIEND_ORIGIN)) {
            return;
        }

        var si = SkillData.getSkillInfoById(Lara.NATURE_FRIEND_ORIGIN);
        var slv = chr.getSkillLevel(Lara.NATURE_FRIEND_LINKED);
        if (slv <= 0) {
            slv = chr.getSkillLevel(Lara.NATURE_FRIEND_ORIGIN);
        }

        var tsm = chr.getTemporaryStatManager();

        var deadMobCount = (int) (attackInfo.mobAttackInfo.stream().filter(mai -> mai.mobDies && !mai.isBoss).count());

        if (deadMobCount <= 0) {
            return;
        }

        var currentStack = tsm.getOption(NatureFriend).nOption;
        var newStack = currentStack + deadMobCount;

        var threshold = si.getValue(x, slv);
        var buffNBDRValue = si.getValue(w, slv);
        var tOpt = si.getValue(time, slv);

        var giveBuff = newStack >= threshold;

        if (giveBuff) {
            tsm.removeStatsBySkill(Lara.NATURE_FRIEND_LINKED_BUFF);
            tsm.putCharacterStatValue(IndieNBDR, new Option(buffNBDRValue, Lara.NATURE_FRIEND_ORIGIN, tOpt), true);
            tsm.sendSetStatPacket();
            chr.setSkillCooldown(Lara.NATURE_FRIEND_ORIGIN, slv);
        } else {
            tsm.putCharacterStatValue(NatureFriend, new Option(Math.max(0, Math.min(newStack, threshold)), Lara.NATURE_FRIEND_LINKED_BUFF, 0), true);
            tsm.sendSetStatPacket();
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
}
