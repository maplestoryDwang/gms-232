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
		cm.resetMap("920030200");
		cm.curNodeEventEnd(true);
		cm.setInGameDirectionMode(true, true, false);
		cm.npc_ChangeController(2159409, "oid=951962", 100, 83, 1, true, false);
		cm.npc_ChangeController(2159401, "oid=951963", 225, 83, 1, true, false);
		cm.npc_ChangeController(2159402, "oid=951964", 350, 83, 1, true, false);
		cm.npc_ChangeController(2159404, "oid=951965", 400, 83, 1, true, false);
		cm.npc_ChangeController(2159407, "oid=951969", -15, 83, 0, false, false);
		cm.setSessionValue("robe00", "951963");
		cm.setSessionValue("robe01", "951964");
		cm.inGameDirectionEvent_MoveAction(1);
		cm.inGameDirectionEvent_AskAnswerTime(100)
	} else if (status === i++) {
		cm.curNodeEventEnd(true);
		cm.inGameDirectionEvent_MoveAction(0);
		cm.sendNormalTalk("这种东西竟然是宠物？女神还真是照顾我。", 1, 2159401, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk("你想对我干什么……！", 1, 2159407, true, true);
	} else if (status === i++) {
		cm.npc_SetSpecialAction("oid=951969", "die",0 ,1);
		cm.inGameDirectionEvent_AskAnswerTime(1700);
	} else if (status === i++) {
		cm.npc_LeaveField("oid=951969");
		cm.inGameDirectionEvent_MoveAction(1);
		cm.inGameDirectionEvent_AskAnswerTime(350);
	} else if (status === i++) {
		cm.inGameDirectionEvent_头顶图片(["Effect/Direction6.img/effect/story/balloonMsg1/0"], [0, 0, -100, 0, 0, 0, 0, 0, 0]);
		cm.inGameDirectionEvent_AskAnswerTime(600);
	} else if (status === i++) {
		cm.inGameDirectionEvent_MoveAction(0);
		cm.npc_setForceFlip("oid=951963", 1);
		cm.inGameDirectionEvent_AskAnswerTime(50);
	} else if (status === i++) {
		cm.npc_setForceFlip("oid=951962", 1);
		cm.npc_setForceFlip("oid=951964", 1);
		cm.npc_setForceFlip("oid=951965", 1);
		cm.inGameDirectionEvent_AskAnswerTime(1000)
	} else if (status === i++) {
		cm.sendNormalTalk("你来的比预计的要晚。我还以为你又睡懒觉了呢。", 1, 2159401, true, true);
	} else if (status === i++) {
		cm.sendNormalTalk("你到底在干什么！！", 26, 0, true, true);
	} else if (status === i++) {
		cm.sendNormalTalk("你是……魔族……？", 26, 0, true, true);
	} else if (status === i++) {
		cm.sendNormalTalk("既然让他看到了我们的脸，就必须除掉。不然之后会有问题。", 1, 2159409, true, true);
	} else if (status === i++) {
		cm.sendNormalTalk("没问题。在我处理之前，不要碰它。", 1, 2159401, true, true);
	} else if (status === i++) {
		cm.sendNormalTalk("但是！", 1, 2159409, true, true);
	} else if (status === i++) {
		cm.sendNormalTalk("吵死了！", 1, 2159401, true, true);
	} else if (status === i++) {
		cm.sendNormalTalk("不必管这里的事情。大家回去执行各自的任务吧。", 1, 2159401, true, true);
	} else if (status === i++) {
		cm.sendNormalTalk("是！", 1, 2159416, true, true);
	} else if (status === i++) {
		cm.npc_setForceFlip("oid=951964", 0);
		cm.npc_setForceFlip("oid=951965", 0);
		cm.inGameDirectionEvent_AskAnswerTime(200);
	} else if (status === i++) {
		cm.npc_SetSpecialAction("oid=951964", "teleportation",0 ,1);
		cm.npc_SetSpecialAction("oid=951965", "teleportation",0 ,1);
		cm.inGameDirectionEvent_AskAnswerTime(800);
	} else if (status === i++) {
		cm.npc_LeaveField("oid=951964");
		cm.npc_LeaveField("oid=951965");
		cm.sendNormalTalk("这次绝不会再错过了！", 26, 0, true, true);
	} else if (status === i++) {
		cm.sendNormalTalk("用不着着急。我们还会再见面的……", 1, 2159401, true, true);
	} else if (status === i++) {
		cm.sendNormalTalk("现在由这家伙来做你的对手。", 1, 2159401, true, true);
	} else if (status === i++) {
		cm.npc_SetSpecialAction("oid=951962", "teleportation",0 ,1);
		cm.npc_SetSpecialAction("oid=951963", "teleportation",0 ,1);
		cm.npc_ChangeController(2159407, "oid=951969", 530, 83, 0, false, false);
		cm.inGameDirectionEvent_头顶图片(["Effect/Direction12.img/effect/tuto/BalloonMsg1/0"], [0, 0, -120, 0, 0, 0, 0, 0, 0]);
		cm.inGameDirectionEvent_AskAnswerTime(900);
	} else if (status === i++) {
		cm.npc_LeaveField("oid=951962");
		cm.npc_LeaveField("oid=951963");
		cm.npc_LeaveField("oid=951969");
		cm.killAllMob();
		cm.spawnMobLimit(9300649, 1, 530, 83, 1);
		cm.setInGameDirectionMode(false, true, false);
		cm.dispose();
	}
}
