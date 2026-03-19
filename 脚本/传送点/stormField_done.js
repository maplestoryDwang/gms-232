function enter() {
    if (cm.getMap().getNumMonsters() == 0) {
        cm.updateInfoQuest(32628, "anger=1;check1=clear;nothere =1;arin=1;bang1=1;guard1=1");
        cm.warp(302050400, 0, false)
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
            cm.sendOk("这个传送点的脚本尚未修复。\r\n脚本位于： 脚本/传送点/stormField_done.js ", 0)
        } else {
            cm.dispose()
        }
    }
};