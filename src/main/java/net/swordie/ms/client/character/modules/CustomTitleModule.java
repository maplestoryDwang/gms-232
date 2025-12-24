package net.swordie.ms.client.character.modules;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.items.Item;
import net.swordie.ms.connection.OutPacket;
import net.swordie.ms.connection.packet.WvsContext;
import net.swordie.ms.connection.packet.model.MessagePacket;
import net.swordie.ms.constants.QuestConstants;
import net.swordie.ms.util.FileTime;

/**
 * Created on 18/05/2022.
 *
 * @author Asura
 */
public class CustomTitleModule {

    public static void setUserCustomTitle(Char chr, Item lookTitle, Item statTitle, String titleName) {
        var q = chr.getQuestManager().getOrCreateQuestById(QuestConstants.CUSTOM_TITLE_QUEST_ID);

        q.setProperty("Look", lookTitle.getItemId());
        q.setProperty("Stat", statTitle.getItemId());
        q.setProperty("Title", titleName);

        chr.write(WvsContext.message(MessagePacket.questRecordExMessage(q)));
        chr.write(WvsContext.setUserCustomTitle(lookTitle.getItemId(), statTitle.getItemId(), titleName, FileTime.MAX_TIME()));
    }

    public static void updateUserCustomTitle(Char openToChr, Char customTitleChr) {
        var q = customTitleChr.getQuestManager().getOrCreateQuestById(QuestConstants.CUSTOM_TITLE_QUEST_ID);

        var look = q.getIntProperty("Look");
        var stat = q.getIntProperty("Stat");
        var title = q.getProperty("Title");

        if (title == null) {
            title = "";
        }

        openToChr.write(WvsContext.updateUserCustomTitle(look, stat, title, FileTime.MAX_TIME()));
    }

    public static void encodeCustomTitle(Char chr, OutPacket outPacket) {
        var q = chr.getQuestManager().getOrCreateQuestById(QuestConstants.CUSTOM_TITLE_QUEST_ID);

        var look = q.getIntProperty("Look");
        var stat = q.getIntProperty("Stat");
        var title = q.getProperty("Title");

        if (title == null) {
            title = "";
        }

        outPacket.encodeInt(look);
        outPacket.encodeInt(stat);
        outPacket.encodeString(title);
        outPacket.encodeFT(FileTime.MAX_TIME());
    }
}
