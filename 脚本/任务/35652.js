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
		cm.sendNormalTalk_Bottom("#face0#走过了艰难旅程的人，和神战斗的人。\r\n#b#h0##k充分具备成为创世武器主人的资格。", 37, 9063152, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#……但同时你也已经完成了作为勇士的职责。\r\n为了守护这个世界，你已经做出了许多牺牲。", 37, 9063152, false, true);
	} else if (status === i++) {
		cm.askAcceptDecline_Bottom("#face0#是否要再次踏上艰难的旅程……决定权在你手上。\r\n请告诉我你的答案吧，#b#h0##k。", 36, 9063152);
	} else {
		var jobId = cm.getJob();
		if (jobId in { '10000': 1, '10100': 1, '10110': 1, '10111': 1, '10112': 1 }) {
			var reactor = 'action分支0';
			eval(reactor)(mode, type, selection, i);
		} else {
			var reactor = 'action分支1';
			eval(reactor)(mode, type, selection, i);
		}
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
		cm.sendNormalTalk_Bottom("#face0#我给了你#b#i2439614##z2439614##k。\r\n从现在就要开始解放武器的漫长旅程了。", 36, 9063152, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#那么，在拿出武器后就立刻跟随着黑魔法师的痕迹吧。", 36, 9063152, false, true);
	} else if (status == i++) {
		cm.gainItem(2439614, 1);
		cm.dispose();
	}
}

function action分支0(mode, type, selection, i) {
	if (status === i++) {
		cm.forceCompleteQuest(35652);
		cm.sendNormalTalk_Bottom("#face0#从现在就要开始解放武器的漫长旅程了。\r\n请你现在就跟着黑魔法师的痕迹吧。\r\n\r\n" +
			"#r※神之子在完成所有创世武器任务后可获得创世精髓。", 36, 9063152, false, true);
	} else if (status == i++) {
		cm.dispose();
	}
}

function action分支1(mode, type, selection, i) {
	if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#是的，我会给你装有创世武器的箱子。\r\n请你做好心理准备后再次和我对话吧。", 36, 9063152, false, true);
	} else if (status == i++) {
		cm.forceStartQuest();
		cm.dispose();
	}
}