package dwang.script.js.api.unwork;

import dwang.script.DwangScriptBaseApi;

public interface PartyAPI extends DwangScriptBaseApi {

    /**
         * @出自类 PartyAPI
    */
    default void addCapacityToAlliance() { }



    /**
         * @出自类 PartyAPI
    */
    default void allMembersHere() { }



    /**
         * @出自类 PartyAPI
    */
    default void buffGuild(int buff, int duration, String msg) { }



    /**
         * @出自类 PartyAPI
    */
    default void createAlliance(String alliancename) { }



    /**
         * @出自类 PartyAPI
    */
    default void disbandAlliance() { }



    /**
         * @出自类 PartyAPI
    */
    default void disbandGuild() { }



    /**
         * @出自类 PartyAPI
    */
    default void displayGuildRanks() { }



    /**
         * @出自类 PartyAPI
    */
    default void endPartyQuest(int amount) { }



    /**
         * @出自类 PartyAPI
    */
    default void endPartyQuest(int amount, Object party) { }



    /**
         * @出自类 PartyAPI
    */
    default void genericGuildMessage(int code) { }



    /**
         * @出自类 PartyAPI
    */
    default void getCarnivalChallenge(Character chr) { }



    /**
         * @出自类 PartyAPI
    */
    default void getCarnivalParty() { }



    /**
         * @出自类 PartyAPI
    */
    default void getCurrentPartyId(int mapId) { }



    /**
         * 获得当前玩家公会
         *
         * @return
         * @出自类 PartyAPI
         */
    default void getGuild() { }



    /**
         * 获得指定公会
         *
         * @param guildid 公会
         * @return
         * @出自类 PartyAPI
         */
    default void getGuild(int guildid) { }



    /**
         * @出自类 PartyAPI
    */
    default void getNextCarnivalRequest() { }



    /**
         * 获得玩家所在队伍
         *
         * @return
         * @出自类 PartyAPI
         */
    default void getParty() { }



    /**
         * @出自类 PartyAPI
    */
    default void getPartyMembers() { }



    /**
         * 给玩家团队所有人加经验，受倍率加成
         *
         * @param amount 经验
         * @出自类 PartyAPI
         */
    default void givePartyExp(int amount) { }



    /**
         * 给指定团队所有人加经验，受倍率加成
         *
         * @param amount 经验
         * @param party
         * @出自类 PartyAPI
         */
    default void givePartyExp(int amount, Object party) { }



    /**
         * @出自类 PartyAPI
    */
    default void givePartyExp_PQ(int maxLevel, int mod) { }



    /**
         * @出自类 PartyAPI
    */
    default void givePartyExp_PQ(int maxLevel, int mod, Object party) { }



    /**
         * @出自类 PartyAPI
    */
    default void increaseGuildCapacity(int trueMax) { }



    /**
         * @出自类 PartyAPI
    */
    default void isLeader() { }



    /**
         * @出自类 PartyAPI
    */
    default void party_CheckFailed_Job(int job) { }



    /**
         * @出自类 PartyAPI
    */
    default void party_CheckFailed_Level(int min, int max) { }



    /**
         * 自动创建队伍
         * @出自类 PartyAPI
         */
    default void PartyAutoOn() { }



    /**
         * @出自类 PartyAPI
    */
    default void partyHaveItem(int itemId, int quantity) { }



    /**
         * @出自类 PartyAPI
    */
    default void partyMembersInMap() { }



    /**
         * @出自类 PartyAPI
    */
    default void warpPartyWithExp(int mapId, int exp) { }



    /**
         * @出自类 PartyAPI
    */
    default void warpPartyWithExpMeso(int mapId, int exp, int meso) { }



}
