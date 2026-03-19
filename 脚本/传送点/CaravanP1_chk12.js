function enter() {
    var b = cm.getPortal().getId();
    var a = cm.getNumberFromQuestInfo(64006, "Ec");
    if (a == b) {
        cm.openScriptNpc()
    }
}
var status = -1;
var selectionLog = [];

function start() {
    cm.setNumberForQuestInfo(64005, "duringEvent", 1);
    action(1, 0, 0)
}

function action(mode, type, selection) {
    status++;
    selectionLog[status] = selection;
    var i = -1;
    if (status <= i++) {
        cm.dispose()
    } else {
        if (status === i++) {
            cm.莫奈德_特效(null, [0, 3]);
            cm.monadForceMove("0", 0, 3000);
            cm.onSetBackEffect("0", 1, 0, 0, 0);
            cm.monadForceMove("1", 0, 3000);
            cm.onSetBackEffect("1", 1, 0, 0, 0);
            cm.monadForceMove("2", 1, 3000);
            cm.onSetBackEffect("2", 1, 1, 0, 0);
            cm.monadForceMove("3", 0, 3000);
            cm.onSetBackEffect("3", 1, 0, 0, 0);
            cm.useItem(2210209, false);
            cm.onScriptMessage_莫奈德卷轴风格(9400580, "“#h0#”身后传来温和的呼唤。\r\n“你很辛苦吧？”艾丽卡眼中带着担忧，开口问道。\r\n           #i4036367#\r\n#b\r\n#L0#“我不辛苦……只是，要想不让村民们伤心，有点不容易办到。”（C组友好度上升，D组友好度上升）#l\r\n#L1#说想放弃。（全体友好度下降）#l")
        } else {
            var reactor = "action分支" + selectionLog[1];
            eval(reactor)(mode, type, selection, i)
        }
    }
}

function action分支0(d, c, b, a) {
    if (status <= a++) {
        cm.addNumberForQuestInfo(64007, "happy2", 15, 0, 100);
        cm.addNumberForQuestInfo(64007, "happy3", 18, 0, 100);
        cm.莫奈德_特效(null, [8, 0, 0, 15, 18]);
        cm.onScriptMessage_莫奈德卷轴风格(9400580, "“是啊，这是最难办到的。但世界上鲜少有人可以自己解决所有问题。乡亲们也知道这一点，所以你尽管可以放下负担，向他们寻求帮助。不必把所有事都自己扛。”艾丽卡停下话头，脸上带着微笑。“老实说我自己也做不到十全十美，巴特勒副团长和可汗村长也一样。”她耸耸肩，再次对我露出笑容。听了她的话，我心里感觉踏实了一点。\r\n艾丽卡表示会继续为我加油，说着就走远了。\r\n           #i4036367#\r\n#b\r\n#L0#“谢谢你。”（C组友好度上升）#l")
    } else {
        if (status === a++) {
            cm.addNumberForQuestInfo(64007, "happy2", 10, 0, 100);
            cm.addNumberForQuestInfo(64007, "happy3", 18, 0, 100);
            cm.莫奈德_特效(null, [8, 0, 0, 10, 18]);
            cm.setNumberForQuestInfo(64006, "Ec", 13);
            cm.useItem(2210209, false);
            cm.莫奈德_特效(null, [0, 2]);
            cm.dispose();
            cm.setNumberForQuestInfo(64005, "duringEvent", 0)
        }
    }
}

function action分支1(d, c, b, a) {
    if (status <= a++) {
        cm.addNumberForQuestInfo(64007, "happy0", -10, 0, 100);
        cm.addNumberForQuestInfo(64007, "happy1", -10, 0, 100);
        cm.addNumberForQuestInfo(64007, "happy2", -10, 0, 100);
        cm.addNumberForQuestInfo(64007, "happy3", -10, 0, 100);
        cm.莫奈德_特效(null, [8, -10, -10, -10, -10]);
        cm.sendNormalTalk_Bottom("#face3#你要振作一点。碰到这点困难就放弃，不像我认识的#h0#。", 37, 9400580, false, true, 1)
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom("#face0#感到辛苦时，你可以向周围的人请求帮助。不论是谁，都不会拒绝伸出援助之手的。你不用把所有事全都自己扛。", 37, 9400580, true, true, 1)
        } else {
            if (status === a++) {
                cm.setNumberForQuestInfo(64006, "Ec", 13);
                cm.useItem(2210209, false);
                cm.莫奈德_特效(null, [0, 2]);
                cm.dispose();
                cm.setNumberForQuestInfo(64005, "duringEvent", 0)
            }
        }
    }
};