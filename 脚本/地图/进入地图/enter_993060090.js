var status = -1; // status: 当前聊天交互轮数
var selectionLog = []; // 记录每一轮的选择
function start() {
	action(1, 0, 0);
}
function action(mode, type, selection) {
    if (cm.isQuestActive(35651) && cm.getNumberFromQuestInfo(35651, "clear") == 1) {
        action1(mode, type, selection)
    } else {
        cm.dispose()
    }
}

function action1(mode, type, selection) {
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
        cm.resetMap(993060090)
        cm.curNodeEventEnd(true);
        cm.setInGameDirectionMode(true, false, true);
        cm.setStandAloneMode(true);
        cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.npc_ChangeController(9063152, "oid=356511", -467, 72, 100, -517, -417, 1, true, 0, false);
        cm.npc_ChangeController(9063153, "oid=356512", -120, 75, 100, -170, -70, 1, true, 0, false);
        cm.npc_ChangeController(9063154, "oid=356513", -290, 85, 100, -340, -240, 1, true, 0, false);
        cm.onTeleport(0, 3, cm.getPlayer().getId(), -1330, 2);
        cm.inGameDirectionEvent_ForcedFlip(1);
        cm.setStringForQuestInfo(35650, "50", "h0");
        cm.setStringForQuestInfo(35650, "51", "h0");
        cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -1300, 50);
    } else if (status === i++) {
        cm.inGameDirectionEvent_AskAnswerTime(1000);
    } else if (status === i++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1500);
    } else if (status === i++) {
        cm['inGameDirectionEvent_同时移动镜头和人'](2, 705);
        cm.inGameDirectionEvent_PushScaleInfo(3500, 1500, 3500, -520, 100);
    } else if (status === i++) {
        cm.inGameDirectionEvent_AskAnswerTime(4000);
    } else if (status === i++) {
        cm.sendNormalTalk_Bottom("#face0#你回来了啊，#b#h0##k，\r\n看来你成功把黑魔法师的残影也消灭了啊。", 36, 9063152, false, true);
    } else if (status === i++) {
        cm.inGameDirectionEvent_AskAnswerTime(700);
    } else if (status === i++) {
        cm.inGameDirectionEvent_PushScaleInfo(1500, 1500, 1500, -290, 100);
    } else if (status === i++) {
        cm.inGameDirectionEvent_AskAnswerTime(1200);
    } else if (status === i++) {
        cm.sendNormalTalk_Bottom("#face0#你好，#b#h0##k。", 36, 9063153, false, true);
    } else if (status === i++) {
        cm.inGameDirectionEvent_AskAnswerTime(1500);
    } else if (status === i++) {
        cm.sendNormalTalk_Bottom("#face0#咻……这样一来#b#h0##k再次证明了自己的强大……\r\n现在我应该可以给你看看这个了。", 36, 9063152, false, true);
    } else if (status === i++) {
        cm.sendNormalTalk_Bottom("#face0#黑魔法师消失后，\r\n再次调查那周围的联盟成员发现了某种武器。", 36, 9063152, false, true);
    } else if (status === i++) {
        cm.sendNormalTalk_Bottom("#face0#发现武器的地方是巨人心脏，\r\n我们联盟认为这东西……是黑魔法师留下来的。", 36, 9063152, false, true);
    } else if (status === i++) {
        cm.sendNormalTalk_Bottom("#face0#联盟发现了武器后就立刻把它保管了起来，\r\n在汉斯的帮助下将其封印了。", 36, 9063152, false, true);
    } else if (status === i++) {
        cm.inGameDirectionEvent_AskAnswerTime(400);
    } else if (status === i++) {
        cm.npc_setForceFlip("oid=356511", 1);
        cm.inGameDirectionEvent_AskAnswerTime(1500);
    } else if (status === i++) {
        cm.sendNormalTalk_Bottom("#face0#就在那个箱子里。", 36, 9063152, false, true);
    } else if (status === i++) {
        cm.inGameDirectionEvent_AskAnswerTime(800);
    } else if (status === i++) {
        cm.sendNormalTalk_Bottom("#face0#这段时间我用了各种方法来调查那个武器，\r\n得出的结论是，这武器里潜在的力量是无限的。", 36, 9063153, false, true);
    } else if (status === i++) {
        cm.sendNormalTalk_Bottom("#face0#这个武器正是拥有创造和破坏两种创世之力的……#r创世武器#k，\r\n也就是黑魔法师曾拥有的力量。", 36, 9063153, false, true);
    } else if (status === i++) {
        cm.sendNormalTalk_Bottom("！？", 56, 0, false, true);
    } else if (status === i++) {
        cm.inGameDirectionEvent_AskAnswerTime(800);
    } else if (status === i++) {
        cm.sendNormalTalk_Bottom("#face0#我们认为可以将创世武器作为对付其他敌人的武器，打算尽量利用这个力量。", 36, 9063152, false, true);
    } else if (status === i++) {
        cm.sendNormalTalk_Bottom("#face0#也就是希望这个能成为联盟战斗力的一部分。", 36, 9063152, false, true);
    } else if (status === i++) {
        cm.inGameDirectionEvent_AskAnswerTime(800);
    } else if (status === i++) {
        cm.sendNormalTalk_Bottom("#face0#为了对抗今后未知的威胁……", 36, 9063152, false, true);
    } else if (status === i++) {
        cm.inGameDirectionEvent_AskAnswerTime(800);
    } else if (status === i++) {
        cm.sendNormalTalk_Bottom("#face0#为了掌握强大的力量，那就得有相应的资格。\r\n没有资格的人肯定是无法成为它的主人的。", 36, 9063153, false, true);
    } else if (status === i++) {
        cm.sendNormalTalk_Bottom("#face0#能够掌握创世之力，成为这个武器的主人的人……\r\n我们只能想到#b#h0##k你了。", 36, 9063153, false, true);
    } else if (status === i++) {
        cm.inGameDirectionEvent_AskAnswerTime(800);
    } else if (status === i++) {
        cm.sendNormalTalk_Bottom("#face0#而且……请看这个武器的形态。", 36, 9063153, false, true);
    } else if (status === i++) {
        cm.npc_SetSpecialAction("oid=356513", "special0", -1, 1);
        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BM_Weapon/box", 100);
        cm.inGameDirectionEvent_AskAnswerTime(1800);
    } else if (status === i++) {
        cm.setNpcSpecialActionReset("oid=356513");
        cm.npc_SetSpecialAction("oid=356513", "special1", -1, 1);
        cm.inGameDirectionEvent_AskAnswerTime(700);
    } else if (status === i++) {
        cm['inGameDirectionEvent_同时移动镜头和人'](2, 160);
        cm.inGameDirectionEvent_PushScaleInfo(1500, 2000, 1500, -291, 129);
    } else if (status === i++) {
        cm.inGameDirectionEvent_AskAnswerTime(2000);
    } else if (status === i++) {
        cm.sendNormalTalk_Bottom("！？", 56, 0, false, true);
    } else if (status === i++) {
        cm.inGameDirectionEvent_AskAnswerTime(800);
    } else if (status === i++) {
        cm.sendNormalTalk_Bottom("#face0#这个和你使用的武器……形态完全一致。", 36, 9063152, false, true);
    } else if (status === i++) {
        cm.sendNormalTalk_Bottom("#face0#你知道这意味着什么吗？", 36, 9063152, false, true);
    } else if (status === i++) {
        cm.inGameDirectionEvent_AskAnswerTime(800);
    } else if (status === i++) {
        cm.sendNormalTalk_Bottom("#face0#也就是说他说不定就是为了你而留下了这个武器。", 36, 9063152, false, true);
    } else if (status === i++) {
        cm.inGameDirectionEvent_AskAnswerTime(800);
    } else if (status === i++) {
        cm.sendNormalTalk_Bottom("#face0#但是，我们必须慎重一些，\r\n毕竟这武器是黑魔法师留下的。", 36, 9063152, false, true);
    } else if (status === i++) {
        cm.sendNormalTalk_Bottom("#face0#如果你没能控制住那个力量然后暴走……\r\n我们让你去调查也就是一种试炼。", 36, 9063152, false, true);
    } else if (status === i++) {
        cm.sendNormalTalk_Bottom("#face0#不过，现在还剩下一个试炼，\r\n这次不是我们，而是这个武器给你的试炼。", 36, 9063153, false, true);
    } else if (status === i++) {
        cm.sendNormalTalk_Bottom("#face0#武器的力量现在被未知的力量封印着。\r\n为了能够充分使用创世之力，必须解开封印。", 36, 9063153, false, true);
    } else if (status === i++) {
        cm.inGameDirectionEvent_AskAnswerTime(800);
    } else if (status === i++) {
        cm.sendNormalTalk_Bottom("#face0#解开封印的钥匙，\r\n似乎就在黑魔法师和他的那些军团长身上。", 36, 9063152, false, true);
    } else if (status === i++) {
        cm.sendNormalTalk_Bottom("#face0#我和汉斯现在是这么认为的。", 36, 9063152, false, true);
    } else if (status === i++) {
        cm.inGameDirectionEvent_AskAnswerTime(800);
    } else if (status === i++) {
        cm.sendNormalTalk_Bottom("#face0#总之，只能说肯定还有很多难关在等着你。\r\n因为得打败那个黑魔法师和军团长。", 36, 9063152, false, true);
    } else if (status === i++) {
        cm.inGameDirectionEvent_AskAnswerTime(800);
    } else if (status === i++) {
        cm.sendNormalTalk_Bottom("#face0#咻……", 36, 9063152, false, true);
    } else if (status === i++) {
        cm.sendNormalTalk_Bottom("#face0#总之，说明就到此为止了。\r\n一切都交给你来决定。", 36, 9063152, false, true);
    } else if (status === i++) {
        cm.sendNormalTalk_Bottom("#face0#做好心理准备就告诉我吧。", 36, 9063152, false, true);
    } else if (status === i++) {
        cm.OverlapScreenDetail19(0, 1000, 3000, 1);
        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
    } else if (status === i++) {
        cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
    } else if (status === i++) {
        cm.inGameDirectionEvent_AskAnswerTime(700);
    } else if (status == i++) {
        cm.fieldEffect_RemoveOverlapScreenDetail(1000);
        cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, 562, 103);
    } else if (status === i++) {
        cm.forceCompleteQuest(35651);
        cm.setStringForQuestInfo(35650, "50", "h1");
        cm.setStringForQuestInfo(35650, "51", "h1");
        cm.curNodeEventEnd(true);
        cm.npc_LeaveField("oid=356511");
        cm.npc_LeaveField("oid=356512");
        cm.npc_LeaveField("oid=356513");
        cm.setInGameDirectionMode(false, true, false);
        cm.dispose();
    }
}