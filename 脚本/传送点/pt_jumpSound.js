function enter() {
    var b = cm.getPortal().getId();
    var a = cm.getPortal().getName();
    cm.fieldEffect_PlayFieldSound("Sound/Game.img/MonsterBattleDraw", 100);
    if (b == 9) {
        cm.spawnMobLimit(8240056, 1, -1022, -572, 7);
        cm.spawnMobLimit(8240056, 1, -683, -1112, 7)
    } else {
        if (b == 10) {
            cm.spawnMobLimit(8240056, 1, 835, -1652, 8)
        }
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
            cm.sendOk("这个传送点的脚本尚未修复。\r\n脚本位于： 脚本/传送点/pt_jumpSound.js ", 0)
        } else {
            cm.dispose()
        }
    }
};