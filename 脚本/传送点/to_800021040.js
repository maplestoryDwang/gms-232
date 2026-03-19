function enter() {
    cm.warp(800021040, 0, false);
    cm.spawnMobLimit(9400031, 1, 1527, -715, 100);
    cm.spawnMobLimit(9400031, 1, 1038, -715, 100);
    cm.spawnMobLimit(9400031, 1, 1255, 95, 100);
    cm.spawnMobLimit(9400031, 1, 1343, -355, 100);
    cm.spawnMobLimit(9400031, 1, 1119, -355, 100);
    cm.spawnMobLimit(9400031, 1, 591, -355, 100);
    cm.spawnMobLimit(9400031, 1, 641, -715, 100);
    cm.spawnMobLimit(9400031, 1, 27, -715, 100);
    cm.spawnMobLimit(9400031, 1, 318, -355, 100);
    cm.spawnMobLimit(9400031, 1, 1640, 35, 100);
    cm.spawnMobLimit(9400031, 1, 1794, -715, 100);
    cm.spawnMobLimit(9400031, 1, 1954, -235, 100);
    cm.spawnMobLimit(9400031, 1, 137, -715, 100);
    cm.spawnMobLimit(9400031, 1, 694, -355, 100);
    cm.spawnMobLimit(9400031, 1, -244, -715, 100);
    cm.playerMessage(-1, "必须消灭所有怪物，才能移动到下个地点。");
    cm.spawnMobLimit(9400031, 1, -92, -715, 100)
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
            cm.sendOk("这个传送点的脚本尚未修复。\r\n脚本位于： 脚本/传送点/to_800021040.js ", 0)
        } else {
            cm.dispose()
        }
    }
};