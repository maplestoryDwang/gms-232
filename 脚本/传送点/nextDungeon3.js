var map1 = [322011000, 323031000, 323043000, 324031000, 324033000, 325031000, 325043000, 326022000, 326031000, 326033000, 326041000, 327033000, 328022000];
var map2 = [321132000, 321142000, 328031000, 328033000];

function enter() {
    if (cm.getMap().getNumMonsters() >= 0) {
        var a = cm.getMapId();
        if (map1.indexOf(a) >= 0) {
            cm.warp(a + 3000, 1)
        } else {
            if (map2.indexOf(a) >= 0) {
                cm.warp(a + 3000, 2)
            } else {
                cm.warp(a + 3000, 3)
            }
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
            cm.sendOk("这个传送点的脚本尚未修复。\r\n脚本位于： 脚本/传送点/nextDungeon3.js ", 0)
        } else {
            cm.dispose()
        }
    }
};