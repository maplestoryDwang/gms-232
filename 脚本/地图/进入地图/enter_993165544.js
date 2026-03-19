var status = -1; // status: 当前聊天交互轮数
var selectionLog = []; // 记录每一轮的选择
function start() {
	action(1, 0, 0);
}
function action(mode, type, selection) {
	if (cm.getPlayer().getGender() == 0) {
		var a = 3005101
	} else {
		var a = 3005100
	}

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
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
		cm.onTeleport(0, 3, cm.getPlayer().getId(), 562, 321);
		cm.inGameDirectionEvent_ForcedFlip(-1);
		cm.inGameDirectionEvent_PushScaleInfo(0, 1500, 0, 440, 285);
	} else if (status === i++) {
			cm.inGameDirectionEvent_Monologue("在重归心心念念的故乡后，我还有个一定要去的地方。", 0)
	} else if (status === i++) {
		cm.inGameDirectionEvent_Monologue("我在这里倾注了许多情感，不亚于我的故乡。", 0)
	} else if (status === i++) {
		cm.inGameDirectionEvent_Monologue("那是我第一次遇到陌生人，第一次开始冒险的地方。", 1)
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(1500);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1500, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1500);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#小家伙们，现在看到了吗？能看到纳林村的屋檐了。", 36, a, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#果然，我一直想着有机会回来一趟的。", 36, a, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face6#毕竟我刚开始旅行后第一次探访的地方就是这里！", 36, a, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#纳林村的所有人，大家都过得还好吗？", 36, a, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#我好像听到熟悉的声音了……", 36, 3005112, false, true);
	} else if (status === i++) {
		cm.npc_ChangeController(3005110, "oid=397021", 240, 321, 100, 190, 290, 0, true, 1000, false);
		cm.npc_ChangeController(3005111, "oid=397022", 167, 321, 100, 117, 217, 0, true, 1000, false);
		cm.npc_ChangeController(3005112, "oid=397023", 315, 321, 100, 265, 365, 0, true, 1000, false);
		cm.npc_SetForceMove("oid=397021", -1, 80, 150);
		cm.npc_SetForceMove("oid=397022", -1, 80, 150);
		cm.npc_SetForceMove("oid=397023", -1, 80, 150);
		cm.sendNormalTalk_Bottom("#face0#天啊，啦啦" + (cm.getPlayer().getGender() == 0 ? "哥" : "姐") + "？！", 36, 3005112, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#臭小子，又给我耍花招？我再也不会上当了！", 36, 3005111, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#" + (cm.getPlayer().getGender() == 0 ? "哥哥" : "姐姐") + "现在离开了村庄，正在周游世界各地……不对，这不就是" + (cm.getPlayer().getGender() == 0 ? "哥哥" : "姐姐") + "嘛？！", 36, 3005110, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#啦啦" + (cm.getPlayer().getGender() == 0 ? "哥" : "姐") + "！真的好久不见了呢！呜呜呜，我就知道你总有一天还会来的，我一直坚信。", 36, 3005112, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face6#好久不见，大家过得还好吗？", 36, a, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#我们也就算了，不知" + (cm.getPlayer().getGender() == 0 ? "哥" : "姐") + "你过得还好吗？", 36, 3005112, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#你要是有空的话，不如讲讲之前都发生了什么吧！", 36, 3005112, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#怎么说的来着……啊，对了，不是说要用手上的铃铛干嘛来着？", 36, 3005111, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#啊，要说是怎么回事吧……", 36, a, false, true);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
		cm.inGameDirectionEvent_AskAnswerTime(5000);
	} else if (status === i++) {
		cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 476, 285);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2000, 0);
		cm.sendNormalTalk_Bottom("#face0#哎呦，所以呢？所以后来怎么样了？", 36, 3005110, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#那就是结束，黑魔法师消失了，冒险岛世界再次恢复了平静。", 36, a, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#我的天啊，居然还有这种事的吗……世界的危机啊超越者啊什么的，我之前完全都不知道。", 36, 3005111, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#不愧是" + (cm.getPlayer().getGender() == 0 ? "哥哥" : "姐姐") + "你呢，换作是我们，肯定会瑟瑟发抖，一动都不敢动呢。", 36, 3005111, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#不是我自己一个人办到的，是因为有许多人出手相助，才能最终实现。", 36, a, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#当然纳林村的各位也是一样！", 36, a, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#我一直想要来道声谢，能在这里迈出我的第一步实在是三生有幸。", 36, a, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#哎呦，" + (cm.getPlayer().getGender() == 0 ? "哥" : "姐") + "你也真是的，多不好意思啊……", 36, 3005112, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#你到底做什么了，心里还这么充实？", 36, 3005111, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#没错，要是格里大哥还不好说。", 36, 3005110, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face4#……格里最近没回村庄吗？", 36, a, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#这个嘛，要是想起来了倒是会回来一两趟……", 36, 3005111, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#可也没待多长时间啊，也不知道有什么好忙的。", 36, 3005111, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#啦啦" + (cm.getPlayer().getGender() == 0 ? "哥" : "姐") + "大战归来，要是能顺带在这里等着该多好啊？", 36, 3005112, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#总之格里大哥在这方面真是一点都不开窍呢……", 36, 3005112, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#什么，臭小子？", 36, 3005102, false, true);
	} else if (status === i++) {
		cm.npc_ChangeController(3005102, "oid=397024", 756, 321, 100, 706, 806, 1, true, 1000, false);
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.inGameDirectionEvent_ForcedFlip(1);
		cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=397021"], [0, 0, 0, 1, 0, 1, 0, 0]);
		cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=397022"], [0, 0, 0, 1, 0, 1, 0, 0]);
		cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=397023"], [0, 0, 0, 1, 0, 1, 0, 0]);
		cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 1, 0, 0]);
		cm.npc_SetForceMove("oid=397024", -1, 60, 150);
		cm.inGameDirectionEvent_AskAnswerTime(1500);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face2#你以为背后说人闲话，人前一口一个大哥的叫就行了吗？！", 36, 3005102, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face2#格里！", 36, a, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face6#这是多久没见啊，我好想你呢！", 36, a, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face1#是啊是啊，我有听到过几次消息。", 36, 3005102, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face1#听说你可是迎战了一个超厉害的家伙啊？", 36, 3005102, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face1#你还是一点都不知道什么叫害怕啊。", 36, 3005102, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#我也有很多话想要对你说呢。", 36, a, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face6#过来一起玩会儿再走！", 36, a, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#哎呦，你怎么连这些都和从前一个样。", 36, 3005102, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face5#……这些方面倒是挺好的，不过。", 36, 3005102, false, true);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		cm.curNodeEventEnd(true);
		cm.forceCompleteQuest(39701);
		cm.forceCompleteQuest(39702);
		cm.dispose();
		cm.warp(993120000, 5, false);
		cm.setInGameDirectionMode(false, true, false);
		cm.setStandAloneMode(false);
		cm.npc_LeaveField("oid=397021");
		cm.npc_LeaveField("oid=397022");
		cm.npc_LeaveField("oid=397023");
		cm.npc_LeaveField("oid=397024");
	}
}
