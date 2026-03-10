package dwang.script.js.api.unwork;
import dwang.script.DwangScriptBaseApi;

public interface 黎曼API extends DwangScriptBaseApi {

    /**
         * 黎曼 上一百层 更新黑洞位置
         *
         * @param holeBottom
         * @param holeTop
         * @param orca
         * @param time       单位毫秒
         * @出自类 黎曼API
         */
    default void upShowHoleSchedule(int holeBottom, int holeTop, int orca, int time) { }



    /**
         * 黎曼 上一百层 显示台阶
         *
         * @param names
         * @param shows
         * @param time  单位毫秒
         * @出自类 黎曼API
         */
    default void upShowStepSchedule(Object names, Object shows, int time) { }



    /**
         * 黎曼 上一百层小游戏
         * @出自类 黎曼API
         */
    default void upStart() { }



    /**
         * 艾尔达瀑布小游戏，初始化
         * @出自类 黎曼API
         */
    default void 艾尔达瀑布_初始化() { }



    /**
         * 艾尔达瀑布小游戏，开始冲击
         * @出自类 黎曼API
         */
    default void 艾尔达瀑布_即将冲击() { }



}
