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
		cm.resetMap("922030300");
		cm.curNodeEventEnd(true);
		cm.setInGameDirectionMode(true, true, false);
		cm.npc_ChangeController(2159402, "oid=951962", -850, 162, 1, true, false);
		cm.npc_ChangeController(2159403, "oid=951963", -927, 162, 0, true, false);
		cm.inGameDirectionEvent_MoveAction(2);
		cm.inGameDirectionEvent_AskAnswerTime(1500);
	} else if (status === i++) {
		cm.inGameDirectionEvent_MoveAction(0);
		cm.sendNormalTalk("魔族吗……", 26, 0, true, true);
	} else if (status === i++) {
		cm.sendNormalTalk("好像正在谈话，要听听看吗？", 26, 0, true, true);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.sendNormalTalk("没事吧？他说那种玩具用不着去管……", 1, 2159402, true, true);
	} else if (status === i++) {
		cm.sendNormalTalk("这算什么话！", 1, 2159403, true, true);
	} else if (status === i++) {
		cm.sendNormalTalk("他刚当上了军团长，有很多事情需要操心，这种小事难道不应该自己解决吗！", 1, 2159403, true, true);
	} else if (status === i++) {
		cm.inGameDirectionEvent_头顶图片(["Effect/Direction12.img/effect/tuto/BalloonMsg1/0"], [0, 0, -120, 0, 0, 0, 0, 0, 0]);
		cm.sendNormalTalk("做好领取奖励的准备吧。", 1, 2159403, true, true);
	} else if (status === i++) {
		cm.inGameDirectionEvent_MoveAction(2);
		cm.inGameDirectionEvent_AskAnswerTime(700);
	} else if (status === i++) {
		cm.inGameDirectionEvent_MoveAction(0);
		cm.sendNormalTalk("是黑魔法师的军团长吗！", 26, 0, true, true);
	} else if (status === i++) {
		cm.sendNormalTalk("啊……你！", 1, 2159403, true, true);
	} else if (status === i++) {
		cm.npc_setForceFlip("oid=951963", 0);
		cm.sendNormalTalk("你是怎么找到这里的？", 1, 2159403, true, true);
	} else if (status === i++) {
		cm.sendNormalTalk("我不是说过不行吗！", 1, 2159402, true, true);
	} else if (status === i++) {
		cm.sendNormalTalk("吵死了！不要让军团长听到不就行了！", 1, 2159403, true, true);
	} else if (status === i++) {
		cm.sendNormalTalk("果然有人成了新的军团长。", 26, 0, true, true);
	} else if (status === i++) {
		cm.sendNormalTalk("哎呀，都被听见了……", 1, 2159403, true, true);
	} else if (status === i++) {
		cm.npc_setForceFlip("oid=951963", 1);
		cm.sendNormalTalk("你先把痕迹清理掉。", 1, 2159403, true, true);
	} else if (status === i++) {
		cm.sendNormalTalk("是……！", 1, 2159402, true, true);
	} else if (status === i++) {
		cm.npc_SetSpecialAction("oid=951962", "teleportation",0 ,1);
		cm.inGameDirectionEvent_AskAnswerTime(800);
	} else if (status === i++) {
		cm.npc_LeaveField("oid=951962");
		cm.sendNormalTalk("虽然有军团长的命令，不过没办法。你必须给我消失！", 1, 2159403, true, true);
	} else if (status === i++) {
		cm.npc_LeaveField("oid=951963");
		cm.killAllMob();
		cm.spawnMobLimit(9300647, 1, -927, 162, 1);
		cm.setInGameDirectionMode(false, true, false);
		cm.dispose();
	}
}
