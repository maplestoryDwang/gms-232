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
		if (!cm.isQuestFinished(35662)) {
			cm.gainItem(4036462, -1);
			cm.forceCompleteQuest(35662);
		}
		cm.curNodeEventEnd(true);
		cm.setInGameDirectionMode(true, false, true);
		cm.setStandAloneMode(true);
		cm.inGameDirectionEvent_SetHideEffect(true);
		cm.fieldEffect_PlayBGM("Bgm45/Pain And Sorrow", 0, 0);
		cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
		cm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		cm.inGameDirectionEvent_Monologue("富贵荣华毕竟不能永久。", 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_Monologue("戴米安所求的不过是简单的幸福……", 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_Monologue("\r\n简单却融洽的晚餐。", 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_Monologue("第一次看到冰封雪域的雪。", 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_Monologue("作为礼物收到的围巾。", 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_Monologue("\r\n回去时有着母亲和哥哥的家。", 1);
	} else if (status === i++) {
		cm.inGameDirectionEvent_Monologue("他所希望的不过就是这些。", 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_Monologue("但是……", 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_Monologue("\r\n\r\n神木村起火的那天……", 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_Monologue("火焰就已经把一切都燃烧殆尽了。", 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_Monologue("\r\n柔弱的魔族少年曾经想要得到的幸福和生活的全部。", 1);
	} else if (status === i++) {
		cm.inGameDirectionEvent_Monologue("他深陷绝望，而蛇靠近了他，对他窃窃私语。", 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_Monologue("\r\n“我可以复活你的母亲。”", 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_Monologue("\r\n戴米安一下子就抓住了阿卡伊勒伸出的手，", 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_Monologue("成为了黑魔法师的军团长。", 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_Monologue("\r\n这是在他还未褪去少年稚气的时候。", 1);
	} else if (status === i++) {
		cm.inGameDirectionEvent_Monologue("然后时光流转……", 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_Monologue("现在在这里，在军团长们的会议上。", 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_Monologue("\r\n还有一个失去了重要的人之后踏上堕落之路的人。", 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_Monologue("\r\n「狮子王班·雷昂」", 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_Monologue("\r\n对别人十分冷淡的他不知为何有些在意戴米安。", 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_Monologue("因为他的不幸经历和自己相似。", 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_Monologue("因为从他身上看到了自己的过去。", 1);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		cm.effect_Text(["#fn黑体##fs18#有一天，在会议结束后。"], [100, 1000, 6, 0, -80, 1, 4, 0, 0, 0, 0]);
		cm.inGameDirectionEvent_AskAnswerTime(800);
	} else if (status === i++) {
		cm.fieldEffect_ProcessOnOffLayer("BM", "Effect/Direction15.img/effect/BM_Weapon/damien/0", 0, 2000, 0, -80, 0, 4, 1);
		cm.inGameDirectionEvent_AskAnswerTime(3000);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#……这世界上毕竟还存在着#r不可能的事情#k。\r\n即使是伟大的那位大人……", 36, 9063161, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face3#！？", 36, 9063160, false, true);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#我不知道你在说什么。\r\n你居然对别人的事情感兴趣。", 36, 9063160, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#你不认为你是在做徒劳的事情吗？", 36, 9063161, false, true);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face5#切……真是可笑。", 36, 9063160, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face5#到了现在这时候，你还想让我停手？\r\n班·雷昂……这可不像是你会说的话啊。", 36, 9063160, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face5#我已经无路可退了。\r\n从把灵魂卖给黑魔法师的那一刻开始。", 36, 9063160, false, true);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face2#你也是……我也是。", 36, 9063160, false, true);
	} else if (status === i++) {
		cm.fieldEffect_ProcessOnOffLayer("BM", "", 2, 3000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1000);
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
		cm.inGameDirectionEvent_AskAnswerTime(900);
	} else if (status === i++) {
		cm.inGameDirectionEvent_MoveAction(1);
		cm.inGameDirectionEvent_AskAnswerTime(10);
	} else if (status === i++) {
		cm.inGameDirectionEvent_MoveAction(0);
		cm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#即使你重要的人能够复活，\r\n但以你充满罪恶的灵魂是无法去拥抱他们的。", 36, 9063161, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#我想你也应该有这样的觉悟。\r\n但是……即使就在身旁，却永远不能触碰……", 36, 9063161, false, true);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#是非常痛苦的。", 36, 9063161, false, true);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(1500);
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
