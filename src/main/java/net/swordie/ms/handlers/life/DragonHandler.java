package net.swordie.ms.handlers.life;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.connection.InPacket;
import net.swordie.ms.connection.packet.DragonPool;
import net.swordie.ms.connection.packet.UserRemote;
import net.swordie.ms.handlers.Handler;
import net.swordie.ms.handlers.header.InHeader;
import net.swordie.ms.life.Dragon;
import net.swordie.ms.life.movement.MovementInfo;
import net.swordie.ms.util.Rect;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

public class DragonHandler {

    private static final Logger log = LogManager.getLogger();


    @Handler(op = InHeader.DRAGON_MOVE)
    public static void handleDragonMove(Char chr, InPacket inPacket) {
        Dragon dragon = chr.getDragon();
        if (dragon != null && dragon.getOwner() == chr) {
            MovementInfo movementInfo = new MovementInfo(inPacket);
            movementInfo.applyTo(dragon);
            chr.getField().broadcastPacket(DragonPool.moveDragon(dragon, movementInfo), chr);
        }
    }

    @Handler(op = InHeader.USER_DRAGON_ACTION)
    public static void handleDragonAction(Char chr, InPacket inPacket) {
        Dragon dragon = chr.getDragon();
        int action = inPacket.decodeInt();
        int skillId = inPacket.decodeInt();
        int slv = inPacket.decodeInt();

        if (dragon != null && dragon.getOwner() == chr && slv > 0) {
            chr.getField().broadcastPacket(UserRemote.dragonAction(chr, action, skillId, slv), chr);
        }
    }

    @Handler(op = InHeader.USER_DRAGON_BREATH_EARTH_EFFECT)
    public static void handleDragonBreathEarthEffect(Char chr, InPacket inPacket) {
        Dragon dragon = chr.getDragon();
        int skillid = inPacket.decodeInt();
        int slv = inPacket.decodeInt();
        Rect rect = inPacket.decodeIntRect();

        if (dragon != null && dragon.getOwner() == chr && slv > 0) {
            chr.getField().broadcastPacket(UserRemote.dragonBreathEarthEffect(chr, skillid, slv, rect));
        }
    }
}
