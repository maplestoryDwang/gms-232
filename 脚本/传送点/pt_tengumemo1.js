function enter() {
    cm.openScriptNpc()
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
            if (cm.isQuestFinished(58775)) {
                cm.sendOkS_Bottom("已经看过这段回忆了。去其他地方看看吧。");
                cm.dispose();
                return
            }
            cm.askYesNo("这里是……？", 2, 0)
        } else {
            if (status === a++) {
                cm.dispose();
                cm.openNpc("蘑菇神社_记忆试炼1")
            }
        }
    }
};