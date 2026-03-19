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
            if (cm.getMap().getNumMonsters() == 0) {
                cm.warp(105010100, 0, false)
            } else {
                cm.playerMessage(-1, "敌人太强，走不开。")
            }
            cm.dispose()
        }
    }
};