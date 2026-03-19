/**
-- BMS 传送点脚本 -------------------------------------------------------------------------
传送点 ID： 5
传送点名称： PCS00
所在地图ID： 450001007
所在地图名称： 忘却之湖 - 忘却之湖
-- 更新日志 ---------------------------------------------------------------------------------------
2021-01-02 16:40:23 创建模板
---------------------------------------------------------------------------------------------------
 **/

function enter() {
	//var id = cm.getPortal().getId(); var name = cm.getPortal().getName();
	//cm.playerMessage(5, "这个传送点 [" + id + " : " + name + "] 的脚本尚未修复。脚本位于： 脚本/传送点/450001007_PCS00.js ");
	cm.openScriptNpc(); //启用NPC脚本模式
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
		cm.playerMessage(-1, "未修复的传送点脚本！");
		cm.dispose();
	}
}