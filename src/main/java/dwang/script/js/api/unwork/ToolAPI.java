package dwang.script.js.api.unwork;

import dwang.script.DwangScriptBaseApi;
import net.swordie.ms.world.field.Field;

public interface ToolAPI extends DwangScriptBaseApi {

    default void rand(int min, int max) { }

    default void randArray(int min, int max, int amout) { }

    default void enableActions() { }

    default void mplewPacket(String opcodes, String Text) { }

    default void genPortalScript(Field map) { }

    default void getzhizunvip() { }

    default void genItemScript(int start, int end) { }

    default void enableActionsLight() { }

    default void deleteCharacter(int cid) { }

    default void rand(Object nums) { }

    default void genMapScript(int start, int end) { }

    default void randArray(Object arr, int amout) { }

    default void openScriptNpc() { }

    default void format(String format, Object toFormat) { }

    default void getAllCharacters() { }

    default void checkURDVNMOOKGD() { }

    default void getNowTimeString(String format) { }

    default void getUpdateLog() { }

    default void getConstantScriptContent(String name) { }

    default void getServerName() { }

    default void getChannelNumber() { }

    default void test() { }

    default void getLeftPadded(String param_in, Object padchar, int length) { }

    default void get服务器启动时间() { }

    default void test(String test) { }

    default void dropSingleItem(int itemId) { }

    default void formatNumberWithComma(int num) { }

    default void getCharacterList() { }

    default void getChannelServer() { }

    default void getReadableMillis(int startMillis, int endMillis) { }

    default void getCharacterName(int characterid) { }

    default void genQuestScript(int start, int end) { }

    default void checkDrop(int mobId) { }

    default void getCurrentTime() { }

    default void randInt(int arg0) { }

}
