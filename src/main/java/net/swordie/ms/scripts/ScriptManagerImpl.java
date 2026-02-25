package net.swordie.ms.scripts;

import dwang.script.ScriptManagerFun;
import dwang.script.js.JsScriptManagerImp;
import dwang.script.python.PyScriptManagerImp;
import net.swordie.ms.client.character.Char;
import net.swordie.ms.enums.*;
import net.swordie.ms.life.npc.NpcMessageType;
import net.swordie.ms.life.npc.NpcScriptInfo;
import net.swordie.ms.world.field.*;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.util.*;
import java.util.concurrent.*;

/**
 * Created on 2/19/2018.
 *
 * @see ScriptManager
 */
public class ScriptManagerImpl implements ScriptManagerFun{


    private static final Logger log = LogManager.getLogger(ScriptManagerImpl.class);
    public static final String SCRIPT_ENGINE_NAME = "python";

    public static final String QUEST_COMPLETE_SCRIPT_END_TAG = "e";
    public static final String QUEST_START_SCRIPT_END_TAG = "s";
    public static final String QUEST_RESIGN_SCRIPT_END_TAG = "x";

    private ScriptManagerFun scriptManager;


    private ScriptManagerFun jsScriptManager;

    private ScriptManagerImpl(Char chr, Field field) {
//        this.chr = chr;
//        this.field = field;
//        this.npcScriptInfo = new NpcScriptInfo();
//        this.scripts = new HashMap<>();
//        this.isField = chr == null;
//        this.lastActiveScriptType = ScriptType.None;
//        this.fieldTransferInfo = new FieldTransferInfo();
//        fieldTransferInfo.setField(isField);

        scriptManager = new PyScriptManagerImp(chr, field);
        jsScriptManager = new JsScriptManagerImp(chr, field);
    }

    public void setScriptManager(ScriptManagerFun scriptManager) {
        this.scriptManager = scriptManager;
    }




    public ScriptManagerImpl(Char chr) {
        this(chr, null);
    }

    public ScriptManagerImpl(Field field) {
        this(null, field);
    }


    public static void clear() {
        PyScriptManagerImp.clear();
    }


    // 入口1：脚本名 最主要的入口，点击NPC的任务从这里进
    public void startScriptByScriptNameAndType(int parentID, String scriptName, ScriptType scriptType) {
            scriptManager.startScriptByScriptNameAndType(parentID, scriptName, scriptType);
    }

    // 入口2：脚本名 + 自定义绑定关系
    // 例如 地图绑定mob
    public void startScriptCustomBindings(int parentID, String scriptName, ScriptType scriptType, Map<String, Object> customBindings) {
        scriptManager.startScriptCustomBindings(parentID, scriptName, scriptType, customBindings);
    }

    // 脚本有使用
    public void startScript(int parentID, int objID, ScriptType scriptType) {
        scriptManager.startScript(parentID, objID, scriptType);
    }

    // 入口3：地图上的 NPC REACTOR开始脚本从这里进
    public void startScript(int parentId, int objId, String scriptName, ScriptType scriptType) {
        if (parentId == 1002101) {
            jsScriptManager.startScript(parentId, objId, scriptName, scriptType);
        } else {
            scriptManager.startScript(parentId, objId, scriptName, scriptType);
        }

    }

    // 入口4： objId 调用脚本 + 自定义 reactor field等
    public void startScript(int parentID, int objID, String scriptName, ScriptType scriptType, String key, Object value) {
        scriptManager.startScript(parentID, objID, scriptName, scriptType, key, value);
    }


    public void stop(ScriptType scriptType) {
        scriptManager.stop(scriptType);
    }

    // 二次进入入口1
    public void handleAction(NpcMessageType lastType, byte response, int answer) {
        scriptManager.handleAction(lastType, response, answer);
    }

    // 二次进入入口2
    public void handleActionText(NpcMessageType lastType, byte response, String text) {
        scriptManager.handleActionText(lastType, response, text);
    }

    @Override
    public NpcScriptInfo getNpcScriptInfo() {
       return scriptManager.getNpcScriptInfo();
    }

    @Override
    public void dispose(boolean stop) {
        scriptManager.dispose(stop);

    }

    @Override
    public void dispose(ScriptType scriptType) {
        scriptManager.dispose(scriptType);

    }

    @Override
    public void setCurNodeEventEnd(boolean curNodeEventEnd) {
        scriptManager.setCurNodeEventEnd(curNodeEventEnd);
    }

    @Override
    public void stopEvents() {
        scriptManager.stopEvents();
    }

    @Override
    public void stopFieldEvents() {
        scriptManager.stopFieldEvents();
    }

    @Override
    public void addEvent(ScheduledFuture event, boolean isFieldEvent) {
        scriptManager.addEvent(event, isFieldEvent);
    }

    @Override
    public void warp(int fieldID, int portalID) {
        scriptManager.warp(fieldID, portalID);
    }

    @Override
    public void warpInstanceIn(int id, int portal) {
        scriptManager.warpInstanceIn(id, portal);
    }

    @Override
    public void warpInstanceOut(int id, int portal) {
        scriptManager.warpInstanceOut(id, portal);
    }


    @Override
    public int getRemainingBossCooldownMinutes(BossCooldown bc) {
        return scriptManager.getRemainingBossCooldownMinutes(bc);
    }

    @Override
    public void openShop(int shopID) {
        scriptManager.openShop(shopID);
    }

    @Override
    public void teleportToPortal(int portalId) {
        scriptManager.teleportToPortal(portalId);
    }

    @Override
    public void setActionBar(boolean show, ActionBarType type) {
        scriptManager.setActionBar(show, type);
    }

    @Override
    public void setInstanceTime(int seconds, int forcedReturnFieldId) {
        scriptManager.setInstanceTime(seconds, forcedReturnFieldId);
    }

    @Override
    public void setDeathCount(int deathCount) {
        scriptManager.setDeathCount(deathCount);
    }

    @Override
    public void setReturnField(int returnField) {
        scriptManager.setReturnField(returnField);
    }


}
