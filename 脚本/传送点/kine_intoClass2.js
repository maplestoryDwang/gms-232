function enter() {
    if (cm.isQuestActive(22728)) {
        cm.warp(331002400, 0)
    } else {
        cm.openScriptNpc()
    }
}
var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

function action(e, d, c) {
    if (status == 0 && e == 0) {
        cm.dispose();
        return
    }
    if (cm.getPlayer().getGender() == 0) {
        var a = 1531000
    } else {
        var a = 1531052
    }(e == 1) ? status++ : status--;
    selectionLog[status] = c;
    var b = -1;
    if (status <= b++) {
        cm.dispose()
    } else {
        if (status === b++) {
            cm.sendNormalTalk_Bottom("#b(现在还有别的事情要做。)#k", 37, a, true, true)
        } else {
            cm.dispose()
        }
    }
};