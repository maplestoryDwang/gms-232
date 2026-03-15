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
		cm.sendNextPrev("根据汉斯所说，只要打败军团长的残影，就能在创世武器刻印上黑暗痕迹。", 9063152);
	} else if (status == i++) {
		cm.sendNextPrev("啊，黑暗痕迹指的是军团长们获得的黑魔法师的力量。它就在军团长的残影消失的地方。", 9063152);
	} else if (status == i++) {
		cm.sendNextPrev("但是，它不能被简单地击败，而是要在缔结某种麻烦的契约后才会出现。", 9063152);
	} else if (status == i++) {
		cm.sendNextPrev("所以说，你今后必须在缔结契约后才能一一消灭军团长的残影。", 9063152);
	} else if (status == i++) {
		cm.sendNextPrev("说明就到此为止。请你亲自去调查黑暗痕迹吧。第一个出现地点是狮子王班·雷昂的城堡。", 9063152);
	} else if (status == i++) {
		cm.askYesNo("为了寻找黑魔法师留下的黑暗痕迹，需要击败军团长 #r高级班·雷昂#k的残影。你能做到吗？\r\n" +
			"#r如被发现使用非正常手段挑战，将被剥夺创世武器。", 9063152);
	} else if (status == i++) {
		cm.forceStartQuest();
		var jobId = cm.getJob();
		if (jobId == '10112') {
			cm.sendOk("那就请你在满足以下条件的同时，击败#r高级班·雷昂#k，然后回来吧。\r\n\r\n" +
				"#e#r<任务完成条件>#k#n\r\n" +
				" #b- 独自攻破\r\n" +
				" - 只装备封印的创世武器和辅助武器\r\n" +
				" （神之子不装备封印的武器。)\r\n" +
				" - 最终伤害降低90%\r\n" +
				" - 只应用正在穿戴的装备能力值净值#k\r\n\r\n" +
				"  #r※ 在执行相应任务的状态下，尝试进入BOSS战时，将可以进入符合任务执行条件的BOSS关卡。\r\n" +
				" ※ 如被发现使用非正常手段挑战，将被剥夺创世武器。", 9063152);
		} else {
			cm.sendOk("那就请你在满足以下条件的同时，击败#r高级班·雷昂#k，然后回来吧。\r\n\r\n" +
				"#e#r<任务完成条件>#k#n\r\n" +
				" #b- 独自攻破\r\n" +
				" - 只装备封印的创世武器和辅助武器\r\n" +
				" - 最终伤害降低90%\r\n" +
				" - 只应用正在穿戴的装备能力值净值#k\r\n\r\n" +
				"  #r※ 在执行相应任务的状态下，尝试进入BOSS战时，将可以进入符合任务执行条件的BOSS关卡。\r\n" +
				" ※ 如被发现使用非正常手段挑战，将被剥夺创世武器。", 9063152);
		}
	} else if (status == i++) {
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
	} else if (status === i++) {
		cm.resetMap(993060090)
		cm.curNodeEventEnd(true);
		cm.setInGameDirectionMode(true, false, true);
		cm.setStandAloneMode(true);
		cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
		cm.OverlapScreenDetail19(0, 1000, 3000, 1);
		cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
	} else if (status === i++) {
		cm.onTeleport(0, 3, cm.getPlayer().getId(), -290, 85);
		cm.inGameDirectionEvent_ForcedFlip(1);
		cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(700);
	} else if (status == i++) {
		cm.fieldEffect_RemoveOverlapScreenDetail(1000);
		cm.inGameDirectionEvent_PushScaleInfo(0, 1500, 0, 0, 100);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.inGameDirectionEvent_PushScaleInfo(2000, 1500, 2000, -170, 100);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(2100);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#你好，#b#h0##k，看来你已经找到黑暗痕迹了。\r\n那就来查看下武器的状态吧。", 36, 9063153, false, true);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(1500);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#（将封印的创世武器交给汉斯，他十分严肃地仔细查看了武器。）", 36, 9063153, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#虽然黑暗痕迹确实已经刻印在了其中，但是还有所欠缺。\r\n似乎还需要别的什么东西。", 36, 9063153, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#别的什么？", 36, 9063152, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#虽然我现在还不确定……但是为了解放武器的力量，\r\n也许……我们需要黑魔法师的一部分。", 36, 9063153, false, true);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(1500);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#那么不就是要将黑魔法师的残影……再次……", 36, 9063152, false, true);
	} else if (status === i++) {
		cm.OverlapScreenDetail19(0, 1000, 3000, 1);
		cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
	} else if (status === i++) {
		cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(700);
	} else if (status == i++) {
		cm.fieldEffect_RemoveOverlapScreenDetail(1000);
		cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, 562, 103);
	} else if (status === i++) {
		cm.forceCompleteQuest();
		cm.curNodeEventEnd(true);
		cm.setInGameDirectionMode(false, true, false);
		cm.dispose();
	}
}