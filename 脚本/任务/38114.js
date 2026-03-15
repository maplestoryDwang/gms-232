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
		cm.sendNormalTalk_Bottom("#face0#嗯……", 36, 3005053, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("嗯……", 56, 0, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#嗯……", 36, 3005053, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("嗯……", 56, 0, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face2#……坦白说，我不知道，这种机器人我也是头一次见。", 36, 3005053, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#是，说的像是这么一回事。", 36, 3005052, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face1#是真的！这个内部结构……太不可思议了。", 36, 3005053, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face1#我搞不懂到底为什么需要这种结构，以防万一我还仔细观察了一下，可其他人也一样。", 36, 3005053, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#也许，这些家伙全都……", 36, 3005053, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#b古代神的痕迹#k之一？", 56, 0, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#迄今为止，这一切都只是假设而已。", 36, 3005053, false, true);
	} else if (status === i++) {
		cm.askYesNo_Bottom("#face0#还是先分解完吧。", 3005053);
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
		cm.sendNormalTalk_Bottom("这是……", 56, 0, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#这些是内置在达尔米身上的从前的录音记录。", 36, 3005053, false, true);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
		cm.setInGameDirectionMode(true, false, true);
		cm.inGameDirectionEvent_AskAnswerTime(1500);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 500, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas11(0, 256, 0, 0, 0, 0);
		cm.fieldEffect_InsertCanvas(1, 150, 0, 0, 0, 1300, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1500)
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face6#哇！！动起来了！！", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face6#你是我第一次修好的机器人！！我可能真是个……了不起的天才吧！", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face6#你虽然不像其他机器人一样有卓越的功能，不过那又怎样？\r\n只要给客人指指路什么的就行，你说是不是？", 36, 3005050, false, true);
	} else if (status == i++) {
		cm.sendNormalTalk_Bottom("达尔米！！达尔米！！", 36, 3005055, false, true);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas11(0, 0, 0, 0, 0, 0);
		cm.fieldEffect_InsertCanvas(1, 1, 255, 255, 255, 200, 0);
		cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1000)
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face1#小时候的洛斯缇非常单纯啊。", 36, 3005052, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#因为小孩子都是这样的……", 36, 3005053, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("还有一条其他记录呢。", 56, 0, false, true);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas11(0, 256, 0, 0, 0, 0);
		cm.fieldEffect_InsertCanvas(1, 150, 0, 0, 0, 1300, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1500)
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#现如今也没有客人上门了。", 36, 3005050, false, true);
	} else if (status == i++) {
		cm.sendNormalTalk_Bottom("凯利！！凯利！！", 36, 3005055, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face2#看样子凯利很快也要离开了。", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face2#要是连她都走了，那就没人能照顾列车上的机器人了。", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face2#我要是走了，你们应该也……", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#洛斯缇，已经有一个月没看到大洛斯缇了。", 36, 3005051, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face2#蠢货，我说过啊，以后看不到父亲了。", 36, 3005050, false, true);
	} else if (status == i++) {
		cm.sendNormalTalk_Bottom("蠢货！！蠢货！！", 36, 3005055, false, true);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas11(0, 0, 0, 0, 0, 0);
		cm.fieldEffect_InsertCanvas(1, 1, 255, 255, 255, 200, 0);
		cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("父亲离开了，就连为数不多剩下的几个好像也离开了城市。", 56, 0, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face3#……等一下，好像有什么重要的线索。", 36, 3005052, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#重要的线索？", 36, 3005053, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#刚刚的录音记录里，是洛斯缇提到这一带有列车的吧？", 36, 3005052, false, true);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
		cm.inGameDirectionEvent_AskAnswerTime(600);
	} else if (status === i++) {
		cm.fieldEffect_ProcessOnOffLayer("Arcs", "Effect/Direction26.img/Arcs/illust/5", 0, 500, 0, 0, 0, 4, 1);
		cm.inGameDirectionEvent_AskAnswerTime(600);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#还有地图上那个长得像巨蟒一样的……", 36, 3005052, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#你说这指的是#b列车#k？", 36, 3005053, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#诶，你们突然在说什么列车？", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#……！", 36, 3005053, false, true);
	} else if (status === i++) {
		cm.fieldEffect_ProcessOnOffLayer("Arcs", "", 2, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
		cm.inGameDirectionEvent_AskAnswerTime(600);
	} else if (status == i++) {
		cm.setInGameDirectionMode(false, true, false);
		cm.warp(993165208, 0);
		cm.dispose();
	}
}
