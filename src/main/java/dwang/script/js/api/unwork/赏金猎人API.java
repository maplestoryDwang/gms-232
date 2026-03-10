package dwang.script.js.api.unwork;
import dwang.script.DwangScriptBaseApi;

public interface 赏金猎人API extends DwangScriptBaseApi {

    /**
         * 求爱之舞，初始化内容
         *
         * @param lengths 每轮动作数量，1366*768分辨率下不建议超过16
         * @出自类 赏金猎人API
         */
    default void loveDanceInit(Object lengths) { }



    /**
         * 求爱之舞，更新状态
         *
         * @param status
         * @出自类 赏金猎人API
         */
    default void loveDanceStatus(int status) { }



    /**
         * 守卫城墙，更新HP
         *
         * @param hp
         * @出自类 赏金猎人API
         */
    default void protectWallLife(int hp) { }



    /**
         * 守卫城墙，更新波数
         *
         * @param wave
         * @出自类 赏金猎人API
         */
    default void protectWallWave(int wave) { }



}
