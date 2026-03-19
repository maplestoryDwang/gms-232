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

function action(d, c, b) {
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.莫奈德_特效(null, [0, 3]);
            cm.莫奈德_特效(null, [7, 5]);
            cm.onScriptMessage_莫奈德卷轴风格(9400587, "可汗村长通知说分粮时间到了。幸好刚才补充了食物，有一半人都能吃上。\r\n           #i4036367#\r\n#b\r\n#L0#暂停赶路，进行分粮。#l")
        } else {
            if (status === a++) {
                cm.莫奈德_特效(null, [4])
            } else {
                if (status === a++) {
                    cm.莫奈德_特效(null, [0, 3]);
                    cm.莫奈德_特效(null, [5, -cm.getNumberFromQuestInfo(64006, "man")]);
                    cm.setNumberForQuestInfo(64006, "Ec", 6);
                    cm.莫奈德_特效(null, [6, 0, 0, 0, 0, 0]);
                    cm.monadForceMove("0", 0, 3000);
                    cm.onSetBackEffect("0", 1, 0, 0, 0);
                    cm.monadForceMove("1", 0, 3000);
                    cm.onSetBackEffect("1", 1, 0, 0, 0);
                    cm.monadForceMove("2", 1, 3000);
                    cm.onSetBackEffect("2", 1, 1, 0, 0);
                    cm.monadForceMove("3", 0, 3000);
                    cm.onSetBackEffect("3", 1, 0, 0, 0);
                    cm.useItem(2210209, false);
                    cm.莫奈德_特效(null, [8, 0, 0, 0, 0]);
                    cm.莫奈德_特效(null, [0, 2]);
                    cm.dispose();
                    cm.setNumberForQuestInfo(64005, "duringEvent", 0)
                }
            }
        }
    }
};