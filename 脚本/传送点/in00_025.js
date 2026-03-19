function enter() {
    if ((!cm.isQuestFinished(58927) && cm.isQuestFinished(58925)) || (!cm.isQuestFinished(58940) && cm.isQuestFinished(58938)) || (!cm.isQuestFinished(58968) && cm.isQuestFinished(58966))) {
        cm.warp(811000026, 2, false)
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
            cm.sendOkS("先了解下附近的情况吧。")
        } else {
            cm.dispose()
        }
    }
};