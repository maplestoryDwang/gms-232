function enter() {
    if (cm.getQuestStatus(37511) == 0) {
        cm.playerMessage(-1, "先了解下这里的情况吧。");
        cm.playerMessage(5, "先了解下这里的情况吧。")
    } else {
        if (cm.isQuestActive(37511)) {
            cm.openNpc("荣耀_被选中之人_劫营")
        } else {
            cm.warp(993150071, 0, false)
        }
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
            cm.sendOk("这个传送点的脚本尚未修复。\r\n脚本位于： 脚本/传送点/east_993150070.js ", 0)
        } else {
            cm.dispose()
        }
    }
};