package dwang.script.js.api.unwork;

import dwang.script.DwangScriptBaseApi;

public interface UserInterfaceAPI extends DwangScriptBaseApi {

    default void updateHeaderUI(int 类型, int 动作, int 总时间, int 零, int 剩余时间, int 关联任务ID) { }

    default void 魔方奇迹时间_提示() { }

    default void onActionBarResult(int v1, int v2, int v3, int v4, int v5) { }

    default void openWeb(int type, String path, String url) { }

    default void 剪刀石头布_开始() { }

    default void 次元之镜UI() { }

    default void updateEventUI(int ui, int on) { }

    default void enter商城() { }

    default void 组队任务_世界排行榜() { }

    default void sendOpenJobChangeUI() { }

    default void enter拍卖() { }

    default void sendUltimateExplorer() { }

    default void 神秘河快速通道(int show) { }

    default void pauseTimer() { }

    default void sendProfessionWindow() { }

    default void onActionBarResult(int v1, int v2) { }

    default void openNewUI(int mode, String name) { }

    default void openWebNew(int b1, int b2, String web) { }

    default void openWeb(String web) { }

    default void uiChangeStage(int stage) { }

    default void openPackageDeliverer() { }

    default void closeUI(int type) { }

    default void openUI(int type) { }

    default void openUIWithOption(int type, int npc) { }

}
