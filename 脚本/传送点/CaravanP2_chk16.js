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
            cm.onScriptMessage_莫奈德卷轴风格(9400589, "佩图尔看上去已经恢复平静。佩图尔看见我，便放下包裹身子的毛毯，朝我走过来。\r\n           #i4036367#\r\n#b\r\n#L0#等着佩图尔走过来。#l")
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("前往#m867200961#。", 35, 0, false, true)
            } else {
                if (status === a++) {
                    cm.dispose();
                    cm.warp(867200961, 0);
                    for (var a = 2210207; a <= 2210211; a++) {
                        cm.dispelBuff(a)
                    }
                }
            }
        }
    }
};