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
		if (!cm.isQuestFinished(35660)) {
			cm.gainItem(4036460, -1);
			cm.forceCompleteQuest(35660);
		}
		cm.curNodeEventEnd(true);
		cm.setInGameDirectionMode(true, false, true);
		cm.setStandAloneMode(true);
		cm.inGameDirectionEvent_SetHideEffect(true);
		cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
		cm.effect_Text(["#fn黑体##fs18#黑魔法师复活前夜"], [100, 1500, 6, 0, -80, 1, 4, 0, 0, 0, 0]);
		cm.inGameDirectionEvent_AskAnswerTime(4000);
	} else if (status === i++) {
		cm.fieldEffect_ProcessOnOffLayer("BM", "Effect/Direction15.img/effect/BM_Weapon/magnus/0", 0, 2000, 0, -80, 0, 4, 1);
		cm.inGameDirectionEvent_AskAnswerTime(2500);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#明明活的好好的，居然一次也不参加会议……\r\n你是想违抗那位大人的命令吗？！", 36, 9063157, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#出来，麦格纳斯！！", 36, 9063157, false, true);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.fieldEffect_ProcessOnOffLayer("BM1", "Effect/Direction15.img/effect/BM_Weapon/magnus/1", 0, 2000, 0, -80, 0, 4, 1);
		cm.inGameDirectionEvent_AskAnswerTime(2500);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#哈哈……好久不见了。在没见面的这段时间你变得更爱生气了呢？", 36, 9063156, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#回答我的问题，你这个叛徒！！", 36, 9063157, false, true);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#离解开封印的日子没多远了。\r\n你去帮我传达一下吧，就说这段时间多谢了。", 36, 9063156, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#你马上给我闭嘴。", 36, 9063157, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#噢，从你的表情上来看，我是戳到了痛点啊。\r\n我可不记得我效忠过黑魔法师啊。", 36, 9063156, false, true);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#这么说下去就没完没了，我还是开门见山吧。\r\n" +
			"#r黑魔法师的意愿和那位大人不同#k。我既然知道了这点，那就没必要继续演戏了。", 36, 9063156, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#切……你这家伙还真是…….", 36, 9063157, false, true);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(700);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#咻……", 36, 9063157, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#好吧。这下子就能确定你这家伙跟我们并不是一边的了。\r\n不对，准确来说应该叫你敌人才对。", 36, 9063157, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#……你这家伙，立刻把从那位大人那里得到的一切都还回来。\r\n看你还能不能像刚才那样嚣张？", 36, 9063157, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#呵呵……好啊，一开始就这么说不就好了？\r\n那你就来试试吧。正好这把剑也饥渴难耐了呢！！", 36, 9063156, false, true);
	} else if (status === i++) {
		cm.fieldEffect_ProcessOnOffLayer("WhiteOut", "Map/Effect2.img/WhiteOut", 0, 2500, 0, 0, 0, 4, 1);
		cm.inGameDirectionEvent_AskAnswerTime(3500);
	} else if (status === i++) {
		cm.fieldEffect_ProcessOnOffLayer("BM", "", 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
		cm.fieldEffect_ProcessOnOffLayer("BM1", "", 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
		cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BM_Weapon/memory", 1000);
		cm.fieldEffect_复合图片动画(["Effect/Direction15.img/effect/BM_Weapon/memory_spine/memory", "animation", "", "memory"], [1, 0, 1, 0, 0, 0, 0, 1]);
		cm.inGameDirectionEvent_AskAnswerTime(4000);
	} else if (status === i++) {
		cm.setInGameDirectionMode(false, true, false);
		cm.warp(cm.getNumberFromQuestInfo(35650, "rMap1"), 0, true);
		cm.fieldEffect_ProcessOnOffLayer("WhiteOut", "", 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
		cm.dispose();
	}
}
