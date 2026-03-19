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
            if (cm.isQuestActive(23050)) {
                cm.warp(931000321, 1, false);
                cm.killAllMob();
                cm.spawnMobLimit(9001035, 1, -349, 16, 100)
            } else {
                cm.playerMessage(-1, "我没接受任何任务！")
            }
            cm.dispose()
        }
    }
};