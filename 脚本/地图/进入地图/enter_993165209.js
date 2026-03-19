var status = -1; // status: 当前聊天交互轮数
var selectionLog = []; // 记录每一轮的选择
function start() {
	action(1, 0, 0);
}
function action(mode, type, selection) {
	if (status == 0 && mode == 0) {
		cm.dispose();
		return;
	}
	status++;
	selectionLog[status] = selection;
	var i = -1;
	if (status <= i++) {
		cm.dispose();
	} else if (status === i++) {
		cm.resetMap(993165209)
		cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
		cm.curNodeEventEnd(true);
		cm.setInGameDirectionMode(true, false, true);
		cm.setStandAloneMode(true);
		cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
		cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, 1760, 60);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face1#和我闹着玩吗？！", 36, 3005053, false, true);
	} else if (status === i++) {
		cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/Hotel_arcs/train_sound", 100);
		cm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1500, 0);
		cm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		cm.userSetFieldFloating(993165209, 2, 2, 1);
		cm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		cm.userSetFieldFloating(993165209, 0, 0, 0);
		cm.fieldEffect_PlayBGM("Bgm57.img/Train heading nowhere");
		cm.inGameDirectionEvent_PushScaleInfo(4000, 1000, 4000, -4240, 143);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(4000);
	} else if (status === i++) {
		cm.userSetFieldFloating(993165209, 2, 2, 1);
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face1#那要怎么上去？没办法停下来吗？", 36, 3005053, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face1#我说过了啊！停不下来的。", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#该怎么办？", 36, 3005052, false, true);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 500, 0);
		cm.inGameDirectionEvent_AskAnswerTime(600);
	} else if (status === i++) {
		cm.inGameDirectionEvent_Monologue("就在这时……就好像荒地的某处也有绿洲一般。", 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_Monologue("因为那是突然出现的沙漠枪手……！。", 1);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1500);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.fieldEffect_ProcessOnOffLayer("Arcs", "Effect/Direction26.img/Arcs/illust/6", 0, 500, 0, 0, 0, 4, 1);
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#各位！！！", 36, 3004001, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#所有人握住我的手！", 36, 3004001, false, true);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.fieldEffect_ProcessOnOffLayer("Arcs", "", 2, 200, 0, 0, 0, 0, 0, 0, 0, 0, 0);
		cm.inGameDirectionEvent_AskAnswerTime(200);
	} else if (status === i++) {
		cm.curNodeEventEnd(true);
		cm.userSetFieldFloating(993165209, 0, 0, 0);
		cm.setInGameDirectionMode(false, true, false);
		cm.warp(993165210, 0);
		cm.dispose();
	}
}
