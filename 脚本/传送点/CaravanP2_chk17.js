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
            cm.onScriptMessage_莫奈德卷轴风格(9400581, "“我打算一到达下个村庄，就再次申请兵力支援。”我点点头对巴特勒的话表示赞同。巴特勒似乎没得到自己想要的回应，又补充说道。“我的意思是，等补充了兵力，你就可以把目前背负的沉重担子卸下来了。这段时间干得不错，辛苦你了。”\r\n           #i4036367#\r\n#b\r\n#L0#不做回应。（A组友好度下降）#l\r\n#L1#“全靠有大家的帮助，我才能有此成绩。今后如果乡亲们愿意，我打算继续做下去。”（A组友好度降低，B组友好度上升，C组友好度上升，D组友好度上升）#l")
        } else {
            var reactor = "action分支" + selectionLog[1];
            eval(reactor)(mode, type, selection, i)
        }
    }
}

function action分支0(d, c, b, a) {
    if (status <= a++) {
        cm.setNumberForQuestInfo(64006, "Ec", 18);
        cm.莫奈德_特效(null, [6, 0, 0, 0, 0, 1]);
        cm.monadForceMove("0", 1, 3000);
        cm.onSetBackEffect("0", 1, 1, 0, 0);
        cm.monadForceMove("1", 0, 3000);
        cm.onSetBackEffect("1", 1, 0, 0, 0);
        cm.monadForceMove("2", 0, 3000);
        cm.onSetBackEffect("2", 1, 0, 0, 0);
        cm.monadForceMove("3", 0, 3000);
        cm.onSetBackEffect("3", 1, 0, 0, 0);
        cm.useItem(2210207, false);
        cm.addNumberForQuestInfo(64007, "happy0", -5, 0, 100);
        cm.莫奈德_特效(null, [8, -5, 0, 0, 0]);
        cm.莫奈德_特效(null, [0, 2]);
        cm.dispose();
        cm.setNumberForQuestInfo(64005, "duringEvent", 0)
    }
}

function action分支1(d, c, b, a) {
    if (status <= a++) {
        cm.setNumberForQuestInfo(64006, "Ec", 18);
        cm.莫奈德_特效(null, [6, 0, 0, 0, 0, 1]);
        cm.monadForceMove("0", 1, 3000);
        cm.onSetBackEffect("0", 1, 1, 0, 0);
        cm.monadForceMove("1", 0, 3000);
        cm.onSetBackEffect("1", 1, 0, 0, 0);
        cm.monadForceMove("2", 0, 3000);
        cm.onSetBackEffect("2", 1, 0, 0, 0);
        cm.monadForceMove("3", 0, 3000);
        cm.onSetBackEffect("3", 1, 0, 0, 0);
        cm.useItem(2210207, false);
        cm.addNumberForQuestInfo(64007, "happy0", -5, 0, 100);
        cm.addNumberForQuestInfo(64007, "happy1", 5, 0, 100);
        cm.addNumberForQuestInfo(64007, "happy2", 5, 0, 100);
        cm.addNumberForQuestInfo(64007, "happy3", 5, 0, 100);
        cm.莫奈德_特效(null, [8, -5, 5, 5, 5]);
        cm.莫奈德_特效(null, [0, 2]);
        cm.dispose();
        cm.setNumberForQuestInfo(64005, "duringEvent", 0)
    }
};