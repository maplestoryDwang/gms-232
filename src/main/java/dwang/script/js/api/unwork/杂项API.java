package dwang.script.js.api.unwork;
import dwang.script.DwangScriptBaseApi;
import net.swordie.ms.connection.packet.WvsContext;

public interface 杂项API extends DwangScriptBaseApi {

    /**
         * 添加表情包
         *
         * @param groudId
         * @param stickers
         * @param expires
         * @出自类 杂项API
         */
    default void addStickerGroup(int groudId, Object stickers, Object expires) {
        throw new RuntimeException("not implemented");
    }



    /**
         * 活动信封
         * @出自类 杂项API
         */
    default void getEventEnvelope(int questid, int time) {
        throw new RuntimeException("not implemented");
    }



    /**
         * 退出射击模式
         * @出自类 杂项API
         */
    default void onClearGun() {
        throw new RuntimeException("not implemented");
    }



    /**
         * 激活枪械模式
         * @出自类 杂项API
         */
    default void onCreateGun() {
        throw new RuntimeException("not implemented");
    }



    /**
         * 设置枪械模式弹药
         *
         * @param count
         * @出自类 杂项API
         */
    default void onSetAmmo(int count) {
        throw new RuntimeException("not implemented");
    }



    /**
         * 加载FPS模式信息
         *
         * @param type
         * @param type2
         * @param v1
         * @param v2
         * @param x1
         * @param y1
         * @param x2
         * @param y2
         * @出自类 杂项API
         */
    default void onSetGun(String type, String type2, int v1, int v2, int x1, int y1, int x2, int y2) {
        throw new RuntimeException("not implemented");
    }



    /**
         * 出现于希拉的剩余复活次数UI
         * @出自类 杂项API
         */
    default void setFieldValue(String key, String value) {
        throw new RuntimeException("not implemented");
    }



    /**
         * 临时团队变量？
         * @出自类 杂项API
         */
    default void setPartyValue(String key, String value) {
        throw new RuntimeException("not implemented");
    }



    /**
         * 添加临时变量？
         * @出自类 杂项API
         */
    default void setSessionValue(String key, String value) {
        getChr().write(WvsContext.sessionValue(key, value));

    }



    /**
         * 自动坐下
         * @出自类 杂项API
         */
    default void SitOnDummyPortableChair(int itemId, int on) {
        throw new RuntimeException("not implemented");
    }



    /**
         * @出自类 杂项API
    */
    default void 每日任务_制作星星() {
        throw new RuntimeException("not implemented");
    }



}
