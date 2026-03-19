var map2 = [321145000, 322014000, 323046000, 325046000, 326034000, 326044000, 327036000];
var map3 = [321135000, 322024000, 324034000, 324036000, 326036000, 328025000, 328034000];

function enter() {
    if (cm.getMap().getNumMonsters() >= 0) {
        var a = cm.getMapId();
        if (map3.indexOf(a) >= 0) {
            cm.warp(a - 3000, 3)
        } else {
            if (map2.indexOf(a) >= 0) {
                cm.warp(a - 3000, 2)
            } else {
                cm.warp(a - 3000, 1)
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
            cm.sendOk("这个传送点的脚本尚未修复。\r\n脚本位于： 脚本/传送点/beforeDungeon3.js ", 0)
        } else {
            cm.dispose()
        }
    }
};