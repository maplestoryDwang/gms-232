package net.swordie.ms.handlers.social;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.connection.InPacket;
import net.swordie.ms.handlers.Handler;
import net.swordie.ms.handlers.header.InHeader;

/**
 * Created on 10/07/2021.
 *
 * @author Asura
 */
public class RankingHandler {

    @Handler(op = InHeader.TOWER_RANK_REQUEST)
    public static void handleTowerRankRequest(Char chr, InPacket inPacket) {


    }
}
