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
            if (cm.getMapId() == 807051100) {
                cm.warp(211000000, 0);
                cm.dispose()
            } else {
                if (cm.isQuestFinished(57429) && !cm.isQuestFinished(57433)) {
                    cm.warp(807051100, 0);
                    cm.dispose()
                } else {
                    cm.dispose()
                }
            }
        }
    }
};