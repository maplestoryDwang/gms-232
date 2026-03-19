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
            if (cm.isQuestActive(23940)) {
                cm.playerMessage(5, "问问帕比奥在干什么事情吧！");
                cm.warp(931010030, 0, false)
            } else {
                cm.warp(310000003, 1, false)
            }
            cm.dispose()
        }
    }
};