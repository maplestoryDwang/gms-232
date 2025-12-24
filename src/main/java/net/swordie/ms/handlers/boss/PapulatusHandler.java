package net.swordie.ms.handlers.boss;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.skills.Option;
import net.swordie.ms.client.character.skills.temp.CharacterTemporaryStat;
import net.swordie.ms.connection.InPacket;
import net.swordie.ms.connection.packet.field.PapulatusFieldPacket;
import net.swordie.ms.constants.FieldConstants;
import net.swordie.ms.handlers.Handler;
import net.swordie.ms.handlers.header.InHeader;
import net.swordie.ms.life.mob.boss.papulatus.PapulatusFieldObject;
import net.swordie.ms.life.mob.boss.papulatus.PapulatusTweezerInfo;
import net.swordie.ms.life.mob.skill.MobSkillID;

public class PapulatusHandler {

    @Handler(op = InHeader.PAPULATUS_LASER_TOUCH)
    public static void handlePapulatusLaserTouch(Char chr, InPacket inPacket) {
        if (!chr.isDead()) {
            chr.damagePerc(100);
        }
    }

    @Handler(op = InHeader.PAPULATUS_TWEEZER_GRAB)
    public static void handlePapulatusTweezerGrab(Char chr, InPacket inPacket) {
        var idx = inPacket.decodeInt();
        var pos = inPacket.decodePosition();

        var tsm = chr.getTemporaryStatManager();
        if (!tsm.hasStat(CharacterTemporaryStat.Stun) && FieldConstants.isPapulatusField(chr.getField().getId())) {
            var option = new Option(1, MobSkillID.PapulatusSkill.getVal(), 2);
            option.slv = 8;
            tsm.putCharacterStatValueFromMobSkill(CharacterTemporaryStat.Stun, option);
            tsm.sendSetStatPacket();

            var field = chr.getField();
            var tweezerInfo = new PapulatusTweezerInfo(idx, 5, pos.getX(), chr.getId());

            field.broadcastPacket(PapulatusFieldPacket.papulatusFieldObjectChanged(PapulatusFieldObject.tweezer(tweezerInfo)));
        }
    }

    @Handler(op = InHeader.PAPULATUS_TWEEZER_RELEASE)
    public static void handlePapulatusTweezerRelease(Char chr, InPacket inPacket) {
        var idx = inPacket.decodeInt();

        var field = chr.getField();
        var tweezerInfo = new PapulatusTweezerInfo(idx, 6, 351, 0);

        field.broadcastPacket(PapulatusFieldPacket.papulatusFieldObjectChanged(PapulatusFieldObject.tweezer(tweezerInfo)));
    }
}
