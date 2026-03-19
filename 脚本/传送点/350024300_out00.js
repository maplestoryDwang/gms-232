function enter() {
    var a = cm.getNumberFromQuestInfo(33178, "r");
    if (a == 3) {
        cm.warp(350024201, 0, false)
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
            cm.sendNormalTalk_Bottom("还有房间没有检查完，不能离开。", 56, 0, false, false)
        } else {
            cm.dispose()
        }
    }
};