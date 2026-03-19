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
		if (!cm.isQuestFinished(35659)) {
			cm.gainItem(4036458, -1);
			cm.forceCompleteQuest(35659);
		}
		cm.curNodeEventEnd(true);
		cm.setInGameDirectionMode(true, false, true);
		cm.setStandAloneMode(true);
		cm.inGameDirectionEvent_SetHideEffect(true);
		cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
		cm.effect_Text(["#fn黑体##fs18#蛇复活前的一个夜晚"], [100, 1000, 6, 0, -80, 1, 4, 0, 0, 0, 0]);
		cm.inGameDirectionEvent_AskAnswerTime(3000);
	} else if (status === i++) {
		cm.fieldEffect_ProcessOnOffLayer("BM", "Effect/Direction15.img/effect/BM_Weapon/arka/0", 0, 2000, 0, -80, 0, 4, 1);
		cm.inGameDirectionEvent_AskAnswerTime(2500);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face1#狡猾的希拉……啧，说我受到了惩罚？\r\n……居然敢在那位大人面前胡言乱语，陷害我……", 36, 9063155, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face1#咳……伟大的大人只是……想让我休息一下。\r\n这不是惩罚……不是惩罚……", 36, 9063155, false, true);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(1500);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face1#咳……", 36, 9063155, false, true);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(1500);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face1#嘶……", 36, 9063155, false, true);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(1500);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face1#只要，只要再……一点…….", 36, 9063155, false, true);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(1500);
	} else if (status === i++) {
		cm.fieldEffect_ProcessOnOffLayer("BM1", "Effect/Direction15.img/effect/BM_Weapon/arka/1", 0, 2000, 0, -80, 0, 4, 1);
		cm.inGameDirectionEvent_AskAnswerTime(2500);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face1#呵呵……到了现在……才露出了本来面目啊……", 36, 9063155, false, true);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(1500);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face1#切……嘲笑我。那就等着瞧吧。\r\n无论是论忠诚还是实力，最强的军团长都是我。", 36, 9063155, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face1#历经千辛万苦，还能这样守护在那位大人身边。\r\n这就是最好的证据，呵呵……", 36, 9063155, false, true);
	} else if (status === i++) {
		cm.fieldEffect_ProcessOnOffLayer("WhiteOut", "Map/Effect2.img/WhiteOut", 0, 2500, 0, 0, 0, 4, 1);
		cm.inGameDirectionEvent_AskAnswerTime(2500);
	} else if (status === i++) {
		cm.fieldEffect_ProcessOnOffLayer("BM", "", 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
		cm.fieldEffect_ProcessOnOffLayer("BM1", "", 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.fieldEffect_ProcessOnOffLayer("BM2", "Effect/Direction15.img/effect/BM_Weapon/arka/2", 0, 2000, 0, -80, 0, 4, 1);
		cm.inGameDirectionEvent_AskAnswerTime(3500);
	} else if (status === i++) {
		cm.fieldEffect_ProcessOnOffLayer("WhiteOut", "", 2, 5000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
		cm.inGameDirectionEvent_AskAnswerTime(5500);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#参见大人，您是不是应该给我下一个命令了……", 36, 9063155, false, true);
	} else if (status === i++) {
		cm.effect_Text(["#fn黑体##fs28##r把塔纳交给我"], [80, 1500, 4, 0, 0, 1, 4, 0, 0, 0, 0]);
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#塔纳……就是封印在克里蒂亚斯的那个……\r\n根本不堪我一击还在那儿张牙舞爪的小丫头吧？！", 36, 9063155, false, true);
	} else if (status === i++) {
		cm.effect_Text(["#fn黑体##fs28##r阿卡伊勒。"], [80, 2000, 4, 0, 0, 1, 4, 0, 0, 0, 0]);
		cm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		cm.effect_Text(["#fn黑体##fs30##r她不是你能下判断的人。"], [80, 2000, 4, 0, 0, 1, 4, 0, 0, 0, 0]);
		cm.inGameDirectionEvent_AskAnswerTime(2500);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#……", 36, 9063155, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#……遵命。", 36, 9063155, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#（啧……那个蠢丫头竟然……在那位大人身边……\r\n哼，我可不能坐视不管。这次一定要彻底了结……）", 36, 9063155, false, true);
	} else if (status === i++) {
		cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BM_Weapon/memory", 1000);
		cm.fieldEffect_复合图片动画(["Effect/Direction15.img/effect/BM_Weapon/memory_spine/memory", "animation", "", "memory"], [1, 0, 1, 0, 0, 0, 0, 1]);
		cm.inGameDirectionEvent_AskAnswerTime(4000);
	} else if (status === i++) {
		cm.fieldEffect_ProcessOnOffLayer("BM2", "", 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
		cm.setInGameDirectionMode(false, true, false);
		cm.warp(cm.getNumberFromQuestInfo(35650, "rMap1"), 0, true);
		cm.dispose();
	}
}
