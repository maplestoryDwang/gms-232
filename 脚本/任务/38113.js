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
		cm.sendNormalTalk_Bottom("我要走了……你没见过贝尔和伊莉娜吗？", 56, 0, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#啊，如果你要找那个煎煎和绿毛，就去#b改造车库#k看看。", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#说起来，你们所在的那个冒险岛联盟，也是这里的#b搜素者#k之一吗？", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("搜索者？", 56, 0, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#从前来过这家旅馆的大部分客人好像都叫#b搜素者#k还是什么来着。", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face8#听说都是那么称呼寻找古代遗物的冒险家的。", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face8#那什么，无论如何，不过是从前的事罢了。", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("（搜索者啊……）", 56, 0, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("不过洛斯缇，你打算将旅馆转手给塞妮娅吗？", 56, 0, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face8#不过是一家没有客人的旅馆，换作是你，会想要继续住下去吗？", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("（话虽这么说，但对于离开旅馆这件事，洛斯缇似乎一直很犹豫。）", 56, 0, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face8#啊，如果你要去车库帮捎个话吧，煎煎那边没有我根本修不了……", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face8#还是叫她别白费力气，赶紧削土豆吧。", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.askYesNo_Bottom("去#b改造车库#k看看？", 56, 0);
	} else if (status == i++) {
		cm.forceStartQuest();
		cm.OnStartNavigation(410003080, 0, "", 0);
		cm.updateInfoQuest(38100, "16=h1;01=h0;12=h0;23=h0;07=h1;10=h1;13=h1;25=h1");
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
		cm.sendNormalTalk_Bottom("#face0#你来得正好，我都快郁闷死了。", 36, 3005053, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#对不起，没能帮上忙，贝尔。", 36, 3005052, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face2#伊莉娜，连一字螺丝刀和十字螺丝刀都分不清是不是有点太过了啊？！", 36, 3005053, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face3#也许对反抗者这种只知道专注于机器的组织从常识上说得通，但我们骑士团绝不该受到谴责。", 36, 3005052, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face3#难道不是吗，#h0#？", 36, 3005052, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("你所言极是。", 56, 0, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face1#说起来，贝尔说得好像很快就能修好似的，看样子却像是吃了不少苦头呢。", 36, 3005052, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face1#谁，谁！", 36, 3005053, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#现在既然也找到了部件，应该可以正式开始修理了。", 36, 3005053, false, true);
	} else if (status == i++) {
		cm.forceCompleteQuest();
		cm.dispose();
	}
}
