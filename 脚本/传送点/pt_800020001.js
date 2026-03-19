function enter() {
    cm.openScriptNpc()
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
            if (cm.getNumberFromQuestInfo(58723, "pt1") == 0) {
                cm.sendNormalTalk("#b(我调查一下再走吧)#k", 2, 0, false, false)
            } else {
                cm.warp(800020002, 1, false)
            }
            cm.dispose()
        }
    }
};