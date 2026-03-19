function enter() {
	cm.openScriptNpc();
}
var status = -1; // status: 当前聊天交互轮数
var selectionLog = []; // 记录每一轮的选择
function start() {
	action(1, 0, 0);
}
function action(mode, type, selection) {
	if (status == 0 && mode == 0) {
		cm.dispose();
		return;
	}
	(mode == 1) ? status++ : status--;
	selectionLog[status] = selection;
	var i = -1;
	if (status <= i++) {
		cm.dispose();
	} else if (status === i++ && cm.isQuestActive(23290) && !(cm.getNumberFromQuestCustomData(23290)==1)) {
		cm.sendNormalTalk("是这里吗……", 16, 0, true, true);
	} else if (status === i++ && cm.isQuestActive(23290)) {
		cm.forceStartQuest(23290, "1");
		cm.warp(924020100, 1, false);
		cm.dispose();
	} else {
		cm.dispose();
		return;
	}
}
