package net.swordie.ms.client.character.modules;

import net.swordie.ms.client.character.items.Item;
import net.swordie.ms.connection.OutPacket;
import net.swordie.ms.loaders.StringData;

public class ChatModule {

    public enum LinkedMessageType {
        Nothing,
        Item,
        Achievement
    }

    public static void encodeLinkedMessage(OutPacket outPacket, Item item, LinkedMessageType lmt) {
        outPacket.encodeInt(lmt.ordinal());
        if (lmt == LinkedMessageType.Item) {
            outPacket.encodeByte(item != null);
            String itemName = "";
            if (item != null) {
                outPacket.encode(item);
                itemName = StringData.getItemStringById(item.getItemId());
            }
            outPacket.encodeString(itemName);
        } else if (lmt == LinkedMessageType.Achievement) {
            outPacket.encodeInt(1);
            outPacket.encodeInt(2);
            outPacket.encodeInt(3);
            outPacket.encodeLong(4);
        }
    }

}
