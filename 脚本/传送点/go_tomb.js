function enter() {
    if (cm.isQuestFinished(63107) && !cm.isQuestFinished(63108)) {
        cm.warp(867113723, 0, false)
    } else {
        cm.warp(867113722, 0, false)
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
            cm.sendOk("这个传送点的脚本尚未修复。\r\n脚本位于： 脚本/传送点/go_tomb.js ", 0)
        } else {
            cm.dispose()
        }
    }
};