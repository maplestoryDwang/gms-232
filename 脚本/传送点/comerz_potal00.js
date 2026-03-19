function enter() {
    if (!cm.isQuestFinished(17929)) {
        cm.forceStartQuest(17929, "1")
    }
    cm.warp(865020000, 2)
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
            cm.sendOk("这个传送点 [" + f + " : " + a + "] 的脚本尚未修复。\r\n脚本位于： 脚本/传送点/comerz_potal00.js ", 0)
        } else {
            cm.dispose()
        }
    }
};