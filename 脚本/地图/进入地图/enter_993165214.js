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
		cm.resetMap(993165214)
		cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
		cm.curNodeEventEnd(true);
		cm.setInGameDirectionMode(true, false, true);
		cm.setStandAloneMode(true);
		cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
		cm.npc_ChangeController(3005052, "oid=381191", 250, 255, 100, 200, 300, 0, true, 0, false);
		cm.npc_ChangeController(3005053, "oid=381192", 315, 255, 100, 265, 365, 0, true, 0, false);
		cm.npc_ChangeController(3005077, "oid=381193", 528, 255, 100, 478, 578, 1, true, 0, false);
		cm.npc_ChangeController(3004001, "oid=381194", 575, 173, 0, 525, 625, 1, false, 0, false);
		cm.onTeleport(0, 3, cm.getPlayer().getId(), 176, 255);
		cm.inGameDirectionEvent_ForcedFlip(1);
		cm.inGameDirectionEvent_PushScaleInfo(0, 1500, 0, 412, 210);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1500, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1600);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#来，现在差不多就该都说出来了吧？", 36, 3005053, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#虽然终究没能找到古代神的痕迹……", 36, 3005053, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#可即便如此，你也是花了大价钱买了这家旅馆的，其实你知道有关古代神的重要情报吧？", 36, 3005053, false, true);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#不，其实我打算从现在查起。", 36, 3005054, false, true);
	} else if (status === i++) {
		cm.fieldEffect_PlayBGM("Bgm44.img/WildFury");
		cm.sendNormalTalk_Bottom("#face3#什么？", 36, 3005053, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#始祖龟的所有权转给我的时候，我就稍微修理了一下。", 36, 3005054, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("始祖龟？怎么会？", 56, 0, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face1#因为那是负责这家旅馆中枢组织的机器人。", 36, 3005054, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#始祖龟，停止启动旅馆的所有机器人。", 36, 3005054, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#中断启动旅馆内所有机器人。", 36, 3005051, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#来，这些破烂机器人这下也算是清理好了……", 36, 3005054, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face3#等、等一下！", 36, 3005053, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#始祖龟，攻入旅馆防御体系。", 36, 3005054, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#攻入旅馆防御体系。", 36, 3005051, false, true);
	} else if (status === i++) {
		cm.npc_SetSpecialAction("oid=381193", "special2", -1, 0);
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face1#失败了。", 36, 3005051, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#……", 36, 3005054, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#始祖龟，旅馆监控系统上线。", 36, 3005054, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#旅馆监控系统上线。", 36, 3005051, false, true);
	} else if (status === i++) {
		cm.setNpcSpecialActionReset("oid=381193");
		cm.npc_SetSpecialAction("oid=381193", "green", 1, 1);
		cm.inGameDirectionEvent_AskAnswerTime(600);
	} else if (status === i++) {
		cm.setNpcSpecialActionReset("oid=381193");
		cm.npc_SetSpecialAction("oid=381193", "special2", -1, 0);
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face1#失败了。", 36, 3005051, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#果然只能到这一步了，难道还要再修修？", 36, 3005054, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face2#你……并不是修好了这些机器人……", 36, 3005052, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face2#原来是按照你的口味改造的。", 36, 3005052, false, true);
	} else if (status === i++) {
		cm.npc_SetSpecialAction("oid=381192", "special", -1, 0);
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face3#住手，你以为我们会任你为所欲为吗？", 36, 3005053, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face3#我警告你……如果现在还不住手……", 36, 3005053, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face1#那这个怎么样？", 36, 3005054, false, true);
	} else if (status === i++) {
		cm.npc_ChangeController(3005055, "oid=381195", 399, 255, 100, 349, 449, 1, true, 1500, false);
		cm.npc_SetSpecialAction("oid=381195", "special2", -1, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1600);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face2#……就连那个机器人也改造过吗？", 36, 3005052, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#随身携带一样当纪念品应该会有与众不同的感受。", 36, 3005054, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face1#来，塞妮娅生化人欧米伽，我要给你安排新工作了，他们是我的朋友，\r\n所以可不能让他们身受重伤哦？", 36, 3005054, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("执行命令~", 36, 3005055, false, true);
	} else if (status === i++) {
		cm.setNpcSpecialActionReset("oid=381195");
		cm.npc_SetSpecialAction("oid=381195", "special4", -1, 0);
		cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/Hotel_arcs/robot_walk", 100);
		cm.inGameDirectionEvent_AskAnswerTime(520);
	} else if (status === i++) {
		cm.setNpcSpecialActionReset("oid=381195");
		cm.npc_SetSpecialAction("oid=381195", "special5", -1, 0);
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
		cm.sendNormalTalk_Bottom("……", 36, 3005055, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#哎呦，怎么不动呢？", 36, 3005054, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("达尔米……", 36, 3005055, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("帮达尔米的……", 36, 3005055, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("朋友们……", 36, 3005055, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face2#嗯？你的名字不是达尔米，而是塞妮娅生化人欧米伽版本。", 36, 3005054, false, true);
	} else if (status === i++) {
		cm.setNpcSpecialActionReset("oid=381195");
		cm.npc_SetSpecialAction("oid=381195", "special6", -1, 0);
		cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/Hotel_arcs/robot_walk", 100);
		cm.inGameDirectionEvent_AskAnswerTime(690);
	} else if (status === i++) {
		cm.setNpcSpecialActionReset("oid=381195");
		cm.npc_SetSpecialAction("oid=381195", "special2", -1, 0);
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("内部损伤严重。", 36, 3005055, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("命令冲突，无法执行。", 36, 3005055, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#……", 36, 3005054, false, true);
	} else if (status === i++) {
		cm.fieldEffect_PlayBGM("Bgm35.img/TragicRestart");
		cm.sendNormalTalk_Bottom("#face0#不管怎么改造，破烂终究不过是破烂而已。", 36, 3005054, false, true);
	} else if (status === i++) {
		cm.npc_ChangeController(3005059, "oid=381196", 77, 255, 100, 27, 127, 0, true, 1500, false);
		cm.npc_ChangeController(3005057, "oid=381197", 664, 255, 100, 614, 714, 1, true, 1500, false);
		cm.npc_ChangeController(3005058, "oid=381198", 746, 255, 100, 696, 796, 1, true, 1500, false);
		cm.inGameDirectionEvent_AskAnswerTime(1600);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#来，亲们~因为你们与众不同。", 36, 3005054, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face1#你能忠诚地听命行事吧？", 36, 3005054, false, true);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 700, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.curNodeEventEnd(true);
		cm.npc_LeaveField("oid=381191");
		cm.npc_LeaveField("oid=381192");
		cm.npc_LeaveField("oid=381193");
		cm.npc_LeaveField("oid=381194");
		cm.npc_LeaveField("oid=381195");
		cm.npc_LeaveField("oid=381196");
		cm.npc_LeaveField("oid=381197");
		cm.npc_LeaveField("oid=381198");
		cm.setInGameDirectionMode(false, true, false);
		cm.warp(993165400, 0);
		cm.dispose();
	}
}
