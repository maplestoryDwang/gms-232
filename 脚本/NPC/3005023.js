/**
-- BMS NPC脚本 ----------------------------------------------------------------------------
NPC ID： 3005023
NPC名称： 伊莉娜
所在地图ID： 410003000
所在地图名称： 亚克斯旅馆-亚克斯旅馆大厅
-- 更新日志 ---------------------------------------------------------------------------------------
2023-10-14 00:15:44 创建模板
---------------------------------------------------------------------------------------------------
 **/

// 全局变量
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
	} else {
		cm.dispose();
	}
}
