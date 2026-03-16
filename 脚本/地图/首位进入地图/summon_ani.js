/**
-- BMS 地图脚本 ---------------------------------------------------------------------------
地图ID： 211061100
地图名称： 狮子王之城 - 阿尼的牢房
-- 更新日志 ---------------------------------------------------------------------------------------
2020-12-18 15:52:12 创建模板
---------------------------------------------------------------------------------------------------
 **/

// 全局变量
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
	status++;
	selectionLog[status] = selection;
	var i = -1;
	if (status <= i++) {
		cm.dispose();
	} else if (status === i++) {
		if (cm.getPlayer().isGM()) {
			cm.playerMessage(5, "[GM]未修复的地图触发脚本。脚本位于： 脚本/地图/首位进入地图/summon_ani.js");
		}
		cm.dispose();
	}
}