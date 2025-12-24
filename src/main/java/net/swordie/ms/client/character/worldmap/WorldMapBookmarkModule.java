package net.swordie.ms.client.character.worldmap;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.connection.packet.WvsContext;
import net.swordie.ms.connection.packet.model.MessagePacket;
import net.swordie.ms.constants.GameConstants;
import net.swordie.ms.constants.QuestConstants;

import java.util.List;

/**
 * Created on 15/12/2021.
 *
 * @author Asura
 */
public class WorldMapBookmarkModule {

    /**
     * Update the 'World Map' Bookmark UI with what the client sends us.
     *
     * @param chr char that sends the update request
     * @param bookmarkList the current list of bookmarked fieldIDs that should be saved
     */
    public static void update(Char chr, List<Integer> bookmarkList) {
        //
        // ensure the list is size 30. By padding it with 0s
        //
        for (int i = bookmarkList.size(); i < GameConstants.WORLD_MAP_BOOKMARK_LENGTH; i++) {
            bookmarkList.add(0);
        }

        //
        // split into 2 lists, as Nexon uses 2 QuestConstants to keep track of bookmarks
        //
        var bookmark_0_14 = bookmarkList.subList(0, 15);
        var bookmark_15_29 = bookmarkList.subList(15, 30);

        //
        // get or create quest
        //
        var q_0_14 = chr.getQuestManager().getOrCreateQuestById(QuestConstants.WORLD_MAP_BOOKMARK_1_14);
        var q_15_29 = chr.getQuestManager().getOrCreateQuestById(QuestConstants.WORLD_MAP_BOOKMARK_15_29);

        //
        // clear quest properties
        //
        q_0_14.getProperties().clear();
        q_15_29.getProperties().clear();

        //
        // update quest properties
        //
        for (int i = 0; i < bookmark_0_14.size(); i++) {
            q_0_14.setProperty(String.valueOf(i), bookmark_0_14.get(i));
        }
        for (int i = 0; i < bookmark_15_29.size(); i++) {
            q_15_29.setProperty(String.valueOf(i + 15), bookmark_15_29.get(i));
        }

        //
        // send to client
        //
        chr.write(WvsContext.message(MessagePacket.questRecordExMessage(q_0_14)));
        chr.write(WvsContext.message(MessagePacket.questRecordExMessage(q_15_29)));
    }
}
