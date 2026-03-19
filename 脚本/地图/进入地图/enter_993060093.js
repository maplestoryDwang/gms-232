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
		if (!cm.isQuestFinished(35663)) {
			cm.gainItem(4036463, -1);
			cm.forceCompleteQuest(35663);
		}
		cm.curNodeEventEnd(true);
		cm.setInGameDirectionMode(true, false, true);
		cm.setStandAloneMode(true);
		cm.inGameDirectionEvent_SetHideEffect(true);
		cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.effect_Text(["#fn黑体##fs18#某一天，威尔的过去。"], [100, 1500, 6, 0, -80, 1, 4, 0, 0, 0, 0]);
		cm.inGameDirectionEvent_AskAnswerTime(4000);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#通往另一个次元的门，次元传送口。\r\n超越者抢夺其他超越者的力量时产生的异常现象……", 36, 9063158, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#次元传送口的出现就是次元崩溃的前兆……\r\n如果任其发展，连接在一起的世界就会互相蚕食，直至完全消失。", 36, 9063158, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#黑魔法师……他最终是想让这个世界消失吗？\r\n不，不会完全是这样。肯定还有什么……", 36, 9063158, false, true);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1000)
	} else if (status === i++) {
		cm.effect_REPEAT("Effect/Direction15.img/effect/BM_Weapon/will/0", 1, 1, 1, 0, -80);
		cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2000, 0);
		cm.inGameDirectionEvent_AskAnswerTime(2500)
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#不不……这些假设还不够！！", 36, 9063158, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#这样还不能理解几百年前的事情……\r\n他是怎么用那么复杂的方法……", 36, 9063158, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#如果想要消灭这个世界，那肯定还有更简单的方法……\r\n黑魔法师拉来各种妨碍的人的理由……究竟是什么！？", 36, 9063158, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#因为是野心？永恒的生命？学术上的好奇心？\r\n或者只是单纯地想让这个世界陷入混乱呢？", 36, 9063158, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#该死！！", 36, 9063158, false, true);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(700);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#呼……这么一来研究不就完全回到起点了嘛。\r\n从一开始的资料……哈，等下。", 36, 9063158, false, true);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face2#回到起点……", 36, 9063158, false, true);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face2#起点……没错，就是回到起点。", 36, 9063158, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face1#回到他……在成为超越者之前……还被叫做白魔法师的时候。", 36, 9063158, false, true);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(1, 140, 0, 0, 0, 1300, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1600)
	} else if (status === i++) {
		cm.inGameDirectionEvent_Monologue("「重现神之城市」", 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_Monologue("\r\n\r\n超越了不稳定的终极世界。", 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_Monologue("随之而来的无限知识……", 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_Monologue("这远大的理想足以让一个年轻的魔法师深陷其中。", 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_Monologue("\r\n不久后，威尔确定了黑魔法师复活后，亲自找到他并成为了他\r\n的手下。。", 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_Monologue("“马上就要成为新世界主人的人啊……”", 1);
	} else if (status === i++) {
		cm.inGameDirectionEvent_Monologue("黑魔法师将镜世界的权限给了威尔。", 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_Monologue("\r\n\r\n幽禁伦娜。", 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_Monologue("阻止超越者的觉醒。", 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_Monologue("\r\n威尔忠诚地完成了黑魔法师给他的所有任务，逐渐获得了他的\r\n信任。", 1);
	} else if (status === i++) {
		cm.inGameDirectionEvent_Monologue("对他的理想深信不疑，相信并跟随他的人。", 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_Monologue("能够实现自己计划的人。", 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_Monologue("\r\n黑魔法师只告诉了威尔自己的#r另一个目的#k。", 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_Monologue("\r\n“伟大的那位想要的不只是创世……还要更进一步吗……”", 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_Monologue("\r\n\r\n\r\n\r\n在镜世界的事情告一段落后的某一天。", 1);
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
