/**
-- BMS NPC脚本 ----------------------------------------------------------------------------
NPC ID： 99000000
NPC名称： 未知人物
所在地图ID： 100000000
所在地图名称： 射手村-射手村
-- 更新日志 ---------------------------------------------------------------------------------------
2022-06-02 09:39:47 创建模板
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
		cm.sendOk("……啊？你找我吗？我也不知道我应该做什么。我的脚本位于： #b 脚本/NPC/99000000.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复我的脚本！");
	} else {
		cm.dispose();
	}
}
