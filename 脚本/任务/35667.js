var status = -1; // status: 当前聊天交互轮数
var selectionLog = []; // 记录每一轮的选择
var BM_Weapon;
var xenonSelection;
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
	} else {
		var jobId = cm.getJob();
		if (jobId == '10112') {
			cm.gainItem(4310260, 1);
			cm.forceCompleteQuest();
			cm.sendOk("#b创世精髓#k充满了强大的力量，其中沉睡的力量已经完全觉醒了。\r\n使用创世精髓强化武器，试试它的力量吧。");
			cm.dispose();
		} else if(jobId == "3612") {
			var reactor = "action尖兵";
			eval(reactor)(mode, type, selection, i);
		} else {
			var reactor = "action0";
			eval(reactor)(mode, type, selection, i);
		}

	}
}

function action尖兵(mode, type, selection, i) {
	if (status <= i++) {
		if (cm.getMapId() != 993060090) {
			cm.sendNormalTalk_Bottom("#face0#力量无法就此释放。能来我所在的深夜联盟会场吗？\r\n\r\n" +
				" #r※通过通知里的「[创世武器]追寻黑魔法师的痕迹」任务，就能前往汉斯所在的深夜联盟会场。", 36, 9063153, false, true);
			cm.dispose();
		} else {
			for (var i = 0; i < BMArray.length; i++) {
				if (cm.haveItem(BMArray[i])) {
					BM_Weapon = BMArray[i];
				}
			}
			var text = "#e<创世武器>#n\r\n";
			text += "你拥有的创世武器具有强大的力量。\r\n";
			text += "现在可以完全唤醒武器潜在的力量，是否释放武器力量？\r\n\r\n";
			text += "#r- 已通过15%卷轴全部强化完毕#k\r\n";
			text += "#r- 星之力22星#k\r\n";
			text += "#r- 保留S级潜能#k\r\n";
			text += "#r- 保留A级附加潜能#k\r\n";
			text += "#r- 获得<创造之光明剑灵>技能#k\r\n";
			text += "#r- 无法强化卷轴/星之力#k\r\n";
			text += "#r- 附加属性/灵魂完全释放时初始化#k\r\n";
			if (BM_Weapon != null) {
				text += "#L999##i" + BM_Weapon + "##z" + BM_Weapon + "##l\r\n";
			}
			cm.sendNormalTalk(text, 4, 9063153, 0, 1);
		}
	} else if (selectionLog[1] != 999) {
		cm.dispose();
	} else if (status === i++) {
		cm.sendNormalTalk("我会给你使用以下卷轴强化的武器。请选择你想要的卷轴吧。\r\n" +
			"#L0##b15%攻击力（力量）卷轴#k#l\r\n" +
			"#L1##b15%攻击力（敏捷）卷轴#k#l\r\n" +
			"#L2##b15%攻击力（幸运）卷轴#k#l", 4, 9063153, 0, 1);
	} else {
		xenonSelection = selection;
		var reactor = "action1";
		eval(reactor)(mode, type, selection, i);
	}
}

function action0(mode, type, selection, i) {
	if (status <= i++) {
		if (cm.getMapId() != 993060090) {
			cm.sendNormalTalk_Bottom("#face0#力量无法就此释放。能来我所在的深夜联盟会场吗？\r\n\r\n" +
				" #r※通过通知里的「[创世武器]追寻黑魔法师的痕迹」任务，就能前往汉斯所在的深夜联盟会场。", 36, 9063153, false, true);
			cm.dispose();
		} else {
			for (var i = 0; i < BMArray.length; i++) {
				if (cm.haveItem(BMArray[i])) {
					BM_Weapon = BMArray[i];
				}
			}
			var text = "#e<创世武器>#n\r\n";
			text += "你拥有的创世武器具有强大的力量。\r\n";
			text += "现在可以完全唤醒武器潜在的力量，是否释放武器力量？\r\n\r\n";
			text += "#r- 已通过15%卷轴全部强化完毕#k\r\n";
			text += "#r- 星之力22星#k\r\n";
			text += "#r- 保留S级潜能#k\r\n";
			text += "#r- 保留A级附加潜能#k\r\n";
			text += "#r- 获得<创造之光明剑灵>技能#k\r\n";
			text += "#r- 无法强化卷轴/星之力#k\r\n";
			text += "#r- 附加属性/灵魂完全释放时初始化#k\r\n";
			if (BM_Weapon != null) {
				text += "#L999##i" + BM_Weapon + "##z" + BM_Weapon + "##l\r\n";
			}
			cm.sendNormalTalk(text, 4, 9063153, 0, 1);
		}
	} else if (selectionLog[1] != 999) {
		cm.dispose();
	} else {
		var reactor = "action1";
		eval(reactor)(mode, type, selection, i);
	}
}

function action1(mode, type, selection, i) {
	if (status <= i++) {
		cm.resetMap(993060090)
		cm.curNodeEventEnd(true);
		cm.setInGameDirectionMode(true, false, true);
		cm.setStandAloneMode(true);
		cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
		cm.OverlapScreenDetail19(0, 1000, 3000, 1);
		cm.setStringForQuestInfo(35650, "50", "h0");
		cm.setStringForQuestInfo(35650, "51", "h0");
		weaponUpgrade(cm.getJob(), BM_Weapon);
		cm.forceCompleteQuest();
		cm.teachSkill(80002633, 1);
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
		cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(700);
	} else if (status == i++) {
		cm.fieldEffect_RemoveOverlapScreenDetail(1000);
		cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, 562, 103);
	} else if (status == i++) {
		cm.setInGameDirectionMode(false, true, false);
		cm.sendOk("力量完全觉醒后，创世武器变得更强了。\r\n装备武器后试试吧。");
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

var BMArray =[//创世武器
	1213022, 1214022, 1222122, 1232122, 1242139, 1242141, 1252106, 1262051, 1272040,
	1282040, 1292022, 1302355, 1312213, 1322264, 1332289, 1362149, 1372237, 1382274,
	1402268, 1403022, 1412189, 1422197, 1432227, 1442285, 1452266, 1462252, 1472275,
	1482232, 1492245, 1522152, 1532157, 1542128, 1552130, 1582044, 1592022, 1212129
];

var MainPropArray = [//主属性对应
	['str', [112, 122, 132, 512, 532, 2112, 2512, 5112, 1112, 1512, 3112, 3212, 6112, 15512, 4112, 15112]],
	['dex', [312, 322, 522, 2312, 1312, 3512, 3712, 6512, 17512, 6312]],
	['int', [212, 222, 232, 2712, 2217, 1212, 3312, 15212, 4212, 14212, 11212, 16212]],
	['luk', [412, 422, 434, 2412, 1412, 6412, 16412]],
	['hp',  [3122]]
];

function weaponUpgrade(jobId, weaponId) {
	var itemInfo = cm.getItemInfo();
	var tempWeapon = itemInfo.getEquipById(weaponId).copy();
	var mainProp;
	for (var i = 0; i < MainPropArray.length; i++) {//确定主属性
		if (MainPropArray[i][1].indexOf(jobId) != -1)
			mainProp = MainPropArray[i][0];
	}
	switch (mainProp) {//根据主属性选择15%痕迹
		case 'str':
			tempWeapon.setStr(tempWeapon.getStr() + 3*8);
			tempWeapon.setPad(tempWeapon.getPAD() + 7*8);
			break;
		case 'dex':
			tempWeapon.setDex(tempWeapon.getDex() + 3*8);
			tempWeapon.setPad(tempWeapon.getPAD() + 7*8);
			break;
		case 'int':
			tempWeapon.setInt(tempWeapon.getInt() + 3*8);
			//临时方案，添加物理攻击强化值
			if (weaponId == 1382274) {
				tempWeapon.setPad(449);
				cm.mapMessage(tempWeapon.getPAD());
			} else {
				tempWeapon.setPad(430);
			}
			tempWeapon.setMad(tempWeapon.getMAD() + 7*8);
			break;
		case 'luk':
			tempWeapon.setLuk(tempWeapon.getLuk() + 3*8);
			tempWeapon.setPad(tempWeapon.getPAD() + 7*8);
			break;
		case 'hp':
			tempWeapon.setMaxHp(new java.lang.Short(tempWeapon.getMaxHP() + 150*8));
			tempWeapon.setPad(tempWeapon.getPAD() + 7*8);
			break;
		default:
			break;
	}
	//临时方案，恶魔复仇者增加缺失副属性
	if (weaponId == 1232122) {
		tempWeapon.setDex(145);
	}
	//临时方案，尖兵增加缺失副属性
	if (weaponId == 1242139) {
		tempWeapon.setLuk(145);
	}
	if (weaponId == 1242141) {
		tempWeapon.setStr(145);
	}
	//尖兵选择卷轴
	switch (xenonSelection) {
		case 0:
			tempWeapon.setStr(tempWeapon.getStr() + 3*8);
			tempWeapon.setPad(tempWeapon.getPAD() + 7*8);
			break;
		case 1:
			tempWeapon.setDex(tempWeapon.getDex() + 3*8);
			tempWeapon.setPad(tempWeapon.getPAD() + 7*8);
			break;
		case 2:
			tempWeapon.setLuk(tempWeapon.getLuk() + 3*8);
			tempWeapon.setPad(tempWeapon.getPAD() + 7*8);
			break;
		default:
			break;
	}
	for (var j = 0; j < 22; j++) {
		org.bms.B1.starForceEnhanceItem(cm.getClient(), null, tempWeapon, false);
	}
	tempWeapon.setUpgradeLevel(8);// 设置强化次数
	tempWeapon.setUpgradeAvailable(0);// 设置剩余强化次数
	tempWeapon.setOption(30041, 1, false);// 潜能1
	tempWeapon.setOption(30045, 2, false);// 潜能2
	tempWeapon.setOption(20052, 3, false);// 潜能3
	tempWeapon.setOption(22048, 1, true);// 附加潜能1
	tempWeapon.setOption(22045, 2, true);// 附加潜能2
	tempWeapon.setOption(22053, 3, true);// 附加潜能3
	tempWeapon.setGrade(19, false);// S级潜能显示
	tempWeapon.setGrade(18, true);// A级附加潜能显示

	cm.gainItem(weaponId, -1);
	cm.addFromDrop(tempWeapon, false);
}