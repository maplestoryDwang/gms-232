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
            if (cm.isQuestActive(25567)) {
                cm.dispose();
                cm.warp(101020300, 0)
            } else {
                cm.dispose();
                cm.warp(101000000, 0)
            }
        } else {
            cm.dispose()
        }
    }
};