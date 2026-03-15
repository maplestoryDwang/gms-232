var status = -1; // status: 当前聊天交互轮数
var selectionLog = []; // 记录每一轮的选择
// 任务开始时执行
function start(mode, type, selection) {
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
		cm.resetMap(993060090)
		cm.curNodeEventEnd(true);
		cm.setInGameDirectionMode(true, false, true);
		cm.setStandAloneMode(true);
		cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
		cm.OverlapScreenDetail19(0, 1000, 3000, 1);
		cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
	} else if (status === i++) {
		cm.onTeleport(0, 3, cm.getPlayer().getId(), -290, 85);
		cm.inGameDirectionEvent_ForcedFlip(1);
		cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(700);
	} else if (status == i++) {
		cm.fieldEffect_RemoveOverlapScreenDetail(1000);
		cm.inGameDirectionEvent_PushScaleInfo(0, 1500, 0, 0, 100);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.inGameDirectionEvent_PushScaleInfo(2000, 1500, 2000, -170, 100);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(2100);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("（黑魔法师的魔力刻印在武器上的瞬间，一部分阿卡伊勒的记忆涌现进入脑海。）", 56, 0, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("（大家一时间都有些惊慌，但是过了一会就平复了心情，开始判断目前的情况。）", 56, 0, false, true);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(1500);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#和戴米安一战后历经磨难幸存下来的阿卡伊勒。\r\n他为了完全恢复力量，需要帮助……", 36, 9063152, false, true);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(1500);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#那个帮助恐怕就是……", 36, 9063152, false, true);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(1500);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#应该会是和黑魔法师之片鳞……相似的东西。", 36, 9063153, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#军团长从黑魔法师那里获得的力量和黑魔法师之片鳞。\r\n如果发挥出它的力量…….", 36, 9063153, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#这下子就确定了。\r\n为了获得力量，必须要获得他的片鳞。", 36, 9063153, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#那就……必须继续击败包括军团长在内的\r\n黑魔法师的残影。", 36, 9063152, false, true);
	} else if (status === i++) {
		cm.OverlapScreenDetail19(0, 1000, 3000, 1);
		cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
	} else if (status === i++) {
		cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(700);
	} else if (status == i++) {
		cm.fieldEffect_RemoveOverlapScreenDetail(1000);
		cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, 562, 103);
	} else if (status === i++) {
		cm.forceCompleteQuest();
		cm.curNodeEventEnd(true);
		cm.setInGameDirectionMode(false, true, false);
		cm.dispose();
	}
}

// 依次对话时执行。根据已对话的次数，分别会调用 stage0, stage1, .....stageN
function stage0(mode, type, selection) {
	if (status == 0 && mode == 0) {
		cm.dispose();
		return;
	}
	status++;
	selectionLog[status] = selection;
	var i = -1;
	if (status <= i++) {
		cm.dispose();
	} else if (status == i++) {
		var id = cm.getQuest();
		cm.askYesNo("");
	} else if (status == i++) {
		cm.forceStartQuest();
		cm.dispose();
	}
}

// 任务结束时执行
function end(mode, type, selection) {
	if (status == 0 && mode == 0) {
		cm.dispose();
		return;
	}
	(mode == 1) ? status++ : status--;
	selectionLog[status] = selection;
	var i = -1;
	if (status <= i++) {
		cm.dispose();
	} else if (status == i++) {
		var id = cm.getQuest();
		cm.askYesNo("");
	} else if (status == i++) {
		cm.forceCompleteQuest();
		cm.dispose();
	}
}
