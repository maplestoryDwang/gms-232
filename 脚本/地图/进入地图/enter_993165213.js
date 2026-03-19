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
		cm.resetMap(993165213)
		cm.fieldEffect_PlayBGM("Bgm57.img/Lonesome Cinema");
		cm.curNodeEventEnd(true);
		cm.setInGameDirectionMode(true, false, true);
		cm.setStandAloneMode(true);
		cm.inGameDirectionEvent_SetHideEffect(true);
		cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
		cm.npc_ChangeController(3005050, "oid=381191", 564, 277, 100, 514, 614, 1, true, 0, false);
		cm.inGameDirectionEvent_PushScaleInfo(0, 1500, 0, 600, 225);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1100);
	} else if (status === i++) {
		cm.inGameDirectionEvent_PushScaleInfo(3000, 1500, 3000, 190, 225);
	} else if (status === i++) {
		cm.npc_SetForceMove("oid=381191", -1, 282, 90);
		cm.inGameDirectionEvent_AskAnswerTime(3300);
	} else if (status === i++) {
		cm.npc_ChangeController(3005075, "oid=381192", 5, 277, 100, -45, 55, 0, true, 1000, false);
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#……！", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#难道是列车上的炸弹引爆了，一路到了这里……", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("吼吼吼……吼吼。", 36, 3005075, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face1#有、有危险……偏偏赶在煎煎那些人不在的时候。", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("吼吼吼……吼吼。", 36, 3005075, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#诶……？", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.fieldEffect_ProcessOnOffLayer("Arcs", "Effect/Direction26.img/Arcs/illust/9", 0, 1500, 0, 0, 0, 4, 1);
		cm.inGameDirectionEvent_AskAnswerTime(1600);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#这个怎么了……？", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.fieldEffect_ProcessOnOffLayer("Arcs", "", 2, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
		cm.inGameDirectionEvent_AskAnswerTime(600);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("吼吼吼……吼吼。", 36, 3005075, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#……", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#这不是单纯的炸弹，里面有东西……", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.fieldEffect_ProcessOnOffLayer("Arcs1", "Effect/Direction26.img/Arcs/illust/14", 0, 1500, 0, 0, 0, 4, 1);
		cm.inGameDirectionEvent_AskAnswerTime(1600);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#螺丝？", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#区区一个螺丝……就是所谓的宝物？", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.fieldEffect_ProcessOnOffLayer("Arcs1", "", 2, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
		cm.inGameDirectionEvent_AskAnswerTime(600);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("吼吼吼……吼吼。", 36, 3005075, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#你……原来是想要玩从前和凯利一起玩过的枪手游戏啊……", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face2#以后连这些都玩不了，他也就不是队长了……", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(600);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#队长？", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.fieldEffect_PlayBGM("Bgm57.img/A mechanic with a wander");
		cm.OverlapScreenDetail19(0, 1000, 3000, 1);
		cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
	} else if (status === i++) {
		cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(700);
	} else if (status == i++) {
		cm.fieldEffect_RemoveOverlapScreenDetail(1000);
		cm.inGameDirectionEvent_PushScaleInfo(0, 3000, 0, 32, 19);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		cm.effect_Text(["#fn宋体##fs30#哈哈哈！我们是守护这里的正义勇士！"], [0, 4000, 7, 0, -50, 0, 4, 3, 500, 500, 0]);
		cm.inGameDirectionEvent_AskAnswerTime(5000);
	} else if (status === i++) {
		cm.effect_Text(["#fn宋体##fs30#保护弱小，打败坏人！"], [0, 4000, 7, 0, -50, 0, 4, 3, 500, 500, 0]);
		cm.inGameDirectionEvent_AskAnswerTime(5000);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.fieldEffect_ProcessOnOffLayer("Arcs2", "Effect/Direction26.img/Arcs/illust/11", 0, 500, 0, 0, 0, 4, 1);
		cm.inGameDirectionEvent_AskAnswerTime(600);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face7#哇，真的好酷，不愧是队长。", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#队长？这是个未经输入的单词。", 36, 3005051, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face7#蠢货，这你都不懂？队长他……超帅超厉害的……嗯……", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#那是守卫大家的正义勇士。", 36, 3005070, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#单词输入完毕，队长，正义勇士。", 36, 3005051, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face7#你是哪位？", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#我？那家伙的多年老友。", 36, 3005070, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face7#朋友？和这个家伙吗？", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#你别看那家伙看起来平平无奇，想当年也风光过。", 36, 3005070, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#我心想时机差不多成熟了，就过来看看，看样子还需要点时间呢。", 36, 3005070, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face7#（实在不明白在说什么……）", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face7#什么情况？这是？", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#藏宝图，对#b我们这位缺螺丝的朋友#k来说，没什么比这个更珍贵了。", 36, 3005070, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#那么，有机会再见吧，朋友。", 36, 3005070, false, true);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.fieldEffect_ProcessOnOffLayer("Arcs2", "", 2, 700, 0, 0, 0, 0, 0, 0, 0, 0, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1300);
	} else if (status === i++) {
		cm.fieldEffect_ProcessOnOffLayer("Arcs3", "Effect/Direction26.img/Arcs/illust/12", 0, 500, 0, 0, 0, 4, 1);
		cm.inGameDirectionEvent_AskAnswerTime(600);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face8#切……每天都上映同一部电影。", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#凯利也走了，电影也超没劲的。", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#12分21秒，洛斯缇喜欢的画面出来了。", 36, 3005051, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face1#傻瓜，我已经不是当初那个一边流着鼻涕一边看动画电影的小孩子了。", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#不是傻瓜，是队长。", 36, 3005051, false, true);
	} else if (status === i++) {
		cm.effect_Text(["#fn宋体##fs35#拿去送给心爱的人吧，这可是我用心制作的特制饮料！"], [0, 4000, 7, 0, -95, 0, 4, 3, 500, 500, 0]);
		cm.inGameDirectionEvent_AskAnswerTime(5000);
	} else if (status === i++) {
		cm.effect_Text(["#fn宋体##fs35#超人气热卖中！！"], [0, 4000, 7, 0, -95, 0, 4, 3, 500, 500, 0]);
		cm.inGameDirectionEvent_AskAnswerTime(5000);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#电影播完就该播广告了，走吧。", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#说起来，从前好像有人来找过你吧？好像说是朋友还是什么来着。", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#明明就对你说了什么来着……", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#洛斯缇，我不知道要怎么制作心。", 36, 3005051, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#哎呦，算了，又在说什么蠢话呢……", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.fieldEffect_ProcessOnOffLayer("Arcs3", "", 2, 700, 0, 0, 0, 0, 0, 0, 0, 0, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1700);
	} else if (status === i++) {
		cm.inGameDirectionEvent_PushScaleInfo(0, 1500, 0, 190, 225);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1500);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#当时明明……", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#对#b缺螺丝的朋友#k……", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.npc_ChangeController(3005056, "oid=381193", -114, 277, 100, -164, -64, 0, true, 1000, false);
		cm.inGameDirectionEvent_AskAnswerTime(1200);
	} else if (status === i++) {
		cm.fieldEffect_PlayBGM("Bgm44.img/WildFury");
		cm.sendNormalTalk_Bottom("你给的不是宝物。", 36, 3005056, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("将真宝物交出来。", 36, 3005056, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#唔……等、等一下，那个……所谓的宝物……目前确实在我手里……", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.npc_ChangeController(3005055, "oid=381194", 147, 277, 100, 97, 197, 1, true, 1000, false);
		cm.inGameDirectionEvent_AskAnswerTime(1200);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("很高兴见到你们，各位暴徒~", 36, 3005055, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face9#……达尔米？", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("切换为特制重弹头招待模式~", 36, 3005055, false, true);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 700, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.npc_SetSpecialAction("oid=381194", "special2", -1, 0);
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 700, 0);
		cm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		cm.setNpcSpecialActionReset("oid=381194");
		cm.npc_SetSpecialAction("oid=381194", "special3", 1, 0);
		cm.fieldEffect_PlayFieldSound("Sound/Mob.img/8645208/Attack1", 100);
		cm.inGameDirectionEvent_AskAnswerTime(1300);
	} else if (status === i++) {
		cm.setNpcSpecialActionReset("oid=381194");
		cm.npc_SetSpecialAction("oid=381194", "special2", -1, 0);
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.npc_SetSpecialAction("oid=381192", "special", 1, 1);
		cm.npc_SetSpecialAction("oid=381193", "special2", 1, 1);
		cm.inGameDirectionEvent_AskAnswerTime(1500);
	} else if (status === i++) {
		cm.npc_LeaveField("oid=381192");
		cm.npc_LeaveField("oid=381193");
		cm.inGameDirectionEvent_AskAnswerTime(200);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face9#达尔米！", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face9#塞妮娅……到底做了什么……", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#……！", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face9#难道连始祖龟也！！", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("啊，美丽又完美的主人塞妮娅，她在呼唤我~", 36, 3005055, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("重新回旅馆~", 36, 3005055, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face9#等一下，达尔米！", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("我并不叫达尔米~而是塞妮娅生化人欧米伽版本~", 36, 3005055, false, true);
	} else if (status === i++) {
		cm.Npc_Fadeout("oid=381194", 0, 500);
		cm.inGameDirectionEvent_AskAnswerTime(600);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face9#旅馆里发生了什么事……", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 700, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.curNodeEventEnd(true);
		cm.npc_LeaveField("oid=381191");
		cm.npc_LeaveField("oid=381192");
		cm.npc_LeaveField("oid=381193");
		cm.npc_LeaveField("oid=381194");
		cm.setInGameDirectionMode(false, true, false);
		cm.warp(993165214, 0);
		cm.dispose();
	}
}
