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
            if (cm.getQuestStatus(100436) == 1) {
                cm.warp(993175411, 0, false)
            }
            if (cm.getQuestStatus(100439) == 1) {
                cm.warp(993175410, 2, false)
            }
            cm.dispose()
        }
    }
};