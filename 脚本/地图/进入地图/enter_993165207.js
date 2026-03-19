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
		cm.resetMap(993165207)
		cm.curNodeEventEnd(true);
		cm.setInGameDirectionMode(true, false, true);
		cm.setStandAloneMode(true);
		cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
		cm.fieldEffect_PlayBGM("Bgm57.img/Lonesome Cinema");
		cm.npc_ChangeController(3005052, "oid=381101", -96, 277, 100, -146, -46, 0, true, 0, false);
		cm.npc_ChangeController(3005076, "oid=381102", 95, 277, 100, 45, 145, 1, true, 0, false);
		cm.npc_ChangeController(3005076, "oid=381103", 185, 277, 100, 135, 235, 1, true, 0, false);
		cm.onTeleport(0, 3, cm.getPlayer().getId(), -188, 277);
		cm.inGameDirectionEvent_ForcedFlip(1);
		cm.inGameDirectionEvent_PushScaleInfo(0, 1500, 0, 29, 222);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
		cm.inGameDirectionEvent_AskAnswerTime(3000);
	} else if (status === i++) {
		cm.npc_SetSpecialAction("oid=381102", "special", 1, 0);
		cm.npc_SetSpecialAction("oid=381103", "special", 1, 0);
		cm.inGameDirectionEvent_AskAnswerTime(2300);
	} else if (status === i++) {
		cm.npc_LeaveField("oid=381102");
		cm.npc_LeaveField("oid=381103");
		cm.npc_ChangeController(3005057, "oid=381104", 97, 277, 100, 47, 147, 1, true, 1000, false);
		cm.npc_ChangeController(3005058, "oid=381105", 197, 277, 100, 147, 247, 1, true, 1000, false);
		cm.npc_ChangeController(3005059, "oid=381106", 281, 277, 100, 231, 331, 1, true, 1000, false);
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=381101"], [0, 0, 0, 1, 0, 1, 0, 0]);
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#为什么塞妮娅的生化人会帮忙消灭怪物？", 36, 3005052, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("塞妮娅生化人会救出遇到危险的塞妮娅的朋友们~", 36, 3005057, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("塞妮娅生化人喜欢净化~", 36, 3005058, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("塞妮娅生化人很看重人的安全~", 36, 3005059, false, true);
	} else if (status === i++) {
		cm.Npc_Fadeout("oid=381104", 0, 1000);
		cm.Npc_Fadeout("oid=381105", 0, 1000);
		cm.Npc_Fadeout("oid=381106", 0, 1000);
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("不如就先借这个机会找找地图吧。", 56, 0, false, true)
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 1000, 0);
		cm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		cm.npc_LeaveField("oid=381101");
		cm.npc_ChangeController(3005052, "oid=381101", 464, 277, 100, 414, 514, 1, true, 0, false);
		cm.onTeleport(0, 3, cm.getPlayer().getId(), 240, 277);
		cm.inGameDirectionEvent_ForcedFlip(1);
		cm.inGameDirectionEvent_PushScaleInfo(0, 1500, 0, 375, 228);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#基本上怪物的特点都是会将赃物藏在自己的巢穴里。", 36, 3005052, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("对他们来说，巢穴……", 56, 0, false, true)
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#对，应该是将废弃汽车当成了巢穴，\r\n所以像这样打开汽车找找。", 36, 3005052, false, true);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face3#啊，好像终于找到了呢。", 36, 3005052, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("打开地图吧。", 56, 0, false, true)
	} else if (status === i++) {
		cm.fieldEffect_ProcessOnOffLayer("Arcs", "Effect/Direction26.img/Arcs/illust/5", 0, 1500, 0, 0, 0, 4, 1);
		cm.inGameDirectionEvent_AskAnswerTime(2500);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("嗯……", 56, 0, false, true)
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#等一下。", 36, 3005052, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face3#这幅地图……你不觉得有点古怪吗？", 36, 3005052, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face3#这地方不是岛屿而是一片大陆，在地图画得倒像是一座岛，\r\n还有东西南北四个方位的柱子。", 36, 3005052, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("更何况这幅画着巨蟒的画……", 56, 0, false, true)
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#……", 36, 3005052, false, true);
	} else if (status === i++) {
		cm.fieldEffect_ProcessOnOffLayer("Arcs", "", 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1500);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1500, 0);
		cm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#你回旅馆吧，我要去见一见洛斯缇了。", 36, 3005052, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("等一下，还要找到达尔米的部件呢……", 56, 0, false, true)
	} else if (status === i++) {
		cm.Npc_Fadeout("oid=381101", 0, 700);
		cm.inGameDirectionEvent_AskAnswerTime(700);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("像风一样消散了。", 56, 0, false, true)
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#你好，#h0#。", 36, 3004001, false, true);
	} else if (status === i++) {
		cm.OverlapScreenDetail19(0, 1000, 3000, 1);
		cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
	} else if (status === i++) {
		cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(300);
	} else if (status === i++) {
		cm.fieldEffect_RemoveOverlapScreenDetail(1000);
		cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 340, 265);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.npc_ChangeController(3005054, "oid=381107", 440, 95, 100, 390, 490, 1, true, 300, false);
		cm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		cm.npc_SetForceMove("oid=381107", -1, 40, 102);
		cm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("塞妮娅？你从什么时候在那里的……", 56, 0, false, true)
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face2#嗯……塞妮娅实在是太美了，到底要怎么做才能成为她的手下呢……应该是从现在开始吧？", 36, 3004001, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("我可没这么说过……", 56, 0, false, true)
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("难道之前一直在监视我们？", 56, 0, false, true)
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#糟糕，被发现了呢，呵呵呵……呵……嗯……", 36, 3004001, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("……", 56, 0, false, true)
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#是，其实就只是碰巧，听说这里到处都是破碎的机器，我就过来看看，\r\n哎呦，这次是真的呢。", 36, 3004001, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#机器这东西，和人不一样，一旦开始失去用处，就只会变得\r\n毫无价值可言。", 36, 3004001, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face1#可我总觉得……应该有人为他们……追悼吧。", 36, 3004001, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("……", 56, 0, false, true)
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 1500, 0);
		cm.curNodeEventEnd(true);
		cm.npc_LeaveField("oid=381101");
		cm.npc_LeaveField("oid=381102");
		cm.npc_LeaveField("oid=381103");
		cm.npc_LeaveField("oid=381104");
		cm.npc_LeaveField("oid=381105");
		cm.npc_LeaveField("oid=381106");
		cm.npc_LeaveField("oid=381107");
		cm.setInGameDirectionMode(false, true, false);
		cm.forceCompleteQuest(38110);
		cm.updateInfoQuest(38100, "16=h1;01=h1;12=h1;23=h0;15=h1");
		cm.warp(410003120, 0)
		cm.dispose();
	}
}
