package dwang.script.js.api;

import dwang.script.DwangScriptBaseApi;
import net.swordie.ms.connection.packet.ScriptMan;
import net.swordie.ms.life.npc.NpcMessageType;

import java.util.regex.Pattern;

import static net.swordie.ms.life.npc.NpcMessageType.AskMenu;
import static net.swordie.ms.life.npc.NpcMessageType.AskYesNo;

/**
 * @author dwang
 * @version 1.0.0
 * @Title
 * @ClassName ScriptMsgApi.java
 * @Description 消息接口
 * @createTime 2026-02-27 15:42
 */

public interface ScriptMsgApi extends DwangScriptBaseApi {

     Pattern listPattern = Pattern.compile("(.)*#[lL][0-9]+#(.)*");

    default boolean askYesNo(String text) {
        return sendGeneralSay(text, AskYesNo) != 0;
    }


    private int sendGeneralSay(String text, NpcMessageType nmt) throws NullPointerException {
        var npcScriptInfo = getInitData().getNpcScriptInfo();
        npcScriptInfo.setText(text);
        String checkText = text.replaceAll("[\r\n]", "");
        if (listPattern.matcher(checkText).matches()) {
            nmt = AskMenu;
        }
        npcScriptInfo.setMessageType(nmt);
        getChr().write(ScriptMan.scriptMessage(npcScriptInfo, nmt));
        getMemory().addMemoryInfo(npcScriptInfo);
        return (int) 0;
    }


}
