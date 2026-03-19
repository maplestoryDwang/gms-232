function enter() {
    if (cm.isQuestActive(58927) || cm.isQuestActive(58940) || cm.isQuestActive(58968)) {
        cm.warp(811000025, 3, false)
    } else {
        cm.openScriptNpc()
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
            cm.sendOkS("先探索一下这里吧。")
        } else {
            cm.dispose()
        }
    }
};