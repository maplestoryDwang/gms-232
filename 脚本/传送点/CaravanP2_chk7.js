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
            cm.莫奈德_特效(null, [7, 5]);
            cm.onScriptMessage_莫奈德卷轴风格(9400589, "“你现在真的做得很得心应手了。不仅能理智地判断情况，更重要的是懂得关心村民们，这份心意很难得。”佩图尔走过来夸奖了我，并感谢我没有忽视可汗村长和巴特勒副团长的意见。“他们说的话，做出的行动，在你看来可能会觉得很自私，但站在他们的立场上看，那都是最现实的方案。”他看了看走在我旁边的凯恩，接着说道，“你别太指责他们。”\r\n           #i4036367#\r\n#b\r\n#L0#“我能理解他们。”（全体友好度上升）#l\r\n#L1#“尽管这样，我还是无法理解他们。”（A组友好度下降）#l")
        } else {
            var reactor = "action分支" + selectionLog[1];
            eval(reactor)(mode, type, selection, i)
        }
    }
}

function action分支0(d, c, b, a) {
    if (status <= a++) {
        cm.addNumberForQuestInfo(64007, "happy0", 5, 0, 100);
        cm.addNumberForQuestInfo(64007, "happy1", 5, 0, 100);
        cm.addNumberForQuestInfo(64007, "happy2", 5, 0, 100);
        cm.addNumberForQuestInfo(64007, "happy3", 5, 0, 100);
        cm.莫奈德_特效(null, [8, 5, 5, 5, 5]);
        cm.setNumberForQuestInfo(64006, "Ec", 8);
        cm.莫奈德_特效(null, [6, 0, 0, 0, 0, 0]);
        cm.monadForceMove("0", 0, 3000);
        cm.onSetBackEffect("0", 1, 0, 0, 0);
        cm.monadForceMove("1", 0, 3000);
        cm.onSetBackEffect("1", 1, 0, 0, 0);
        cm.monadForceMove("2", 0, 3000);
        cm.onSetBackEffect("2", 1, 0, 0, 0);
        cm.monadForceMove("3", 1, 3000);
        cm.onSetBackEffect("3", 1, 1, 0, 0);
        cm.useItem(2210210, false);
        cm.莫奈德_特效(null, [0, 2]);
        cm.dispose();
        cm.setNumberForQuestInfo(64005, "duringEvent", 0)
    }
}

function action分支1(d, c, b, a) {
    if (status <= a++) {
        cm.addNumberForQuestInfo(64007, "happy0", -5, 0, 100);
        cm.addNumberForQuestInfo(64007, "happy1", -5, 0, 100);
        cm.addNumberForQuestInfo(64007, "happy2", -5, 0, 100);
        cm.addNumberForQuestInfo(64007, "happy3", -5, 0, 100);
        cm.莫奈德_特效(null, [8, -5, -5, -5, -5]);
        cm.setNumberForQuestInfo(64006, "Ec", 8);
        cm.莫奈德_特效(null, [6, 0, 0, 0, 0, 0]);
        cm.monadForceMove("0", 0, 3000);
        cm.onSetBackEffect("0", 1, 0, 0, 0);
        cm.monadForceMove("1", 0, 3000);
        cm.onSetBackEffect("1", 1, 0, 0, 0);
        cm.monadForceMove("2", 0, 3000);
        cm.onSetBackEffect("2", 1, 0, 0, 0);
        cm.monadForceMove("3", 1, 3000);
        cm.onSetBackEffect("3", 1, 1, 0, 0);
        cm.useItem(2210210, false);
        cm.莫奈德_特效(null, [0, 2]);
        cm.dispose();
        cm.setNumberForQuestInfo(64005, "duringEvent", 0)
    }
};