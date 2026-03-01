package dwang.script.js.api.unwork;

import dwang.script.DwangScriptBaseApi;

public interface MessageAPI extends DwangScriptBaseApi {

    default void mapMessage(String message) { }

    default void addPopupSay(int id, int time, String text) { }

    default void getWeatherEffectNotice(String msg, int type, int time, int bForced) { }

    default void channelMessage(int type, String message) { }

    default void getTopMsgFont(String msg, int nFont, int nFontSizeType, int nFontColorType, int nFadeOutDelay) { }

    default void topMsgBySoul(String message) { }

    default void partyMessage(int type, String msg) { }

    default void addPopupSay(int id, int time, String text, String text2) { }

    default void worldMessageItem(String title, String message, Object item) { }

    default void systemMessage(String msg) { }

    default void broadcastServerMsg(int type, String msg, int weather) { }

    default void worldMessage(String message) { }

    default void worldMessageYellow(String msg) { }

    default void guildMessage(int type, String message) { }

    default void worldSpouseMessage(int type, String message) { }

    default void addPopupSay(int id, int time, String text, String text2, int v2) { }

    default void guildMessage(String message) { }

    default void spouseMessage(int op, String msg) { }

    default void midMsg(int index, String msg, int keep) { }

    default void getTopMsgFont(String msg, int nFont, int nFontSizeType, int nFontColorType, int nFadeOutDelay, int b1) { }

    default void topMsgByItem(int itemId, String message) { }

    default void balloonMsg(String msg, int width, int height) { }

    default void playerMessage(String message) { }

    default void playerMessage(int type, String message) { }

    default void topMsg(String message) { }

    default void mapMessage(int type, String message) { }

    default void worldMessage(int type, String message) { }

}
