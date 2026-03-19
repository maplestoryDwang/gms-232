function enter() {
    if (cm.getNumberFromQuestInfo(63485, "connecting") == 0) {
        cm.playerMessage(-1, "没有和机器人连接，无法记录存档点。")
    } else {
        cm.playerMessage(-1, "记录了存档点。");
        cm.updateInfoQuest(63529, "map=" + cm.getMapId() + ";pt=" + cm.getPortal().getName());
        cm.setNumberForQuestInfo(63529, "ptx", pos.x);
        cm.setNumberForQuestInfo(63529, "pty", pos.y)
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
            cm.sendOk("这个传送点的脚本尚未修复。\r\n脚本位于： 脚本/传送点/ckpoint.js ", 0)
        } else {
            cm.dispose()
        }
    }
};