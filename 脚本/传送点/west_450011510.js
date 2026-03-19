function enter() {
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
            cm.askMenu_Bottom("从这边走就能看到坠落地点。\r\n\r\n#b#L0#前往坠落地点。#l#k\r\n#L1#前往#m450011500#。#l", 56, 0)
        } else {
            if (status === a++) {
                if (b == 0) {
                    cm.dispose();
                    cm.warp(993063009, 0, false)
                } else {
                    cm.dispose();
                    cm.warp(450011500, 2, false)
                }
            }
        }
    }
};