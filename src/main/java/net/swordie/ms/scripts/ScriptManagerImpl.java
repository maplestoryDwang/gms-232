package net.swordie.ms.scripts;

import com.google.common.util.concurrent.ThreadFactoryBuilder;
import dwang.script.IScriptEngineWrap;
import dwang.script.ScriptInitData;
import dwang.script.py.PyScriptEngineWrap;
import net.swordie.ms.Server;
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
import java.awt.*;
import java.io.File;
import java.io.IOException;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.nio.charset.Charset;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.time.ZoneOffset;
import java.util.*;
import java.util.List;
import java.util.concurrent.*;
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;
import java.util.regex.Pattern;
import java.util.stream.Collectors;

import static net.swordie.ms.client.character.skills.temp.CharacterTemporaryStat.PapulatusTimeLock;
import static net.swordie.ms.client.character.skills.temp.CharacterTemporaryStat.RideVehicle;
import static net.swordie.ms.enums.ChatType.*;
import static net.swordie.ms.life.npc.NpcMessageType.*;

/**
 * Created on 2/19/2018.
 *
 * @see ScriptManager
 */
public class ScriptManagerImpl {


    public static final String SCRIPT_ENGINE_NAME = "python";
    public static final String QUEST_COMPLETE_SCRIPT_END_TAG = "e";
    public static final String QUEST_START_SCRIPT_END_TAG = "s";
    public static final String QUEST_RESIGN_SCRIPT_END_TAG = "x";

    private static final ThreadFactory namedThreadFactory = new ThreadFactoryBuilder().setNameFormat("script-%d").build();
    private static final ExecutorService SCRIPT_EXECUTOR_SERVICE = Executors.newCachedThreadPool(namedThreadFactory);

    public static final String INTENDED_NPE_MSG = "Intended NPE by forceful script stop.";
    private static final Map<String, CompiledScript> scriptCache = new HashMap<>();
    public static final Logger log = LogManager.getRootLogger();

//    private static final ScriptEngine scriptEngine = new ScriptEngineManager().getEngineByName(SCRIPT_ENGINE_NAME);

    // 包装类
    private static IScriptEngineWrap scriptEngineWrap;

    // 共享的数据
    private ScriptInitData initData;

    private ScriptManagerImpl(Char chr, Field field) {
        initData = new ScriptInitData(chr, field);
        scriptEngineWrap = new PyScriptEngineWrap(initData);

    }

    public ScriptManagerImpl(Char chr) {
        this(chr, null);
    }

    public ScriptManagerImpl(Field field) {
        this(null, field);
    }

    private Bindings getBindingsByType(ScriptType scriptType) {
        ScriptInfo si = getScriptInfoByType(scriptType);
        return si == null ? null : si.getBindings();
    }

    public ScriptInfo getScriptInfoByType(ScriptType scriptType) {
        return initData.getScripts().getOrDefault(scriptType, null);
    }

    public Char getChr() {
        var charr = initData.getChr();
        if (charr == null && getField().getChars().size() > 0) {
            charr = getField().getChars().get(0);
        }
        return charr;
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

    public static void clear() {
        scriptCache.clear();
    }





    public void startScript(int parentID, ScriptType scriptType) {
        startScript(parentID, 0, scriptType);
    }

    public void startScriptByScriptNameAndType(int parentID, String scriptName, ScriptType scriptType) {
        startScript(parentID, 0, scriptName, scriptType, null);
    }

    public void startScriptByScriptNameAndTypeBinding(int parentID, String scriptName, ScriptType scriptType, Map<String, Object> customBindings) {
        startScript(parentID, 0, scriptName, scriptType, customBindings);
    }

    // 入口3：地图上的 NPC REACTOR开始脚本从这里进
    public void startScript(int parentID, int objID, ScriptType scriptType) {
        startScript(parentID, objID, parentID + ".py", scriptType, null);
    }

    public void startScript(int parentId, int objId, String scriptName, ScriptType scriptType) {
        startScript(parentId, objId, scriptName, scriptType, null);
    }

    public void startScript(int parentID, int objID, String scriptName, ScriptType scriptType, String key, Object value) {
        Map<String, Object> props = new HashMap<>();
        props.put(key, value);
        startScript(parentID, objID, scriptName, scriptType, props);
    }

    public synchronized void startScript(int parentID, int objID, String scriptName, ScriptType scriptType, Map<String, Object> customBindings) {
        if (scriptType == ScriptType.None || (scriptType == ScriptType.Quest && !isQuestScriptAllowed())) {
            log.debug(String.format("Did not allow script %s to go through (type %s)  |  Active Script Type: %s", scriptName, scriptType, getLastActiveScriptType()));
            return;
        }

        var activeScriptType = getScriptInfoByType(scriptType);

        Char chrFromMethods = getChr();
        if (isActive(scriptType) && (scriptType != ScriptType.Field && scriptType != ScriptType.FirstEnterField)) { // because Field Scripts don't get disposed.
            if (activeScriptType != null && parentID != Shade.LIVER) { // Liver to prevent chat spam
                chrFromMethods.chatMessage(String.format("Already running a script of the same type (%s, id %d)! " +
                                "Type @check if this is not intended.",
                        scriptType.getDir(),
                        activeScriptType.getParentID()));
                log.debug(String.format("Could not run script %s because one of the same type is already running (%s, type %s)",
                        scriptName,
                        activeScriptType.getScriptName(),
                        scriptType));
            } else if (activeScriptType == null) {
                chrFromMethods.chatMessage(String.format("Already running a script of the same type (%s)! Type @check if this" +
                                " is not intended.",
                        scriptType.getDir()));
                log.debug(String.format("Could not run script %s because one of the same type is already running (type %s)",
                        scriptName,
                        scriptType));
            }
            return;
        }
        setLastActiveScriptType(scriptType);

        if (!isField()) {
            chrFromMethods.chatMessage(Mob, String.format("Starting script [%s] , scriptType [%s].", scriptName, scriptType));
            log.info(String.format("Starting script [%s], scriptType [%s].", scriptName, scriptType));
        }

        initData.getNpcScriptInfo().resetParam();

        Field scriptFiled = chrFromMethods == null ? initData.getField() : getField();
        Life scriptReactor = getField().getLifeByObjectID(objID);
        boolean scriptQuestTag = scriptName.charAt(scriptName.length() - 1) == QUEST_START_SCRIPT_END_TAG.charAt(0);

        Bindings oldBinding = getBindingsByType(scriptType);
        Bindings bindings = scriptEngineWrap.buildScriptBindings(oldBinding, scriptType, chrFromMethods, scriptFiled, parentID, objID, scriptReactor, scriptQuestTag, customBindings);




        ScriptInfo scriptInfo = new ScriptInfo(scriptType, bindings, parentID, scriptName);
        scriptInfo.setActive(true);
        if (scriptType == ScriptType.Npc) {
            getNpcScriptInfo().setTemplateID(parentID);
        }
        scriptInfo.setObjectID(objID);
        getScripts().put(scriptType, scriptInfo);
        SCRIPT_EXECUTOR_SERVICE.execute(() -> startScript(scriptName, scriptType)); // makes the script execute async
    }

    private boolean isQuestScriptAllowed() {
        return getLastActiveScriptType() == ScriptType.None;
    }

    private void notifyMobDeath(Mob mob) {
        if (isActive(ScriptType.FirstEnterField)) {
            getScriptInfoByType(ScriptType.FirstEnterField).addResponse(mob);
        } else if (isActive(ScriptType.Field)) {
            getScriptInfoByType(ScriptType.Field).addResponse(mob);
        }
    }


    private void startScript(String name, ScriptType scriptType) {
        Char charFromMethods = getChr();
        String dir = scriptEngineWrap.getScriptDir(charFromMethods, scriptCache, name, scriptType); // Grab directory. if tespia, first look in tespia folder. otherwise normal folder. otherwise default script
        ScriptInfo si = getScriptInfoByType(scriptType);
        if (si == null) {
            return;
        }

        si.setFileDir(dir);
        ScriptEngine se = scriptEngineWrap.getScriptEngine();
        si.setInvocable((Invocable) se);



        String scriptStr = scriptEngineWrap.buildScriptStr(scriptCache, dir);

        try {

            // 执行
            Bindings bindings = getBindingsByType(scriptType);
            scriptEngineWrap.evalAndRunStart(scriptCache, dir, scriptStr, bindings);

        } catch (ScriptException e) {
            if (!e.getMessage().contains(INTENDED_NPE_MSG) && Server.DEBUG) {
                log.error(String.format("Unable to compile script %s!", name));
                log.error("script path:{}", dir);
                log.error("script:\n{}", scriptStr);

                e.printStackTrace();
                if (charFromMethods != null) {
                    charFromMethods.chatMessage(Mob, String.format("Unable to compile script %s!", name));
                    charFromMethods.chatMessage(Mob, e.getMessage());
                }
                lockInGameUI(false); // so players don't get stuck if a script fails
            }
        } finally {
            if (si.isActive() && name.equals(si.getScriptName()) &&
                    ((scriptType != ScriptType.Field && scriptType != ScriptType.FirstEnterField)
                            || (charFromMethods != null && charFromMethods.getFieldID() == si.getParentID()))) {
                // gracefully stop script if it's still active with the same script info (scriptName, or scriptName +
                // current chr fieldID == fieldscript's fieldID if scriptType == Field).
                // This makes it so field scripts won't cancel new field scripts when having a warp() in them.
                stop(scriptType);
            }
            FieldTransferInfo fti = getFieldTransferInfo();
            if (!fti.isInit()) {
                if (fti.isField()) {
                    fti.warp(initData.getField());
                } else {
                    fti.warp(charFromMethods);
                }
            }
        }
    }

    public void stop(ScriptType scriptType) {
        setSpeakerID(0);
        if (getLastActiveScriptType() == scriptType) {
            setLastActiveScriptType(ScriptType.None);
        }
        ScriptInfo si = getScriptInfoByType(scriptType);
        if (si != null) {
            si.reset();
        }
        getNpcScriptInfo().reset();
        getMemory().clear();
        getScripts().remove(scriptType);
        if (getChr() != null) {
            getChr().dispose();
        }
    }

    public void handleAction(NpcMessageType lastType, byte response, int answer) {
        handleAction(getLastActiveScriptType(), lastType, response, answer, null);
    }

    public void handleActionText(NpcMessageType lastType, byte response, String text) {
        handleAction(getLastActiveScriptType(), lastType, response, 0, text);
    }

    public void handleAction(ScriptType scriptType, NpcMessageType lastType, byte response, int answer, String text) {
        switch (response) {
            case -1:
            case 5:
                stop(scriptType);
                break;
            default:
                ScriptMemory sm = getMemory();
                if (lastType.isPrevPossible() && response == 0) {
                    // back button pressed
                    NpcScriptInfo prev = sm.getPreviousScriptInfo();
                    getChr().write(ScriptMan.scriptMessage(prev, prev.getMessageType()));
                } else {
                    if (getMemory().isInMemory()) {
                        NpcScriptInfo next = sm.getNextScriptInfo();
                        getChr().write(ScriptMan.scriptMessage(next, next.getMessageType()));
                    } else {
                        ScriptInfo si = getScriptInfoByType(scriptType);

                        if (isActive(scriptType)) {
                            scriptEngineWrap.runAction(si, lastType, response, answer, text);


                        }
                    }
                }
        }
    }

    public boolean isActive(ScriptType scriptType) {
        return scriptType != null && getScriptInfoByType(scriptType) != null && getScriptInfoByType(scriptType).isActive();
    }

    public boolean hasClashingScriptTypeActive(ScriptType scriptType) {
        return Arrays.stream(scriptType.getClashingScriptTypes()).anyMatch(this::isActive);
    }

    public NpcScriptInfo getNpcScriptInfo() {
        return initData.getNpcScriptInfo();
    }

    public Map<ScriptType, ScriptInfo> getScripts() {
        return initData.getScripts();
    }



    public boolean isField() {
        return initData.isField();
    }

    public Field getField() {
        return initData.isField() ? initData.getField() : getChr().getField();
    }

    public ScriptType getLastActiveScriptType() {
        return initData.getLastActiveScriptType();
    }

    public void setLastActiveScriptType(ScriptType lastActiveScriptType) {
        initData.setLastActiveScriptType(lastActiveScriptType);
    }

    public FieldTransferInfo getFieldTransferInfo() {
        return initData.getFieldTransferInfo();
    }

    private ScriptMemory getMemory() {
        return initData.getMemory();
    }

    public void lockInGameUI(boolean lock) {
        lockInGameUI(lock, true);
    }

    public void lockInGameUI(boolean lock, boolean blackFrame) {
        if (getChr() != null) {
            getChr().write(UserLocal.setInGameDirectionMode(lock, blackFrame, false));
        }
    }

    public void setSpeakerID(int templateID) {
        NpcScriptInfo nsi = getNpcScriptInfo();
        nsi.removeParam(NpcScriptInfo.Param.PlayerAsSpeaker);
        nsi.removeParam(NpcScriptInfo.Param.PlayerAsSpeakerFlip);
        boolean isNotCancellable = nsi.hasParam(NpcScriptInfo.Param.NotCancellable);
        nsi.setTemplateID(templateID);
        if (isNotCancellable) {
            nsi.addParam(NpcScriptInfo.Param.NotCancellable);
        }
    }


    public void dispose(boolean stop) {
        dispose(stop);

    }

    public void dispose(ScriptType scriptType) {
        getMemory().clear();
        stop(scriptType);
    }


    public void setCurNodeEventEnd(boolean curNodeEventEnd) {
        initData.setCurNodeEventEnd(curNodeEventEnd);
    }

    public void stopEvents() {
        var events = initData.getEvents();
        for (ScheduledFuture st : events.keySet()) {
            EventManager.stopTimer(st);
        }
        events.clear();
        Field field = getField();
        Arrays.stream(ScriptType.values()).forEach(this::stop);
        if (field != null) {
            field.broadcastPacket(FieldPacket.clock(ClockPacket.removeClock()));
        }
        var chr = getChr();
        if (chr != null) {
            chr.write(FieldPacket.updateTemporarySkillBar(0)); // resets special skill bar
            chr.getTemporaryStatManager().removeStatsBySkill(237); // Damien Stigma
        }
    }

    public void stopFieldEvents() {
        var events = initData.getEvents();
        if (events.size() <= 0) {
            return;
        }

        var removedTimers = new HashSet<ScheduledFuture>();
        for (var entry : events.entrySet()) {
            var st = entry.getKey();
            var isFieldEvent = entry.getValue();
            if (isFieldEvent) {
                EventManager.stopTimer(st);
                removedTimers.add(st);
            }
        }

        for (var st : removedTimers) {
            events.remove(st);
        }    }

    public void addEvent(ScheduledFuture event, boolean isFieldEvent) {
        initData.getEvents().put(event, isFieldEvent);
    }

    public void warp(int fieldID, int portalID) {
        warp(fieldID, portalID, true, false);
    }

    public void warp(int fieldId, int portalId, boolean executeAfterScript, boolean instanceField) {
        if (executeAfterScript) {
            FieldTransferInfo fti = initData.getFieldTransferInfo();
            fti.setFieldId(fieldId);
            fti.setPortal(portalId);
            fti.setIsInstanceField(instanceField);
        } else {
            getChr().warp(fieldId, portalId);
        }
    }


    public void warpInstanceIn(int id, int portal) {
        warpInstance(id, true, portal, false);
    }

    public void warpInstanceOut(int id, int portal) {
        warpInstance(id, false, portal, false);
    }

    private void warpInstance(int fieldId, boolean in, int portalId, boolean partyAllowed) {
        getChr().getBossInfo().reset();

        Instance instance;
        if (in) {
            // warp party in if there is a party and party is allowed, solo instance otherwise
            Party party = getChr().getParty();
            if (party == null || !partyAllowed) {
                instance = new Instance(getChr());
            } else {
                instance = new Instance(party);
            }
            // setup the instance & warp
            instance.setup(fieldId, portalId);
        } else {
            instance = getChr().getInstance();
            stopEvents();
            if (instance == null) {
                // no info, just warp them
                getChr().setDeathCount(-1);
                getChr().warp(fieldId, portalId);
            } else {

                // remove chr from eligible instance members
                int forcedReturn;
                int forcedReturnPortal;
                if (fieldId >= 0) {
                    forcedReturn = fieldId;
                    forcedReturnPortal = portalId;
                } else {
                    forcedReturn = instance.getForcedReturn();
                    forcedReturnPortal = instance.getForcedReturnPortalId();
                }

                instance.removeChar(getChr(), forcedReturn, forcedReturnPortal, true, true);
            }
        }
    }



    public int getRemainingBossCooldownMinutes(BossCooldown bc) {
        AccountBossCooldown abc = getChr().getAccount().getBossCooldown(bc);
        FileTime nextEntry = abc == null ? null : abc.getNextEntryTime();
        if (nextEntry == null || nextEntry.isExpired()) {
            return 0;
        } else {
            LocalDateTime cur = FileTime.currentTime().toLocalDateTime();
            LocalDateTime to = nextEntry.toLocalDateTime();
            return (int) ((to.toEpochSecond(ZoneOffset.UTC) - cur.toEpochSecond(ZoneOffset.UTC)) / 60);
        }
    }


    public void openShop(int shopID) {
        NpcShopDlg nsd = NpcData.getShopById(shopID);
        if (nsd != null) {
            if (getChr().getShop() == null) {
                getChr().setShop(nsd);
                if (shopID == 9001212) {
                    getChr().write(ShopDlg.shopCollectorInit());
                }

                getChr().write(ShopDlg.openShop(getChr(), 0, nsd));
            }
        } else {
            getChr().chatMessage(SystemNotice, String.format("Could not find shop with id %d.", shopID));
            log.error(String.format("Could not find shop with id %d.", shopID));
        }
    }


    public void teleportToPortal(int portalId) {
        Portal portal = getField().getInfo().getPortalByID(portalId);
        if (portal != null) {
            Position position = new Position(portal.getX(), portal.getY());
            getChr().write(FieldPacket.teleport(position, getChr()));
        }
    }


    public void setActionBar(boolean show, ActionBarType type) {
        getChr().write(UserLocal.setActionBar(show, type));
    }

    public void setInstanceTime(int seconds, int forcedReturnFieldId) {
        Instance instance = getChr().getInstance();
        if (instance != null) {
            if (forcedReturnFieldId != 0) {
                instance.setForcedReturn(forcedReturnFieldId);
            }
            if (instance.getRemainingTime() / 1000 < System.currentTimeMillis()) {
                // don't override old timeout value
                instance.setTimeout(seconds);
            }
        }
    }

    public void setDeathCount(int deathCount) {
        Instance info = getChr().getInstance();
        if (info == null) {
            getChr().setDeathCount(deathCount);
            getChr().write(UserLocal.deathCountInfo(deathCount));
        } else {
            for (Char chr : info.getChars()) {
                chr.setDeathCount(deathCount);
                chr.write(UserLocal.deathCountInfo(deathCount));
            }
        }
    }

    public void setReturnField(int returnField) {
        initData.setReturnField(returnField);
    }


}
