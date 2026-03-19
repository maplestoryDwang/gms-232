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
            if (cm.isQuestActive(24077)) {
                cm.warp(910150230, 0, false);
                cm.getPlayer().scheduleWarpTask(60, cm.getMap(101050200))
            } else {
                cm.warp(101050020, 1, false)
            }
            cm.dispose()
        }
    }
};