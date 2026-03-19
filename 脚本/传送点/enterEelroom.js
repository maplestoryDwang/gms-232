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
            if (cm.isQuestActive(23957)) {
                cm.warp(931020011, 1, false);
                cm.spawnMobLimit(9300417, 1, 1186, 18, 100)
            } else {
                cm.getTopMsgFont("门上锁了。", 3, 20, 4, 0, 0)
            }
            cm.dispose()
        }
    }
};