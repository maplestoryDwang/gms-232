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
	} else if (status == i++) {
		cm.curNodeEventEnd(true);
		cm.setInGameDirectionMode(true, false, true);
		cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
		cm.fieldEffect_PlayBGM("Bgm45.img/Time Is Gold");
		cm.setStandAloneMode(true);
		cm.inGameDirectionEvent_ForcedFlip(-1);
		cm.inGameDirectionEvent_SetHideEffect(1);
		cm.npc_ChangeController(3004320, "oid=381011", -3570, 88, 1, false, false);
		cm.npc_SetSpecialAction("oid=381011", "hideName", 0, 0);
		cm.npc_ChangeController(3005066, "oid=381012", -3470, 88, 1, false, false);
		cm.npc_SetSpecialAction("oid=381012", "hideName", 0, 0);
		cm.npc_ChangeController(3005065, "oid=381013", -3415, 88, 1, false, false);
		cm.npc_SetSpecialAction("oid=381013", "hideName", 0, 0);
		cm.npc_ChangeController(3005052, "oid=381014", -3335, 88, 1, false, false);
		cm.npc_SetSpecialAction("oid=381014", "hideName", 0, 0);
		cm.npc_ChangeController(1540732, "oid=381015", -3215, 88, 1, false, false);
		cm.npc_SetSpecialAction("oid=381015", "hideName", 0, 0);
		cm.effect_Text(["#fn黑体##fs18#某天夜里，圣地"], [100, 1000, 6, 0, -80, 1, 4, 0, 0, 0, 0])
		cm.inGameDirectionEvent_AskAnswerTime(5000);
		cm.curNodeEventEnd(true);
	} else if (status === i++) {
		cm.inGameDirectionEvent_PushScaleInfo(0, 1500, 0, -3330, 66);
	} else if (status === i++) {
		cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/Hotel_arcs/whistle", 100);
		cm.inGameDirectionEvent_AskAnswerTime(1500);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("是那边！！", 37, 1540631, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("追上去！！", 37, 1540631, false, true);
	} else if (status === i++) {
		cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/Hotel_arcs/run_step", 100);
		cm.inGameDirectionEvent_AskAnswerTime(4000);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1500, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#好棒，是追击战！", 37, 3004320, false, true);
	} else if (status === i++) {
		cm.Npc_Fadeout("oid=381011", 0, 500);
		cm.sendNormalTalk_Bottom("右边？左边？", 36, 3005065, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("左边。", 36, 3005066, false, true);
	} else if (status === i++) {
		cm.Npc_Fadeout("oid=381012", 0, 500);
		cm.Npc_Fadeout("oid=381013", 0, 500);
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.npc_setForceFlip("oid=381014", 1);
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#南哈特，你没事吗？", 37, 3005052, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("你、你们先走吧，呼……", 37, 1540732, false, true);
	} else if (status === i++) {
		cm.Npc_Fadeout("oid=381014", 0, 500);
		cm.sendNormalTalk_Bottom("这可真是，太离谱了……", 37, 1540732, false, true);
	} else if (status === i++) {
		cm.npc_LeaveField("oid=381012");
		cm.npc_LeaveField("oid=381014");
		cm.sendNormalTalk_Bottom("圣地中央居然出现了来历不明的入侵者……", 37, 1540732, false, true);
	} else if (status === i++) {
		cm.npc_setForceFlip("oid=381015", 1);
		cm.inGameDirectionEvent_PushScaleInfo(2000, 1500, 2000, -2976, 66);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		cm.fieldEffect_ProcessOnOffLayer("Arcs", "Effect/Direction26.img/Arcs/illust/0", 0, 1500, -683, -384, 0, 200000, 0);
		cm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(3000);
	} else if (status === i++) {
		cm.npc_ChangeController(3005061, "oid=381016", -2901, 88, 1, false, false);
		cm.npc_SetSpecialAction("oid=381016", "hideName", 0, 0);
		cm.sendNormalTalk_Bottom("这边的脚印……", 37, 1540732, false, true);
	} else if (status === i++) {
		cm.fieldEffect_ProcessOnOffLayer("Arcs", "", 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=381015"], [0, 0, 0, 1, 0, 1, 0, 0]);
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("嘟嘟囔囔……", 37, 3005061, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("……！", 37, 1540732, false, true);
	} else if (status === i++) {
		cm.npc_SetSpecialAction("oid=381016", "special", -1, 1);
		cm.inGameDirectionEvent_AskAnswerTime(4000);
	} else if (status === i++) {
		cm.npc_LeaveField("oid=381016");
		cm.npc_ChangeController(3005066, "oid=381012", -3000, 88, 100, -3000, 88, 0, false, 500, false);
		cm.npc_ChangeController(3005052, "oid=381014", -3070, 88, 100, -3070, 88, 0, false, 500, false);
		cm.inGameDirectionEvent_AskAnswerTime(1500);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("错过了吗……", 36, 3005066, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#南哈特，没有伤到哪儿吗？", 37, 3005052, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("是，那什么……", 37, 1540732, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#好像在聊什么……", 37, 3005052, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#b要找古代神的痕迹就去格兰蒂斯沙漠#k……是这么说的呢。", 37, 1540732, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face3#沙漠吗？", 37, 3005052, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("……", 37, 1540732, false, true);
	} else if (status === i++) {
		cm.inGameDirectionEvent_PushScaleInfo(2000, 1500, 2000, -2611, -408);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(1650);
	} else if (status === i++) {
		cm.npc_ChangeController(3005061, "oid=381016", -2592, -452, 1, false, false);
		cm.npc_SetSpecialAction("oid=381016", "special2", 0, 0);
		cm.inGameDirectionEvent_AskAnswerTime(2500);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("……", 37, 3005061, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("最好抓紧时间。", 37, 3005061, false, true);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 1500, 0);
		cm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		cm.npc_SetSpecialAction("oid=381016", "special3", -1, 1);
		cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1500, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("那是个比任何人都慢，但又比任何人都快的家伙。", 37, 3005061, false, true);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 2000, 0);
		cm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		cm.npc_LeaveField("oid=381011");
		cm.npc_LeaveField("oid=381012");
		cm.npc_LeaveField("oid=381013");
		cm.npc_LeaveField("oid=381014");
		cm.npc_LeaveField("oid=381015");
		cm.npc_LeaveField("oid=381016");
		cm.warp(993165201, 0);
		cm.dispose();
	}
}
