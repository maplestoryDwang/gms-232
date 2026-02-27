package dwang.script.py.api;

import dwang.script.DwangScriptBaseApi;
import net.swordie.ms.client.AccountBossCooldown;
import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.commerce.voyage.Voyage;
import net.swordie.ms.client.character.items.BodyPart;
import net.swordie.ms.client.character.items.Equip;
import net.swordie.ms.client.character.items.Item;
import net.swordie.ms.client.character.scene.Scene;
import net.swordie.ms.client.character.skills.Option;
import net.swordie.ms.client.character.skills.vmatrix.MatrixRecord;
import net.swordie.ms.client.character.skills.vmatrix.NodestoneModule;
import net.swordie.ms.client.party.PartyMember;
import net.swordie.ms.connection.packet.*;
import net.swordie.ms.connection.packet.field.FieldPacket;
import net.swordie.ms.connection.packet.field.PapulatusFieldPacket;
import net.swordie.ms.constants.*;
import net.swordie.ms.enums.*;
import net.swordie.ms.handlers.executors.EventManager;
import net.swordie.ms.life.mob.Mob;
import net.swordie.ms.life.mob.boss.papulatus.PapulatusFieldObject;
import net.swordie.ms.life.mob.boss.papulatus.PapulatusLaserInfo;
import net.swordie.ms.life.mob.boss.papulatus.PapulatusTweezerInfo;
import net.swordie.ms.life.mob.boss.will.WillModule;
import net.swordie.ms.life.mob.skill.MobSkillID;
import net.swordie.ms.life.npc.NpcMessageType;
import net.swordie.ms.scripts.ScriptMemory;
import net.swordie.ms.util.FileTime;
import net.swordie.ms.util.Position;
import net.swordie.ms.util.Util;
import net.swordie.ms.world.field.MapTaggedObject;
import net.swordie.ms.world.field.fieldeffect.FieldEffect;
import net.swordie.orm.dao.CharDao;
import net.swordie.orm.dao.SworDaoFactory;
import org.python.core.PyDictionary;

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.time.LocalDateTime;
import java.time.ZoneOffset;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Random;
import java.util.concurrent.ScheduledFuture;
import java.util.concurrent.TimeUnit;
import java.util.stream.Collectors;

import static net.swordie.ms.client.character.skills.temp.CharacterTemporaryStat.PapulatusTimeLock;

/**
 * @author 橘子
 * @date 2026/2/27
 * @description
 */
public interface PyOtherAPI extends PyBossAPI {

     Random random = new Random();

     String INTENDED_NPE_MSG = "Intended NPE by forceful script stop.";
     CharDao charDao = (CharDao) SworDaoFactory.getByClass(Char.class);

     String[] fieldEventMethodNames = new String[]{
            "createObstacleAtom",
            "createObstacleAtomToFoothold",
    };

    private static boolean isFieldEventMethodName(String methodName) {
        return Arrays.asList(fieldEventMethodNames).contains(methodName);
    }

    default boolean addDamageSkin(int itemID) {
        return  getInitData(). getChr().addDamageSkin(itemID);
    }

    
    default void openUI(UIType uiType) {
        int id = uiType.getVal();
        openUI(id);
    }

    default void openUI(int id) {
        getChr().write(FieldPacket.openUI(id));
    }

    
    default void openDimensionalMirror() {
        getChr().write(FieldPacket.openDimensionalMirror());
    }

    
    default void closeUI(UIType uiType) {
        int id = uiType.getVal();
        closeUI(id);
    }

    default void closeUI(int id) {
        getChr().write(FieldPacket.closeUI(id));
    }

    


    default void removeBlowWeather() {
        getChr().write(FieldPacket.removeBlowWeather());
    }

    default void blowWeather(int itemID, String message) {
        removeBlowWeather();// removing old one if exists.
        getChr().write(FieldPacket.blowWeather(itemID, message));
    }

    default void playSound(String sound) {
        playSound(sound, 100);
    }// default

    default void playSound(String sound, int vol) {
        getChr().write(FieldPacket.fieldEffect(FieldEffect.playSound(sound, vol)));
    }

    default void blind(int enable, int x, int color, int time) {
        blind(enable, x, color, 0, 0, time);
    }

    default void blind(int enable, int x, int color, int unk1, int unk2, int time) {
        getChr().write(FieldPacket.fieldEffect(FieldEffect.blind(enable, x, color, unk1, unk2, time)));
    }

    
    default int getRandomIntBelow(int upBound) {
        return random.nextInt(upBound);
    }

    default int getRandomIntBetween(int lowerBound, int inclUpperBound) {
        return random.nextInt((inclUpperBound - lowerBound) + 1) + lowerBound;
    }

    default void showEffect(String dir) {
        showEffect(dir, 0);
    }

    default void showEffect(String dir, int delay) {
        showEffect(dir, 4, delay);
    }

    default void showScene(String xmlPath, String sceneName, String sceneNumber) {
        Scene scene = new Scene(getChr(), xmlPath, sceneName, sceneNumber);
        scene.createScene();
    }

    
    default void showEffect(String dir, int placement, int delay) {
        getChr().write(UserPacket.effect(Effect.effectFromWZ(dir, false, delay, placement, 0)));
    }

    default void avatarOriented(String effectPath) {
        getChr().write(UserPacket.effect(Effect.avatarOriented(effectPath)));
    }

    default void reservedEffect(String effectPath) {
        getChr().write(UserPacket.effect(Effect.reservedEffect(effectPath)));

        String[] splitted = effectPath.split("/");
        String sceneName = splitted[splitted.length - 2];
        String sceneNumber = splitted[splitted.length - 1];
        String xmlPath = effectPath.replace("/" + sceneName, "").replace("/" + sceneNumber, "").replace("Effect/", "Effect.wz/");

        Scene scene = new Scene(getChr(), xmlPath, sceneName, sceneNumber);
        scene.setTransferField();
    }

    default void reservedEffect(boolean screenCoord, int x, int y, String effectName) {
        getChr().write(UserPacket.effect(Effect.reservedEffect(screenCoord, x, y, effectName)));
    }

    default void reservedEffectRepeat(String effectPath, boolean start) {
        getChr().write(UserPacket.effect(Effect.reservedEffectRepeat(effectPath, start)));
    }

    default void reservedEffectRepeat(String effectName, boolean idk, boolean show, int x, int y, int duration) {
        getChr().write(UserPacket.effect(Effect.reservedEffectRepeat(effectName, idk, show, x, y, duration)));
    }

    default void reservedEffectRepeat(String effectPath) {
        reservedEffectRepeat(effectPath, true);
    }

    default void playExclSoundWithDownBGM(String soundPath, int volume) {
        getChr().write(UserPacket.effect(Effect.playExclSoundWithDownBGM(soundPath, volume)));
    }

    default void blindEffect(boolean blind) {
        getChr().write(UserPacket.effect(Effect.blindEffect(blind)));
    }

    default void fadeInOut(int fadeIn, int delay, int fadeOut, int alpha) {
        getChr().write(UserPacket.effect(Effect.fadeInOut(fadeIn, delay, fadeOut, alpha)));
    }

    default void createFieldTextEffect(String msg, int letterDelay, int showTime, int clientPosition,
                                      int x, int y, int align, int lineSpace, int type,
                                      int enterType, int leaveType) {
        TextEffectType tet = TextEffectType.values()[type];
        getChr().write(UserPacket.effect(Effect.createFieldTextEffect(msg, letterDelay, showTime, clientPosition, new Position(x, y),
                align, lineSpace, tet, enterType, leaveType)));
    }

    default void speechBalloon(boolean normal, int idx, int linkType, String speech, int time, int align, int x,
                              int y, int z, int lineSpace, int npcTemplateId, int idk) {
        getChr().write(UserPacket.effect(Effect.speechBalloon(normal, idx, linkType, speech, time, align, x, y, z, lineSpace, npcTemplateId, idk)));
    }

    default String formatNumber(String number) {
        return Util.formatNumber(number);
    }

    default String formatNumber(int number) {
        return formatNumber(String.valueOf(number));
    }

    default String formatItem(Item item) {
        return String.format("#b#L%d##i%d##z%dl#\r\n", item.getBagIndex(), item.getItemId(), item.getItemId());
    }

    default String formatInlineItem(Item item) {
        return formatInlineItem(item.getItemId());
    }

    default String formatInlineItem(int itemId) {
        return String.format("#i%d# #z%d#", itemId, itemId);
    }

    default String join(String... args) {
        final String[] s = {""};
        Arrays.stream(args).forEach(a -> s[0] += a);
        return s[0];
    }

    default String formatString(String line, PyDictionary dict) {
        var copyLine = line;
        for (var key : dict.keys()) {
            var value = dict.get(key).toString();
            var keyInBraces = "{" + key + "}";
            copyLine = copyLine.replace(keyInBraces, value);
        }

        return copyLine;
    }

    default String selectionString(String line, List<PyDictionary> dicts) {
        StringBuilder str = new StringBuilder();
        var newLine = "\r\n";

        var i = 0;

        for (var dict : dicts) {
            if (!dict.containsKey("i")) {
                dict.put("i", i);
                i++;
            }

            str.append(formatString(line, dict));
            str.append(newLine);

            //Remove the i again, else it'll stay in the dictionary in python since everything is by ref.
            //keeping it in the dictionary will mess up the selection indexes of the list next time it's ran over in the same script.
            if (dict.containsKey("i")) {
                dict.remove("i");
            }
        }

        return str.toString();
    }


    default void invokeForParty(String methodName, Object... args) {
        for (PartyMember pm : getChr().getParty().getMembers()) {
            boolean fromDB = false;
            Char chr = pm.getChr();
            if (chr == null) {
                chr = charDao.getById(pm.getCharID());
                fromDB = true;
            }
            invoke(chr.getScriptManager(), methodName, args);
            if (fromDB && methodName.equalsIgnoreCase("setQRValue")) {
                // big hack
                charDao.saveOrUpdate(chr);
            }
        }
    }

    default ScheduledFuture invokeAfterDelay(long delay, String methodName, Object... args) {
        Object[] funcArgs = args;
        if ("warp".equals(methodName) || "warpParty".equalsIgnoreCase(methodName)) {
            // kinda hacky method to make warps execute immediately when invoking after delay
            funcArgs = new Object[args.length + 1];
            System.arraycopy(args, 0, funcArgs, 0, args.length);
            funcArgs[funcArgs.length - 1] = false;
        }
        Object[] a = funcArgs;
        ScheduledFuture sf = EventManager.addEvent(() -> invoke(this, methodName, a), delay);

        var isFieldEvent = isFieldEventMethodName(methodName);

        addEvent(sf, isFieldEvent);
        return sf;
    }

    default ScheduledFuture invokeAtFixedRate(long initialDelay, long delayBetweenExecutions,
                                             int executes, String methodName, Object... args) {
        ScheduledFuture scheduledFuture;
        if (executes == 0) {
            scheduledFuture = EventManager.addFixedRateEvent(() -> invoke(this, methodName, args), initialDelay,
                    delayBetweenExecutions);
        } else {
            scheduledFuture = EventManager.addFixedRateEvent(() -> invoke(this, methodName, args), initialDelay,
                    delayBetweenExecutions, executes);
        }

        var isFieldEvent = isFieldEventMethodName(methodName);

        addEvent(scheduledFuture, isFieldEvent);
        return scheduledFuture;
    }

    
    default int playVideoByScript(String videoPath) {
        getInitData(). getNpcScriptInfo().setMessageType(NpcMessageType.PlayMovieClip);
        getChr().write(UserLocal.videoByScript(videoPath, true));
        Object response = null;
        var lastActiveScriptType = getLastActiveScriptType();
        if (getInitData().isActive(lastActiveScriptType)) {
            response = getScriptInfoByType(lastActiveScriptType).awaitResponse();
        }
        if (response == null) {
            throw new NullPointerException(INTENDED_NPE_MSG);
        }
        return (int) response;
    }

    
    default int playVideoByScriptFromWeb(String videlUrl) {
        getInitData(). getNpcScriptInfo().setMessageType(NpcMessageType.PlayMovieClipURL);
        getChr().write(UserLocal.videoByScriptWeb(videlUrl));
        Object response = null;
        var lastActiveScriptType = getLastActiveScriptType();
        if (getInitData().isActive(lastActiveScriptType)) {
            response = getScriptInfoByType(lastActiveScriptType).awaitResponse();
        }
        if (response == null) {
            throw new NullPointerException(INTENDED_NPE_MSG);
        }
        return (int) response;
    }

    default void setFuncKeyByScript(boolean add, int action, int key) {
        getChr().write(UserLocal.setFuncKeyByScript(add, action, key));
        getChr().getFuncKeyMap().get(0).putKeyBinding(key, add ? (byte) 1 : (byte) 0, action);
    }

    default void setActionBar(boolean show, ActionBarType type) {
        getChr().write(UserLocal.setActionBar(show, type));
    }

    default void setMapTaggedObjectVisible(String key, boolean visible, int manual, int delay) {
        getChr().write(MapLoadable.setMapTaggedObjectVisible(new MapTaggedObject(key, visible, manual, delay)));
    }

    default void addPopUpSay(int npcID, int duration, String message, String effect) {
        getChr().write(UserLocal.addPopupSay(npcID, duration, message, effect));
    }

    default void moveParticleEff(String type, int startX, int startY, int endX, int endY, int moveTime, int totalCount, int oneSprayMin, int oneSprayMax) {
        getChr().write(UserLocal.moveParticleEff(type, new Position(startX, startY), new Position(endX, endY), moveTime, totalCount, oneSprayMin, oneSprayMax));
    }



    default void balloonMsg(String message) {
        getChr().write(UserLocal.balloonMsg(message, 100, 3, null));
    }

    default boolean openNodestone(int id) {
        if (!getChr().getQuestManager().hasQuestCompleted(QuestConstants.FIFTH_JOB_QUEST)) {
            getChr().chatMessage("You need to be 5th job to open this item.");
            return false;
        }

        if (getChr().getMatrixRecords().size() > MatrixRecord.MAX_RECORDS) {
            getChr().chatMessage("You currently have a lot of nodes. Please disassemble before trying to get new nodes.");
            return false;
        }

        NodestoneModule.openNodestone(getChr(), id, true);
        return true;
    }

    default void hireTutor(boolean set) {
        getChr().hireTutor(set);
    }

    default void tutorAutomatedMsg(int id) {
        tutorAutomatedMsg(id, 10000);
    }

    default void tutorAutomatedMsg(int id, int duration) {
        getChr().tutorAutomatedMsg(id, duration);
    }

    default void tutorCustomMsg(String message, int width, int duration) {
        getChr().tutorCustomMsg(message, width, duration);
    }

    default boolean hasTutor() {
        return getChr().hasTutor();
    }

    default int getMakingSkillLevel(int skillID) {
        return getChr().getMakingSkillLevel(skillID);
    }

    default boolean isAbleToLevelUpMakingSkill(int skillID) {
        int neededProficiency = SkillConstants.getNeededProficiency(getChr().getMakingSkillLevel(skillID));
        if (neededProficiency <= 0) {
            return false;
        }
        return getChr().getMakingSkillProficiency(skillID) >= neededProficiency;
    }

    default void makingSkillLevelUp(int skillID) {
        getChr().makingSkillLevelUp(skillID);
    }

    default void setBossCooldown(BossCooldown bc) {
        // Only for entry
        if (getChr().getParty() != null) {
            for (var pm : getChr().getParty().getOnlineMembers()) {
                if (pm != null && pm.getChr() != null) {
                    pm.getChr().getAccount().setBossCooldown(bc, false);
                }
            }
        } else {
            getChr().getAccount().setBossCooldown(bc, false);
        }
    }

    default boolean isOnBossCooldown(BossCooldown bc) {
        return getChr().getAccount().isOnBossCooldown(bc);
    }

    default int getRemainingBossCooldownMinutes(BossCooldown bc) {
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

    // Will methods

    default void incrementMoonlight() {
        for (var chr : getField().getChars()) {
            var hardMode = FieldConstants.isHardWillField(getFieldID());
            var bossInfo = chr.getBossInfo();
            bossInfo.addMoonlight(hardMode ? 1 : 2);
        }
    }

    default void startWillTriggerTimer() {
        addEvent(EventManager.addFixedRateEvent(this::doTriggerBlockCheck, 90, 120, TimeUnit.SECONDS));
    }

    default void startWillWebTimer() {
        addEvent(EventManager.addFixedRateEvent(() -> WillModule.spawnNarrowWeb(getField()), 6, 6, TimeUnit.SECONDS));
    }

    private void doTriggerBlockCheck() {
        switch (getFieldID()) {
            case BossConstants.WILL_FIELD_P1:
            case BossConstants.WILL_HARD_FIELD_P1:
                WillModule.doWillTest1(getField());
                break;
            case BossConstants.WILL_FIELD_P2:
            case BossConstants.WILL_HARD_FIELD_P2:
                WillModule.doWillTest2(getField());
                break;
            case BossConstants.WILL_FIELD_P3:
            case BossConstants.WILL_HARD_FIELD_P3:
                break;
        }
    }

    // Papulatus

    default void startTweezerTimers() {
        var tweezers = new ArrayList<PapulatusTweezerInfo>();
        for (int i = 0; i < 5; i++) {
            tweezers.add(new PapulatusTweezerInfo(i, 1, 0, 0));
        }

        getField().broadcastPacket(PapulatusFieldPacket.papulatusFieldObjectChanged(PapulatusFieldObject.tweezers(tweezers)));
    }

    default void startPapulatusAlarmClockTimer() {
        var papulatusLife = getField().getLifeByTemplateIds(BossConstants.PAPULATUS_EASY_P1, BossConstants.PAPULATUS_EASY_P2,
                BossConstants.PAPULATUS_NORMAL_P1, BossConstants.PAPULATUS_NORMAL_P2,
                BossConstants.PAPULATUS_CHAOS_P1, BossConstants.PAPULATUS_CHAOS_P2
        );

        if (papulatusLife instanceof Mob) {
            var papulatus = (Mob) papulatusLife;
            papulatus.addBlockedSkill(papulatus.getSkillByMobSkillInfo(MobSkillID.PapulatusSkill.getVal(), 6));
        }

        getField().broadcastPacket(PapulatusFieldPacket.papulatusFieldObjectChanged(
                PapulatusFieldObject.alarmClockTimer(true, false, BossConstants.PAPULATUS_ALARM_CLOCK_COOLTIME_MILLIS))
        );
        addEvent(EventManager.addEvent(this::papulatusAlarmClockActivate, BossConstants.PAPULATUS_ALARM_CLOCK_COOLTIME_MILLIS));
    }

    default void papulatusAlarmClockActivate() {
        var papulatusLife = getField().getLifeByTemplateIds(BossConstants.PAPULATUS_EASY_P1, BossConstants.PAPULATUS_EASY_P2,
                BossConstants.PAPULATUS_NORMAL_P1, BossConstants.PAPULATUS_NORMAL_P2,
                BossConstants.PAPULATUS_CHAOS_P1, BossConstants.PAPULATUS_CHAOS_P2
        );

        if (papulatusLife instanceof Mob) {
            var papulatus = (Mob) papulatusLife;
            var alarmClockSkill = papulatus.getSkillByMobSkillInfo(MobSkillID.PapulatusSkill.getVal(), 6);
            papulatus.removeBlockedSkill(alarmClockSkill);
            papulatus.setForcedSkill(alarmClockSkill);
        }

        getField().broadcastPacket(PapulatusFieldPacket.papulatusFieldObjectChanged(
                PapulatusFieldObject.alarmClockTimer(true, true, BossConstants.PAPULATUS_ALARM_CLOCK_MILLIS))
        );

        // 10% health per second drain
        addEvent(EventManager.addFixedRateEvent(() -> {
            for (var chr : getField().getCharsReadOnly()) {
                chr.damagePerc(10);
            }
        }, 0, 1000, (BossConstants.PAPULATUS_ALARM_CLOCK_MILLIS / 1000) - 1));

        // clock keys
        addEvent(EventManager.addFixedRateEvent(() -> createObstacleAtom(ObstacleAtomEnum.PapulatusPurpleKey, 1, 50, 9, 10, 25)
                , 0, 5000, (BossConstants.PAPULATUS_ALARM_CLOCK_MILLIS / 5000) - 1));
        addEvent(EventManager.addFixedRateEvent(() -> createObstacleAtom(ObstacleAtomEnum.PapulatusYellowKey, 1, 50, 12, 10, 50)
                , 0, 5000, (BossConstants.PAPULATUS_ALARM_CLOCK_MILLIS / 5000) - 1));

        addEvent(EventManager.addEvent(this::startPapulatusAlarmClockTimer, BossConstants.PAPULATUS_ALARM_CLOCK_MILLIS));
    }

    default void startPapulatusLaserCooltimeTimerInit() {
        addEvent(EventManager.addEvent(this::startPapulatusLaserTimer, BossConstants.PAPULATUS_LASER_INIT_COOLTIME_MILLIS));
    }

    default void startPapulatusLaserCooltimeTimer() {
        var laserInfo = new PapulatusLaserInfo(0, false, 0, 0);
        var laserInfo2 = new PapulatusLaserInfo(1, false, 0, 0);
        var list = new ArrayList<PapulatusLaserInfo>();
        list.add(laserInfo);
        list.add(laserInfo2);
        getField().broadcastPacket(PapulatusFieldPacket.papulatusFieldObjectChanged(PapulatusFieldObject.lasers(false, list)));

        addEvent(EventManager.addEvent(this::startPapulatusLaserTimer, BossConstants.PAPULATUS_LASER_COOLTIME_MILLIS));
    }

    default void startPapulatusLaserTimer() {
        // this is not how it's supposed to work lmao
        var randIdx = Util.getRandom(0, 4) * 2;
        var randAngle1 = Util.getRandom(BossConstants.PAPULATUS_LASER_MIN, BossConstants.PAPULATUS_LASER_MAX);
        var randSpeed1 = Util.getRandom(BossConstants.PAPULATUS_LASER_MIN, BossConstants.PAPULATUS_LASER_MAX);
        var randAngle2 = Util.getRandom(BossConstants.PAPULATUS_LASER_MIN, BossConstants.PAPULATUS_LASER_MAX);
        var randSpeed2 = Util.getRandom(BossConstants.PAPULATUS_LASER_MIN, BossConstants.PAPULATUS_LASER_MAX);

        var laserInfo = new PapulatusLaserInfo(randIdx, true, randAngle1, randSpeed1);
        var laserInfo2 = new PapulatusLaserInfo(randIdx + 1, true, randAngle2, randSpeed2);
        var list = new ArrayList<PapulatusLaserInfo>();
        list.add(laserInfo);
        list.add(laserInfo2);
        getField().broadcastPacket(PapulatusFieldPacket.papulatusFieldObjectChanged(PapulatusFieldObject.lasers(false, list)));

        addEvent(EventManager.addEvent(this::startPapulatusLaserCooltimeTimer, BossConstants.PAPULATUS_LASER_MILLIS));
    }

    default void changePapulatusTime(boolean divide) {
        var tsm = getChr().getTemporaryStatManager();
        var option = tsm.getOption(PapulatusTimeLock);
        if (option != null && tsm.hasStat(PapulatusTimeLock)) {
            var remainingTime = (int) option.getRemainingTime() / 1000;
            if (divide) {
                remainingTime /= 2;
            } else {
                remainingTime *= 2;
            }
            if (remainingTime > 99) {
                remainingTime = 99;
            }
            var o = new Option();
            o.nOption = 1;
            o.rOption = MobSkillID.PapulatusSkill.getVal();
            o.slv = 3;
            o.tOption = remainingTime;
            o.xOption = remainingTime;
            tsm.putCharacterStatValueFromMobSkill(PapulatusTimeLock, o);
        }
        tsm.sendSetStatPacket();
    }


    // Professions

    default void increaseMasteryAndShowSuccess(int reqLevel, boolean herb) {
        var skillId = herb ? SkillConstants.HERBALISM_SKILL : SkillConstants.MINING_SKILL;
        var slv = getChr().getMakingSkillLevel(skillId);
        var chanceToSucceed = 100 - ((reqLevel - slv) * 10);
        var success = Util.succeedProp(chanceToSucceed);
        var mastery = success ? 20 : 2;
        getChr().addMakingSkillProficiency(skillId, mastery);

        var trait = SkillConstants.getIncStatByMakingSkill(skillId);
        getChr().addTraitExp(trait, GameConstants.getTraitExpByMakingSkillLevel(reqLevel));
        getChr().write(FieldPacket.gatherResult(getChr(), success));
    }


    // San Commerci | Voyage
    default void finishVoyageHorde() {
        Voyage.finishHorde(getChr());
    }

    //DailyEntry methods
    default int getRemainingDailyEntries(DailyEntry de) {
        return getChr().getAccount().getRemainingEntries(de);
    }

    default void addDailyEntry(DailyEntry de) {
        getChr().getAccount().addDailyEntry(de);
    }

    default void reduceDailyEntry(DailyEntry de) {
        getChr().getAccount().reduceDailyEntry(de);
    }

    
    default boolean levelArcaneSymbol(BodyPart symbolPart, int levelAmount) {
        Item item =             getInitData(). getChr().getEquippedInventory().getFirstItemByBodyPart(symbolPart);
        if (item != null) {
            Equip symbol = (Equip) item;
            if (symbol.getSymbolLevel() < ItemConstants.MAX_ARCANE_SYMBOL_LEVEL) {
                symbol.setSymbolLevel((short) (Math.min(ItemConstants.MAX_ARCANE_SYMBOL_LEVEL, symbol.getSymbolLevel() + levelAmount)));
                symbol.initSymbolStats(symbol.getSymbolLevel(), symbol.getSymbolExp(),             getInitData(). getChr().getJob());
                symbol.updateToChar(            getInitData(). getChr());
                return true;
            }
        } else {
            getInitData(). getChr().chatMessage("Please equip your symbol before you try to complete the weekly.");
        }
        return false;
    }

    
    default boolean levelAuthSymbol(BodyPart symbolPart, int levelAmount) {
        Item item = getInitData(). getChr().getEquippedInventory().getFirstItemByBodyPart(symbolPart);
        if (item != null) {
            Equip symbol = (Equip) item;
            if (symbol.getSymbolLevel() < ItemConstants.MAX_AUTH_SYMBOL_LEVEL) {
                symbol.setSymbolLevel((short) (Math.min(ItemConstants.MAX_AUTH_SYMBOL_LEVEL, symbol.getSymbolLevel() + levelAmount)));
                symbol.initSymbolStats(symbol.getSymbolLevel(), symbol.getSymbolExp(),             getInitData(). getChr().getJob());
                symbol.updateToChar(            getInitData(). getChr());
                return true;
            }
        } else {
            getInitData(). getChr().chatMessage("Please equip your symbol before you try to complete the weekly.");
        }
        return false;
    }

}
