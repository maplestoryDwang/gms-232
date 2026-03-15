var status = -1; // status: 当前聊天交互轮数
var selectionLog = []; // 记录每一轮的选择

function start(d, b, c) {
	(d == 1) ? status++ : status--;

	if(d == 0 && status == temp-1){
		cm.dispose();
		return;
	}
	var a = -1;
	if (status <= a++) {
		cm.dispose()
	} else if (status === a++) {
		cm.sendNextPrev("#h0#，有新的派遣任务。", 1101002);
	} else if (status === a++) {
		cm.sendNextPrev("似乎找到了有关古代神的新线索。", 1101002);
	} else if (status === a++) {
		cm.sendNextPrevS("要说线索……");
	} else if (status === a++) {
		cm.sendNextPrev("要想好好解释，就要从不久前圣地发生过的那起#b入侵事件#k开始说起了。", 1101002);
	} else if (status === a++) {
		cm.sendNextPrevS("入侵时间？");
	} else if (status === a++) {
		cm.sendNextPrev("你也知道，一直以来联盟为了寻找全新的古代神的痕迹一直在四处奔走。", 1101002);
	} else if (status === a++) {
		cm.sendNextPrev("正回回竹篮打水一场空呢……", 1101002);
	} else if (status === a++) {
		cm.sendNextPrev("圣地出现了#r可疑的入侵者。", 1101002);
	} else if (status === a++) {
		cm.askYesNoS("要听听南哈特的故事吗？\r\n\r\n#r（※接受后前往动画地图。）");
		temp = status;
	} else if (status === a++) {
		cm.warp(993165200, 0);
		cm.dispose();
	}
}

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
		cm.sendNormalTalk_Bottom("这里有路标。", 56, 0, false, true)
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#上面写了一行小字呢？#b亚克斯旅馆#k……", 36, 3005053, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("……", 36, 1540732, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("走吧，这次不管有什么事，报告书上也得写下不止一行才行。", 36, 1540732, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#可是你们骑士团不也说有人要来的吗？", 36, 3005053, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#怎么连个人影都不见？", 36, 3005053, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("啊，此人的话……", 36, 1540732, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("应该会先到的。", 36, 1540732, false, true);
	} else if (status === i++) {
		cm.warp(993165202, 0);
		cm.dispose();
	}
}
