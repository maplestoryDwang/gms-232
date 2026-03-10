package dwang.script.js.api.unwork;
import dwang.script.DwangScriptBaseApi;

public interface 杂项API extends DwangScriptBaseApi {

    /**
         * 添加表情包
         *
         * @param groudId
         * @param stickers
         * @param expires
         * @出自类 杂项API
         */
    default void addStickerGroup(int groudId, Object stickers, Object expires) { }



    /**
         * 活动信封
         * @出自类 杂项API
         */
    default void getEventEnvelope(int questid, int time) { }



    /**
         * 退出射击模式
         * @出自类 杂项API
         */
    default void onClearGun() { }



    /**
         * 激活枪械模式
         * @出自类 杂项API
         */
    default void onCreateGun() { }



    /**
         * 设置枪械模式弹药
         *
         * @param count
         * @出自类 杂项API
         */
    default void onSetAmmo(int count) { }



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
    default void onSetGun(String type, String type2, int v1, int v2, int x1, int y1, int x2, int y2) { }



    /**
         * 出现于希拉的剩余复活次数UI
         * @出自类 杂项API
         */
    default void setFieldValue(String key, String value) { }



    /**
         * 临时团队变量？
         * @出自类 杂项API
         */
    default void setPartyValue(String key, String value) { }



    /**
         * 添加临时变量？
         * @出自类 杂项API
         */
    default void setSessionValue(String key, String value) { }



    /**
         * 自动坐下
         * @出自类 杂项API
         */
    default void SitOnDummyPortableChair(int itemId, int on) { }



    /**
         * @出自类 杂项API
    */
    default void 每日任务_制作星星() { }



}
