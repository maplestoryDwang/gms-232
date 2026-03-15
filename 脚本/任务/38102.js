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
		cm.updateInfoQuest(38100, "17=h0;19=h0;16=h1;01=h1;12=h1;23=h1;24=h1");
		cm.sendNormalTalk_Bottom("你知道这家旅馆的经理是谁吗？", 36, 1540732, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#始祖龟队长不是经理，是队长。", 36, 3005051, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face1#不是你，蠢货！！", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#我就是这家旅馆的经理兼维修工洛斯缇啊？", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("你……你说你是经理？", 36, 1540732, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#看你这穿着打扮，貌似不是这一带的人，来这里有什么事吗？", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("我们……正在寻找古代神的痕迹。", 36, 1540732, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#古代神？", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#……", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face8#那是什么？", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("……", 56, 0, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#我把大量时间都耗在了这里，不太清楚最近的流行。", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#那什么，就像刚刚头上顶了煎鸡蛋一样。", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#噗……", 36, 3005052, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face1#喂，那是，那个机器人……！", 36, 3005053, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("回去吧，\r\n我会联系附近的联盟总部来接的。", 36, 1540732, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#该死，刚出发就要回城，恐怕要被切奇那小子取笑一个月了，\r\n去塞尔提乌大冒险的事他足足炫耀了好几个月。", 36, 3005053, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#你说要回去？沙暴正在逼近，没关系吗？", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("总部应该有可以调度的快艇。", 36, 1540732, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face3#南哈特，据我所知……", 36, 3005052, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("来，我们也远道而来，还是先休息一下吧，\r\n洛斯缇，麻烦开四个房间。", 36, 1540732, false, true);
	}else if (status === i++) {
		cm.warp(993165205, 0, true);
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
		cm.sendNormalTalk_Bottom("#face0#还摆足了什么联盟的架子……", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#……", 36, 3005052, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#……", 36, 3005053, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("（怎么连我都这么畏缩……）", 56, 0, false, true)
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#连赔偿一面破墙的钱都没有，这说得通吗？", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face2#那个……因为不久前大战了一场，最近我方的资金情况不太好，我回头会让书呆子赔的，你能不能让我们先走啊？", 36, 3005053, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#南哈特让我们留下来寻找古代神的痕迹……", 36, 3005052, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face1#狗屁的古代神！这片荒地上到底能有什么！", 36, 3005053, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#煎煎说得没错，如果有什么古代神之类的东西，在这里土生土长的我怎么会不知道。", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#煎煎？", 36, 3005053, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face8#正如你所说，荒地上什么都没有，\r\n硬要说的话，就只有等着收账的债权人和需要还钱的债务人而已，对不对？", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face2#……唔。", 36, 3005053, false, true);
	} else if (status == i++) {
		cm.warp(993165204, 0, true);
		cm.dispose();
	}
}
