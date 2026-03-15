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
		cm.sendNormalTalk_Bottom("（现在再回旅馆吧。）", 56, 0, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("塞妮娅不一起去吗？", 56, 0, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#我再稍微等一会儿。", 36, 3004001, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face1#毕竟好久没看电影了。", 36, 3004001, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("……", 56, 0, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("塞妮娅，如果真的接手了旅馆，你有什么打算？", 56, 0, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#……", 36, 3004001, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#我会努力让这个世界变得更美丽的。", 36, 3004001, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#凭现在的旅馆是没办法办到的，不过我正在找方法。", 36, 3004001, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("那是什么？", 56, 0, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#呵呵，等我买下了旅馆，到时候会告诉你的。", 36, 3004001, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face1#这么一来，你可得经常来找我玩哦？", 36, 3004001, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("嗯……", 56, 0, false, true);
	} else if (status === i++) {
		cm.askYesNo_Bottom("还是先回旅馆吧？", 56, 0);
	} else if (status == i++) {
		cm.forceStartQuest();
		cm.OnStartNavigation(410003000, 0, "", 0);
		cm.updateInfoQuest(38100, "16=h1;01=h0;12=h0;23=h0;07=h1;");
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
		cm.sendNormalTalk_Bottom("#face0#……", 36, 3005051, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("……", 56, 0, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#发现孤身一人的无聊客人。", 36, 3005051, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#开始制作特制饮料。", 36, 3005051, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("不，没事的！", 56, 0, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#（屁颠屁颠）", 36, 3005051, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("话说始祖龟到底是做什么的……机器人？", 56, 0, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#始祖龟是队长。", 36, 3005051, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("这样啊……", 56, 0, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#然后制造饮料。", 36, 3005051, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#迄今为止拿到了总评分2.1分的低分，\r\n如果能告诉我问题所在，应该会对改善反馈大有帮助。", 36, 3005051, false, true);
	} else if (status === i++) {
		cm.askMenu_Bottom("嗯……\r\n#b#L0#不知道问题出在什么地方好像才是问题所在吧。#l\r\n#L1#要不撒点白糖上去看看怎么样？#l", 57, 0);
	} else {
		var reactor = 'action分支' + selectionLog[12];
		eval(reactor)(mode, type, selection, i)
	}
}

function action分支0(mode, type, selection, i) {
	if (status <= i++) {
		cm.sendNormalTalk_Bottom("#face0#恶意的诽谤会大挫制造者的士气。", 36, 3005051, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#从反馈里删除。", 36, 3005051, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("……", 56, 0, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#还有一样。", 36, 3005051, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#需要从知识的层面考虑是否可以制造出“心”。", 36, 3005051, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("我就……不该造出那个的……", 56, 0, false, true);
	} else if (status === i++) {
		cm.askMenu_Bottom("怎么说好呢……\r\n#b#L0#试着详细解释一下吧。#l\r\n#L1#试着简单解释一下吧。#l", 57, 0);
	} else {
		var reactor = 'action分支' + (selectionLog[19] + 2);
		eval(reactor)(mode, type, selection, i)
	}
}

function action分支1(mode, type, selection, i) {
	if (status <= i++) {
		cm.sendNormalTalk_Bottom("#face0#反馈输入完毕，下次制造时会试着加入白糖。", 36, 3005051, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("（其实问题好像并非出在白糖上……）", 56, 0, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#还有一样。", 36, 3005051, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#需要从知识的层面考虑是否可以制造出“心”。", 36, 3005051, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("我就……不该造出那个的……", 56, 0, false, true);
	} else if (status === i++) {
		cm.askMenu_Bottom("怎么说好呢……\r\n#b#L0#试着详细解释一下吧。#l\r\n#L1#试着简单解释一下吧。#l", 57, 0);
	} else {
		var reactor = 'action分支' + (selectionLog[18] + 2);
		eval(reactor)(mode, type, selection, i)
	}
}

function action分支2(mode, type, selection, i) {
	if (status <= i++) {
		cm.sendNormalTalk_Bottom("如果始祖龟，如果你最喜欢的人是洛斯缇。", 56, 0, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#因为“最喜欢”的定义不明确，所以这个命题无法成立。", 36, 3005051, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("……总之，为了洛斯缇交出你的水壶都行，\r\n这就是心意。", 56, 0, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#我不会交出水壶，这解释我没办法理解。", 36, 3005051, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("……", 56, 0, false, true);
	} else {
		var reactor = 'action分支4';
		eval(reactor)(mode, type, selection, i)
	}
}

function action分支3(mode, type, selection, i) {
	if (status <= i++) {
		cm.sendNormalTalk_Bottom("一般如果把谁逗哭或者逗笑，都会说是有心的。", 56, 0, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#我会试着在饮料里放入大量的胡椒，叫人落泪的。", 36, 3005051, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("这、这可不行……", 56, 0, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#……我虽然有过知识水平比较高的推论，但还是失败了。", 36, 3005051, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#信息修正中，将#h0#的预期知识水平从“上”调整到“下”……", 36, 3005051, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("……", 56, 0, false, true);
	} else {
		var reactor = 'action分支4';
		eval(reactor)(mode, type, selection, i)
	}
}

function action分支4(mode, type, selection, i) {
	if (status <= i++) {
		cm.sendNormalTalk_Bottom("始祖龟，你知道洛斯缇为什么没有出售旅馆吗？", 56, 0, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#洛斯缇，大概一天要说五遍要离开旅馆这种话。", 36, 3005051, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#可实际上从未离开过。", 36, 3005051, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#原因不详。", 36, 3005051, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face1#喂，始祖龟！你又在做什么奇怪的饮料吗？", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#这不是什么奇怪的饮料，是特制饮料。", 36, 3005051, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#10秒后完成。", 36, 3005051, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#4分钟后……", 36, 3005051, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#21分43秒后……", 36, 3005051, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#54小时……", 36, 3005051, false, true);
	} else if (status === i++) {
		cm.updateInfoQuest(38100, "16=h1;01=h1;12=h0;23=h0;07=h1;");
		cm.forceCompleteQuest();
		cm.dispose();
	}
}