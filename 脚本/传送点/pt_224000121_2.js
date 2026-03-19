function enter() {
    var b = cm.getPortal().getId();
    var a = cm.getPortal().getName();
    if (cm.isQuestActive(30410)) {
        cm.openScriptNpc()
    } else {
        cm.playerMessage(5, "黑漆漆的池塘，不知道有什么特别的。")
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
            cm.sendNormalTalk_Bottom("#b(找到了通往印塘水的路！)", 57, 0, false, true)
        } else {
            if (status === a++) {
                cm.dispose();
                cm.warp(224000122, 0, true)
            }
        }
    }
};