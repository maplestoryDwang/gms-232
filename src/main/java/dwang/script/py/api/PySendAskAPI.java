package dwang.script.py.api;

import dwang.script.DwangScriptBaseApi;
import net.swordie.ms.connection.packet.ScriptMan;
import net.swordie.ms.constants.ItemConstants;
import net.swordie.ms.life.npc.NpcMessageType;
import net.swordie.ms.life.npc.NpcScriptInfo;
import net.swordie.ms.loaders.ItemData;
import net.swordie.ms.scripts.ScriptType;

import java.util.ArrayList;
import java.util.List;
import java.util.regex.Pattern;

import static net.swordie.ms.life.npc.NpcMessageType.*;
import static net.swordie.ms.life.npc.NpcMessageType.AskSelectMenu;

/**
 * @author 橘子
 * @date 2026/2/27
 * @description
 */
public interface PySendAskAPI extends DwangScriptBaseApi {


    Pattern listPattern = Pattern.compile("(.)*#[lL][0-9]+#(.)*");
    String INTENDED_NPE_MSG = "Intended NPE by forceful script stop.";

    // Start of the sends/asks -----------------------------------------------------------------------------------------
    
    default int sendSay(String text) {
        if (getLastActiveScriptType() == ScriptType.None) {
            return 0;
        }
        return sendGeneralSay(text, Say);
    }

    /**
     * Helper function that ensures that selections have the appropriate type (AskMenu).
     *
     * @param text
     * @param nmt
     */
    private int sendGeneralSay(String text, NpcMessageType nmt) throws NullPointerException {
        var npcScriptInfo = getInitData().getNpcScriptInfo();
        npcScriptInfo.setText(text);
        String checkText = text.replaceAll("[\r\n]", "");
        if (listPattern.matcher(checkText).matches()) {
            nmt = AskMenu;
        }
        npcScriptInfo.setMessageType(nmt);
        getChr().write(ScriptMan.scriptMessage(npcScriptInfo, nmt));
        getMemory().addMemoryInfo(npcScriptInfo);
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

    
    default int sendNext(String text) {
        return sendGeneralSay(text, SayNext);
    }

    
    default int sendPrev(String text) {
        return sendGeneralSay(text, SayPrev);
    }

    
    default int sendSayOkay(String text) {
        return sendGeneralSay(text, SayOk);
    }

    
    default int sendSayImage(String image) {
        return sendSayImage(new String[]{image});
    }

    
    default int sendSayImage(String[] images) {
        getInitData().getNpcScriptInfo().setImages(images);
        getInitData().getNpcScriptInfo().setMessageType(SayImage);
        return sendGeneralSay("", SayImage);
    }

    
    default boolean sendAskYesNo(String text) {
        return sendGeneralSay(text, AskYesNo) != 0;
    }

    
    default boolean sendAskAccept(String text) {
        return sendGeneralSay(text, AskAccept) != 0;
    }

    default boolean sendAskAccept2(String text) {
        return sendGeneralSay(text, AskAccept2) != 0;
    }

    
    default String sendAskText(String text, String defaultText, short minLength, short maxLength) throws NullPointerException {
        var npcScriptInfo = getInitData().getNpcScriptInfo();
        npcScriptInfo.setMin(minLength);
        npcScriptInfo.setMax(maxLength);
        npcScriptInfo.setDefaultText(defaultText);
        npcScriptInfo.setText(text);
        npcScriptInfo.setMessageType(AskText);
        getChr().write(ScriptMan.scriptMessage(npcScriptInfo, AskText));
        getMemory().addMemoryInfo(npcScriptInfo);
        Object response = null;
        var lastActiveScriptType = getLastActiveScriptType();
        if (getInitData().isActive(lastActiveScriptType)) {
            response = getScriptInfoByType(lastActiveScriptType).awaitResponse();
        }
        if (response == null) {
            throw new NullPointerException(INTENDED_NPE_MSG);
        }
        return (String) response;
    }

    
    default int sendAskNumber(String text, int defaultNum, int min, int max) {
        getInitData().getNpcScriptInfo().setDefaultNumber(defaultNum);
        getInitData().getNpcScriptInfo().setMin(min);
        getInitData().getNpcScriptInfo().setMax(max);
        var num = sendGeneralSay(text, AskNumber);

        if (num < min || num > max) {
            throw new IllegalArgumentException(String.format("%d is outside of bounds (%d, %d)", num, min, max));
        }

        return num;
    }

    
    default int sendInitialQuiz(byte type, String title, String problem, String hint, int min, int max, int time) {
        NpcScriptInfo nsi = getInitData().getNpcScriptInfo();
        nsi.setType(type);
        if (type != 1) {
            nsi.setTitle(title);
            nsi.setProblemText(problem);
            nsi.setHintText(hint);
            nsi.setMin(min);
            nsi.setMax(max);
            nsi.setTime(time);
        }
        return sendGeneralSay(title, InitialQuiz);
    }

    
    default int sendInitialSpeedQuiz(byte type, int quizType, int answer, int correctAnswers, int remaining, int time) {
        NpcScriptInfo nsi = getInitData().getNpcScriptInfo();
        nsi.setType(type);
        if (type != 1) {
            nsi.setQuizType(quizType);
            nsi.setAnswer(answer);
            nsi.setCorrectAnswers(correctAnswers);
            nsi.setRemaining(remaining);
            nsi.setTime(time);
        }
        return sendGeneralSay("", InitialSpeedQuiz);
    }

    
    default int sendICQuiz(byte type, String text, String hintText, int time) {
        getInitData().getNpcScriptInfo().setType(type);
        getInitData().getNpcScriptInfo().setHintText(hintText);
        getInitData().getNpcScriptInfo().setTime(time);
        return sendGeneralSay(text, ICQuiz);
    }

    
    default int sendAskAvatar(String text, boolean angelicBuster, boolean zeroBeta, int... options) {
        List<Integer> safeOptions = new ArrayList<>();
        for (var opt : options) {
            if (ItemConstants.isSkin(opt) || ItemData.getItemDeepCopy(opt) != null) {
                safeOptions.add(opt);
            }
        }

        if (safeOptions.size() > 0) {
            getInitData().getNpcScriptInfo().setAngelicBuster(angelicBuster);
            getInitData().getNpcScriptInfo().setZeroBeta(zeroBeta);
            getInitData().getNpcScriptInfo().setOptions(safeOptions.stream().mapToInt(i -> i).toArray());
            var safeIdx = sendGeneralSay(text, AskAvatar);
            return safeOptions.get(safeIdx);
        } else {
            sendGeneralSay("We don't have any options here, sorry.", SayOk);
            return 100000000; // makes setCharacterLook not do anything
        }
    }

    default int sendAskSlideMenu(int dlgType) {
        getInitData().getNpcScriptInfo().setDlgType(dlgType);
        return sendGeneralSay("", AskSlideMenu);
    }

    default int sendAskSelectMenu(int dlgType, int defaultSelect) {
        return sendAskSelectMenu(dlgType, defaultSelect, new String[]{});
    }

    default int sendAskSelectMenu(int dlgType, int defaultSelect, String[] text) {
        getInitData().getNpcScriptInfo().setDlgType(dlgType);
        getInitData().getNpcScriptInfo().setDefaultSelect(defaultSelect);
        getInitData().getNpcScriptInfo().setSelectText(text);
        return sendGeneralSay("", AskSelectMenu);
    }

    // Start of param methods ------------------------------------------------------------------------------------------

    default void setParam(int param) {
        getInitData().getNpcScriptInfo().setParam((short) param);
    }

    default void setColor(int color) {
        getInitData().getNpcScriptInfo().setColor((byte) color);
    }

    default void resetParam() {
        getInitData().getNpcScriptInfo().resetParam();
    }

    default void removeEscapeButton() {
        getInitData().getNpcScriptInfo().addParam(NpcScriptInfo.Param.NotCancellable);
    }

    default void addEscapeButton() {
        if (getInitData().getNpcScriptInfo().hasParam(NpcScriptInfo.Param.NotCancellable)) {
            getInitData().getNpcScriptInfo().removeParam(NpcScriptInfo.Param.NotCancellable);
        }
    }

    default void flipSpeaker() {
        getInitData().getNpcScriptInfo().addParam(NpcScriptInfo.Param.FlipSpeaker);
    }


    default void cancelFlipDialogue() {
        getInitData().getNpcScriptInfo().removeParam(NpcScriptInfo.Param.OverrideSpeakerID);
    }

    /**
     * 是否覆盖说话人的ID
     */
    default void flipDialogue() {
        getInitData().getNpcScriptInfo().addParam(NpcScriptInfo.Param.OverrideSpeakerID);
    }

    /**
     * 是否play作为说话者 + 反转
     */
    default void flipDialoguePlayerAsSpeaker() {
        getInitData().getNpcScriptInfo().addParam(NpcScriptInfo.Param.PlayerAsSpeakerFlip);
    }

    default void setPlayerAsSpeaker() {
        getInitData().getNpcScriptInfo().addParam(NpcScriptInfo.Param.PlayerAsSpeaker);
    }

    default void setBoxChat() {
        setBoxChat(true);
    }

    default void setBoxChat(boolean color) { // true = Standard BoxChat  |  false = Zero BoxChat
        getInitData().getNpcScriptInfo().setColor((byte) (color ? 1 : 0));
        getInitData().getNpcScriptInfo().addParam(NpcScriptInfo.Param.BoxChat);
    }

    default void flipBoxChat() {
        getInitData().getNpcScriptInfo().addParam(NpcScriptInfo.Param.FlipBoxChat);
    }

    default void boxChatPlayerAsSpeaker() {
        getInitData().getNpcScriptInfo().addParam(NpcScriptInfo.Param.BoxChatAsPlayer);
    }

    default void flipBoxChatPlayerAsSpeaker() {
        getInitData().getNpcScriptInfo().addParam(NpcScriptInfo.Param.FlipBoxChatAsPlayer);
    }

    default void flipBoxChatPlayerNoEscape() {
        getInitData().getNpcScriptInfo().addParam(NpcScriptInfo.Param.FlipBoxChatAsPlayerNoEscape);
    }
}
