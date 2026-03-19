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
		cm.resetMap(993165212)
		cm.fieldEffect_PlayBGM("Bgm57.img/Lonesome Cinema");
		cm.curNodeEventEnd(true);
		cm.setInGameDirectionMode(true, false, true);
		cm.setStandAloneMode(true);
		cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
		cm.npc_ChangeController(3005050, "oid=381191", 157, 255, 100, 107, 207, 0, true, 0, false);
		cm.npc_ChangeController(3005077, "oid=381192", 445, 255, 100, 395, 495, 1, true, 0, false);
		cm.npc_ChangeController(3004001, "oid=381193", 529, 170, 0, 479, 579, 1, false, 0, false);
		cm.onTeleport(0, 3, cm.getPlayer().getId(), -198, 255);
		cm.inGameDirectionEvent_ForcedFlip(1);
		cm.inGameDirectionEvent_PushScaleInfo(0, 1500, 0, 340, 219);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1500, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1600);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#始祖龟，以后你的主人就是塞妮娅，塞妮娅·安格洛。", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#批准继承所有权。", 36, 3005051, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#谢谢你，洛斯缇。", 36, 3005054, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#这些家伙就有劳你了。", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#放心交给我好了。", 36, 3005054, false, true);
	} else if (status === i++) {
		cm.npc_setForceFlip("oid=381191", -1);
		cm.inGameDirectionEvent_PushScaleInfo(1500, 1500, 1500, 22, 219);
	} else if (status === i++) {
		cm.npc_ChangeController(3005052, "oid=381194", -16, 255, 100, -66, 34, 0, true, 1500, false);
		cm.npc_ChangeController(3005053, "oid=381195", -96, 255, 100, -146, -46, 0, true, 1500, false);
		cm.inGameDirectionEvent_AskAnswerTime(3000);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#终究是没能阻止啊。", 36, 3005052, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face3#我虽然气愤……但这确实是彻头彻尾的失败，我没办法说这就是单纯的技术能力差距，\r\n也不是力量上的差距。", 36, 3005053, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face3#坦白说，我有意靠蛮力阻止，但这么一来只会使我们沦为坏人而已。", 36, 3005053, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#……", 36, 3005052, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#事情变成这样，我很遗憾。", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#可我没有理由不离开。", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#好，我知道。", 36, 3005053, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#和你们在一起的这段时间，我很开心。", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.npc_ChangeController(3005055, "oid=381196", 62, 255, 100, 12, 112, 1, true, 1500, false);
		cm.inGameDirectionEvent_AskAnswerTime(1600);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("遗憾的是现在也到了该分手的时候~再来哦，来亚克斯旅馆~", 36, 3005055, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#……", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#你不觉得很厉害吗？", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#我没想到达尔米会一边用十三种方法打扫卫生一边唱歌。", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#我们也一样。", 36, 3005053, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#不像从前那样指路吗？", 36, 3005052, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("说是荒地已经不再危险了，也就没必要指路了~", 36, 3005055, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#这样……啊。", 36, 3005052, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#那各位保重。", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.inGameDirectionEvent_PushScaleInfo(1500, 1500, 1500, 340, 219);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(1500);
	} else if (status === i++) {
		cm.npc_setForceFlip("oid=381191", 1);
		cm.inGameDirectionEvent_AskAnswerTime(600);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face2#……（呜呜）", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#……", 36, 3005051, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#哎呦，难不成你是忘了什么，洛斯缇？", 36, 3005054, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face2#不……现在就要走。", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 1500, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1600);
	} else if (status === i++) {
		cm.curNodeEventEnd(true);
		cm.npc_LeaveField("oid=381191");
		cm.npc_LeaveField("oid=381192");
		cm.npc_LeaveField("oid=381193");
		cm.npc_LeaveField("oid=381194");
		cm.npc_LeaveField("oid=381195");
		cm.npc_LeaveField("oid=381196");
		cm.setInGameDirectionMode(false, true, false);
		cm.warp(993165213, 0);
		cm.dispose();
	}
}
