var status = -1; // status: 当前聊天交互轮数
var selectionLog = []; // 记录每一轮的选择
function start() {
	action(1, 0, 0);
}
function action(mode, type, selection) {
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
		cm.resetMap(993165217)
		cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
		cm.curNodeEventEnd(true);
		cm.setInGameDirectionMode(true, false, true);
		cm.setStandAloneMode(true);
		cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
		cm.npc_ChangeController(3005050, "oid=381191", 435, 255, 100, 385, 485, 1, true, 0, false);
		cm.npc_ChangeController(3005052, "oid=381192", 648, 255, 100, 598, 698, 1, true, 0, false);
		cm.npc_ChangeController(3005053, "oid=381193", 534, 255, 100, 484, 584, 1, true, 0, false);
		cm.onTeleport(0, 3, cm.getPlayer().getId(), 593, 255);
		cm.inGameDirectionEvent_ForcedFlip(-1);
		cm.inGameDirectionEvent_PushScaleInfo(0, 1500, 0, 515, 200);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face2#古代兵器控制成功。", 36, 3005051, false, true);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(700);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1300);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#那些古代兵器怎么样了？", 36, 3005052, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#看来始祖龟成功夺走了控制权，让它们又回到了地下。", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face2#到底为什么地下会有这么大的机器人？", 36, 3005053, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#这应该是为违背旅馆规则的客人准备的。", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#应该有许多条规则的，比方说……", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#会不会是损坏公物……之类的？", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face2#唔……", 36, 3005053, false, true);
	} else if (status === i++) {
		cm.npc_ChangeController(3004001, "oid=381194", 302, 255, 0, 252, 352, 0, false, 1200, false);
		cm.inGameDirectionEvent_AskAnswerTime(1300);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#呵呵，谁能想到这座城市本身就是由沉睡的古代神形成的。", 36, 3005054, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#甚至连那个陈旧的螺丝，", 36, 3005054, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#我万万没想到这会是唤醒沉睡古代神的关键。", 36, 3005054, false, true);
	} else if (status === i++) {
		cm.fieldEffect_PlayBGM("Bgm57.img/A mechanic with a wander");
		cm.sendNormalTalk_Bottom("#face0#我能知道吗？", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#这里没人知道始祖龟是与古代神相连的机器人的。", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#所以，不是说之前你给的那张魔法卡片什么都能买吗？", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#我要再次买下这家旅馆。", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#……", 36, 3005054, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face1#洛斯缇，拥有这家旅馆对我来说已经毫无意义。", 36, 3005054, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face1#毕竟没有什么事像拥有一个不受控制的要塞一样毫无意义。", 36, 3005054, false, true);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(700);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#还是没办法让人理解呢。", 36, 3005054, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#我原以为已经彻底控制住机器人了……\r\n毕竟在改造机器方面，我比任何人都有信心。", 36, 3005054, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face8#这个嘛……", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face8#那个老古董连我的话都不听，还能听你的？", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#……", 36, 3005054, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face8#再说原本家人就是这样的嘛，\r\n就算再怎么不听彼此的话，但还是会互相折磨着生活下去。", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#……", 36, 3005054, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#家人啊……", 36, 3005054, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face1#看来我所知道的家人和洛斯缇所知道的家人差很多啊。", 36, 3005054, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#那么各位。", 36, 3005054, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#下次再见。我很开心。", 36, 3005054, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face3#等等！！去哪儿……", 36, 3005053, false, true);
	} else if (status === i++) {
		cm.Npc_Fadeout("oid=381194", 0, 1000);
		cm.inGameDirectionEvent_AskAnswerTime(2100);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
		cm.inGameDirectionEvent_AskAnswerTime(600);
	} else if (status === i++) {
		cm.curNodeEventEnd(true);
		cm.npc_LeaveField("oid=381191");
		cm.npc_LeaveField("oid=381192");
		cm.npc_LeaveField("oid=381193");
		cm.npc_LeaveField("oid=381194");
		cm.setInGameDirectionMode(false, true, false);
		cm.updateInfoQuest(38100, "16=h1;01=h1;12=h1;23=h1");
		cm.forceCompleteQuest(38119);
		cm.warp(410003000, 0);
		cm.dispose();
	}
}
