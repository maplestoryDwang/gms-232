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
            if (cm.isQuestFinished(3515)) {
                cm.warp(270030200, 5, false)
            } else {
                cm.getTopMsgFont("完成任务后才能通过。", 3, 20, 4, 0, 0)
            }
            cm.dispose()
        }
    }
};