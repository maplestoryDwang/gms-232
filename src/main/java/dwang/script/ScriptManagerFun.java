package dwang.script;

import net.swordie.ms.enums.ActionBarType;
import net.swordie.ms.enums.BossCooldown;
import net.swordie.ms.life.npc.NpcMessageType;
import net.swordie.ms.life.npc.NpcScriptInfo;
import net.swordie.ms.scripts.ScriptType;

import java.util.Map;
import java.util.concurrent.ScheduledFuture;

/**
 * @author 橘子
 * @date 2026/2/24
 * @description 脚本控制方法,控制类和py/js实现类都需要实现
 */
public interface ScriptManagerFun {

    void startScriptByScriptNameAndType(int parentID, String scriptName, ScriptType scriptType);

    void startScriptCustomBindings(int parentID, String scriptName, ScriptType scriptType, Map<String, Object> customBindings);

    void startScript(int parentID, int objID, ScriptType scriptType);

    void startScript(int parentId, int objId, String scriptName, ScriptType scriptType);

    void startScript(int parentID, int objID, String scriptName, ScriptType scriptType, String key, Object value);

    void stop(ScriptType scriptType);

    void handleAction(NpcMessageType lastType, byte response, int answer);

    void handleActionText(NpcMessageType lastType, byte response, String text);


    NpcScriptInfo getNpcScriptInfo();


    void dispose(boolean stop);

    void dispose(ScriptType scriptType);


    /**
     *   以下方法放这里有待商榷
     *   dwang
     */

    void setCurNodeEventEnd(boolean curNodeEventEnd);

    void stopEvents();

    void stopFieldEvents();


    void addEvent(ScheduledFuture event, boolean isFieldEvent);


    void warp(int fieldID, int portalID);

    void warpInstanceIn(int id, int portal);

    void warpInstanceOut(int id, int portal);

    int getRemainingBossCooldownMinutes(BossCooldown bc);

    void openShop(int shopID);

    void teleportToPortal(int portalId);

    void setActionBar(boolean show, ActionBarType type);

    void setInstanceTime(int seconds, int forcedReturnFieldId);

    void setDeathCount(int deathCount);

    void setReturnField(int returnField);
}
