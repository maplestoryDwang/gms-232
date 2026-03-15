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
		cm.sendNormalTalk_Bottom("xxx xxxx xxxx……", 36, 3005067, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#根本驴唇不对马嘴嘛，这叫人怎么问地图的下落……", 36, 3005052, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("要是贝尔在，一定会大叫“直接干掉吧！”的。", 56, 0, false, true)
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face1#我也想得一样，直接干掉吧。", 36, 3005052, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("……", 56, 0, false, true)
	} else if (status === i++) {
		cm.askYesNo_Bottom("#face0#我会去附近一带找找地图的，\r\n#h0#，就麻烦你帮忙扫荡#b探索爆蜥#k了。", 3005052);
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
	(mode == 1) ? status++ : status--;
	selectionLog[status] = selection;
	var i = -1;
	if (status <= i++) {
		cm.dispose();
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#这周围好像没有。", 36, 3005052, false, true);
	} else if (status == i++) {
		cm.forceCompleteQuest();
		cm.dispose();
	}
}
