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
		cm.curNodeEventEnd(true);
		cm.setStandAloneMode(true);
		cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
		cm.inGameDirectionEvent_ForcedFlip(-1);
		cm.npc_ChangeController(3005052, "oid=381021", -505, -9, 1, false, false);
		cm.npc_ChangeController(3005053, "oid=381022", -603, -9, 1, false, false);
		cm.onTeleport(0, 3, cm.getPlayer().getId(), -373, -9);
		cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -465, 2);
	} else if (status === i++) {
		cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/waddler/attack", 100);
		cm.inGameDirectionEvent_AskAnswerTime(200);
	} else if (status === i++) {
		cm.fieldEffect_ProcessOnOffLayer("Arcs", "Effect/Direction26.img/Arcs/illust/1", 0, 500, 0, 0, 0, 4, 1);
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.fieldEffect_PlayBGM("Bgm38.img/LifeIsComedy");
		cm.sendNormalTalk_Bottom("#face1#南……哈……特……！", 36, 3005053, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#贝尔，你冷静点！", 36, 3005052, false, true);
	} else if (status === i++) {
		cm.fieldEffect_ProcessOnOffLayer("Arcs", "", 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
		cm.inGameDirectionEvent_AskAnswerTime(2500);
	} else if (status === i++) {
		cm.npc_ChangeController(3005050, "oid=381023", 0, -1, 9, 0, -275, 1, false, 1000, false);
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face9#刚刚你听到没？可能有蛮族从哪里入侵了，\r\n好像传来了什么炮击的声音……", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=381021"], [0, 0, 0, 1, 0, 1, 0, 0]);
		cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=381022"], [0, 0, 0, 1, 0, 1, 0, 0]);
		cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 1, 0, 0]);
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.npc_setForceFlip("oid=381021", 1);
		cm.npc_setForceFlip("oid=381022", 1);
		cm.inGameDirectionEvent_ForcedFlip(1);
		cm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("洛斯缇……这，这是……", 56, 0, false, true)
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face9#……", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
		cm.inGameDirectionEvent_AskAnswerTime(600);
	} else if (status === i++) {
		cm.curNodeEventEnd(true);
		cm.forceStartQuest(38102);
		cm.updateInfoQuest(38100, "17=h0;19=h0;16=h1;01=h1;12=h1;23=h1;24=h0");
		cm.npc_LeaveField("oid=381021");
		cm.npc_LeaveField("oid=381022");
		cm.npc_LeaveField("oid=381023");
		cm.warp(410003000, 0);
		cm.setInGameDirectionMode(false, true, false);
		cm.dispose();
	}
}
