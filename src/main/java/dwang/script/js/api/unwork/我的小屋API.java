package dwang.script.js.api.unwork;
import dwang.script.DwangScriptBaseApi;

public interface 我的小屋API extends DwangScriptBaseApi {

    default void isInMyHome() { }

    default void 我的小屋_解锁房屋户型(int item, String name, int blueprintStart, int blueprintEnd) { }

    default void getMyHomeVisitor() { }

    default void 我的小屋_添加图纸道具(int itemId) { }

    default void setMaxFurnitureSlot(int target) { }

    default void enterHome(int playerid) { }

    default void getMyHomeName() { }

    default void sendManagerUIPacket() { }

    default void getMyHomeLike() { }

    default void changeFurnitureState(int oid, int state) { }

    default void setMyHomeName(String name) { }

    default void getMyHomeAccessMode() { }

    default void setMyHomeAccessMode(int mode) { }

    default void addMaxFurnitureSlot(int gain) { }

}
