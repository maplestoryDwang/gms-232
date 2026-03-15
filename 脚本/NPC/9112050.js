/**
-- BMS NPC脚本 ----------------------------------------------------------------------------
NPC ID： 9112050
NPC名称： 灭火器
所在地图ID： 800021118
所在地图名称： 火狸金融-停车场
-- 更新日志 ---------------------------------------------------------------------------------------
2022-04-25 14:04:38 创建模板
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
		cm.sendOk("……去别的地方再翻找一下！");
	} else {
		cm.dispose();
	}
}
