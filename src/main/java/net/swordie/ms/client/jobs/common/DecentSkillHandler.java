package net.swordie.ms.client.jobs.common;

import net.swordie.ms.client.Client;
import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.info.HitInfo;
import net.swordie.ms.client.character.skills.Option;
import net.swordie.ms.client.character.skills.info.AttackInfo;
import net.swordie.ms.client.character.skills.info.SkillUseInfo;
import net.swordie.ms.client.character.skills.temp.CharacterTemporaryStat;
import net.swordie.ms.client.character.skills.temp.TemporaryStatManager;
import net.swordie.ms.client.jobs.Job;
import net.swordie.ms.client.jobs.adventurer.magician.Bishop;
import net.swordie.ms.connection.InPacket;
import net.swordie.ms.constants.SkillConstants;
import net.swordie.ms.enums.BaseStat;
import net.swordie.ms.enums.TSIndex;

import static net.swordie.ms.client.character.skills.temp.CharacterTemporaryStat.*;

/**
 * Created on 09/07/2021.
 *
 * @author Asura
 */
public class DecentSkillHandler implements ICommonSkillHandler {

    public static final int DECENT_SPEED_INFUSION_BASE = 8006;
    public static final int DECENT_ADV_BLESSING_BASE = 8005;
    public static final int DECENT_COMBAT_ORDERS_BASE = 8004;
    public static final int DECENT_HYPER_BODY_BASE = 8003;
    public static final int DECENT_SHARP_EYES_BASE = 8002;
    public static final int DECENT_MYSTIC_DOOR_BASE = 8001;
    public static final int DECENT_HASTE_BASE = 8000;


    private Char chr;

    public DecentSkillHandler(Char chr) {
        this.chr = chr;
    }

    @Override
    public void handleSkill(Char chr, TemporaryStatManager tsm, int skillId, int slv, InPacket inPacket, SkillUseInfo skillUseInfo) {

        // Decent Skills
        if (SkillConstants.isDecentAdvBlessing(skillId)) {
            giveDecentAdvBlessing(skillId);
        } else if (SkillConstants.isDecentCombatOrders(skillId)) {
            giveDecentCombatOrders(skillId);
        } else if (SkillConstants.isDecentHaste(skillId)) {
            giveDecentHaste(skillId);
        } else if (SkillConstants.isDecentHyperBody(skillId)) {
            giveDecentHyperBody(skillId);
        } else if (SkillConstants.isDecentMysticDoor(skillId)) {
            giveDecentMysticDoor(skillId);
        } else if (SkillConstants.isDecentSharpEyes(skillId)) {
            giveDecentSharpEyes(skillId);
        } else if (SkillConstants.isDecentSpeedInfusion(skillId)) {
            giveDecentSpeedInfusion(skillId);
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


    private void giveDecentAdvBlessing(int skillId) {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();

        if (tsm.hasStatBySkillId(Bishop.ADV_BLESSING) || tsm.hasStatBySkillId(Job.DECENT_ADV_BLESSING_V)) {
            tsm.removeStatsBySkill(Bishop.ADV_BLESSING);
            tsm.removeStatsBySkill(Job.DECENT_ADV_BLESSING_V);
        }

        tsm.putCharacterStatValue(DEF, new Option(425, skillId, 240));
        tsm.putCharacterStatValue(IndiePAD, new Option(20, skillId, 240));
        tsm.putCharacterStatValue(IndieMAD, new Option(20, skillId, 240));
        tsm.putCharacterStatValue(IndieMHP, new Option(475, skillId, 240));
        tsm.putCharacterStatValue(IndieMMP, new Option(475, skillId, 240));
    }

    private void giveDecentCombatOrders(int skillId) {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        tsm.putCharacterStatValue(CombatOrders, new Option(1, skillId, 240));
    }

    private void giveDecentHaste(int skillId) {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        tsm.putCharacterStatValue(Speed, new Option(20, skillId, 240));
        tsm.putCharacterStatValue(Jump, new Option(10, skillId, 240));
    }

    private void giveDecentHyperBody(int skillId) {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        tsm.putCharacterStatValue(MaxHP, new Option(40, skillId, 240));
        tsm.putCharacterStatValue(MaxMP, new Option(40, skillId, 240));
    }

    private void giveDecentMysticDoor(int skillId) {
        chr.chatMessage("Not Implemented yet."); // xd
    }

    private void giveDecentSharpEyes(int skillId) {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        var cr = 10;
        var crDmg = 8;
        Option o = new Option((cr << 8) + crDmg, skillId, 240);
        o.xOption = cr;
        o.yOption = crDmg;
        tsm.putCharacterStatValue(SharpEyes, o);
    }

    private void giveDecentSpeedInfusion(int skillId) {
        TemporaryStatManager tsm = chr.getTemporaryStatManager();
        net.swordie.ms.client.character.skills.PartyBooster pb = (net.swordie.ms.client.character.skills.PartyBooster) tsm.getTSBByTSIndex(TSIndex.PartyBooster);
        pb.setNOption(-1);
        pb.setROption(skillId);
        pb.setDynamicTermSet(true);
        pb.setHasPartyBooster(tsm.hasStat(PartyBooster));
        pb.setExpireTerm((int) (240 * (chr.getTotalStat(BaseStat.buffTimeR) / 100D)));
        tsm.putCharacterStatValue(PartyBooster, pb.getOption());
    }

}
