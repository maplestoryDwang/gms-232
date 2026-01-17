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
import net.swordie.ms.client.jobs.nova.Kain;
import net.swordie.ms.connection.InPacket;
import net.swordie.ms.loaders.SkillData;

import static net.swordie.ms.client.character.skills.SkillStat.*;
import static net.swordie.ms.client.character.skills.temp.CharacterTemporaryStat.IndieNBDR;
import static net.swordie.ms.client.character.skills.temp.CharacterTemporaryStat.NatureFriend;
import static net.swordie.ms.client.character.skills.temp.CharacterTemporaryStat.IndieDamR;
import static net.swordie.ms.client.character.skills.temp.CharacterTemporaryStat.PriorPreparation;

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
        //
        // Kain : Time to Prepare
        // Upon defeating 8 enemies or hitting boss 5 times, increment count. Upon reaching 5 counts, give {w} Damage buff for {time} and place skill on cooldown for {cooltime}
        //
        if (chr.hasSkill(Kain.PRIOR_PREPARATION_ORIGIN) || chr.hasSkill(Kain.PRIOR_PREPARATION_LINKED)) {
            priorPreparation(attackInfo);
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

    private void priorPreparation(AttackInfo attackInfo) {
        if (chr.hasSkillOnCooldown(Kain.PRIOR_PREPARATION_ORIGIN)) {
            return;
        }

        int slv = Math.max(
                chr.getSkillLevel(Kain.PRIOR_PREPARATION_LINKED),
                chr.getSkillLevel(Kain.PRIOR_PREPARATION_ORIGIN)
        );
        if (slv <= 0) {
            return;
        }

        var si = SkillData.getSkillInfoById(Kain.PRIOR_PREPARATION_ORIGIN);
        if (si == null) {
            return;
        }

        var tsm = chr.getTemporaryStatManager();

        int prepStacks = 0;
        int mobKills = 0;
        int bossHits = 0;

        if (tsm.hasStat(PriorPreparation)) {
            var o = tsm.getOption(PriorPreparation);
            prepStacks = o.nOption;
            mobKills = o.xOption;
            bossHits = o.yOption;
        }

        int mobThreshold = si.getValue(x, slv);
        int bossThreshold = si.getValue(w, slv);
        int maxPrep = si.getValue(u, slv);

        boolean changed = false;

        for (var mai : attackInfo.mobAttackInfo) {
            if (mai.isBoss) {
                bossHits++;
                changed = true;

                if (bossHits >= bossThreshold) {
                    prepStacks++;
                    bossHits = 0;
                    mobKills = 0;
                    break;
                }
            } else if (mai.mobDies) {
                mobKills++;
                changed = true;

                if (mobKills >= mobThreshold) {
                    prepStacks++;
                    bossHits = 0;
                    mobKills = 0;
                    break;
                }
            }
        }

        if (!changed) {
            return;
        }

        prepStacks = Math.min(prepStacks, maxPrep);

        if (prepStacks >= maxPrep) {
            tsm.removeStatsBySkill(Kain.PRIOR_PREPARATION_LINKED_BUFF);

            int dmgInc = si.getValue(y, slv);
            int dur = si.getValue(time, slv);

            tsm.putCharacterStatValue(
                    IndieDamR,
                    new Option(dmgInc, Kain.PRIOR_PREPARATION_ORIGIN, dur),
                    true
            );
            tsm.sendSetStatPacket();

            chr.setSkillCooldown(Kain.PRIOR_PREPARATION_ORIGIN, slv);
        } else {
            var o = new Option(prepStacks, Kain.PRIOR_PREPARATION_LINKED_BUFF, 0);
            o.xOption = mobKills;
            o.yOption = bossHits;

            tsm.putCharacterStatValue(PriorPreparation, o, true);
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
