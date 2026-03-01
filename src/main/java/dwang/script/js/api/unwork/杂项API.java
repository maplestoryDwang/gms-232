package dwang.script.js.api.unwork;
import dwang.script.DwangScriptBaseApi;

public interface 杂项API extends DwangScriptBaseApi {

    default void onCreateGun() { }

    default void onClearGun() { }

    default void getEventEnvelope(int questid, int time) { }

    default void addStickerGroup(int groudId, Object stickers, Object expires) { }

    default void onSetAmmo(int count) { }

    default void setPartyValue(String key, String value) { }

    default void onSetGun(String type, String type2, int v1, int v2, int x1, int y1, int x2, int y2) { }

    default void SitOnDummyPortableChair(int itemId, int on) { }

    default void setFieldValue(String key, String value) { }

    default void 每日任务_制作星星() { }

    default void setSessionValue(String key, String value) { }

}
