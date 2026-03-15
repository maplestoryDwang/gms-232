/**
-- BMS NPC脚本 ----------------------------------------------------------------------------
NPC ID： 1013504
NPC名称： 温泉绿水灵
所在地图ID： 160070000
所在地图名称： 未知地图
-- 更新日志 ---------------------------------------------------------------------------------------
2022-06-24 11:58:42 创建模板
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
		cm.sendOk("……啊？你找我吗？我也不知道我应该做什么。我的脚本位于： #b 脚本/NPC/1013504.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复我的脚本！");
	} else {
		cm.dispose();
	}
}
