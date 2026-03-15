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
		cm.sendNormalTalk_Bottom("#face0#你做到了啊，#b#h0##k。\r\n这样就完全解放了创世武器的力量。", 36, 9063152, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#“究竟黑魔法师为什么要留下这样的武器呢？”\r\n现在我大概能猜到个中缘由了。", 36, 9063152, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("！？", 56, 0, false, true);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(700);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#在#b#h0##k和黑魔法师以及军团长的痕迹战斗的期间，\r\n我们联盟也在进行调查。", 36, 9063152, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#而在军团长们的记忆中有四个核心信息。\r\n这肯定和黑魔法师留给你这个武器的原因相关。", 36, 9063152, false, true);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(1, 150, 0, 0, 0, 1300, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1500)
	} else if (status === i++) {
		cm.inGameDirectionEvent_Monologue("第一，黑魔法师希望得到比创世更进一步的东西。", 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_Monologue("\r\n第二，路西德感受到了黑魔法师潜意识中的敌意。", 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_Monologue("\r\n第三，黑魔法师也有做不到的事情。", 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_Monologue("\r\n第四，黑魔法师的意愿和麦格纳斯所说的“那位”不同。", 0);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#他在创世之外还有别的目的。\r\n那里面就包含了对某个人的敌意……", 36, 9063152, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#而且他为了解决自己无法做到的事情……选择了你。", 36, 9063152, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#联盟的推论就是这样。", 36, 9063152, false, true);
	} else if (status === i++) {
		cm.inGameDirectionEvent_Monologue("", 1);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1500)
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#虽然他已经消失，但是他的目的似乎没有完全失败……", 36, 9063153, false, true);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(700);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#转念一想，这其实是理所当然的。\r\n那种程度的人不可能会什么都不留下就消失。", 36, 9063152, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#但他却还没有实现自己的目的就消失了……\r\n这不是很奇怪吗？", 36, 9063152, false, true);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(700);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("(黑魔法师……他……)", 56, 0, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#我们计划进行进一步的调查。\r\n但是现在这还只是推论，并不能确定。", 36, 9063152, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#那么，如果再调查出什么我再告诉你。\r\n#b#h0##k如果感知到了什么也请马上告诉我。", 36, 9063152, false, true);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(1000);
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
		cm.setNumberForQuestInfo(35650, "start", 0);
		cm.curNodeEventEnd(true);
		cm.setInGameDirectionMode(false, true, false);
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
		var id = cm.getQuest();
		cm.askYesNo("");
	} else if (status == i++) {
		cm.forceCompleteQuest();
		cm.dispose();
	}
}
