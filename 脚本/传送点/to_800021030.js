function enter() {
    cm.warp(800021030, 0, false);
    cm.spawnMobLimit(9400033, 1, 1527, -715, 100);
    cm.spawnMobLimit(9400033, 1, 1038, -715, 100);
    cm.spawnMobLimit(9400033, 1, 1255, 95, 100);
    cm.spawnMobLimit(9400033, 1, 1343, -355, 100);
    cm.spawnMobLimit(9400033, 1, 1119, -355, 100);
    cm.spawnMobLimit(9400033, 1, 591, -355, 100);
    cm.spawnMobLimit(9400033, 1, 641, -715, 100);
    cm.spawnMobLimit(9400033, 1, 27, -715, 100);
    cm.spawnMobLimit(9400033, 1, 318, -355, 100);
    cm.spawnMobLimit(9400033, 1, 1616, -715, 100);
    cm.spawnMobLimit(9400033, 1, 1753, 35, 100);
    cm.playerMessage(-1, "必须消灭所有怪物，才能移动到下个地点。");
    cm.spawnMobLimit(9400033, 1, 2027, -715, 100);
    cm.spawnMobLimit(9400033, 1, 1948, -235, 100);
    cm.spawnMobLimit(9400033, 1, 1724, -715, 100);
    cm.spawnMobLimit(9400033, 1, 2169, 35, 100);
    cm.spawnMobLimit(9400033, 1, 2044, -715, 100);
    cm.spawnMobLimit(9400033, 1, 2000, -235, 100)
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
            cm.sendOk("这个传送点的脚本尚未修复。\r\n脚本位于： 脚本/传送点/to_800021030.js ", 0)
        } else {
            cm.dispose()
        }
    }
};