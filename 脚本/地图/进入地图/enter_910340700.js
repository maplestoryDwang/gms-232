/**
-- BMS 地图脚本 ---------------------------------------------------------------------------
地图ID： 910340700
地图名称： 秘密地图-组队训练场
-- 更新日志 ---------------------------------------------------------------------------------------
2022-10-10 16:01:56 创建模板
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
	status++;
	selectionLog[status] = selection;
	var i = -1;
	if (status <= i++) {
		cm.dispose();
	} else if (status === i++) {
		if (cm.getPlayer().isGM()) {
			cm.playerMessage(5, "");
		}
		cm.dispose();
	}
}
