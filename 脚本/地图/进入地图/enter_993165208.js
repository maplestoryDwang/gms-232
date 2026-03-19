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
		cm.resetMap(993165208)
		cm.curNodeEventEnd(true);
		cm.setInGameDirectionMode(true, false, true);
		cm.setStandAloneMode(true);
		cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
		cm.fieldEffect_PlayBGM("Bgm57.img/Wayout of the wilderness");
		cm.npc_ChangeController(3005050, "oid=381141", -458, 262, 100, -508, -408, 0, true, 0, false);
		cm.npc_ChangeController(3005055, "oid=381142", -387, 262, 100, -437, -337, 1, true, 0, false);
		cm.npc_ChangeController(3005053, "oid=381143", -300, 262, 100, -350, -250, 1, true, 0, false);
		cm.npc_ChangeController(3005052, "oid=381144", -149, 262, 100, -199, -99, 1, true, 0, false);
		cm.onTeleport(0, 3, cm.getPlayer().getId(), -240, 262);
		cm.inGameDirectionEvent_ForcedFlip(-1);
		cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -335, 262);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1500, 0);
		cm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face9#该不会是你们修好这个小家伙的吧？", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face2#算、算是吧。", 36, 3005053, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face9#你很厉害啊？这绝不是什么易事……", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#这是一字螺丝刀，这是十字螺丝刀，洛斯缇。", 36, 3005052, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#诶……挺厉害的嘛。", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face2#（拿反了、傻瓜……）", 36, 3005053, false, true);
	} else if (status == i++) {
		cm.sendNormalTalk_Bottom("达尔米，带路……", 36, 3005055, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("啊，等等。", 56, 0, false, true);
	} else if (status == i++) {
		cm.sendNormalTalk_Bottom("去荒地……咻~", 36, 3005055, false, true);
	} else if (status == i++) {
		cm.inGameDirectionEvent_AskAnswerTime(500)
	} else if (status == i++) {
		cm.fieldEffect_PlayFieldSound("Sound/MiniGame.img/othello/criHit2", 200);
		cm.inGameDirectionEvent_AskAnswerTime(200);
	} else if (status === i++) {
		cm.npc_SetSpecialAction("oid=381142", "special", -1, 0);
		cm.sendNormalTalk_Bottom("#face9#达尔米！！！！", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 1000, 0);
		cm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		cm.npc_LeaveField("oid=381142");
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1500, 0);
		cm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face2#那个……抱歉，洛斯缇。", 36, 3005053, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#……", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#我现在才明白凯利走之前所说的话。", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face8#没必要道歉，毕竟就算强行往后拖延……最终时机还是会到来。", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas11(0, 256, 0, 0, 0, 0);
		cm.fieldEffect_InsertCanvas(1, 150, 0, 0, 0, 1300, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1500)
	} else if (status === i++) {
		cm.inGameDirectionEvent_Monologue("凡事都讲究时机，不管是这个机器人，还是这家旅馆。我也一样。", 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_Monologue("就算再怎么强行推迟，终究还是会遇到的。", 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_Monologue("我不想在老死之前只是一味地帮这些古董机器人续命，我要离开。", 1);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas11(0, 0, 0, 0, 0, 0);
		cm.fieldEffect_InsertCanvas(1, 1, 255, 255, 255, 200, 0);
		cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
		cm.inGameDirectionEvent_AskAnswerTime(3000);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 1000, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1500);
	} else if (status === i++) {
		cm.curNodeEventEnd(true);
		cm.npc_LeaveField("oid=381141");
		cm.npc_LeaveField("oid=381142");
		cm.npc_LeaveField("oid=381143");
		cm.npc_LeaveField("oid=381144");
		cm.setInGameDirectionMode(false, true, false);
		cm.forceCompleteQuest(38114);
		cm.updateInfoQuest(38100, "16=h0;01=h0;12=h0;23=h0;15=h1;13=h1;10=h1;03=h1;25=h1;27=h1");
		cm.warp(410003080, 0);
		cm.dispose();
	}
}
