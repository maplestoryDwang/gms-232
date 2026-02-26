package dwang.script;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.life.npc.NpcScriptInfo;
import net.swordie.ms.scripts.FieldTransferInfo;
import net.swordie.ms.scripts.ScriptInfo;
import net.swordie.ms.scripts.ScriptMemory;
import net.swordie.ms.scripts.ScriptType;
import net.swordie.ms.world.field.Field;

import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.ScheduledFuture;

/**
 * @author dwang
 * @version 1.0.0
 * @Title
 * @ClassName ScriptInitData.java
 * @Description 脚本要使用的数据
 * @createTime 2026-02-26 17:00
 */

public class ScriptInitData {
    private final Char chr;
    private final Field field;
    private final boolean isField;
    private final NpcScriptInfo npcScriptInfo;
    private final Map<ScriptType, ScriptInfo> scripts;
    private final FieldTransferInfo fieldTransferInfo;
    private ScriptType lastActiveScriptType;

    private int returnField = 0;
    private boolean curNodeEventEnd;
    private Map<ScheduledFuture, Boolean> events = new HashMap<>();
    private ScriptMemory memory = new ScriptMemory();

    public ScriptInitData(Char chr, Field field) {
        this.chr = chr;
        this.field = field;
        this.npcScriptInfo = new NpcScriptInfo();
        this.scripts = new HashMap<>();
        this.isField = chr == null;
        this.lastActiveScriptType = ScriptType.None;
        this.fieldTransferInfo = new FieldTransferInfo();
        fieldTransferInfo.setField(isField);

    }


    public Char getChr() {
        return chr;
    }

    public Field getField() {
        return field;
    }

    public boolean isField() {
        return isField;
    }

    public NpcScriptInfo getNpcScriptInfo() {
        return npcScriptInfo;
    }

    public Map<ScriptType, ScriptInfo> getScripts() {
        return scripts;
    }

    public FieldTransferInfo getFieldTransferInfo() {
        return fieldTransferInfo;
    }

    public ScriptType getLastActiveScriptType() {
        return lastActiveScriptType;
    }

    public void setLastActiveScriptType(ScriptType lastActiveScriptType) {
        this.lastActiveScriptType = lastActiveScriptType;
    }


    public int getReturnField() {
        return returnField;
    }

    public void setReturnField(int returnField) {
        this.returnField = returnField;
    }

    public boolean isCurNodeEventEnd() {
        return curNodeEventEnd;
    }

    public void setCurNodeEventEnd(boolean curNodeEventEnd) {
        this.curNodeEventEnd = curNodeEventEnd;
    }

    public Map<ScheduledFuture, Boolean> getEvents() {
        return events;
    }

    public void setEvents(Map<ScheduledFuture, Boolean> events) {
        this.events = events;
    }

    public ScriptMemory getMemory() {
        return memory;
    }

    public void setMemory(ScriptMemory memory) {
        this.memory = memory;
    }

    public boolean isActive(ScriptType scriptType) {
        return scriptType != null && getScriptInfoByType(scriptType) != null && getScriptInfoByType(scriptType).isActive();
    }

    public ScriptInfo getScriptInfoByType(ScriptType scriptType) {
        return getScripts().getOrDefault(scriptType, null);
    }



}
