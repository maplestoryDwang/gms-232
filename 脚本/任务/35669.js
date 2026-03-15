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
		cm.sendNormalTalk_Bottom("#face0#哎呀，你该不会弄丢了创世武器吧？\r\n竟然随意对待如此重要的东西，真令人遗憾。", 36, 9063152, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#唉……不过事情已经发生了，又能拿它怎样呢？\r\n没办法了。只能从头再来一次。", 36, 9063152, false, true);
	} else if (status === i++) {
		cm.askAcceptDecline_Bottom('#face0#正好联盟保存了一个创世精髓\r\n如果你有重新开始的想法，就请过来这里吧。\r\n' +
			' #r※ 接受后将自动前往任务地图。', 36, 9063152);
	} else if (status === i++) {
		cm.warp(993060090, 0);
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
		cm.sendNormalTalk_Bottom("#face0#我来帮你，让你能够展开解放创世武器的旅程。\r\n不过，就像我说的，你必须重新再经历一次这个过程。", 36, 9063152, false, true);
	} else if (status === i++) {
		cm.askAcceptDecline_Bottom('#face0#好，那我最后再问一次。\r\n你愿意为了解放被封印的创世武器再次踏上旅程吗？', 36, 9063152);
	} else if (status === i++) {
		for (var j = 0; j < qArray.length; j++) {
			cm.forceForfeitQuest(qArray[j]);
		}
		cm.forceCompleteQuest();
		cm.sendNormalTalk_Bottom("#face0#现在可以从头进行所有的旅程了。\r\n" +
			"希望你以后可以好好爱惜创世武器。\r\n\r\n" +
			" #r※ 请接受通知里的「[创世武器]命运决战之后」任务，继续进行。", 36, 9063152, false, true);
		cm.dispose();
	}
}

var qArray = [
	35651, 35652, 35656, 35657, 35658, 35659, 35660, 35661, 35662,
	35663, 35664, 35665, 35666, 35667
];