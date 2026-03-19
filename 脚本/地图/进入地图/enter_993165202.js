// 全局变量
var status = -1; // status: 当前聊天交互轮数
var selectionLog = []; // 记录每一轮的选择
var mode = 0;
function start() {
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (status == 0 && mode == 0) {
		cm.dispose();
		return;
	}

	(mode == 1) ? status++ : status--;
	selectionLog[status] = selection;

	var i = -1;
	if (status <= i++) {
		cm.dispose();
	} else if (status === i++) {
		cm.updateInfoQuest(38100, "17=h1;19=h1");
		cm.curNodeEventEnd(true);
		cm.setInGameDirectionMode(true, false, true);
		cm.setStandAloneMode(true);
		cm.inGameDirectionEvent_SetHideEffect(1);
		cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
		cm.npc_ChangeController(3005051, "oid=381018", 8, -53, 10, 0, 9, 1, true, 0, false);
		cm.inGameDirectionEvent_PushScaleInfo(0, 1500, 0, -418, -106);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("看来是在这里啊。", 36, 1540732, false, true);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/2019Update/door_open", 100);
		cm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2000, 0);
		cm.inGameDirectionEvent_AskAnswerTime(3000);
	} else if (status === i++) {
		cm.inGameDirectionEvent_PushScaleInfo(5000, 1500, 5000, 375, -106);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(6000);
	} else if (status === i++) {
		cm.updateInfoQuest(38100, "17=h1;19=h1;16=h0;01=h0");
		cm.npc_LeaveField("oid=381015");
		cm.warp(410003000, 0, true);
		cm.inGameDirectionEvent_AskAnswerTime(1);
	} else if (status === i++) {
		cm.npc_ChangeController(3005051, "oid=381018", 8, -53, 10, 0, 9, 1, true, 0, false);
		cm.npc_ChangeController(1540732, "oid=381015", -49, 0, 0, false, false);
		cm.npc_ChangeController(3005053, "oid=381017", -188, 0, 0, false, false);
		cm.onTeleport(0, 3, cm.getPlayer().getId(), -120, -1);
		cm.inGameDirectionEvent_SetHideEffect(0);
		cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 17, -20);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(1500);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("没看到有人呢，一个人都没有吗？", 36, 1540732, false, true);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#我是队长，始祖龟队长。", 36, 3005051, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#招待客人饮料，始祖龟特制饮料……", 36, 3005051, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("这脏水是什么情况？难道想毒害我们？", 36, 1540732, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face1#你来晚了。", 36, 3005070, false, true);
	} else if (status === i++) {
		cm.npc_ChangeController(3005052, "oid=381019", 102, -1, 9, 0, 103, 1, false, 2000, false);
		cm.npc_SetSpecialAction("oid=381019", "special2", 1, 1);
		cm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		cm.setNpcSpecialActionReset("oid=381019");
		cm.npc_SetSpecialAction("oid=381019", "special4", -1, 1);
		cm.sendNormalTalk_Bottom("#face0#虽然稍微掺杂了一点沙子，不过细细品味，能品尝出熬煮过的浓郁香味。", 36, 3005052, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#始祖龟队长，安排给客人煎个鸡蛋。", 36, 3005051, false, true);
	} else if (status === i++) {
		cm.npc_ChangeController(3005062, "oid=381020", 0, -1, 9, 0, -272, 0, false, 1000, false);
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("库博，要做，煎鸡蛋！", 36, 3005062, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face1#怎么这么吵呢！又打破盘子了吗！", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.npc_ChangeController(3005050, "oid=381021", 50, -1, 9, 0, 48, 1, false, 2000, false);
		cm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("库博，煎鸡蛋，要翻面了！", 36, 3005062, false, true);
	} else if (status === i++) {
		cm.npc_SetSpecialAction("oid=381020", "special", 1, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1700);
	} else if (status === i++) {
		cm.npc_SetSpecialAction("oid=381020", "special2", -1, 1);
		cm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/koong", 100);
		cm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face2#……", 36, 3005053, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#到底是谁……头上还戴着个煎鸡蛋？", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.npc_LeaveField("oid=381015");
		cm.npc_LeaveField("oid=381017");
		cm.npc_LeaveField("oid=381018");
		cm.npc_LeaveField("oid=381019");
		cm.npc_LeaveField("oid=381020");
		cm.npc_LeaveField("oid=381021");
		cm.updateInfoQuest(38100, "17=h0;19=h0;16=h1;01=h1;12=h1;23=h1;24=h1");
		cm.inGameDirectionEvent_AskAnswerTime(200);
	} else if (status === i++) {
		cm.setInGameDirectionMode(false, true, false);
		cm.curNodeEventEnd(true);
		cm.forceCompleteQuest(38101);
		cm.warp(410003000, 0, true);
		cm.dispose();
	}
}


