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
            if (cm.getMapId() == 331003600) {
                if (cm.getMap().getNumMonsters() == 0) {
                    cm.warp(331003700, 0, false)
                } else {
                    cm.playerMessage(-1, "怪物太多走不动.")
                }
            } else {
                if (cm.getQuestStatus(22732) > 0) {
                    cm.warp(331003200, 0, false);
                    cm.dispose()
                } else {
                    cm.playerMessage(-1, "先看看这里的情况吧！");
                    cm.dispose()
                }
            }
            cm.dispose()
        }
    }
};