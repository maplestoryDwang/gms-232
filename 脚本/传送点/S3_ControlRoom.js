function enter() {
    if (cm.isQuestFinished(64922) && !cm.isQuestFinished(64923)) {
        cm.warp(867142008, 0, false)
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
            cm.sendOkS_Bottom("这里好像进不去。", 0)
        } else {
            cm.dispose()
        }
    }
};