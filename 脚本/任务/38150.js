var status = -1; // status: 当前聊天交互轮数
var selectionLog = []; // 记录每一轮的选择
// 任务开始时执行
function start(mode, type, selection) {
	if (cm.getNumberFromQuestInfo(38150, 'dir') == 0) {
		start0(mode, type, selection);
	} else {
		start1(mode, type, selection);
	}
}

function start0(mode, type, selection) {
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
		cm.sendNormalTalk("我是亚克斯旅馆的始祖龟队长，\r\n最近来旅馆的搜索者猛增。", 0, 3005016, false, true);
	} else if (status == i++) {
		cm.sendNormalTalk("但是周围的那些怪物阻挠搜索者的来访。", 0, 3005016, false, true);
	} else if (status == i++) {
		cm.sendNormalTalk("#b#h0##k，依然攒了一堆没交的住宿费，\r\n所以要帮助始祖龟。", 0, 3005016, false, true);
	} else if (status == i++) {
		cm.askAcceptDecline("始祖龟队长还会为#b#h0##k准备礼物。\r\n\r\n#b#e5个#i1713001# #z1713001#", 0, 3005016);
	} else if (status == i++) {
		cm.sendNormalTalk("#b#h0##k，你消灭周围想要消灭的怪物回来啦。", 0, 3005016, false, true);
	} else if (status == i++) {
		cm.sendNormalTalk("#b当天晚上零点#k之前未能完成时，任务将取消。", 0, 3005016, false, true);
	} else if (status == i++) {
		cm.sendNormalTalk("#b#h0##k，再去找始祖龟队长对话，任务开始。", 0, 3005016, false, true);
	} else if (status == i++) {
		cm.setNumberForQuestInfo(38150, 'dir', 1);
		cm.dispose();
	}
}

function start1(mode, type, selection) {
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
		var e = 6;
		var H = '选择心仪的任务吧。\r\n\r\n';
		for (var i = 1; i <= e; i++) {
			for (var i = 38151; i <= 38156; i++) {
				H += '#L' + i + '##b#e#y' + i + '##k#n#l\r\n';
			}
		}
		cm.askMenu(H, 3005016);
	} else if (status === i++) {
		cm.forceStartQuest(selection);
		cm.sendNormalTalk('等任务结束了就来找我完成吧，一定要在今晚零点之前来哦。', 0, 3005016, false, false);
		cm.forceCompleteQuest();
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
