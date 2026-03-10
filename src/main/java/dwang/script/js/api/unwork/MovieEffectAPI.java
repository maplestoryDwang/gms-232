package dwang.script.js.api.unwork;

import dwang.script.DwangScriptBaseApi;
import dwang.script.js.bean.JsInGameDirectionEvent;
import net.swordie.ms.connection.packet.InGameDirectionEvent;
import net.swordie.ms.connection.packet.UserLocal;
import net.swordie.ms.connection.packet.field.FieldPacket;
import net.swordie.ms.life.Life;
import net.swordie.ms.life.npc.Npc;
import net.swordie.ms.life.npc.NpcMessageType;
import net.swordie.ms.util.Position;
import net.swordie.ms.world.field.Field;
import net.swordie.ms.world.field.fieldeffect.FieldEffect;

public interface MovieEffectAPI extends DwangScriptBaseApi {
    public static final String INTENDED_NPE_MSG = "Intended NPE by forceful script stop.";

    /**
     * @出自类 MovieEffectAPI
     */
    default void cameraSwitch_CameraSwitchBack() {
    }


    /**
     * @出自类 MovieEffectAPI
     */
    default void cameraSwitch_PushSwitchMoveInfo(String str0, int value0) {
    }


    /**
     * @出自类 MovieEffectAPI
     */
    default void cameraSwitch_PushSwitchMoveToPos(int value0, int value1, int value2) {
    }


    /**
     * @出自类 MovieEffectAPI
     */
    default void cameraSwitch_SetCameraMoveByCID(String str0, int value0, int value1, int value2) {
    }


    /**
     * 每次放动画的开头结尾都要调用
     *
     * @param enabled
     * @出自类 MovieEffectAPI
     */
    default void curNodeEventEnd(boolean enabled) {
        setCurNodeEventEnd(enabled);
        getChr().write(FieldPacket.curNodeEventEnd(enabled));
    }

    default void setCurNodeEventEnd(boolean curNodeEventEnd) {
        this.getInitData().setCurNodeEventEnd(curNodeEventEnd);
    }


    /**
     * 叠加图层，出现于冒险岛英雄act1
     *
     * @param path
     * @param v1
     * @param v2
     * @出自类 MovieEffectAPI
     */
    default void effect_AddLayer(String path, int v1, int v2) {
    }


    /**
     * 人物变暗，出现于冒险岛英雄act1
     *
     * @param v1
     * @param v2
     * @出自类 MovieEffectAPI
     */
    default void effect_DarkenPlayer(int v1, int v2) {
    }


    /**
     * 全屏幕播放预设好的音画组合，注意此时目录不会在effect下面
     *
     * @param data 动画地址，如"Effect/Direction9.img/KaiserTutorial/Scene0"
     * @出自类 MovieEffectAPI
     */
    default void effect_Direction(String data) {
    }


    /**
     * @出自类 MovieEffectAPI
     */
    default void effect_Direction(String data, int value0, int value1, int value2) {
    }


    /**
     * @出自类 MovieEffectAPI
     */
    default void effect_GainExpGold(int exp) {
    }


    /**
     * 触发道具的自带特效
     *
     * @param item
     * @出自类 MovieEffectAPI
     */
    default void effect_Item(int item) {
    }


    /**
     * @出自类 MovieEffectAPI
     */
    default void effect_item_maker_success(String str0) {
    }


    /**
     * 出现于起源之塔第二层，可以持续存在
     *
     * @param str0
     * @param v1
     * @param v2
     * @param v3
     * @出自类 MovieEffectAPI
     */
    default void effect_LastingEff(String str0, int v1, int v2, int v3) {
    }


    /**
     * 开启黑夜模式，开启后屏幕变黑，只有周围有光
     *
     * @param dark
     * @出自类 MovieEffectAPI
     */
    default void effect_Lightness(int dark) {
    }


    /**
     * 显示说话气泡，在自己头上
     *
     * @param data 内容
     * @出自类 MovieEffectAPI
     */
    default void effect_NormalSpeechBalloon(String data) {
    }


    /**
     * 显示说话气泡，在自己头上
     *
     * @param data        内容
     * @param borderStyle 0=震惊 1=普通圆边矩形
     * @出自类 MovieEffectAPI
     */
    default void effect_NormalSpeechBalloon(String data, int borderStyle) {
    }


    /**
     * 显示说话气泡，在自己头上
     *
     * @param data        内容
     * @param borderStyle 0=震惊 1=普通圆边矩形
     * @param colorStyle  0=黑边白底 1=金框粉底（只有普通风格）
     * @出自类 MovieEffectAPI
     */
    default void effect_NormalSpeechBalloon(String data, int borderStyle, int colorStyle) {
    }


    /**
     * 显示说话气泡
     *
     * @param data        内容
     * @param borderStyle 0=震惊 1=普通圆边矩形
     * @param colorStyle  0=黑边白底 1=金框粉底（只有普通风格）
     * @param nameHeight  ？相对高度差
     * @param time        持续时间
     * @param npcID
     * @param playerID
     * @出自类 MovieEffectAPI
     */
    default void effect_NormalSpeechBalloon(String data, int borderStyle, int colorStyle, int nameHeight, int time, int npcID, int playerID) {
    }


    /**
     * @出自类 MovieEffectAPI
     */
    default void effect_NormalSpeechBalloon(String data, int borderStyle, int colorStyle, int nameHeight, int time, int v5, int v6, int v7, int v8, int v9, int npcID, int playerID) {
    }


    /**
     * @出自类 MovieEffectAPI
     */
    default void effect_NormalSpeechBalloon(String data, int borderStyle, int colorStyle, int nameHeight, int time, int v5, int v6, int v7, int v8, int v9, int npcID, String npcTag, int playerID) {
    }


    /**
     * 播放用于玩家自身的动画效果，例如表情
     *
     * @param data 地址，如"Effect/Direction15.img/effect/tuto/seal/front"
     * @出自类 MovieEffectAPI
     */
    default void effect_OnUserEff(String data) {
    }


    /**
     * 播放音乐
     *
     * @param path 地址，"Sound/Field.img/flowervioleta/cheer"
     * @出自类 MovieEffectAPI
     */
    default void effect_PlayMusic(String path) {
    }


    /**
     * 重复的显示图片？
     *
     * @param str0 路径
     * @出自类 MovieEffectAPI
     */
    default void effect_REPEAT(String str0, int v1, int v2, int v3, int v4, int v5) {
    }


    /**
     * 显示黑底标题，淡入并存在一段时间后淡出
     *
     * @出自类 MovieEffectAPI
     * @see EffectTextParam
     */
    default void effect_Text(Object strs, Object nums) {
    }


    /**
     * 播放Voice下的对话类音效
     * <p>
     * <p>
     * 其实功能有点重复
     *
     * @param data 地址，如"Voice.img/flowervioleta/mc/0"
     * @出自类 MovieEffectAPI
     */
    default void effect_Voice(String data) {
    }


    /**
     * @出自类 MovieEffectAPI
     */
    default void effect_Voice(String data, int value0) {
    }


    /**
     * @出自类 MovieEffectAPI
     */
    default void effect_准心瞄准效果(Object nums) {
    }


    /**
     * @出自类 MovieEffectAPI
     */
    default void effect_唐云料理_火焰怪猎人() {
    }


    /**
     * 改变玩家表情
     *
     * @param expression 表情
     * @param duration   持续时间
     * @出自类 MovieEffectAPI
     */
    default void emotion(int expression, int duration) {
    }


    /**
     * 赏金猎人、火焰狼出场时的音效
     *
     * @param msg
     * @出自类 MovieEffectAPI
     */
    default void eventEmergencySound(String msg) {
    }


    /**
     * @出自类 MovieEffectAPI
     */
    default void fieldEffect_BackgroundCanvas(int v1, int v2, int v3, int v4, int v5, int v6) {
    }


    /**
     * 改变NPC的颜色
     *
     * @param v1
     * @param R
     * @param G
     * @param B
     * @param alpha
     * @param v6    ?=0
     * @param npc
     * @出自类 MovieEffectAPI
     */
    default void fieldEffect_BackgroundCanvas(int v1, int R, int G, int B, int alpha, int v6, int npc) {
    }


    /**
     * @出自类 MovieEffectAPI
     */
    default void fieldEffect_Clear(String path) {
    }


    /**
     * @出自类 MovieEffectAPI
     */
    default void fieldEffect_Effect14(String s1, int b1, int b2) {
    }


    /**
     * 半边显示黑屏
     *
     * @param b1 启用？
     * @param v1 不透明度？
     * @param v2 ？=0
     * @param v3 淡入时间？
     * @param 方向 0=左 1=右
     * @出自类 MovieEffectAPI
     */
    default void fieldEffect_HalfScreenBlack(int b1, int v1, int v2, int v3, int 方向) {
    }


    /**
     * @出自类 MovieEffectAPI
     */
    default void fieldEffect_Hero8(int value0) {
    }


    /**
     * @出自类 MovieEffectAPI
     */
    default void fieldEffect_Hero9(int value0, int value1) {
    }


    /**
     * 兼容老脚本
     *
     * @出自类 MovieEffectAPI
     */
    default void fieldEffect_InsertCanvas(int enable, int alpha, int R, int G, int B, int duration) {
    }


    /**
     * 添加全屏单色遮罩
     *
     * @param enable   1=开，0=关
     * @param alpha    0=透明，255=全黑
     * @param R
     * @param G
     * @param B
     * @param duration 时间
     * @param value6   ？？？
     * @出自类 MovieEffectAPI
     */
    default void fieldEffect_InsertCanvas(int enable, int alpha, int R, int G, int B, int duration, int value6) {
    }


    /**
     * @出自类 MovieEffectAPI
     */
    default void fieldEffect_InsertCanvas11(int value0, int value1, int value2, int value3, int value4, int value5) {
    }


    /**
     * @出自类 MovieEffectAPI
     */
    default void fieldEffect_KinesisEXP(int value0) {
    }


    /**
     * @出自类 MovieEffectAPI
     */
    default void fieldEffect_LimanB(int value0) {
    }


    /**
     * @出自类 MovieEffectAPI
     */
    default void fieldEffect_OverlapScreenDetail(int value0, int value1, int value2, int value3) {
    }


    /**
     * 切换背景音乐
     *
     * @param path 地址，比如：
     *             <p>
     *             <p>
     *             静音 = "Bgm00/Silence"
     * @出自类 MovieEffectAPI
     */
    default void fieldEffect_PlayBGM(String path) {
    }


    /**
     * @param path
     * @param value0 音量
     * @出自类 MovieEffectAPI
     */
    default void fieldEffect_PlayBGM(String path, int value0) {
    }


    /**
     * @param path
     * @param value0 音量
     * @param value1 0
     * @出自类 MovieEffectAPI
     */
    default void fieldEffect_PlayBGM(String path, int value0, int value1) {
    }


    /**
     * 播放音效
     *
     * @param path 地址，比如 "Sound/Field.img/flowervioleta/cheer"
     * @出自类 MovieEffectAPI
     */
    default void fieldEffect_PlayFieldSound(String path) {
    }


    /**
     * 播放音效
     *
     * @param broadcast 是否广播
     * @param path      地址，比如 "Sound/Field.img/flowervioleta/cheer"
     * @出自类 MovieEffectAPI
     */
    default void fieldEffect_PlayFieldSound(int broadcast, String path) {
    }


    /**
     * @出自类 MovieEffectAPI
     */
    default void fieldEffect_PlaySummonSound(int value0, int value1, int value2) {
    }


    /**
     * @出自类 MovieEffectAPI
     */
    default void fieldEffect_ProcessOnOffLayer(String tag, String path, int operation, int loadTime, int x, int y, int value4, int dimension, int value6) {
    }


    /**
     * 播放图片或动画，并且可以移动图片、长期存留、受控卸载
     * <p>
     * <p>
     * 图像优先级最高，覆盖所有UI
     *
     * @param tag       单次播放的唯一性标签，不可覆盖，直到取消
     * @param path      地址，比如 "Map/Effect2.img/kinesis/chaJay"
     * @param operation 0=生成，1=移动，2=消失
     * @param loadTime  淡入时间/移动时间
     * @param x         出场/移动X
     * @param y         出场/移动Y
     * @param value4
     * @param dimension 持续时间
     * @param value6
     * @出自类 MovieEffectAPI
     */
    default void fieldEffect_ProcessOnOffLayer(String tag, String path, int operation, int loadTime, int x, int y, int value4, int dimension, int value6, int v7, int b1, int v8, int v9) {
    }


    /**
     * @出自类 MovieEffectAPI
     */
    default void fieldEffect_RemoveOverlapScreenDetail(int value0) {
    }


    /**
     * 特效包save
     *
     * @param path
     * @出自类 MovieEffectAPI
     */
    default void fieldEffect_SaveEff(String path) {
    }


    /**
     * 播放图片或动画，时间由wz定义，不可变更
     * <p>
     * <p>
     * 难得的不需要锁定玩家界面
     *
     * @param path 地址，如 "Map/Effect.img/rootabyss/demian"
     * @出自类 MovieEffectAPI
     */
    default void fieldEffect_ScreenMsg(String path) {
        showFieldEffect(path, 0);
    }

    default void showFieldEffect(String dir, int delay) {
        getField().broadcastPacket(FieldPacket.fieldEffect(FieldEffect.getFieldEffectFromWz(dir, delay)));
    }


    /**
     * 播放图片或动画，时间由wz定义，不可变更
     * <p>
     * <p>
     * 难得的不需要锁定玩家界面
     *
     * @param broadcast 是否广播
     * @param path      地址，如 "Map/Effect.img/rootabyss/demian"
     * @出自类 MovieEffectAPI
     */
    default void fieldEffect_ScreenMsg(boolean broadcast, String path) {
        if (broadcast) {
            getField().broadcastPacket(FieldPacket.fieldEffect(FieldEffect.getFieldEffectFromWz(path, 0)));
        } else {
            getChr().write(FieldPacket.fieldEffect(FieldEffect.getFieldEffectFromWz(path, 0)));
        }
    }


    /**
     * @出自类 MovieEffectAPI
     */
    default void fieldEffect_SetObjectState(String path) {
    }


    /**
     * @出自类 MovieEffectAPI
     */
    default void fieldEffect_SetObjectState(int broadcast, String path) {
    }


    /**
     * @出自类 MovieEffectAPI
     */
    default void fieldEffect_Tremble(int type, int delay, int time) {
    }


    /**
     * 与 fieldEffect_复合图片动画 关联
     *
     * @param tag      复合图片动画的标签
     * @param v1       淡出动作类型？
     * @param timeInMs 淡出时间
     * @出自类 MovieEffectAPI
     */
    default void fieldEffect_取消复合图片动画(String tag, int v1, int timeInMs) {
    }


    /**
     * @出自类 MovieEffectAPI
     * @see FieldEffect复合图片动画Param
     */
    default void fieldEffect_复合图片动画(Object strs, Object nums) {
    }


    /**
     * @出自类 MovieEffectAPI
     */
    default void fieldEffect_屏幕渐入插图A(Object strs, Object nums) {
    }


    /**
     * @出自类 MovieEffectAPI
     */
    default void fieldEffect_屏幕渐入插图B(Object strs, Object nums) {
    }


    /**
     * @出自类 MovieEffectAPI
     */
    default void fieldEffect_屏幕渐入插图消失A(Object strs, Object nums) {
    }


    /**
     * @出自类 MovieEffectAPI
     */
    default void fieldEffect_屏幕渐入插图消失B(Object strs, Object nums) {
    }


    /**
     * @出自类 MovieEffectAPI
     */
    default void funckeySetByScript(int type, int skillID, int keyIndex) {
    }


    /**
     * 显示倒计时UI
     *
     * @param time 单位秒
     * @出自类 MovieEffectAPI
     */
    default void getClock(int time) {
    }


    /**
     * @出自类 MovieEffectAPI
     */
    default void getClockSeconds(int ms) {
    }


    /**
     * 在对话中，延迟一段时间后触发等同于[下一步]的效果
     * <p>
     * <p>
     * 注意，搭配其他效果方法时，一定要保障同一个状态内[if(status==x){}]有且只有一个方法可以触发进入下一轮状态，否则会有不可预测后果
     *
     * @param delay 等待时间，单位毫秒
     * @出自类 MovieEffectAPI
     */
    default void inGameDirectionEvent_AskAnswerTime(int delay) {
        getInitData().getNpcScriptInfo().setMessageType(NpcMessageType.AskIngameDirection);
        getChr().write(UserLocal.inGameDirectionEvent(InGameDirectionEvent.delay(delay)));
//        Object response = null;
//        var lastActiveScriptType = getLastActiveScriptType();
//        if (getInitData().isActive(lastActiveScriptType)) {
//            response = getScriptInfoByType(lastActiveScriptType).awaitResponse();
//        }
//        if (response == null) {
//            throw new NullPointerException(INTENDED_NPE_MSG);
//        }
//        return (int) response;
    }


    /**
     * 神之子，破坏洗脑药
     *
     * @param text
     * @param v1
     * @param v2
     * @param v3
     * @出自类 MovieEffectAPI
     */
    default void inGameDirectionEvent_BreakEffect(String text, int v1, int v2, int v3) {
    }


    /**
     * 穿戴装备，出现于蘑菇城剧情
     *
     * @出自类 MovieEffectAPI
     */
    default void inGameDirectionEvent_ChangeEquipment(Object values) {
    }


    /**
     * @出自类 MovieEffectAPI
     */
    default void inGameDirectionEvent_ForcedFlip(int value0) {
    }


    /**
     * @出自类 MovieEffectAPI
     */
    default void inGameDirectionEvent_ForcedFlip15(int value0, int value1, int value2, int value3, int value4) {

        getChr().write(UserLocal.inGameDirectionEvent(InGameDirectionEvent.forcedFlip15(value0, value1, value2, value3, value4)));

    }


    /**
     * 屏幕中间显示文字的对话方式，要玩家触发
     *
     * @param text          文本
     * @param doNewDialogue 0=和上一次Monologue处于同一次对话 1=开启新对话，清理之前内容
     * @出自类 MovieEffectAPI
     */
    default void inGameDirectionEvent_Monologue(String text, int doNewDialogue) {
    }


    /**
     * 屏幕中间显示文字，从下往上滚动，点击可以强行取消，相当于一次对话
     *
     * @param text           文本
     * @param value0         ？？？反正不能为0
     * @param alignment      0=左对齐 1=居中 2=右对齐
     * @param updateInterval 每隔多少帧刷新一次位置，太高的话，播放会变得不连续
     * @param speed          滚动速度
     * @出自类 MovieEffectAPI
     */
    default void inGameDirectionEvent_MonologueScroll(String text, int value0, int alignment, int updateInterval, int speed) {
    }


    /**
     * 角色执行动作
     *
     * @param action [0=停止移动 1=往左移动 2=往右移动 3=站立起来 4=趴下去 5=往左跳跃 6=往右跳跃 7=往上跳跃
     *               8=趴下起立
     * @出自类 MovieEffectAPI
     */
    default void inGameDirectionEvent_MoveAction(int action) {
    }


    /**
     * 角色执行技能动作
     *
     * @出自类 MovieEffectAPI
     */
    default void inGameDirectionEvent_OneTimeAction(int action, int time) {
    }


    /**
     * 镜头水平移动，需要开启电影模式才有效
     * <p>
     * <p>
     * 会触发一次status变化
     *
     * @param action 0=移 1=复原
     * @param speed  速度，300≈走路速度
     * @param x      相对X 左负右正
     * @param y      相对Y 上负下正
     * @出自类 MovieEffectAPI
     */
    default void inGameDirectionEvent_PushMoveInfo(int action, int speed, int x, int y) {
        boolean back = false;
        if (action == 0) {
            back = false;
        } else {
            back = true;
        }

        getInitData(). getNpcScriptInfo().setMessageType(NpcMessageType.AskIngameDirection);
        getChr().write(UserLocal.inGameDirectionEvent(InGameDirectionEvent.cameraMove(back, speed, new Position(x, y))));
//        Object response = null;
//        var lastActiveScriptType = getLastActiveScriptType();
//        if (getInitData().isActive(lastActiveScriptType)) {
//            response = getScriptInfoByType(lastActiveScriptType).awaitResponse();
//        }
//        if (response == null) {
//            throw new NullPointerException(INTENDED_NPE_MSG);
//        }
//        return (int) response;
    }


    /**
     * 镜头缩放结合移动，需要开启电影模式才有效
     * <p>
     * <p>
     * 会触发一次status变化
     *
     * @param moveTime 移动耗时
     * @param ratio    缩放比例，标准1000，越大越放大
     * @param playTime 动画耗时，时间到后结束
     * @param x        地图x
     * @param y        地图y
     * @出自类 MovieEffectAPI
     */
    default void inGameDirectionEvent_PushScaleInfo(int moveTime, int ratio, int playTime, int x, int y) {
    }


    /**
     * @出自类 MovieEffectAPI
     */
    default void inGameDirectionEvent_PushScaleInfo(int moveTime, int b1, int ratio, int playTime, int x, int y) {
    }


    /**
     * 快速反应小游戏
     *
     * @param type 0=按空格 1=按左右 3=按Alt 4=按↓ 8=按↑
     * @出自类 MovieEffectAPI
     */
    default void inGameDirectionEvent_QTE(int type) {
    }


    /**
     * @出自类 MovieEffectAPI
     */
    default void inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection() {
    }


    /**
     * @出自类 MovieEffectAPI
     */
    default void inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2() {
    }


    /**
     * 变成无面人
     *
     * @param value0 参考值1
     * @出自类 MovieEffectAPI
     */
    default void inGameDirectionEvent_SetFaceOff(int value0) {
    }


    /**
     * 变成无面人
     *
     * @param value0 参考值1
     * @param value1 参考值300
     * @出自类 MovieEffectAPI
     */
    default void inGameDirectionEvent_SetFaceOff(int value0, int value1) {
    }


    /**
     * 隐藏角色
     *
     * @param doHide 1=隐藏 0=显示
     * @出自类 MovieEffectAPI
     */
    default void inGameDirectionEvent_SetHideEffect(int doHide) {
    }


    /**
     * @出自类 MovieEffectAPI
     */
    default void inGameDirectionEvent_SlideText(String str0, int b1, int b2) {
    }


    /**
     * @出自类 MovieEffectAPI
     */
    default void inGameDirectionEvent_Unknown9(int value0) {
    }


    /**
     * @出自类 MovieEffectAPI
     */
    default void inGameDirectionEvent_同时移动镜头和人(int value0, int value1) {
    }


    /**
     * @出自类 MovieEffectAPI
     */
    default void inGameDirectionEvent_同时移动镜头和人(int value0, int value1, int v2) {
    }


    /**
     * 为玩家播放动画，会根据朝向和位置相对播放
     *
     * @出自类 MovieEffectAPI
     * @see Effect头顶图片Param
     */
    default void inGameDirectionEvent_头顶图片(String[] strs, int[] nums) {
        JsInGameDirectionEvent eventObj = new JsInGameDirectionEvent();
        eventObj.effectStr = eventObj.getNextStr(strs);
        String npcTag = eventObj.getNextStr(strs);

        Field field = getField();
        Npc npc = (Npc) field.getLifeByCustomTag(npcTag);

        eventObj.arg3 = npc == null ? 0 : npc.getObjectId();
        eventObj.arg6 = eventObj.getNextStr(strs); // null
        eventObj.arg1 = eventObj.getNextInt(nums);
        eventObj.pointX = eventObj.getNextInt(nums);
        eventObj.pointY = eventObj.getNextInt(nums);
        eventObj.haveArg2 = eventObj.getNextInt(nums) > 0;
        eventObj.arg2 = eventObj.getNextInt(nums);  //z
        eventObj.haveArg3 = eventObj.getNextInt(nums) > 0;
        eventObj.arg4 = eventObj.getNextInt(nums) > 0;
        eventObj.arg5 = eventObj.getNextInt(nums) > 0;
        eventObj.haveArg6 = eventObj.getNextInt(nums) > 0;

        int idk2 = eventObj.arg5 ? 1 : 0;
        getChr().write(UserLocal.inGameDirectionEvent(InGameDirectionEvent.effectPlay(eventObj.effectStr, eventObj.arg1, new Position(eventObj.pointX, eventObj.pointY), eventObj.arg2, eventObj.arg3, eventObj.arg4, idk2)));


    }


    /**
     * @出自类 MovieEffectAPI
     */
    default void inGameDirectionEvent_隐藏头顶图片(String tag) {
    }


    /**
     * 倾斜视角，出现于莫奈德Act2追逐战
     *
     * @param v1
     * @param v2
     * @出自类 MovieEffectAPI
     */
    default void onCameraTilt(int v1, int v2) {
    }


    /**
     * 战神家教
     *
     * @param bSet          开关
     * @param nSkillID      跟随式技能
     * @param dwAbleFieldId 地图
     * @出自类 MovieEffectAPI
     */
    default void onHireTutorById(int bSet, int nSkillID, int dwAbleFieldId) {
    }


    /**
     * 未知新特效，狐狸谷等新副本出现
     *
     * @出自类 MovieEffectAPI
     */
    default void onNewSpecialEffect(int type, int args) {
    }


    /**
     * 为玩家启动导航效果
     *
     * @param mapId   目标地图ID
     * @param mode    0=指向传送点 1=指向NPC
     * @param text    传送点名称，或者NPC的ID
     * @param questID 任务ID，没有关联任务时填0
     * @出自类 MovieEffectAPI
     */
    default void OnStartNavigation(int mapId, int mode, String text, int questID) {
    }


    /**
     * 开启拍照模式
     *
     * @param b1   是否启用
     * @param b2
     * @param npcs 目标NPC
     * @param mobs 目标怪物
     * @param d
     * @param e    命中效果 -1=照相机
     * @param f    瞄准图标 -1=照相机
     * @param b3   拍照模式
     * @出自类 MovieEffectAPI
     */
    default void openCamera(int b1, int b2, Object npcs, Object mobs, int d, int e, int f, int b3) {
    }


    /**
     * 暂停画面一段时间
     *
     * @param value0 ？=0
     * @param value1 锁定画面时间 单位ms
     * @param value2 淡出锁定时间 单位ms
     * @param value3 ？=1
     * @出自类 MovieEffectAPI
     */
    default void OverlapScreenDetail19(int value0, int value1, int value2, int value3) {
    }


    /**
     * 播放音效，没有特殊参数
     *
     * @param text
     * @出自类 MovieEffectAPI
     */
    default void playSoundEffDirectly(String text) {
    }


    /**
     * 给玩家播放网页视频。
     *
     * @param url 视频网址
     * @出自类 MovieEffectAPI
     */
    default void playVideoByHttp(String url) {
    }


    /**
     * 给玩家播放视频。注意默认客户端里不包含全部视频，需要单独下载。
     *
     * @param data 视频文件名，不需要路径
     * @出自类 MovieEffectAPI
     */
    default void playVideoByScript(String data) {
    }


    /**
     * 重置强制状态，新手剧情使用
     *
     * @出自类 MovieEffectAPI
     */
    default void resetForcedStat() {
    }


    /**
     * 一系列新特效，大概是镜头移动相关
     *
     * @param type
     * @出自类 MovieEffectAPI
     */
    default void sendNewEffects(int type, Object ints) {
    }


    /**
     * 氛围/暴雪 相关
     *
     * @param text
     * @param value0
     * @param value1
     * @出自类 MovieEffectAPI
     */
    default void setAmbience(String text, int value0, int value1) {
    }


    /**
     * @出自类 MovieEffectAPI
     */
    default void setDirectionMode(int enabled) {
    }


    /**
     * 设置强制状态，新手剧情使用
     * <p>
     * <p>
     * 力量 = 999 敏捷 =999 智力 = 999 运气 = 999 物理攻击力 = 255 命中值 = 999 回避值 = 999 速度 =
     * 140 跳跃 = 123
     *
     * @出自类 MovieEffectAPI
     */
    default void setForcedStat() {
    }


    /**
     * 设置强制状态，新手剧情使用
     *
     * @param str   力量
     * @param dex   敏捷
     * @param _int  智力
     * @param luk   运气
     * @param watk  物理攻击力
     * @param matk  魔法攻击力
     * @param acc   命中值
     * @param avoid 回避值
     * @param speed 速度
     * @param jump  跳跃
     * @出自类 MovieEffectAPI
     */
    default void setForcedStat(int str, int dex, int _int, int luk, int watk, int matk, int acc, int avoid, int speed, int jump) {
    }


    /**
     * 屏蔽/解锁操作台
     *
     * @param doLock true=锁 false=解
     * @出自类 MovieEffectAPI
     */
    default void setInGameDirectionMode(boolean doLock) {
        setInGameDirectionMode(doLock, false, false);
    }


    /**
     * 屏蔽/解锁操作台
     *
     * @param lock            true=锁 false=解
     * @param showMovieBorder true=有电影式黑边
     * @出自类 MovieEffectAPI
     */
    default void setInGameDirectionMode(boolean lock, boolean showMovieBorder) {

        setInGameDirectionMode(lock, showMovieBorder, true);
    }


    /**
     * 屏蔽/解锁操作台
     *
     * @param lock            true=锁 false=解
     * @param showMovieBorder true=有电影式黑边
     * @param asBackground    true=黑边作为背景，不会遮挡对话框
     * @出自类 MovieEffectAPI
     */
    default void setInGameDirectionMode(boolean lock, boolean showMovieBorder, boolean asBackground) {
        if (getChr() != null) {
            getChr().write(UserLocal.setInGameDirectionMode(lock, showMovieBorder, asBackground));
        }
    }


    /**
     * 修改HP上限
     *
     * @出自类 MovieEffectAPI
     */
    default void setMaxHp(int maxhp) {
    }


    /**
     * 显示怪物图片素材，出现于莫奈德Act2追逐战后
     *
     * @param text
     * @param scale
     * @出自类 MovieEffectAPI
     */
    default void setMobImage(String text, int scale) {
    }


    /**
     * 添加跟随玩家的伙伴
     * <p>
     * <p>
     * 注意！可跟随的伙伴种类非常有限，具体最好查询String.wz里skill.xml的翻译，搜索“伙伴”
     *
     * @param show     是否开启
     * @param dwNPCID  NPC的ID，似乎没有用
     * @param nSkillID 伙伴技能ID，决定伙伴NPC是谁
     * @param nCount   召唤数量
     * @出自类 MovieEffectAPI
     */
    default void setPartner(int show, int dwNPCID, int nSkillID, int nCount) {
    }


    /**
     * 添加跟随玩家的伙伴，进阶版，出现于莫奈德
     *
     * @param pPartner
     * @param dwNPCID
     * @param nSkillID
     * @param x
     * @param y
     * @param end
     * @出自类 MovieEffectAPI
     */
    default void setPartnerAction(int pPartner, int dwNPCID, int nSkillID, int x, int y, int end) {
    }


    /**
     * 屏蔽/解锁 剧情其他玩家
     *
     * @param enabled 开关
     * @出自类 MovieEffectAPI
     */
    default void setStandAloneMode(int enabled) {
    }


    /**
     * 地图左右晃动 抖动
     *
     * @param mapId 地图ID
     * @param nX    左
     * @param nY    右
     * @param tTerm 频率
     * @出自类 MovieEffectAPI
     */
    default void userSetFieldFloating(int mapId, int nX, int nY, int tTerm) {
    }


    /**
     * 强制向指定相对坐标跳跃
     *
     * @出自类 MovieEffectAPI
     */
    default void 特效_角色强制跳跃(int x, int y, int b1, int 隐藏脚底气体特效) {
    }


    /**
     * 角色改变相对位置，无视任何地图限制，不需要剧情锁
     *
     * @param timeInMs 单位 ms
     * @出自类 MovieEffectAPI
     */
    default void 特效_角色改变相对位置(int x, int y, int timeInMs) {
    }


}
