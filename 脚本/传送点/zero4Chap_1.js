function enter() {
    var b = cm.getPortal().getId();
    var a = cm.getPortal().getName();
    if (cm.isQuestFinished(40407)) {
        cm.playerMessage(5, "我们在这里要做的事情已经全做完了。");
        cm.playerMessage(-1, "我们在这里要做的事情已经全做完了。")
    } else {
        if (cm.isQuestFinished(40401)) {
            cm.warp(325000100, 1, false)
        } else {
            cm.openScriptNpc()
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
            cm.sendOk("#b（非常普通的下水道入口。）", 0)
        } else {
            cm.dispose()
        }
    }
};