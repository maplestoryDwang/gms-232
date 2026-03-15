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
		cm.sendNormalTalk_Bottom("话说回来，我应该找到部件再回去的……", 56, 0, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face1#要我帮忙吗？我真的超爱寻宝的。", 36, 3004001, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("嗯……", 56, 0, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("（自己一个人找遍这个地方肯定不容易，接受别人的帮助或许也不赖……）", 56, 0, false, true);
	} else if (status === i++) {
		cm.askYesNo_Bottom("先击退#b古董收藏家爆蜥#k再一起去找找看吧。", 56, 0);
	} else if (status == i++) {
		cm.forceStartQuest();
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
		cm.sendNormalTalk_Bottom("#face0##h0#，我开玩笑的，其实我早就找到了。", 36, 3004001, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("谢……谢谢。", 56, 0, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#不过~就这么白给多没意思啊，我可以问你一个问题吗？", 36, 3004001, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face1##h0#，你为什么想要修好机器人？", 36, 3004001, false, true);
	} else if (status === i++) {
		cm.askMenu_Bottom("那是因为……\r\n#b#L0#我很珍惜机器。#l\r\n#L1#就这么放着总归有点可怜。#l", 57, 0)
	} else if (status === i++) {
		if (selectionLog[5] == 0) {
			cm.sendNormalTalk_Bottom("#face1#唔……#h0#，原来你是机器发烧友啊。", 36, 3004001, false, true);
		} else {
			cm.sendNormalTalk_Bottom("#face1##h0#，没看出来，你还挺有同情心的。", 36, 3004001, false, true);
		}
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#我或许……已经找到了答案。", 36, 3004001, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("嗯？", 56, 0, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#我一直在琢磨，洛斯缇为什么一直都没有将旅馆卖出去。", 36, 3004001, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("毕竟不知道塞妮娅是怎么打算，才没有卖的吧？", 56, 0, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#……呵呵，保密。", 36, 3004001, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("（原来还有其他原因啊。）", 56, 0, false, true);
	} else if (status === i++) {
		cm.forceCompleteQuest();
		cm.dispose();
	}
}