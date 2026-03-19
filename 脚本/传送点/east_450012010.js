function enter() {
    if (cm.isQuestActive(35802)) {
        var a = cm.getEventManager("黎曼_战斗1");
        a.startInstance(cm.getPlayer(), cm.getMap())
    } else {
        if (cm.isQuestFinished(35802)) {
            cm.warp(450012100, 1, false)
        } else {
            cm.playerMessage(-1, "先和古瓦洛谈谈吧！")
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
            cm.sendOk("这个传送点的脚本尚未修复。\r\n脚本位于： 脚本/传送点/east_450012010.js ", 0)
        } else {
            cm.dispose()
        }
    }
};