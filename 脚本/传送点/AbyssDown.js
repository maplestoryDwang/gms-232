function enter() {
    if (cm.getMapId() >= 867147500 + cm.getNumberFromQuestInfo(64753, "rank") * 100) {
        cm.sendNormalTalk("嘿，队长！你还不能下去。玛玛千叮咛万嘱咐，说达不到资格的人千万不能下去。骚瑞！", 4, 9401058, false, false)
    } else {
        cm.warp(cm.getMapId() + 100, "AbyssUP")
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
            cm.sendOk("这个传送点的脚本尚未修复。\r\n脚本位于： 脚本/传送点/AbyssDown.js ", 0)
        } else {
            cm.dispose()
        }
    }
};