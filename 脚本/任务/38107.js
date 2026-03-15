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
		cm.sendNormalTalk_Bottom("#face0#爆蜥的栖息地，应该是那里，#b汽车电影院。", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#看来就是前面提到过的危险之地。", 36, 3005053, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("这里还有电影院的吗？", 56, 0, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#洛斯缇，常去电影院。", 36, 3005051, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#看着箱子里的人。", 36, 3005051, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#凯利离开城市后，就不去了。", 36, 3005051, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#凯利？", 36, 3005053, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#那是直到最后一直留在这里的其他维修工。", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face2#很久很久之前，我还在那里看过电影。", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#贝尔就先休息吧，毕竟有伤在身，到处乱蹿很危险的。", 36, 3005052, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#没事的，一点都不痛，你看啊，我正活动筋骨呢，一点事都没……唔！", 36, 3005053, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#……", 36, 3005052, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#走吧，#h0#。", 36, 3005052, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("话说回来，塞妮娅去哪儿了？", 56, 0, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#说是去附近散步了。", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#果然连行为举止都这么高尚，和联盟的某些人就是不一样……", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face2#……怎么可能是去散步了，\r\n一定是盯上了藏在这里的什么东西！", 36, 3005053, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#但对我们来说会更有利，毕竟至少我们知道地图所在之处。", 36, 3005053, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#还有，麻烦找找汽车电影院有没有能修好达尔米的部件。", 36, 3005053, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#我会赌上反抗者的荣誉，一定修好……", 36, 3005053, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#长什么样子？", 36, 3005052, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#啊，所以是控制传感器……", 36, 3005053, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#控制……什么来着？", 36, 3005052, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#不，#h0#，我相信你……", 36, 3005053, false, true);
	} else if (status === i++) {
		cm.askYesNo_Bottom("#face1#那#h0#，我们就试着出发吧？", 3005052);
	} else if (status === i++) {
		cm.forceStartQuest();
		cm.OnStartNavigation(410003090, 0, "", 0);
		cm.updateInfoQuest(38100, "16=h1;01=h1;12=h1;23=h0;07=h1;");
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
		cm.sendNormalTalk_Bottom("#face0#看来这地方从前一定很浪漫吧。", 36, 3005052, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#在这座人迹罕至的城市，一直守着这么一家旅馆，\r\n这个决定一定很不容易。", 36, 3005052, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face1##h0#，你来过这里吗？", 36, 3005052, false, true);
	} else if (status === i++) {
		cm.askMenu_Bottom("嗯……\r\n#b#L0#之前偶尔会过来。#l\r\n#L1#我是第一次来。#l", 57, 0)
	} else {
		var reactor = 'action分支' + selectionLog[4];
		eval(reactor)(mode, type, selection, i)
	}
}

function action分支0(mode, type, selection, i) {
	if (status <= i++) {
		cm.sendNormalTalk_Bottom("#face1##h0#，没看出来你还挺喜欢享受文化生活的啊。", 36, 3005052, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face1#我是第一次来。", 36, 3005052, false, true);
	} else if (status === i++) {
		cm.forceCompleteQuest();
		cm.dispose();
	}
}

function action分支1(mode, type, selection, i) {
	if (status <= i++) {
		cm.sendNormalTalk_Bottom("#face1#我也是第一次来。", 36, 3005052, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face1#这个叫电影院的地方静悄悄的，还吹着安逸舒适的风。", 36, 3005052, false, true);
	} else if (status == i++) {
		cm.forceCompleteQuest();
		cm.dispose();
	}
}
