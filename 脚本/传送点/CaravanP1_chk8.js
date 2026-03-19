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
            cm.onScriptMessage_莫奈德卷轴风格(9400589, "我突然想到，佩图尔是个樵夫，他说不定认识住在森林里的老婆婆。\r\n我把信拿给佩图尔看，向他打听了老婆婆的事。\r\n“啊……尽管我知道她是位很坚强的人，但没想到她至今还没放弃……”\r\n佩图尔似乎认识老婆婆。\r\n           #i4036367#\r\n#b\r\n#L0#请他说得更详细点。#l")
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("前往#m867200622#。", 35, 0, false, true)
            } else {
                if (status === a++) {
                    cm.dispose();
                    cm.warp(867200622, 0);
                    for (var a = 2210207; a <= 2210211; a++) {
                        cm.dispelBuff(a)
                    }
                }
            }
        }
    }
};