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
	} else if (status == i++) {
		if (cm.getPlayer().isGM()) {
			var id = cm.getQuest();
			cm.askYesNo("");
		} else {
			cm.forceStartQuest();
			cm.forceCompleteQuest();
			cm.dispose();
		}
	} else if (status == i++) {
		cm.forceStartQuest();
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
	mode == 1 ? status++ : status--;
	selectionLog[status] = selection;
	var i = -1;
	if (status <= i++) {
		cm.dispose();
	} else if (status == i++) {
		cm.sendNormalTalk('你回来啦，#b#y' + cm.getQuest() + '##k任务完成了是吗。', 0, 3005016, false, true);
	} else if (status == i++) {
		cm.sendNormalTalk('已发放#e#b5个#i1713001##z1713001##k#n，请查看装备栏。', 0, 3005016, false, false);
		cm.gainItem(1713001, 5);
		cm.forceCompleteQuest();
		cm.dispose();
	}
}
