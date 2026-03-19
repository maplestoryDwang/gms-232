/**
-- BMS 传送点脚本 -------------------------------------------------------------------------
传送点 ID： 7
传送点名称： in01
所在地图ID： 220070400
所在地图名称： 玩具城-消失的回廊
-- 更新日志 ---------------------------------------------------------------------------------------
2022-06-08 10:15:42 创建模板
---------------------------------------------------------------------------------------------------
 **/

function enter() {
	var id = cm.getPortal().getId();
	var name = cm.getPortal().getName();
	cm.playerMessage(5, " ");
	// cm.openScriptNpc(); //启用NPC脚本模式
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
		cm.playerMessage(-1, "");
		cm.dispose();
	}
}
