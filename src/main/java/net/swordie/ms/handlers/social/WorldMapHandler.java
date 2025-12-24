package net.swordie.ms.handlers.social;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.worldmap.WorldMapBookmarkModule;
import net.swordie.ms.connection.InPacket;
import net.swordie.ms.handlers.Handler;
import net.swordie.ms.handlers.header.InHeader;

import java.util.ArrayList;

/**
 * Created on 15/12/2021.
 *
 * @author Asura
 */
public class WorldMapHandler {

    @Handler(op = InHeader.WORLD_MAP_BOOKMARK_UPDATE_REQUEST)
    public static void worldMapBookmarkUpdateRequest(Char chr, InPacket inPacket) {
        var list = new ArrayList<Integer>();

        var size = inPacket.decodeInt();
        for (int i = 0; i < size; i++) {
            list.add(inPacket.decodeInt());
        }

        WorldMapBookmarkModule.update(chr, list);
    }
}
