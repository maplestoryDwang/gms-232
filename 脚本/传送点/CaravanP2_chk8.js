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
            cm.monadForceMove("0", 1, 3000);
            cm.onSetBackEffect("0", 1, 1, 0, 0);
            cm.monadForceMove("1", 0, 3000);
            cm.onSetBackEffect("1", 1, 0, 0, 0);
            cm.monadForceMove("2", 0, 3000);
            cm.onSetBackEffect("2", 1, 0, 0, 0);
            cm.monadForceMove("3", 0, 3000);
            cm.onSetBackEffect("3", 1, 0, 0, 0);
            cm.useItem(2210207, false);
            cm.莫奈德_特效(null, [7, 5]);
            cm.onScriptMessage_莫奈德卷轴风格(9400583, "“有毒，毒云！大家快屏住呼吸！”刚听见吉莉的喊声，就看见周围的村民在纷纷倒下。吉莉毫不犹豫地冲进毒云中开始发射火箭，火焰点燃了毒云。被云雾遮蔽的昏倒的村民们渐渐露出来。“趁现在！快点救人！”\r\n           #i4036367#\r\n#b\r\n#L0#冲进毒云把村民们带出来。（B组友好度上升，C组友好度上升）#l\r\n#L1#给骑士们下令。（人数减少）#l")
        } else {
            var reactor = "action分支" + selectionLog[1];
            eval(reactor)(mode, type, selection, i)
        }
    }
}

function action分支0(d, c, b, a) {
    if (status <= a++) {
        cm.addNumberForQuestInfo(64007, "happy1", 15, 0, 100);
        cm.addNumberForQuestInfo(64007, "happy2", 10, 0, 100);
        cm.莫奈德_特效(null, [8, 0, 15, 10, 0]);
        cm.sendNormalTalk_Bottom("前往#m867200920#。", 35, 0, false, true)
    } else {
        if (status === a++) {
            cm.dispose();
            cm.warp(867200920, 0);
            for (var a = 2210207; a <= 2210211; a++) {
                cm.dispelBuff(a)
            }
        }
    }
}

function action分支1(d, c, b, a) {
    if (status <= a++) {
        cm.addNumberForQuestInfo(64006, "man", -20);
        cm.莫奈德_特效(null, [6, -20, -1, -1, -11, -7]);
        cm.sendNormalTalk_Bottom("……我们赶到的时候……已经迟了。", 37, 9400583, false, true)
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom("有几位中毒的村民……已经回到了阿布鲁之息的怀抱……", 37, 9400583, false, true)
        } else {
            if (status === a++) {
                cm.setNumberForQuestInfo(64006, "Ec", 9);
                cm.莫奈德_特效(null, [6, 0, 0, 0, 0, 0]);
                cm.useItem(2210210, false);
                cm.莫奈德_特效(null, [0, 2]);
                cm.dispose();
                cm.setNumberForQuestInfo(64005, "duringEvent", 0)
            }
        }
    }
};