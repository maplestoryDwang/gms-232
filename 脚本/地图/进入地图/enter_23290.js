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
		cm.resetMap("924020100");
		cm.curNodeEventEnd(true);
		cm.setInGameDirectionMode(true, true, false);
		cm.inGameDirectionEvent_MoveAction(2);
		cm.inGameDirectionEvent_AskAnswerTime(1200);
	} else if (status === i++) {
		cm.inGameDirectionEvent_MoveAction(0);
		cm.sendNormalTalk("我知道是陷阱。", 26, 0, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk("你在哪里？请出来。", 26, 0, true, true);
	} else if (status === i++) {
		cm.npc_ChangeController(2159409, "oid=951962", 40, 452, 1, true, false);
		cm.npc_SetSpecialAction("oid=951962", "teleportation",0 ,1);
		cm.inGameDirectionEvent_AskAnswerTime(1500);
	} else if (status === i++) {
		cm.sendNormalTalk("知道是陷阱还过来，你可真勇敢。", 1, 2159409, true, true);
	} else if (status === i++) {
		cm.sendNormalTalk("这可能也是获取情报的好机会。", 26, 0, true, true);
	} else if (status === i++) {
		cm.sendNormalTalk("果然……如果让你活下去，就会成为军团长的妨碍。", 1, 2159409, true, true);
	} else if (status === i++) {
		cm.sendNormalTalk("要告诉我你新的军团长是谁吗？以及你们魔族为什么会追随他！", 26, 0, true, true);
	} else if (status === i++) {
		cm.sendNormalTalk("反正你也会死在这里，用不着多操心！", 1, 2159409, true, true);
	} else if (status === i++) {
		cm.npc_LeaveField("oid=951962");
		cm.killAllMob();
		cm.spawnMobLimit(9300648, 1, 40, 452, 1);
		cm.setInGameDirectionMode(false, true, false);
		cm.dispose();
	}
}
