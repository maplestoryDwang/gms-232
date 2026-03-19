function enter() {
    if (cm.isQuestActive(22860)) {
        var a = cm.getEventManager("超能力者_战斗2");
        a.startInstance(cm.getPlayer(), cm.getMap())
    } else {
        if (!cm.isQuestFinished(22734)) {
            cm.warp(331003400, 0, false)
        } else {
            cm.playerMessage(-1, "这里看上去很危险。现在不是探索的时候。");
            cm.playerMessage(5, "这里看上去很危险。现在不是探索的时候。")
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
            cm.sendOk("这个传送点的脚本尚未修复。\r\n脚本位于： 脚本/传送点/kCity_east.js ", 0)
        } else {
            cm.dispose()
        }
    }
};