package dwang.script.js.api.imp;

import dwang.script.DwangScriptBaseApi;
import dwang.script.js.npc.NPCTalkMode;
import net.swordie.ms.connection.packet.ScriptMan;
import net.swordie.ms.constants.ItemConstants;
import net.swordie.ms.life.npc.NpcMessageType;
import net.swordie.ms.life.npc.NpcScriptInfo;
import net.swordie.ms.loaders.ItemData;

import java.util.ArrayList;
import java.util.List;
import java.util.regex.Pattern;

import static net.swordie.ms.life.npc.NpcMessageType.*;


/**
 * @author dwang
 * @date 2026/3/1
 * @description 脚本消息
 */
public interface ScriptMessageAPI extends DwangScriptBaseApi {

    Pattern listPattern = Pattern.compile("(.)*#[lL][0-9]+#(.)*");
    String INTENDED_NPE_MSG = "Intended NPE by forceful script stop.";

    /**
     * 更新过的发送给所化包
     *
     * @param text
     * @param nmt
     * @return
     * @throws NullPointerException
     */
    private void sendGeneralSay(String text, NpcMessageType nmt) throws NullPointerException {
        var npcScriptInfo = getInitData().getNpcScriptInfo();
        npcScriptInfo.setText(text);
        String checkText = text.replaceAll("[\r\n]", "");
        if (listPattern.matcher(checkText).matches()) {
            nmt = AskMenu;
        }
        npcScriptInfo.setMessageType(nmt);
        getChr().write(ScriptMan.scriptMessage(npcScriptInfo, nmt));
        getMemory().addMemoryInfo(npcScriptInfo);
    }

    default byte addTalkModeMask(NPCTalkMode... var0) {
        byte param = 0;
        NPCTalkMode[] var2 = var0;
        int var3 = var0.length;

        for (int var4 = 0; var4 < var3; ++var4) {
            NPCTalkMode var5 = var2[var4];
            param |= var5.getNPCTalkModeType();
        }
        getInitData().getNpcScriptInfo().setParam((short) param);

        return param;
    }

    // 默认说话类
    default void getNPCTalk(NpcMessageType nmt, String talk, boolean prev, boolean next, byte style, int diffNPC, byte bottomSytle, boolean isLeft) {
        NpcScriptInfo npcScriptInfo = getInitData().getNpcScriptInfo();
        npcScriptInfo.setText(talk);
//      String checkText = talk.replaceAll("[\r\n]", "");
//
//      // todo 如果是有列表 其实也可能是立绘的菜单，这里判断有问题
//      if (listPattern.matcher(checkText).matches()) {
//         nmt = AskMenu;
//      }

        if (nmt == SayOk) {
            if (!prev && !next) {
                nmt = SayOk;
            } else if (!prev && next) {
                nmt = SayNext;
            } else if (prev && !next) {
                nmt = SayPrev;
            } else if (prev && next) {
                nmt = Say;
            }
        }

        npcScriptInfo.setMessageType(nmt);
//      boolean prev, boolean next,  NpcMessageType本身已经决定了 JS写的就有问题！！


        npcScriptInfo.setParam(style);
        int templateID = npcScriptInfo.getTemplateID();

        if (diffNPC != -1){
            if (templateID == 0) {
                npcScriptInfo.setTemplateID(diffNPC);
                npcScriptInfo.setOverrideSpeakerTemplateID(diffNPC);
                npcScriptInfo.setInnerOverrideSpeakerTemplateID(diffNPC);
            } else {
                npcScriptInfo.setOverrideSpeakerTemplateID(diffNPC);
                npcScriptInfo.setInnerOverrideSpeakerTemplateID(diffNPC);
            }

        }

        npcScriptInfo.setColor(bottomSytle);
        npcScriptInfo.setbIsLeft(isLeft ? 1 : 0);


        // 进入发包
        getChr().write(ScriptMan.scriptMessage(npcScriptInfo, nmt));
        getMemory().addMemoryInfo(npcScriptInfo);

    }


    default void getNPCTalk(NpcMessageType nmt, String talk, boolean prev, boolean next, byte style, int diffNPC) {
        getNPCTalk(nmt, talk, prev, next, style, diffNPC, (byte) 0, false);
    }

    default void getNPCTalk(NpcMessageType nmt, String talk, boolean prev, boolean next, byte style, int diffNPC, byte bottomSytle) {
        getNPCTalk(nmt, talk, prev, next, style, diffNPC, bottomSytle, false);
    }

    default void getNPCTalk立绘(NpcMessageType nmt, String talk, boolean prev, boolean next, byte style, int diffNPC, boolean isLeft) {
        getNPCTalk(nmt, talk, prev, next, style, diffNPC, (byte) 0, false);

    }

    /**
     * @param npc
     * @param talk
     * @param styles
     * @param card   需要使用的道具
     */
    default void getNPCTalk机器人美容美发(int npc, String talk, int[] styles, int card) {
        //         OutPacket var4 = buildBaseScriptMessagePacket((byte) 4, npc, false, 0, NpcTalkWindowMsgType.机器人美容美发.getMsgType(), NPCTalkMode.默认样式.getNPCTalkModeType(), false, (byte) 0);

        NpcScriptInfo npcScriptInfo = getInitData().getNpcScriptInfo();
        npcScriptInfo.setText(talk);
        npcScriptInfo.setTemplateID(npc);
        npcScriptInfo.setMessageType(AskAndroid);
        npcScriptInfo.setParam(NPCTalkMode.默认样式.getNPCTalkModeType());
        npcScriptInfo.setColor((byte) 0);
        npcScriptInfo.setbIsLeft(0);
        npcScriptInfo.setOptions(styles);

        // card是需要使用的道具
        npcScriptInfo.setConsumeItemId(card);


        // 进入发包
        getChr().write(ScriptMan.scriptMessage(npcScriptInfo, AskAndroid));
        getMemory().addMemoryInfo(npcScriptInfo);

    }

    default void getNPCTalk天使装扮选择(int npc) {
        NpcScriptInfo npcScriptInfo = getInitData().getNpcScriptInfo();
        npcScriptInfo.setTemplateID(npc);
        npcScriptInfo.setMessageType(AskAngelicBuster);
        npcScriptInfo.setParam(NPCTalkMode.默认样式.getNPCTalkModeType());
        // 进入发包
        getChr().write(ScriptMan.scriptMessage(npcScriptInfo, AskAngelicBuster));
        getMemory().addMemoryInfo(npcScriptInfo);
    }


    default void getNPCTalk要求输入文本(int npc, String text, String defaultText, int minLen, int maxLen, byte style, byte bottomStyle){
        NpcScriptInfo npcScriptInfo = getInitData().getNpcScriptInfo();
        npcScriptInfo.setTemplateID(npc);
        npcScriptInfo.setText(text);
        npcScriptInfo.setDefaultText(defaultText);
        npcScriptInfo.setMin(minLen);
        npcScriptInfo.setMax(maxLen);
        npcScriptInfo.setParam(style);
        npcScriptInfo.setColor(bottomStyle);

        npcScriptInfo.setMessageType(AskText);
        // 进入发包
        getChr().write(ScriptMan.scriptMessage(npcScriptInfo, AskText));
        getMemory().addMemoryInfo(npcScriptInfo);
    }

    default void getNPCTalk要求输入数字(int npc, String text, int defaultNumber, int min, int max, byte style, byte bottomSytle){
        NpcScriptInfo npcScriptInfo = getInitData().getNpcScriptInfo();
        npcScriptInfo.setTemplateID(npc);
        npcScriptInfo.setText(text);
        npcScriptInfo.setDefaultNumber(defaultNumber);
        npcScriptInfo.setMin(min);
        npcScriptInfo.setMax(max);
        npcScriptInfo.setParam(style);
        npcScriptInfo.setColor(bottomSytle);

        npcScriptInfo.setMessageType(AskNumber);
        // 进入发包
        getChr().write(ScriptMan.scriptMessage(npcScriptInfo, AskNumber));
        getMemory().addMemoryInfo(npcScriptInfo);
    }


    default void getNPCTalk宠物复活选择(int npc, String text, int[] options){
        NpcScriptInfo npcScriptInfo = getInitData().getNpcScriptInfo();
        npcScriptInfo.setTemplateID(npc);
        npcScriptInfo.setText(text);
        npcScriptInfo.setOptions(options);

        npcScriptInfo.setMessageType(AskPet);
        // 进入发包
        getChr().write(ScriptMan.scriptMessage(npcScriptInfo, AskPet));
        getMemory().addMemoryInfo(npcScriptInfo);


    }




    /**
     * ******************************** 正式的脚本方法 ********************************
     */

//   暂时未完成
    default void getNPCTalk求输入文本_特殊UI(byte head, int npc, short uiType, String defaultText, short 每行最大字数, short 最大行数, short 字体大小, short 行间距){

    }
//    default void onScriptMessage_黑色之翼密码锁(int result) {
//        黑色之翼密码锁(result);
//    }
//
//    default void onScriptMessage_鬼魂公园_入场符咒组合() {
//        鬼魂公园(NpcMessageType.OnGhostParkEnter.getVal());
//    }
//
//    default void onScriptMessage_鬼魂公园_入场符咒组合_竞赛模式() {
//        鬼魂公园(NpcMessageType.OnGhostParkEnter2.getVal());
//    }
//
//    default void onScriptMessage_莫奈德卷轴风格(int npc, String text) {
//        莫奈德卷轴风格(npc, text);
//    }
//
//    default void onScriptMessage_神之子双人美容(int costItem, int[] avatarsAlpha, int[] avatarsBeta) {
//        神之子双人美容(this.getPlayer(), costItem, avatarsAlpha, avatarsBeta);
//    }
//
//    default void onScriptMessage_万神殿传送门列表(int type, int lastIcon, String text) {
//        万神殿传送门列表(type, lastIcon, text);
//    }
//
//    default void onScriptMessage_限时答题_纯文本(byte type, String title, String problem, String hint, int minLen, int maxLen, int secondsLeft) {
//        限时答题_纯文本(type, title, problem, hint, minLen, maxLen, secondsLeft);
//    }
//
//    default void onScriptMessage_限时答题_纯文本_韩文(byte type, String text, String hint, int time) {
//        限时答题_纯文本_韩文(type, text, hint, time);
//    }
//
//    default void onScriptMessage_限时答题_猜NPC(byte type, int quizType, int npc, int gotPoints, int remainQuestions, int secondsLeft) {
//        限时答题_猜NPC(type, quizType, npc, gotPoints, remainQuestions, secondsLeft);
//    }
//
//    default void onScriptMessage_显示教程引导图片(String[] wzinfo) {
//        显示教程引导图片(wzinfo);
//    }
//
//    default void onScriptMessage_音乐游戏(String sound, int act, int b, int c) {
//        好友故事音乐游戏(sound, act, b, c);
//    }
//
//    default void onScriptMessage_选择转职道路(int type) {
//        夜光恶魔转职选择(type);
//    }
//


    default void askAcceptDecline(String text) {
        this.askAcceptDecline(text, getParentID());
    }

    default void askAcceptDecline(String text, int diffNPC) {
        this.askAcceptDecline(text, addTalkModeMask(NPCTalkMode.右侧显示NPC), diffNPC);
    }

    default void askAcceptDecline(String text, byte style, int diffNPC) {
        if (text.contains("#L")) {
            this.askMenu(text, style, diffNPC);
        } else {
            // 设置style 多覆盖一次，以防没设置上
            getInitData().getNpcScriptInfo().setParam((short) style);

            getNPCTalk(NpcMessageType.AskAccept2, text, false, false, style, diffNPC);
        }
    }

    default void askAcceptDecline_Bottom(String text) {
        this.askAcceptDecline_Bottom(text, getParentID());
    }

    default void askAcceptDecline_Bottom(String text, int diffNPC) {
        this.askAcceptDecline_Bottom(text, addTalkModeMask(NPCTalkMode.第二对话风格, NPCTalkMode.右侧显示NPC), diffNPC);
    }

    default void askAcceptDecline_Bottom(String text, byte style, int diffNPC) {
        this.askAcceptDecline_Bottom(text, style, diffNPC, (byte) 1);
    }

    default void askAcceptDecline_Bottom(String text, byte style, int diffNPC, byte bottomSytle) {
        if (text.contains("#L")) {
            this.askMenu(text, style, diffNPC);
        } else {
            getNPCTalk(NpcMessageType.AskAccept2, text, false, false, style, diffNPC, bottomSytle);
        }
    }

    default void askAcceptDecline_Illus(String text) {
        this.askAcceptDecline_Illus(text, getParentID());
    }

    default void askAcceptDecline_Illus(String text, int diffNPC) {
        this.askAcceptDecline_Illus(text, diffNPC, addTalkModeMask(NPCTalkMode.右侧显示NPC), true);
    }

    default void askAcceptDecline_Illus(String text, int diffNPC, byte style, boolean isLeft) {
        if (text.contains("#L")) {
            this.askMenu_Illus(text, diffNPC, style, false);
        } else {
            getNPCTalk立绘(NpcMessageType.AskAcceptIllustration, text, false, false, style, diffNPC, isLeft);
        }
    }


    default void askAcceptDecline_Illus_II(String text, int diffNPC, byte style, boolean isLeft) {
        if (text.contains("#L")) {
            this.askMenu_Illus_II(text, diffNPC, style, false);
        } else {
            getNPCTalk立绘(NpcMessageType.带人物立绘II_选择接受拒绝, text, false, false, style, diffNPC, isLeft);
        }
    }

    default void askAcceptDeclineNoESC(String text) {
        this.askAcceptDeclineNoESC(text, getParentID());
    }

    default void askAcceptDeclineNoESC(String text, int diffNPC) {
        this.askAcceptDecline(text, addTalkModeMask(NPCTalkMode.不可退出, NPCTalkMode.右侧显示自己), diffNPC);
    }

    default void askAcceptDeclineNoESC_Bottom(String text) {
        this.askAcceptDeclineNoESC_Bottom(text, getParentID());
    }

    default void askAcceptDeclineNoESC_Bottom(String text, int diffNPC) {
        this.askAcceptDecline_Bottom(text, addTalkModeMask(NPCTalkMode.第二对话风格, NPCTalkMode.右侧显示NPC, NPCTalkMode.不可退出), diffNPC);
    }

    default void askAcceptDeclineNoESC_Illus(String text) {
        this.askAcceptDeclineNoESC_Illus(text, getParentID());
    }

    default void askAcceptDeclineNoESC_Illus(String text, int diffNPC) {
        this.askAcceptDecline_Illus(text, diffNPC, addTalkModeMask(NPCTalkMode.右侧显示NPC, NPCTalkMode.不可退出), true);
    }

    default void askAcceptDeclineS(String text) {
        this.askAcceptDecline(text, addTalkModeMask(NPCTalkMode.右侧显示自己), getParentID());
    }

    default void askAcceptDeclineS_Bottom(String text) {
        this.askAcceptDecline_Bottom(text, getParentID());
    }

    default void askAcceptDeclineS_Bottom(String text, int diffNPC) {
        this.askAcceptDecline_Bottom(text, addTalkModeMask(NPCTalkMode.第二对话风格, NPCTalkMode.自己脸朝右, NPCTalkMode.NPC脸反向), diffNPC);
    }

    default void askAcceptDeclineSNoESC(String text) {
        this.askAcceptDecline(text, addTalkModeMask(NPCTalkMode.不可退出, NPCTalkMode.右侧显示自己), getParentID());
    }

    default void askAcceptDeclineSNoESC_Bottom(String text) {
        this.askAcceptDeclineNoESC_Bottom(text, getParentID());
    }

    default void askAcceptDeclineSNoESC_Bottom(String text, int diffNPC) {
        this.askAcceptDecline_Bottom(text, addTalkModeMask(NPCTalkMode.第二对话风格, NPCTalkMode.自己脸朝右, NPCTalkMode.NPC脸反向, NPCTalkMode.不可退出), diffNPC);
    }

    default void askAndroid(String text, int[] styles, int card) {
        this.askAndroid(text, getParentID(), card, styles);
    }

    default void askAndroid(String text, int npc, int card, int[] styles) {
        getNPCTalk机器人美容美发(npc, text, styles, card);
    }


    default void askAngelicBuster() {
        this.askAngelicBuster(getParentID());
    }

    default void askAngelicBuster(int npc) {
        {
            getNPCTalk天使装扮选择(npc);
        }
    }


    default void askAvatar(String text, int[] styles) {
        this.askAvatar(text, getParentID(), 0, styles);
    }

    default void askAvatar(String text, int[] styles, int card) {
        this.askAvatar(text, getParentID(), card, styles);
    }

    // 美容美发
    default void askAvatar(String text, int npc, int card, int[] options) {
        List<Integer> safeOptions = new ArrayList<>();
        for (var opt : options) {
            if (ItemConstants.isSkin(opt) || ItemData.getItemDeepCopy(opt) != null) {
                safeOptions.add(opt);
            }
        }

        if (safeOptions.size() > 0) {
            getInitData().getNpcScriptInfo().setAngelicBuster(false);
            getInitData().getNpcScriptInfo().setZeroBeta(false);
            getInitData().getNpcScriptInfo().setOptions(safeOptions.stream().mapToInt(i -> i).toArray());
            getInitData().getNpcScriptInfo().setConsumeItemId(card);
            getInitData().getNpcScriptInfo().setTemplateID(npc);
            sendGeneralSay(text, AskAvatar);

        } else {
            sendGeneralSay("We don't have any options here, sorry.", SayOk);
        }
    }


    default void askMenu(String text) {
        this.askMenu(text, getParentID());
    }

    default void askMenu(String text, int diffNPC) {
        this.askMenu(text, addTalkModeMask(NPCTalkMode.右侧显示NPC), diffNPC);
    }

    default void askMenu(String text, byte style, int diffNPC) {
        if (!text.contains("#L")) {
            this.sendNext(text, style, diffNPC);
        } else {
            getNPCTalk(NpcMessageType.AskMenu, text, false, false, style, diffNPC);
        }
    }

    default void askMenu_Bottom(String text) {
        this.askMenu_Bottom(text, getParentID());
    }

    default void askMenu_Bottom(String text, int diffNPC) {
        this.askMenu_Bottom(text, addTalkModeMask(NPCTalkMode.加高底部对话框, NPCTalkMode.特殊文字不跟随UI, NPCTalkMode.NPC脸反向, NPCTalkMode.右侧显示NPC), diffNPC);
    }

    default void askMenu_Bottom(String text, byte style, int diffNPC) {
        this.askMenu_Bottom(text, style, diffNPC, (byte) 1);
    }

    default void askMenu_Bottom(String text, byte style, int diffNPC, byte bottomSytle) {
        if (!text.contains("#L")) {
            this.sendNormalTalk(text, style, diffNPC, false, false);
        } else {
            getNPCTalk(NpcMessageType.AskMenu, text, false, false, style, diffNPC, bottomSytle);
        }
    }

    default void askMenu_Illus(String text) {
        this.askMenu_Illus(text, getParentID());
    }

    default void askMenu_Illus(String text, int diffNPC) {
        this.askMenu_Illus(text, diffNPC, addTalkModeMask(NPCTalkMode.右侧显示NPC), true);
    }

    default void askMenu_Illus(String text, int diffNPC, byte style, boolean isLeft) {
        if (!text.contains("#L")) {
            this.sendNormalTalk_Illus(text, diffNPC, style, false, false, false);
        } else {
            getNPCTalk立绘(NpcMessageType.AskMenuIllustration, text, false, false, style, diffNPC, isLeft);
        }
    }

    default void askMenu_Illus_II(String text, int diffNPC, byte style, boolean isLeft) {
        if (!text.contains("#L")) {
            this.sendNormalTalk_Illus_II(text, diffNPC, style, false, false, false);
        } else {
            getNPCTalk立绘(NpcMessageType.带人物立绘II_自定义选择, text, false, false, style, diffNPC, isLeft);
        }
    }

    default void askMenuNoESC(String text) {
        this.askMenuNoESC(text, getParentID());
    }

    default void askMenuNoESC(String text, int diffNPC) {
        this.askMenu(text, addTalkModeMask(NPCTalkMode.不可退出, NPCTalkMode.右侧显示自己), diffNPC);
    }

    default void askMenuNoESC_Bottom(String text) {
        this.askMenuNoESC_Bottom(text, getParentID());
    }

    default void askMenuNoESC_Bottom(String text, int diffNPC) {
        this.askMenu_Bottom(text, addTalkModeMask(NPCTalkMode.第二对话风格, NPCTalkMode.右侧显示NPC, NPCTalkMode.不可退出), diffNPC);
    }

    default void askMenuNoESC_Illus(String text) {
        this.askMenuNoESC_Illus(text, getParentID());
    }

    default void askMenuNoESC_Illus(String text, int diffNPC) {
        this.askMenu_Illus(text, diffNPC, addTalkModeMask(NPCTalkMode.右侧显示NPC, NPCTalkMode.不可退出), true);
    }

    default void askMenuS(String text) {
        this.askMenu(text, addTalkModeMask(NPCTalkMode.右侧显示自己), getParentID());
    }

    default void askMenuS_Bottom(String text) {
        this.askMenuS_Bottom(text, getParentID());
    }

    default void askMenuS_Bottom(String text, int diffNPC) {
        this.askMenu_Bottom(text, addTalkModeMask(NPCTalkMode.第二对话风格, NPCTalkMode.自己脸朝右, NPCTalkMode.NPC脸反向), diffNPC);
    }

    default void askMenuSNoESC(String text) {
        this.askMenu(text, addTalkModeMask(NPCTalkMode.不可退出, NPCTalkMode.右侧显示自己), getParentID());
    }

    default void askMenuSNoESC_Bottom(String text) {
        this.askMenuSNoESC_Bottom(text, getParentID());
    }

    default void askMenuSNoESC_Bottom(String text, int diffNPC) {
        this.askMenu_Bottom(text, addTalkModeMask(NPCTalkMode.第二对话风格, NPCTalkMode.自己脸朝右, NPCTalkMode.NPC脸反向, NPCTalkMode.不可退出), diffNPC);
    }

    default void askNumber(String text) {
        this.askNumber(text, 0, 0, Integer.MAX_VALUE);
    }

    default void askNumber(String text, int npc, int defaultNumber, int min, int max) {
        this.askNumber(text, npc, defaultNumber, min, max, addTalkModeMask(NPCTalkMode.右侧显示NPC));
    }

    default void askNumber(String text, int npc, int defaultNumber, int min, int max, byte style) {
        getNPCTalk要求输入数字(npc, text, defaultNumber, min, max, style, (byte) 0);
    }

    default void askNumber(String text, int defaultNumber, int min, int max) {
        this.askNumber(text, getParentID(), defaultNumber, min, max);
    }

    default void askNumber_Bottom(String text) {
        this.askNumber_Bottom(text, getParentID(), 0, 0, Integer.MAX_VALUE, addTalkModeMask(NPCTalkMode.第二对话风格, NPCTalkMode.右侧显示NPC));
    }

    default void askNumber_Bottom(String text, int npc, int defaultNumber, int min, int max) {
        this.askNumber_Bottom(text, npc, defaultNumber, min, max, addTalkModeMask(NPCTalkMode.第二对话风格, NPCTalkMode.右侧显示NPC));
    }

    default void askNumber_Bottom(String text, int npc, int defaultNumber, int min, int max, byte style) {
        this.askNumber_Bottom(text, npc, defaultNumber, min, max, style, (byte) 1);
    }

    default void askNumber_Bottom(String text, int npc, int defaultNumber, int min, int max, byte style, byte bottomSytle) {
        getNPCTalk要求输入数字(npc, text, defaultNumber, min, max, style, bottomSytle);
    }


    default void askNumber_Bottom(String text, int defaultNumber, int min, int max) {
        this.askNumber_Bottom(text, getParentID(), defaultNumber, min, max, addTalkModeMask(NPCTalkMode.第二对话风格, NPCTalkMode.右侧显示NPC));
    }

    default void askPet(String text, int[] pets) {
        this.askPet(text, getParentID(), pets);
    }

    default void askPet(String text, int npc, int[] pets) {
        getNPCTalk宠物复活选择(npc, text, pets);
    }


    default void askStartEndS(String text) {
        this.askAcceptDecline(text, addTalkModeMask(NPCTalkMode.自己脸朝右), getParentID());
    }

    default void askStartEndSNoESC(String text) {
        this.askAcceptDecline(text, addTalkModeMask(NPCTalkMode.自己脸朝右, NPCTalkMode.不可退出), getParentID());
    }

    default void askText(String text) {
        this.askText(text, getParentID());
    }

    default void askText(String text, int npc) {
        this.askText(text, "", npc, 0, 0);
    }

    default void askText(String text, String defaultText, int npc, int minLen, int maxLen) {
        this.askText(text, defaultText, npc, minLen, maxLen, addTalkModeMask(NPCTalkMode.右侧显示NPC));
    }

    default void askText(String text, String defaultText, int npc, int minLen, int maxLen, byte style) {
        getNPCTalk要求输入文本(npc, text, defaultText, minLen, maxLen, style, (byte) 0);
    }


    default void askText_Bottom(String text) {
        this.askText_Bottom(text, getParentID());
    }

    default void askText_Bottom(String text, int npc) {
        this.askText_Bottom(text, "", npc, 0, 0);
    }

    default void askText_Bottom(String text, String defaultText, int npc, int minLen, int maxLen) {
        this.askText_Bottom(text, defaultText, npc, minLen, maxLen, addTalkModeMask(NPCTalkMode.第二对话风格, NPCTalkMode.右侧显示NPC));
    }

    default void askText_Bottom(String text, String defaultText, int npc, int minLen, int maxLen, byte style) {
        this.askText_Bottom(text, defaultText, npc, minLen, maxLen, style, (byte) 1);
    }

    default void askText_Bottom(String text, String defaultText, int npc, int minLen, int maxLen, byte style, byte bottomSytle) {
        getNPCTalk要求输入文本(npc, text, defaultText, minLen, maxLen, style, bottomSytle);
    }

    default void askTextSpecialUI(byte head, int npc, short uiType, String defaultText, short 每行最大字数, short 最大行数, short 字体大小, short 行间距) {
        getNPCTalk求输入文本_特殊UI(head, npc, uiType, defaultText, 每行最大字数, 最大行数, 字体大小, 行间距);
    }



    default void askYesNo(String text) {
        this.askYesNo(text, getParentID());
    }

    default void askYesNo(String text, int diffNPC) {
        this.askYesNo(text, addTalkModeMask(NPCTalkMode.右侧显示NPC), diffNPC);
    }

    default void askYesNo(String text, byte style, int diffNPC) {
        if (text.contains("#L")) {
            this.askMenu(text, style, diffNPC);
        } else {
            getNPCTalk(NpcMessageType.AskYesNo, text, false, false, style, diffNPC);
        }
    }

    default void askYesNo_Bottom(String text) {
        this.askYesNo_Bottom(text, getParentID());
    }

    default void askYesNo_Bottom(String text, int diffNPC) {
        this.askYesNo_Bottom(text, addTalkModeMask(NPCTalkMode.第二对话风格, NPCTalkMode.右侧显示NPC), diffNPC);
    }

    default void askYesNo_Bottom(String text, byte style, int diffNPC) {
        this.askYesNo_Bottom(text, style, diffNPC, (byte) 1);
    }

    default void askYesNo_Bottom(String text, byte style, int diffNPC, byte bottomSytle) {
        if (text.contains("#L")) {
            this.askMenu(text, style, diffNPC);
        } else {
            getNPCTalk(NpcMessageType.AskYesNo, text, false, false, style, diffNPC, bottomSytle);
        }
    }

    default void askYesNo_Illus(String text) {
        this.askYesNo_Illus(text, getParentID());
    }

    default void askYesNo_Illus(String text, int diffNPC) {
        this.askYesNo_Illus(text, diffNPC, addTalkModeMask(NPCTalkMode.右侧显示NPC), true);
    }

    default void askYesNo_Illus(String text, int diffNPC, byte style, boolean isLeft) {
        if (text.contains("#L")) {
            this.askMenu_Illus(text, diffNPC, style, false);
        } else {
            getNPCTalk立绘(NpcMessageType.AskYesNoIllustration, text, false, false, style, diffNPC, isLeft);
        }
    }

    default void askYesNo_Illus_II(String text, int diffNPC, byte style, boolean isLeft) {
        if (text.contains("#L")) {
            this.askMenu_Illus_II(text, diffNPC, style, false);
        } else {
            getNPCTalk立绘(NpcMessageType.带人物立绘II_选择是否, text, false, false, style, diffNPC, isLeft);
        }
    }

    default void askYesNoNoESC(String text) {
        this.askYesNoNoESC(text, getParentID());
    }

    default void askYesNoNoESC(String text, int diffNPC) {
        this.askYesNo(text, addTalkModeMask(NPCTalkMode.不可退出, NPCTalkMode.右侧显示自己), diffNPC);
    }

    default void askYesNoNoESC_Bottom(String text) {
        this.askYesNoNoESC_Bottom(text, getParentID());
    }

    default void askYesNoNoESC_Bottom(String text, int diffNPC) {
        this.askYesNo_Bottom(text, addTalkModeMask(NPCTalkMode.第二对话风格, NPCTalkMode.右侧显示NPC, NPCTalkMode.不可退出), diffNPC);
    }

    default void askYesNoNoESC_Illus(String text) {
        this.askYesNoNoESC_Illus(text, getParentID());
    }

    default void askYesNoNoESC_Illus(String text, int diffNPC) {
        this.askYesNo_Illus(text, diffNPC, addTalkModeMask(NPCTalkMode.右侧显示NPC, NPCTalkMode.不可退出), true);
    }

    default void askYesNoS(String text) {
        this.askYesNo(text, addTalkModeMask(NPCTalkMode.右侧显示自己), getParentID());
    }

    default void askYesNoS_Bottom(String text) {
        this.askYesNoS_Bottom(text, getParentID());
    }

    default void askYesNoS_Bottom(String text, int diffNPC) {
        this.askYesNo_Bottom(text, addTalkModeMask(NPCTalkMode.第二对话风格, NPCTalkMode.自己脸朝右, NPCTalkMode.NPC脸反向), diffNPC);
    }

    default void askYesNoSNoESC(String text) {
        this.askYesNo(text, addTalkModeMask(NPCTalkMode.不可退出, NPCTalkMode.右侧显示自己), getParentID());
    }

    default void askYesNoSNoESC_Bottom(String text) {
        this.askYesNoSNoESC_Bottom(text, getParentID());
    }

    default void askYesNoSNoESC_Bottom(String text, int diffNPC) {
        this.askYesNo_Bottom(text, addTalkModeMask(NPCTalkMode.第二对话风格, NPCTalkMode.自己脸朝右, NPCTalkMode.NPC脸反向, NPCTalkMode.不可退出), diffNPC);
    }




    default void sendNext(String text) {
        this.sendNext(text, getParentID());
    }

    default void sendNext(String text, int diffNpcID) {
        this.sendNext(text, addTalkModeMask(NPCTalkMode.右侧显示NPC), diffNpcID);
    }

    default void sendNext(String text, byte style, int diffNPC) {
        this.sendNormalTalk(text, style, diffNPC, false, true);
    }

    default void sendNext_Bottom(String text) {
        this.sendNext_Bottom(text, getParentID());
    }

    default void sendNext_Bottom(String text, int diffNPC) {
        this.sendNormalTalk_Bottom(text, addTalkModeMask(NPCTalkMode.第二对话风格, NPCTalkMode.右侧显示NPC), diffNPC, false, true);
    }

    default void sendNext_Illus(String text) {
        this.sendNext_Illus(text, getParentID());
    }

    default void sendNext_Illus(String text, int diffNPC) {
        this.sendNormalTalk_Illus(text, diffNPC, addTalkModeMask(NPCTalkMode.右侧显示NPC), false, true, true);
    }

    default void sendNextNoESC(String text) {
        this.sendNextNoESC(text, getParentID());
    }

    default void sendNextNoESC(String text, int diffNpcID) {
        this.sendNext(text, addTalkModeMask(NPCTalkMode.不可退出, NPCTalkMode.右侧显示自己), diffNpcID);
    }

    default void sendNextNoESC_Bottom(String text) {
        this.sendNextNoESC_Bottom(text, getParentID());
    }

    default void sendNextNoESC_Bottom(String text, int diffNPC) {
        this.sendNormalTalk_Bottom(text, addTalkModeMask(NPCTalkMode.第二对话风格, NPCTalkMode.右侧显示NPC, NPCTalkMode.不可退出), diffNPC, false, true);
    }

    default void sendNextNoESC_Illus(String text) {
        this.sendNextNoESC_Illus(text, getParentID());
    }

    default void sendNextNoESC_Illus(String text, int diffNPC) {
        this.sendNormalTalk_Illus(text, diffNPC, addTalkModeMask(NPCTalkMode.右侧显示NPC, NPCTalkMode.不可退出), false, true, true);
    }

    default void sendNextPrev(String text) {
        this.sendNextPrev(text, getParentID());
    }

    default void sendNextPrev(String text, int diffNPC) {
        this.sendNextPrev(text, addTalkModeMask(NPCTalkMode.右侧显示NPC), diffNPC);
    }

    default void sendNextPrev(String text, byte style, int diffNPC) {
        this.sendNormalTalk(text, style, diffNPC, true, true);
    }

    default void sendNextPrev_Illus(String text) {
        this.sendNextPrev_Illus(text, getParentID());
    }

    default void sendNextPrev_Illus(String text, int diffNPC) {
        this.sendNormalTalk_Illus(text, diffNPC, addTalkModeMask(NPCTalkMode.右侧显示NPC), true, true, true);
    }

    default void sendNextPrevNoESC(String text) {
        this.sendNextPrevNoESC(text, getParentID());
    }

    default void sendNextPrevNoESC(String text, int diffNPC) {
        this.sendNextPrev(text, addTalkModeMask(NPCTalkMode.不可退出, NPCTalkMode.右侧显示自己), diffNPC);
    }

    default void sendNextPrevNoESC_Illus(String text) {
        this.sendNextPrevNoESC_Illus(text, getParentID());
    }

    default void sendNextPrevNoESC_Illus(String text, int diffNPC) {
        this.sendNormalTalk_Illus(text, diffNPC, addTalkModeMask(NPCTalkMode.右侧显示NPC, NPCTalkMode.不可退出), true, true, true);
    }

    default void sendNextPrevS(String text) {
        this.sendNextPrev(text, addTalkModeMask(NPCTalkMode.右侧显示自己), getParentID());
    }

    default void sendNextPrevSNoESC(String text) {
        this.sendNextPrev(text, addTalkModeMask(NPCTalkMode.不可退出, NPCTalkMode.右侧显示自己), getParentID());
    }

    default void sendNextS(String text) {
        this.sendNext(text, addTalkModeMask(NPCTalkMode.右侧显示自己), getParentID());
    }

    default void sendNextS_Bottom(String text) {
        this.sendNextS_Bottom(text, getParentID());
    }

    default void sendNextS_Bottom(String text, int diffNPC) {
        this.sendNormalTalk_Bottom(text, addTalkModeMask(NPCTalkMode.第二对话风格, NPCTalkMode.自己脸朝右, NPCTalkMode.NPC脸反向), diffNPC, false, true);
    }

    default void sendNextSNoESC(String text) {
        this.sendNext(text, addTalkModeMask(NPCTalkMode.不可退出, NPCTalkMode.右侧显示自己), getParentID());
    }

    default void sendNextSNoESC_Bottom(String text) {
        this.sendNextSNoESC_Bottom(text, getParentID());
    }

    default void sendNextSNoESC_Bottom(String text, int diffNPC) {
        this.sendNormalTalk_Bottom(text, addTalkModeMask(NPCTalkMode.第二对话风格, NPCTalkMode.自己脸朝右, NPCTalkMode.NPC脸反向, NPCTalkMode.不可退出), diffNPC, false, true);
    }

    default void sendNormalTalk(String text, byte style, int diffNPC, boolean prev, boolean next) {
        if (text.contains("#L")) {
            this.askMenu(text, style, diffNPC);
        } else {
            getNPCTalk(NpcMessageType.SayOk, text, prev, next, style, diffNPC);
        }
    }

    default void sendNormalTalk_Bottom(String text, byte style, int diffNPC, boolean prev, boolean next) {
        this.sendNormalTalk_Bottom(text, style, diffNPC, prev, next, (byte) 1);
    }

    default void sendNormalTalk_Bottom(String text, byte style, int diffNPC, boolean prev, boolean next, byte bottomSytle) {
        if (text.contains("#L")) {
            this.askMenu_Bottom(text, style, diffNPC);
        } else {
            getNPCTalk(NpcMessageType.SayOk, text, prev, next, style, diffNPC, bottomSytle);
        }
    }

    default void sendNormalTalk_Illus(String text, int diffNPC, byte style, boolean pre, boolean next, boolean isLeft) {
        if (text.contains("#L")) {
            this.askMenu_Illus(text, diffNPC, style, false);
        } else {
            getNPCTalk立绘(NpcMessageType.SayIllustration, text, pre, next, style, diffNPC, isLeft);
        }
    }

    default void sendNormalTalk_Illus_II(String text, int diffNPC, byte style, boolean pre, boolean next, boolean isLeft) {
        if (text.contains("#L")) {
            this.askMenu_Illus_II(text, diffNPC, style, false);
        } else {
            getNPCTalk立绘(NpcMessageType.SayDualIllustration, text, pre, next, style, diffNPC, isLeft);
        }
    }

    default void sendOk(String text) {
        this.sendOk(text, getParentID());
    }

    default void sendOk(String text, int diffNPC) {
        this.sendOk(text, addTalkModeMask(NPCTalkMode.右侧显示NPC), diffNPC);
    }

    default void sendOk(String text, byte style, int diffNPC) {
        this.sendNormalTalk(text, style, diffNPC, false, false);
    }

    default void sendOk_Bottom(String text) {
        this.sendOk_Bottom(text, getParentID());
    }

    default void sendOk_Bottom(String text, int diffNPC) {
        this.sendNormalTalk_Bottom(text, addTalkModeMask(NPCTalkMode.第二对话风格, NPCTalkMode.右侧显示NPC), diffNPC, false, false);
    }

    default void sendOk_Illus(String text) {
        this.sendOk_Illus(text, getParentID());
    }

    default void sendOk_Illus(String text, int diffNPC) {
        this.sendNormalTalk_Illus(text, diffNPC, addTalkModeMask(NPCTalkMode.右侧显示NPC), false, false, true);
    }

    default void sendOkNoESC(String text) {
        this.sendOkNoESC(text, getParentID());
    }

    default void sendOkNoESC(String text, int diffNPC) {
        this.sendOk(text, addTalkModeMask(NPCTalkMode.不可退出, NPCTalkMode.右侧显示自己), diffNPC);
    }

    default void sendOkNoESC_Bottom(String text) {
        this.sendOkNoESC_Bottom(text, getParentID());
    }

    default void sendOkNoESC_Bottom(String text, int diffNPC) {
        this.sendNormalTalk_Bottom(text, addTalkModeMask(NPCTalkMode.第二对话风格, NPCTalkMode.右侧显示NPC, NPCTalkMode.不可退出), diffNPC, false, false);
    }

    default void sendOkNoESC_Illus(String text) {
        this.sendOkNoESC_Illus(text, getParentID());
    }

    default void sendOkNoESC_Illus(String text, int diffNPC) {
        this.sendNormalTalk_Illus(text, diffNPC, addTalkModeMask(NPCTalkMode.右侧显示NPC, NPCTalkMode.不可退出), false, false, true);
    }

    default void sendOkS(String text) {
        this.sendOk(text, addTalkModeMask(NPCTalkMode.右侧显示自己), getParentID());
    }

    default void sendOkS_Bottom(String text) {
        this.sendOkS_Bottom(text, getParentID());
    }

    default void sendOkS_Bottom(String text, int diffNPC) {
        this.sendNormalTalk_Bottom(text, addTalkModeMask(NPCTalkMode.第二对话风格, NPCTalkMode.自己脸朝右, NPCTalkMode.NPC脸反向), diffNPC, false, false);
    }

    default void sendOkSNoESC(String text) {
        this.sendOk(text, addTalkModeMask(NPCTalkMode.不可退出, NPCTalkMode.右侧显示自己), getParentID());
    }

    default void sendOkSNoESC_Bottom(String text) {
        this.sendOkSNoESC_Bottom(text, getParentID());
    }

    default void sendOkSNoESC_Bottom(String text, int diffNPC) {
        this.sendNormalTalk_Bottom(text, addTalkModeMask(NPCTalkMode.第二对话风格, NPCTalkMode.自己脸朝右, NPCTalkMode.NPC脸反向, NPCTalkMode.不可退出), diffNPC, false, false);
    }

    default void sendPrev(String text) {
        this.sendPrev(text, getParentID());
    }

    default void sendPrev(String text, int diffNpcID) {
        this.sendPrev(text, addTalkModeMask(NPCTalkMode.右侧显示NPC), diffNpcID);
    }

    default void sendPrev(String text, byte style, int diffNpcID) {
        this.sendNormalTalk(text, style, diffNpcID, true, false);
    }

    default void sendPrev_Illus(String text) {
        this.sendPrev_Illus(text, getParentID());
    }

    default void sendPrev_Illus(String text, int diffNPC) {
        this.sendNormalTalk_Illus(text, diffNPC, addTalkModeMask(NPCTalkMode.右侧显示NPC), true, false, true);
    }

    default void sendPrevNoESC(String text) {
        this.sendPrevNoESC(text, getParentID());
    }

    default void sendPrevNoESC(String text, int diffNpcID) {
        this.sendPrev(text, addTalkModeMask(NPCTalkMode.不可退出, NPCTalkMode.右侧显示自己), diffNpcID);
    }

    default void sendPrevNoESC_Illus(String text) {
        this.sendPrevNoESC_Illus(text, getParentID());
    }

    default void sendPrevNoESC_Illus(String text, int diffNPC) {
        this.sendNormalTalk_Illus(text, diffNPC, addTalkModeMask(NPCTalkMode.右侧显示NPC, NPCTalkMode.不可退出), true, false, true);
    }

    default void sendPrevS(String text) {
        this.sendPrev(text, addTalkModeMask(NPCTalkMode.右侧显示自己), getParentID());
    }

    default void sendPrevSNoESC(String text) {
        this.sendPrev(text, addTalkModeMask(NPCTalkMode.不可退出, NPCTalkMode.右侧显示自己), getParentID());
    }

    default void 头发混染(String text) {
        头发混染(text);
    }
}