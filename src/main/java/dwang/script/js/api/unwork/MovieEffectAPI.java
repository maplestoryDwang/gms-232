package dwang.script.js.api.unwork;

import dwang.script.DwangScriptBaseApi;

public interface MovieEffectAPI extends DwangScriptBaseApi {

    default void userSetFieldFloating(int mapId, int nX, int nY, int tTerm) { }

    default void onHireTutorById(int bSet, int nSkillID, int dwAbleFieldId) { }

    default void fieldEffect_HalfScreenBlack(int b1, int v1, int v2, int v3, int 方向) { }

    default void effect_Text(Object strs, Object nums) { }

    default void onNewSpecialEffect(int type, int args) { }

    default void inGameDirectionEvent_ChangeEquipment(Object values) { }

    default void setAmbience(String text, int value0, int value1) { }

    default void inGameDirectionEvent_Monologue(String text, int doNewDialogue) { }

    default void fieldEffect_BackgroundCanvas(int v1, int R, int G, int B, int alpha, int v6, int npc) { }

    default void fieldEffect_SetObjectState(int broadcast, String path) { }

    default void effect_Item(int item) { }

    default void fieldEffect_屏幕渐入插图消失A(Object strs, Object nums) { }

    default void inGameDirectionEvent_OneTimeAction(int action, int time) { }

    default void getClock(int time) { }

    default void effect_GainExpGold(int exp) { }

    default void getClockSeconds(int ms) { }

    default void effect_唐云料理_火焰怪猎人() { }

    default void effect_Voice(String data, int value0) { }

    default void effect_NormalSpeechBalloon(String data, int borderStyle, int colorStyle, int nameHeight, int time, int v5, int v6, int v7, int v8, int v9, int npcID, int playerID) { }

    default void playVideoByScript(String data) { }

    default void fieldEffect_Effect14(String s1, int b1, int b2) { }

    default void fieldEffect_ProcessOnOffLayer(String tag, String path, int operation, int loadTime, int x, int y, int value4, int dimension, int value6, int v7, int b1, int v8, int v9) { }

    default void cameraSwitch_PushSwitchMoveToPos(int value0, int value1, int value2) { }

    default void effect_AddLayer(String path, int v1, int v2) { }

    default void fieldEffect_取消复合图片动画(String tag, int v1, int timeInMs) { }

    default void setMobImage(String text, int scale) { }

    default void effect_DarkenPlayer(int v1, int v2) { }

    default void playVideoByHttp(String url) { }

    default void playSoundEffDirectly(String text) { }

    default void inGameDirectionEvent_ForcedFlip(int value0) { }

    default void effect_PlayMusic(String path) { }

    default void inGameDirectionEvent_PushScaleInfo(int moveTime, int b1, int ratio, int playTime, int x, int y) { }

    default void 特效_角色改变相对位置(int x, int y, int timeInMs) { }

    default void fieldEffect_Hero9(int value0, int value1) { }

    default void emotion(int expression, int duration) { }

    default void fieldEffect_BackgroundCanvas(int v1, int v2, int v3, int v4, int v5, int v6) { }

    default void setMaxHp(int maxhp) { }

    default void setInGameDirectionMode(int lock, int showMovieBorder, int asBackground) { }

    default void inGameDirectionEvent_MonologueScroll(String text, int value0, int alignment, int updateInterval, int speed) { }

    default void effect_OnUserEff(String data) { }

    default void setDirectionMode(int enabled) { }

    default void effect_NormalSpeechBalloon(String data, int borderStyle, int colorStyle, int nameHeight, int time, int npcID, int playerID) { }

    default void funckeySetByScript(int type, int skillID, int keyIndex) { }

    default void fieldEffect_ScreenMsg(int broadcast, String path) { }

    default void fieldEffect_PlayBGM(String path) { }

    default void cameraSwitch_SetCameraMoveByCID(String str0, int value0, int value1, int value2) { }

    default void setInGameDirectionMode(int lock, int showMovieBorder) { }

    default void inGameDirectionEvent_Unknown9(int value0) { }

    default void inGameDirectionEvent_ForcedFlip15(int value0, int value1, int value2, int value3, int value4) { }

    default void inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection() { }

    default void inGameDirectionEvent_SetFaceOff(int value0, int value1) { }

    default void inGameDirectionEvent_SetHideEffect(int doHide) { }

    default void inGameDirectionEvent_AskAnswerTime(int time) { }

    default void fieldEffect_InsertCanvas(int enable, int alpha, int R, int G, int B, int duration) { }

    default void 特效_角色强制跳跃(int x, int y, int b1, int 隐藏脚底气体特效) { }

    default void fieldEffect_InsertCanvas(int enable, int alpha, int R, int G, int B, int duration, int value6) { }

    default void effect_准心瞄准效果(Object nums) { }

    default void fieldEffect_LimanB(int value0) { }

    default void inGameDirectionEvent_SetFaceOff(int value0) { }

    default void fieldEffect_PlayBGM(String path, int value0, int value1) { }

    default void fieldEffect_OverlapScreenDetail(int value0, int value1, int value2, int value3) { }

    default void inGameDirectionEvent_MoveAction(int action) { }

    default void cameraSwitch_CameraSwitchBack() { }

    default void fieldEffect_Tremble(int type, int delay, int time) { }

    default void fieldEffect_Hero8(int value0) { }

    default void fieldEffect_ScreenMsg(String path) { }

    default void inGameDirectionEvent_同时移动镜头和人(int value0, int value1) { }

    default void OnStartNavigation(int mapId, int mode, String text, int questID) { }

    default void setForcedStat(int str, int dex, int _int, int luk, int watk, int matk, int acc, int avoid, int speed, int jump) { }

    default void setStandAloneMode(int enabled) { }

    default void inGameDirectionEvent_SlideText(String str0, int b1, int b2) { }

    default void inGameDirectionEvent_BreakEffect(String text, int v1, int v2, int v3) { }

    default void setInGameDirectionMode(int doLock) { }

    default void inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2() { }

    default void resetForcedStat() { }

    default void sendNewEffects(int type, Object ints) { }

    default void fieldEffect_PlayFieldSound(String path) { }

    default void inGameDirectionEvent_PushMoveInfo(int action, int speed, int x, int y) { }

    default void inGameDirectionEvent_隐藏头顶图片(String tag) { }

    default void inGameDirectionEvent_头顶图片(Object strs, Object nums) { }

    default void fieldEffect_屏幕渐入插图A(Object strs, Object nums) { }

    default void fieldEffect_SetObjectState(String path) { }

    default void inGameDirectionEvent_PushScaleInfo(int moveTime, int ratio, int playTime, int x, int y) { }

    default void effect_Lightness(int dark) { }

    default void setPartner(int show, int dwNPCID, int nSkillID, int nCount) { }

    default void openCamera(int b1, int b2, Object npcs, Object mobs, int d, int e, int f, int b3) { }

    default void fieldEffect_PlayFieldSound(int broadcast, String path) { }

    default void effect_LastingEff(String str0, int v1, int v2, int v3) { }

    default void effect_REPEAT(String str0, int v1, int v2, int v3, int v4, int v5) { }

    default void fieldEffect_ProcessOnOffLayer(String tag, String path, int operation, int loadTime, int x, int y, int value4, int dimension, int value6) { }

    default void effect_Direction(String data) { }

    default void fieldEffect_InsertCanvas11(int value0, int value1, int value2, int value3, int value4, int value5) { }

    default void fieldEffect_屏幕渐入插图B(Object strs, Object nums) { }

    default void fieldEffect_复合图片动画(Object strs, Object nums) { }

    default void fieldEffect_Clear(String path) { }

    default void effect_NormalSpeechBalloon(String data, int borderStyle, int colorStyle, int nameHeight, int time, int v5, int v6, int v7, int v8, int v9, int npcID, String npcTag, int playerID) { }

    default void fieldEffect_屏幕渐入插图消失B(Object strs, Object nums) { }

    default void onCameraTilt(int v1, int v2) { }

    default void curNodeEventEnd(int enabled) { }

    default void setPartnerAction(int pPartner, int dwNPCID, int nSkillID, int x, int y, int end) { }

    default void OverlapScreenDetail19(int value0, int value1, int value2, int value3) { }

    default void effect_Voice(String data) { }

    default void effect_NormalSpeechBalloon(String data, int borderStyle) { }

    default void cameraSwitch_PushSwitchMoveInfo(String str0, int value0) { }

    default void fieldEffect_PlaySummonSound(int value0, int value1, int value2) { }

    default void effect_NormalSpeechBalloon(String data, int borderStyle, int colorStyle) { }

    default void effect_NormalSpeechBalloon(String data) { }

    default void inGameDirectionEvent_QTE(int type) { }

    default void fieldEffect_PlayBGM(String path, int value0) { }

    default void fieldEffect_RemoveOverlapScreenDetail(int value0) { }

    default void inGameDirectionEvent_同时移动镜头和人(int value0, int value1, int v2) { }

    default void effect_item_maker_success(String str0) { }

    default void setForcedStat() { }

    default void effect_Direction(String data, int value0, int value1, int value2) { }

    default void fieldEffect_KinesisEXP(int value0) { }

    default void eventEmergencySound(String msg) { }

    default void fieldEffect_SaveEff(String path) { }

}
