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
            if (cm.isQuestActive(24088)) {
                cm.warp(931040000, 0, false)
            } else {
                if (cm.isQuestActive(23268)) {
                    cm.warp(931050220, 1, false)
                } else {
                    cm.warp(931020010, 0)
                }
            }
            cm.dispose()
        }
    }
};