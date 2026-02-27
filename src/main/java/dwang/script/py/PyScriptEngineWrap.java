package dwang.script.py;

import dwang.script.IScriptEngineWrap;
import dwang.script.ScriptInitData;
import dwang.script.js.api.imp.JsScriptInteraction;
import dwang.script.py.api.imp.PyScriptInteraction;
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
import static net.swordie.ms.enums.ChatType.GameDesc;
import static net.swordie.ms.life.npc.NpcMessageType.*;
import static net.swordie.ms.life.npc.NpcMessageType.AskSelectMenu;

/**
 * @author dwang
 * @version 1.0.0
 * @Title
 * @ClassName PyScriptEngineWrap.java
 * @Description python脚本执行包装类
 * @createTime 2026-02-26 15:38
 */

public class PyScriptEngineWrap implements IScriptEngineWrap {

    public static final String INTENDED_NPE_MSG = "Intended NPE by forceful script stop.";

    private static final Pattern listPattern = Pattern.compile("(.)*#[lL][0-9]+#(.)*");
    private static final AllianceDao allianceDao = (AllianceDao) SworDaoFactory.getByClass(Alliance.class);
    private static final CharDao charDao = (CharDao) SworDaoFactory.getByClass(Char.class);
    private static final Logger log = LogManager.getLogger(PyScriptEngineWrap.class);
    private final ScriptEngine scriptEngine = new ScriptEngineManager().getEngineByName("python");
    private static final String SCRIPT_ENGINE_EXTENSION = ".py";
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



    public PyScriptEngineWrap(ScriptInitData initData) {
        this.initData = initData;
    }


    public ScriptEngine getScriptEngine() {
        return scriptEngine;
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
        int parentID = si.getParentID();
        int objID = si.getObjectID();

        if (bindings == null) {

            // 交互类
            Object interaction = new PyScriptInteraction(initData, si);

            bindings = scriptEngine.createBindings();
//            bindings.put("sm", this);
            bindings.put("sm", interaction);
            bindings.put("chr", chr);
        }
        bindings.put("field", scriptFiled);
        bindings.put("parentID", parentID);
        bindings.put("scriptType", scriptType);
        bindings.put("objectID", objID);

        if (customBindings != null) {
            bindings.putAll(customBindings);
        }

        if (scriptType == ScriptType.Reactor) {
            bindings.put("reactor", scriptReactor);
        }

        if (scriptType == ScriptType.Quest) {
            bindings.put("startQuest",
                    scriptQuestTag); // biggest hack eu
        }


        return bindings;
    }

    @Override
    public String genScriptDirAndEngine(Char chr, Map<String, CompiledScript> scriptCache, ScriptInfo si) {
        String name = si.getScriptName();
        ScriptType scriptType = si.getScriptType();

        // set engine
        ScriptEngine se = getScriptEngine();
        si.setInvocable((Invocable) se);

        var isTespia = ServerConstants.IS_TESPIA;

        // First check if script is in scripts_tespia directory
        if (isTespia) {
            String dir = String.format("%s/%s/%s%s", ServerConstants.SCRIPT_DIR_TESPIA,
                    scriptType.getDir().toLowerCase(), name, SCRIPT_ENGINE_EXTENSION);
            boolean exists = scriptCache.containsKey(dir) || new File(dir).exists();
            if (exists && scriptCache.containsKey(dir)) {
                exists = scriptCache.get(dir) != null;
            }
            if (exists) {
                return dir;
            }
        }

        // If script doesn't exist in scripts_tespia directory. Look into normal scripts directory
        String dir = String.format("%s/%s/%s%s", ServerConstants.SCRIPT_DIR,
                scriptType.getDir().toLowerCase(), name, SCRIPT_ENGINE_EXTENSION);
        boolean exists = scriptCache.containsKey(dir) || new File(dir).exists();
        if (exists && scriptCache.containsKey(dir)) {
            exists = scriptCache.get(dir) != null;
        }

        // If script doesn't exist in normal scripts directory either. return the default script
        if (!exists) {
            log.error(String.format("[Error] Could not find script %s/%s", scriptType.getDir().toLowerCase(), name));
            if (chr != null) {
                chr.chatMessage(Mob, String.format("[Script] Could not find script %s/%s", scriptType.getDir().toLowerCase(), name));
            }
            // 不存在就不保存
//            scriptCache.put(dir, null);
            dir = String.format("%s/%s/%s%s", ServerConstants.SCRIPT_DIR,
                    scriptType.getDir().toLowerCase(), DEFAULT_SCRIPT, SCRIPT_ENGINE_EXTENSION);
        }
        return dir;
    }

    @Override
    public String buildScriptStr(Map<String, CompiledScript> scriptCache, String dir) {
        StringBuilder script = new StringBuilder();
        // python汉化必须
        script.append("from __future__ import unicode_literals\n\n");
        script.append("# -*- coding: utf-8 -*-\n");


        if (!scriptCache.containsKey(dir)) {
            try {
                fileReadLock.lock();
                script.append(Util.readFile(dir, StandardCharsets.UTF_8));
            } catch (IOException e) {
                e.printStackTrace();
//                lockInGameUI(false); // so players don't get stuck if a script fails
            } finally {
                fileReadLock.unlock();
            }
        }
        return script.toString();
    }

    @Override
    public void evalAndRunStart(Map<String, CompiledScript> scriptCache, String dir, String scriptStr, Bindings bindings) throws ScriptException {
        var cs = scriptCache.getOrDefault(dir, null);
        if (cs == null) {
            cs = ((Compilable) scriptEngine).compile(scriptStr);
//                scriptCache.put(dir, cs);
        }

        cs.eval(bindings);
    }

    @Override
    public void runAction(ScriptInfo si, NpcMessageType lastType, byte response, int answer, String text) {
        switch (lastType.getResponseType()) {
            case Response:
                si.addResponse((int) response);
                break;
            case Answer:
                si.addResponse(answer);
                break;
            case Text:
                si.addResponse(text);
                break;
        }
    }

    @Override
    public void stop(ScriptType scriptType) {
        stopPy(scriptType);
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

    public ScriptMemory getMemory() {
        return initData.getMemory();
    }
}
