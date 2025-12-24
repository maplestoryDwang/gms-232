package net.swordie.ms.connection.packet.field;

import net.swordie.ms.connection.OutPacket;
import net.swordie.ms.handlers.header.OutHeader;
import net.swordie.ms.life.mob.boss.will.NarrowWeb;
import net.swordie.ms.life.mob.boss.will.NarrowWebType;
import net.swordie.ms.life.mob.boss.will.WillInfection;
import net.swordie.ms.life.mob.boss.will.WillSkillPacket;
import net.swordie.ms.util.Position;
import net.swordie.ms.util.Rect;

import java.util.Collection;
import java.util.List;

public class WillFieldPacket {

    public static OutPacket WILL_UNK_207_1538() {
        return new OutPacket(OutHeader.WILL_UNK_207_1538);
    }

    public static OutPacket WILL_UNK_207_1539() {
        OutPacket outPacket = new OutPacket(OutHeader.WILL_UNK_207_1539);

        outPacket.encodeInt(0);
        outPacket.encodeInt(0);

        return outPacket;
    }

    public static OutPacket moonlightStatus(int meter) {
        OutPacket outPacket = new OutPacket(OutHeader.WILL_MOONLIGHT_STATUS);

        outPacket.encodeInt(meter);

        return outPacket;
    }

    public static OutPacket moonlightCooldown(int cooldownMillis) {
        OutPacket outPacket = new OutPacket(OutHeader.WILL_MOONLIGHT_COOLDOWN);

        outPacket.encodeInt(cooldownMillis);

        return outPacket;
    }

    public static OutPacket willSummonSkill(int type, int summonWillTemplateId, Position summonPosition) {
        return willSummonSkill(type, summonWillTemplateId, summonPosition, 0, 0, 0, 0, null);
    }

    public static OutPacket willSummonSkill(int type, int summonWillTemplateId, Position summonPosition,
                                            int angleRate, int speed, int interval, int orbCount, Rect bounderies) {
        OutPacket outPacket = new OutPacket(OutHeader.WILL_BEHOLDER);

        outPacket.encodeInt(type); // appear = 0, attack = 1
        if (type == 1) {
            outPacket.encodeInt(summonWillTemplateId);
            outPacket.encodeInt(angleRate); // 300
            outPacket.encodeInt(speed); // 100
            outPacket.encodeInt(interval); // 1800
            outPacket.encodeInt(orbCount); // 5
            outPacket.encodeByte(bounderies != null);
            if (bounderies != null) {
                outPacket.encodeRectInt(bounderies);
            }
        } else {
            outPacket.encodeInt(summonWillTemplateId); // nTemplateId
            outPacket.encodePositionInt(summonPosition);
        }

        return outPacket;
    }

    public static OutPacket web(NarrowWeb web, NarrowWebType type) {
        // narrow web
        OutPacket outPacket = new OutPacket(OutHeader.WILL_WEB);

        outPacket.encodeInt(type.getVal()); // type

        switch (type) {
            case Add:
                outPacket.encode(web);
                break;
            case Remove:
                outPacket.encodeInt(web.getObjectId());
                break;
            case RemoveAll:
                break;
        }

        return outPacket;
    }

    public static OutPacket webHit(boolean left, int templateId) {
        // hits player for 30% dmg
        OutPacket outPacket = new OutPacket(OutHeader.WILL_WEB_HIT);

        outPacket.encodeByte(left); // ?
        outPacket.encodeInt(templateId);

        return outPacket;
    }

    public static OutPacket infections(Collection<WillInfection> willInfections) {
        // infection graves
        OutPacket outPacket = new OutPacket(OutHeader.WILL_INFECTIONS);

        outPacket.encodeInt(willInfections.size());
        willInfections.forEach(outPacket::encode);

        return outPacket;
    }

    public static OutPacket infectionCreate(WillInfection willInfection) {
        // infection grave
        OutPacket outPacket = new OutPacket(OutHeader.WILL_INFECTION_CREATE);

        willInfection.encode(outPacket, false);

        return outPacket;
    }

    public static OutPacket infectionRemove(Collection<Integer> ids) {
        // remove infection graves
        OutPacket outPacket = new OutPacket(OutHeader.WILL_INFECTION_REMOVE);

        outPacket.encodeInt(ids.size());
        ids.forEach(outPacket::encodeInt);

        return outPacket;
    }

    public static OutPacket infectionTransform(WillInfection infection) {
        OutPacket outPacket = new OutPacket(OutHeader.WILL_INFECTION_TRANSFORM);

        outPacket.encodeInt(infection.getCharId());
        outPacket.encodePositionInt(infection.getPosition());

        return outPacket;
    }

    public static OutPacket infectionAttack(WillInfection infection) {
        OutPacket outPacket = new OutPacket(OutHeader.WILL_INFECTION_ATTACK);

        outPacket.encodeInt(infection.getObjectId());

        return outPacket;
    }

    public static OutPacket moonlightUseTransition(boolean changedDimension) {
        OutPacket outPacket = new OutPacket(OutHeader.WILL_MOONLIGHT_USE_TRANSITION);

        outPacket.encodeInt(changedDimension ? 1 : 0);

        return outPacket;
    }

    public static OutPacket willTriggerBlockP1(Collection<Integer> hpPercs, List<Integer> templateIds) {
        // will HP bar blocking
        OutPacket outPacket = new OutPacket(OutHeader.WILL_TRIGGER_BLOCK_P1);

        outPacket.encodeInt(hpPercs.size());
        for (int hpPerc : hpPercs) {
            outPacket.encodeInt(hpPerc * 10); // ignore the decimal
        }

        outPacket.encodeByte(templateIds.size() > 0);
        if (templateIds.size() > 0) {
            outPacket.encodeInt(templateIds.get(0));
            outPacket.encodeLong(2_100_000_000); // hardcoded?
            outPacket.encodeLong(2_100_000_000);
        }

        outPacket.encodeByte(templateIds.size() > 1);
        if (templateIds.size() > 1) {
            outPacket.encodeInt(templateIds.get(1));
            outPacket.encodeLong(2_100_000_000);
            outPacket.encodeLong(2_100_000_000);
        }

        outPacket.encodeByte(templateIds.size() > 2);
        if (templateIds.size() > 2) {
            outPacket.encodeInt(templateIds.get(2));
            outPacket.encodeLong(2_100_000_000);
            outPacket.encodeLong(2_100_000_000);
        }

        return outPacket;
    }

    public static OutPacket willTriggerBlockP2(Collection<Integer> hpPercs) {
        // will HP bar blocking
        OutPacket outPacket = new OutPacket(OutHeader.WILL_TRIGGER_BLOCK_P2);

        outPacket.encodeInt(hpPercs.size());
        for (int hpPerc : hpPercs) {
            outPacket.encodeInt(hpPerc * 10); // ignore the decimal
        }

        return outPacket;
    }

    public static OutPacket moonlightShowEffect(boolean changedDimension) {
        return new OutPacket(OutHeader.WILL_MOOONLIGHT_SHOW_EFFECT);
    }

    public static OutPacket WILL_UNK_207_1554() {
        OutPacket outPacket = new OutPacket(OutHeader.WILL_UNK_207_1554);

        return outPacket;
    }

    public static OutPacket WILL_UNK_207_1555() {
        OutPacket outPacket = new OutPacket(OutHeader.WILL_UNK_207_1555);

        return outPacket;
    }

    public static OutPacket useSkill(WillSkillPacket willSkillPacket) {
        OutPacket outPacket = new OutPacket(OutHeader.WILL_USE_SKILL);

        outPacket.encode(willSkillPacket);

        return outPacket;
    }
}
