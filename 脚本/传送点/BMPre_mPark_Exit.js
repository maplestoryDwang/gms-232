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
	} else if (status === i++) {
		cm.askYesNoS_Bottom('要离开这里吗？');
	} else if (status === i++) {
		cm.warp(993060001, 0);
		cm.dispose();
	}
}
