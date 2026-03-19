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
            if (cm.isQuestActive(22583)) {
                cm.warp(922030010, 0, false);
                cm.forceCompleteQuest(22583);
                cm.dispose()
            } else {
                if (cm.isQuestActive(22584)) {
                    cm.warp(922030020, 0, false);
                    cm.spawnMobLimit(9300390, 1, -65, 112, 100);
                    cm.dispose()
                } else {
                    cm.playerMessage(-1, "暂时没事.");
                    cm.dispose()
                }
            }
            cm.dispose()
        }
    }
};