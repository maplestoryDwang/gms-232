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
            cm.execCommand("button_seatron_out");
            cm.execCommand("Name[button_seatron_out]");
            cm.askYesNo("确定要返回原地吗？", 4, 9062208)
        } else {
            if (status === a++) {
                cm.warp(cm.getNumberFromQuestInfo(100351, "rMap"), 0);
                cm.dispose()
            }
        }
    }
};