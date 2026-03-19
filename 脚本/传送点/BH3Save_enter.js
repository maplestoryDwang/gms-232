function enter() {
    var b = cm.getPortal().getId();
    var a = cm.getPortal().getName();
    if (cm.getNumberFromQuestInfo(33181, "army" < 3)) {
        cm.openScriptNpc()
    } else {
        cm.warp(350031100, 0, false)
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
            cm.sendNormalTalk_Bottom("还有士兵没有抢救出来！", 36, 1540624, false, true)
        } else {
            cm.dispose()
        }
    }
};