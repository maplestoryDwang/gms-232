/**
-- BMS 任务脚本空白模板 ---------------------------------------------------------------------------
任务 ID： 36010
任务名称： [拉姆拉姆] 心理测试！
任务开始NPC ID： 9062387
任务开始NPC 名称： 某人的信
-- 更新日志 ---------------------------------------------------------------------------------------
2022-06-22 10:36:13 创建模板
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
	} else if (status == i++) {
		cm.askYesNo("后续任务剧情尚未修复，绿水灵BOSS剧情，详细可以去B站补课，将强制完成接下来【拉姆拉姆】地区任务。\r\n#r接受后传送至绿水灵BOSS挑战地图#k#l。");
	} else if (status == i++) {
		cm.forceCompleteQuest(36010);
		cm.forceCompleteQuest(36011);
		cm.forceCompleteQuest(36012);
		cm.forceCompleteQuest(36013);
		cm.forceCompleteQuest(36016);
		cm.warp(160000000,0);
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
	} else if (status == i++) {
		cm.forceCompleteQuest(36010);
		cm.forceCompleteQuest(36011);
		cm.forceCompleteQuest(36012);
		cm.forceCompleteQuest(36013);
		cm.forceCompleteQuest(36016);
		cm.dispose();
	}
}
