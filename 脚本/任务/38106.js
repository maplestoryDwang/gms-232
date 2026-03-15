var status = -1; // status: 当前聊天交互轮数
var selectionLog = []; // 记录每一轮的选择
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
		cm.sendNormalTalk_Bottom("#face3#贝尔，你没事吗？没受伤吗？", 36, 3005052, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face3#这点小事不算什么。", 36, 3005053, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face3#不过达尔米那边好像受了点损伤。", 36, 3005053, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#我到现在还不能理解，\r\n都那样了，为什么还要跑过去救机器人？", 36, 3005052, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#大家差点可就要有危险了。", 36, 3005052, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#我也很难让你理解，可对我们来说……", 36, 3005053, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#不是告诉过你路怎么走了嘛。", 36, 3005053, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#……", 36, 3005052, false, true);
	} else if (status === i++) {
		cm.askYesNo_Bottom("回旅馆吧。", 56, 0);
	} else if (status == i++) {
		cm.forceStartQuest();
		cm.OnStartNavigation(410003000, 0, "", 0);
		cm.updateInfoQuest(38100, "16=h1;01=h1;12=h1;23=h1");
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
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#喂，顺利回来了？我还以为你们又跑路了。", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face9#诶？！这是发生什么事了嘛！", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#荒地上稍微出了点事故。", 36, 3005052, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#只是被挠到了。", 36, 3005053, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#说起来……达尔米部件受了损伤，恐怕要更换部件了。", 36, 3005053, false, true);
	} else if (status == i++) {
		cm.sendNormalTalk_Bottom("达尔……米……", 36, 3005055, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face1#你……从你之前四处乱窜的时候我就看出来了！", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#哪儿能找到部件？", 36, 3005053, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#有个地方确实能找到合适的部件……就是太过危险。", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#再说这些机器人要比普通的机器人更复杂，更难修理。", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#没关系，在机器这方面，我也不亚于行家。", 36, 3005053, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face8#再怎么说，对只组装过几次机器的人来说，修起来应该还是挺难的！", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#我看你不太清楚，我生活的地方，可是每天都和机器为伍。", 36, 3005053, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face1#我这人吧，一辈子都在组装机器人，\r\n我都修不好的东西，还有什么办法能修好！", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#啊，这样吗？！我……", 36, 3005053, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#……两位都给我停下。", 36, 3005052, false, true);
	} else if (status == i++) {
		cm.forceCompleteQuest();
		cm.dispose();
	}
}
