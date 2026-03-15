var status = -1; // status: 当前聊天交互轮数
var selectionLog = []; // 记录每一轮的选择
var BM_Weapon;
var BM_Unsealed;
// 任务开始时执行
function start(mode, type, selection) {
	if (status == 0 && mode == 0) {
		cm.dispose();
		return;
	}
	(mode == 1) ? status++ : status--;
	selectionLog[status] = selection;
	var i = -1;
	if (status <= i++) {
		cm.dispose();
	} else if (status === i++) {
		if (cm.getMapId() != 993060090) {
			cm.sendNormalTalk_Bottom("#face0#力量无法就此释放。能来我所在的深夜联盟会场吗？\r\n\r\n" +
				" #r※通过通知里的「[创世武器]追寻黑魔法师的痕迹」任务，就能前往汉斯所在的深夜联盟会场。", 36, 9063153, false, true);
			cm.dispose();
		} else {
			for (var i = 0; i < BMArray.length; i++) {
				if (cm.haveItem(BMArray[i][0])) {
					BM_Unsealed = BMArray[i][0];
					BM_Weapon = BMArray[i][1];
				}
			}
			var text = "#e<创世武器>\r\n#n\r\n\r\n";
			text += "你所拥有的创世武器充满了强大的力量，\r\n";
			text += "应该能够唤醒创世武器中潜在的第一股力量，要试着开始释放吗？\r\n\r\n";
			text += "#r- <破坏之黑暗剑灵>技能 获得#k\r\n";
			text += "#r- 无法强化卷轴/星之力#k\r\n";
			text += "#r- 彻底释放时初始化额外属性/灵魂#k\r\n";
			text += "#r- 必须拥有#e符合职业的创世武器#n才可进行#k\r\n";
			if (BM_Weapon != null) {
				text += "#L999##i" + BM_Weapon + "##z" + BM_Weapon + "##l\r\n";
			}
			cm.sendNormalTalk(text, 4, 9063153, 0, 1);
		}
	} else if (selectionLog[1] != 999) {
		cm.dispose();
	} else if (status === i++) {
		cm.resetMap(993060090)
		cm.curNodeEventEnd(true);
		cm.setInGameDirectionMode(true, false, true);
		cm.setStandAloneMode(true);
		cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
		cm.OverlapScreenDetail19(0, 1000, 3000, 1);
		cm.setStringForQuestInfo(35650, "50", "h0");
		cm.setStringForQuestInfo(35650, "51", "h0");
		cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
	} else if (status === i++) {
		cm.onTeleport(0, 3, cm.getPlayer().getId(), -605, 85);
		cm.inGameDirectionEvent_ForcedFlip(1);
		cm.npc_ChangeController(9063152, "oid=356511", 0, 72, 100, -50, 50, 1, true, 0, false);
		cm.npc_ChangeController(9063153, "oid=356512", -300, 85, 100, -350, -250, 1, true, 0, false);
		cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(700);
	} else if (status == i++) {
		cm.fieldEffect_RemoveOverlapScreenDetail(1000);
		cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, -303, 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(300);
	} else if (status == i++) {
		cm.npcMove(9063153, 0, -50, 1000);
		cm.inGameDirectionEvent_PushScaleInfo(2000, 1500, 2000, -301, 50);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.fieldEffect_BackgroundCanvas(2, 160, 160, 160, 0, 0, 0);
		cm.fieldEffect_BackgroundCanvas(3, 160, 160, 160, 0, 0, 0);
		cm.fieldEffect_BackgroundCanvas(4, 160, 160, 160, 0, 0, 0);
		cm.inGameDirectionEvent_头顶图片(["Effect/Direction15.img/effect/BM_Weapon/magic/0", "oid=356512"], [0, 0, -200, 1, 0, 1, 0, 0]);
		cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BM_Weapon/magic1", 100);
		cm.inGameDirectionEvent_AskAnswerTime(1100);
	} else if (status == i++) {
		cm.inGameDirectionEvent_PushScaleInfo(3000, 1500, 3000, -301, -190);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(2800);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 0, 0);
		cm.fieldEffect_InsertCanvas(1, 100, 180, 180, 180, 300, 0);
		cm.inGameDirectionEvent_AskAnswerTime(300)
	} else if (status == i++) {
		cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, -303, 0);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 300, 0);
		cm.inGameDirectionEvent_AskAnswerTime(300);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.inGameDirectionEvent_PushScaleInfo(2500, 1500, 2500, -612, 50);
	} else if (status === i++) {
		cm.fieldEffect_BackgroundCanvas(0, 210, 210, 210, 200, 0, 0);
		cm.inGameDirectionEvent_AskAnswerTime(200);
	} else if (status === i++) {
		cm.fieldEffect_BackgroundCanvas(2, 160, 160, 160, 200, 0, 0);
		cm.fieldEffect_BackgroundCanvas(3, 160, 160, 160, 200, 0, 0);
		cm.fieldEffect_BackgroundCanvas(4, 160, 160, 160, 200, 0, 0);
		cm.inGameDirectionEvent_AskAnswerTime(200);
	} else if (status === i++) {
		cm.effect_OnUserEff("Effect/Direction15.img/effect/BM_Weapon/magic/1");
		cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BM_Weapon/magic2", 100);
		cm.inGameDirectionEvent_AskAnswerTime(1400);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 0, 0);
		cm.fieldEffect_InsertCanvas(1, 100, 180, 180, 180, 300, 0);
		cm.inGameDirectionEvent_AskAnswerTime(300)
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 300, 0);
		cm.inGameDirectionEvent_AskAnswerTime(300)
	} else if (status === i++) {
		cm.fieldEffect_BackgroundCanvas(2, 160, 160, 160, 0, 0, 0);
		cm.fieldEffect_BackgroundCanvas(3, 160, 160, 160, 0, 0, 0);
		cm.fieldEffect_BackgroundCanvas(4, 160, 160, 160, 0, 0, 0);
		cm.inGameDirectionEvent_AskAnswerTime(700);
	} else if (status === i++) {
		cm.fieldEffect_BackgroundCanvas(0, 255, 255, 255, 800, 0, 0);
		cm.inGameDirectionEvent_AskAnswerTime(800);
	} else if (status === i++) {
		cm.effect_OnUserEff("Effect/Direction15.img/effect/BM_Weapon/powerUp/0");
		cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BM_Weapon/powerUp", 100);
		cm.inGameDirectionEvent_AskAnswerTime(3000);
	} else if (status === i++) {
		cm.OverlapScreenDetail19(0, 1000, 3000, 1);
		cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
	} else if (status === i++) {
		cm.setStringForQuestInfo(35650, "50", "h1");
		cm.setStringForQuestInfo(35650, "51", "h1");
		cm.curNodeEventEnd(true);
		cm.npc_LeaveField("oid=356511");
		cm.npc_LeaveField("oid=356512");
		cm.forceCompleteQuest();
		cm.gainItem(BM_Unsealed, -1);
		cm.gainItem(BM_Weapon, 1);
		cm.teachSkill(80002632, 1);
		cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(700);
	} else if (status == i++) {
		cm.fieldEffect_RemoveOverlapScreenDetail(1000);
		cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, 562, 103);
	} else if (status == i++) {
		cm.setInGameDirectionMode(false, true, false);
		cm.sendOk("第一个力量觉醒后，创世武器变得更强了。\r\n请你装备上武器后试着运用那个力量吧。");
		cm.dispose();
	}
}

// 依次对话时执行。根据已对话的次数，分别会调用 stage0, stage1, .....stageN
function stage0(mode, type, selection) {
	if (status == 0 && mode == 0) {
		cm.dispose();
		return;
	}
	status++;
	selectionLog[status] = selection;
	var i = -1;
	if (status <= i++) {
		cm.dispose();
	} else if (status == i++) {
		var id = cm.getQuest();
		cm.askYesNo("");
	} else if (status == i++) {
		cm.forceStartQuest();
		cm.dispose();
	}
}

// 任务结束时执行
function end(mode, type, selection) {
	if (status == 0 && mode == 0) {
		cm.dispose();
		return;
	}
	(mode == 1) ? status++ : status--;
	selectionLog[status] = selection;
	var i = -1;
	if (status <= i++) {
		cm.dispose();
	} else if (status == i++) {
		var id = cm.getQuest();
		cm.askYesNo("");
	} else if (status == i++) {
		cm.forceCompleteQuest();
		cm.dispose();
	}
}

var BMArray = [
	[1212128, 1212129], //封印的创世双头杖
	[1213021, 1213022], //封印的创世调谐器
	[1214021, 1214022], //封印的创世龙息臂箭
	[1222121, 1222122], //封印的创世灵魂手铳
	[1232121, 1232122], //封印的创世亡命剑
	[1242138, 1242139], //封印的创世聚能锁链剑
	[1242140, 1242141], //封印的创世聚能锁链剑
	[1252105, 1252106], //封印的创世权杖
	[1262050, 1262051], //封印的创世ESP限制器
	[1272039, 1272040], //封印的创世锁链
	[1282039, 1282040], //封印的创世魔力手套
	[1292021, 1292022], //封印的创世扇
	[1302354, 1302355], //封印的创世军刀
	[1312212, 1312213], //封印的创世斧
	[1322263, 1322264], //封印的创世锤
	[1332288, 1332289], //封印的创世短刀
	[1362148, 1362149], //封印的创世手杖
	[1372236, 1372237], //封印的创世短杖
	[1382273, 1382274], //封印的创世长杖
	[1402267, 1402268], //封印的创世双手剑
	[1403021, 1403022], //封印的创世拳封
	[1412188, 1412189], //封印的创世双手战斧
	[1422196, 1422197], //封印的创世双手锤
	[1432226, 1432227], //封印的创世枪
	[1442284, 1442285], //封印的创世长戟
	[1452265, 1452266], //封印的创世弓
	[1462251, 1462252], //封印的创世弩
	[1472274, 1472275], //封印的创世斗拳
	[1482231, 1482232], //封印的创世拳爪
	[1492244, 1492245], //封印的创世手铳
	[1522151, 1522152], //封印的创世双弩枪
	[1532156, 1532157], //封印的创世攻城炮
	[1542127, 1542128], //封印的创世武士刀
	[1552129, 1552130], //封印的创世扇子
	[1582043, 1582044], //封印的创世机甲枪
	[1592021, 1592022] //封印的创世远古弓
];