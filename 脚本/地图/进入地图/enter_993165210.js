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
		cm.resetMap(993165210)
		cm.fieldEffect_PlayBGM("Bgm57.img/Train heading nowhere");
		cm.curNodeEventEnd(true);
		cm.setInGameDirectionMode(true, false, true);
		cm.setStandAloneMode(true);
		cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
		cm.npc_ChangeController(3005052, "oid=381161", -650, -157, 100, -700, -600, 0, true, 0, false);
		cm.npc_ChangeController(3005050, "oid=381162", -590, -157, 100, -640, -540, 0, true, 0, false);
		cm.npc_ChangeController(3005053, "oid=381163", -475, -157, 100, -525, -425, 0, true, 0, false);
		cm.npc_ChangeController(3005054, "oid=381164", -372, -157, 100, -422, -322, 1, true, 0, false);
		cm.onTeleport(0, 3, cm.getPlayer().getId(), -535, -157);
		cm.inGameDirectionEvent_ForcedFlip(1);
		cm.inGameDirectionEvent_PushScaleInfo(0, 1500, 0, -452, -134);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(100);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1500, 0);
		cm.userSetFieldFloating(993165210, 2, 2, 1);
		cm.inGameDirectionEvent_AskAnswerTime(3000);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("多亏了你，我们好不容易才上来了。", 56, 0, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face3#喂，你帮我们到底是何居心？", 36, 3005053, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face1#什么叫居心！那是人美心善，乐善好施！", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face1#因为我想要和你们亲近一些。", 36, 3004001, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face3#……", 36, 3005053, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face1#火车是坐上来了……可到底要去哪儿？", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 800, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.fieldEffect_ProcessOnOffLayer("Arcs", "Effect/Direction26.img/Arcs/illust/5", 0, 700, 0, 0, 0, 4, 1);
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("估计是地图上出现的蛇头之类的……", 56, 0, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#是，列车最前面的车厢，好像指的是#b中控室#k。", 36, 3005052, false, true);
	} else if (status === i++) {
		cm.fieldEffect_ProcessOnOffLayer("Arcs", "", 2, 700, 0, 0, 0, 0, 0, 0, 0, 0, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1500);
	} else if (status === i++) {
		cm.userSetFieldFloating(993165210, 0, 0, 0);
		cm.inGameDirectionEvent_PushScaleInfo(1000, 1500, 1000, -452, 116);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(1100);
	} else if (status === i++) {
		cm.userSetFieldFloating(993165210, 2, 2, 1);
		cm.npc_ChangeController(3005074, "oid=381165", -784, 165, 100, -834, -734, 0, true, 1500, false);
		cm.npc_ChangeController(3005074, "oid=381166", -615, 165, 100, -665, -565, 0, true, 1500, false);
		cm.npc_ChangeController(3005074, "oid=381167", -470, 165, 100, -520, -420, 0, true, 1500, false);
		cm.inGameDirectionEvent_AskAnswerTime(1600);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("目前监测到有乘客没查票就上车了。", 36, 3005074, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("擅自登上列车的乘客……", 36, 3005074, false, true);
	} else if (status === i++) {
		cm.npc_ChangeController(3005075, "oid=381168", -111, 165, 100, -161, -61, 1, true, 1500, false);
		cm.inGameDirectionEvent_AskAnswerTime(1600);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("吼吼……", 36, 3005075, false, true);
	} else if (status === i++) {
		cm.npc_SetSpecialAction("oid=381165", "special", 0, 0);
		cm.npc_SetSpecialAction("oid=381166", "special", 0, 0);
		cm.npc_SetSpecialAction("oid=381167", "special", 0, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1600);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("将视作流浪者，进行清理。", 36, 3005074, false, true);
	} else if (status === i++) {
		cm.userSetFieldFloating(993165210, 0, 0, 0);
		cm.inGameDirectionEvent_PushScaleInfo(1000, 1500, 1000, -452, -134);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(1100);
	} else if (status === i++) {
		cm.userSetFieldFloating(993165210, 2, 2, 1);
		cm.sendNormalTalk_Bottom("#face3#唔……怎么连这里都有机器人？", 36, 3005053, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#当然，列车上也需要服务员。", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#我还以为已经停止运转了，毕竟自从凯利走了之后，就没人再照顾这些了。", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#从前……我还经常和凯利、警犬机器人一起玩扔球来着……", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#现在……已经彻底摆脱了控制啊……", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("等下，好像有什么其他声音……", 56, 0, false, true);
	} else if (status === i++) {
		cm.npc_ChangeController(3005056, "oid=381169", -784, -157, 100, -834, -734, 0, true, 1500, false);
		cm.inGameDirectionEvent_AskAnswerTime(1600);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("你们是来找宝物的。", 36, 3005056, false, true);
	} else if (status === i++) {
		cm.npc_ChangeController(3005076, "oid=3811610", -81, -160, 100, -131, -31, 1, true, 1500, false);
		cm.inGameDirectionEvent_AskAnswerTime(1600);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("xxx……XXX……xxxx……！！", 36, 3005076, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face2#看来就连他们……也追到这里来报仇了。", 36, 3005052, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("……数量实在是太多了。", 56, 0, false, true);
	} else if (status === i++) {
		cm.npc_SetSpecialAction("oid=381169", "special2", 0, 1);
		cm.npc_SetSpecialAction("oid=3811610", "special", 0, 1);
		cm.inGameDirectionEvent_AskAnswerTime(1600);
	} else if (status === i++) {
		cm.npc_LeaveField("oid=381169");
		cm.inGameDirectionEvent_AskAnswerTime(700);
	} else if (status === i++) {
		cm.npc_LeaveField("oid=3811610");
		cm.inGameDirectionEvent_AskAnswerTime(100);
	} else if (status === i++) {
		cm.npc_ChangeController(3005057, "oid=3811611", -80, -160, 100, -130, -30, 1, true, 1500, false);
		cm.npc_ChangeController(3005058, "oid=3811612", -770, -157, 100, -820, -720, 0, true, 1500, false);
		cm.npc_ChangeController(3005059, "oid=3811613", -865, -157, 100, -915, -815, 0, true, 1500, false);
		cm.inGameDirectionEvent_AskAnswerTime(1600);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#往前走吧，我来打理。", 36, 3004001, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face3#……但是。", 36, 3005052, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face1#继续待在这里，他们还会从四面八方涌过来的。", 36, 3004001, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#……谢谢，塞妮娅，我会先和洛斯缇去中控室的。", 36, 3005052, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face3#可、可是人数未免也太多了吧？", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face1#你可别小看了塞妮娅生化人，呵呵。", 36, 3004001, false, true);
	} else if (status === i++) {
		cm.npc_SetForceMove("oid=381161", 1, 150, 100);
		cm.npc_SetForceMove("oid=381162", 1, 150, 100);
		cm.inGameDirectionEvent_AskAnswerTime(1500);
	} else if (status === i++) {
		cm.Npc_Fadeout("oid=381161", 10, 500);
		cm.Npc_Fadeout("oid=381162", 10, 500);
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.npc_LeaveField("oid=381161");
		cm.npc_LeaveField("oid=381162");
		cm.npc_SetForceMove("oid=381163", 1, 130, 100);
		cm.inGameDirectionEvent_AskAnswerTime(2500);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("……", 56, 0, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face3#……", 36, 3005053, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face3#额……！", 36, 3005053, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#贝尔？#h0#？你们没走吗？", 36, 3004001, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face3#就算你是一股具有威胁性的势力……", 36, 3005053, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face3#我可没办法那么不负责任，为了目的就弃之不理。", 36, 3005053, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face1#哇，我们终于成为朋友了吗？", 36, 3004001, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face3#临时休战！", 36, 3005053, false, true);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 1000, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1100);
	} else if (status === i++) {
		cm.curNodeEventEnd(true);
		cm.userSetFieldFloating(993165210, 0, 0, 0);
		cm.npc_LeaveField("oid=381161");
		cm.npc_LeaveField("oid=381162");
		cm.npc_LeaveField("oid=381163");
		cm.npc_LeaveField("oid=381164");
		cm.npc_LeaveField("oid=381165");
		cm.npc_LeaveField("oid=381166");
		cm.npc_LeaveField("oid=381167");
		cm.npc_LeaveField("oid=381168");
		cm.npc_LeaveField("oid=381169");
		cm.npc_LeaveField("oid=3811610");
		cm.npc_LeaveField("oid=3811611");
		cm.npc_LeaveField("oid=3811612");
		cm.npc_LeaveField("oid=3811613");
		cm.setInGameDirectionMode(false, true, false);
		cm.updateInfoQuest(38100, "16=h1;01=h0;12=h0;23=h0;14=h1");
		cm.forceCompleteQuest(38116);
		cm.warp(410003170, 0);
		cm.dispose();
	}
}
