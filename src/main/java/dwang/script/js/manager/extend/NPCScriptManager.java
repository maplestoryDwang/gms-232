package dwang.script.js.manager.extend;

import dwang.script.js.JSScriptType;
import dwang.script.js.action.npc.NPCConversationInteraction;
import dwang.script.js.manager.AbstractScriptManager;
import net.swordie.ms.client.Account;
import net.swordie.ms.connection.packet.ScriptMan;
import net.swordie.ms.life.npc.NpcMessageType;

import javax.script.Invocable;
import java.util.Map;
import java.util.WeakHashMap;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.concurrent.locks.Lock;

import static net.swordie.ms.life.npc.NpcMessageType.AskMenu;
import static net.swordie.ms.life.npc.NpcMessageType.AskYesNo;

/**
 * @author dwang
 * @version 1.0.0
 * @Title
 * @ClassName NPCScriptManager.java
 * @Description NPC引擎
 * @createTime 2026-02-21 15:13
 */

public class NPCScriptManager extends AbstractScriptManager {

    private static final NPCScriptManager npcScriptManager = new NPCScriptManager();

    /**
     * 存储执行参数cm
     */
    private final Map<Account, NPCConversationInteraction> npcConversationManagerMap = new WeakHashMap();

    public static NPCScriptManager getInstance() {
        return npcScriptManager;
    }


    public void start(Account account, int npcId, String specialScriptName) {
        this.start(account, npcId, 0, specialScriptName);
    }

    public void start(Account account, int npcId, int var3, String specialScriptName) {
        if (this.npcConversationManagerMap.containsKey(account)) {
            this.dispose(account);
        } else {
            Lock var5 = account.getNpcLock();
            var5.lock();

            try {
                JSScriptType var6 = JSScriptType.NPC;
                if (specialScriptName == null) {
                    if (var3 == 0) {
                        specialScriptName = (new StringBuilder()).insert(0, "脚本/NPC/").append(npcId).append(".js").toString();
                    } else {
                        specialScriptName = (new StringBuilder()).insert(0, "脚本/NPC/").append(npcId).append("_").append(var3).append(".js").toString();
                    }
                } else if (specialScriptName.startsWith("传送点对话.")) {
                    specialScriptName = (new StringBuilder()).insert(0, "脚本/传送点/").append(specialScriptName.substring(6)).append(".js").toString();
                    var6 = JSScriptType.传送点;
                } else if (specialScriptName.startsWith("反应堆对话.")) {
                    specialScriptName = (new StringBuilder()).insert(0, "脚本/反应堆/").append(specialScriptName.substring(6)).append(".js").toString();
                    var6 = JSScriptType.反应堆;
                } else {
                    specialScriptName = (new StringBuilder()).insert(0, "脚本/特殊/").append(specialScriptName).append(".js").toString();
                }


                NPCConversationInteraction interaction = new NPCConversationInteraction(account, npcId, -1, specialScriptName, var6, (Invocable) null);
                this.npcConversationManagerMap.put(account, interaction);
                AtomicInteger atomicInteger = getAccountAtomicIntegerMap().get(account.getCurrentChr());
                if (atomicInteger == null) {
                    atomicInteger = new AtomicInteger(1);
                    getAccountAtomicIntegerMap().put(account.getCurrentChr(), atomicInteger);
                }


                // 调用
//                String scriptDesc = (new StringBuilder()).insert(0, "NPC：").append(npcId).append(var3 == 0 ? "" : (new StringBuilder()).insert(0, "_").append(var3).toString()).append(specialScriptName == null ? "" : (new StringBuilder()).insert(0, " 特殊：").append(specialScriptName).toString()).append(" ").append(account.getPlayer().getMap()).toString();
//                String[] tempValue = {specialScriptName, Integer.toString(npcId), NameInfoCache.getNpcName(npcId), Integer.toString(account.getPlayer().getMapId()), account.getPlayer().getMap().getMapName(), M.L()};
//                String[] tempKey = {"%SCRIPT_PATH%", "%NPCID%", "%NPC名称%", "%所在地图ID%", "%所在地图名称%", "%创建时间%"};

                String scriptDesc = null;
                String[] tempValue = null;
                String[] tempKey = null;
                Invocable var10 = this.invokeFun(account, specialScriptName, "脚本/NPC模板.js", var6.name(), scriptDesc, tempKey, tempValue, interaction, "start", new Object[0]);
                if (var10 == null) {
                    this.dispose(account);
                } else {

                    // 存储当前脚本的调用
                    interaction.setIv(var10);
                }
            } finally {
                var5.unlock();
            }

        }
    }


    public void dispose(Account account) {
        NPCConversationInteraction interaction = this.npcConversationManagerMap.get(account);
        if (interaction != null) {
            this.npcConversationManagerMap.remove(account);
            account.removeScriptEngine(interaction.getScript());
        }

        // 谈话结束
        if (account.getCurrentChr() != null && getAccountAtomicIntegerMap().get(account.getCurrentChr()).get() == 1) {
            getAccountAtomicIntegerMap().get(account.getCurrentChr()).set(0);
        }

        // 发送dispose
        account.getCurrentChr().dispose();
    }




}
