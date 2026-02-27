package dwang.script.py.api.imp;

import dwang.script.ScriptInitData;
import dwang.script.py.api.*;
import net.swordie.ms.client.character.Char;
import net.swordie.ms.life.npc.NpcScriptInfo;
import net.swordie.ms.scripts.ScriptInfo;
import net.swordie.ms.scripts.ScriptMemory;
import net.swordie.ms.scripts.ScriptType;
import net.swordie.ms.util.Position;
import net.swordie.ms.world.field.Field;

import static net.swordie.ms.enums.ChatType.SystemNotice;

/**
 * @author dwang
 * @version 1.0.0
 * @Title
 * @ClassName PyScriptInteraction.java
 * @Description 交互bean,所有的公用方法都可以写这里
 * @createTime 2026-02-27 10:33
 */

public class PyScriptInteraction implements PyNPCAPI, PyBossAPI, PyCharacterStatAPI, PyCharacterTemporaryStatAPI,
        PyChatAPI, PyClockAPI, PyFieldreAPI, PyGuildAllianceAPI, PyInGameDirectionEventAPI, PyInventoryAPI, PyMobAPI,
        PyOtherAPI, PyPartyAPI, PyPartyQuestAPI, PyQuestAPI, PyReactorAPI, PySendAskAPI, PyUnionAPI {


    public static final String INTENDED_NPE_MSG = "Intended NPE by forceful script stop.";


    private ScriptInitData initData;
    private ScriptInfo si;

    public PyScriptInteraction(ScriptInitData initData, ScriptInfo si) {
        this.initData = initData;
        this.si = si;
    }



    /**
     * 下面是 JS APIJi接口调用使用方法
     */

    @Override
    public ScriptInitData getInitData() {
        return initData;
    }

    @Override
    public ScriptMemory getMemory() {
        return initData.getMemory();
    }

    public Char getChr() {
        var charr = initData.getChr();
        if (charr == null && getField().getChars().size() > 0) {
            charr = getField().getChars().get(0);
        }
        return charr;
    }

    public Field getField() {
        return initData.isField() ? initData.getField() : getChr().getField();
    }

    public int getFieldID() {
        return getField().getId();
    }

    public int getParentID() {
        return si.getParentID();
    }

    public ScriptType getScriptType() {
        return si.getScriptType();
    }

    public int getObjID() {
        return si.getObjectID();
    }

    @Override
    public void chat(String text) {
        getChr().chatMessage(SystemNotice, text);
    }

    @Override
    public void stop(ScriptType scriptType) {
        stopPy(scriptType);
    }


    /**
     * 下面是 JS通用脚本方法
     */


    public void dispose() {
        dispose(true);
    }

    public void dispose(boolean stop) {
        if (getChr() != null) {
            getChr().setTalkingToNpc(false);
        }
        initData.getNpcScriptInfo().reset();
        getMemory().clear();
        stopPy(ScriptType.Npc);
        stopPy(ScriptType.Portal);
        stopPy(ScriptType.Item);
        stopPy(ScriptType.Quest);
        stopPy(ScriptType.Reactor);
        if (getLastActiveScriptType() == ScriptType.Field) {
            // only fields are able to stop themselves, otherwise things like npcs would stop field scripts
            // like magnus leave script would make the orbs disappear if you don't actually leave
            stopPy(ScriptType.Field);
        }
        if (stop) {
            throw new NullPointerException(INTENDED_NPE_MSG); // makes the underlying script stop
        }
        setCurNodeEventEnd(false);
    }

    public void stopPy(ScriptType scriptType) {
        setSpeakerID(0);
        if (getLastActiveScriptType() == scriptType) {
            setLastActiveScriptType(ScriptType.None);
        }
        ScriptInfo si = getScriptInfoByType(scriptType);
        if (si != null) {
            si.reset();
        }
        initData.getNpcScriptInfo().reset();
        getMemory().clear();
        initData.getScripts().remove(scriptType);
        if (getChr() != null) {
            getChr().dispose();
        }
    }

    public void setSpeakerID(int templateID) {
        NpcScriptInfo nsi = initData.getNpcScriptInfo();
        nsi.removeParam(NpcScriptInfo.Param.PlayerAsSpeaker);
        nsi.removeParam(NpcScriptInfo.Param.PlayerAsSpeakerFlip);
        boolean isNotCancellable = nsi.hasParam(NpcScriptInfo.Param.NotCancellable);
        nsi.setTemplateID(templateID);
        if (isNotCancellable) {
            nsi.addParam(NpcScriptInfo.Param.NotCancellable);
        }
    }

    public ScriptType getLastActiveScriptType() {
        return initData.getLastActiveScriptType();
    }

    public void setLastActiveScriptType(ScriptType lastActiveScriptType) {
        initData.setLastActiveScriptType(lastActiveScriptType);
    }

    public ScriptInfo getScriptInfoByType(ScriptType scriptType) {
        return initData.getScripts().getOrDefault(scriptType, null);
    }

    public int getObjectIDByScriptType(ScriptType scriptType) {
        return getScriptInfoByType(scriptType) != null ? getScriptInfoByType(scriptType).getObjectID() : 0;
    }


    public void setCurNodeEventEnd(boolean curNodeEventEnd) {
        this.initData.setCurNodeEventEnd(curNodeEventEnd);
    }

    public void dispose(ScriptType scriptType) {
        getMemory().clear();
        stopPy(scriptType);
    }

    public Position getPosition(int objId) {
        return getField().getLifeByObjectID(objId).getPosition();
    }

}
