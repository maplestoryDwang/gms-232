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
		cm.sendNormalTalk_Bottom("#face0#垂钓者公司啊……", 36, 3005053, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#几年前，因为一场原因不明的大型爆炸，在其势力大半被摧毁之后，基本上就销声匿迹了。", 36, 3005053, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#话说最近在荒蛮终点站出现的那个塞妮娅·安格洛。\r\n从消亡旅途T-boy一事推测，应该是正式开始重新展开活动了。", 36, 3005053, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#塞妮娅·安格洛方面，虽然当时事件后处于失踪状态，但据推测人还活着，\r\n等她再度出现时，记得一定要报告。", 36, 3005053, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#没想到那女的是个大人物啊？", 36, 3005053, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("要买下旅馆，应该不会是想在荒地中央建一座\r\n游乐园……", 56, 0, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("难不成这地方还是留下了古代神的什么东西……", 56, 0, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#总之要先避免将旅馆拱手让人啊？", 36, 3005053, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#是，一定要拦下来啊。", 36, 3005052, false, true);
	} else if (status === i++) {
		cm.setInGameDirectionMode(true, false, true);
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 2500, 0);
		cm.inGameDirectionEvent_AskAnswerTime(2500);
	} else if (status == i++) {
		cm.warp(993165205, 0, true);
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
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#话说这人怎么跟过来了？", 36, 3005053, false, true);
	} else if (status == i++) {
		cm.sendNormalTalk_Bottom("荒地！带路！", 36, 3005055, false, true);
	} else if (status == i++) {
		cm.forceCompleteQuest();
		cm.updateInfoQuest(38100, "17=h0;19=h0;16=h1;01=h1;12=h0;23=h0;24=h0;05=h1;06=h1;11=h1;04=h1;")
		cm.dispose();
	}
}
