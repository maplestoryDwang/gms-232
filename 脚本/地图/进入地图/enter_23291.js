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
		cm.resetMap(927000200);
		cm.curNodeEventEnd(true);
		cm.setInGameDirectionMode(true, true, false);
		cm.npc_ChangeController(2159401, "oid=951962", 280, 179, 1, true, false);
		cm.inGameDirectionEvent_MoveAction(2);
		cm.inGameDirectionEvent_AskAnswerTime(1200);
	} else if (status === i++) {
		cm.inGameDirectionEvent_MoveAction(0);
		cm.sendNormalTalk("我在等你。", 1, 2159401, true, true);
	} else if (status === i++) {
		cm.inGameDirectionEvent_头顶图片(["Effect/DirectionJP3.img/effect/kenjiTuto/balloonMsg/0"], [0, 0, -120, 0, 0, 0, 0, 0, 0]);
		cm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		cm.sendNormalTalk("为了我，竟然来到了这里。真让人感动，呵呵呵。", 1, 2159401, true, true);
	} else if (status === i++) {
		cm.sendNormalTalk("#b你到底是谁啊！", 26, 0, true, true);
	} else if (status === i++) {
		cm.sendNormalTalk("那种事情总有一天你会知道的。", 1, 2159401, true, true);
	} else if (status === i++) {
		cm.sendNormalTalk("我有东西要给你，所以正在等你。", 1, 2159401, true, true);
	} else if (status === i++) {
		cm.inGameDirectionEvent_头顶图片(["Effect/Direction12.img/effect/tuto/BalloonMsg1/0"], [0, 0, -120, 0, 0, 0, 0, 0, 0]);
		cm.inGameDirectionEvent_AskAnswerTime(3000);
	} else if (status === i++) {
		cm.sendNormalTalk("这个是……镶着家人照片的吊坠……！", 1, 2159415, true, true);
	} else if (status === i++) {
		cm.sendNormalTalk("弄丢了吗？我把它还给你。", 1, 2159401, true, true);
	} else if (status === i++) {
		cm.sendNormalTalk("小心放好，别再弄丢了。", 1, 2159401, true, true);
	} else if (status === i++) {
		cm.sendNormalTalk("和我的记忆……", 1, 2159401, true, true);
	} else if (status === i++) {
		cm.sendNormalTalk("#b这个东西怎么在你身上！？为什么！！", 26, 0, true, true);
	} else if (status === i++) {
		cm.sendNormalTalk("我们很快又会见面的。", 1, 2159401, true, true);
	} else if (status === i++) {
		cm.sendNormalTalk("希望你能一路顺风……", 1, 2159401, true, true);
	} else if (status === i++) {
		cm.inGameDirectionEvent_头顶图片(["Effect/Direction6.img/effect/story/balloonMsg1/2"], [0, 0, -120, 0, 0, 0, 0, 0, 0]);
		cm.inGameDirectionEvent_MoveAction(2);
		cm.inGameDirectionEvent_AskAnswerTime(800);
	} else if (status === i++) {
		cm.inGameDirectionEvent_MoveAction(0);
		cm.npc_SetSpecialAction("oid=951962", "teleportation",0 ,1);
		cm.inGameDirectionEvent_AskAnswerTime(800);
	} else if (status === i++) {
		cm.npc_LeaveField("oid=951962");
		cm.forceStartQuest(23293, "1");
		cm.setInGameDirectionMode(false, true, false);
		cm.dispose();
	}
}
