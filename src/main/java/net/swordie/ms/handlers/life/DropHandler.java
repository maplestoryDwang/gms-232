package net.swordie.ms.handlers.life;

import net.swordie.ms.client.Client;
import net.swordie.ms.client.character.Char;
import net.swordie.ms.connection.InPacket;
import net.swordie.ms.connection.packet.WvsContext;
import net.swordie.ms.connection.packet.model.MessagePacket;
import net.swordie.ms.enums.DropPickupMessageType;
import net.swordie.ms.enums.FieldOption;
import net.swordie.ms.handlers.Handler;
import net.swordie.ms.handlers.header.InHeader;
import net.swordie.ms.life.Life;
import net.swordie.ms.life.drop.Drop;
import net.swordie.ms.util.Position;
import net.swordie.ms.world.field.Field;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

public class DropHandler {

    private static final Logger log = LogManager.getLogger();

    @Handler(op = InHeader.DROP_PICK_UP_REQUEST)
    public static void handleDropPickUpRequest(Client c, InPacket inPacket) {
        Char chr = c.getChr();
        if (chr.getMiniRoom() != null) {
            return;
        }
        
        byte fieldKey = inPacket.decodeByte();
        inPacket.decodeInt(); // tick
        Position pos = inPacket.decodePosition();
        int dropID = inPacket.decodeInt();
        inPacket.decodeInt(); // CliCrc
        // rest is some info about foreground info, not interested
        Field field = chr.getField();
        Life life = field.getLifeByObjectID(dropID);
        if (life instanceof Drop) {
            Drop drop = (Drop) life;
            boolean success = ((!c.getWorld().isReboot() && drop.getOwnerID() == chr.getId()) || drop.canBePickedUpBy(chr))
                    && chr.addDrop(drop, false);
            if (success) {
                field.removeDrop(dropID, chr.getId(), false, -1);
            } else {
                chr.write(WvsContext.message(MessagePacket.dropPickupMessage(0, 0, DropPickupMessageType.Fail_NoSpace, (short) 0, (short) 0)));
                chr.dispose();
            }
        }

    }

    @Handler(op = InHeader.USER_DROP_MONEY_REQUEST)
    public static void handleUserDropMoneyRequest(Char chr, InPacket inPacket) {
        Field field = chr.getField();
        if ((field.getInfo().getFieldLimit() & FieldOption.DropLimit.getVal()) > 0) {
            chr.dispose();
            return;
        }
        inPacket.decodeInt(); // tick
        int amount = inPacket.decodeInt();

        if (amount <= 0) {
            chr.getOffenseManager().addOffense("Tried to drop negative mesos");
            return;
        }

        if (chr.getMoney() > amount) {
            chr.deductMoney(amount);
            Drop drop = new Drop(-1, amount);
            drop.setCanBePickedUpByPet(false);
            chr.getField().drop(drop, chr.getPosition());
            drop.setDropper(chr);
            chr.dispose();
        }
    }
}
