package dwang.script.js;

import com.google.common.util.concurrent.ThreadFactoryBuilder;
import dwang.script.ScriptManagerFun;
import dwang.script.js.manager.extend.NPCScriptManager;
import net.swordie.ms.client.alliance.Alliance;
import net.swordie.ms.client.character.Char;
import net.swordie.ms.enums.ActionBarType;
import net.swordie.ms.enums.BossCooldown;
import net.swordie.ms.life.npc.NpcMessageType;
import net.swordie.ms.life.npc.NpcScriptInfo;
import net.swordie.ms.scripts.FieldTransferInfo;
import net.swordie.ms.scripts.ScriptInfo;
import net.swordie.ms.scripts.ScriptMemory;
import net.swordie.ms.scripts.ScriptType;
import net.swordie.ms.world.field.Field;
import net.swordie.orm.dao.AllianceDao;
import net.swordie.orm.dao.CharDao;
import net.swordie.orm.dao.SworDaoFactory;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import javax.script.*;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;
import java.util.Random;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledFuture;
import java.util.concurrent.ThreadFactory;
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;
import java.util.regex.Pattern;

/**
 * @author dwang
 * @version 1.0.0
 * @Title
 * @ClassName JsScriptManagerImp.java
 * @Description TODO
 * @createTime 2026-02-24 23:22
 */

public class JsScriptManagerImp implements ScriptManagerFun {

    private static final AllianceDao allianceDao = (AllianceDao) SworDaoFactory.getByClass(Alliance.class);
    private static final CharDao charDao = (CharDao) SworDaoFactory.getByClass(Char.class);

    public static final String SCRIPT_ENGINE_NAME = "python";
    public static final String QUEST_COMPLETE_SCRIPT_END_TAG = "e";
    public static final String QUEST_START_SCRIPT_END_TAG = "s";
    public static final String QUEST_RESIGN_SCRIPT_END_TAG = "x";

    private static final ThreadFactory namedThreadFactory = new ThreadFactoryBuilder().setNameFormat("script-%d").build();
    private static final ExecutorService SCRIPT_EXECUTOR_SERVICE = Executors.newCachedThreadPool(namedThreadFactory);
    private static final Pattern listPattern = Pattern.compile("(.)*#[lL][0-9]+#(.)*");
    private static final String SCRIPT_ENGINE_EXTENSION = ".py";
    private static final String DEFAULT_SCRIPT = "undefined";
    public static final String INTENDED_NPE_MSG = "Intended NPE by forceful script stop.";
    private static  final Map<String, CompiledScript> scriptCache = new HashMap<>();
    public static final Logger log = LogManager.getRootLogger();
    private static final Lock fileReadLock = new ReentrantLock();

    private static final ScriptEngine scriptEngine = new ScriptEngineManager().getEngineByName(SCRIPT_ENGINE_NAME);


    private static final Random random = new Random();

    private static final String[] fieldEventMethodNames = new String[]{
            "createObstacleAtom",
            "createObstacleAtomToFoothold",
    };

    private static boolean isFieldEventMethodName(String methodName) {
        return Arrays.asList(fieldEventMethodNames).contains(methodName);
    }

    private final Char chr;
    private final Field field;
    private final boolean isField;
    private final NpcScriptInfo npcScriptInfo;
    private final Map<ScriptType, ScriptInfo> scripts;
    private final FieldTransferInfo fieldTransferInfo;

    private int returnField = 0;
    private ScriptType lastActiveScriptType;
    private Map<ScheduledFuture, Boolean> events = new HashMap<>();
    private ScriptMemory memory = new ScriptMemory();
    private boolean curNodeEventEnd;

    public JsScriptManagerImp(Char chr, Field field) {
        this.chr = chr;
        this.field = field;
        this.npcScriptInfo = new NpcScriptInfo();
        this.scripts = new HashMap<>();
        this.isField = chr == null;
        this.lastActiveScriptType = ScriptType.None;
        this.fieldTransferInfo = new FieldTransferInfo();
        fieldTransferInfo.setField(isField);
    }

    public JsScriptManagerImp(Char chr) {
        this(chr, null);
    }

    public JsScriptManagerImp(Field field) {
        this(null, field);
    }

    private Bindings getBindingsByType(ScriptType scriptType) {
        ScriptInfo si = getScriptInfoByType(scriptType);
        return si == null ? null : si.getBindings();
    }


    public ScriptInfo getScriptInfoByType(ScriptType scriptType) {
        return scripts.getOrDefault(scriptType, null);
    }

    public boolean isField() {
        return isField;
    }

    public Field getField() {
        return isField ? field : getChr().getField();
    }

    public Char getChr() {
        var charr = chr;
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


    @Override
    public void startScriptByScriptNameAndType(int parentID, String scriptName, ScriptType scriptType) {
        switch (scriptType) {
            case Npc:
                NPCScriptManager.getInstance().start(chr.getAccount(), parentID, null);

                break;
        }



    }

    @Override
    public void startScriptByScriptNameAndTypeBinding(int parentID, String scriptName, ScriptType scriptType, Map<String, Object> customBindings) {

    }


    @Override
    public void startScript(int parentId, int objId, String scriptName, ScriptType scriptType) {
        switch (scriptType) {
            case Npc:
                NPCScriptManager.getInstance().start(chr.getAccount(), parentId, null);

                break;
        }
    }

    @Override
    public void startScript(int parentID, int objID, String scriptName, ScriptType scriptType, String key, Object value) {

    }

    @Override
    public void stop(ScriptType scriptType) {

    }

    @Override
    public void handleAction(NpcMessageType lastType, byte response, int answer) {
//        NPCScriptManager.getInstance().action(this, response, 0, answer);

    }

    @Override
    public void handleActionText(NpcMessageType lastType, byte response, String text) {

    }


    @Override
    public NpcScriptInfo getNpcScriptInfo() {
        return npcScriptInfo;
    }


    @Override
    public void dispose(boolean stop) {

    }

    @Override
    public void dispose(ScriptType scriptType) {

    }

    @Override
    public void setCurNodeEventEnd(boolean curNodeEventEnd) {

    }

    @Override
    public void stopEvents() {

    }

    @Override
    public void stopFieldEvents() {

    }

    @Override
    public void addEvent(ScheduledFuture event, boolean isFieldEvent) {

    }

    @Override
    public void warp(int fieldID, int portalID) {

    }

    @Override
    public void warpInstanceIn(int id, int portal) {

    }

    @Override
    public void warpInstanceOut(int id, int portal) {

    }

    @Override
    public int getRemainingBossCooldownMinutes(BossCooldown bc) {
        return 0;
    }

    @Override
    public void openShop(int shopID) {

    }

    @Override
    public void teleportToPortal(int portalId) {

    }

    @Override
    public void setActionBar(boolean show, ActionBarType type) {

    }

    @Override
    public void setInstanceTime(int seconds, int forcedReturnFieldId) {

    }

    @Override
    public void setDeathCount(int deathCount) {

    }

    @Override
    public void setReturnField(int returnField) {

    }
}
