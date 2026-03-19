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
            if (cm.getMapId() == 807050100) {
                cm.warp(200050001, 0, false);
                cm.dispose();
                return
            }
            if (cm.isQuestActive(57133)) {
                cm.warp(807050100, 0, false)
            } else {
                cm.getTopMsgFont("传送关闭了.", 3, 20, 4, 0, 0)
            }
            cm.dispose()
        }
    }
};