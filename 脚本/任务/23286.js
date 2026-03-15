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
		cm.sendNormalTalk("#h0#！", 1, 2151009, true, true);
	} else if (status === i++) {
		cm.sendNormalTalk("#b嗯，马斯特玛。有什么事吗？", 16, 0, true, true);
	} else if (status === i++) {
		cm.sendNormalTalk("关于之前你让我调查的身份不明的人，我听到了一些传闻。", 1, 2151009, true, true);
	} else if (status === i++) {
		cm.sendNormalTalk("#b果然不愧是马斯特玛。我就知道。", 16, 0, true, true);
	} else if (status === i++) {
		cm.sendNormalTalk("嘿嘿 （#h0#表扬我了。说信任我！哇！）", 1, 2151009, true, true);
	} else if (status === i++) {
		cm.sendNormalTalk("#b……到底是什么传闻呢？", 16, 0, true, true);
	} else if (status === i++) {
		cm.sendNormalTalk("……嗯？", 1, 2151009, true, true);
	} else if (status === i++) {
		cm.sendNormalTalk("#b……刚说到听到的传闻。", 16, 0, true, true);
	} else if (status === i++) {
		cm.sendNormalTalk("......啊！在位于#b玩具城#k的#b玩具塔4层#k，一个叫#b玩具工人10#k的人说他好像见到了那些家伙。", 1, 2151009, true, true);
	} else if (status == i++) {
		cm.askYesNo("你想现在就过去吗？#r(接受时立即移动。)#k", 0, 2151009);
	} else if (status === i++) {
		cm.sendNormalTalk("#b玩具城#k吗，想用玩具做什么吗？", 1, 2151009, true, true);
	} else if (status === i++) {
		cm.forceStartQuest(23286, "");
		cm.warp(221020300, 0, false);
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
