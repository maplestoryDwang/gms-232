package dwang.script.js.api.unwork;

import dwang.script.DwangScriptBaseApi;

public interface CashAPI extends DwangScriptBaseApi {

    default void useNebuliteGachapon() { }

    default void setViptime(int time) { }

    default void getRMB() { }

    default void gainNX(int type, int amount) { }

    default void getTotalRMB() { }

    default void 敲敲乐奖励(int rank) { }

    default void showCashItemEffect(int itemId, int v1) { }

    default void getSevenDayPayLog(int day) { }

    default void gainGachaponItem(int id, int quantity, String msg, int rareness, int buy) { }

    default void getHyPay(int type) { }

    default void gainGachaponItem(int id, int quantity, String msg, int rareness) { }

    default void gainNX(int amount) { }

    default void getVip() { }

    default void gainGachaponItem(int id, int quantity) { }

    default void gainGachaponItem(int id, int quantity, String msg) { }

    default void isVip() { }

    default void setVip(int vip, int period) { }

    default void 魔女森林() { }

    default void gainGachaponItem(int id, int quantity, String msg, int rareness, int buy, int period) { }

    default void setVip(int vip) { }

    default void addHyPay(int hypay, int b) { }

}
