function enter() {
    var b = cm.getPortal().getId();
    var a = cm.getPortal().getName();
    if (cm.getQuestStatus(17678) > 0 && !cm.isQuestFinished(17680)) {
        cm.warp(865010011, 3)
    }
}
var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

function action(e, d, c) {
    if (status == 0 && e == 0) {
        cm.dispose();
        return
    }(e == 1) ? status++ : status--;
    selectionLog[status] = c;
    var b = -1;
    if (status <= b++) {
        cm.dispose()
    } else {
        if (status === b++) {
            var f = cm.getPortal().getId();
            var a = cm.getPortal().getName();
            cm.sendOk("这个传送点 [" + f + " : " + a + "] 的脚本尚未修复。\r\n脚本位于： 脚本/传送点/map_865010001.js ", 0)
        } else {
            cm.dispose()
        }
    }
};