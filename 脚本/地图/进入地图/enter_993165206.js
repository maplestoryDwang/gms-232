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
		cm.setInGameDirectionMode(true, false, true);
		cm.setStandAloneMode(true);
		cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
		cm.fieldEffect_PlayBGM("Bgm57.img/Wayout of the wilderness");
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
		cm.npc_ChangeController(3005052, "oid=381051", 1188, 255, 100, 1138, 1238, 1, true, 0, false);
		cm.npc_ChangeController(3005053, "oid=381052", 1021, 255, 100, 971, 1071, 1, true, 0, false);
		cm.npc_ChangeController(3005055, "oid=381053", -112, 255, 100, -162, -62, 0, true, 0, false);
		cm.onTeleport(0, 3, cm.getPlayer().getId(), 1100, 255);
		cm.inGameDirectionEvent_ForcedFlip(-1);
		cm.inGameDirectionEvent_PushScaleInfo(0, 1500, 0, 1118, 216);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1500, 0);
		cm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face3#呼……呼……那伙黑帮的人貌似全都涌过来了啊？人数太多了。", 36, 3005053, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("等下，但是达尔米呢？", 56, 0, false, true)
	} else if (status === i++) {
		cm.inGameDirectionEvent_PushScaleInfo(1000, 1500, 1000, -140, 216);
	} else if (status == i++) {
		cm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status == i++) {
		cm.sendNormalTalk_Bottom("达尔米！！达尔米！！", 36, 3005055, false, true);
	} else if (status === i++) {
		cm.npc_ChangeController(3005056, "oid=381054", -242, 255, 100, -292, -192, 0, true, 2000, false);
		cm.npc_ChangeController(3005056, "oid=381055", -404, 255, 100, -454, -354, 0, true, 2000, false);
		cm.npc_ChangeController(3005056, "oid=381056", 20, 255, 100, -30, 70, 1, true, 2000, false);
		cm.npc_ChangeController(3005056, "oid=381057", 193, 255, 100, 143, 243, 1, true, 2000, false);
		cm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status == i++) {
		cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=381053"], [0, 0, 0, 1, 0, 1, 0, 0]);
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status == i++) {
		cm.sendNormalTalk_Bottom("达尔米……！！", 36, 3005055, false, true);
	} else if (status === i++) {
		cm.inGameDirectionEvent_PushScaleInfo(1000, 1500, 1000, 1118, 216);
	} else if (status == i++) {
		cm.inGameDirectionEvent_AskAnswerTime(1500);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face3#等等，必须去救达尔米！", 36, 3005053, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face3#好不容易才把人甩掉，要是再回去，搞不好会有危险。", 36, 3005052, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face3#这么说是要就这么放着不管吗？", 36, 3005053, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face3#贝尔，一旦机器被毁，可以重新制造的……", 36, 3005052, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face3#天底下没有所谓一模一样的机器人。", 36, 3005053, false, true);
	} else if (status === i++) {
		cm.Npc_Fadeout("oid=381052", 0, 1500);
		cm.inGameDirectionEvent_AskAnswerTime(1500);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face3#贝尔！！", 36, 3005052, false, true);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 1000, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/waddler/groggy_attack", 200);
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.curNodeEventEnd(true);
		cm.npc_LeaveField("oid=381051");
		cm.npc_LeaveField("oid=381052");
		cm.npc_LeaveField("oid=381053");
		cm.npc_LeaveField("oid=381054");
		cm.npc_LeaveField("oid=381055");
		cm.npc_LeaveField("oid=381056");
		cm.npc_LeaveField("oid=381057");
		cm.setInGameDirectionMode(false, true, false);
		cm.forceCompleteQuest(38105);
		cm.updateInfoQuest(38100, "17=h0;19=h0;16=h1;01=h1;12=h0;23=h0;24=h0;05=h1;06=h1;11=h1;04=h0;");
		cm.warp(410003030, 0);
		cm.dispose();
	}
}
