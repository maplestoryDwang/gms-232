package dwang.script.js.api.unwork;

import dwang.script.DwangScriptBaseApi;
import net.swordie.ms.connection.packet.field.FieldPacket;

public interface UserInterfaceAPI extends DwangScriptBaseApi {

    /**
         * 关闭UI
         * @出自类 UserInterfaceAPI
         */
    default void closeUI(int type) {
        getChr().write(FieldPacket.closeUI(type));

    }



    /**
         * @出自类 UserInterfaceAPI
    */
    default void enter商城() { }



    /**
         * @出自类 UserInterfaceAPI
    */
    default void enter拍卖() { }



    /**
         * 显示副本技能，出现于莫奈德Act2追逐战
         *
         * @param v1
         * @param v2
         * @出自类 UserInterfaceAPI
         */
    default void onActionBarResult(int v1, int v2) { }



    /**
         * @出自类 UserInterfaceAPI
    */
    default void onActionBarResult(int v1, int v2, int v3, int v4, int v5) { }



    /**
         * 显示新品种UI，以字符串区分 如：我的小屋管家，日冕活动菜单
         *
         * @param mode 开关
         * @param name 字符串
         * @出自类 UserInterfaceAPI
         */
    default void openNewUI(int mode, String name) { }



    /**
         * @出自类 UserInterfaceAPI
    */
    default void openPackageDeliverer() { }



    /**
         * 显示指定UI
         * @出自类 UserInterfaceAPI
         */
    default void openUI(int type) {
        getChr().write(FieldPacket.openUI(type));

    }



    /**
         * 显示指定UI，附带参数 用于点击专业技术村的制作NPC 修理和技术窗口
         *
         * @param type
         * @param npc
         * @出自类 UserInterfaceAPI
         */
    default void openUIWithOption(int type, int npc) { }



    /**
         * 打开网页浏览器
         *
         * @param web 网址
         * @出自类 UserInterfaceAPI
         */
    default void openWeb(String web) { }



    /**
         * 显示内置网页浏览器
         *
         * @param type ？
         * @param path UI对应的素材
         * @param url  完整网址
         * @出自类 UserInterfaceAPI
         */
    default void openWeb(int type, String path, String url) { }



    /**
         * 打开网页浏览器，新接口
         *
         * @param web 网址
         * @出自类 UserInterfaceAPI
         */
    default void openWebNew(int b1, int b2, String web) { }



    /**
         * 武陵道场，通关一层后，暂停计时器10s
         * @出自类 UserInterfaceAPI
         */
    default void pauseTimer() { }



    /**
         * @出自类 UserInterfaceAPI
    */
    default void sendOpenJobChangeUI() { }



    /**
         * @出自类 UserInterfaceAPI
    */
    default void sendProfessionWindow() { }



    /**
         * @出自类 UserInterfaceAPI
    */
    default void sendUltimateExplorer() { }



    /**
         * 【描述】修改左上角的STAGE UI的数量
         * 
    
         * 【出现场景】莫奈德Act2粉红围攻 / 活动_悬赏狩猎
         * 
    
         * @出自类 UserInterfaceAPI
         */
    default void uiChangeStage(int stage) { }



    /**
         * @出自类 UserInterfaceAPI
    */
    default void updateEventUI(int ui, int on) { }



    /**
         * 控制之神更新UI参数
         *
         * @param 类型
         * @param 动作
         * @param 总时间
         * @param 零
         * @param 剩余时间
         * @param 关联任务ID
         * @出自类 UserInterfaceAPI
         */
    default void updateHeaderUI(int 类型, int 动作, int 总时间, int 零, int 剩余时间, int 关联任务ID) { }



    /**
         * @出自类 UserInterfaceAPI
    */
    default void 剪刀石头布_开始() { }



    /**
         * @出自类 UserInterfaceAPI
    */
    default void 次元之镜UI() { }



    /**
         * @出自类 UserInterfaceAPI
    */
    default void 神秘河快速通道(int show) { }



    /**
         * @出自类 UserInterfaceAPI
    */
    default void 组队任务_世界排行榜() { }



    /**
         * [说明] --------< 魔方奇迹优惠 >-------- 
         * 
    
         * 魔方奇迹时间 (3) 
         * 
    
         * 潜能重置_B级升A级成功率提高 : 1000
         * 
    
         * 潜能重置_A级升S级成功率提高 : 500 
         * 
    
         * 潜能重置_S级升SS级成功率提高 : 100
         * @出自类 UserInterfaceAPI
         */
    default void 魔方奇迹时间_提示() { }



}
