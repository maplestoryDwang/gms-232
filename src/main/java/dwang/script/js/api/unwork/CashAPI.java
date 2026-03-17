package dwang.script.js.api.unwork;

import dwang.script.DwangScriptBaseApi;

public interface CashAPI extends DwangScriptBaseApi {

    /**
         * @出自类 CashAPI
    */
    default void addHyPay(int hypay, int b) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 CashAPI
    */
    default void gainGachaponItem(int id, int quantity) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 CashAPI
    */
    default void gainGachaponItem(int id, int quantity, String msg) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 CashAPI
    */
    default void gainGachaponItem(int id, int quantity, String msg, int rareness) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 CashAPI
    */
    default void gainGachaponItem(int id, int quantity, String msg, int rareness, int buy) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 CashAPI
    */
    default void gainGachaponItem(int id, int quantity, String msg, int rareness, int buy, int period) {
        throw new RuntimeException("not implemented");
    }



    /**
         * 获得点券
         *
         * @param amount 数量，可正可负
         * @出自类 CashAPI
         */
    default void gainNX(int amount) {
        throw new RuntimeException("not implemented");
    }



    /**
         * 获得点券
         *
         * @param type   类型，0=点券 1=抵用券
         * @param amount 数量，可正可负
         * @出自类 CashAPI
         */
    default void gainNX(int type, int amount) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 CashAPI
    */
    default void getHyPay(int type) {
        throw new RuntimeException("not implemented");
    }



    /**
         * 获取玩家充值的RMB
         *
         * @return
         * @出自类 CashAPI
         */
    default void getRMB() {
        throw new RuntimeException("not implemented");
    }



    /**
         * 获取最近充值记录
         *
         * @param day 天数
         * @return
         * @出自类 CashAPI
         */
    default void getSevenDayPayLog(int day) {
        throw new RuntimeException("not implemented");
    }



    /**
         * 获取累计充值金额
         *
         * @return
         * @出自类 CashAPI
         */
    default void getTotalRMB() {
        throw new RuntimeException("not implemented");
    }



    /**
         * 获取VIP等级
         *
         * @return
         * @出自类 CashAPI
         */
    default void getVip() {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 CashAPI
    */
    default void isVip() {
        throw new RuntimeException("not implemented");
    }



    /**
         * 设置玩家VIP等级
         *
         * @param vip VIP等级
         * @出自类 CashAPI
         */
    default void setVip(int vip) {
        throw new RuntimeException("not implemented");
    }



    /**
         * 设置玩家VIP等级
         *
         * @param vip    VIP等级
         * @param period 时间
         * @出自类 CashAPI
         */
    default void setVip(int vip, int period) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 CashAPI
    */
    default void setViptime(int time) {
        throw new RuntimeException("not implemented");
    }



    /**
         * 掉血效果
         *
         * @param itemId
         * @param v1
         * @出自类 CashAPI
         */
    default void showCashItemEffect(int itemId, int v1) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 CashAPI
    */
    default void useNebuliteGachapon() {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 CashAPI
    */
    default void 敲敲乐奖励(int rank) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 CashAPI
    */
    default void 魔女森林() {
        throw new RuntimeException("not implemented");
    }



}
