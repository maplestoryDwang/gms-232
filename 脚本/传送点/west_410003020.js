function enter() {
	cm.openScriptNpc(); //启用NPC脚本模式
}
var status = -1; // status: 当前聊天交互轮数
var selectionLog = []; // 记录每一轮的选择
function start() {
	action(1, 0, 0);
}
function action(mode, type, selection) {
	if (cm.isQuestFinished(38116)){
		cm.warp(410003150, 1);
	}
	cm.dispose();
}
