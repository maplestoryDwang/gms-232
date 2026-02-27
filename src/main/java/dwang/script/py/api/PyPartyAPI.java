package dwang.script.py.api;

import dwang.script.DwangScriptBaseApi;
import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.party.Party;
import net.swordie.ms.client.party.PartyMember;
import net.swordie.ms.client.party.PartyResult;
import net.swordie.ms.connection.packet.WvsContext;
import net.swordie.ms.enums.BossCooldown;

import java.util.ArrayList;
import java.util.List;

/**
 * @author dwang
 * @version 1.0.0
 * @Title
 * @ClassName PyPartyAPI.java
 * @Description TODO
 * @createTime 2026-02-27 16:57
 */

public interface PyPartyAPI extends DwangScriptBaseApi {
    
    default Party getParty() {
        return getChr().getParty();
    }

    
    default Party createSoloParty() {
        Party party = Party.createNewParty(
                false,
                true,
                getChr().getName() + "'s party",
                getChr().getClient().getWorld()
        );
        party.addPartyMember(getChr());
        party.broadcast(WvsContext.partyResult(PartyResult.createNewParty(party)));

        return party;
    }

    
    default int getPartySize() {
        return getParty().getMembers().size();
    }

    
    default boolean isPartyLeader() {
        return getChr().getParty() != null && getChr().getParty().getPartyLeaderID() == getChr().getId();
    }

    default boolean checkParty() {
        return checkParty(null);
    }

    
    default boolean checkParty(BossCooldown bossCooldown) {
        return checkParty(bossCooldown, 0);
    }

    
    default boolean checkParty(BossCooldown bossCooldown, int reqLevel) {
        if (getChr().getParty() == null) {
            chat("You are not in a party.");
            return false;
        } else if (!isPartyLeader()) {
            chat("You are not the party leader.");
            return false;
        }
        boolean res = true;
        Char leader = getChr().getParty().getPartyLeader().getChr();
        if (leader == null) {
            chat("Your leader is currently offline.");
            res = false;
        } else {
            for (PartyMember partyMember : getChr().getParty().getPartyMembers()) {
                if (partyMember != null) {
                    Char pmChr = partyMember.getChr();
                    String name = pmChr.getName();
                    if (!pmChr.isOnline()) {
                        chat(name + " is not online.");
                        res = false;
                    } else if (pmChr.getField() != getChr().getField()) {
                        chat(name + " is not in the same map as you.");
                        res = false;
                    } else if (pmChr.getInstance() != null) {
                        // kinda overlaps with the above check, but to prevent weird stuff from happening
                        chat(name + " is already in their own instance.");
                        res = false;
                    } else if (bossCooldown != null && pmChr.getAccount().isOnBossCooldown(bossCooldown)) {
                        int totalMinutes = pmChr.getScriptManager().getRemainingBossCooldownMinutes(bossCooldown);
                        int hours = totalMinutes / 60;
                        int minutes = totalMinutes % 60;

                        chat(String.format("%s has recently fought this boss. Time remaining: %s hours and %s minutes.", name, hours, minutes));
                        res = false;
                    }
                    if (pmChr.getLevel() < reqLevel) {
                        chat(pmChr.getName() + " doesn't meet the required level to enter.");
                        return false;
                    }
                }
            }
        }
        return res;
    }

    default List<Char> getOnlinePartyMembers() {
        Party party = getParty();
        if (party == null) {
            return new ArrayList<>();
        }
        return party.getOnlineChars();
    }

    default List<Char> getPartyMembersInSameField(Char chr) {
        Party party = getParty();
        if (party == null) {
            return new ArrayList<>();
        }
        List<Char> list = new ArrayList<>(party.getPartyMembersInSameField(chr));
        list.add(chr);
        return new ArrayList<>(list);
    }
    
}
