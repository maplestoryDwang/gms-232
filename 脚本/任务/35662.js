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
		cm.askYesNo("请前去攻破黑魔法师的残像，找到1个#i4036462# #b#z4036462#，#k然后攻破军团长#r高级戴米安#k的残像，可以吗？", 4, 9063152);
	} else if (status == i++) {
		cm.forceStartQuest();
		var jobId = cm.getJob();
		cm.sendOk("你应该已经知道了，黑暗痕迹只有在特殊条件下才能被刻印上去。请在满足以下条件的同时击败#r高级戴米安。#k\r\n\r\n" +
			"#e#r<任务完成条件>#k#n\r\n" +
			" #b- 独自攻破\r\n" +
			" - 死亡计数减少为5\r\n\r\n" +
			"  #r※ 在执行相应任务的状态下，尝试进入BOSS战时，将可以进入符合任务执行条件的BOSS关卡。\r\n" +
			" ※ 如被发现使用非正常手段挑战，将被剥夺创世武器。", 9063152);
	} else if (status == i++) {
		cm.forceStartQuest();
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
		cm.setStringForQuestInfo(35650, "50", "h0");
		cm.setStringForQuestInfo(35650, "51", "h0");
		cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
	} else if (status === i++) {
		cm.onTeleport(0, 3, cm.getPlayer().getId(), -605, 85);
		cm.inGameDirectionEvent_ForcedFlip(1);
		cm.npc_ChangeController(9063152, "oid=356511", 0, 72, 100, -50, 50, 1, true, 0, false);
		cm.npc_ChangeController(9063153, "oid=356512", -300, 85, 100, -350, -250, 1, true, 0, false);
		cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(700);
	} else if (status == i++) {
		cm.fieldEffect_RemoveOverlapScreenDetail(1000);
		cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, -303, 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(3000);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#黑魔法师之片鳞和武器刻印的黑暗痕迹……现在条件已经满足了。。\r\n那就开始吧。", 36, 9063153, false, true);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status == i++) {
		cm.npcMove(9063153, 0, -50, 1000);
		cm.inGameDirectionEvent_PushScaleInfo(2000, 1500, 2000, -301, 50);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.fieldEffect_BackgroundCanvas(2, 160, 160, 160, 0, 0, 0);
		cm.fieldEffect_BackgroundCanvas(3, 160, 160, 160, 0, 0, 0);
		cm.fieldEffect_BackgroundCanvas(4, 160, 160, 160, 0, 0, 0);
		cm.inGameDirectionEvent_头顶图片(["Effect/Direction15.img/effect/BM_Weapon/magic/0", "oid=356512"], [0, 0, -200, 1, 0, 1, 0, 0]);
		cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BM_Weapon/magic1", 100);
		cm.inGameDirectionEvent_AskAnswerTime(1100);
	} else if (status == i++) {
		cm.inGameDirectionEvent_PushScaleInfo(3000, 1500, 3000, -301, -190);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(2800);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 0, 0);
		cm.fieldEffect_InsertCanvas(1, 100, 180, 180, 180, 300, 0);
		cm.inGameDirectionEvent_AskAnswerTime(300)
	} else if (status == i++) {
		cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, -303, 0);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 300, 0);
		cm.inGameDirectionEvent_AskAnswerTime(300)
	} else if (status === i++) {
		cm.fieldEffect_BackgroundCanvas(0, 210, 210, 210, 200, 0, 0);
		cm.inGameDirectionEvent_AskAnswerTime(200);
	} else if (status === i++) {
		cm.fieldEffect_BackgroundCanvas(2, 160, 160, 160, 200, 0, 0);
		cm.fieldEffect_BackgroundCanvas(3, 160, 160, 160, 200, 0, 0);
		cm.fieldEffect_BackgroundCanvas(4, 160, 160, 160, 200, 0, 0);
		cm.inGameDirectionEvent_AskAnswerTime(200);
	} else if (status === i++) {
		cm.effect_OnUserEff("Effect/Direction15.img/effect/BM_Weapon/magic/1");
		cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BM_Weapon/magic2", 100);
		cm.inGameDirectionEvent_AskAnswerTime(400);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 0, 0);
		cm.fieldEffect_InsertCanvas(1, 100, 180, 180, 180, 300, 0);
		cm.inGameDirectionEvent_AskAnswerTime(300)
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 300, 0);
		cm.inGameDirectionEvent_AskAnswerTime(300)
	} else if (status === i++) {
		cm.fieldEffect_BackgroundCanvas(2, 160, 160, 160, 0, 0, 0);
		cm.fieldEffect_BackgroundCanvas(3, 160, 160, 160, 0, 0, 0);
		cm.fieldEffect_BackgroundCanvas(4, 160, 160, 160, 0, 0, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1500);
	} else if (status === i++) {
		cm.fieldEffect_BackgroundCanvas(0, 255, 255, 255, 700, 0, 0);
		cm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BM_Weapon/memory", 1000);
		cm.fieldEffect_复合图片动画(["Effect/Direction15.img/effect/BM_Weapon/memory_spine/memory", "animation", "", "memory"], [1, 0, 1, 0, 0, 0, 0, 1]);
		cm.inGameDirectionEvent_AskAnswerTime(4000);
	} else if (status === i++) {
		cm.setStringForQuestInfo(35650, "50", "h1");
		cm.setStringForQuestInfo(35650, "51", "h1");
		cm.curNodeEventEnd(true);
		cm.npc_LeaveField("oid=356511");
		cm.npc_LeaveField("oid=356512");
		cm.setNumberForQuestInfo(35650, "rMap1", 993060090);
		cm.warp(993060095, 0, true);
		cm.dispose();
	}
}
