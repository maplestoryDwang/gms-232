function enter() {
    if (cm.getMap().getNumMonsters() == 0) {
        if (cm.isQuestActive(38052)) {
            cm.warp(915020101, 0, false)
        } else {
            cm.playerMessage(-1, "里面什么都没有.")
        }
    } else {
        cm.playerMessage(-1, "好像上锁了。先打坏门锁吧！")
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
            cm.sendOk("这个传送点的脚本尚未修复。\r\n脚本位于： 脚本/传送点/map915020100_PT.js ", 0)
        } else {
            cm.dispose()
        }
    }
};