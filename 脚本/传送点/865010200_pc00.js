function enter() {
    var b = cm.getPortal().getId();
    var a = cm.getPortal().getName();
    if (cm.isQuestActive(17613) && cm.getNumberFromQuestInfo(17613, "enter") == 0) {
        cm.warp(865090001, 1)
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
            cm.askYesNoS("要离开主题副本：凯梅尔兹共和国地区吗？")
        } else {
            cm.warp(104000000, 5);
            cm.dispose()
        }
    }
};