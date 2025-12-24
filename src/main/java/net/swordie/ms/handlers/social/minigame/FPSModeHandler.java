package net.swordie.ms.handlers.social.minigame;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.connection.InPacket;
import net.swordie.ms.connection.packet.UserLocal;
import net.swordie.ms.handlers.Handler;
import net.swordie.ms.handlers.header.InHeader;
import net.swordie.ms.life.mob.Mob;

/**
 * Created on 05/07/2021.
 *
 * @author Asura
 */
public class FPSModeHandler {

    @Handler(op = InHeader.SHOOT_ATTACK_IN_FPS_REQUEST)
    public static void handleShootAttackInFPSRequest(Char chr, InPacket inPacket) {
        inPacket.decodeInt(); // tick
        var pos = inPacket.decodePosition();
        var mobsHit = inPacket.decodeInt();
        for (var i = 0; i < mobsHit; i++) {
            var mob = chr.getField().getLifeByObjectID(Mob.class, inPacket.decodeInt());
            inPacket.decodeArr(15);
            if (mob == null) {
                continue;
            }

            // Kill mobs
            mob.damage(chr, mob.getMaxHp()); // Purposely use damage as to allow for triggering the 'onDamageMob' instance event.
        }

        var gun = chr.getGun();
        if (gun != null) {
            gun.shoot();
        }

        if (gun.getAmmo() <= 0) {
            gun.setAmmo(99);
            gun.updateGunToChar(chr);
        }

        chr.write(UserLocal.resultShootAttackInFPSMode());
    }

}
