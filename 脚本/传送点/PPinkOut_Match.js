/**
-- BMS 传送点脚本 -------------------------------------------------------------------------
传送点 ID： 4
传送点名称： out00
所在地图ID： 270040000
所在地图名称： 神殿的深处 - 破碎的回廊
-- 更新日志 ---------------------------------------------------------------------------------------
2020-12-17 15:15:08 创建模板
---------------------------------------------------------------------------------------------------
 **/

function enter() {
	//var id = cm.getPortal().getId(); var name = cm.getPortal().getName();
	//cm.playerMessage(5, "这个传送点 [" + id + " : " + name + "] 的脚本尚未修复。脚本位于： 脚本/传送点/PPinkOut_Match.js ");
	cm.openScriptNpc(); //启用NPC脚本模式
}
var status = -1; // status: 当前聊天交互轮数
var selectionLog = new Array(); // 记录每一轮的选择
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