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
            cm.onScriptMessage_莫奈德卷轴风格(9400580, "远处渐渐能看到被木栅环绕的村庄。艾丽卡也发现了村子，朝我走过来。“那边好像是斯巴乐缇。郁兰说卡夫塔佩和斯巴乐缇之间关系不好，很是担心。”听艾丽卡的语气，她和郁兰已亲近了许多。“可现在这种情况下，他们总不会把咱们撵走吧？难得可以安心休息一下了！\r\n           #i4036367#\r\n#b\r\n#L0#“关系不好？”#l\r\n#L1#“是的。再加把劲。”#l")
        } else {
            var reactor = "action分支" + selectionLog[1];
            eval(reactor)(mode, type, selection, i)
        }
    }
}

function action分支0(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk_Bottom("#face0#是的。#h #你也加油！", 37, 9400580, false, true)
    } else {
        if (status === a++) {
            cm.setNumberForQuestInfo(64006, "Ec", 20);
            cm.莫奈德_特效(null, [6, 0, 0, 0, 0, 1]);
            cm.monadForceMove("0", 0, 3000);
            cm.onSetBackEffect("0", 1, 0, 0, 0);
            cm.monadForceMove("1", 1, 3000);
            cm.onSetBackEffect("1", 1, 1, 0, 0);
            cm.monadForceMove("2", 0, 3000);
            cm.onSetBackEffect("2", 1, 0, 0, 0);
            cm.monadForceMove("3", 0, 3000);
            cm.onSetBackEffect("3", 1, 0, 0, 0);
            cm.useItem(2210208, false);
            cm.莫奈德_特效(null, [8, 0, 0, 0, 0]);
            cm.莫奈德_特效(null, [0, 2]);
            cm.dispose();
            cm.setNumberForQuestInfo(64005, "duringEvent", 0)
        }
    }
}

function action分支1(d, c, b, a) {
    if (status <= a++) {
        cm.onScriptMessage_莫奈德卷轴风格(9400580, "艾丽卡点点头，“嗯，听郁兰说，两个村子之间好像有误会。不幸的是双方都没有做出任何试图解开误会的努力。“我也没多问。”\r\n           #i4036367#\r\n#b\r\n#L0#点点头。#l")
    } else {
        if (status === a++) {
            cm.setNumberForQuestInfo(64006, "Ec", 20);
            cm.莫奈德_特效(null, [6, 0, 0, 0, 0, 1]);
            cm.monadForceMove("0", 0, 3000);
            cm.onSetBackEffect("0", 1, 0, 0, 0);
            cm.monadForceMove("1", 1, 3000);
            cm.onSetBackEffect("1", 1, 1, 0, 0);
            cm.monadForceMove("2", 0, 3000);
            cm.onSetBackEffect("2", 1, 0, 0, 0);
            cm.monadForceMove("3", 0, 3000);
            cm.onSetBackEffect("3", 1, 0, 0, 0);
            cm.useItem(2210208, false);
            cm.莫奈德_特效(null, [8, 0, 0, 0, 0]);
            cm.莫奈德_特效(null, [0, 2]);
            cm.dispose();
            cm.setNumberForQuestInfo(64005, "duringEvent", 0)
        }
    }
};