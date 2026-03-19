function enter() {
    cm.npc_ChangeController(1540453, "oid=286763940", 1231, 2, 25, 1181, 1281, 0, true, 0, false);
    cm.npc_SetSpecialAction("oid=286763940", "summon", 0, 0);
    cm.npcMove(1540453, 0, 3000, 0);
    cm.spawnMobLimit(8240125, 1, 848, 2, 1)
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
            cm.sendOk("这个传送点的脚本尚未修复。\r\n脚本位于： 脚本/传送点/col3_350063004.js ", 0)
        } else {
            cm.dispose()
        }
    }
};