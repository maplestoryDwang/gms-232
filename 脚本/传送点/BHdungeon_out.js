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
            cm.askMenu_Bottom("队长，确定要暂时撤退吗？\r\n#b#L0#撤退。#l\r\n#L1#继续前进。#l", 37, 1540502)
        } else {
            if (status === a++) {
                cm.dispose();
                if (b == 0) {
                    cm.warp(350011020, 1)
                }
            }
        }
    }
};