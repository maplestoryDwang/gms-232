package net.swordie.ms.handlers.social;

import net.swordie.ms.client.blacklist.*;
import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.friend.Friend;
import net.swordie.ms.connection.InPacket;
import net.swordie.ms.connection.packet.WvsContext;
import net.swordie.ms.handlers.Handler;
import net.swordie.ms.handlers.header.InHeader;
import net.swordie.orm.dao.CharDao;
import net.swordie.orm.dao.SworDaoFactory;

/**
 * Created on 05/06/2021.
 *
 * @author Asura
 */
public class BlackListHandler {

    private static final CharDao charDao = (CharDao) SworDaoFactory.getByClass(Char.class);

    @Handler(op = InHeader.BLACK_LIST)
    public static void blackList(Char chr, InPacket inPacket) {
        var world = chr.getWorld();
        var account = chr.getAccount();

        var tab = BlackListTabType.getByOrdinal(inPacket.decodeByte());
        var type = BlackListRequest.getByVal(inPacket.decodeByte());

        if (type == null || tab == null) {
            chr.dispose();
            return;
        }

        BlackListResult result = null;
        BlackListEntry entry = new BlackListEntry();


        switch (type) {
            case BlackListInsertRequest:
                result = BlackListResult.BlackListInsertRequestDone;

                entry.setTargetName(inPacket.decodeString());
                if (tab.equals(BlackListTabType.Individual)) { // Individual
                    entry.setNickName(inPacket.decodeString());

                    // Search for Character Name in DB.
                    var targetChr = charDao.getByNameAndWorld(entry.getTargetName(), chr.getAccount().getWorldId());


                    // Cannot find targetChr:
                    if (targetChr == null) {
                        result = BlackListResult.FailedRequest;
                        chr.chatMessage("There is no character by that name.");
                        chr.write(WvsContext.blackList(tab, result, entry, null));
                        return;
                    }


                    entry.setChrId(targetChr.getId()); // set entry's charId


                    // Blacklist character in own account:
                    if (account.hasCharacter(targetChr.getId())) {
                        result = BlackListResult.FailedRequest;
                        chr.chatMessage("You cannot blacklist your own character");
                        chr.write(WvsContext.blackList(tab, result, entry, null));
                        return;
                    }


                    // Character is already blacklisted:
                    if (BlackListModule.containsEntry(account, entry)) {
                        result = BlackListResult.IsAlreadyRegistered;
                        chr.write(WvsContext.blackList(tab, result, entry, null));
                        return;
                    }


                    // Nickname for character is already being used:
                    if (BlackListModule.containsNickName(account, entry.getNickName())) {
                        result = BlackListResult.IsAlreadyBeingUsed;
                        chr.write(WvsContext.blackList(tab, result, entry, null));
                        return;
                    }


                    // TargetChr is Friend:
                    if (chr.getAllFriends().stream().map(Friend::getChr).anyMatch(c -> c == targetChr)) {
                        result = BlackListResult.IsInFriendList;
                        chr.write(WvsContext.blackList(tab, result, entry, null));
                        return;
                    }



                } else if (tab.equals(BlackListTabType.Guild)) { // Guild
                    entry.setGuildId(inPacket.decodeInt());

                    // TODO Fix Guild Black Listing
                    result = BlackListResult.FailedRequest;
                    chr.chatMessage("Guilds Blacklisting has not been implemented yet");
                    chr.write(WvsContext.blackList(tab, result, entry, null));
                    return;

                    // var guild = world.getGuildByID(entry.getGuildId());
                }

                // Add to BlackList
                BlackListModule.add(account, entry);
                break;

            case BlackListDeleteRequest:
                result = BlackListResult.BlackListDeleteRequestDone;
                BlackListEntry removeEntry = null;

                entry.setTargetName(inPacket.decodeString());
                if (tab.equals(BlackListTabType.Individual)) { // Individual
                    entry.setNickName(inPacket.decodeString());

                    // Get Entry from BlackList, to be removed.
                    removeEntry = BlackListModule.getByNickName(account, entry.getNickName());


                    // Target Name does not exist in BlackList:
                    if (removeEntry == null) {
                        result = BlackListResult.CharacterNotInList;
                        chr.write(WvsContext.blackList(tab, result, entry, null));
                        return;
                    }


                } else if (tab.equals(BlackListTabType.Guild)) { // Guild
                    entry.setGuildId(inPacket.decodeInt());

                    // TODO Fix Guild Black Listing
                    result = BlackListResult.FailedRequest;
                    chr.chatMessage("Guilds Blacklisting has not been implemented yet");
                    chr.write(WvsContext.blackList(tab, result, entry, null));
                    return;
                }


                entry = removeEntry;


                // Remove from BlackList
                BlackListModule.remove(account, entry);
                break;
        }


       chr.write(WvsContext.blackList(tab, result, entry, null));
    }

}
