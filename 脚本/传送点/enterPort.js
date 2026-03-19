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
            if (cm.isQuestActive(21301)) {
                cm.warp(914022000, 0, false);
                cm.spawnMobLimit(9001013, 1, 2617, 3, 100)
            } else {
                cm.warp(140020300, 1)
            }
            cm.dispose()
        }
    }
};