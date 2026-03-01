package dwang.script.js.api.unwork;

import dwang.script.DwangScriptBaseApi;

public interface PartyAPI extends DwangScriptBaseApi {

    default void getCarnivalChallenge(Character chr) { }

    default void buffGuild(int buff, int duration, String msg) { }

    default void getNextCarnivalRequest() { }

    default void party_CheckFailed_Job(int job) { }

    default void getParty() { }

    default void allMembersHere() { }

    default void warpPartyWithExpMeso(int mapId, int exp, int meso) { }

    default void createAlliance(String alliancename) { }

    default void getCarnivalParty() { }

    default void endPartyQuest(int amount, Object party) { }

    default void disbandAlliance() { }

    default void givePartyExp(int amount, Object party) { }

    default void genericGuildMessage(int code) { }

    default void increaseGuildCapacity(int trueMax) { }

    default void getCurrentPartyId(int mapId) { }

    default void endPartyQuest(int amount) { }

    default void isLeader() { }

    default void PartyAutoOn() { }

    default void partyMembersInMap() { }

    default void getGuild(int guildid) { }

    default void addCapacityToAlliance() { }

    default void disbandGuild() { }

    default void warpPartyWithExp(int mapId, int exp) { }

    default void partyHaveItem(int itemId, int quantity) { }

    default void displayGuildRanks() { }

    default void givePartyExp_PQ(int maxLevel, int mod, Object party) { }

    default void givePartyExp_PQ(int maxLevel, int mod) { }

    default void getGuild() { }

    default void party_CheckFailed_Level(int min, int max) { }

    default void givePartyExp(int amount) { }

    default void getPartyMembers() { }

}
