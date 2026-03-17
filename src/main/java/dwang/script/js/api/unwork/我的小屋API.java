package dwang.script.js.api.unwork;
import dwang.script.DwangScriptBaseApi;

public interface 我的小屋API extends DwangScriptBaseApi {

    /**
         * 家具栏位扩展
         * @出自类 我的小屋API
         */
    default void addMaxFurnitureSlot(int gain) {
        throw new RuntimeException("not implemented");
    }



    /**
         * 改变家具状态，例如开关灯
         * @出自类 我的小屋API
         */
    default void changeFurnitureState(int oid, int state) {
        throw new RuntimeException("not implemented");
    }



    /**
         * 前往小屋
         *
         * @param playerid 0=自己 其他为玩家账号ID
         * @出自类 我的小屋API
         */
    default void enterHome(int playerid) {
        throw new RuntimeException("not implemented");
    }



    /**
         * 我的小屋，获得访问模式
         * @出自类 我的小屋API
         */
    default void getMyHomeAccessMode() {
        throw new RuntimeException("not implemented");
    }



    /**
         * 我的小屋，获得赞数
         * @出自类 我的小屋API
         */
    default void getMyHomeLike() {
        throw new RuntimeException("not implemented");
    }



    /**
         * 我的小屋，获得名称
         * @出自类 我的小屋API
         */
    default void getMyHomeName() {
        throw new RuntimeException("not implemented");
    }



    /**
         * 我的小屋，获得访客数量
         * @出自类 我的小屋API
         */
    default void getMyHomeVisitor() {
        throw new RuntimeException("not implemented");
    }



    /**
         * 检查是否在自己家里
         * @出自类 我的小屋API
         */
    default void isInMyHome() {
        throw new RuntimeException("not implemented");
    }



    /**
         * 开启管家UI
         * @出自类 我的小屋API
         */
    default void sendManagerUIPacket() {
        throw new RuntimeException("not implemented");
    }



    /**
         * 家具栏位扩展
         * @出自类 我的小屋API
         */
    default void setMaxFurnitureSlot(int target) {
        throw new RuntimeException("not implemented");
    }



    /**
         * 我的小屋，设置访问权限
         * @出自类 我的小屋API
         */
    default void setMyHomeAccessMode(int mode) {
        throw new RuntimeException("not implemented");
    }



    /**
         * 我的小屋，设置名称
         * @出自类 我的小屋API
         */
    default void setMyHomeName(String name) {
        throw new RuntimeException("not implemented");
    }



    /**
         * 使用组件蓝图或者建筑道具
         * @出自类 我的小屋API
         */
    default void 我的小屋_添加图纸道具(int itemId) {
        throw new RuntimeException("not implemented");
    }



    /**
         * 使用建筑蓝图，蓝图ID = 地图ID的末位
         * @出自类 我的小屋API
         */
    default void 我的小屋_解锁房屋户型(int item, String name, int blueprintStart, int blueprintEnd) {
        throw new RuntimeException("not implemented");
    }



}
