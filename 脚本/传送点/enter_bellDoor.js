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
            cm.askMenu("你想进入哪个地方？#b\r\n#b#L0#进入贝德罗斯的办公室。#l#b\r\n#b#L1#进入赫里希安最上层入口。#l\r\n#L2#不入场。#l", 0, 3001023)
        } else {
            if (status === a++) {
                cm.dispose();
                if (b == 0) {
                    cm.openNpc("暴君城堡_贝德罗斯的办公室")
                } else {
                    if (b == 1) {
                        cm.warp(401060000, 2)
                    }
                }
            }
        }
    }
};