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
		cm.sendNormalTalk("你问我那些家伙在哪儿？唉，实不相瞒，为了找出它们的下落我特意叫人从青积木怪王那里找来了通讯设备！", 1, 2040013, true, true);
	} else if (status === i++) {
		cm.sendNormalTalk("等等......这么操作的话应该就会出来了。", 1, 2040013, true, true);
	} else if (status === i++) {
		cm.sendNormalTalk("哎呦，你已经到了玩具工厂啦！可真够迅速了的！", 1, 2040013, true, true);
	} else if (status == i++) {
		cm.askYesNo("我要将你送往那些家伙所在的地方。你到那狠狠教训它们一顿，让它们不敢再干坏事。#r(接受后将马上移动地图。想要重新开始的话，请放弃任务后重试。)#k", 0, 2040013)
	} else if (status === i++) {
		cm.sendNormalTalk("请给它们点颜色看看，让它们再也不敢破坏玩具塔的和平。", 1, 2040013, true, true);
	} else if (status == i++) {
		cm.warp(922030300, 0, false);
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
