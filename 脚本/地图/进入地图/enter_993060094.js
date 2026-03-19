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
		if (!cm.isQuestFinished(35664)) {
			cm.gainItem(4036464, -1);
			cm.forceCompleteQuest(35664);
		}
		cm.fieldEffect_PlayBGM("Bgm00/Silence", 0, 0);
		cm.curNodeEventEnd(true);
		cm.setInGameDirectionMode(true, false, true);
		cm.setStandAloneMode(true);
		cm.inGameDirectionEvent_SetHideEffect(true);
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
		cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.effect_Text(["#fn黑体##fs18#拉克兰事件后的某一天，路西德的潜意识"], [100, 1500, 6, 0, -80, 1, 4, 0, 0, 0, 0]);
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.inGameDirectionEvent_MoveAction(1);
		cm.inGameDirectionEvent_AskAnswerTime(10);
	} else if (status === i++) {
		cm.inGameDirectionEvent_MoveAction(0);
		cm.inGameDirectionEvent_AskAnswerTime(1100);
	} else if (status === i++) {
		cm.inGameDirectionEvent_MoveAction(1);
		cm.inGameDirectionEvent_AskAnswerTime(10);
	} else if (status === i++) {
		cm.inGameDirectionEvent_MoveAction(0);
		cm.inGameDirectionEvent_AskAnswerTime(600);
	} else if (status === i++) {
		cm.inGameDirectionEvent_MoveAction(1);
		cm.inGameDirectionEvent_AskAnswerTime(10);
	} else if (status === i++) {
		cm.inGameDirectionEvent_MoveAction(0);
		cm.inGameDirectionEvent_AskAnswerTime(1200);
	} else if (status === i++) {
		cm.inGameDirectionEvent_MoveAction(1);
		cm.inGameDirectionEvent_AskAnswerTime(10);
	} else if (status === i++) {
		cm.inGameDirectionEvent_MoveAction(0);
		cm.inGameDirectionEvent_AskAnswerTime(800);
	} else if (status === i++) {
		cm.inGameDirectionEvent_MoveAction(1);
		cm.inGameDirectionEvent_AskAnswerTime(10);
	} else if (status === i++) {
		cm.inGameDirectionEvent_MoveAction(0);
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#呵呵……呵呵……", 36, 9063159, false, true);
	} else if (status === i++) {
		cm.inGameDirectionEvent_MoveAction(1);
		cm.inGameDirectionEvent_AskAnswerTime(10);
	} else if (status === i++) {
		cm.inGameDirectionEvent_MoveAction(0);
		cm.inGameDirectionEvent_AskAnswerTime(100);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#呵呵……", 36, 9063159, false, true);
	} else if (status === i++) {
		cm.inGameDirectionEvent_MoveAction(1);
		cm.inGameDirectionEvent_AskAnswerTime(10);
	} else if (status === i++) {
		cm.inGameDirectionEvent_MoveAction(0);
		cm.inGameDirectionEvent_AskAnswerTime(1200);
	} else if (status === i++) {
		cm.fieldEffect_PlayBGM("Bgm46/WierldForestIntheGirlsdream", 0, 0);
		cm.sendNormalTalk_Bottom("#face0#没错，就是哪里。\r\n他会带我前往潜意识的更深处。", 36, 9063159, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#前往更黑暗幽深的地方……", 36, 9063159, false, true);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(1200);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face1#啊，差不多到了。", 36, 9063159, false, true);
	} else if (status === i++) {
		cm.inGameDirectionEvent_MoveAction(1);
		cm.inGameDirectionEvent_AskAnswerTime(10);
	} else if (status === i++) {
		cm.inGameDirectionEvent_MoveAction(0);
		cm.inGameDirectionEvent_AskAnswerTime(600);
	} else if (status === i++) {
		cm.inGameDirectionEvent_MoveAction(1);
		cm.inGameDirectionEvent_AskAnswerTime(10);
	} else if (status === i++) {
		cm.inGameDirectionEvent_MoveAction(0);
		cm.inGameDirectionEvent_AskAnswerTime(1200);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face1#再往前一点……再一点……哈……", 36, 9063159, false, true);
	} else if (status === i++) {
		cm.inGameDirectionEvent_MoveAction(1);
		cm.inGameDirectionEvent_AskAnswerTime(10);
	} else if (status === i++) {
		cm.inGameDirectionEvent_MoveAction(0);
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.inGameDirectionEvent_MoveAction(1);
		cm.inGameDirectionEvent_AskAnswerTime(10);
	} else if (status === i++) {
		cm.inGameDirectionEvent_MoveAction(0);
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face2#呜呜……呜呜…….", 36, 9063159, false, true);
	} else if (status === i++) {
		cm.effect_REPEAT("Effect/Direction15.img/effect/BM_Weapon/lucid/0", 1, 1, 1, 0, -80);
		cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2000, 0);
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face1#啊！", 36, 9063159, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face1#请带我进入伟大的那位大人的潜意识中……\r\n只要一次……一次就好。请让我前往他的身边……", 36, 9063159, false, true);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(1, 150, 0, 0, 0, 1300, 0);
		cm.inGameDirectionEvent_AskAnswerTime(2500);
	} else if (status === i++) {
		cm.inGameDirectionEvent_Monologue("「黑魔法师」", 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_Monologue("\r\n将她从过去的绝望中拯救出来的人，", 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_Monologue("第一次需要自己的人。", 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_Monologue("对路西德来说，黑魔法师就是世界的中心和全部。", 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_Monologue("创世这种远大的计划怎么样都行，但是……", 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_Monologue("\r\n\r\n居然这一切都是为了让黑魔法师消失。", 1);
	} else if (status === i++) {
		cm.inGameDirectionEvent_Monologue("“必须要阻止他……就算要让他永远被困在噩梦中……”", 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_Monologue("\r\n\r\n虽然路西德试着阻止他，但是他却完全不听。", 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_Monologue("路西德渐渐变得焦躁。", 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_Monologue("\r\n“……似乎会发生什么事情。”", 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_Monologue("\r\n\r\n\r\n……路西德不祥的预感就要实现了。", 1);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1200, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1500);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face1#伟大的人啊……如果我有罪，\r\n那就是不希望你消失的罪……", 36, 9063159, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face1#拜托了，就一次……请听听我的……", 36, 9063159, false, true);
	} else if (status === i++) {
		cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ArcaneRiver/wind", 100);
		cm.fieldEffect_ProcessOnOffLayer("BM", "Effect/Direction15.img/effect/BM_Weapon/lucid/1", 0, 1500, 0, -80, 0, 4, 1);
		cm.inGameDirectionEvent_AskAnswerTime(1500);
	} else if (status === i++) {
		cm.effect_REPEAT("Effect/Direction15.img/effect/BM_Weapon/lucid/1", 1, 1, 1, 0, -80);
		cm.inGameDirectionEvent_AskAnswerTime(10);
	} else if (status === i++) {
		cm.fieldEffect_ProcessOnOffLayer("BM", "", 2, 3000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
		cm.inGameDirectionEvent_AskAnswerTime(10);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face1#！？", 36, 9063159, false, true);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(1, 150, 0, 0, 0, 1300, 0);
		cm.inGameDirectionEvent_AskAnswerTime(2500);
	} else if (status === i++) {
		cm.inGameDirectionEvent_Monologue("是路西德的心情过于迫切吗？", 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_Monologue("还是单纯的偶然呢？", 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_Monologue("路西德终于进入到了黑魔法师的潜意识中。", 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_Monologue("\r\n\r\n但是重逢的喜悦只是暂时的。", 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_Monologue("她马上就察觉到了他的潜意识状态异常。", 1);
	} else if (status === i++) {
		cm.inGameDirectionEvent_Monologue("路西德感觉到了微弱又强大的……", 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_Monologue("凄凉又莫名愉悦的记忆……", 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_Monologue("而且……", 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_Monologue("\r\n\r\n\r\n\r\n#r 「……不灭的敌意」#k", 1);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1200, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1500);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face2#呜呜……呜呜…….", 36, 9063159, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face2#黑魔法师……我……", 36, 9063159, false, true);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face2#把我路西德…….", 36, 9063159, false, true);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face2#请不要抛下我一个人……", 36, 9063159, false, true);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BM_Weapon/memory", 1000);
		cm.fieldEffect_复合图片动画(["Effect/Direction15.img/effect/BM_Weapon/memory_spine/memory", "animation", "", "memory"], [1, 0, 1, 0, 0, 0, 0, 1]);
		cm.inGameDirectionEvent_AskAnswerTime(4000);
	} else if (status === i++) {
		cm.setInGameDirectionMode(false, true, false);
		cm.warp(cm.getNumberFromQuestInfo(35650, "rMap1"), 0, true);
		cm.dispose();
	}
}
