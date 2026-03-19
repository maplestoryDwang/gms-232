function enter() {
    if (cm.isQuestFinished(35719)) {
        cm.warp(993063029, 0, false)
    } else {
        if (cm.isQuestFinished(35718)) {
            cm.warp(450011320, 3, false)
        } else {
            if (cm.isQuestFinished(35717)) {
                cm.warp(993063024, 0, false)
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
            cm.sendOkS("这里是死路一条。")
        } else {
            cm.dispose()
        }
    }
};