//package dwang.script.js.api.imp;
//
//import dwang.script.DwangScriptBaseApi;
//import net.swordie.ms.client.AccountBossCooldown;
//import net.swordie.ms.client.Client;
//import net.swordie.ms.client.alliance.Alliance;
//import net.swordie.ms.client.alliance.AllianceResult;
//import net.swordie.ms.client.character.Char;
//import net.swordie.ms.client.character.MonsterPark;
//import net.swordie.ms.client.character.avatar.AvatarLook;
//import net.swordie.ms.client.character.commerce.voyage.Voyage;
//import net.swordie.ms.client.character.items.*;
//import net.swordie.ms.client.character.modules.InventoryModule;
//import net.swordie.ms.client.character.quest.Quest;
//import net.swordie.ms.client.character.quest.QuestManager;
//import net.swordie.ms.client.character.scene.Scene;
//import net.swordie.ms.client.character.skills.Option;
//import net.swordie.ms.client.character.skills.temp.CharacterTemporaryStat;
//import net.swordie.ms.client.character.skills.temp.TemporaryStatBase;
//import net.swordie.ms.client.character.skills.temp.TemporaryStatManager;
//import net.swordie.ms.client.character.skills.vmatrix.MatrixRecord;
//import net.swordie.ms.client.character.skills.vmatrix.NodestoneModule;
//import net.swordie.ms.client.character.union.Union;
//import net.swordie.ms.client.character.union.UnionMember;
//import net.swordie.ms.client.character.union.UnionRaid;
//import net.swordie.ms.client.guild.Guild;
//import net.swordie.ms.client.guild.GuildMember;
//import net.swordie.ms.client.guild.result.GuildResult;
//import net.swordie.ms.client.guild.result.GuildType;
//import net.swordie.ms.client.jobs.legend.Shade;
//import net.swordie.ms.client.party.Party;
//import net.swordie.ms.client.party.PartyMember;
//import net.swordie.ms.client.party.PartyResult;
//import net.swordie.ms.client.trunk.TrunkDlg;
//import net.swordie.ms.connection.packet.*;
//import net.swordie.ms.connection.packet.field.FieldPacket;
//import net.swordie.ms.connection.packet.field.LucidFieldPacket;
//import net.swordie.ms.connection.packet.field.PapulatusFieldPacket;
//import net.swordie.ms.connection.packet.model.MessagePacket;
//import net.swordie.ms.constants.*;
//import net.swordie.ms.enums.*;
//import net.swordie.ms.handlers.executors.EventManager;
//import net.swordie.ms.life.DeathType;
//import net.swordie.ms.life.Life;
//import net.swordie.ms.life.Reactor;
//import net.swordie.ms.life.drop.Drop;
//import net.swordie.ms.life.drop.DropInfo;
//import net.swordie.ms.life.mob.Mob;
//import net.swordie.ms.life.mob.boss.papulatus.PapulatusFieldObject;
//import net.swordie.ms.life.mob.boss.papulatus.PapulatusLaserInfo;
//import net.swordie.ms.life.mob.boss.papulatus.PapulatusTweezerInfo;
//import net.swordie.ms.life.mob.boss.will.WillModule;
//import net.swordie.ms.life.mob.skill.MobSkillID;
//import net.swordie.ms.life.npc.Npc;
//import net.swordie.ms.life.npc.NpcMessageType;
//import net.swordie.ms.life.npc.NpcScriptInfo;
//import net.swordie.ms.loaders.*;
//import net.swordie.ms.loaders.containerclasses.ItemInfo;
//import net.swordie.ms.scripts.FieldTransferInfo;
//import net.swordie.ms.scripts.ScriptManager;
//import net.swordie.ms.scripts.ScriptMemory;
//import net.swordie.ms.scripts.ScriptType;
//import net.swordie.ms.util.FileTime;
//import net.swordie.ms.util.Position;
//import net.swordie.ms.util.Rect;
//import net.swordie.ms.util.Util;
//import net.swordie.ms.util.container.Tuple;
//import net.swordie.ms.world.World;
//import net.swordie.ms.world.field.*;
//import net.swordie.ms.world.field.bosses.gollux.FallingCatcher;
//import net.swordie.ms.world.field.bosses.gollux.GolluxMiniMapFieldClearType;
//import net.swordie.ms.world.field.fieldeffect.FieldEffect;
//import net.swordie.ms.world.field.fieldeffect.GreyFieldType;
//import net.swordie.ms.world.field.instance.Instance;
//import net.swordie.ms.world.field.obstacleatom.ObstacleAtomFactory;
//import net.swordie.ms.world.field.obstacleatom.ObstacleAtomInfo;
//import net.swordie.ms.world.field.obstacleatom.ObstacleInRowInfo;
//import net.swordie.ms.world.field.obstacleatom.ObstacleRadianInfo;
//import net.swordie.ms.world.shop.NpcShopDlg;
//import org.python.core.PyDictionary;
//import org.python.core.PyTuple;
//
//import java.lang.reflect.InvocationTargetException;
//import java.lang.reflect.Method;
//import java.text.SimpleDateFormat;
//import java.time.LocalDateTime;
//import java.time.ZoneOffset;
//import java.util.*;
//import java.util.concurrent.ScheduledFuture;
//import java.util.concurrent.TimeUnit;
//import java.util.stream.Collectors;
//
//import static net.swordie.ms.client.character.skills.temp.CharacterTemporaryStat.PapulatusTimeLock;
//import static net.swordie.ms.client.character.skills.temp.CharacterTemporaryStat.RideVehicle;
//import static net.swordie.ms.enums.ChatType.*;
//import static net.swordie.ms.enums.ChatType.GameDesc;
//import static net.swordie.ms.life.npc.NpcMessageType.*;
//import static net.swordie.ms.life.npc.NpcMessageType.AskSelectMenu;
//
///**
// * @author dwang
// * @date 2026/3/17
// * @description 所有python能用的方法
// */
//public interface PythonAllFun extends DwangScriptBaseApi , ScriptManager {
//
//    String[] fieldEventMethodNames = new String[]{
//            "createObstacleAtom",
//            "createObstacleAtomToFoothold",
//    };
//
//    private static boolean isFieldEventMethodName(String methodName) {
//        return Arrays.asList(fieldEventMethodNames).contains(methodName);
//    }
//
//    /**
//     * 脚本执行方法
//     */
//
//    // Start of the sends/asks -----------------------------------------------------------------------------------------
//    @Override
//    default int sendSay(String text) {
//        if (getLastActiveScriptType() == ScriptType.None) {
//            return 0;
//        }
//        return sendGeneralSay(text, Say);
//    }
//
//    /**
//     * Helper function that ensures that selections have the appropriate type (AskMenu).
//     *
//     * @param text
//     * @param nmt
//     */
//    default int sendGeneralSay(String text, NpcMessageType nmt) throws NullPointerException {
//        var npcScriptInfo = getInitData().getNpcScriptInfo();
//        npcScriptInfo.setText(text);
//        String checkText = text.replaceAll("[\r\n]", "");
//        if (listPattern.matcher(checkText).matches()) {
//            nmt = AskMenu;
//        }
//        npcScriptInfo.setMessageType(nmt);
//        getChr().write(ScriptMan.scriptMessage(npcScriptInfo, nmt));
//        getMemory().addMemoryInfo(npcScriptInfo);
//        return (int) 0;
//    }
//
//    @Override
//    default int sendNext(String text) {
//        return sendGeneralSay(text, SayNext);
//    }
//
//    @Override
//    default int sendPrev(String text) {
//        return sendGeneralSay(text, SayPrev);
//    }
//
//    @Override
//    default int sendSayOkay(String text) {
//        return sendGeneralSay(text, SayOk);
//    }
//
//    @Override
//    default int sendSayImage(String image) {
//        return sendSayImage(new String[]{image});
//    }
//
//    @Override
//    default int sendSayImage(String[] images) {
//        getInitData().getNpcScriptInfo().setImages(images);
//        getInitData().getNpcScriptInfo().setMessageType(SayImage);
//        return sendGeneralSay("", SayImage);
//    }
//
//
//    @Override
//    default boolean sendAskYesNo(String text) {
//        return sendGeneralSay(text, AskYesNo) != 0;
//    }
//
//    @Override
//    default boolean sendAskAccept(String text) {
//        return sendGeneralSay(text, AskAccept) != 0;
//    }
//
//    default boolean sendAskAccept2(String text) {
//        return sendGeneralSay(text, AskAccept2) != 0;
//    }
//
//    @Override
//    default String sendAskText(String text, String defaultText, short minLength, short maxLength) throws NullPointerException {
//        var npcScriptInfo = getInitData().getNpcScriptInfo();
//        npcScriptInfo.setMin(minLength);
//        npcScriptInfo.setMax(maxLength);
//        npcScriptInfo.setDefaultText(defaultText);
//        npcScriptInfo.setText(text);
//        npcScriptInfo.setMessageType(AskText);
//        getChr().write(ScriptMan.scriptMessage(npcScriptInfo, AskText));
//        getMemory().addMemoryInfo(npcScriptInfo);
//        Object response = null;
//        var lastActiveScriptType = getLastActiveScriptType();
//        if (getInitData().isActive(lastActiveScriptType)) {
//            response = getScriptInfoByType(lastActiveScriptType).awaitResponse();
//        }
//        if (response == null) {
//            throw new NullPointerException(INTENDED_NPE_MSG);
//        }
//        return (String) response;
//    }
//
//    @Override
//    default int sendAskNumber(String text, int defaultNum, int min, int max) {
//        getInitData().getNpcScriptInfo().setDefaultNumber(defaultNum);
//        getInitData().getNpcScriptInfo().setMin(min);
//        getInitData().getNpcScriptInfo().setMax(max);
//        var num = sendGeneralSay(text, AskNumber);
//
//        if (num < min || num > max) {
//            throw new IllegalArgumentException(String.format("%d is outside of bounds (%d, %d)", num, min, max));
//        }
//
//        return num;
//    }
//
//    @Override
//    default int sendInitialQuiz(byte type, String title, String problem, String hint, int min, int max, int time) {
//        NpcScriptInfo nsi = getInitData().getNpcScriptInfo();
//        nsi.setType(type);
//        if (type != 1) {
//            nsi.setTitle(title);
//            nsi.setProblemText(problem);
//            nsi.setHintText(hint);
//            nsi.setMin(min);
//            nsi.setMax(max);
//            nsi.setTime(time);
//        }
//        return sendGeneralSay(title, InitialQuiz);
//    }
//
//    @Override
//    default int sendInitialSpeedQuiz(byte type, int quizType, int answer, int correctAnswers, int remaining, int time) {
//        NpcScriptInfo nsi = getInitData().getNpcScriptInfo();
//        nsi.setType(type);
//        if (type != 1) {
//            nsi.setQuizType(quizType);
//            nsi.setAnswer(answer);
//            nsi.setCorrectAnswers(correctAnswers);
//            nsi.setRemaining(remaining);
//            nsi.setTime(time);
//        }
//        return sendGeneralSay("", InitialSpeedQuiz);
//    }
//
//    @Override
//    default int sendICQuiz(byte type, String text, String hintText, int time) {
//        getInitData().getNpcScriptInfo().setType(type);
//        getInitData().getNpcScriptInfo().setHintText(hintText);
//        getInitData().getNpcScriptInfo().setTime(time);
//        return sendGeneralSay(text, ICQuiz);
//    }
//
//    @Override
//    default int sendAskAvatar(String text, boolean angelicBuster, boolean zeroBeta, int... options) {
//        List<Integer> safeOptions = new ArrayList<>();
//        for (var opt : options) {
//            if (ItemConstants.isSkin(opt) || ItemData.getItemDeepCopy(opt) != null) {
//                safeOptions.add(opt);
//            }
//        }
//
//        if (safeOptions.size() > 0) {
//            getInitData().getNpcScriptInfo().setAngelicBuster(angelicBuster);
//            getInitData().getNpcScriptInfo().setZeroBeta(zeroBeta);
//            getInitData().getNpcScriptInfo().setOptions(safeOptions.stream().mapToInt(i -> i).toArray());
//            var safeIdx = sendGeneralSay(text, AskAvatar);
//            return safeOptions.get(safeIdx);
//        } else {
//            sendGeneralSay("We don't have any options here, sorry.", SayOk);
//            return 100000000; // makes setCharacterLook not do anything
//        }
//    }
//
//    default int sendAskSlideMenu(int dlgType) {
//        getInitData().getNpcScriptInfo().setDlgType(dlgType);
//        return sendGeneralSay("", AskSlideMenu);
//    }
//
//    default int sendAskSelectMenu(int dlgType, int defaultSelect) {
//        return sendAskSelectMenu(dlgType, defaultSelect, new String[]{});
//    }
//
//    default int sendAskSelectMenu(int dlgType, int defaultSelect, String[] text) {
//        getInitData().getNpcScriptInfo().setDlgType(dlgType);
//        getInitData().getNpcScriptInfo().setDefaultSelect(defaultSelect);
//        getInitData().getNpcScriptInfo().setSelectText(text);
//        return sendGeneralSay("", AskSelectMenu);
//    }
//
//    // Start of param methods ------------------------------------------------------------------------------------------
//
//    default void setParam(int param) {
//        getInitData().getNpcScriptInfo().setParam((short) param);
//    }
//
//    default void setColor(int color) {
//        getInitData().getNpcScriptInfo().setColor((byte) color);
//    }
//
//    default void resetParam() {
//        getInitData().getNpcScriptInfo().resetParam();
//    }
//
//    default void removeEscapeButton() {
//        getInitData().getNpcScriptInfo().addParam(NpcScriptInfo.Param.NotCancellable);
//    }
//
//    default void addEscapeButton() {
//        if (getInitData().getNpcScriptInfo().hasParam(NpcScriptInfo.Param.NotCancellable)) {
//            getInitData().getNpcScriptInfo().removeParam(NpcScriptInfo.Param.NotCancellable);
//        }
//    }
//
//    default void flipSpeaker() {
//        getInitData().getNpcScriptInfo().addParam(NpcScriptInfo.Param.FlipSpeaker);
//    }
//
//
//    default void cancelFlipDialogue() {
//        getInitData().getNpcScriptInfo().removeParam(NpcScriptInfo.Param.OverrideSpeakerID);
//    }
//
//    /**
//     * 是否覆盖说话人的ID
//     */
//    default void flipDialogue() {
//        getInitData().getNpcScriptInfo().addParam(NpcScriptInfo.Param.OverrideSpeakerID);
//    }
//
//    /**
//     * 是否play作为说话者 + 反转
//     */
//    default void flipDialoguePlayerAsSpeaker() {
//        getInitData().getNpcScriptInfo().addParam(NpcScriptInfo.Param.PlayerAsSpeakerFlip);
//    }
//
//    default void setPlayerAsSpeaker() {
//        getInitData().getNpcScriptInfo().addParam(NpcScriptInfo.Param.PlayerAsSpeaker);
//    }
//
//    default void setBoxChat() {
//        setBoxChat(true);
//    }
//
//    default void setBoxChat(boolean color) { // true = Standard BoxChat  |  false = Zero BoxChat
//        getInitData().getNpcScriptInfo().setColor((byte) (color ? 1 : 0));
//        getInitData().getNpcScriptInfo().addParam(NpcScriptInfo.Param.BoxChat);
//    }
//
//    default void flipBoxChat() {
//        getInitData().getNpcScriptInfo().addParam(NpcScriptInfo.Param.FlipBoxChat);
//    }
//
//    default void boxChatPlayerAsSpeaker() {
//        getInitData().getNpcScriptInfo().addParam(NpcScriptInfo.Param.BoxChatAsPlayer);
//    }
//
//    default void flipBoxChatPlayerAsSpeaker() {
//        getInitData().getNpcScriptInfo().addParam(NpcScriptInfo.Param.FlipBoxChatAsPlayer);
//    }
//
//    default void flipBoxChatPlayerNoEscape() {
//        getInitData().getNpcScriptInfo().addParam(NpcScriptInfo.Param.FlipBoxChatAsPlayerNoEscape);
//    }
//
//
//    // Start helper methods for scripts --------------------------------------------------------------------------------
//
//    @Override
//    default void dispose() {
//        dispose(true);
//    }
//
//    default void dispose(boolean stop) {
//        if (getChr() != null) {
//            getChr().setTalkingToNpc(false);
//        }
//        getInitData().getNpcScriptInfo().reset();
//        getMemory().clear();
//        stopJs(ScriptType.Npc);
//        stopJs(ScriptType.Portal);
//        stopJs(ScriptType.Item);
//        stopJs(ScriptType.Quest);
//        stopJs(ScriptType.Reactor);
//        if (getLastActiveScriptType() == ScriptType.Field) {
//            // only fields are able to stop themselves, otherwise things like npcs would stop field scripts
//            // like magnus leave script would make the orbs disappear if you don't actually leave
//            stopJs(ScriptType.Field);
//        }
//        if (stop) {
//            // js 都要手动停止
//
//        }
//        setCurNodeEventEnd(false);
//    }
//
//    default void dispose(ScriptType scriptType) {
//        getMemory().clear();
//        stopJs(scriptType);
//    }
//
//    default Position getPosition(int objId) {
//        return getField().getLifeByObjectID(objId).getPosition();
//    }
//
//
//    // Character Stat-related methods ----------------------------------------------------------------------------------
//
//    @Override
//    default void setJob(short jobID) {
//        getChr().setJob(jobID);
//        Map<Stat, Object> stats = new HashMap<>();
//        stats.put(Stat.job, jobID);
//        getChr().write(WvsContext.statChanged(stats, getChr().getSubJob()));
//    }
//
//    default void addSP(int amount) {
//        addSP(amount, false);
//    }
//
//    @Override
//    default void addSP(int amount, boolean jobAdv) {
//        byte jobLevel = (byte) JobConstants.getJobLevel(getChr().getJob());
//        int currentSP = getChr().getAvatarData().getCharacterStat().getExtendSP().getSpByJobLevel(jobLevel);
//        setSP(currentSP + amount);
//        if (jobAdv) {
//            getChr().write(WvsContext.message(MessagePacket.incSpMessage(getChr().getJob(), (byte) amount)));
//        }
//    }
//
//    @Override
//    default void setSP(int amount) {
//        getChr().setSpToCurrentJob(amount);
//        Map<Stat, Object> stats = new HashMap<>();
//        stats.put(Stat.sp, getChr().getAvatarData().getCharacterStat().getExtendSP());
//        getChr().write(WvsContext.statChanged(stats));
//    }
//
//    @Override
//    default void addAP(int amount) {
//        int currentAP = getChr().getAvatarData().getCharacterStat().getAp();
//        setAP(currentAP + amount);
//    }
//
//    @Override
//    default void setAP(int amount) {
//        getChr().setStat(Stat.ap, (short) amount);
//        Map<Stat, Object> stats = new HashMap<>();
//        stats.put(Stat.ap, (short) amount);
//        getChr().write(WvsContext.statChanged(stats));
//    }
//
//    @Override
//    default void setSTR(short amount) {
//        getChr().setStat(Stat.str, amount);
//        Map<Stat, Object> stats = new HashMap<>();
//        stats.put(Stat.str, amount);
//        getChr().write(WvsContext.statChanged(stats));
//    }
//
//    @Override
//    default void setINT(short amount) {
//        getChr().setStat(Stat.inte, amount);
//        Map<Stat, Object> stats = new HashMap<>();
//        stats.put(Stat.inte, amount);
//        getChr().write(WvsContext.statChanged(stats));
//    }
//
//    @Override
//    default void setDEX(short amount) {
//        getChr().setStat(Stat.dex, amount);
//        Map<Stat, Object> stats = new HashMap<>();
//        stats.put(Stat.dex, amount);
//        getChr().write(WvsContext.statChanged(stats));
//    }
//
//    @Override
//    default void setLUK(short amount) {
//        getChr().setStat(Stat.luk, amount);
//        Map<Stat, Object> stats = new HashMap<>();
//        stats.put(Stat.luk, amount);
//        getChr().write(WvsContext.statChanged(stats));
//    }
//
//    default void addMaxHP(int amount) {
//        getChr().addStatAndSendPacket(Stat.mhp, amount);
//    }
//
//    @Override
//    default void setMaxHP(int amount) {
//        getChr().setStat(Stat.mhp, amount);
//        getChr().setStat(Stat.hp, amount);
//        Map<Stat, Object> stats = new HashMap<>();
//        stats.put(Stat.mhp, amount);
//        stats.put(Stat.hp, amount);
//        getChr().write(WvsContext.statChanged(stats));
//    }
//
//    default void addMaxMP(int amount) {
//        getChr().addStatAndSendPacket(Stat.mmp, amount);
//    }
//
//    @Override
//    default void setMaxMP(int amount) {
//        getChr().setStat(Stat.mmp, amount);
//        getChr().setStat(Stat.mp, amount);
//        Map<Stat, Object> stats = new HashMap<>();
//        stats.put(Stat.mmp, amount);
//        stats.put(Stat.mp, amount);
//        getChr().write(WvsContext.statChanged(stats));
//    }
//
//    @Override
//    default void jobAdvance(short jobID) {
//        setJob(jobID);
//        addAP(5); //Standard added AP upon Job Advancing
//        addSP(5); //Standard added SP upon Job Advancing
//    }
//
//    @Override
//    default void giveExp(long expGiven) {
//        getChr().addExp(expGiven);
//    }
//
//    @Override
//    default void giveExpNoMsg(long expGiven) {
//        getChr().addExpNoMsg(expGiven);
//    }
//
//    @Override
//    default void changeCharacterLook(int look) {
//        AvatarLook al = getChr().getAvatarData().getAvatarLook();
//        boolean isBeta = getChr().isZeroBeta();
//        if (isBeta) {
//            al = getChr().getAvatarData().getZeroAvatarLook();
//        }
//        if (look < 100) { // skin
//            al.setSkin(look);
//            if (!isBeta) {
//                getChr().setStatAndSendPacket(Stat.skin, look);
//            } else {
//                getChr().getZeroInfo().setSubSkin(look);
//            }
//        } else if (ItemConstants.isFace(look)) {
//            al.setFace(look);
//
//            if (!isBeta) {
//                getChr().setStatAndSendPacket(Stat.face, look);
//            } else {
//                getChr().getZeroInfo().setSubFace(look);
//            }
//        } else if (ItemConstants.isHair(look)) {
//            al.setHair(look);
//            if (!isBeta) {
//                getChr().setStatAndSendPacket(Stat.hair, look);
//            } else {
//                getChr().getZeroInfo().setSubHair(look);
//            }
//        } else {
//            log.error(String.format("Tried changing a look with invalid id (%d)", look));
//        }
//        if (isBeta) {
//            getChr().updateZeroInfo();
//        } else {
//            getChr().broadcastRemoteAvatarModified();
//        }
//    }
//
//    default void giveSkill(int skillId) {
//        giveSkill(skillId, 1);
//    }
//
//    default void giveSkill(int skillId, int slv) {
//        giveSkill(skillId, slv, slv);
//    }
//
//    @Override
//    default void giveSkill(int skillId, int slv, int maxLvl) {
//        getChr().addSkill(skillId, slv, maxLvl);
//    }
//
//    default void removeBuff(CharacterTemporaryStat cts) {
//        TemporaryStatManager tsm = getChr().getTemporaryStatManager();
//        tsm.removeStat(cts);
//    }
//
//    default void removeAllBuffs() {
//        TemporaryStatManager tsm = getChr().getTemporaryStatManager();
//        tsm.removeAllStats();
//    }
//
//    default void removeSkill(int skillId) {
//        getChr().removeSkillAndSendPacket(skillId);
//    }
//
//    default int getSkillByItem() {
//        return getSkillByItem(getParentID());
//    }
//
//    default int getSkillByItem(int itemId) {
//        ItemInfo itemInfo = ItemData.getItemInfoByID(itemId);
//        return itemInfo.getSkillId();
//    }
//
//    default boolean hasSkill(int skillId) {
//        return getChr().hasSkill(skillId);
//    }
//
//    default void heal() {
//        getChr().heal(getChr().getMaxHP());
//        getChr().healMP(getChr().getMaxMP());
//    }
//
//    default void setLevel(int level) {
//        getChr().setStatAndSendPacket(Stat.level, level);
//        getChr().setStatAndSendPacket(Stat.exp, 0);
//        getChr().getJobHandler().handleLevelUp();
//        getField().broadcastPacket(UserRemote.effect(getChr().getId(), Effect.levelUpEffect()));
//    }
//
//    default void addLevel(int level) {
//        int curLevel = getChr().getLevel();
//        for (int i = curLevel + 1; i <= curLevel + level; i++) {
//            getChr().setStat(Stat.level, i);
//            Map<Stat, Object> stats = new HashMap<>();
//            stats.put(Stat.level, i);
//            stats.put(Stat.exp, (long) 0);
//            getChr().write(WvsContext.statChanged(stats));
//            getChr().getJobHandler().handleLevelUp();
//            getField().broadcastPacket(UserRemote.effect(getChr().getId(), Effect.levelUpEffect()));
//        }
//    }
//
//    default void lockInGameUI(boolean lock) {
//        lockInGameUI(lock, true);
//    }
//
//    default void lockInGameUI(boolean lock, boolean blackFrame) {
//        if (getChr() != null) {
//            getChr().write(UserLocal.setInGameDirectionMode(lock, blackFrame, false));
//        }
//    }
//
//    default void curNodeEventEnd(boolean enable) {
//        setCurNodeEventEnd(enable);
//        getChr().write(FieldPacket.curNodeEventEnd(enable));
//    }
//
//    default void setCurNodeEventEnd(boolean curNodeEventEnd) {
//        this.initData.setCurNodeEventEnd(curNodeEventEnd);
//    }
//
//    default void progressMessageFont(int fontNameType, int fontSize, int fontColorType, int fadeOutDelay, String message) {
//        ProgressMessageFontType type = ProgressMessageFontType.getByVal(fontNameType);
//        ProgressMessageColourType colour = ProgressMessageColourType.getByVal(fontColorType);
//        if (colour == null || type == null) {
//            log.warn(String.format("Could not find fontType %d or ColourType %d", fontNameType, fontColorType));
//            return;
//        }
//        progressMessageFont(type, fontSize, colour, fadeOutDelay, message);
//    }
//
//    default void progressMessageFont(ProgressMessageFontType fontType, int fontSize, ProgressMessageColourType colour, int fadeOutDelay, String msg) {
//        getChr().write(UserPacket.progressMessageFont(fontType, fontSize, colour, fadeOutDelay, msg));
//    }
//
//    default void localEmotion(int emotion, int duration, boolean byItemOption) {
//        getChr().write(UserLocal.emotion(emotion, duration, byItemOption));
//    }
//
//
//    // Field-related methods -------------------------------------------------------------------------------------------
//
//    default void warpField(int fieldId, int portalId) {
//        for (Char chrz : new HashSet<>(getField().getChars())) {
//            chrz.warp(fieldId, portalId);
//        }
//    }
//
//    default void warpField(int fieldId) {
//        for (Char chrz : new HashSet<>(getField().getChars())) {
//            chrz.warp(fieldId, 0);
//        }
//    }
//
//    @Override
//    default void warp(int fieldId) {
//        getChr().warp(fieldId, 0);
//
//    }
//
//    default void warp(int fieldId, boolean executeAfterScript) {
//        warp(fieldId, 0, executeAfterScript, false);
//    }
//
//    @Override
//    default void warp(int fieldId, int portalId) {
//        warp(fieldId, portalId, true, false);
//    }
//
//    default void warp(int fieldId, int portalId, boolean instanceField) {
//        warp(fieldId, portalId, true, instanceField);
//    }
//
//    default void warp(int fieldId, int portalId, boolean executeAfterScript, boolean instanceField) {
//        if (executeAfterScript) {
//            FieldTransferInfo fti = getInitData().getFieldTransferInfo();
//            fti.setFieldId(fieldId);
//            fti.setPortal(portalId);
//            fti.setIsInstanceField(instanceField);
//        } else {
//            getChr().warp(fieldId, portalId);
//        }
//    }
//
//    default void changeChannelAndWarp(int channel, int fieldID, boolean executeAfterScript, boolean instanceField) {
//        if (executeAfterScript) {
//            FieldTransferInfo fti = getInitData().getFieldTransferInfo();
//            fti.setChannel(channel);
//            fti.setFieldId(fieldID);
//            fti.setIsInstanceField(instanceField);
//        } else {
//            Client c = getChr().getClient();
//            c.setOldChannel(c.getChannel());
//            getChr().changeChannelAndWarp((byte) channel, fieldID);
//        }
//    }
//
//    default void changeChannelAndWarp(int channel, int fieldID) {
//        changeChannelAndWarp(channel, fieldID, true, false);
//    }
//
//    @Override
//    default int getFieldID() {
//        return getField().getId();
//    }
//
//    default void warpInstanceOut() {
//        warpInstance(-1, false, 0, false);
//    }
//
//    default void warpInstanceIn(int id, int portal) {
//        warpInstance(id, true, portal, false);
//    }
//
//    default void warpInstanceIn(int id, int portalId, boolean partyAllowed) {
//        warpInstance(id, true, portalId, partyAllowed);
//    }
//
//    default void warpInstanceOut(int id, int portal) {
//        warpInstance(id, false, portal, false);
//    }
//
//    @Override
//    default void warpInstanceIn(int id) {
//        warpInstance(id, true, 0, false);
//    }
//
//    @Override
//    default void warpInstanceOut(int id) {
//        warpInstance(id, false, 0, false);
//    }
//
//    default void warpInstance(int fieldId, boolean in, int portalId, boolean partyAllowed) {
//        getChr().getBossInfo().reset();
//
//        Instance instance;
//        if (in) {
//            // warp party in if there is a party and party is allowed, solo instance otherwise
//            Party party = getChr().getParty();
//            if (party == null || !partyAllowed) {
//                instance = new Instance(getChr());
//            } else {
//                instance = new Instance(party);
//            }
//            // setup the instance & warp
//            instance.setup(fieldId, portalId);
//        } else {
//            instance = getChr().getInstance();
//            stopEvents();
//            if (instance == null) {
//                // no info, just warp them
//                getChr().setDeathCount(-1);
//                getChr().warp(fieldId, portalId);
//            } else {
//
//                // remove chr from eligible instance members
//                int forcedReturn;
//                int forcedReturnPortal;
//                if (fieldId >= 0) {
//                    forcedReturn = fieldId;
//                    forcedReturnPortal = portalId;
//                } else {
//                    forcedReturn = instance.getForcedReturn();
//                    forcedReturnPortal = instance.getForcedReturnPortalId();
//                }
//
//                instance.removeChar(getChr(), forcedReturn, forcedReturnPortal, true, true);
//            }
//        }
//    }
//
//    default void setInstanceTime(int seconds) {
//        setInstanceTime(seconds, 0);
//    }
//
//    default void setInstanceTime(int seconds, int forcedReturnFieldId) {
//        Instance instance = getChr().getInstance();
//        if (instance != null) {
//            if (forcedReturnFieldId != 0) {
//                instance.setForcedReturn(forcedReturnFieldId);
//            }
//            if (instance.getRemainingTime() / 1000 < System.currentTimeMillis()) {
//                // don't override old timeout value
//                instance.setTimeout(seconds);
//            }
//        }
//    }
//
//    @Override
//    default int getReturnField() {
//        // Do this to prevent infinite returnField Loop
//        int returnField = getInitData().getReturnField();
//        if (getField().getId() == returnField || returnField < 100000000) {
//            return 100000000;
//        }
//        return returnField;
//    }
//
//    @Override
//    default void setReturnField(int returnField) {
//        getInitData().setReturnField(returnField);
//    }
//
//    @Override
//    default void setReturnField() {
//        setReturnField(getFieldID());
//    }
//
//    @Override
//    default boolean hasMobsInField() {
//        return getAmountOfMobsInField() > 0;
//    }
//
//    default boolean hasMobsInField(int fieldId) {
//        return getAmountOfMobsInField(fieldId) > 0;
//    }
//
//    default boolean hasMobsInField(int fieldId, int templateId) {
//        return getAmountOfMobsInField(fieldId, templateId) > 0;
//    }
//
//    @Override
//    default int getAmountOfMobsInField() {
//        return getField().getMobs().size();
//    }
//
//    default int getAmountOfMobsInField(int fieldId) {
//        var field = getChr().getOrCreateFieldByCurrentInstanceType(fieldId);
//        return field.getMobs().size();
//    }
//
//    default int getAmountOfMobsInField(int fieldId, int templateId) {
//        var field = getChr().getOrCreateFieldByCurrentInstanceType(fieldId);
//        return (int) field.getMobs().stream()
//                .filter(m -> m.getTemplateId() == templateId)
//                .count();
//    }
//
//    default void killMobs() {
//        List<net.swordie.ms.life.mob.Mob> mobs = new ArrayList<>(getField().getMobs());
//        for (Mob mob : mobs) {
//            mob.die(false);
//        }
//    }
//
//    default void killMobs(int templateId) {
//        List<Mob> mobs = new ArrayList<>(getField().getMobs());
//        for (Mob mob : mobs) {
//            if (mob.getTemplateId() == templateId) {
//                mob.die(false);
//            }
//        }
//    }
//
//    default void showWeatherNoticeToField(String text, WeatherEffNoticeType type) {
//        showWeatherNoticeToField(text, type, 7000); // 7 seconds
//    }
//
//    default void showWeatherNoticeToField(String text, WeatherEffNoticeType type, int duration) {
//        Field field = getField();
//        field.broadcastPacket(WvsContext.weatherEffectNotice(type, text, duration));
//    }
//
//    default void showEffectToField(String dir) {
//        showEffectToField(dir, 0);
//    }
//
//    default void showEffectToField(String dir, int delay) {
//        Field field = getField();
//        field.broadcastPacket(UserPacket.effect(Effect.effectFromWZ(dir, false, delay, 4, 0)));
//    }
//
//    default void showFieldEffect(String dir) {
//        showFieldEffect(dir, 0);
//    }
//
//    @Override
//    default void showFieldEffect(String dir, int delay) {
//        getField().broadcastPacket(FieldPacket.fieldEffect(FieldEffect.getFieldEffectFromWz(dir, delay)));
//    }
//
//    @Override
//    default void showObjectFieldEffect(String objectEffectName) {
//        getField().broadcastPacket(FieldPacket.fieldEffect(FieldEffect.getFieldEffectFromObject(objectEffectName)));
//    }
//
//    @Override
//    default void setPortalEnabled(String portalName, boolean enabled) {
//        Portal portal = getField().getInfo().getPortalByName(portalName);
//        if (portal != null) {
//            portal.setEnabled(enabled);
//        }
//    }
//
//    default void showFieldEffectToField(String dir) {
//        showFieldEffect(dir, 0);
//    }
//
//    default void showFieldEffectToField(String dir, int delay) {
//        Field field = getField();
//        field.broadcastPacket(FieldPacket.fieldEffect(FieldEffect.getFieldEffectFromWz(dir, delay)));
//    }
//
//    default void showOffFieldEffect(String dir) {
//        getChr().write(FieldPacket.fieldEffect(FieldEffect.getOffFieldEffectFromWz(dir, 0)));
//    }
//
//    default void changeBGM(String dir, int startTime, int idk) {
//        getChr().write(FieldPacket.fieldEffect(FieldEffect.changeBGM(dir, startTime, idk)));
//    }
//
//    default void bgmVolumeOnly(boolean volumeOnly) {
//        getChr().write(FieldPacket.fieldEffect(FieldEffect.bgmVolumeOnly(volumeOnly)));
//    }
//
//    default void bgmVolume(int volume, int fadingDuration) {
//        getChr().write(FieldPacket.fieldEffect(FieldEffect.bgmVolume(volume, fadingDuration)));
//    }
//
//    default void showFieldBackgroundEffect(String dir) {
//        showFieldBackgroundEffect(dir, 0);
//    }
//
//    default void showFieldBackgroundEffect(String dir, int delay) {
//        getChr().write(FieldPacket.fieldEffect(FieldEffect.getFieldBackgroundEffectFromWz(dir, delay)));
//    }
//
//    default void showFadeTransition(int duration, int fadeInTime, int fadeOutTime) {
//        getChr().write(FieldPacket.fieldEffect(FieldEffect.takeSnapShotOfClient2(fadeInTime, duration, fadeOutTime, true)));
//    }
//
//    default void showFade(int duration) {
//        getChr().write(FieldPacket.fieldEffect(FieldEffect.takeSnapShotOfClient(duration)));
//    }
//
//    default void setFieldColour(GreyFieldType colorFieldType, short red, short green, short blue, int time) {
//        getChr().write(FieldPacket.fieldEffect(FieldEffect.setFieldColor(colorFieldType, red, green, blue, time)));
//    }
//
//    default void setFieldGrey(GreyFieldType colorFieldType, boolean show) {
//        getChr().write(FieldPacket.fieldEffect(FieldEffect.setFieldGrey(colorFieldType, show)));
//    }
//
//    default void removeOverlapScreen(int duration) {
//        getChr().write(FieldPacket.fieldEffect(FieldEffect.removeOverlapScreen(duration)));
//    }
//
//    default void onLayer(int duration, String key, int x, int y, int z, String origin, int org, boolean postRender, int idk, boolean repeat) {
//        getChr().write(FieldPacket.fieldEffect(FieldEffect.onOffLayer(0, duration, key, x, y, z, origin, org, postRender, idk, repeat)));
//    }
//
//    default void moveLayer(int duration, String key, int x, int y) {
//        getChr().write(FieldPacket.fieldEffect(FieldEffect.onOffLayer(1, duration, key, x, y, 0, null, 0, false, 0, false)));
//    }
//
//    default void offLayer(int duration, String key, boolean repeat) {
//        getChr().write(FieldPacket.fieldEffect(FieldEffect.onOffLayer(2, duration, key, 0, 0, 0, null, 0, false, 0, repeat)));
//    }
//
//    default void spineScreen(boolean binary, boolean loop, boolean postRender, int endDelay, String path,
//                            String animationName, String keyName) {
//        getChr().write(FieldPacket.fieldEffect(FieldEffect.spineScreen(binary, loop, postRender, endDelay, path, animationName, keyName)));
//    }
//
//    default void offSpineScreen(String keyName, int type, String aniName, int alphaTime) {
//        getChr().write(FieldPacket.fieldEffect(FieldEffect.offSpineScreen(keyName, type, aniName, alphaTime)));
//    }
//
//    @Override
//    default void dropItem(int itemId, int x, int y) {
//        dropItem(itemId, 1, x, y);
//    }
//
//    default void dropItem(int itemId, int quantity, int x, int y) {
//        Field field = getField();
//        Drop drop = new Drop(-1);
//        drop.setItem(ItemData.getItemDeepCopy(itemId));
//        drop.getItem().setQuantity(quantity);
//        Position position = new Position(x, y);
//        drop.setPosition(position);
//        field.drop(drop, position, true);
//    }
//
//    @Override
//    default void dropItems(Set<Tuple<Integer, Integer>> dropInfos, int x, int y, int ownerId) {
//        Set<DropInfo> dropInfoSet = new HashSet<>();
//        for (Tuple<Integer, Integer> dropInfo : dropInfos) {
//            int itemid = dropInfo.getLeft(); // itemId
//            int chance = dropInfo.getRight(); // per 10,000
//
//            DropInfo di = new DropInfo(itemid, chance); // add min/max Quantity if needed
//            dropInfoSet.add(di);
//        }
//
//        getField().drop(dropInfoSet, new Position(x, y), ownerId);
//    }
//
//    default void dropItemsWithQuantity(List<List<Integer>> drops, int x, int y, int ownerId) {
//        Set<DropInfo> dropInfoSet = new HashSet<>();
//        for (var drop : drops) {
//            var itemid = drop.get(0);
//            var quantity = drop.get(1);
//
//            DropInfo di = new DropInfo(itemid, 10000);
//            di.setMinQuant(quantity);
//            di.setMaxQuant(quantity);
//            dropInfoSet.add(di);
//        }
//
//        getField().drop(dropInfoSet, new Position(x, y), ownerId);
//    }
//
//    @Override
//    default Set<DropInfo> genDropInfoFromPyTuples(List<PyTuple> tuples) {
//        Set<DropInfo> dropInfos = new HashSet<>();
//        for (PyTuple tuple : tuples) {
//            int itemId = (int) tuple.get(0);
//            int chance = (int) tuple.get(1);
//
//            dropInfos.add(new DropInfo(itemId, chance));
//        }
//
//        return dropInfos;
//    }
//
//    default Set<DropInfo> genDropInfoQuantityFromPyTuples(List<List<Integer>> tuples) {
//        Set<DropInfo> dropInfos = new HashSet<>();
//        for (var tuple : tuples) {
//            int itemId = tuple.get(0);
//            int quantity = tuple.get(1);
//
//            dropInfos.add(new DropInfo(itemId, 10000));
//        }
//
//        return dropInfos;
//    }
//
//    @Override
//    default Position newPosition(int x, int y) {
//        return new Position(x, y);
//    }
//
//    @Override
//    default void teleportInField(Position position) {
//        getChr().write(FieldPacket.teleport(position, getChr()));
//    }
//
//    @Override
//    default void teleportInField(int x, int y) {
//        teleportInField(new Position(x, y));
//    }
//
//    @Override
//    default void teleportToPortal(int portalId) {
//        Portal portal = getField().getInfo().getPortalByID(portalId);
//        if (portal != null) {
//            Position position = new Position(portal.getX(), portal.getY());
//            getChr().write(FieldPacket.teleport(position, getChr()));
//        }
//    }
//
//    default Drop getDropInRect(int itemID, Rect rect) {
//        Field field = getField();
//        if (field == null) {
//            field = getField();
//        }
//        return field.getDropsInRect(rect).stream()
//                .filter(drop -> drop.getItem() != null && drop.getItem().getItemId() == itemID)
//                .findAny().orElse(null);
//    }
//
//    @Override
//    default Drop getDropInRect(int itemID, int rectRange) {
//        return getDropInRect(itemID, new Rect(
//                new Position(
//                        getChr().getPosition().getX() - rectRange,
//                        getChr().getPosition().getY() - rectRange),
//                new Position(
//                        getChr().getPosition().getX() + rectRange,
//                        getChr().getPosition().getY() + rectRange))
//        );
//
//    }
//
//    default void changeFoothold(String footholdName, boolean show) {
//        changeFoothold(footholdName, show, 0, 0);
//    }
//
//    default void changeFoothold(String footholdName, boolean show, int x, int y) {
//        getChr().getField().broadcastPacket(FieldPacket.footholdAppear(footholdName, show, new Position(x, y)));
//    }
//
//    default void createFallingCatcher(String templateStr, int hpR, int amount, int chance) {
//        Field field = getField();
//        List<Position> positions = new ArrayList<>();
//        for (int i = 0; i < amount; i++) {
//            if (Util.succeedProp(chance)) {
//                positions.add(Util.getRandomFromCollection(field.getInfo().getFootholds().values()).getRandomPosition());
//            }
//        }
//        createFallingCatcher(templateStr, hpR, positions);
//    }
//
//    default void createFallingCatcher(String templateStr, int hpR, List<Position> positions) {
//        FallingCatcher fallingCatcher = new FallingCatcher(templateStr, hpR, positions);
//        getField().broadcastPacket(LucidFieldPacket.createFallingCatcher(fallingCatcher));
//    }
//
//    // Life-related methods --------------------------------------------------------------------------------------------
//
//
//    // NPC methods
//    @Override
//    default void spawnNpc(int npcId, int x, int y) {
//        Npc npc = NpcData.getNpcDeepCopyById(npcId);
//        Position position = new Position(x, y);
//        npc.setPosition(position);
//        npc.setCy(y);
//        npc.setRx0(x + 50);
//        npc.setRx1(x - 50);
//        Foothold fh = getField().findFootHoldBelow(new Position(x, y - 2));
//        if (fh != null) {
//            npc.setFh(getField().findFootHoldBelow(new Position(x, y - 2)).getId());
//        }
//        npc.setNotRespawnable(true);
//
//        getField().spawnLife(npc, getChr());
//    }
//
//    @Override
//    default void npc_ChangeController(int npcId, String npcTag, int x, int y, short fh, short rx0, short rx1, int faceLeft, boolean canMove, short fadeInTime, boolean forceSpawnNew) {
//        Npc var12 = NpcData.getNpcDeepCopyById(npcId);
//
//        if (var12 != null) {
//            var12.setPosition(new Position(x, y));
//            var12.setCy(y);
//            var12.setMove(canMove);
//            var12.setRx0(rx0);
//            var12.setRx1(rx1);
//            var12.setFlip(faceLeft == 0);
//            var12.setFh(fh);
//            var12.setObjectId(NpcData.getCount());
//            var12.setNotRespawnable(true);
//
//            getField().spawnLife(var12, getChr());
//
//
//        }
////        }
//    }
//
//    @Override
//    default void spawnNpc(int npcId, int x, int y, boolean flip) {
//        Npc npc = NpcData.getNpcDeepCopyById(npcId);
//        Position position = new Position(x, y);
//        npc.setPosition(position);
//        npc.setCy(y);
//        npc.setRx0(x + 50);
//        npc.setRx1(x - 50);
//        npc.setFlip(flip);
//        Foothold fh = getField().findFootHoldBelow(new Position(x, y - 2));
//        if (fh != null) {
//            npc.setFh(getField().findFootHoldBelow(new Position(x, y - 2)).getId());
//        }
//        npc.setNotRespawnable(true);
//        if (npc.getField() == null) {
//            npc.setField(getInitData().getField());
//        }
//
//        getField().spawnLife(npc, getChr());
//    }
//
//    @Override
//    default void removeNpc(int npcId) {
//        var npc = getField().getNpcs().stream()
//                .filter(n -> n.getTemplateId() == npcId)
//                .findFirst()
//                .orElse(null);
//        if (npc instanceof Npc) {
//            getField().removeLife(npc);
//        }
//    }
//
//    @Override
//    default void openNpc(int npcId) {
//        Npc npc = NpcData.getNpcDeepCopyById(npcId);
//        String script;
//        if (npc.getScripts().size() > 0) {
//            script = npc.getScripts().get(0);
//        } else {
//            script = String.valueOf(npc.getTemplateId());
//        }
//        getChr().getScriptManager().startScript(npc.getTemplateId(), npcId, script, ScriptType.Npc, null);
//    }
//
//    @Override
//    default void openShop(int shopID) {
//        NpcShopDlg nsd = NpcData.getShopById(shopID);
//        if (nsd != null) {
//            if (getChr().getShop() == null) {
//                getChr().setShop(nsd);
//                if (shopID == 9001212) {
//                    getChr().write(ShopDlg.shopCollectorInit());
//                }
//
//                getChr().write(ShopDlg.openShop(getChr(), 0, nsd));
//            }
//        } else {
//            chat(String.format("Could not find shop with id %d.", shopID));
//            log.error(String.format("Could not find shop with id %d.", shopID));
//        }
//    }
//
//    @Override
//    default void openTrunk(int npcTemplateID) {
//        if (getChr() == null || getChr().isOnline() == false) {
//            log.error(String.format("[CharId: %d] tried to open trunk while being offline.", getInitData().getChr().getId()));
//            return;
//        }
//        getChr().write(FieldPacket.trunkDlg(TrunkDlg.open(npcTemplateID, getChr().getAccount().getTrunk())));
//    }
//
//    @Override
//    default void setSpeakerID(int templateID) {
//        NpcScriptInfo nsi = getInitData().getNpcScriptInfo();
//        nsi.removeParam(NpcScriptInfo.Param.PlayerAsSpeaker);
//        nsi.removeParam(NpcScriptInfo.Param.PlayerAsSpeakerFlip);
//        boolean isNotCancellable = nsi.hasParam(NpcScriptInfo.Param.NotCancellable);
//        nsi.setTemplateID(templateID);
//        if (isNotCancellable) {
//            nsi.addParam(NpcScriptInfo.Param.NotCancellable);
//        }
//    }
//
//    default void setInnerOverrideSpeakerTemplateID(int templateID) {
//        getInitData().getNpcScriptInfo().setInnerOverrideSpeakerTemplateID(templateID);
//    }
//
//    @Override
//    default void setSpeakerType(byte speakerType) {
//        NpcScriptInfo nsi = getInitData().getNpcScriptInfo();
//        nsi.setSpeakerType(speakerType);
//    }
//
//    default void hideNpcByTemplateId(int npcTemplateId, boolean hide) {
//        hideNpcByTemplateId(npcTemplateId, hide, hide);
//    }
//
//    @Override
//    default void hideNpcByTemplateId(int npcTemplateId, boolean hideTemplate, boolean hideNameTag) {
//        Field field = getField();
//        Life life = field.getLifeByTemplateId(npcTemplateId);
//        if (!(life instanceof Npc)) {
//            log.error(String.format("[hideNpcByTemplateId] npc %d is null or not an instance of Npc", npcTemplateId));
//            return;
//        }
//        getChr().write(NpcPool.npcViewOrHide(life.getObjectId(), !hideTemplate, !hideNameTag));
//    }
//
//    default void hideNpcByObjectId(int npcObjId, boolean hide) {
//        hideNpcByObjectId(npcObjId, hide, hide);
//    }
//
//    @Override
//    default void hideNpcByObjectId(int npcObjId, boolean hideTemplate, boolean hideNameTag) {
//        Field field = getField();
//        Life life = field.getLifeByObjectID(npcObjId);
//        if (!(life instanceof Npc)) {
//            log.error(String.format("[hideNpcByObjectId] npc %d is null or not an instance of Npc", npcObjId));
//            return;
//        }
//        getChr().write(NpcPool.npcViewOrHide(life.getObjectId(), !hideTemplate, !hideNameTag));
//    }
//
//    @Override
//    default void moveNpcByTemplateId(int npcTemplateId, boolean left, int distance, int speed) {
//        Field field = getField();
//        Life life = field.getLifeByTemplateId(npcTemplateId);
//        if (!(life instanceof Npc)) {
//            log.error(String.format("[moveNpcByTemplateId] npc %d is null or not an instance of Npc", npcTemplateId));
//            return;
//        }
//        getChr().write(NpcPool.npcSetForceMove(life.getObjectId(), left, distance, speed));
//    }
//
//    @Override
//    default void moveNpcByObjectId(int npcObjId, boolean left, int distance, int speed) {
//        Field field = getField();
//        Life life = field.getLifeByObjectID(npcObjId);
//        if (!(life instanceof Npc)) {
//            log.error(String.format("[moveNpcByObjectId] npc %d is null or not an instance of Npc", npcObjId));
//            return;
//        }
//        getChr().write(NpcPool.npcSetForceMove(life.getObjectId(), left, distance, speed));
//    }
//
//    @Override
//    default void flipNpcByTemplateId(int npcTemplateId, boolean left) {
//        Field field = getField();
//        Life life = field.getLifeByTemplateId(npcTemplateId);
//        if (!(life instanceof Npc)) {
//            log.error(String.format("[flipNpcByTemplateId] npc %d is null or not an instance of Npc", npcTemplateId));
//            return;
//        }
//        getChr().write(NpcPool.npcSetForceFlip(life.getObjectId(), left));
//    }
//
//    @Override
//    default void flipNpcByObjectId(int npcObjId, boolean left) {
//        Field field = getField();
//        Life life = field.getLifeByObjectID(npcObjId);
//        if (!(life instanceof Npc)) {
//            log.error(String.format("[flipNpcByObjectId] npc %d is null or not an instance of Npc", npcObjId));
//            return;
//        }
//        getChr().write(NpcPool.npcSetForceFlip(life.getObjectId(), left));
//    }
//
//    default void showNpcSpecialActionByTemplateId(int npcTemplateId, String effectName) {
//        showNpcSpecialActionByTemplateId(npcTemplateId, effectName, 0);
//    }
//
//    @Override
//    default void showNpcSpecialActionByTemplateId(int npcTemplateId, String effectName, int duration) {
//        Field field = getField();
//        Life life = field.getLifeByTemplateId(npcTemplateId);
//        if (!(life instanceof Npc)) {
//            log.error(String.format("[showNpcSpecialActionByTemplateId] npc %d is null or not an instance of Npc", npcTemplateId));
//            return;
//        }
//        getChr().write(NpcPool.npcSetSpecialAction(life.getObjectId(), effectName, duration));
//    }
//
//    default void showNpcSpecialActionByObjectId(int npcObjId, String effectName) {
//        showNpcSpecialActionByObjectId(npcObjId, effectName, 0);
//
//    }
//
//    @Override
//    default void showNpcSpecialActionByObjectId(int npcObjId, String effectName, int duration) {
//        Field field = getField();
//        Life life = field.getLifeByObjectID(npcObjId);
//        if (!(life instanceof Npc)) {
//            log.error(String.format("[showNpcSpecialActionByObjectId] npc %d is null or not an instance of Npc", npcObjId));
//            return;
//        }
//        getChr().write(NpcPool.npcSetSpecialAction(life.getObjectId(), effectName, duration));
//    }
//
//    default void resetNpcSpecialActionByTemplateId(int templateId) {
//        Field field = getField();
//        Life life = field.getLifeByTemplateId(templateId);
//        if (!(life instanceof Npc)) {
//            log.error(String.format("[resetNpcSpecialActionByTemplateId] npc %d is null or not an instance of Npc", templateId));
//            return;
//        }
//        resetNpcSpecialActionByObjectId(life.getObjectId());
//    }
//
//    default void resetNpcSpecialActionByObjectId(int objectId) {
//        getChr().write(NpcPool.npcResetSpecialAction(objectId));
//    }
//
//    default int getNpcObjectIdByTemplateId(int npcTemplateId) {
//        Field field = getField();
//        Life life = field.getLifeByTemplateId(npcTemplateId);
//        if (!(life instanceof Npc)) {
//            log.error(String.format("[getNpcObjectIdByTemplateId] npc %d is null or not an instance of Npc", npcTemplateId));
//            return 0;
//        }
//        return life.getObjectId();
//    }
//
//
//    // Mob methods
//    @Override
//    default Mob spawnMob(int id) {
//        return spawnMob(id, 0, 0, false);
//    }
//
//    @Override
//    default Mob spawnMob(int id, boolean respawnable) {
//        return spawnMob(id, 0, 0, respawnable);
//    }
//
//    @Override
//    default Mob spawnMobOnChar(int id) {
//        return spawnMob(id, getChr().getPosition().getX(), getChr().getPosition().getY(), false);
//    }
//
//    @Override
//    default Mob spawnMobOnChar(int id, boolean respawnable) {
//        return spawnMob(id, getChr().getPosition().getX(), getChr().getPosition().getY(), respawnable);
//    }
//
//    @Override
//    default Mob spawnMob(int id, int x, int y, boolean respawnable) {
//        return spawnMob(id, x, y, respawnable, 0);
//    }
//
//    default Mob spawnMob(int id, int x, int y) {
//        return spawnMob(id, x, y, false, 0);
//    }
//
//    default Mob spawnMob(int id, int x, int y, long hp) {
//        return spawnMob(id, x, y, false, hp);
//    }
//
//    default Mob spawnMob(int id, int x, int y, boolean respawnable, long hp) {
//        return getField().spawnMob(id, x, y, respawnable, hp);
//    }
//
//    default Mob spawnMobWithAppearType(int id, int x, int y, int appearType, int option) {
//        return getField().spawnMobWithAppearType(id, x, y, appearType, option);
//    }
//
//    @Override
//    default void removeMobByObjId(int id) {
//        getField().removeLife(id);
//        getField().broadcastPacket(MobPool.leaveField(id, DeathType.ANIMATION_DEATH));
//    }
//
//    @Override
//    default void removeMobByTemplateId(int id) {
//        Field field = getField();
//        Life life = field.getLifeByTemplateId(id);
//        if (life == null) {
//            log.error(String.format("Could not find Mob by template id %d.", id));
//            return;
//        }
//        removeMobByObjId(life.getObjectId());
//    }
//
//    default boolean isFinishedEscort(int templateID) {
//        Field field = getField();
//        Life life = field.getLifeByTemplateId(templateID);
//        if (!(life instanceof Mob)) {
//            getChr().dispose();
//            return false;
//        }
//        Mob mob = (Mob) life;
//        boolean finished = mob.isFinishedEscort();
//        if (!finished) {
//            getChr().dispose();
//        }
//        return finished;
//    }
//
//    @Override
//    default void showHP(int templateID) {
//        getField().getMobs().stream()
//                .filter(m -> m.getTemplateId() == templateID)
//                .findFirst()
//                .ifPresent(mob -> getField().broadcastPacket(FieldPacket.fieldEffect(FieldEffect.mobHPTagFieldEffect(mob))));
//    }
//
//    @Override
//    default void showHP() {
//        getField().getMobs().stream()
//                .filter(m -> m.getHp() > 0)
//                .findFirst()
//                .ifPresent(mob -> getField().broadcastPacket(FieldPacket.fieldEffect(FieldEffect.mobHPTagFieldEffect(mob))));
//    }
//
//
//    // Reactor methods
//    @Override
//    default void removeReactor() {
//        Field field = getField();
//        Life life = field.getLifeByObjectID(getObjectIDByScriptType(ScriptType.Reactor));
//        if (life instanceof Reactor) {
//            field.removeLife(life.getObjectId(), false);
//        }
//    }
//
//    @Override
//    default void spawnReactor(int reactorId, int x, int y) {
//        Field field = getField();
//        Reactor reactor = ReactorData.getReactorByID(reactorId);
//        reactor.setPosition(new Position(x, y));
//        field.spawnLife(reactor, null);
//    }
//
//    @Override
//    default boolean hasReactors() {
//        Field field = getField();
//        return field.getReactors().size() > 0;
//    }
//
//    @Override
//    default int getReactorQuantity() {
//        Field field = getField();
//        return field.getReactors().size();
//    }
//
//
//    default int getReactorState(int reactorId) {
//        Field field = getField();
//        Life life = field.getLifeByTemplateId(reactorId);
//        if (life != null && life instanceof Reactor) {
//            Reactor reactor = (Reactor) life;
//            return reactor.getState();
//        }
//        return -1;
//    }
//
//    default void increaseReactorState(int reactorId, int stateLength) {
//        getField().increaseReactorState(getChr(), reactorId, stateLength);
//    }
//
//    default void changeReactorStateByTemplateId(int templateId, byte state, short delay, byte stateLength) {
//        Field field = getField();
//        Set<Reactor> reactors = field.getReactors().stream()
//                .filter(r -> r.getTemplateId() == templateId)
//                .collect(Collectors.toSet());
//
//        for (var reactor : reactors) {
//            reactor.setState(state);
//            getField().broadcastPacket(ReactorPool.reactorChangeState(reactor, delay, stateLength));
//        }
//    }
//
//
//    // Party-related methods -------------------------------------------------------------------------------------------
//
//    @Override
//    default Party getParty() {
//        return getChr().getParty();
//    }
//
//    @Override
//    default Party createSoloParty() {
//        Party party = Party.createNewParty(
//                false,
//                true,
//                getChr().getName() + "'s party",
//                getChr().getClient().getWorld()
//        );
//        party.addPartyMember(getChr());
//        party.broadcast(WvsContext.partyResult(PartyResult.createNewParty(party)));
//
//        return party;
//    }
//
//    @Override
//    default int getPartySize() {
//        return getParty().getMembers().size();
//    }
//
//    @Override
//    default boolean isPartyLeader() {
//        return getChr().getParty() != null && getChr().getParty().getPartyLeaderID() == getChr().getId();
//    }
//
//    default boolean checkParty() {
//        return checkParty(null);
//    }
//
//    @Override
//    default boolean checkParty(BossCooldown bossCooldown) {
//        return checkParty(bossCooldown, 0);
//    }
//
//    @Override
//    default boolean checkParty(BossCooldown bossCooldown, int reqLevel) {
//        if (getChr().getParty() == null) {
//            chat("You are not in a party.");
//            return false;
//        } else if (!isPartyLeader()) {
//            chat("You are not the party leader.");
//            return false;
//        }
//        boolean res = true;
//        Char leader = getChr().getParty().getPartyLeader().getChr();
//        if (leader == null) {
//            chat("Your leader is currently offline.");
//            res = false;
//        } else {
//            for (PartyMember partyMember : getChr().getParty().getPartyMembers()) {
//                if (partyMember != null) {
//                    Char pmChr = partyMember.getChr();
//                    String name = pmChr.getName();
//                    if (!pmChr.isOnline()) {
//                        chat(name + " is not online.");
//                        res = false;
//                    } else if (pmChr.getField() != getChr().getField()) {
//                        chat(name + " is not in the same map as you.");
//                        res = false;
//                    } else if (pmChr.getInstance() != null) {
//                        // kinda overlaps with the above check, but to prevent weird stuff from happening
//                        chat(name + " is already in their own instance.");
//                        res = false;
//                    } else if (bossCooldown != null && pmChr.getAccount().isOnBossCooldown(bossCooldown)) {
//                        int totalMinutes = pmChr.getScriptManager().getRemainingBossCooldownMinutes(bossCooldown);
//                        int hours = totalMinutes / 60;
//                        int minutes = totalMinutes % 60;
//
//                        chat(String.format("%s has recently fought this boss. Time remaining: %s hours and %s minutes.", name, hours, minutes));
//                        res = false;
//                    }
//                    if (pmChr.getLevel() < reqLevel) {
//                        chat(pmChr.getName() + " doesn't meet the required level to enter.");
//                        return false;
//                    }
//                }
//            }
//        }
//        return res;
//    }
//
//    default List<Char> getOnlinePartyMembers() {
//        Party party = getParty();
//        if (party == null) {
//            return new ArrayList<>();
//        }
//        return party.getOnlineChars();
//    }
//
//    default List<Char> getPartyMembersInSameField(Char chr) {
//        Party party = getParty();
//        if (party == null) {
//            return new ArrayList<>();
//        }
//        List<Char> list = new ArrayList<>(party.getPartyMembersInSameField(chr));
//        list.add(chr);
//        return new ArrayList<>(list);
//    }
//
//
//    // Guild/Alliance related methods -------------------------------------------------------------------------------------------
//
//    @Override
//    default void showGuildCreateWindow() {
//        getChr().write(WvsContext.guildResult(GuildResult.msg(GuildType.Req_InputGuildName)));
//    }
//
//    @Override
//    default boolean checkAllianceName(String name) {
//        World world = getChr().getClient().getWorld();
//        return world.getAlliance(name) == null;
//    }
//
//    default void incrementMaxGuildMembers(int amount) {
//        Guild guild = getChr().getGuild();
//        guild.setMaxMembers(guild.getMaxMembers() + amount);
//        guild.broadcast(WvsContext.guildResult(GuildResult.incMaxMemberNum(guild)));
//    }
//
//    default void createAlliance(String name, Char other) {
//        Alliance alliance = new Alliance(true);
//        alliance.setName(name);
//        alliance.addGuild(getChr().getGuild());
//        alliance.addGuild(other.getGuild());
//        GuildMember chrMember = getChr().getGuild().getMemberByCharID(getChr().getId());
//        chrMember.setAllianceGrade(1);
//        GuildMember otherMember = other.getGuild().getMemberByCharID(other.getId());
//        otherMember.setAllianceGrade(2);
//        allianceDao.saveOrUpdate(alliance);
//        getChr().getGuild().setAlliance(alliance);
//        other.getGuild().setAlliance(alliance);
//        alliance.broadcast(WvsContext.allianceResult(AllianceResult.createDone(alliance)));
//        getChr().deductMoney(5000000);
//
//        getChr().getWorld().addAlliance(alliance);
//    }
//
//
//    // Chat-related methods --------------------------------------------------------------------------------------------
//
//    @Override
//    default void chat(String text) {
//        chatRed(text);
//    }
//
//    @Override
//    default void chatRed(String text) {
//        getChr().chatMessage(SystemNotice, text);
//    }
//
//    @Override
//    default void chatBlue(String text) {
//        getChr().chatMessage(Notice2, text);
//    }
//
//    default void systemMessage(String message) {
//        getChr().write(WvsContext.message(MessagePacket.systemMessage(message)));
//    }
//
//    @Override
//    default void chatScript(String text) {
//        getChr().chatScriptMessage(text);
//    }
//
//    default void showWeatherNotice(String text, WeatherEffNoticeType type) {
//        showWeatherNotice(text, type, 7000); // 7 seconds
//    }
//
//    @Override
//    default void showWeatherNotice(String text, WeatherEffNoticeType type, int duration) {
//        getField().broadcastPacket(WvsContext.weatherEffectNotice(type, text, duration));
//    }
//
//
//    // Inventory-related methods ---------------------------------------------------------------------------------------
//
//    @Override
//    default void giveMesos(long mesos) {
//        getChr().addMoney(mesos);
//        getChr().write(WvsContext.message(MessagePacket.incMoneyMessage(mesos)));
//    }
//
//    @Override
//    default void deductMesos(long mesos) {
//        getChr().deductMoney(mesos);
//        getChr().write(WvsContext.message(MessagePacket.incMoneyMessage(-mesos)));
//    }
//
//    @Override
//    default long getMesos() {
//        return getChr().getMoney();
//    }
//
//    @Override
//    default void giveItem(int id) {
//        giveItem(id, 1);
//    }
//
//    @Override
//    default void giveItem(int id, int quantity) {
//        getChr().addItemToInventory(id, quantity);
//        String itemName = StringData.getItemStringById(id);
//        if (itemName != null) {
//            getChr().chatMessage(GameDesc, String.format("You've gained items: %s. (%d)", itemName, quantity));
//        }
//    }
//
//    default void giveItemWithExpiry(int id, int hours) {
//        var item = ItemData.getItemDeepCopy(id);
//        item.setDateExpire(FileTime.fromDate(LocalDateTime.now().plusHours(hours)));
//        item.setQuantity(1);
//        getChr().addItemToInventory(item);
//
//        String itemName = StringData.getItemStringById(id);
//        if (itemName != null) {
//            getChr().chatMessage(GameDesc, String.format("You've gained items: %s. (Expires in %d hours)", itemName, hours));
//        }
//    }
//
//    default void giveAndEquip(int id) {
//        if (!ItemConstants.isEquip(id)) {
//            giveItem(id);
//        }
//        Item equip = ItemData.getItemDeepCopy(id);
//        if (equip == null) {
//            return;
//        }
//
//        // replace the old equip if there was any
//        Inventory equipInv = getChr().getEquippedInventory();
//        int bodyPart = ItemConstants.getBodyPartFromItem(id, getChr().getAvatarData().getAvatarLook().getGender());
//        Item oldEquip = equipInv.getItemBySlot(bodyPart);
//        if (oldEquip != null) {
//            int newSlot = getChr().getEquipInventory().getFirstOpenSlot();
//            getChr().unequip(oldEquip);
//            oldEquip.setBagIndex(newSlot);
//            oldEquip.updateToChar(getChr());
//        }
//        equip.setBagIndex(bodyPart);
//        getChr().equip(equip, bodyPart);
//        equip.updateToChar(getChr());
//    }
//
//    default void giveNewSecondary(int id) {
//        if (!ItemConstants.isEquip(id)) {
//            giveItem(id);
//        }
//        Item newEquipItem = ItemData.getItemDeepCopy(id);
//        if (newEquipItem == null) {
//            return;
//        }
//
//        var newEquip = (Equip) newEquipItem;
//        // replace the old equip if there was any
//        Inventory equipInv = getChr().getEquippedInventory();
//        int bodyPart = ItemConstants.getBodyPartFromItem(id, getChr().getAvatarData().getAvatarLook().getGender());
//        Item oldEquip = equipInv.getItemBySlot(bodyPart);
//        if (oldEquip != null) {
//            newEquip.setOptions(new ArrayList<>(((Equip) oldEquip).getOptions()));
//            getChr().consumeItemFull(oldEquip);
//        }
//        newEquip.setBagIndex(bodyPart);
//        getChr().equip(newEquip, bodyPart);
//        newEquip.updateToChar(getChr());
//    }
//
//    default String enumerateInventory(InvType invType) {
//        var inv = getChr().getInventoryByType(invType);
//
//        StringBuilder sb = new StringBuilder();
//        inv.sortItemsByIndex();
//        for (var item : inv.getItemsNotInBag().stream().filter(i -> !i.isBagItemOwner()).collect(Collectors.toList())) {
//            sb.append(String.format("#b#L%d##i%d##t%dl#\r\n", item.getBagIndex(), item.getItemId(), item.getItemId()));
//        }
//        sb.append("#k");
//
//        return sb.toString();
//    }
//
//    default String enumerateList(String[] strings) {
//        var sb = new StringBuilder();
//        var i = 0;
//        for (var str : strings) {
//            sb.append(String.format("#b#L%d#%s#l\r\n", i++, str));
//        }
//        sb.append("#k");
//        return sb.toString();
//    }
//
//    @Override
//    default boolean hasItem(int id) {
//        return hasItem(id, 1);
//    }
//
//    @Override
//    default boolean isEquipped(int id) {
//        return getChr().getInventoryByType(InvType.EQUIPPED).getItems().stream()
//                .anyMatch(item -> item.getItemId() == id);
//    }
//
//    @Override
//    default boolean hasItem(int id, int quantity) {
//        return getQuantityOfItem(id) >= quantity;
//    }
//
//    default void consumeItem() {
//        consumeItem(getScriptInfoByType(ScriptType.Item).getParentID());
//    }
//
//    @Override
//    default void consumeItem(int itemID) {
//        getChr().consumeItem(itemID, 1);
//        String itemName = StringData.getItemStringById(itemID);
//        if (itemName != null) {
//            getChr().chatMessage(GameDesc, String.format("You've lost an item: %s.", itemName));
//        }
//    }
//
//    @Override
//    default void consumeItem(int itemID, int amount) {
//        getChr().consumeItem(itemID, amount);
//        String itemName = StringData.getItemStringById(itemID);
//        if (itemName != null) {
//            getChr().chatMessage(GameDesc, String.format("You've lost items: %s. (-%d)", itemName, amount));
//        }
//    }
//
//    default void consumeItem(Item item, int amount) {
//        getChr().consumeItem(item, amount);
//        String itemName = StringData.getItemStringById(item.getItemId());
//        if (itemName != null) {
//            getChr().chatMessage(GameDesc, String.format("You've lost items: %s. (-%d)", itemName, amount));
//        }
//    }
//
//    default void unequip(Item item) {
//        if (item instanceof Equip) {
//            var equip = (Equip) item;
//            int oldBagIndex = item.getBagIndex();
//            getChr().unequip(equip);
//            equip.setBagIndex(getChr().getEquipInventory().getFirstOpenSlot());
//            equip.updateToChar(getChr());
//            getChr().write(WvsContext.inventoryOperation(true, false, InventoryOperation.Move,
//                    (short) -oldBagIndex, (short) equip.getBagIndex(), 0, equip));
//            getChr().write(WvsContext.inventoryOperation(true, false, InventoryOperation.Remove,
//                    (short) -oldBagIndex, (short) 0, 0, equip));
//        }
//    }
//
//    @Override
//    default void useItem(int id) {
//        ItemBuffs.giveItemBuffsFromItemID(getChr(), getChr().getTemporaryStatManager(), id);
//    }
//
//    @Override
//    default int getQuantityOfItem(int id) {
//        var item2 = ItemData.getItemDeepCopy(id);
//        var invType = item2.getInvType();
//        return getChr().getInventoryByType(invType).getQuantity(id);
//    }
//
//    @Override
//    default boolean canHold(int id) {
//        return getChr().canHoldItem(id, 1);
//    }
//
//    @Override
//    default boolean canHold(int id, int quantity) {
//        return getChr().canHold(id, quantity);
//    }
//
//    @Override
//    default int getEmptyInventorySlots(InvType invType) {
//        return getChr().getInventoryByType(invType).getEmptySlots();
//    }
//
//    default boolean hasAnyFullInventory() {
//        for (var inv : getChr().getInventories()) {
//            if (inv.isFull()) {
//                return true;
//            }
//        }
//
//        return false;
//    }
//
//    default boolean itemHasWantedStats(Map<String, Integer> wantedStats, int bagIndex, boolean bonus) {
//        if (wantedStats.isEmpty()) {
//            return false;
//        }
//
//        InvType invType = InvType.EQUIP;
//        if (bagIndex >= 1000) {
//            bagIndex = bagIndex % 1000;
//            invType = InvType.EQUIPPED;
//        }
//
//        Equip equip = (Equip) getChr().getInventoryByType(invType).getItemBySlot(bagIndex);
//        for (Map.Entry<String, Integer> entry : wantedStats.entrySet()) {
//            BaseStat bs = BaseStat.getBaseStatByName(entry.getKey());
//            int wantedAmount = entry.getValue();
//            int amount = equip.getPotentialStat(bs, bonus);
//            switch (bs) {
//                case str:
//                case dex:
//                case inte:
//                case luk:
//                    amount += equip.getPotentialStat(BaseStat.allStat, bonus);
//                    break;
//                case strR:
//                case dexR:
//                case intR:
//                case lukR:
//                    amount += equip.getPotentialStat(BaseStat.allStatR, bonus);
//                    break;
//                case allStat:
//                    int minAmount = equip.getPotentialStat(BaseStat.str, bonus);
//                    for (BaseStat stat : BaseStat.getMainStats()) {
//                        int statAmount = equip.getPotentialStat(stat, bonus);
//                        if (statAmount < minAmount) {
//                            minAmount = statAmount;
//                        }
//                    }
//                    amount = minAmount;
//                    break;
//                case allStatR:
//                    minAmount = equip.getPotentialStat(BaseStat.strR, bonus);
//                    for (BaseStat stat : BaseStat.getMainStatsPerc()) {
//                        int statAmount = equip.getPotentialStat(stat, bonus);
//                        if (statAmount < minAmount) {
//                            minAmount = statAmount;
//                        }
//                    }
//                    amount = minAmount;
//                    break;
//            }
//            if (amount < wantedAmount) {
//                return false;
//            }
//        }
//        return true;
//    }
//
//    default void batchRemoveItems(List<Item> items) {
//        InventoryModule.removeItems(getInitData().getChr(), items.stream().collect(Collectors.toMap(item -> item, Item::getQuantity)));
//    }
//
//
//    // Quest-related methods -------------------------------------------------------------------------------------------
//
//    @Override
//    default void completeQuest(int questID) {
//        if (hasQuest(questID) && isComplete(questID)) {
//            completeQuestNoCheck(questID);
//        }
//    }
//
//    @Override
//    default void completeQuestNoCheck(int questID) {
//        getChr().getQuestManager().completeQuest(questID);
//    }
//
//    @Override
//    default void completeQuestNoRewards(int id) {
//        QuestManager qm = getChr().getQuestManager();
//        Quest quest = qm.getQuestById(id);
//        if (quest == null) {
//            quest = QuestData.createQuestFromId(id);
//        }
//        quest.setCompletedTime(FileTime.currentTime());
//        quest.setStatus(QuestStatus.Completed);
//        qm.addQuest(quest);
//        qm.checkAndAddCompletedAccountQuest(id);
//        getChr().write(WvsContext.message(MessagePacket.questRecordMessage(quest)));
//
////        chr.chatMessage(String.format("Quest %d completed by completeQuestNoRewards", id));
//    }
//
//    @Override
//    default void startQuestNoCheck(int id) {
//        QuestManager qm = getChr().getQuestManager();
//        qm.addQuest(QuestData.createQuestFromId(id));
////        chr.chatMessage(String.format("Quest %d started by startQuestNoCheck", id));
//    }
//
//    @Override
//    default void startQuest(int id) {
//        QuestManager qm = getChr().getQuestManager();
//        if (qm.canStartQuest(id)) {
//            qm.addQuest(QuestData.createQuestFromId(id));
//        } else {
//            getInitData().getChr().chatMessage("You don't fit the requirements to start this quest, if you think this is unintended, please report this to the Bug-reports channel in the discord.");
//        }
//    }
//
//    @Override
//    default boolean hasQuest(int id) {
//        return getChr().getQuestManager().hasQuestInProgress(id);
//    }
//
//    @Override
//    default boolean hasQuestCompleted(int id) {
//        return getChr().getQuestManager().hasQuestCompleted(id);
//    }
//
//    default boolean hasHadQuest(int id) {
//        return hasQuest(id) || hasQuestCompleted(id);
//    }
//
//    default void createQuestWithQRValue(int questId, String qrValue, boolean ex) {
//        createQuestWithQRValue(getChr(), questId, qrValue, ex);
//    }
//
//    default void createQuestWithQRValue(int questId, String qrValue) {
//        createQuestWithQRValue(getChr(), questId, qrValue, true);
//    }
//
//    default void createQuestWithQRValue(Char chr, int questId, String qrValue) {
//        createQuestWithQRValue(chr, questId, qrValue, true);
//    }
//
//    default void createQuestWithQRValue(Char character, int questId, String qrValue, boolean ex) {
//        QuestManager qm = character.getQuestManager();
//        Quest quest = qm.getQuestById(questId);
//        if (quest == null) {
//            quest = QuestData.createQuestFromId(questId);
//            quest.setQrValue(qrValue);
//            qm.addCustomQuest(quest);
//        }
//        quest.setQrValue(qrValue);
//        updateQRValue(questId, ex);
//    }
//
//    default void deleteQuest(int questId) {
//        deleteQuest(getChr(), questId);
//    }
//
//    default void deleteQuest(Char chr, int questId) {
//        QuestManager qm = chr.getQuestManager();
//        Quest quest = qm.getQuestById(questId);
//        if (quest == null) {
//            return;
//        }
//        qm.removeQuest(quest.getQRKey());
//    }
//
//    default String getQRValue(int questId) {
//        return getQRValue(getChr(), questId);
//    }
//
//    default String getQRValue(int questId, String questKey) {
//        Quest quest = getChr().getQuestManager().getQuestById(questId);
//        if (quest == null) {
//            return "";
//        }
//        return quest.getProperty(questKey);
//    }
//
//    default String getQRValue(Char chr, int questId) {
//        Quest quest = chr.getQuestManager().getQuestById(questId);
//        if (quest == null) {
//            return "";
//        }
//        return quest.getQRValue();
//    }
//
//    default boolean hasQuestWithValue(int qrKey, String str) {
//        Quest quest = getChr().getQuestManager().getQuestById(qrKey);
//        if (quest == null) {
//            return false;
//        }
//        return quest.getQRValue().contains(str);
//    }
//
//    default void setQRValue(int questId, String qrValue) {
//        setQRValue(questId, qrValue, true);
//    }
//
//    default void setQRValue(int questId, String key, String value) {
//        QuestManager qm = getChr().getQuestManager();
//        Quest quest = qm.getQuestById(questId);
//        if (quest == null) {
//            quest = QuestData.createQuestFromId(questId);
//            qm.addQuest(quest);
//        }
//        quest.setProperty(key, value);
//        getChr().write(WvsContext.message(MessagePacket.questRecordExMessage(quest)));
//    }
//
//    default void setQRValue(int questId, String qrValue, boolean ex) {
//        setQRValue(getChr(), questId, qrValue, ex);
//    }
//
//    default void setQRValue(Char chr, int questId, String qrValue, boolean ex) {
//        Quest quest = chr.getQuestManager().getQuestById(questId);
//        if (quest == null) {
//            quest = QuestData.createQuestFromId(questId);
//            chr.getQuestManager().addQuest(quest);
//        }
//        quest.setQrValue(qrValue);
//        updateQRValue(questId, ex);
//    }
//
//    default void addQRValue(int questId, String qrValue) {
//        addQRValue(questId, qrValue, true);
//    }
//
//    default void addQRValue(int questId, String qrValue, boolean ex) {
//        String qrVal = getQRValue(questId);
//        if (qrVal.equals("")) {
//            createQuestWithQRValue(questId, qrValue);
//            return;
//        }
//        setQRValue(questId, qrValue + ";" + qrVal);
//        updateQRValue(questId, ex);
//    }
//
//    default boolean isComplete(int questID) {
//        return getChr().getQuestManager().isComplete(questID);
//    }
//
//    default void updateQRValue(int questId, boolean ex) {
//        Quest quest = getChr().getQuestManager().getQuestById(questId);
//        if (quest == null) {
//            log.error(String.format("The user does not have the quest %d.", questId));
//            return;
//        }
//        if (ex) {
//            getChr().write(WvsContext.message(MessagePacket.questRecordMessage(quest)));
//            getChr().write(WvsContext.message(MessagePacket.questRecordExMessage(quest)));
//        } else {
//            getChr().write(WvsContext.message(MessagePacket.questRecordMessage(quest)));
//        }
//    }
//
//    default String getCurrentDateAsString() {
//        return FileTime.currentTime().toYYMMDD();
//    }
//
//
//    // Party Quest-related methods -------------------------------------------------------------------------------------
//
//    default String getDay() {
//        return new SimpleDateFormat("EEEE", Locale.ENGLISH).format(System.currentTimeMillis());
//    }
//
//    default int getMPExpByMobId(int templateId) {
//        return MonsterPark.getExpByMobId(templateId);
//    }
//
//    default int getMPReward() {
//        return MonsterPark.getRewardByDay();
//    }
//
//    default long getPQExp() {
//        return getPQExp(getChr());
//    }
//
//    default long getPQExp(Char chr) {
//        return GameConstants.PARTY_QUEST_EXP_FORMULA(chr);
//    }
//
//    // true if everyone is good. false is someone is above max floors per day
//    default boolean checkOzFloorRequirement(Char chr, Party party) {
//        if (party == null) {
//            var q = chr.getQuestManager().getOrCreateQuestById(QuestConstants.TOWER_OF_OZ_DAILY_CLEARS);
//            return q.getIntProperty("tf") < OzConstants.MAX_FLOORS_PER_DAY;
//        } else {
//            for (var c : party.getPartyMembersInField(chr)) {
//                var q = c.getQuestManager().getOrCreateQuestById(QuestConstants.TOWER_OF_OZ_DAILY_CLEARS);
//                if (q.getIntProperty("tf") >= OzConstants.MAX_FLOORS_PER_DAY) {
//                    return false;
//                }
//            }
//            return true;
//        }
//    }
//
//
//    // Boss-related methods --------------------------------------------------------------------------------------------
//
//    @Override
//    default void setDeathCount(int deathCount) {
//        Instance info = getChr().getInstance();
//        if (info == null) {
//            getChr().setDeathCount(deathCount);
//            getChr().write(UserLocal.deathCountInfo(deathCount));
//        } else {
//            for (Char chr : info.getChars()) {
//                chr.setDeathCount(deathCount);
//                chr.write(UserLocal.deathCountInfo(deathCount));
//            }
//        }
//    }
//
//    default void setDeathCount2(int deathCount) {
//        Instance info = getChr().getInstance();
//        if (info == null) {
//            getChr().setDeathCount(deathCount);
//            getChr().write(UserLocal.deathCountInfo2(deathCount));
//        } else {
//            for (Char chr : info.getChars()) {
//                chr.setDeathCount(deathCount);
//                chr.write(UserLocal.deathCountInfo2(deathCount));
//            }
//        }
//    }
//
//    default void createObstacleAtom(ObstacleAtomEnum oae, int key, int damage, int velocity, int amount, int proc) {
//        createObstacleAtom(oae, key, damage, velocity, 0, amount, proc);
//    }
//
//    @Override
//    default void createObstacleAtom(ObstacleAtomEnum oae, int key, int damage, int velocity, int angle, int amount, int proc) {
//        Field field = getField();
//        var fieldInfo = field.getInfo();
//        int xLeft = fieldInfo.getVrLeft();
//        int yTop = fieldInfo.getVrTop();
//
//        ObstacleInRowInfo obstacleInRowInfo = new ObstacleInRowInfo(4, false, 5000, 0, 0, 0);
//        ObstacleRadianInfo obstacleRadianInfo = new ObstacleRadianInfo(4, 0, 0, 0, 0);
//        Set<ObstacleAtomInfo> obstacleAtomInfosSet = new HashSet<>();
//
//        for (int i = 0; i < amount; i++) {
//            if (Util.succeedProp(proc)) {
//                int randomX = new Random().nextInt(fieldInfo.getWidth()) + xLeft;
//                Position position = new Position(randomX, yTop);
//                Foothold foothold = field.findFootHoldBelow(position);
//                if (foothold != null) {
//                    int footholdY = foothold.getYFromX(position.getX());
//                    int height = position.getY() - footholdY;
//                    height = height < 0 ? -height : height;
//
//                    obstacleAtomInfosSet.add(new ObstacleAtomInfo(oae.getType(), key, position, new Position(), oae.getHitBox(),
//                            damage, 0, 0, height, 0, velocity, height, angle));
//                }
//            }
//        }
//
//        field.broadcastPacket(FieldPacket.createObstacle(ObstacleAtomCreateType.NORMAL, obstacleInRowInfo, obstacleRadianInfo, obstacleAtomInfosSet));
//    }
//
//    default void createObstacleAtomToFoothold(ObstacleAtomEnum oae, Rect allowedFhsRect, int damage, int velocity, int angle, int amount, int chance) {
//        var oact = ObstacleAtomCreateType.NORMAL;
//
//        ObstacleInRowInfo oiri = null;
//        ObstacleRadianInfo ori = null;
//
//        var field = getField();
//        if (field == null) {
//            return;
//        }
//        var allowedFhs = field.getNonWallFootholdsWithinRect(allowedFhsRect);
//
//        Set<ObstacleAtomInfo> atomInfos = ObstacleAtomFactory.createObstacleAtoms(oae, allowedFhs,
//                field.getInfo().getVrTop(), damage, velocity, angle, chance, amount);
//
//        getChr().write(FieldPacket.createObstacle(oact, oiri, ori, atomInfos));
//    }
//
//    @Override
//    default void stopFieldEvents() {
//        var events = getEvents();
//        if (events.size() <= 0) {
//            return;
//        }
//
//        var removedTimers = new HashSet<ScheduledFuture>();
//        for (var entry : events.entrySet()) {
//            var st = entry.getKey();
//            var isFieldEvent = entry.getValue();
//            if (isFieldEvent) {
//                EventManager.stopTimer(st);
//                removedTimers.add(st);
//            }
//        }
//
//        for (var st : removedTimers) {
//            events.remove(st);
//        }
//    }
//
//    default void stopEvents() {
//        var events = getEvents();
//        for (ScheduledFuture st : events.keySet()) {
//            EventManager.stopTimer(st);
//        }
//        events.clear();
//        Field field = getField();
//        Arrays.stream(ScriptType.values()).forEach(this::stopJs);
//        if (field != null) {
//            field.broadcastPacket(FieldPacket.clock(ClockPacket.removeClock()));
//        }
//        var chr = getChr();
//        if (chr != null) {
//            chr.write(FieldPacket.updateTemporarySkillBar(0)); // resets special skill bar
//            chr.getTemporaryStatManager().removeStatsBySkill(237); // Damien Stigma
//        }
//    }
//
//    default Map<ScheduledFuture, Boolean> getEvents() {
//        return getInitData().getEvents();
//    }
//
//    default void addEvent(ScheduledFuture event) {
//        addEvent(event, false);
//    }
//
//    default void addEvent(ScheduledFuture event, boolean isFieldEvent) {
//        getEvents().put(event, isFieldEvent);
//    }
//
//    default void showGolluxMiniMap() {
//        List<Integer> fieldIdList = Arrays.asList(
//                863010100,    // Road to Gollux
//
//                863010200,    // Lower Right leg
//                863010210,    // Upper Right Leg
//                863010220,    // Lower Left Leg
//                863010230,    // Upper Left Leg
//                863010240,    // Abdomen
//
//                863010300,    // Lower Left Torso
//                863010310,    // Upper Left Torso
//                863010320,    // Upper Right Arm
//                863010330,    // Right Shoulder
//
//                863010400,    // Lower Right Torso
//                863010410,    // Upper Right Torso
//                863010420,    // Upper Left Arm
//                863010430,    // Left Shoulder
//
//                863010500,    // Heart
//
//                863010600    // Head
//        );
//        Map<String, GolluxMiniMapFieldClearType> gFieldMap = new HashMap<>();
//        gFieldMap.put("clearType", GolluxMiniMapFieldClearType.Defeated);
//
//        for (int gFieldId : fieldIdList) {
//            Field gField = getChr().getInstance().getFields().get(gFieldId);
//            if (gField == null) {
//                continue;
//            }
//
//            if (gField.hasProperty("Killed") && (boolean) gField.getProperty("Killed")) {
//                gFieldMap.put(gFieldId + "", GolluxMiniMapFieldClearType.Defeated);
//            } else if (gField.hasProperty("Spawned") && (boolean) gField.getProperty("Spawned")) {
//                gFieldMap.put(gFieldId + "", GolluxMiniMapFieldClearType.Attacked);
//            } else {
//                gFieldMap.put(gFieldId + "", GolluxMiniMapFieldClearType.Unvisited);
//            }
//        }
//
//        getChr().getInstance().broadcast(GiantBossFieldPacket.golluxMiniMap(gFieldMap));
//    }
//
//    default void golluxPortalOpen(String happeningName) {
//        getField().broadcastPacket(GiantBossFieldPacket.golluxPortalOpen(happeningName));
//    }
//
//
//    // Union-related methods -------------------------------------------------------------------------------------------
//
//    default int getUnionCoin() {
//        return getChr().getUnion().getUnionCoin();
//    }
//
//    default void addUnionCoin(int amount, boolean fromRaid) {
//        if (fromRaid) {
//            if (getInitData().getChr().getUnionRaid() != null) {
//                getInitData().getChr().getUnionRaid().addUnclaimedCoins(getInitData().getChr(), -amount);
//            } else {
//                return;
//            }
//        }
//        Union union = getChr().getUnion();
//        union.addUnionCoin(amount);
//    }
//
//    default int getUnionRank() {
//        return getChr().getUnion().getUnionRank();
//    }
//
//    default int getUnionRankIndex() {
//        int high = getUnionRank() / 100;
//        int low = getUnionRank() % 100;
//        return (low - 1) + (high - 1) * 5;
//    }
//
//    default boolean isMaxUnionRank() {
//        return getUnionRank() == 405;
//    }
//
//    default String getUnionRankName() {
//        return UnionMember.ranks[getUnionRankIndex()];
//    }
//
//    default String getUnionNextRankName() {
//        return UnionMember.ranks[isMaxUnionRank() ? getUnionRankIndex() : getUnionRankIndex() + 1];
//    }
//
//    default int getUnionCoinReq() {
//        return UnionMember.reqCoin[getUnionRankIndex()];
//    }
//
//    default int getUnionLevelReq() {
//        return UnionMember.reqLev[getUnionRankIndex()];
//    }
//
//    default int getUnionLevel() {
//        int total = 0;
//        for (Char chr : getChr().getUnion().getEligibleUnionChars()) {
//            total += chr.getLevel();
//        }
//        return total;
//    }
//
//    default int getUnionCharacterCount() {
//        return getChr().getUnion().getEligibleUnionChars().size();
//    }
//
//    default int getUnionAssignedCharacterCount() {
//        return getChr().getUnion().getActiveUnionChars(getChr().getActiveUnionPreset()).size();
//    }
//
//    default int getUnionAssignedMaxCharacterCount() {
//        return UnionMember.attackerCount[getUnionRankIndex()];
//    }
//
//    default int getUnionAssignedNextMaxCharacterCount() {
//        return UnionMember.attackerCount[isMaxUnionRank() ? getUnionRankIndex() : getUnionRankIndex() + 1];
//    }
//
//    default void incrementUnionRank() {
//        getChr().incrementUnionRank();
//    }
//
//    default void spawnDragonWhelps() {
//        if (FieldConstants.isUnionRaidField(getFieldID()) && getChr().getInstance() != null) {
//            Field field = getField();
//
//            for (int i = 0; i < 10; i++) {
//                if (field.getMobs().size() > 15) {
//                    continue;
//                }
//
//                int dragon = Util.getRandomFromCollection(UnionRaid.mobs);
//                Position position = Util.getRandomFromCollection(UnionRaid.positions);
//
//                if (Util.succeedProp(5) && i == 5) {
//                    dragon = 9833111; // Golden Whelp
//                }
//                Mob mob = field.spawnMob(dragon, position.getX(), position.getY(), false, 50_000_000L);
//                if (getChr() != null) {
//                    mob.setLevel(getChr().getLevel());
//                }
//            }
//        }
//    }
//
//
//    // Character Temporary Stat-related methods ------------------------------------------------------------------------
//
//    @Override
//    default void giveCTS(CharacterTemporaryStat cts, int nOption, int rOption, int time) {
//        TemporaryStatManager tsm = getChr().getTemporaryStatManager();
//        Option o = new Option();
//        o.nOption = nOption;
//        o.rOption = rOption;
//        o.tOption = time;
//        tsm.putCharacterStatValue(cts, o);
//        tsm.sendSetStatPacket();
//    }
//
//    @Override
//    default void removeCTS(CharacterTemporaryStat cts) {
//        TemporaryStatManager tsm = getChr().getTemporaryStatManager();
//        tsm.removeStat(cts);
//    }
//
//    @Override
//    default void removeBuffBySkill(int skillId) {
//        TemporaryStatManager tsm = getChr().getTemporaryStatManager();
//        tsm.removeStatsBySkill(skillId);
//    }
//
//    @Override
//    default boolean hasCTS(CharacterTemporaryStat cts) {
//        TemporaryStatManager tsm = getChr().getTemporaryStatManager();
//        return tsm.hasStat(cts);
//    }
//
//    @Override
//    default int getnOptionByCTS(CharacterTemporaryStat cts) {
//        TemporaryStatManager tsm = getChr().getTemporaryStatManager();
//        return hasCTS(cts) ? tsm.getOption(cts).nOption : 0;
//    }
//
//    @Override
//    default void rideVehicle(int mountID) {
//        TemporaryStatManager tsm = getChr().getTemporaryStatManager();
//        TemporaryStatBase tsb = tsm.getTSBByTSIndex(TSIndex.RideVehicle);
//
//        tsb.setNOption(mountID);
//        tsb.setROption(0);
//        tsm.putCharacterStatValue(RideVehicle, tsb.getOption());
//        tsm.sendSetStatPacket();
//    }
//
//    default void consumeLiver() {
//        if (JobConstants.isShade(getInitData().getChr().getJob())) {
//            ((Shade) getInitData().getChr().getJobHandler()).extendSpiritBondMax();
//        }
//    }
//
//
//    // InGameDirectionEvent methods ------------------------------------------------------------------------------------
//
//    @Override
//    default int moveCamera(boolean back, int speed, int x, int y) {
//
//        getInitData().getNpcScriptInfo().setMessageType(NpcMessageType.AskIngameDirection);
//        getChr().write(UserLocal.inGameDirectionEvent(InGameDirectionEvent.cameraMove(back, speed, new Position(x, y))));
//        Object response = null;
//        var lastActiveScriptType = getLastActiveScriptType();
//        if (getInitData().isActive(lastActiveScriptType)) {
//            response = getScriptInfoByType(lastActiveScriptType).awaitResponse();
//        }
//        if (response == null) {
//            throw new NullPointerException(INTENDED_NPE_MSG);
//        }
//        return (int) response;
//    }
//
//    default void moveCamera(int speed, int x, int y) {
//        moveCamera(false, speed, x, y);
//    }
//
//    default void moveCameraBack(int speed) {
//        moveCamera(true, speed, getChr().getPosition().getX(), getChr().getPosition().getY());
//    }
//
//    default void zoomCameraNoResponse(int time, int scale, int timePos, int x, int y) {
//        getChr().write(UserLocal.inGameDirectionEvent(InGameDirectionEvent.cameraZoom(time, scale, timePos, new Position(x, y))));
//    }
//
//    default int zoomCamera(int time, int scale, int timePos, int x, int y) {
//        getInitData().getNpcScriptInfo().setMessageType(NpcMessageType.AskIngameDirection);
//        getChr().write(UserLocal.inGameDirectionEvent(InGameDirectionEvent.cameraZoom(time, scale, timePos, new Position(x, y))));
//        Object response = null;
//        var lastActiveScriptType = getLastActiveScriptType();
//        if (getInitData().isActive(lastActiveScriptType)) {
//            response = getScriptInfoByType(lastActiveScriptType).awaitResponse();
//        }
//        if (response == null) {
//            throw new NullPointerException(INTENDED_NPE_MSG);
//        }
//        return (int) response;
//    }
//
//    @Override
//    default int zoomCamera(int inZoomDuration, int scale, int x, int y) {
//        getInitData().getNpcScriptInfo().setMessageType(NpcMessageType.AskIngameDirection);
//        getChr().write(UserLocal.inGameDirectionEvent(InGameDirectionEvent.cameraZoom(inZoomDuration, scale, 1000, new Position(x, y))));
//        Object response = null;
//        var lastActiveScriptType = getLastActiveScriptType();
//        if (getInitData().isActive(lastActiveScriptType)) {
//            response = getScriptInfoByType(lastActiveScriptType).awaitResponse();
//        }
//        if (response == null) {
//            throw new NullPointerException(INTENDED_NPE_MSG);
//        }
//        return (int) response;
//    }
//
//    default void zoomCameraNoResponse(int zoomInDuration, int scale, int x, int y) {
//        getChr().write(UserLocal.inGameDirectionEvent(InGameDirectionEvent.cameraZoom(zoomInDuration, scale, 1000, new Position(x, y))));
//    }
//
//    @Override
//    default void resetCamera() {
//        getChr().write(UserLocal.inGameDirectionEvent(InGameDirectionEvent.cameraOnCharacter(0))); // 0 resets the Camera
//    }
//
//    default void setCameraOnNpc(int npcTemplateId) {
//        getChr().write(UserLocal.inGameDirectionEvent(InGameDirectionEvent.cameraOnCharacter(npcTemplateId)));
//    }
//
//    @Override
//    default int sendDelay(int delay) {
//        getInitData().getNpcScriptInfo().setMessageType(NpcMessageType.AskIngameDirection);
//        getChr().write(UserLocal.inGameDirectionEvent(InGameDirectionEvent.delay(delay)));
//        Object response = null;
//        var lastActiveScriptType = getLastActiveScriptType();
//        if (getInitData().isActive(lastActiveScriptType)) {
//            response = getScriptInfoByType(lastActiveScriptType).awaitResponse();
//        }
//        if (response == null) {
//            throw new NullPointerException(INTENDED_NPE_MSG);
//        }
//        return (int) response;
//    }
//
//    @Override
//    default void doEventAndSendDelay(int delay, String methodName, Object... args) {
//        invoke(getChr().getScriptManager(), methodName, args);
//        sendDelay(delay);
//    }
//
//    @Override
//    default void forcedMove(boolean left, int distance) {
//        getChr().write(UserLocal.inGameDirectionEvent(InGameDirectionEvent.forcedMove(left, distance)));
//    }
//
//    @Override
//    default void forcedFlip(boolean left) {
//        getChr().write(UserLocal.inGameDirectionEvent(InGameDirectionEvent.forcedFlip(left)));
//    }
//
//    @Override
//    default void forcedAction(int type, int duration) {
//        getChr().write(UserLocal.inGameDirectionEvent(InGameDirectionEvent.forcedAction(type, duration)));
//    }
//
//    @Override
//    default void forcedInput(int type) {
//        ForcedInputType fit = ForcedInputType.getByVal(type);
//        if (fit == null) {
//            log.error(String.format("Unknown Forced Input Type %d", type));
//            return;
//        }
//        getChr().write(UserLocal.inGameDirectionEvent(InGameDirectionEvent.forcedInput(type)));
//    }
//
//    default void patternInputRequest(String pattern, int act, int requestCount, int time) {
//        getChr().write(UserLocal.inGameDirectionEvent(InGameDirectionEvent.patternInputRequest(pattern, act, requestCount, time)));
//    }
//
//    @Override
//    default void hideUser(boolean hide) {
//        getChr().write(UserLocal.inGameDirectionEvent(InGameDirectionEvent.vansheeMode(hide)));
//    }
//
//    default void showEffect(String path, int duration, int x, int y) {
//        showEffect(path, duration, x, y, 0, 0, true, 0);
//    }
//
//    @Override
//    default void showEffect(String path, int duration, int x, int y, int z, int npcIdForExtend, boolean onUser, int idk2) {
//        getChr().write(UserLocal.inGameDirectionEvent(InGameDirectionEvent.effectPlay(path, duration, new Position(x, y), z, npcIdForExtend, onUser, idk2)));
//    }
//
//    default void showEffectOnPosition(String path, int duration, int x, int y) {
//        getChr().write(UserLocal.inGameDirectionEvent(InGameDirectionEvent.effectPlay(path, duration,
//                new Position(x, y), 0, 1, false, 0)));
//    }
//
//    default void showBalloonMsgOnNpc(String path, int duration, int x, int y, int templateID) {
//        int objectID = getNpcObjectIdByTemplateId(templateID);
//        if (objectID == 0) return;
//        getChr().write(UserLocal.inGameDirectionEvent(InGameDirectionEvent.effectPlay(path, duration,
//                new Position(x, y), 0, objectID, false, 0)));
//    }
//
//    default void showBalloonMsgOnNpc(String path, int duration, int templateID) {
//        showBalloonMsgOnNpc(path, duration, 0, -100, templateID);
//    }
//
//    default void showNpcEffectOnPosition(String path, int x, int y, int templateID) {
//        int objectID = getNpcObjectIdByTemplateId(templateID);
//        if (objectID == 0) return;
//        getChr().write(UserLocal.inGameDirectionEvent(InGameDirectionEvent.effectPlay(path, 0,
//                new Position(x, y), 0, objectID, false, 0)));
//    }
//
//    default void showBalloonMsg(String path, int duration) {
//        getChr().write(UserLocal.inGameDirectionEvent(InGameDirectionEvent.effectPlay(path, duration,
//                new Position(0, -100), 0, 0, true, 0)));
//    }
//
//    default int sayMonologue(String text, boolean isEnd) {
//        getInitData().getNpcScriptInfo().setMessageType(NpcMessageType.Monologue);
//        getChr().write(UserLocal.inGameDirectionEvent(InGameDirectionEvent.monologue(text, isEnd)));
//        Object response = null;
//        var lastActiveScriptType = getLastActiveScriptType();
//        if (getInitData().isActive(lastActiveScriptType)) {
//            response = getScriptInfoByType(lastActiveScriptType).awaitResponse();
//        }
//        if (response == null) {
//            throw new NullPointerException(INTENDED_NPE_MSG);
//        }
//        return (int) response;
//    }
//
//    default void avatarLookSet(int[] equipIDs) {
//        getChr().write(UserLocal.inGameDirectionEvent(InGameDirectionEvent.avatarLookSet(equipIDs)));
//    }
//
//    default void removeAdditionalEffect() {
//        getChr().write(UserLocal.inGameDirectionEvent(InGameDirectionEvent.removeAdditionalEffect()));
//    }
//
//    default void faceOff(int faceItemID) {
//        getChr().write(UserLocal.inGameDirectionEvent(InGameDirectionEvent.faceOff(faceItemID)));
//    }
//
//    default void monologueScroll(String msg, boolean stayModal, short align, int updateSpeedTime, int decTic) {
//        getChr().write(UserLocal.inGameDirectionEvent(InGameDirectionEvent.monologueScroll(msg, stayModal, align,
//                updateSpeedTime, decTic)));
//    }
//
//    // Clock methods ---------------------------------------------------------------------------------------------------
//
//    default Clock createStopWatch(int seconds) {
//        return new Clock(ClockType.StopWatch, getField(), seconds);
//    }
//
//    default Clock createStopWatchForChrOnly(int seconds) {
//        if (getInitData().getChr() != null) {
//            return new Clock(ClockType.StopWatch, getInitData() .getChr(), seconds);
//        }
//
//        return null;
//    }
//
//    default Clock createClock(int seconds) {
//        return new Clock(ClockType.SecondsClock, getField(), seconds);
//    }
//
//    default void createClock(int hours, int minutes, int seconds) {
//        getChr().write(FieldPacket.clock(ClockPacket.hmsClock((byte) hours, (byte) minutes, (byte) seconds)));
//        addEvent(EventManager.addEvent(this::removeClock, seconds + minutes * 60 + hours * 3600, TimeUnit.SECONDS));
//    }
//
//    default void removeClock() {
//        getChr().write(FieldPacket.clock(ClockPacket.removeClock()));
//    }
//
//    default void createDojoClock(int seconds) {
//        if (getChr().getInstance().getClockPacket() == null) {
//            getChr().getInstance().setDojoTimer(seconds);
//            getChr().getInstance().getField(925070000).setProperty("StartTime", System.currentTimeMillis());
//            getChr().getInstance().setForcedReturn(925020002);
//        }
//    }
//
//    default void setDojoClockPaused(boolean isPaused) {
//        getChr().write(FieldPacket.clock(ClockPacket.pauseTimer(false, 0)));
//    }
//
//    default String getCurClockTime() {
//        if (getChr().getInstance().getClockPacket() != null) {
//            long time = getChr().getInstance().getClockPacket().getCurDuration();
//            long seconds = (time / 1000) % 60;
//            long minutes = ((time / 1000) - seconds) / 60;
//            return String.format("%d minutes and %d seconds", minutes, seconds);
//        }
//        return "";
//    }
//
//    default long getCurClockTimeSec() {
//        long seconds = -1;
//        if (getChr().getInstance().getClockPacket() != null) {
//            long time = getChr().getInstance().getClockPacket().getCurDuration();
//            seconds = (time / 1000);
//        }
//        return seconds;
//    }
//
//    // Other methods ---------------------------------------------------------------------------------------------------
//
//    @Override
//    default boolean addDamageSkin(int itemID) {
//        return getInitData().getChr().addDamageSkin(itemID);
//    }
//
//    @Override
//    default void openUI(UIType uiType) {
//        int id = uiType.getVal();
//        openUI(id);
//    }
//
//    default void openUI(int id) {
//        getChr().write(FieldPacket.openUI(id));
//    }
//
//    @Override
//    default void openDimensionalMirror() {
//        getChr().write(FieldPacket.openDimensionalMirror());
//    }
//
//    @Override
//    default void closeUI(UIType uiType) {
//        int id = uiType.getVal();
//        closeUI(id);
//    }
//
//    default void closeUI(int id) {
//        getChr().write(FieldPacket.closeUI(id));
//    }
//
//    @Override
//    default void showClearStageExpWindow(long expGiven) {
//        getChr().write(FieldPacket.fieldEffect(FieldEffect.showClearStageExpWindow((int) expGiven)));
//        giveExpNoMsg(expGiven);
//    }
//
//    default void removeBlowWeather() {
//        getChr().write(FieldPacket.removeBlowWeather());
//    }
//
//    default void blowWeather(int itemID, String message) {
//        removeBlowWeather();// removing old one if exists.
//        getChr().write(FieldPacket.blowWeather(itemID, message));
//    }
//
//    default void playSound(String sound) {
//        playSound(sound, 100);
//    }// default
//
//    default void playSound(String sound, int vol) {
//        getChr().write(FieldPacket.fieldEffect(FieldEffect.playSound(sound, vol)));
//    }
//
//    default void blind(int enable, int x, int color, int time) {
//        blind(enable, x, color, 0, 0, time);
//    }
//
//    default void blind(int enable, int x, int color, int unk1, int unk2, int time) {
//        getChr().write(FieldPacket.fieldEffect(FieldEffect.blind(enable, x, color, unk1, unk2, time)));
//    }
//
//    @Override
//    default int getRandomIntBelow(int upBound) {
//        return random.nextInt(upBound);
//    }
//
//    default int getRandomIntBetween(int lowerBound, int inclUpperBound) {
//        return random.nextInt((inclUpperBound - lowerBound) + 1) + lowerBound;
//    }
//
//    default void showEffect(String dir) {
//        showEffect(dir, 0);
//    }
//
//    default void showEffect(String dir, int delay) {
//        showEffect(dir, 4, delay);
//    }
//
//    default void showScene(String xmlPath, String sceneName, String sceneNumber) {
//        Scene scene = new Scene(getChr(), xmlPath, sceneName, sceneNumber);
//        scene.createScene();
//    }
//
//    @Override
//    default void showEffect(String dir, int placement, int delay) {
//        getChr().write(UserPacket.effect(Effect.effectFromWZ(dir, false, delay, placement, 0)));
//    }
//
//    default void avatarOriented(String effectPath) {
//        getChr().write(UserPacket.effect(Effect.avatarOriented(effectPath)));
//    }
//
//    default void reservedEffect(String effectPath) {
//        getChr().write(UserPacket.effect(Effect.reservedEffect(effectPath)));
//
//        String[] splitted = effectPath.split("/");
//        String sceneName = splitted[splitted.length - 2];
//        String sceneNumber = splitted[splitted.length - 1];
//        String xmlPath = effectPath.replace("/" + sceneName, "").replace("/" + sceneNumber, "").replace("Effect/", "Effect.wz/");
//
//        Scene scene = new Scene(getChr(), xmlPath, sceneName, sceneNumber);
//        scene.setTransferField();
//    }
//
//    default void reservedEffect(boolean screenCoord, int x, int y, String effectName) {
//        getChr().write(UserPacket.effect(Effect.reservedEffect(screenCoord, x, y, effectName)));
//    }
//
//    default void reservedEffectRepeat(String effectPath, boolean start) {
//        getChr().write(UserPacket.effect(Effect.reservedEffectRepeat(effectPath, start)));
//    }
//
//    default void reservedEffectRepeat(String effectName, boolean idk, boolean show, int x, int y, int duration) {
//        getChr().write(UserPacket.effect(Effect.reservedEffectRepeat(effectName, idk, show, x, y, duration)));
//    }
//
//    default void reservedEffectRepeat(String effectPath) {
//        reservedEffectRepeat(effectPath, true);
//    }
//
//    default void playExclSoundWithDownBGM(String soundPath, int volume) {
//        getChr().write(UserPacket.effect(Effect.playExclSoundWithDownBGM(soundPath, volume)));
//    }
//
//    default void blindEffect(boolean blind) {
//        getChr().write(UserPacket.effect(Effect.blindEffect(blind)));
//    }
//
//    default void fadeInOut(int fadeIn, int delay, int fadeOut, int alpha) {
//        getChr().write(UserPacket.effect(Effect.fadeInOut(fadeIn, delay, fadeOut, alpha)));
//    }
//
//    default void createFieldTextEffect(String msg, int letterDelay, int showTime, int clientPosition,
//                                      int x, int y, int align, int lineSpace, int type,
//                                      int enterType, int leaveType) {
//        TextEffectType tet = TextEffectType.values()[type];
//        getChr().write(UserPacket.effect(Effect.createFieldTextEffect(msg, letterDelay, showTime, clientPosition, new Position(x, y),
//                align, lineSpace, tet, enterType, leaveType)));
//    }
//
//    default void speechBalloon(boolean normal, int idx, int linkType, String speech, int time, int align, int x,
//                              int y, int z, int lineSpace, int npcTemplateId, int idk) {
//        getChr().write(UserPacket.effect(Effect.speechBalloon(normal, idx, linkType, speech, time, align, x, y, z, lineSpace, npcTemplateId, idk)));
//    }
//
//    default String formatNumber(String number) {
//        return Util.formatNumber(number);
//    }
//
//    default String formatNumber(int number) {
//        return formatNumber(String.valueOf(number));
//    }
//
//    default String formatItem(Item item) {
//        return String.format("#b#L%d##i%d##z%dl#\r\n", item.getBagIndex(), item.getItemId(), item.getItemId());
//    }
//
//    default String formatInlineItem(Item item) {
//        return formatInlineItem(item.getItemId());
//    }
//
//    default String formatInlineItem(int itemId) {
//        return String.format("#i%d# #z%d#", itemId, itemId);
//    }
//
//    default String join(String... args) {
//        final String[] s = {""};
//        Arrays.stream(args).forEach(a -> s[0] += a);
//        return s[0];
//    }
//
//    default String formatString(String line, PyDictionary dict) {
//        var copyLine = line;
//        for (var key : dict.keys()) {
//            var value = dict.get(key).toString();
//            var keyInBraces = "{" + key + "}";
//            copyLine = copyLine.replace(keyInBraces, value);
//        }
//
//        return copyLine;
//    }
//
//    default String selectionString(String line, List<PyDictionary> dicts) {
//        StringBuilder str = new StringBuilder();
//        var newLine = "\r\n";
//
//        var i = 0;
//
//        for (var dict : dicts) {
//            if (!dict.containsKey("i")) {
//                dict.put("i", i);
//                i++;
//            }
//
//            str.append(formatString(line, dict));
//            str.append(newLine);
//
//            //Remove the i again, else it'll stay in the dictionary in python since everything is by ref.
//            //keeping it in the dictionary will mess up the selection indexes of the list next time it's ran over in the same script.
//            if (dict.containsKey("i")) {
//                dict.remove("i");
//            }
//        }
//
//        return str.toString();
//    }
//
//    default Object invoke(Object invokeOn, String methodName, Object... args) {
//        List<Class<?>> classList = Arrays.stream(args).map(Object::getClass).collect(Collectors.toList());
//        Class<?>[] classes = classList.stream().map(Util::convertBoxedToPrimitiveClass).toArray(Class<?>[]::new);
//        Method func;
//        try {
//            func = getClass().getMethod(methodName, classes);
//            return func.invoke(invokeOn, args);
//        } catch (NoSuchMethodException | IllegalAccessException | InvocationTargetException e) {
//            e.printStackTrace();
//        }
//        return null;
//    }
//
//    default void invokeForParty(String methodName, Object... args) {
//        for (PartyMember pm : getChr().getParty().getMembers()) {
//            boolean fromDB = false;
//            Char chr = pm.getChr();
//            if (chr == null) {
//                chr = charDao.getById(pm.getCharID());
//                fromDB = true;
//            }
//            invoke(chr.getScriptManager(), methodName, args);
//            if (fromDB && methodName.equalsIgnoreCase("setQRValue")) {
//                // big hack
//                charDao.saveOrUpdate(chr);
//            }
//        }
//    }
//
//    default ScheduledFuture invokeAfterDelay(long delay, String methodName, Object... args) {
//        Object[] funcArgs = args;
//        if ("warp".equals(methodName) || "warpParty".equalsIgnoreCase(methodName)) {
//            // kinda hacky method to make warps execute immediately when invoking after delay
//            funcArgs = new Object[args.length + 1];
//            System.arraycopy(args, 0, funcArgs, 0, args.length);
//            funcArgs[funcArgs.length - 1] = false;
//        }
//        Object[] a = funcArgs;
//        ScheduledFuture sf = EventManager.addEvent(() -> invoke(this, methodName, a), delay);
//
//        var isFieldEvent = isFieldEventMethodName(methodName);
//
//        addEvent(sf, isFieldEvent);
//        return sf;
//    }
//
//    default ScheduledFuture invokeAtFixedRate(long initialDelay, long delayBetweenExecutions,
//                                             int executes, String methodName, Object... args) {
//        ScheduledFuture scheduledFuture;
//        if (executes == 0) {
//            scheduledFuture = EventManager.addFixedRateEvent(() -> invoke(this, methodName, args), initialDelay,
//                    delayBetweenExecutions);
//        } else {
//            scheduledFuture = EventManager.addFixedRateEvent(() -> invoke(this, methodName, args), initialDelay,
//                    delayBetweenExecutions, executes);
//        }
//
//        var isFieldEvent = isFieldEventMethodName(methodName);
//
//        addEvent(scheduledFuture, isFieldEvent);
//        return scheduledFuture;
//    }
//
//    @Override
//    default int playVideoByScript(String videoPath) {
//        getInitData().getNpcScriptInfo().setMessageType(NpcMessageType.PlayMovieClip);
//        getChr().write(UserLocal.videoByScript(videoPath, true));
//        Object response = null;
//        var lastActiveScriptType = getLastActiveScriptType();
//        if (getInitData().isActive(lastActiveScriptType)) {
//            response = getScriptInfoByType(lastActiveScriptType).awaitResponse();
//        }
//        if (response == null) {
//            throw new NullPointerException(INTENDED_NPE_MSG);
//        }
//        return (int) response;
//    }
//
//    @Override
//    default int playVideoByScriptFromWeb(String videlUrl) {
//        getInitData().getNpcScriptInfo().setMessageType(NpcMessageType.PlayMovieClipURL);
//        getChr().write(UserLocal.videoByScriptWeb(videlUrl));
//        Object response = null;
//        var lastActiveScriptType = getLastActiveScriptType();
//        if (getInitData().isActive(lastActiveScriptType)) {
//            response = getScriptInfoByType(lastActiveScriptType).awaitResponse();
//        }
//        if (response == null) {
//            throw new NullPointerException(INTENDED_NPE_MSG);
//        }
//        return (int) response;
//    }
//
//    default void setFuncKeyByScript(boolean add, int action, int key) {
//        getChr().write(UserLocal.setFuncKeyByScript(add, action, key));
//        getChr().getFuncKeyMap().get(0).putKeyBinding(key, add ? (byte) 1 : (byte) 0, action);
//    }
//
//    default void setActionBar(boolean show, ActionBarType type) {
//        getChr().write(UserLocal.setActionBar(show, type));
//    }
//
//    default void setMapTaggedObjectVisible(String key, boolean visible, int manual, int delay) {
//        getChr().write(MapLoadable.setMapTaggedObjectVisible(new MapTaggedObject(key, visible, manual, delay)));
//    }
//
//    default void addPopUpSay(int npcID, int duration, String message, String effect) {
//        getChr().write(UserLocal.addPopupSay(npcID, duration, message, effect));
//    }
//
//    default void moveParticleEff(String type, int startX, int startY, int endX, int endY, int moveTime, int totalCount, int oneSprayMin, int oneSprayMax) {
//        getChr().write(UserLocal.moveParticleEff(type, new Position(startX, startY), new Position(endX, endY), moveTime, totalCount, oneSprayMin, oneSprayMax));
//    }
//
//    default void levelUntil(int toLevel) {
//        short level = getChr().getLevel();
//        if (level >= toLevel) {
//            return;
//        }
//        while (level < toLevel) {
//            addLevel(1);
//            level++;
//        }
//    }
//
//    default void balloonMsg(String message) {
//        getChr().write(UserLocal.balloonMsg(message, 100, 3, null));
//    }
//
//    default boolean openNodestone(int id) {
//        if (!getChr().getQuestManager().hasQuestCompleted(QuestConstants.FIFTH_JOB_QUEST)) {
//            getChr().chatMessage("You need to be 5th job to open this item.");
//            return false;
//        }
//
//        if (getChr().getMatrixRecords().size() > MatrixRecord.MAX_RECORDS) {
//            getChr().chatMessage("You currently have a lot of nodes. Please disassemble before trying to get new nodes.");
//            return false;
//        }
//
//        NodestoneModule.openNodestone(getChr(), id, true);
//        return true;
//    }
//
//    default void openMultiNodestones(int id, int amount) {
//        if (!getChr().getQuestManager().hasQuestCompleted(QuestConstants.FIFTH_JOB_QUEST)) {
//            getChr().chatMessage("You need to be 5th job to open this item.");
//            getChr().dispose();
//            return;
//        }
//
//        if (amount <= 0 || getChr().getMatrixRecords().size() > MatrixRecord.MAX_RECORDS) {
//            getChr().chatMessage("You already have the maximum amount of Nodestones in your VMatrix.");
//            getChr().dispose();
//            return;
//        }
//
//        var consumeAmount = 0;
//        for (int j = 0; j < amount; j++) {
//
//            if (getChr().getMatrixRecords().size() > MatrixRecord.MAX_RECORDS) {
//                continue;
//            }
//
//            NodestoneModule.openNodestone(getChr(), id, false);
//            consumeAmount++;
//        }
//
//        if (consumeAmount < amount) {
//            getChr().chatMessage("You have the maximum amount of Nodestones in your VMatrix.");
//        }
//
//        getChr().write(WvsContext.matrixUpdate(getChr(), false, 0, 0));
//        consumeItem(id, consumeAmount);
//    }
//
//    default void hireTutor(boolean set) {
//        getChr().hireTutor(set);
//    }
//
//    default void tutorAutomatedMsg(int id) {
//        tutorAutomatedMsg(id, 10000);
//    }
//
//    default void tutorAutomatedMsg(int id, int duration) {
//        getChr().tutorAutomatedMsg(id, duration);
//    }
//
//    default void tutorCustomMsg(String message, int width, int duration) {
//        getChr().tutorCustomMsg(message, width, duration);
//    }
//
//    default boolean hasTutor() {
//        return getChr().hasTutor();
//    }
//
//    default int getMakingSkillLevel(int skillID) {
//        return getChr().getMakingSkillLevel(skillID);
//    }
//
//    default boolean isAbleToLevelUpMakingSkill(int skillID) {
//        int neededProficiency = SkillConstants.getNeededProficiency(getChr().getMakingSkillLevel(skillID));
//        if (neededProficiency <= 0) {
//            return false;
//        }
//        return getChr().getMakingSkillProficiency(skillID) >= neededProficiency;
//    }
//
//    default void makingSkillLevelUp(int skillID) {
//        getChr().makingSkillLevelUp(skillID);
//    }
//
//    default ScriptMemory getMemory() {
//        return getInitData().getMemory();
//    }
//
//    default void setBossCooldown(BossCooldown bc) {
//        // Only for entry
//        if (getChr().getParty() != null) {
//            for (var pm : getChr().getParty().getOnlineMembers()) {
//                if (pm != null && pm.getChr() != null) {
//                    pm.getChr().getAccount().setBossCooldown(bc, false);
//                }
//            }
//        } else {
//            getChr().getAccount().setBossCooldown(bc, false);
//        }
//    }
//
//    default boolean isOnBossCooldown(BossCooldown bc) {
//        return getChr().getAccount().isOnBossCooldown(bc);
//    }
//
//    default int getRemainingBossCooldownMinutes(BossCooldown bc) {
//        AccountBossCooldown abc = getChr().getAccount().getBossCooldown(bc);
//        FileTime nextEntry = abc == null ? null : abc.getNextEntryTime();
//        if (nextEntry == null || nextEntry.isExpired()) {
//            return 0;
//        } else {
//            LocalDateTime cur = FileTime.currentTime().toLocalDateTime();
//            LocalDateTime to = nextEntry.toLocalDateTime();
//            return (int) ((to.toEpochSecond(ZoneOffset.UTC) - cur.toEpochSecond(ZoneOffset.UTC)) / 60);
//        }
//    }
//
//    // Will methods
//
//    default void incrementMoonlight() {
//        for (var chr : getField().getChars()) {
//            var hardMode = FieldConstants.isHardWillField(getFieldID());
//            var bossInfo = chr.getBossInfo();
//            bossInfo.addMoonlight(hardMode ? 1 : 2);
//        }
//    }
//
//    default void startWillTriggerTimer() {
//        addEvent(EventManager.addFixedRateEvent(this::doTriggerBlockCheck, 90, 120, TimeUnit.SECONDS));
//    }
//
//    default void startWillWebTimer() {
//        addEvent(EventManager.addFixedRateEvent(() -> WillModule.spawnNarrowWeb(getField()), 6, 6, TimeUnit.SECONDS));
//    }
//
//    default void doTriggerBlockCheck() {
//        switch (getFieldID()) {
//            case BossConstants.WILL_FIELD_P1:
//            case BossConstants.WILL_HARD_FIELD_P1:
//                WillModule.doWillTest1(getField());
//                break;
//            case BossConstants.WILL_FIELD_P2:
//            case BossConstants.WILL_HARD_FIELD_P2:
//                WillModule.doWillTest2(getField());
//                break;
//            case BossConstants.WILL_FIELD_P3:
//            case BossConstants.WILL_HARD_FIELD_P3:
//                break;
//        }
//    }
//
//    // Papulatus
//
//    default void startTweezerTimers() {
//        var tweezers = new ArrayList<PapulatusTweezerInfo>();
//        for (int i = 0; i < 5; i++) {
//            tweezers.add(new PapulatusTweezerInfo(i, 1, 0, 0));
//        }
//
//        getField().broadcastPacket(PapulatusFieldPacket.papulatusFieldObjectChanged(PapulatusFieldObject.tweezers(tweezers)));
//    }
//
//    default void startPapulatusAlarmClockTimer() {
//        var papulatusLife = getField().getLifeByTemplateIds(BossConstants.PAPULATUS_EASY_P1, BossConstants.PAPULATUS_EASY_P2,
//                BossConstants.PAPULATUS_NORMAL_P1, BossConstants.PAPULATUS_NORMAL_P2,
//                BossConstants.PAPULATUS_CHAOS_P1, BossConstants.PAPULATUS_CHAOS_P2
//        );
//
//        if (papulatusLife instanceof Mob) {
//            var papulatus = (Mob) papulatusLife;
//            papulatus.addBlockedSkill(papulatus.getSkillByMobSkillInfo(MobSkillID.PapulatusSkill.getVal(), 6));
//        }
//
//        getField().broadcastPacket(PapulatusFieldPacket.papulatusFieldObjectChanged(
//                PapulatusFieldObject.alarmClockTimer(true, false, BossConstants.PAPULATUS_ALARM_CLOCK_COOLTIME_MILLIS))
//        );
//        addEvent(EventManager.addEvent(this::papulatusAlarmClockActivate, BossConstants.PAPULATUS_ALARM_CLOCK_COOLTIME_MILLIS));
//    }
//
//    default void papulatusAlarmClockActivate() {
//        var papulatusLife = getField().getLifeByTemplateIds(BossConstants.PAPULATUS_EASY_P1, BossConstants.PAPULATUS_EASY_P2,
//                BossConstants.PAPULATUS_NORMAL_P1, BossConstants.PAPULATUS_NORMAL_P2,
//                BossConstants.PAPULATUS_CHAOS_P1, BossConstants.PAPULATUS_CHAOS_P2
//        );
//
//        if (papulatusLife instanceof Mob) {
//            var papulatus = (Mob) papulatusLife;
//            var alarmClockSkill = papulatus.getSkillByMobSkillInfo(MobSkillID.PapulatusSkill.getVal(), 6);
//            papulatus.removeBlockedSkill(alarmClockSkill);
//            papulatus.setForcedSkill(alarmClockSkill);
//        }
//
//        getField().broadcastPacket(PapulatusFieldPacket.papulatusFieldObjectChanged(
//                PapulatusFieldObject.alarmClockTimer(true, true, BossConstants.PAPULATUS_ALARM_CLOCK_MILLIS))
//        );
//
//        // 10% health per second drain
//        addEvent(EventManager.addFixedRateEvent(() -> {
//            for (var chr : getField().getCharsReadOnly()) {
//                chr.damagePerc(10);
//            }
//        }, 0, 1000, (BossConstants.PAPULATUS_ALARM_CLOCK_MILLIS / 1000) - 1));
//
//        // clock keys
//        addEvent(EventManager.addFixedRateEvent(() -> createObstacleAtom(ObstacleAtomEnum.PapulatusPurpleKey, 1, 50, 9, 10, 25)
//                , 0, 5000, (BossConstants.PAPULATUS_ALARM_CLOCK_MILLIS / 5000) - 1));
//        addEvent(EventManager.addFixedRateEvent(() -> createObstacleAtom(ObstacleAtomEnum.PapulatusYellowKey, 1, 50, 12, 10, 50)
//                , 0, 5000, (BossConstants.PAPULATUS_ALARM_CLOCK_MILLIS / 5000) - 1));
//
//        addEvent(EventManager.addEvent(this::startPapulatusAlarmClockTimer, BossConstants.PAPULATUS_ALARM_CLOCK_MILLIS));
//    }
//
//    default void startPapulatusLaserCooltimeTimerInit() {
//        addEvent(EventManager.addEvent(this::startPapulatusLaserTimer, BossConstants.PAPULATUS_LASER_INIT_COOLTIME_MILLIS));
//    }
//
//    default void startPapulatusLaserCooltimeTimer() {
//        var laserInfo = new PapulatusLaserInfo(0, false, 0, 0);
//        var laserInfo2 = new PapulatusLaserInfo(1, false, 0, 0);
//        var list = new ArrayList<PapulatusLaserInfo>();
//        list.add(laserInfo);
//        list.add(laserInfo2);
//        getField().broadcastPacket(PapulatusFieldPacket.papulatusFieldObjectChanged(PapulatusFieldObject.lasers(false, list)));
//
//        addEvent(EventManager.addEvent(this::startPapulatusLaserTimer, BossConstants.PAPULATUS_LASER_COOLTIME_MILLIS));
//    }
//
//    default void startPapulatusLaserTimer() {
//        // this is not how it's supposed to work lmao
//        var randIdx = Util.getRandom(0, 4) * 2;
//        var randAngle1 = Util.getRandom(BossConstants.PAPULATUS_LASER_MIN, BossConstants.PAPULATUS_LASER_MAX);
//        var randSpeed1 = Util.getRandom(BossConstants.PAPULATUS_LASER_MIN, BossConstants.PAPULATUS_LASER_MAX);
//        var randAngle2 = Util.getRandom(BossConstants.PAPULATUS_LASER_MIN, BossConstants.PAPULATUS_LASER_MAX);
//        var randSpeed2 = Util.getRandom(BossConstants.PAPULATUS_LASER_MIN, BossConstants.PAPULATUS_LASER_MAX);
//
//        var laserInfo = new PapulatusLaserInfo(randIdx, true, randAngle1, randSpeed1);
//        var laserInfo2 = new PapulatusLaserInfo(randIdx + 1, true, randAngle2, randSpeed2);
//        var list = new ArrayList<PapulatusLaserInfo>();
//        list.add(laserInfo);
//        list.add(laserInfo2);
//        getField().broadcastPacket(PapulatusFieldPacket.papulatusFieldObjectChanged(PapulatusFieldObject.lasers(false, list)));
//
//        addEvent(EventManager.addEvent(this::startPapulatusLaserCooltimeTimer, BossConstants.PAPULATUS_LASER_MILLIS));
//    }
//
//    default void changePapulatusTime(boolean divide) {
//        var tsm = getChr().getTemporaryStatManager();
//        var option = tsm.getOption(PapulatusTimeLock);
//        if (option != null && tsm.hasStat(PapulatusTimeLock)) {
//            var remainingTime = (int) option.getRemainingTime() / 1000;
//            if (divide) {
//                remainingTime /= 2;
//            } else {
//                remainingTime *= 2;
//            }
//            if (remainingTime > 99) {
//                remainingTime = 99;
//            }
//            var o = new Option();
//            o.nOption = 1;
//            o.rOption = MobSkillID.PapulatusSkill.getVal();
//            o.slv = 3;
//            o.tOption = remainingTime;
//            o.xOption = remainingTime;
//            tsm.putCharacterStatValueFromMobSkill(PapulatusTimeLock, o);
//        }
//        tsm.sendSetStatPacket();
//    }
//
//
//    // Professions
//
//    default void increaseMasteryAndShowSuccess(int reqLevel, boolean herb) {
//        var skillId = herb ? SkillConstants.HERBALISM_SKILL : SkillConstants.MINING_SKILL;
//        var slv = getChr().getMakingSkillLevel(skillId);
//        var chanceToSucceed = 100 - ((reqLevel - slv) * 10);
//        var success = Util.succeedProp(chanceToSucceed);
//        var mastery = success ? 20 : 2;
//        getChr().addMakingSkillProficiency(skillId, mastery);
//
//        var trait = SkillConstants.getIncStatByMakingSkill(skillId);
//        getChr().addTraitExp(trait, GameConstants.getTraitExpByMakingSkillLevel(reqLevel));
//        getChr().write(FieldPacket.gatherResult(getChr(), success));
//    }
//
//
//    // San Commerci | Voyage
//    default void finishVoyageHorde() {
//        Voyage.finishHorde(getChr());
//    }
//
//    //DailyEntry methods
//    default int getRemainingDailyEntries(DailyEntry de) {
//        return getChr().getAccount().getRemainingEntries(de);
//    }
//
//    default void addDailyEntry(DailyEntry de) {
//        getChr().getAccount().addDailyEntry(de);
//    }
//
//    default void reduceDailyEntry(DailyEntry de) {
//        getChr().getAccount().reduceDailyEntry(de);
//    }
//
//    @Override
//    default boolean levelArcaneSymbol(BodyPart symbolPart, int levelAmount) {
//        Item item = getInitData().getChr().getEquippedInventory().getFirstItemByBodyPart(symbolPart);
//        if (item != null) {
//            Equip symbol = (Equip) item;
//            if (symbol.getSymbolLevel() < ItemConstants.MAX_ARCANE_SYMBOL_LEVEL) {
//                symbol.setSymbolLevel((short) (Math.min(ItemConstants.MAX_ARCANE_SYMBOL_LEVEL, symbol.getSymbolLevel() + levelAmount)));
//                symbol.initSymbolStats(symbol.getSymbolLevel(), symbol.getSymbolExp(), getInitData().getChr().getJob());
//                symbol.updateToChar(getInitData().getChr());
//                return true;
//            }
//        } else {
//            getInitData().getChr().chatMessage("Please equip your symbol before you try to complete the weekly.");
//        }
//        return false;
//    }
//
//    @Override
//    default boolean levelAuthSymbol(BodyPart symbolPart, int levelAmount) {
//        Item item = getInitData().getChr().getEquippedInventory().getFirstItemByBodyPart(symbolPart);
//        if (item != null) {
//            Equip symbol = (Equip) item;
//            if (symbol.getSymbolLevel() < ItemConstants.MAX_AUTH_SYMBOL_LEVEL) {
//                symbol.setSymbolLevel((short) (Math.min(ItemConstants.MAX_AUTH_SYMBOL_LEVEL, symbol.getSymbolLevel() + levelAmount)));
//                symbol.initSymbolStats(symbol.getSymbolLevel(), symbol.getSymbolExp(), getInitData().getChr().getJob());
//                symbol.updateToChar(getInitData().getChr());
//                return true;
//            }
//        } else {
//            getInitData().getChr().chatMessage("Please equip your symbol before you try to complete the weekly.");
//        }
//        return false;
//    }
//
//}
