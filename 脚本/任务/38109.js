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
		cm.askYesNo_Bottom("#face0#要不要再深入看看？", 3005052);
	} else if (status == i++) {
		cm.forceStartQuest();
		cm.OnStartNavigation(410003120, 0, "", 0);
		cm.updateInfoQuest(38100, "16=h1;01=h1;12=h1;23=h0;08=h1");
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
		cm.sendNormalTalk_Bottom("#face0#这里的爆蜥貌似在用汽车部件制作工具。", 36, 3005052, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("既然智能到这个程度，应该可以对话吧？", 56, 0, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#嗯……", 36, 3005052, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("这种应该算是贝尔的专业……", 56, 0, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("那、那个……你们……见过四四方方的地图吗？", 56, 0, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("？", 36, 3005076, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#直接无视了呢。", 36, 3005052, false, true);
	} else if (status == i++) {
		cm.forceCompleteQuest();
		cm.dispose();
	}
}
