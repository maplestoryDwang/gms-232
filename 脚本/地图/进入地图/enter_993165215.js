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
		cm.resetMap(993165215)
		cm.fieldEffect_PlayBGM("Bgm44.img/WildFury");
		cm.curNodeEventEnd(true);
		cm.setInGameDirectionMode(true, false, true);
		cm.setStandAloneMode(true);
		cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
		cm.npc_ChangeController(3005052, "oid=381191", 250, 255, 100, 200, 300, 0, true, 0, false);
		cm.npc_ChangeController(3005053, "oid=381192", 315, 255, 100, 265, 365, 0, true, 0, false);
		cm.npc_ChangeController(3005077, "oid=381193", 457, 255, 100, 407, 507, 1, true, 0, false);
		cm.npc_ChangeController(3004001, "oid=381194", 543, 173, 0, 493, 593, 1, false, 0, false);
		cm.npc_ChangeController(3005059, "oid=381195", 77, 255, 100, 27, 127, 0, true, 0, false);
		cm.npc_ChangeController(3005057, "oid=381196", 664, 255, 100, 614, 714, 1, true, 0, false);
		cm.npc_ChangeController(3005058, "oid=381197", 775, 255, 100, 725, 825, 1, true, 0, false);
		cm.onTeleport(0, 3, cm.getPlayer().getId(), 176, 255);
		cm.inGameDirectionEvent_ForcedFlip(1);
		cm.inGameDirectionEvent_PushScaleInfo(0, 1500, 0, 412, 210);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#来、来、亲们~现在可以了。", 36, 3005054, false, true);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(1500);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1500, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1600);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#所有人自爆！", 36, 3005054, false, true);
	} else if (status === i++) {
		cm.npc_SetSpecialAction("oid=381195", "special2", 1, 1);
		cm.npc_SetSpecialAction("oid=381196", "special2", 1, 1);
		cm.npc_SetSpecialAction("oid=381197", "special2", 1, 1);
		cm.fieldEffect_PlayFieldSound("Sound/Mob.img/8645209/Die", 100);
		cm.inGameDirectionEvent_AskAnswerTime(1200);
	} else if (status === i++) {
		cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=381191"], [0, 0, 0, 1, 0, 1, 0, 0]);
		cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=381192"], [0, 0, 0, 1, 0, 1, 0, 0]);
		cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 1, 0, 0]);
		cm.npc_LeaveField("oid=381195");
		cm.npc_LeaveField("oid=381196");
		cm.npc_LeaveField("oid=381197");
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face3#为什么会自行命令自爆……", 36, 3005053, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#来，各位~谢谢你们为我积极争取时间。", 36, 3005054, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face3#什么？", 36, 3005053, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#始祖龟，开始暴力状况应对方案，这总不能拒绝吧。", 36, 3005054, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#检测到暴力状况，开始启用应对方案。", 36, 3005051, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#应对方案实……实……实……", 36, 3005051, false, true);
	} else if (status === i++) {
		cm.npc_SetSpecialAction("oid=381193", "red", 1, 1);
		cm.inGameDirectionEvent_AskAnswerTime(600);
	} else if (status === i++) {
		cm.setNpcSpecialActionReset("oid=381193");
		cm.npc_SetSpecialAction("oid=381193", "red3", -1, 0);
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face3#成功。", 36, 3005051, false, true);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.userSetFieldFloating(993165215, 3, 3, 1);
		cm.fieldEffect_PlayBGM("SoundEff.img/ArcaneRiver/thrill", 0, 0);
		cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ReverseCity/earthq", 100);
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face3#到底怎么回事？地面怎么会有震动……", 36, 3005053, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face2#你到底做了什么？", 36, 3005052, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#其实听说这里很久之前被当成要塞。", 36, 3005054, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("什么？！", 56, 0, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#听说真正的宝物就是地下的古代兵器。", 36, 3005054, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#还有惊人的是，赋予这个权限的是这个古董机器人。", 36, 3005054, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face3#暴力状况应对方案实施中。", 36, 3005051, false, true);
	} else if (status === i++) {
		cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ReverseCity/earthq", 100);
		cm.sendNormalTalk_Bottom("唔……震动变得更厉害了！", 56, 0, false, true);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 700, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1500);
	} else if (status === i++) {
		cm.userSetFieldFloating(993165215, 0, 0, 0);
		cm.inGameDirectionEvent_AskAnswerTime(100);
	} else if (status === i++) {
		cm.forceStartQuest(38122);
		cm.npc_LeaveField("oid=381191");
		cm.npc_LeaveField("oid=381192");
		cm.npc_LeaveField("oid=381193");
		cm.npc_LeaveField("oid=381194");
		cm.npc_ChangeController(3005052, "oid=381191", 690, 255, 100, 640, 740, 1, true, 0, false);
		cm.npc_ChangeController(3005053, "oid=381192", 454, 255, 100, 404, 504, 0, true, 0, false);
		cm.npc_ChangeController(3004001, "oid=381194", 556, 173, 0, 506, 606, 1, false, 0, false);
		cm.npc_ChangeController(3005077, "oid=381193", 559, 255, 100, 509, 609, 1, true, 0, false);
		cm.npc_ChangeController(3005060, "oid=381195", 73, 255, 100, 23, 123, 0, true, 0, false);
		cm.npc_ChangeController(3005060, "oid=381196", 963, 255, 100, 913, 1013, 1, true, 0, false);
		cm.npc_SetSpecialAction("oid=381193", "red3", -1, 0);
		cm.onTeleport(0, 3, cm.getPlayer().getId(), 393, 255);
		cm.inGameDirectionEvent_ForcedFlip(1);
		cm.inGameDirectionEvent_PushScaleInfo(0, 3000, 0, 30, 345);
	} else if (status === i++) {
		cm.fieldEffect_PlayBGM("Bgm28.img/trinityForce");
		cm.inGameDirectionEvent_AskAnswerTime(1500);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
		cm.userSetFieldFloating(993165215, 4, 4, 1);
		cm.inGameDirectionEvent_AskAnswerTime(4000);
	} else if (status === i++) {
		cm.userSetFieldFloating(993165215, 0, 0, 0);
		cm.inGameDirectionEvent_PushScaleInfo(6000, 3000, 6000, 30, -38);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(6100);
	} else if (status === i++) {
		cm.forceCompleteQuest(38122);
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
		cm.inGameDirectionEvent_AskAnswerTime(4000);
	} else if (status === i++) {
		cm.npc_SetSpecialAction("oid=381195", "special2", -1, 0);
		cm.npc_SetSpecialAction("oid=381196", "special2", -1, 0);
		cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BM1/beam", 100);
		cm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		cm.setNpcSpecialActionReset("oid=381195");
		cm.setNpcSpecialActionReset("oid=381196");
		cm.npc_SetSpecialAction("oid=381195", "special3", -1, 0);
		cm.npc_SetSpecialAction("oid=381196", "special3", -1, 0);
		cm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=381191"], [0, 0, 0, 1, 0, 1, 0, 0]);
		cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=381192"], [0, 0, 0, 1, 0, 1, 0, 0]);
		cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 1, 0, 0]);
		cm.inGameDirectionEvent_AskAnswerTime(1500);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 700, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1500);
	} else if (status === i++) {
		cm.curNodeEventEnd(true);
		cm.npc_LeaveField("oid=381191");
		cm.npc_LeaveField("oid=381192");
		cm.npc_LeaveField("oid=381193");
		cm.npc_LeaveField("oid=381194");
		cm.npc_LeaveField("oid=381195");
		cm.npc_LeaveField("oid=381196");
		cm.npc_LeaveField("oid=381197");
		cm.setInGameDirectionMode(false, true, false);
		cm.warp(993165216, 0);
		cm.dispose();
	}
}
