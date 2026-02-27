package dwang.script.py.api;

import dwang.script.DwangScriptBaseApi;
import net.swordie.ms.connection.packet.WvsContext;
import net.swordie.ms.connection.packet.model.MessagePacket;
import net.swordie.ms.enums.WeatherEffNoticeType;

import static net.swordie.ms.enums.ChatType.Notice2;
import static net.swordie.ms.enums.ChatType.SystemNotice;

/**
 * @author 橘子
 * @date 2026/2/27
 * @description
 */
public interface PyChatAPI extends DwangScriptBaseApi {
    
    default void chat(String text) {
        chatRed(text);
    }

    
    default void chatRed(String text) {
        getChr().chatMessage(SystemNotice, text);
    }

    
    default void chatBlue(String text) {
        getChr().chatMessage(Notice2, text);
    }

    default void systemMessage(String message) {
        getChr().write(WvsContext.message(MessagePacket.systemMessage(message)));
    }

    
    default void chatScript(String text) {
        getChr().chatScriptMessage(text);
    }

    default void showWeatherNotice(String text, WeatherEffNoticeType type) {
        showWeatherNotice(text, type, 7000); // 7 seconds
    }

    
    default void showWeatherNotice(String text, WeatherEffNoticeType type, int duration) {
        getField().broadcastPacket(WvsContext.weatherEffectNotice(type, text, duration));
    }
}
