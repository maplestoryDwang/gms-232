function enter() {
    if (cm.getNumberFromQuestInfo(500785, "lv") >= 2) {
        cm.warp(993120400, 0, false)
    } else {
        cm.openScriptNpc()
    }
}
var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

function action(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.sendNormalTalk("#e<荣耀特攻队练武场>#n\r\n\r\n这里是专为荣耀特攻队队员准备的练武场。为了修炼，请先学习#b力量训练#k吧。\r\n\r\n\r\n#r※达到#e军官#n阶以上后，可以学习力量训练技能。#k", 4, 3004203, true, false)
        } else {
            if (status === a++) {
                cm.dispose()
            }
        }
    }
};