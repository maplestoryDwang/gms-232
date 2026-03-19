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
		cm.resetMap(993165211)
		cm.fieldEffect_PlayBGM("Bgm57.img/Train heading nowhere");
		cm.curNodeEventEnd(true);
		cm.setInGameDirectionMode(true, false, true);
		cm.setStandAloneMode(true);
		cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
		cm.npc_ChangeController(3005052, "oid=381181", -343, 125, 100, -393, -293, 0, true, 0, false);
		cm.npc_ChangeController(3005050, "oid=381182", -98, 125, 100, -148, -48, 1, true, 0, false);
		cm.onTeleport(0, 3, cm.getPlayer().getId(), -227, 125);
		cm.inGameDirectionEvent_ForcedFlip(1);
		cm.inGameDirectionEvent_PushScaleInfo(0, 1500, 0, -132, 82);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(3000);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1500, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1700);
	} else if (status === i++) {
		cm.userSetFieldFloating(993165211, 2, 2, 1);
		cm.sendNormalTalk_Bottom("#face0#我们虽然照着地图来到了中控室……可宝物到底在哪儿？", 36, 3005052, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("没看到什么看起来像宝箱的东西啊……", 56, 0, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face4#喂，一群傻子，让开，你们都不看电影的吗？", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face4#一般来说，如果这种机器操控得当，搞不好会嘎达一声出现某个隐藏的空间。", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face1#很老练嘛，那要操控哪一个呢？", 36, 3005052, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#我也不知道。", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#……", 36, 3005052, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face1#你、你别用这种表情看着我！\r\n你以为我什么机器都会操控吗？", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#如果我猜得没错……应该是拉动这三根控制杆中的一根。", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#不过要稍微考虑一下到底该拉哪一根控制杆才行……", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face3#喂，中控室组的！怎么样了？已经快要撑不住了！", 36, 3005053, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face2#哇，刚刚我的胳膊差点就断成了两截~", 36, 3004001, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#……没时间了，#h0#，是左边？中间？还是右边？", 36, 3005052, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("额，嗯？", 56, 0, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#快点，是左边？中间？还是右边？", 36, 3005052, false, true);
	} else if (status === i++) {
		cm.askMenu_Bottom("该怎么办？\r\n#b#L0#左#l\r\n#L1#中#l\r\n#L2#右#l", 57, 0);
	} else if (status === i++) {
		switch (selection) {
			case 0:
				cm.sendNormalTalk_Bottom("#b左边！", 56, 0, false, true);
				break;
			case 1:
				cm.sendNormalTalk_Bottom("#b中间！", 56, 0, false, true);
				break;
			case 2:
				cm.sendNormalTalk_Bottom("#b右边！", 56, 0, false, true);
				break;
			default:
				cm.dispose();
				break;
		}
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#好吧，#h0#，那我就信你一次。", 36, 3005052, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face9#喂，这可不是这么弄的……！", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#（咔哒）", 36, 3005052, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face9#真的打开了呢……", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.npc_ChangeController(3005053, "oid=381183", -278, 125, 100, -328, -228, 0, true, 1500, false);
		cm.npc_ChangeController(3005054, "oid=381184", -418, 125, 100, -468, -368, 0, true, 1500, false);
		cm.inGameDirectionEvent_AskAnswerTime(1100);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#暂时靠塞妮娅的那些生化人撑着，宝物呢？发现了吗？", 36, 3005053, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#我刚刚找到了隐藏的空间，#h0#会取出来的。", 36, 3005052, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("终于……！", 56, 0, false, true);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 700, 0);
		cm.inGameDirectionEvent_AskAnswerTime(900);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("（手上抓到了什么东西，这是……）", 56, 0, false, true);
	} else if (status === i++) {
		cm.setAmbience("SoundEff.img/ReverseCity/warn1", 200, 60);
		cm.inGameDirectionEvent_AskAnswerTime(1500);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#……哎呦？怎么好像突然传出哔哔的声音？", 36, 3005053, false, true);
	} else if (status === i++) {
		cm.fieldEffect_ProcessOnOffLayer("Arcs", "Effect/Direction26.img/Arcs/illust/8", 0, 500, 0, 0, 0, 4, 1);
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#这是……炸弹。", 36, 3004001, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#是炸弹呢。", 36, 3005053, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#是炸弹哎。", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("……这是炸弹嘛！", 56, 0, false, true);
	} else if (status === i++) {
		cm.fieldEffect_ProcessOnOffLayer("Arcs", "", 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1500);
	} else if (status === i++) {
		cm.playSoundEffDirectly("SoundEff.img/ReverseCity/warn1");
		cm.sendNormalTalk_Bottom("#face9#到底怎么回事！迄今为止你们只是一直在找炸弹吗？", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face2#哇，看来这炸弹非常厉害啊。", 36, 3004001, false, true);
	} else if (status === i++) {
		cm.userSetFieldFloating(993165211, 0, 0, 0);
		cm.inGameDirectionEvent_PushScaleInfo(1000, 1500, 1000, -1090, 183);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(1100);
	} else if (status === i++) {
		cm.userSetFieldFloating(993165211, 2, 2, 1);
		cm.npc_ChangeController(3005069, "oid=381185", -1041, 185, 100, -1091, -991, 0, true, 1500, false);
		cm.npc_ChangeController(3005056, "oid=381186", -862, 185, 100, -912, -812, 0, true, 1500, false);
		cm.inGameDirectionEvent_AskAnswerTime(1600);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("在那边，宝物一定在那些人的手里！", 36, 3005069, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("解决掉吧，宝物就归我们了。", 36, 3005056, false, true);
	} else if (status === i++) {
		cm.npc_ChangeController(3005074, "oid=381187", -1208, 185, 100, -1258, -1158, 0, true, 1500, false);
		cm.npc_ChangeController(3005075, "oid=381188", -1352, 185, 100, -1402, -1302, 0, true, 1500, false);
		cm.inGameDirectionEvent_AskAnswerTime(1600);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("发现擅自上车的乘客，进行清退。", 36, 3005074, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("吼吼……吼吼……", 36, 3005075, false, true);
	} else if (status === i++) {
		cm.userSetFieldFloating(993165211, 0, 0, 0);
		cm.inGameDirectionEvent_PushScaleInfo(700, 1500, 700, -663, 153);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(800);
	} else if (status === i++) {
		cm.userSetFieldFloating(993165211, 2, 2, 1);
		cm.npc_ChangeController(3005077, "oid=381189", -719, 185, 100, -769, -669, 1, true, 1500, false);
		cm.inGameDirectionEvent_AskAnswerTime(1600);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("是谁？", 36, 3005056, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#我是队长。", 36, 3005051, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#始祖龟。", 36, 3005051, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#我是来接洛斯缇的。", 36, 3005051, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face9#那个蠢货怎么跑这儿来了！", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#监测到有威胁性的敌人。", 36, 3005051, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#3秒后启动战斗模式。", 36, 3005051, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("暂、暂停……", 36, 3005056, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#5分31秒……", 36, 3005051, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#2小时39秒……", 36, 3005051, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("……", 36, 3005056, false, true);
	} else if (status === i++) {
		cm.npc_SetSpecialAction("oid=381186", "special", 0, 0);
		cm.fieldEffect_PlayFieldSound("Sound/Mob.img/8645208/Attack1", 100);
		cm.inGameDirectionEvent_AskAnswerTime(1500);
	} else if (status === i++) {
		cm.npc_SetSpecialAction("oid=381189", "special3", -1, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1500);
	} else if (status === i++) {
		cm.userSetFieldFloating(993165211, 0, 0, 0);
		cm.inGameDirectionEvent_PushScaleInfo(600, 1500, 600, -132, 82);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(700);
	} else if (status === i++) {
		cm.userSetFieldFloating(993165211, 2, 2, 1);
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.setAmbience("SoundEff.img/ReverseCity/warn2", 200, 60);
		cm.sendNormalTalk_Bottom("#face9#始祖龟！", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face2#炸弹就快要爆炸了！", 36, 3005052, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face3#朝他们投掷炸弹，带着始祖龟一起出去吧，再这样下去，我们都会死。", 36, 3005053, false, true);
	} else if (status === i++) {
		cm.playSoundEffDirectly("SoundEff.img/ReverseCity/warn2");
		cm.sendNormalTalk_Bottom("可还没有好好看过呢？", 56, 0, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#……没错，总不能一起搭上前往地府的列车吧。", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#来，你们想要的宝物在这里！！", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.fieldEffect_ProcessOnOffLayer("Arcs1", "Effect/Direction26.img/Arcs/illust/10", 0, 500, 0, 0, 0, 4, 1);
		cm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		cm.fieldEffect_ProcessOnOffLayer("Arcs1", "", 2, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
		cm.inGameDirectionEvent_AskAnswerTime(600);
	} else if (status === i++) {
		cm.userSetFieldFloating(993165211, 0, 0, 0);
		cm.inGameDirectionEvent_PushScaleInfo(1200, 1500, 1200, -1090, 183);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(1200);
	} else if (status === i++) {
		cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=381185"], [0, 0, 0, 1, 0, 1, 0, 0]);
		cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=381186"], [0, 0, 0, 1, 0, 1, 0, 0]);
		cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=381187"], [0, 0, 0, 1, 0, 1, 0, 0]);
		cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=381188"], [0, 0, 0, 1, 0, 1, 0, 0]);
		cm.inGameDirectionEvent_AskAnswerTime(1500);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 700, 0);
		cm.inGameDirectionEvent_AskAnswerTime(800);
	} else if (status === i++) {
		cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion1", 100);
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.userSetFieldFloating(993165211, 0, 0, 0);
		cm.sendNormalTalk_Bottom("#face0#借这个机会从列车上下去吧。", 36, 3005052, false, true);
	} else if (status === i++) {
		cm.curNodeEventEnd(true);
		cm.npc_LeaveField("oid=381181");
		cm.npc_LeaveField("oid=381182");
		cm.npc_LeaveField("oid=381183");
		cm.npc_LeaveField("oid=381184");
		cm.npc_LeaveField("oid=381185");
		cm.npc_LeaveField("oid=381186");
		cm.npc_LeaveField("oid=381187");
		cm.npc_LeaveField("oid=381188");
		cm.npc_LeaveField("oid=381189");
		cm.setInGameDirectionMode(false, true, false);
		cm.updateInfoQuest(38100, "16=h0;01=h1;12=h1;23=h1;28=h1;");
		cm.forceCompleteQuest(38118);
		cm.warp(410003000, 0);
		cm.dispose();
	}
}
