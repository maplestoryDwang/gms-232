function enter() {
    var b = cm.getPortal().getId();
    var a = cm.getPortal().getName();
    if (cm.isQuestActive(33185)) {
        cm.warp(350032100, 0, false)
    } else {
        if (cm.isQuestActive(33186)) {
            cm.warp(350032200, 0, false)
        } else {
            if (cm.isQuestActive(33187)) {
                cm.warp(350032300, 0, false)
            } else {
                cm.openScriptNpc()
            }
        }
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
            cm.sendOkS("现在不是到处乱闯的时候。")
        } else {
            cm.dispose()
        }
    }
};