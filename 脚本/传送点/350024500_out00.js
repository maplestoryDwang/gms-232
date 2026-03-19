function enter() {
    var a = cm.getMap().getNumMonsters();
    var b = parseInt(cm.getMapId());
    if (a <= 0) {
        if (b == 350024400) {
            cm.warp(350024300, 4, false)
        } else {
            if (b == 350024500) {
                cm.warp(350024300, 5, false)
            } else {
                cm.warp(350024300, 6, false)
            }
        }
    } else {
        cm.getTopMsgFont("还有敌人没有消灭. ", 3, 20, 20, 0)
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
            cm.sendOk("这个传送点的脚本尚未修复。\r\n脚本位于： 脚本/传送点/350024500_out00.js ", 0)
        } else {
            cm.dispose()
        }
    }
};