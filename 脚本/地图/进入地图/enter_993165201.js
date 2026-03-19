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
		cm.curNodeEventEnd(true);
		cm.setInGameDirectionMode(true, false, true);
		cm.setStandAloneMode(true);
		cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
		cm.inGameDirectionEvent_ForcedFlip(-1);
		cm.npc_ChangeController(1540732, "oid=381015", 40, 254, 1, false, false);
		cm.npc_ChangeController(3005053, "oid=381017", -50, 254, 0, false, false);
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, -500, -650);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1500, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.effect_Text(["#fn黑体##fs18#几天后，格兰蒂斯沙漠某处"], [100, 1000, 6, 0, -80, 1, 4, 0, 0, 0, 0])
		cm.inGameDirectionEvent_AskAnswerTime(5000);
	} else if (status === i++) {
		cm.inGameDirectionEvent_PushScaleInfo(5000, 1000, 5000, 94, 84);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(6000);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("……就是因为这样，才一路来到了这里……", 37, 1540732, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("我实在是搞不清楚到底有什么。", 37, 1540732, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("居然是一片只有坍塌站台的沙漠，\r\n首先能否正常营业这件事就要打一个问号了。", 37, 1540732, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#先去……周围转转吧？", 37, 3005053, false, true);
	} else if (status === i++) {
		cm.curNodeEventEnd(true);
		cm.forceStartQuest(38101, "");
		cm.updateInfoQuest(38100, "17=h1;19=h1");
		cm.npc_LeaveField("oid=381015");
		cm.npc_LeaveField("oid=381017");
		cm.setInGameDirectionMode(false, true, false);
		cm.warp(410003020, 0);
		cm.dispose();
	}
}
