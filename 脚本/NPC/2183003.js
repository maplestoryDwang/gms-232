/**
-- BMS NPC脚本 ----------------------------------------------------------------------------
NPC ID： 9091020
NPC名称： 门---黑魔法师最终出口
路径：脚本/NPC/
所在地图ID： 450013700
所在地图名称： 黎曼-不存在的空间
-- 更新日志 ---------------------------------------------------------------------------------------
2022-04-01 09:19:10 创建模板
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
	} else if (status === i++) {
		var id = cm.getNpc();
		cm.askYesNo("传送到希拉之塔");
	} else {
		cm.warp(262030000,0);
		cm.dispose();
	}
}
