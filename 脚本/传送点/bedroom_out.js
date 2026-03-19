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
            if (cm.isQuestFinished(2570) || cm.isQuestActive(2570)) {
                cm.warp(120000101, 0)
            } else {
                cm.playerMessage(-1, "先和司徒诺对话吧！")
            }
            cm.dispose()
        }
    }
};