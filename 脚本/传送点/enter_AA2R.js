function enter() {
    if (cm.isQuestFinished(64090)) {
        cm.openScriptNpc()
    } else {
        cm.warp(867201980, 0)
    }
}
var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

function action(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.askMenu_Bottom("#face4#现在就必须坐上小石逃走！#b\r\n#L0#现在马上出发吧。#l\r\n#L1#等下，整备一下再出发吧。#l", 36, 9400580)
        } else {
            if (status === a++) {
                cm.dispose();
                if (b == 0) {
                    cm.openNpc(0, "副本_莫奈德_Act2_探索森林七")
                }
            }
        }
    }
};