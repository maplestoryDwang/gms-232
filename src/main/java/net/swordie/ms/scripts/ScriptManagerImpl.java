package net.swordie.ms.scripts;

import com.google.common.util.concurrent.ThreadFactoryBuilder;
import dwang.script.ScriptManagerFun;
import dwang.script.python.PyScriptManagerImp;
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
import java.io.File;
import java.io.IOException;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.nio.charset.StandardCharsets;
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
public class ScriptManagerImpl implements ScriptManagerFun{


    private static final Logger log = LogManager.getLogger(ScriptManagerImpl.class);
    public static final String SCRIPT_ENGINE_NAME = "python";

    public static final String QUEST_COMPLETE_SCRIPT_END_TAG = "e";
    public static final String QUEST_START_SCRIPT_END_TAG = "s";
    public static final String QUEST_RESIGN_SCRIPT_END_TAG = "x";

    private ScriptManagerFun pyScriptManager;


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

        pyScriptManager = new PyScriptManagerImp(chr, field);
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
    public void startScript(int parentID, String scriptName, ScriptType scriptType) {
        pyScriptManager.startScript(parentID, scriptName, scriptType);
    }

    // 入口2：脚本名 + 自定义绑定关系
    // 例如 地图绑定mob
    public void startScriptCustomBindings(int parentID, String scriptName, ScriptType scriptType, Map<String, Object> customBindings) {
        pyScriptManager.startScriptCustomBindings(parentID, scriptName, scriptType, customBindings);
    }

    // 脚本有使用
    public void startScript(int parentID, int objID, ScriptType scriptType) {
        pyScriptManager.startScript(parentID, objID, scriptType);
    }

    // 入口3：地图上的 NPC REACTOR开始脚本从这里进
    public void startScript(int parentId, int objId, String scriptName, ScriptType scriptType) {
        pyScriptManager.startScript(parentId, objId, scriptName, scriptType);
    }

    // 入口4： objId 调用脚本 + 自定义 reactor field等
    public void startScript(int parentID, int objID, String scriptName, ScriptType scriptType, String key, Object value) {
        pyScriptManager.startScript(parentID, objID, scriptName, scriptType, key, value);
    }


    public void stop(ScriptType scriptType) {
        pyScriptManager.stop(scriptType);
    }

    // 二次进入入口
    public void handleAction(NpcMessageType lastType, byte response, int answer) {
        pyScriptManager.handleAction(lastType, response, answer);
    }

    public void handleAction(NpcMessageType lastType, byte response, String text) {
        pyScriptManager.handleAction(lastType, response, text);
    }

    public void handleAction(ScriptType scriptType, NpcMessageType lastType, byte response, int answer, String text) {
        pyScriptManager.handleAction(scriptType, lastType, response, answer, text);
    }

    @Override
    public NpcScriptInfo getNpcScriptInfo() {
       return pyScriptManager.getNpcScriptInfo();
    }

    @Override
    public void dispose() {
        pyScriptManager.dispose();
    }

    @Override
    public void dispose(boolean stop) {
        pyScriptManager.dispose(stop);

    }

    @Override
    public void dispose(ScriptType scriptType) {
        pyScriptManager.dispose(scriptType);

    }

    @Override
    public void setCurNodeEventEnd(boolean curNodeEventEnd) {
        pyScriptManager.setCurNodeEventEnd(curNodeEventEnd);
    }

    @Override
    public void stopEvents() {
        pyScriptManager.stopEvents();
    }

    @Override
    public void stopFieldEvents() {
        pyScriptManager.stopFieldEvents();
    }

    @Override
    public void addEvent(ScheduledFuture event, boolean isFieldEvent) {
        pyScriptManager.addEvent(event, isFieldEvent);
    }

    @Override
    public void warp(int fieldID, int portalID) {
        pyScriptManager.warp(fieldID, portalID);
    }

    @Override
    public void warpInstanceIn(int id, int portal) {
        pyScriptManager.warpInstanceIn(id, portal);
    }

    @Override
    public void warpInstanceOut(int id, int portal) {
        pyScriptManager.warpInstanceOut(id, portal);
    }


    @Override
    public int getRemainingBossCooldownMinutes(BossCooldown bc) {
        return pyScriptManager.getRemainingBossCooldownMinutes(bc);
    }

    @Override
    public void openShop(int shopID) {
        pyScriptManager.openShop(shopID);
    }

    @Override
    public void teleportToPortal(int portalId) {
        pyScriptManager.teleportToPortal(portalId);
    }

    @Override
    public void setActionBar(boolean show, ActionBarType type) {
        pyScriptManager.setActionBar(show, type);
    }

    @Override
    public void giveNewSecondary(int id) {
        pyScriptManager.giveNewSecondary(id);
    }

    @Override
    public void setInstanceTime(int seconds, int forcedReturnFieldId) {
        pyScriptManager.setInstanceTime(seconds, forcedReturnFieldId);
    }

    @Override
    public void setDeathCount(int deathCount) {
        pyScriptManager.setDeathCount(deathCount);
    }

    @Override
    public void setReturnField(int returnField) {
        pyScriptManager.setReturnField(returnField);
    }


}
