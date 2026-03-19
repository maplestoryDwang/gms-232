function enter() {
    cm.openScriptNpc()
}
var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

function action(e, d, c) {
    if (status == 0 && e == 0) {
        cm.dispose();
        return
    }(e == 1) ? status++ : status--;
    selectionLog[status] = c;
    var b = -1;
    if (status <= b++) {
        cm.dispose()
    } else {
        if (status === b++) {
            if (cm.isQuestActive(35728)) {
                var a = cm.getEventManager("痛苦迷宫_战斗7");
                a.startInstance(cm.getPlayer(), cm.getMap());
                cm.dispose()
            } else {
                cm.dispose();
                cm.warp(450011600, 1, false)
            }
        }
    }
};