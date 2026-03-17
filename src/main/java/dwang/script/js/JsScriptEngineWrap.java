package dwang.script.js;

import dwang.script.IScriptEngineWrap;
import dwang.script.ScriptInitData;
import dwang.script.js.api.imp.JsScriptInteraction;
import net.swordie.ms.ServerConstants;
import net.swordie.ms.client.AccountBossCooldown;
import net.swordie.ms.client.Client;
import net.swordie.ms.client.alliance.Alliance;
import net.swordie.ms.client.alliance.AllianceResult;
import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.MonsterPark;
import net.swordie.ms.client.character.avatar.AvatarLook;
import net.swordie.ms.client.character.commerce.voyage.Voyage;
import net.swordie.ms.client.character.items.*;
import net.swordie.ms.client.character.modules.InventoryModule;
import net.swordie.ms.client.character.quest.Quest;
import net.swordie.ms.client.character.quest.QuestManager;
import net.swordie.ms.client.character.scene.Scene;
import net.swordie.ms.client.character.skills.Option;
import net.swordie.ms.client.character.skills.temp.CharacterTemporaryStat;
import net.swordie.ms.client.character.skills.temp.TemporaryStatBase;
import net.swordie.ms.client.character.skills.temp.TemporaryStatManager;
import net.swordie.ms.client.character.skills.vmatrix.MatrixRecord;
import net.swordie.ms.client.character.skills.vmatrix.NodestoneModule;
import net.swordie.ms.client.character.union.Union;
import net.swordie.ms.client.character.union.UnionMember;
import net.swordie.ms.client.character.union.UnionRaid;
import net.swordie.ms.client.guild.Guild;
import net.swordie.ms.client.guild.GuildMember;
import net.swordie.ms.client.guild.result.GuildResult;
import net.swordie.ms.client.guild.result.GuildType;
import net.swordie.ms.client.jobs.legend.Shade;
import net.swordie.ms.client.party.Party;
import net.swordie.ms.client.party.PartyMember;
import net.swordie.ms.client.party.PartyResult;
import net.swordie.ms.client.trunk.TrunkDlg;
import net.swordie.ms.connection.packet.*;
import net.swordie.ms.connection.packet.field.FieldPacket;
import net.swordie.ms.connection.packet.field.LucidFieldPacket;
import net.swordie.ms.connection.packet.field.PapulatusFieldPacket;
import net.swordie.ms.connection.packet.model.MessagePacket;
import net.swordie.ms.constants.*;
import net.swordie.ms.enums.*;
import net.swordie.ms.handlers.executors.EventManager;
import net.swordie.ms.life.DeathType;
import net.swordie.ms.life.Life;
import net.swordie.ms.life.Reactor;
import net.swordie.ms.life.drop.Drop;
import net.swordie.ms.life.drop.DropInfo;
import net.swordie.ms.life.mob.Mob;
import net.swordie.ms.life.mob.boss.papulatus.PapulatusFieldObject;
import net.swordie.ms.life.mob.boss.papulatus.PapulatusLaserInfo;
import net.swordie.ms.life.mob.boss.papulatus.PapulatusTweezerInfo;
import net.swordie.ms.life.mob.boss.will.WillModule;
import net.swordie.ms.life.mob.skill.MobSkillID;
import net.swordie.ms.life.npc.Npc;
import net.swordie.ms.life.npc.NpcMessageType;
import net.swordie.ms.life.npc.NpcScriptInfo;
import net.swordie.ms.loaders.*;
import net.swordie.ms.loaders.containerclasses.ItemInfo;
import net.swordie.ms.scripts.*;
import net.swordie.ms.util.FileTime;
import net.swordie.ms.util.Position;
import net.swordie.ms.util.Rect;
import net.swordie.ms.util.Util;
import net.swordie.ms.util.container.Tuple;
import net.swordie.ms.world.World;
import net.swordie.ms.world.field.*;
import net.swordie.ms.world.field.bosses.gollux.FallingCatcher;
import net.swordie.ms.world.field.bosses.gollux.GolluxMiniMapFieldClearType;
import net.swordie.ms.world.field.fieldeffect.FieldEffect;
import net.swordie.ms.world.field.fieldeffect.GreyFieldType;
import net.swordie.ms.world.field.instance.Instance;
import net.swordie.ms.world.field.obstacleatom.ObstacleAtomFactory;
import net.swordie.ms.world.field.obstacleatom.ObstacleAtomInfo;
import net.swordie.ms.world.field.obstacleatom.ObstacleInRowInfo;
import net.swordie.ms.world.field.obstacleatom.ObstacleRadianInfo;
import net.swordie.ms.world.shop.NpcShopDlg;
import net.swordie.orm.dao.AllianceDao;
import net.swordie.orm.dao.CharDao;
import net.swordie.orm.dao.SworDaoFactory;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.python.core.PyDictionary;
import org.python.core.PyTuple;

import javax.script.*;
import java.io.File;
import java.io.IOException;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.nio.charset.StandardCharsets;
import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.time.ZoneOffset;
import java.util.*;
import java.util.concurrent.ScheduledFuture;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;
import java.util.regex.Pattern;
import java.util.stream.Collectors;

import static net.swordie.ms.client.character.skills.temp.CharacterTemporaryStat.PapulatusTimeLock;
import static net.swordie.ms.client.character.skills.temp.CharacterTemporaryStat.RideVehicle;
import static net.swordie.ms.enums.ChatType.*;
import static net.swordie.ms.life.npc.NpcMessageType.*;

/**
 * @author dwang
 * @version 1.0.0
 * @Title
 * @ClassName PyScriptEngineWrap.java
 * @Description python脚本执行逻辑
 * @createTime 2026-02-26 15:38
 */

public class JsScriptEngineWrap implements IScriptEngineWrap {

    public static final String INTENDED_NPE_MSG = "Intended NPE by forceful script stop.";

    private static final Pattern listPattern = Pattern.compile("(.)*#[lL][0-9]+#(.)*");
    private static final AllianceDao allianceDao = (AllianceDao) SworDaoFactory.getByClass(Alliance.class);
    private static final CharDao charDao = (CharDao) SworDaoFactory.getByClass(Char.class);
    private static final Logger log = LogManager.getLogger(JsScriptEngineWrap.class);

    private final ScriptEngineManager scriptEngineManager = new ScriptEngineManager();

    // js需要每个脚本一个单独引擎
    private final Map<String, ScriptEngine> scriptEngineMap = new HashMap();


    private static final String SCRIPT_ENGINE_EXTENSION = ".js";
    private static final String DEFAULT_SCRIPT = "undefined";
    private static final Lock fileReadLock = new ReentrantLock();

    private static final String[] fieldEventMethodNames = new String[]{
            "createObstacleAtom",
            "createObstacleAtomToFoothold",
    };

    private static boolean isFieldEventMethodName(String methodName) {
        return Arrays.asList(fieldEventMethodNames).contains(methodName);
    }

    /**
     * 共享数据
     */
    private ScriptInitData initData;

    private static final Random random = new Random();

    public JsScriptEngineWrap(ScriptInitData initData) {
        this.initData = initData;
    }

    public ScriptType getLastActiveScriptType() {
        return initData.getLastActiveScriptType();
    }

    public void setLastActiveScriptType(ScriptType lastActiveScriptType) {
        initData.setLastActiveScriptType(lastActiveScriptType);
    }

    private Bindings getBindingsByType(ScriptType scriptType) {
        ScriptInfo si = getScriptInfoByType(scriptType);
        return si == null ? null : si.getBindings();
    }

    public ScriptInfo getScriptInfoByType(ScriptType scriptType) {
        return initData.getScripts().getOrDefault(scriptType, null);
    }

    public String getScriptNameByType(ScriptType scriptType) {
        return getScriptInfoByType(scriptType).getScriptName();
    }

    public Invocable getInvocableByType(ScriptType scriptType) {
        return getScriptInfoByType(scriptType).getInvocable();
    }

    public int getParentIDByScriptType(ScriptType scriptType) {
        return getScriptInfoByType(scriptType) != null ? getScriptInfoByType(scriptType).getParentID() : 2007;
    }

    public int getObjectIDByScriptType(ScriptType scriptType) {
        return getScriptInfoByType(scriptType) != null ? getScriptInfoByType(scriptType).getObjectID() : 0;
    }


    public int getParentID() {
        int res = 0;
        for (ScriptType type : ScriptType.values()) {
            if (getScriptInfoByType(type) != null) {
                res = getScriptInfoByType(type).getParentID();
            }
        }
        return res;
    }


    @Override
    public Bindings buildScriptBindings(Bindings bindings, ScriptType scriptType, Char chr, Field scriptFiled, ScriptInfo si, Life scriptReactor, boolean scriptQuestTag, Map<String, Object> customBindings) {
        String fileDir = si.getFileDir();
        ScriptEngine scriptEngine = scriptEngineMap.get(fileDir);

        Object interaction = new JsScriptInteraction(initData, si);
//        Object interaction = this;


        scriptEngine.put("im", interaction);
        scriptEngine.put("cm", interaction);
        scriptEngine.put("ms", interaction);

        scriptEngine.put("rm", interaction);
        scriptEngine.put("pi", interaction);
        scriptEngine.put("qm", interaction);
//        EventInstanceManager var10 = client.getPlayer().getEventInstance();
        // todo need to add event
        scriptEngine.put("eim", null);
        scriptEngine.put("em", null);

        // 自定义参数
        if (customBindings != null) {
            customBindings.forEach((k, v) -> scriptEngine.put(k, v));
        }

        if (scriptType == ScriptType.Reactor) {
            scriptEngine.put("reactor", scriptReactor);
        }

        if (scriptType == ScriptType.Quest) {
            scriptEngine.put("startQuest",
                    scriptQuestTag); // biggest hack eu
        }

        Bindings bindings1 = scriptEngine.getBindings(ScriptContext.ENGINE_SCOPE);
        // unused in js
        return bindings1;
    }

    @Override
    public String genScriptDirAndEngine(Char chr, Map<String, CompiledScript> scriptCache, ScriptInfo si) {
        String name = si.getScriptName();
        ScriptType scriptType = si.getScriptType();

        // If script doesn't exist in scripts_tespia directory. Look into normal scripts directory
        // todo 需要加各种类型的路径
        String dir = getDirByType(si);


        boolean exists = scriptCache.containsKey(dir) || new File(dir).exists();
        if (exists && scriptCache.containsKey(dir)) {
            exists = scriptCache.get(dir) != null;
        }

        // If script doesn't exist in normal scripts directory either. return the default script
        if (!exists) {
            log.error(String.format("[Error] Could not find script %s/%s", scriptType.getDir().toLowerCase(), name));
            if (chr != null) {
                chr.chatMessage(Mob, String.format("[Script] Could not find  script %s/%s", scriptType.getDir().toLowerCase(), name));
            }

            // 不存在就不保存
//            scriptCache.put(dir, null);
            dir = String.format("%s/%s/%s%s", ServerConstants.SCRIPT_DIR,
                    scriptType.getDir().toLowerCase(), DEFAULT_SCRIPT, SCRIPT_ENGINE_EXTENSION);
        } else {

            ScriptEngine scriptEngine = this.scriptEngineMap.get(dir);
            if (scriptEngine == null) {
                scriptEngine = this.scriptEngineManager.getEngineByName("nashorn");
                this.scriptEngineMap.put(dir, scriptEngine);
            }
        }
        return dir;
    }


    /**
     * 路径
     *
     * @param si
     * @return
     */
    public String getDirByType(ScriptInfo si) {
        ScriptType scriptType = si.getScriptType();

        String scriptDir = null;
        switch (scriptType) {
            case Npc -> {
                int npcId = si.getParentID();
                scriptDir = (new StringBuilder()).insert(0, "脚本/NPC/").append(npcId).append(".js").toString();
                break;
            }
            case Field -> {
                String name = si.getScriptName();
                scriptDir = (new StringBuilder()).insert(0, "脚本/地图/进入地图/").append(name).append(".js").toString();
                break;
            }
            case FirstEnterField -> {
                String name = si.getScriptName();
                scriptDir = (new StringBuilder()).insert(0, "脚本/地图/首位进入地图/").append(name).append(".js").toString();
                break;
            }
            case Portal -> {
                String name = si.getScriptName();
                scriptDir = (new StringBuilder()).insert(0, "脚本/传送点/").append(name).append(".js").toString();
                break;
            }
            case Reactor -> {
                int reactorId = si.getParentID();
                scriptDir = (new StringBuilder()).insert(0, "脚本/反应堆/").append(reactorId).append(".js").toString();
                break;
            }
            case Item -> {
                int itemId = si.getParentID();
                scriptDir = (new StringBuilder()).insert(0, "脚本/道具/").append(itemId).append(".js").toString();
                break;
            }
            case Quest -> {
                int questId = si.getParentID();
                scriptDir = (new StringBuilder()).insert(0, "脚本/任务/").append(questId).append(".js").toString();
                break;
            }

        }
        return scriptDir;
    }

    @Override
    public String buildScriptStr(Map<String, CompiledScript> scriptCache, String dir) {
        StringBuilder script = new StringBuilder();
        String string = null;
        if (!scriptCache.containsKey(dir)) {
            try {
                fileReadLock.lock();
                script.append(Util.readFile(dir, StandardCharsets.UTF_8));
                string = script.toString();

                // 解析完了
                ScriptEngine scriptEngine = scriptEngineMap.get(dir);
                scriptEngine.eval(string);

            } catch (IOException e) {
                e.printStackTrace();
//                lockInGameUI(false); // so players don't get stuck if a script fails
            } catch (ScriptException e) {
                throw new RuntimeException(e);
            } finally {
                fileReadLock.unlock();
            }
        }

        return string;
    }

    @Override
    public void evalAndRunStart(Map<String, CompiledScript> scriptCache, String scriptStr, ScriptInfo si) throws ScriptException {
        String dir = si.getFileDir();
        String name = si.getScriptName();
        ScriptType scriptType = si.getScriptType();


        ScriptEngine scriptEngine = scriptEngineMap.get(dir);

        // 4. 调用脚本函数
        Invocable inv = (Invocable) scriptEngine;

        // 👉 这一步等价于 NPC 对话开始
        try {
            switch (scriptType) {
                case Npc:
                case Field:
                case FirstEnterField:
                case Portal:
                case Item:
                    inv.invokeFunction("start");
                    break;
                case Reactor:
                    inv.invokeFunction("act");

                    break;
                case Quest:
                    Bindings bindings = si.getBindings();
                    Integer npcId = (Integer) bindings.get("npcTemplateID");
                    if (npcId != null) {
                        si.setNpcTemplateID(npcId);
                    }
                    boolean startQuestTag = name.charAt(name.length() - 1) == ScriptManagerImpl.QUEST_START_SCRIPT_END_TAG.charAt(0);

                    if (startQuestTag) {
                        Object[] param = {1, 0, 0};
                        inv.invokeFunction("start", param);
                    } else {
                        Object[] param = {1, 0, 0};
                        inv.invokeFunction("end", param);
                    }
                    break;
                default:
                    inv.invokeFunction("start");

            }


        } catch (NoSuchMethodException e) {
            throw new RuntimeException(e);
        }


    }

    @Override
    public void runAction(ScriptInfo si, NpcMessageType lastType, byte response, int answer, String text) {

        String fileDir = si.getFileDir();
        ScriptEngine scriptEngine = scriptEngineMap.get(fileDir);
        String dir = si.getFileDir();
        String name = si.getScriptName();

        if (scriptEngine != null) {
            // 4. 调用脚本函数
            Invocable inv = (Invocable) scriptEngine;
            try {
                ScriptType scriptType = si.getScriptType();
                int unused = 0;

                switch (scriptType) {
                    case Npc:
                    case Field:
                    case Portal:
                        // lastType
                        inv.invokeFunction("action", response, unused, answer);
                        break;

                    case Quest:
                        boolean startQuestTag = name.charAt(name.length() - 1) == ScriptManagerImpl.QUEST_START_SCRIPT_END_TAG.charAt(0);

                        // 还是执行
                        if (startQuestTag) {
                            inv.invokeFunction("start", response, unused, answer);
                        } else {
                            inv.invokeFunction("end", response, unused, answer);
                        }

                        break;
                    default:
                        inv.invokeFunction("action", response, unused, answer);
                }


            } catch (ScriptException | NoSuchMethodException e) {
                dispose();
                throw new RuntimeException(e);
            }
        }
    }

    @Override
    public void stop(ScriptType scriptType) {
        // unused in js
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

    public boolean isField() {
        return initData.isField();
    }


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

    public void dispose(ScriptType scriptType) {
        getMemory().clear();
        stopJs(scriptType);
    }

    public Position getPosition(int objId) {
        return getField().getLifeByObjectID(objId).getPosition();
    }

    private ScriptMemory getMemory() {
        return initData.getMemory();
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

    public void setCurNodeEventEnd(boolean curNodeEventEnd) {
        this.initData.setCurNodeEventEnd(curNodeEventEnd);
    }
}
