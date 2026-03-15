/**
-- BMS 任务脚本空白模板 ---------------------------------------------------------------------------
任务 ID： 35942
任务名称： 古代力量的主人
任务开始NPC ID： 0
任务开始NPC 名称： 
-- 更新日志 ---------------------------------------------------------------------------------------
2022-06-15 14:42:36 创建模板
---------------------------------------------------------------------------------------------------
 **/

// 全局变量
var status = -1; // status: 当前聊天交互轮数
var selectionLog = []; // 记录每一轮的选择
// 任务开始时执行
function start(mode, type, selection) {
	if (status == 0 && mode == 0) {
		cm.dispose();
		return;
	}
	(mode == 1) ? status++ : status--;
	selectionLog[status] = selection;
	var i = -1;
	if (status <= i++) {
		cm.dispose();
	} else  if (status == i++) {
		cm.sendNormalTalk('#b#h0##k。彻底摆脱古代诅咒后，在冒险岛世界探险，成为了能自如操控雷利之力的古代力量的真正主人。', 16, 9010000, false, true);
		cm.forceCompleteQuest(35942);
		cm.gainItem(1143165,1);
		cm.dispose();
	}
}

// 依次对话时执行。根据已对话的次数，分别会调用 stage0, stage1, .....stageN
function stage0(mode, type, selection) {
	if (status == 0 && mode == 0) {
		cm.dispose();
		return;
	}
	status++;
	selectionLog[status] = selection;
	var i = -1;
	if (status <= i++) {
		cm.dispose();
	} else if (status == i++) {
		var id = cm.getQuest();
		cm.askYesNo("");
	} else if (status == i++) {
		cm.forceStartQuest();
		cm.dispose();
	}
}

// 任务结束时执行
function end(mode, type, selection) {
	if (status == 0 && mode == 0) {
		cm.dispose();
		return;
	}
	(mode == 1) ? status++ : status--;
	selectionLog[status] = selection;
	var i = -1;
	if (status <= i++) {
		cm.dispose();
	} else  if (status == i++) {
		cm.forceCompleteQuest();
		cm.dispose();
	}
}
