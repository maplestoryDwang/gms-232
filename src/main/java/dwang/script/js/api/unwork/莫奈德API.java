package dwang.script.js.api.unwork;
import dwang.script.DwangScriptBaseApi;

public interface 莫奈德API extends DwangScriptBaseApi {

    /**
         * 莫奈德风格的结算界面
         *
         * @param exp
         * @param gold
         * @param items
         * @出自类 莫奈德API
         */
    default void monadEndingScene(int exp, int gold, Object items) { }



    /**
         * 强制玩家移动，玩家不可操作，出现于莫奈德阿布鲁大篷车
         * @出自类 莫奈德API
         */
    default void monadForceMove(String s, int v1, int time) { }



    /**
         * 莫奈德的各项操作
         * @出自类 莫奈德API
         */
    default void 莫奈德_特效(String text, Object v) { }



    /**
         * 莫奈德风格的随机位置文字气泡，等待一段时间后再执行
         *
         * @param text
         * @param v
         * @param wait 单位是秒
         * @出自类 莫奈德API
         */
    default void 莫奈德_特效(String text, Object v, int wait) { }



}
