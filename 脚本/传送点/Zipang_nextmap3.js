function enter() {
    if (cm.getMap().getNumMonsters() == 0) {
        if (cm.getMapId() == 800021080) {
            cm.warp(800021118, 0, false)
        } else {
            cm.warp(cm.getMapId() + 10, 0, false)
        }
    } else {
        cm.playerMessage(-1, "还有敌人没有消灭干净.");
        cm.playerMessage(5, "还有敌人没有消灭干净.")
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
            cm.sendOk("这个传送点的脚本尚未修复。\r\n脚本位于： 脚本/传送点/Zipang_nextmap3.js ", 0)
        } else {
            cm.dispose()
        }
    }
};