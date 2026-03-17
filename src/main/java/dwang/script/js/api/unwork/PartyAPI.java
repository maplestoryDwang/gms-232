package dwang.script.js.api.unwork;

import dwang.script.DwangScriptBaseApi;

public interface PartyAPI extends DwangScriptBaseApi {

    /**
         * @出自类 PartyAPI
    */
    default void addCapacityToAlliance() {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 PartyAPI
    */
    default void allMembersHere() {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 PartyAPI
    */
    default void buffGuild(int buff, int duration, String msg) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 PartyAPI
    */
    default void createAlliance(String alliancename) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 PartyAPI
    */
    default void disbandAlliance() {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 PartyAPI
    */
    default void disbandGuild() {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 PartyAPI
    */
    default void displayGuildRanks() {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 PartyAPI
    */
    default void endPartyQuest(int amount) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 PartyAPI
    */
    default void endPartyQuest(int amount, Object party) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 PartyAPI
    */
    default void genericGuildMessage(int code) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 PartyAPI
    */
    default void getCarnivalChallenge(Character chr) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 PartyAPI
    */
    default void getCarnivalParty() {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 PartyAPI
    */
    default void getCurrentPartyId(int mapId) {
        throw new RuntimeException("not implemented");
    }



    /**
         * 获得当前玩家公会
         *
         * @return
         * @出自类 PartyAPI
         */
    default void getGuild() {
        throw new RuntimeException("not implemented");
    }



    /**
         * 获得指定公会
         *
         * @param guildid 公会
         * @return
         * @出自类 PartyAPI
         */
    default void getGuild(int guildid) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 PartyAPI
    */
    default void getNextCarnivalRequest() {
        throw new RuntimeException("not implemented");
    }



    /**
         * 获得玩家所在队伍
         *
         * @return
         * @出自类 PartyAPI
         */
    default void getParty() {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 PartyAPI
    */
    default void getPartyMembers() {
        throw new RuntimeException("not implemented");
    }



    /**
         * 给玩家团队所有人加经验，受倍率加成
         *
         * @param amount 经验
         * @出自类 PartyAPI
         */
    default void givePartyExp(int amount) {
        throw new RuntimeException("not implemented");
    }



    /**
         * 给指定团队所有人加经验，受倍率加成
         *
         * @param amount 经验
         * @param party
         * @出自类 PartyAPI
         */
    default void givePartyExp(int amount, Object party) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 PartyAPI
    */
    default void givePartyExp_PQ(int maxLevel, int mod) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 PartyAPI
    */
    default void givePartyExp_PQ(int maxLevel, int mod, Object party) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 PartyAPI
    */
    default void increaseGuildCapacity(int trueMax) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 PartyAPI
    */
    default void isLeader() {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 PartyAPI
    */
    default void party_CheckFailed_Job(int job) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 PartyAPI
    */
    default void party_CheckFailed_Level(int min, int max) {
        throw new RuntimeException("not implemented");
    }



    /**
         * 自动创建队伍
         * @出自类 PartyAPI
         */
    default void PartyAutoOn() {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 PartyAPI
    */
    default void partyHaveItem(int itemId, int quantity) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 PartyAPI
    */
    default void partyMembersInMap() {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 PartyAPI
    */
    default void warpPartyWithExp(int mapId, int exp) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 PartyAPI
    */
    default void warpPartyWithExpMeso(int mapId, int exp, int meso) {
        throw new RuntimeException("not implemented");
    }



}
