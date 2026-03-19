function enter() {
    var c = cm.getPortal().getId();
    var a = cm.getPortal().getName();
    if (cm.getMap().getNumMonsters() == 0) {
        var b = cm.getMapId();
        if (b == 350058300) {
            cm.openScriptNpc()
        } else {
            cm.warp(b + 50, 1)
        }
    } else {
        cm.playerMessage(-1, "必须消灭区域内的所有怪物才能离开。");
        cm.playerMessage(5, "必须消灭区域内的所有怪物才能离开。")
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
            cm.sendNormalTalk_Bottom("等等！\r\n这前面充满了可疑的毒气。", 37, 1540453, false, true)
        } else {
            if (status === a++) {
                cm.updateInfoQuest(33250, "on=1");
                cm.dispose()
            }
        }
    }
};