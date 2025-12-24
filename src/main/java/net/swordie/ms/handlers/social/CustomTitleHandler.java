package net.swordie.ms.handlers.social;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.modules.CustomTitleModule;
import net.swordie.ms.connection.InPacket;
import net.swordie.ms.constants.ItemConstants;
import net.swordie.ms.handlers.Handler;
import net.swordie.ms.handlers.header.InHeader;

/**
 * Created on 18/05/2022.
 *
 * @author Asura
 */
public class CustomTitleHandler {

    @Handler(op = InHeader.UPDATE_USER_CUSTOM_TITLE_REQUEST)
    public static void handleUpdateUserCustomTitleRequest(Char chr, InPacket inPacket) {
        var insPos = inPacket.decodeInt();

        var customTitle = chr.getInstallInventory().getItemBySlot(insPos);

        if (customTitle == null || customTitle.getItemId() != ItemConstants.CUSTOM_TITLE_ITEM_ID || !chr.getInstallInventory().hasItem(ItemConstants.CUSTOM_TITLE_ITEM_ID)) {
            // Item given is not Custom title,  or doesn't exist
            return;
        }

        CustomTitleModule.updateUserCustomTitle(chr, chr);
    }

    @Handler(op = InHeader.SET_USER_CUSTOM_TITLE_REQUEST)
    public static void handleSetUserCustomTitleRequest(Char chr, InPacket inPacket) {
        var lookTitleItemId = inPacket.decodeInt();
        var lookTitleInsPos = inPacket.decodeInt();

        var statTitleItemId = inPacket.decodeInt();
        var statTitleInsPos = inPacket.decodeInt();

        var titleName = inPacket.decodeString();


        var lookTitle = chr.getInstallInventory().getItemBySlot(lookTitleInsPos);
        var statTitle = chr.getInstallInventory().getItemBySlot(statTitleInsPos);

        if (!chr.getInstallInventory().hasItem(ItemConstants.CUSTOM_TITLE_ITEM_ID)) {
            // Chr does not own a custom title item
            return;
        }

        if (lookTitle == null || lookTitle.getItemId() != lookTitleItemId || statTitle == null || statTitle.getItemId() != statTitleItemId) {
            // Items given do not match server data
            return;
        }

        if (titleName.length() <= 0 || titleName.length() > 20) {
            // Too short or long title name
            return;
        }

        CustomTitleModule.setUserCustomTitle(chr, lookTitle, statTitle, titleName);
    }
}
