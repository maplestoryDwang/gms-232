var status = -1; // status: 当前聊天交互轮数
var selectionLog = []; // 记录每一轮的选择
function start() {
	action(1, 0, 0);
}
function action(mode, type, selection) {
	if (cm.getPlayer().getGender() == 0) {
		var a = 3005101
	} else {
		var a = 3005100
	}
	
	if (status == 0 && mode == 0) {
		cm.dispose();
		return;
	}

	status++;
	selectionLog[status] = selection;
	var i = -1;
	if (status <= i++) {
		cm.dispose();
	} else if (status === i++) {
		cm.curNodeEventEnd(true);
		cm.setInGameDirectionMode(true, false, true);
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
		cm.fieldEffect_ProcessOnOffLayer("Lara", "Effect/Direction26.img/Lara/illust/17", 0, 0, 0, 0, 0, 4, 1);
		cm.inGameDirectionEvent_AskAnswerTime(100);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#嘿咻！现在到了吗？", 36, a, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#虽然有些老调重弹，不过我们村庄还真是很偏僻啊。", 36, a, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face6#这是有多久没来了啊？我一直都很想念呢。", 36, a, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face1#啊，你们这些小家伙！看那边，那是我们村里人！", 36, a, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#大叔、大婶！你们好吗？", 36, a, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face6#是我啊，我啦，啦啦！", 36, a, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#天啊，这是谁啊？", 36, 3005130, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#我的天啊！大家快看啊，啦啦回来了！", 36, 3005129, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#有些日子没见，瞧瞧你都长这么大了，我差点都快认不出你了呢！", 36, 3005130, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#快快，找人去把老人家叫过来。", 36, 3005129, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#她比谁都担心她这个" + (cm.getPlayer().getGender() == 0 ? "孙子" : "孙女") + "呢……看到你安然无恙地回来了，她一定会很开心的。", 36, 3005129, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#哎呀，没必要特意来叫的。", 36, 3005109, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face2#奶奶！", 36, a, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#倒是村里的那些元素灵看起来格外欢快呢。", 36, 3005109, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#可能是猜到有想念的人会来吧。", 36, 3005109, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#我们啦啦这一路还顺利吗？", 36, 3005109, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face6#嗯，奶奶，等您听我说完我到底去了多远的地方，又经历了多少事情后，一定会大吃一惊的。", 36, a, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#我想把一切都告诉您，您知道我们一直以来守护的这个铃铛是什么东西吗？", 36, a, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#这个嘛，其实啊……", 36, a, false, true);
	} else if (status === i++) {
		cm.fieldEffect_ProcessOnOffLayer("Lara", "", 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.setInGameDirectionMode(false, true, false);
		cm.warp(993165544, 0, false);
		cm.dispose();
	}
}
