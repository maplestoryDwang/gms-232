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
		cm.sendNormalTalk_Bottom("从现在起就是我们的领域了，人类，攻击……", 36, 3005056, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#我不是来和你们打架的。", 36, 3005052, false, true);
	} else if (status == i++) {
		cm.sendNormalTalk_Bottom("旅馆！旅馆！", 36, 3005055, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("住在你们旅馆里的人类？", 36, 3005056, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("我不碰和旅馆有关的人……", 36, 3005056, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#所以……就跟过来了吗？", 36, 3005053, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#我们正在寻找地图的下落，你见过吗？", 36, 3005053, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#你们从前从旅馆拿走的那些赃物里就有地图。", 36, 3005053, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("地图？地图是什么？", 36, 3005056, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#纸上面画着画，是四四方方的形状！", 36, 3005053, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("我想起来了，我们拿走了那个，很久之前。", 36, 3005056, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#那东西在哪儿？我想拿回来。", 36, 3005052, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("我们没理由回答所有问题！", 36, 3005056, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("必须展现出诚意。", 36, 3005056, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#还真是有点烦躁了呢，是不是让你见识一下拳头的滋味，情况就会变得不一样了？", 36, 3005053, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face3#贝尔，要专注精神搜集情报。", 36, 3005052, false, true);
	} else if (status === i++) {
		cm.askYesNo_Bottom("荒地面积越来越窄，帮忙去赶走那些#b沙刃掠夺者吧#k，\r\n这样一来我们也能占据更大的地盘。", 3005056);
	} else if (status === i++) {
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
		cm.sendNormalTalk_Bottom("好，我告诉你。", 36, 3005056, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("地图被抢走了。", 36, 3005056, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#……", 36, 3005053, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#你就静静听着吧，贝尔。", 36, 3005052, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("居然被抢走了……又是被谁？", 56, 0, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("我们的土地原本幅员辽阔，\r\n然而那群#b爆蜥#k开始霸占其他土地。", 36, 3005056, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("我们一族必须逃走，所以才没办法带来。", 36, 3005056, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#不要浪费时间了，快走吧。", 36, 3005053, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("等下，那东西，你们能看得懂吗？", 36, 3005056, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#这是当然，把我们当什么看了。", 36, 3005053, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("那地方一定有了不起的宝物吧？", 36, 3005056, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("我想这藏起来的东西恐怕不是什么宝物，而是更特别的东西。", 56, 0, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("我明白你就是在撒谎！！宝物在哪里！！", 36, 3005056, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face2#我总觉得……气氛有点非同寻常啊？", 36, 3005053, false, true);
	} else if (status == i++) {
		cm.forceCompleteQuest();
		cm.dispose();
	}
}
