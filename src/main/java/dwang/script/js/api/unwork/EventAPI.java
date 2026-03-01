package dwang.script.js.api.unwork;

import dwang.script.DwangScriptBaseApi;

public interface EventAPI extends DwangScriptBaseApi {

    default void getAccountLog(String name) { }

    default void resetPlayerLog(String name, int type) { }

    default void party_CheckFailed_PlayerLog(String name, int times) { }

    default void getPlayerLog(String name) { }

    default void party_CheckFailed_AccountLog(String name, int times, int type) { }

    default void addPlayerLog(String name, int type) { }

    default void getEventManager(String event) { }

    default void forceJoinEvent(String name) { }

    default void party_addPlayerLog(String name, int count, int type) { }

    default void getPlayerLog(String name, int type) { }

    default void addPlayerLog(String name) { }

    default void addAccountLog(String name, int type, int count) { }

    default void setAccountLog(String name, int type, int count) { }

    default void getAccountLog(String name, int type) { }

    default void setPlayerLog(String name, int type, int count) { }

    default void party_CheckFailed_AccountLog(String name, int times) { }

    default void party_addAccountLog(String name, int count, int type) { }

    default void party_addAccountLog(String name, int count) { }

    default void party_CheckFailed_PlayerLog(String name, int times, int type) { }

    default void party_addPlayerLog(String name, int count) { }

    default void getEventInstance() { }

    default void getEvent(String loc) { }

    default void resetAccountLog(String name) { }

    default void addAccountLog(String name) { }

    default void resetAccountLog(String name, int type) { }

    default void addPlayerLog(String name, int type, int count) { }

    default void addAccountLog(String name, int type) { }

}
