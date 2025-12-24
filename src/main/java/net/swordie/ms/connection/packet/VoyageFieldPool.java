package net.swordie.ms.connection.packet;

import net.swordie.ms.client.character.commerce.voyage.VoyageFieldInfo;
import net.swordie.ms.connection.OutPacket;
import net.swordie.ms.handlers.header.OutHeader;

/**
 * Created on 20/05/2021.
 *
 * @author Asura
 */
public class VoyageFieldPool {

    public static OutPacket voyageFieldInfo(VoyageFieldInfo info) {
        OutPacket outPacket = new OutPacket(OutHeader.VOYAGE_FIELD_INFO);

        var type = info.type;

        outPacket.encodeByte(type.getVal());
        switch (type) {
            case VoyageStarted: // TODO
                outPacket.encodeInt(0);
                outPacket.encodeInt(0);
                outPacket.encodeInt(0);
                outPacket.encodeByte(0);
                outPacket.encodeInt(info.voyageId);
                outPacket.encodeByte(true);
                break;

            case VoyageCompleted:
                outPacket.encodeByte(false);
                outPacket.encodeInt(info.shortenedDuration);
                outPacket.encodeInt(info.mobKills);
                outPacket.encodeInt(info.cost); // Cost
                outPacket.encodeInt(info.basicIncome); // Basic income
                outPacket.encodeInt(info.bonusIncome); // Bonus income
                outPacket.encodeByte(info.voyageId);
                outPacket.encodeInt(info.voyageCompletedAmount);
                break;

            case MobsEliminated:
                outPacket.encodeInt(info.mobKills); // nr Of mobs Eliminated
                break;

            case HordeTimer:
                outPacket.encodeInt(info.hordeTimerSec); // time to kill horde, in MS
                outPacket.encodeByte(info.hideHordeTimer); // bHide
                break;

            case ShortenedVoyageDuration:
                outPacket.encodeInt(info.shortenedDuration);
                break;

            case VoyageDuration: // Start Voyage Duration tick
                // Empty
                break;
        }

        return outPacket;
    }
}
