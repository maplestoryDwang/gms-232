package dwang.script.js.api.unwork;
import dwang.script.DwangScriptBaseApi;

public interface 好友故事API extends DwangScriptBaseApi {

    /**
         * 好友故事的奖励
         * @出自类 好友故事API
         */
    default void campusReward(int exp, int equipEXP, int itemCount, int additionalEXP, int v2, int v3, int levels, int boss1, int rewardType1, int boss2, int rewardType2, int boss3, int rewardType3, int boss4, int rewardType4, int boss5, int rewardType5) { }



    /**
         * 显示换装界面，出现于好友故事
         *
         * @param v1
         * @param 服装道具
         * @param 消耗道具
         * @param v4
         * @出自类 好友故事API
         */
    default void changeClothLook(int v1, int 服装道具, int 消耗道具, int v4) { }



}
