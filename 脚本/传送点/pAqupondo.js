function enter() {
    var b = cm.getPortal().getId();
    var a = cm.getPortal().getName();
    if (cm.isQuestFinished(17702)) {
        cm.warp(865020500, 3);
        cm.spawnMobLimit(9390865, 1, -1088, 200, 1)
    } else {
        cm.openScriptNpc()
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
            cm.sendNormalTalk("好奇怪……感觉好像一直在同一个地方转悠…… ", 17, 0, false, false)
        } else {
            if (status === a++) {
                cm.dispose();
                cm.warp(865020400, 4)
            }
        }
    }
};