var status = -1; // status: 当前聊天交互轮数
var selectionLog = []; // 记录每一轮的选择
function start() {
	action(1, 0, 0);
}
function action(mode, type, selection) {
	if (!cm.isQuestFinished(38102)){
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
			cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
			cm.inGameDirectionEvent_ForcedFlip(-1);
			cm.npc_ChangeController(3005052, "oid=381021", -505, -9, 1, false, false);
			cm.npc_ChangeController(3005053, "oid=381022", -603, -9, 1, false, false);
			cm.onTeleport(0, 3, cm.getPlayer().getId(), -373, -9);
			cm.inGameDirectionEvent_AskAnswerTime(100);
		} else if (status === i++) {
			cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -465, 2);
		} else if (status === i++) {
			cm.inGameDirectionEvent_AskAnswerTime(2000);
		} else if (status === i++) {
			cm.sendNormalTalk_Bottom("因为只有一艘快艇，我就先回去了\r\n听闻沙暴就要来袭，还请各位先留在此地寻找古代神的痕迹。\r\n\r\n-南哈特上", 36, 1540732, false, true);
		} else if (status === i++) {
			cm.inGameDirectionEvent_AskAnswerTime(1000);
		} else if (status === i++) {
			cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
			cm.inGameDirectionEvent_AskAnswerTime(2500);
		} else if (status === i++) {
			cm.sendNormalTalk_Bottom("#face0#……", 36, 3005053, false, true);
		} else if (status === i++) {
			cm.inGameDirectionEvent_AskAnswerTime(1000);
		} else if (status === i++) {
			cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
			cm.curNodeEventEnd(true);
			cm.inGameDirectionEvent_AskAnswerTime(600);
		} else if (status === i++) {
			cm.npc_LeaveField("oid=381021");
			cm.npc_LeaveField("oid=381022");
			cm.warp(993165203, 0);
			cm.dispose();
		}
	} else if (cm.isQuestFinished(38102)){
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
			//cm.resetMap(993165205)
			cm.fieldEffect_PlayBGM("Bgm57.img/Welcome to Hotel Arcs", 0, 0);
			cm.curNodeEventEnd(true);
			cm.setInGameDirectionMode(true, false, true);
			cm.setStandAloneMode(true);
			cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
			cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
			cm.npc_ChangeController(3005051, "oid=381031", 8, -45, 10, 0, 9, 1, true, 0, false);
			cm.npc_ChangeController(3005052, "oid=381032", -207, -9, 0, false, false);
			cm.npc_ChangeController(3005053, "oid=381033", -53, -9, 0, false, false);
			cm.npc_ChangeController(3005050, "oid=381034", 88, -9, 1, false, false);
			cm.onTeleport(0, 3, cm.getPlayer().getId(), -150, -9);
			cm.inGameDirectionEvent_ForcedFlip(1);
			cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 35, -17);
		} else if (status === i++) {
			cm.sendNormalTalk_Bottom("#face1#你问我会不会出售旅馆？", 36, 3005050, false, true);
		} else if (status === i++) {
			cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1500, 0);
			cm.inGameDirectionEvent_AskAnswerTime(1500);
		} else if (status === i++) {
			cm.sendNormalTalk_Bottom("#face1#你们没看到塞妮娅拿出来的东西吗？都看到那张什么都能买的魔法卡片了还能问出这种问题？", 36, 3005050, false, true);
		} else if (status === i++) {
			cm.sendNormalTalk_Bottom("#face4#看来和某个什么联盟大不一样，人家钱很多噢。", 36, 3005050, false, true);
		} else if (status === i++) {
			cm.sendNormalTalk_Bottom("#face0#切……", 36, 3005053, false, true);
		} else if (status === i++) {
			cm.sendNormalTalk_Bottom("#face0#但也没有给个准确的答复，洛斯缇，难道有什么其他原因？", 36, 3005052, false, true);
		} else if (status === i++) {
			cm.sendNormalTalk_Bottom("#face8#那个嘛……任凭我想破了脑袋也还是觉得很不合理……\r\n我实在是搞不懂为什么要花大价钱买下一座摇摇欲坠的旅馆。", 36, 3005050, false, true);
		} else if (status === i++) {
			cm.sendNormalTalk_Bottom("#face0#可说起来，像塞妮娅这样面相和善的人会行骗也说不过去。", 36, 3005050, false, true);
		} else if (status === i++) {
			cm.sendNormalTalk_Bottom("#face2#……那个，刚刚我们提到的有关垂钓者公司的来历，你都当耳旁风了吗？", 36, 3005053, false, true);
		} else if (status === i++) {
			cm.sendNormalTalk_Bottom("#face8#反正我决定再考虑几天了。", 36, 3005050, false, true);
		} else if (status === i++) {
			cm.sendNormalTalk_Bottom("嗯……那这段时间怎么说？", 56, 0, false, true);
		} else if (status === i++) {
			cm.sendNormalTalk_Bottom("#face0#南哈特说得没错，说不定可以发现什么线索，我们去\r\n周围搜搜看怎么样？", 36, 3005052, false, true);
		} else if (status === i++) {
			cm.sendNormalTalk_Bottom("#face0#切，这毫无头绪无从下手的话，简直就是大海捞针嘛……", 36, 3005053, false, true);
		} else if (status === i++) {
			cm.sendNormalTalk_Bottom("#face8#既然关于你们所提到的那个古代神，虽然不知道那是什么，不过一定年代久远吧？", 36, 3005050, false, true);
		} else if (status === i++) {
			cm.sendNormalTalk_Bottom("估计是吧？", 56, 0, false, true);
		} else if (status === i++) {
			cm.sendNormalTalk_Bottom("#face8#那应该是所有人都觊觎贵重之物……", 36, 3005050, false, true);
		} else if (status === i++) {
			cm.sendNormalTalk_Bottom("#face0#难道你已经有头绪了？", 36, 3005052, false, true);
		} else if (status === i++) {
			cm.sendNormalTalk_Bottom("#face8#之前是有张#b藏宝图#k之类的东西，可我实在想不起来到底哪儿来的了……", 36, 3005050, false, true);
		} else if (status === i++) {
			cm.sendNormalTalk_Bottom("#b藏宝图#k？", 56, 0, false, true);
		} else if (status === i++) {
			cm.sendNormalTalk_Bottom("#face0#上面写着奇怪的语句……是什么来着……", 36, 3005050, false, true);
		} else if (status === i++) {
			cm.inGameDirectionEvent_AskAnswerTime(500);
		} else if (status === i++) {
			cm.sendNormalTalk_Bottom("#face0##r比任何人都慢，却也比任何人快。", 36, 3005051, false, true);
		} else if (status === i++) {
			cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=381033"], [0, 0, 0, 1, 0, 1, 0, 0]);
			cm.inGameDirectionEvent_AskAnswerTime(1000);
		} else if (status === i++) {
			cm.sendNormalTalk_Bottom("#face1#这种事怎么现在才说呢！", 36, 3005053, false, true);
		} else if (status === i++) {
			cm.sendNormalTalk_Bottom("#face1#我也是现在才想起来的！那是很久之前在仓库里滚动的\r\n纸片之类的东西……", 36, 3005050, false, true);
		} else if (status === i++) {
			cm.sendNormalTalk_Bottom("#face3#地图现在在哪儿？", 36, 3005052, false, true);
		} else if (status === i++) {
			cm.sendNormalTalk_Bottom("#face0#这就是问题所在。", 36, 3005050, false, true);
		} else if (status === i++) {
			cm.npc_SetSpecialAction("oid=381034", "special", 0, 0);
			cm.inGameDirectionEvent_AskAnswerTime(1000);
		} else if (status === i++) {
			cm.sendNormalTalk_Bottom("#face8#之前已经弄丢了。", 36, 3005050, false, true);
		} else if (status === i++) {
			cm.sendNormalTalk_Bottom("#face2#……", 36, 3005053, false, true);
		} else if (status === i++) {
			cm.sendNormalTalk_Bottom("#face3#你还记得是在哪儿，怎么弄丢的吗？", 36, 3005052, false, true);
		} else if (status === i++) {
			cm.sendNormalTalk_Bottom("#face0#嗯……荒地住着一些暴徒……\r\n这帮家伙要是没有食物了，也会时不时来入侵这家旅馆。", 36, 3005050, false, true);
		} else if (status === i++) {
			cm.sendNormalTalk_Bottom("#face0#估计是当时被一起偷了。", 36, 3005050, false, true);
		} else if (status === i++) {
			cm.sendNormalTalk_Bottom("#face4#大部分都是没用的文件，我想象着那帮家伙打开看后一定气得直哆嗦，\r\n嗤嗤地笑。", 36, 3005050, false, true);
		} else if (status === i++) {
			cm.sendNormalTalk_Bottom("……", 56, 0, false, true);
		} else if (status === i++) {
			cm.sendNormalTalk_Bottom("#face0#来，那就快走吧。", 36, 3005052, false, true);
		} else if (status === i++) {
			cm.sendNormalTalk_Bottom("#face9#喂，你们的土豆……！", 36, 3005050, false, true);
		} else if (status === i++) {
			cm.Npc_Fadeout("oid=381032", 0, 500);
			cm.Npc_Fadeout("oid=381033", 0, 500);
			cm.inGameDirectionEvent_AskAnswerTime(1000);
		} else if (status === i++) {
			cm.sendNormalTalk_Bottom("……", 56, 0, false, true);
		} else if (status === i++) {
			cm.sendNormalTalk_Bottom("#face0#……！", 36, 3005050, false, true);
		} else if (status === i++) {
			cm.sendNormalTalk_Bottom("咦，等等我……！", 56, 0, false, true);
		} else if (status === i++) {
			cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 1000, 0);
			cm.inGameDirectionEvent_AskAnswerTime(1100);
		} else if (status === i++) {
			cm.curNodeEventEnd(true);
			cm.npc_LeaveField("oid=381031");
			cm.npc_LeaveField("oid=381032");
			cm.npc_LeaveField("oid=381033");
			cm.npc_LeaveField("oid=381034");
			cm.forceStartQuest(38103);
			cm.updateInfoQuest(38100, "17=h0;19=h0;16=h1;01=h1;12=h0;23=h0;24=h0;05=h1;06=h1;11=h1");
			cm.warp(410003000, 0);
			cm.setInGameDirectionMode(false, true, false);
			cm.OnStartNavigation(410003030, 0, "", 0);
			cm.dispose();
		}
	} else {
		cm.dispose();
		return;
	}
}