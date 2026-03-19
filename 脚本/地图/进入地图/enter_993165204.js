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
		cm.resetMap(993165203)
		cm.curNodeEventEnd(true);
		cm.setInGameDirectionMode(true, false, true);
		cm.setStandAloneMode(true);
		cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
		cm.inGameDirectionEvent_ForcedFlip(-1);
		cm.npc_ChangeController(3005052, "oid=381021", 205, -9, 1, false, false);
		cm.npc_ChangeController(3005053, "oid=381022", 77, -9, 1, false, false);
		cm.npc_ChangeController(3005054, "oid=381023", -65, -9, 0, false, false);
		cm.npc_ChangeController(3005057, "oid=381024", -184, -9, 0, false, false);
		cm.npc_ChangeController(3005058, "oid=381025", -280, -9, 0, false, false);
		cm.npc_ChangeController(3005059, "oid=381026", -365, -9, 0, false, false);
		cm.onTeleport(0, 3, cm.getPlayer().getId(), 140, -9);
		cm.inGameDirectionEvent_PushScaleInfo(0, 1500, 0, 15, -50);
	} else if (status === i++) {
		cm.fieldEffect_ProcessOnOffLayer("Arcs", "Effect/Direction26.img/Arcs/illust/2", 0, 1400, 0, 0, 0, 4, 1);
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.fieldEffect_PlayBGM("Bgm38.img/LifeIsComedy");
		cm.sendNormalTalk_Bottom("#face1#该死，说是有重要的任务我才激动地赶过来的……\r\n居然是在这里削什么土豆，这说得过去吗？", 36, 3005053, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("冒险岛联盟的人不还钱就跑路的话要是传出去，那该怎么办。", 56, 0, false, true)
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face1#唔~我做不到！", 36, 3005053, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face1#贝尔，只要坚持下去，就会慢慢熟悉起来的，像这样握刀……", 36, 3005052, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face1#为什么在削土豆这件事上还要表现出十足认真的诚意……！", 36, 3005053, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#不行了，#h0#。", 36, 3005053, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("嗯？", 56, 0, false, true)
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#开溜吧，要想走，就趁现在洛斯缇走神的时机……", 36, 3005053, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face3#不行的，贝尔，这种行为是不对的。", 36, 3005052, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#日后由联盟偿还就是了，\r\n要不然就伊莉娜自己一个人留下来把土豆削个够。", 36, 3005053, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face3#那，那是……", 36, 3005052, false, true);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#那么，我就上了~", 36, 3005053, false, true);
	} else if (status === i++) {
		cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/2019Update/door_open", 100);
		cm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#谁，谁？", 36, 3005053, false, true);
	} else if (status === i++) {
		cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
		cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/Hotel_arcs/west_sound", 100);
		cm.fieldEffect_ProcessOnOffLayer("Arcs", "", 2, 800, 0, 0, 0, 0, 0, 0, 0, 0, 0);
		cm.fieldEffect_ProcessOnOffLayer("Arcs2", "Effect/Direction26.img/Arcs/illust/3", 0, 800, 0, 0, 0, 4, 1);
		cm.inGameDirectionEvent_AskAnswerTime(1500);
	} else if (status === i++) {
		cm.fieldEffect_PlayBGM("Bgm48.img/VerdelTown");
		cm.inGameDirectionEvent_AskAnswerTime(200);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face2#在一片孤独荒野出现的无名枪手，\r\n这个孤单的流浪者能够说话的对象就只有仙人掌……", 36, 3005070, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face2#名叫……", 36, 3005070, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("……", 56, 0, false, true);
	} else if (status === i++) {
		cm.fieldEffect_ProcessOnOffLayer("Arcs2", "", 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
		cm.fieldEffect_ProcessOnOffLayer("Arcs3", "Effect/Direction26.img/Arcs/illust/4", 0, 1500, 0, 0, 0, 4, 1);
		cm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face2#塞妮娅·安格洛。", 36, 3005070, false, true);
	} else if (status === i++) {
		cm.fieldEffect_ProcessOnOffLayer("Arcs3", "", 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
		cm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.fieldEffect_PlayBGM("Bgm57.img/Welcome to Hotel Arcs", 0, 0);
		cm.inGameDirectionEvent_AskAnswerTime(500);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("塞妮娅·安格洛？！", 56, 0, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face2#咳咳，咳咳！这家伙搞什么！披风里的灰……", 36, 3005053, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face1#登场还不错嘛？", 36, 3004001, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face2#最近沉迷上全新的类型了呢。", 36, 3004001, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face3#这个人是……", 36, 3005052, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#谁啊？怎么大家都这么严肃？", 36, 3005053, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#贝尔，你应该听说过垂钓者公司吧，\r\n最近的联盟报告书里也提到过嘛。", 36, 3005052, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#啊！格兰蒂斯的传奇武器商人？！", 36, 3005053, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face2#哎呦，真是不好意思，看样子我们的消息都已经传到大海那一边了。", 36, 3004001, false, true);
	} else if (status === i++) {
		cm.npc_ChangeController(3005050, "oid=381027", 6, -1, 9, 0, 4, 0, true, 2000, false);
		cm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face1#喂！喂！不就是削土豆，怎么这么大动静？", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face1#啊，是你啊。这家旅馆的主人洛斯缇，幸会。", 36, 3004001, false, true);
	} else if (status === i++) {
		cm.npc_LeaveField("oid=381027");
        cm.npc_ChangeController(3005050, "oid=381027", 6, -1, 9, 0, 4, 1, true, 0, false);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=381027"], [0, 0, 0, 1, 0, 1, 0, 0]);
		cm.inGameDirectionEvent_AskAnswerTime(1000);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face3#这、这位又是什、什么人……", 36, 3005050, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("等等，站住，你到底是想来干嘛？", 56, 0, false, true);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face0#有何盘算嘛？嗯……我……", 36, 3004001, false, true);
	} else if (status === i++) {
		cm.inGameDirectionEvent_AskAnswerTime(1500);
	} else if (status === i++) {
		cm.sendNormalTalk_Bottom("#face1#我是来收购这家旅馆的。", 36, 3004001, false, true);
	} else if (status === i++) {
		cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=381021"], [0, 0, 0, 1, 0, 1, 0, 0]);
		cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=381022"], [0, 0, 0, 1, 0, 1, 0, 0]);
		cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 1, 0, 0]);
		cm.inGameDirectionEvent_AskAnswerTime(2000);
	} else if (status === i++) {
		cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
		cm.inGameDirectionEvent_AskAnswerTime(600);
	} else if (status === i++) {
		cm.curNodeEventEnd(true);
		cm.npc_LeaveField("oid=381021");
		cm.npc_LeaveField("oid=381022");
		cm.npc_LeaveField("oid=381023");
		cm.npc_LeaveField("oid=381024");
		cm.npc_LeaveField("oid=381025");
		cm.npc_LeaveField("oid=381026");
		cm.npc_LeaveField("oid=381027");
		cm.forceCompleteQuest(38102);
		cm.warp(410003000, 0);
		cm.setInGameDirectionMode(false, true, false);
		cm.dispose();
	}
}
