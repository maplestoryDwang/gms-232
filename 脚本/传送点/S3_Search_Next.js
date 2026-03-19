function enter() {
    var a = cm.getMapId();
    if (a == 867143900) {
        cm.openScriptNpc()
    } else {
        if (a + 100 > 867143300) {
            cm.warp(cm.getMapId() + 100, 1)
        } else {
            cm.warp(cm.getMapId() + 100, 2)
        }
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
            if (cm.isQuestFinished(64911) && cm.getQuestStatus(64912) == 0) {
                cm.warp(867142001, 0, false)
            } else {
                cm.sendOkS_Bottom("这里好像无路可走了。")
            }
            cm.dispose()
        }
    }
};