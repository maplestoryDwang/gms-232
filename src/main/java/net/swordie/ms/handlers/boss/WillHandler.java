package net.swordie.ms.handlers.boss;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.skills.Option;
import net.swordie.ms.client.character.skills.temp.CharacterTemporaryStat;
import net.swordie.ms.connection.InPacket;
import net.swordie.ms.connection.packet.field.FieldPacket;
import net.swordie.ms.connection.packet.field.WillFieldPacket;
import net.swordie.ms.constants.BossConstants;
import net.swordie.ms.handlers.Handler;
import net.swordie.ms.handlers.header.InHeader;
import net.swordie.ms.life.mob.boss.will.WillModule;
import net.swordie.ms.life.mob.skill.MobSkillID;
import net.swordie.ms.util.Position;
import net.swordie.ms.util.Rect;

public class WillHandler {

    @Handler(op = InHeader.WILL_MOONLIGHT_REQUEST)
    public static void handleWillMoonlightRequest(Char chr, InPacket inPacket) {
        var bossInfo = chr.getBossInfo();
        if (!bossInfo.canUseMoonlight()) {
            chr.chatMessage("You cannot use Moonlight yet.");
            return;
        }

        switch (chr.getField().getId()) {
            case BossConstants.WILL_FIELD_P1:
            case BossConstants.WILL_HARD_FIELD_P1:
                // give short iframe
                var tsm = chr.getTemporaryStatManager();
                var opt = new Option(1, 0, 3);
                tsm.putCharacterStatValue(CharacterTemporaryStat.IndieNotDamaged, opt);
                tsm.sendSetStatPacket();

                // move dimensions (there's also a seperate packet for this, but meh)
                var oldX = chr.getPosition().getX();
                var oldY = chr.getPosition().getY();
                var newY = oldY > -1000
                        ? -2020
                        : 159;

                chr.write(FieldPacket.teleport(new Position(oldX, newY), chr));
                chr.write(WillFieldPacket.moonlightShowEffect(false));
                break;
            case BossConstants.WILL_FIELD_P2:
            case BossConstants.WILL_HARD_FIELD_P2:
                chr.getBossInfo().setWillPotionUseTime(System.currentTimeMillis() + BossConstants.WILL_P2_MOONLIGHT_TIME);
                chr.write(WillFieldPacket.moonlightShowEffect(false));
                break;
            case BossConstants.WILL_FIELD_P3:
            case BossConstants.WILL_HARD_FIELD_P3:
                WillModule.removeClosestWebs(chr.getField(), chr);
                break;
            default:
                chr.chatMessage("Unhandled Moonlight map: " + chr.getField().getId());
        }

        bossInfo.onMoonlightUse();
    }

    @Handler(op = InHeader.WILL_EYE_ORB_HIT)
    public static void handleWillEyeOrbHit(Char chr, InPacket inPacket) {
        if (!chr.getTemporaryStatManager().isInvincible()) {
            chr.getBossInfo().addMoonlight(-3);
        }
    }

    @Handler(op = InHeader.WILL_WEB_HIT)
    public static void handleWillWebHit(Char chr, InPacket inPacket) {
        if (chr.getTemporaryStatManager().isInvincible()) {
            return;
        }

        var webId = inPacket.decodeInt();
        var left = inPacket.decodeByte() != 0;

        var bossTemplateId = chr.getFieldID() == BossConstants.WILL_HARD_FIELD_P3
                ? BossConstants.HARD_WILL_P3
                : BossConstants.WILL_P3;
        chr.write(WillFieldPacket.webHit(left, bossTemplateId));
        chr.getBossInfo().addMoonlight(-5);

        if (chr.getField().getId() == BossConstants.WILL_HARD_FIELD_P3) {
            var opt = new Option(1, MobSkillID.Seal.getVal(), 5);
            opt.slv = 1;
            var tsm = chr.getTemporaryStatManager();
            tsm.putCharacterStatValueFromMobSkill(CharacterTemporaryStat.Seal, opt);
            tsm.sendSetStatPacket();
        }
    }

    @Handler(op = InHeader.WILL_INFECTION_HIT)
    public static void handleWillInfectionHit(Char chr, InPacket inPacket) {
        if (chr.getTemporaryStatManager().isInvincible()) {
            return;
        }

        var infectionId = inPacket.decodeInt();
        var myPos = inPacket.decodePositionInt();
        var myInfection = chr.getBossInfo().getWillInfection();

        var explosionPos = inPacket.decodePositionInt();
        var explosionRect = explosionPos.getRectAround(new Rect(-140, -140, 140, 140));


        if ((myInfection == null || myInfection.getObjectId() != infectionId) && explosionRect.hasPositionInside(myPos)) {
            chr.damagePerc(44);
        }
    }
}
