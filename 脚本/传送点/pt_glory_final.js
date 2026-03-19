function enter() {
    if (cm.getMap().getNumMonsters() <= 0) {
        cm.openScriptNpc()
    } else {
        cm.playerMessage(5, "还有怪物没有消灭干净。");
        cm.playerMessage(-1, "还有怪物没有消灭干净。")
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
            cm.askYesNo("消灭了时空裂缝内的所有怪物。\r\n时空裂缝即将消失，赶快出去吧。", 2, 0)
        } else {
            if (status === a++) {
                cm.setNumberForQuestInfo(500799, "state", 2);
                cm.playerMessage(5, "消灭了裂缝内的所有怪物，时空裂缝消失了。去向南哈特报告吧。");
                cm.openUI(1241);
                cm.dispose();
                cm.warp(cm.getNumberFromQuestInfo(500798, "map"), "gloryMission")
            }
        }
    }
};