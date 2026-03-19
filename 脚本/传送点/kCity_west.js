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
            cm.dispose();
            if (cm.isQuestActive(22730)) {
                cm.openNpc("超能力者_战斗1")
            } else {
                if (cm.isQuestActive(22833)) {
                    cm.warp(331003500, 0, false)
                } else {
                    cm.warp(331003400, 0, false)
                }
            }
        }
    }
};