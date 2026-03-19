function enter() {
    if (cm.getMap().getNumMonsters() == cm.getMap().countMonsterById(8645120)) {
        if (cm.getMapId() == 993145300) {
            cm.warp(993141012, 0, false)
        } else {
            cm.warp(cm.getMapId() + 100, 0, false)
        }
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
            cm.sendOk("这个传送点的脚本尚未修复。\r\n脚本位于： 脚本/传送点/east_993145100.js ", 0)
        } else {
            cm.dispose()
        }
    }
};