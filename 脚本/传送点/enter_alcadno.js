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
            if (cm.isQuestActive(23270)) {
                cm.warp(926150000, 1, false)
            } else {
                if (cm.isQuestFinished(23270) && !cm.isQuestActive(23271)) {
                    cm.warp(926150010, 1, false)
                } else {
                    if (cm.isQuestActive(23271)) {
                        cm.warp(926150020, 1, false)
                    } else {
                        cm.warp(261000020, 1, false)
                    }
                }
            }
            cm.dispose()
        }
    }
};