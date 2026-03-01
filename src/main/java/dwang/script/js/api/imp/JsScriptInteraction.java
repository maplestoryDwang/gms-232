package dwang.script.js.api.imp;

import dwang.script.ScriptInitData;
import dwang.script.js.api.unwork.*;
import net.swordie.ms.client.character.Char;
import net.swordie.ms.life.npc.NpcScriptInfo;
import net.swordie.ms.scripts.ScriptInfo;
import net.swordie.ms.scripts.ScriptMemory;
import net.swordie.ms.scripts.ScriptType;
import net.swordie.ms.world.field.Field;

import static net.swordie.ms.enums.ChatType.SystemNotice;

/**
 * @author dwang
 * @version 1.0.0
 * @Title
 * @ClassName JsScriptInteraction.java
 * @Description js的交互bean,所有的公用方法都可以写这里
 * @createTime 2026-02-27 10:33
 */

public class JsScriptInteraction implements CashAPI, EventAPI, ItemAPI, JobAPI, MapAPI, MapEffectAPI, MaplePortal, MessageAPI, MissionAPI, MonsterAPI, MovieEffectAPI, NpcAPI, PartyAPI, PetAPI, PlayerAPI, PyramidAPI, QuestAPI, ScriptMessageAPI, SkillAPI, SqlAPI, ToolAPI, UserInterfaceAPI, V167日冕API, V168荣耀API, V169深渊远征队API, V170鬼怪夜市API, V171拟真机器人API, V172新复古API, WeddingAPI, 主题副本API, 修仙API, 冒险岛联盟API, 冒险岛英雄API, 外星异次元API, 好友故事API, 异逝界API, 成就系统API, 我的小屋API, 杂项API, 武陵道场API, 版本活动API, 痛苦迷宫API, 莫奈德API, 赏金猎人API, 镜世界API, 黎曼API, 黑色天堂API {


    private ScriptInitData initData;
    private ScriptInfo si;

    public JsScriptInteraction(ScriptInitData initData, ScriptInfo si) {
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

    @Override
    public int getFieldID() {
        return 0;
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
        stopJs(ScriptType.Npc);
        stopJs(ScriptType.Portal);
        stopJs(ScriptType.Item);
        stopJs(ScriptType.Quest);
        stopJs(ScriptType.Reactor);
        if (getLastActiveScriptType() == ScriptType.Field) {
            // only fields are able to stop themselves, otherwise things like npcs would stop field scripts
            // like magnus leave script would make the orbs disappear if you don't actually leave
            stopJs(ScriptType.Field);
        }
        if (stop) {
            // js 都要手动停止

        }
        setCurNodeEventEnd(false);
    }

    public void stopJs(ScriptType scriptType) {
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

    @Override
    public int getObjectIDByScriptType(ScriptType scriptType) {
        return getScriptInfoByType(scriptType) != null ? getScriptInfoByType(scriptType).getObjectID() : 0;
    }


    @Override
    public void stop(ScriptType scriptType) {
        stopJs(scriptType);
    }

    public void setCurNodeEventEnd(boolean curNodeEventEnd) {
        this.initData.setCurNodeEventEnd(curNodeEventEnd);
    }


}
