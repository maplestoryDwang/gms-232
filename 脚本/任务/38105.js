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
		cm.sendNormalTalk_Bottom("#face2#等下！你刚刚不是说不碰和旅馆有关的人嘛！", 36, 3005053, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("对谎话精来说是例外！！", 36, 3005056, false, true);
	} else if (status == i++) {
		cm.sendNormalTalk_Bottom("达尔米……哆哆嗦嗦……", 36, 3005055, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#该死，我和伊莉娜负责前方，#h0#，就请你去后方阻拦了。", 36, 3005053, false, true);
	} else if (status === i++) {
		cm.askYesNo_Bottom("#face0#准备好了吗？", 3005053);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("让你们见识见识铁弹军团的厉害！", 36, 3005056, false, true);
	} else if (status == i++) {
		cm.sendNormalTalk_Bottom("力大无穷！大力士！用生铁打造的子弹！", 36, 3005056, false, true);
	} else if (status == i++) {
		cm.warp(993165300, 1);
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
