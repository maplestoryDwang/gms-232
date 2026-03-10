package dwang.script.js.api.unwork;
import dwang.script.DwangScriptBaseApi;

public interface 起源之塔API extends DwangScriptBaseApi {

    /**
         * 不知道为什么 22F的陷阱传送点也无法触发，只能人肉触发了
         * @出自类 起源之塔API
         */
    default void 起源之塔_22F陷阱() { }



    /**
         * 不知道为什么 4F的陷阱传送点全部无法触发，只能人肉触发了
         * @出自类 起源之塔API
         */
    default void 起源之塔_4F陷阱() { }



    /**
         * 用于起源之塔第三关，左右平衡
         *
         * @param centerX
         * @出自类 起源之塔API
         */
    default void 起源之塔_均衡点数(int centerX) { }



    /**
         * 起源之塔，显示奖励统计UI
         * @出自类 起源之塔API
         */
    default void 起源之塔_奖励UI(int floor, int time, int point, int exp, int box, int best) { }



    /**
         * @出自类 起源之塔API
    */
    default void 起源之塔_更新记录(int end) { }



    /**
         * @出自类 起源之塔API
    */
    default void 起源之塔_获得戒指(int itemId, int period) { }



}
