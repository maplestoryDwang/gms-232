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
		cm.resetMap(993165216)
		cm.fieldEffect_PlayBGM("Bgm28.img/helisiumField");
		cm.curNodeEventEnd(true);
		cm.setInGameDirectionMode(true, false, true);
		cm.setStandAloneMode(true);
		cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
		cm.npc_ChangeController(3005050, "oid=381191", -421, 255, 100, -471, -371, 0, true, 0, false);
		cm.npc_ChangeController(3005052, "oid=381192", -348, 255, 100, -398, -298, 0, true, 0, false);
		cm.npc_ChangeController(3005053, "oid=381193", -162, 255, 100, -212, -112, 0, true, 0, false);
		cm.npc_ChangeController(3005077, "oid=381194", 219, 255, 100, 169, 269, 0, true, 0, false);
		cm.npc_ChangeController(3005060, "oid=381195", 569, 255, 100, 519, 619, 1, true, 0, false);
		cm.npc_ChangeController(3004001, "oid=381196", 773, 255, 0, 723, 823, 1, false, 0, false);
		cm.npc_SetSpecialAction("oid=381192", "special3", -1, 0);
		cm.npc_SetSpecialAction("oid=381193", "special2", -1, 0);
		cm.npc_SetSpecialAction("oid=381194", "red3", -1, 0);
		cm.onTeleport(0, 3, cm.getPlayer().getId(), -248, 255);
		cm.inGameDirectionEvent_ForcedFlip(1);
		cm.inGameDirectionEvent_MoveAction(4);
		cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -250, 243);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(1500);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1500, 0);
		cm.inGameDirectionEvent_AskAnswerTime(2500);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face9#到底怎么回事？！", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("塞妮娅利用始祖龟召唤出了古代兵器，这帮家伙可真够可以的，我们的攻击一点都行不通！", 56, 0, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face3#一开始就盯上了这个……！！", 36, 3005053, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face9#始祖龟？", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face2#他正在努力试图控制古代兵器。", 36, 3005052, false, true);
	} else if (status === i++) {
		cm.inGameDirectionEvent_PushScaleInfo(2000, 1000, 2000, 535, 116);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(2100);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#古代兵器控制行动，失败，失败，失败，失败……", 36, 3005051, false, true);
	} else if (status === i++) {
		cm.npc_SetSpecialAction("oid=381195", "special2", 1, 1);
		cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BM1/beam", 100);
		cm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		cm.setNpcSpecialActionReset("oid=381195");
		cm.npc_SetSpecialAction("oid=381195", "special3", -1, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face9#不行！！！！", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face3#失败…………失败……", 36, 3005051, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#始祖龟，停止控制古代兵器，那几位也不是你的朋友啊。", 36, 3005054, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#古代兵器控制行动，失败，失败……", 36, 3005051, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#嗯……", 36, 3005054, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face2#哎，看来要先摧毁再重新组装了。", 36, 3005054, false, true);
	} else if (status === i++) {
		cm.setNpcSpecialActionReset("oid=381195");
		cm.npc_SetSpecialAction("oid=381195", "special4", 1, 0);
		cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion8", 100);
		cm.inGameDirectionEvent_AskAnswerTime(800);
	} else if (status === i++) {
		cm.setNpcSpecialActionReset("oid=381194");
		cm.npc_SetSpecialAction("oid=381194", "special4", -1, 1);
		cm.inGameDirectionEvent_AskAnswerTime(1700);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face9#始祖龟！！！！！", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face3#洛斯缇！有危险，快回来！！", 36, 3005053, false, true);
	} else if (status === i++) {
		cm.OverlapScreenDetail19(0, 1000, 3000, 1);
		cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
	} else if (status === i++) {
		cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(700);
	} else if (status == i++) {
		cm.fieldEffect_RemoveOverlapScreenDetail(1000);
		cm.inGameDirectionEvent_PushScaleInfo(0, 2500, 0, 172, 269);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.npc_LeaveField("oid=381191");
		cm.npc_ChangeController(3005050, "oid=381191", 54, 255, 100, 4, 104, 0, true, 1500, false);
		cm.inGameDirectionEvent_AskAnswerTime(1600);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face10#始祖龟！！", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.fieldEffect_ProcessOnOffLayer("Arcs", "Effect/Direction26.img/Arcs/illust/15", 0, 500, 0, 0, 0, 4, 1);
		cm.inGameDirectionEvent_AskAnswerTime(1100);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face10#是我错了，我不该把你丢给那个陌生的家伙。", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face3#严重受损……", 36, 3005051, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face10#放心好了，我一定会想办法帮你修好的！", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.fieldEffect_ProcessOnOffLayer("Arcs1", "Effect/Direction26.img/Arcs/illust/14", 0, 1500, 0, 0, 0, 4, 1);
		cm.inGameDirectionEvent_AskAnswerTime(1600);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face10#你看，我连螺丝也带来了！缺螺丝的朋友……你不是需要嘛！", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.fieldEffect_ProcessOnOffLayer("Arcs1", "", 2, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
		cm.inGameDirectionEvent_AskAnswerTime(600);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#……这是最后的命令。", 36, 3005054, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face1#始祖龟，启动自爆。", 36, 3005054, false, true);
	} else if (status === i++) {
		cm.setAmbience("SoundEff.img/ReverseCity/warn2", 200, 60);
		cm.sendNormalTalk_Bottom("#face3#始祖龟开始自爆，倒计时，十、九……", 36, 3005051, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face3#住手！你这是在做什么！！", 36, 3005053, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face3#六、五、四……", 36, 3005051, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face10#始祖龟，不行！！", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face3#人类……必须将他们赶到100m以外才能安全……", 36, 3005051, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face3#快让开，洛斯缇。", 36, 3005051, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face10#我不要！", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.playSoundEffDirectly("SoundEff.img/ReverseCity/warn2");
		cm.setAmbience("SoundEff.img/ReverseCity/warn3", 200, 60);
		cm.sendNormalTalk_Bottom("#face3#三……二……", 36, 3005051, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face10#部下是绝不会背弃队长的。", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face3#……", 36, 3005051, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face2#队长….", 36, 3005051, false, true);
	} else if (status === i++) {
		cm.playSoundEffDirectly("SoundEff.img/ReverseCity/warn3");
		cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
		cm.sendNormalTalk_Bottom("#face2#我……", 36, 3005051, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face2#队长….", 36, 3005051, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face2#始……祖龟。", 36, 3005051, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face2#既然已经找到了……丢失的螺丝……", 36, 3005051, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face2#开始重新组装……", 36, 3005051, false, true);
	} else if (status === i++) {
		cm.fieldEffect_ProcessOnOffLayer("Arcs", "", 2, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1600);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1300);
	} else if (status === i++) {
		cm.setNpcSpecialActionReset("oid=381194");
		cm.npc_SetSpecialAction("oid=381194", "special5", 1, 0);
		cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/Hotel_arcs/robot_assemble", 100);
		cm.inGameDirectionEvent_AskAnswerTime(3700);
	} else if (status === i++) {
		cm.setNpcSpecialActionReset("oid=381194");
		cm.npc_SetSpecialAction("oid=381194", "special6", -1, 1);
		cm.inGameDirectionEvent_AskAnswerTime(1700);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face2#既然已经睡了个懒觉，现在该醒了。", 36, 3005051, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face2#客人们要弯腰注意高空坠物。", 36, 3005051, false, true);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 700, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1500);
	} else if (status === i++) {
		cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act1/cave", 100);
		cm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("出什么事了？", 56, 0, false, true);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(3000);
	} else if (status === i++) {
		cm.playVideoByScript("Hotel_Arcs.avi");
	} else if (status === i++) {
		cm.curNodeEventEnd(true);
		cm.npc_LeaveField("oid=381191");
		cm.npc_LeaveField("oid=381192");
		cm.npc_LeaveField("oid=381193");
		cm.npc_LeaveField("oid=381194");
		cm.npc_LeaveField("oid=381195");
		cm.npc_LeaveField("oid=381196");
		cm.setInGameDirectionMode(false, true, false);
		cm.warp(993165217, 0);
		cm.dispose();
	}
}
