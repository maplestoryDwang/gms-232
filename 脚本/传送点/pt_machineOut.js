function enter() {
    var b = cm.getPortal().getId();
    var a = cm.getPortal().getName();
    cm.openScriptNpc()
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
            cm.askMenu_Bottom("队长，我们回到避难处吧？\r\n#b#L0#返回。#l\r\n#L1#再过一会儿。#l", 37, 1540502);
            cm.spawnMobLimit(8240011, 1, -367, -362, 100)
        } else {
            if (status === a++) {
                cm.dispose();
                cm.warp(350040100, 1, false)
            }
        }
    }
};