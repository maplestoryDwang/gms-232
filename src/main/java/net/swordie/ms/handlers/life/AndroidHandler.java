package net.swordie.ms.handlers.life;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.connection.InPacket;
import net.swordie.ms.connection.packet.AndroidPacket;
import net.swordie.ms.handlers.Handler;
import net.swordie.ms.handlers.header.InHeader;
import net.swordie.ms.life.Android;
import net.swordie.ms.life.movement.MovementInfo;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

public class AndroidHandler {

    private static final Logger log = LogManager.getLogger();


    @Handler(op = InHeader.ANDROID_MOVE)
    public static void handleAndroidMove(Char chr, InPacket inPacket) {
        Android android = chr.getAndroid();
        if (android == null) {
            return;
        }
        inPacket.decodeInt(); // idk what, but is != 0 if this[48]
        MovementInfo mi = new MovementInfo(inPacket);
        mi.applyTo(android);
        chr.getField().broadcastPacket(AndroidPacket.move(android, mi), chr);
    }
}
