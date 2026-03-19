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
            if (cm.getMapId() > 867147100) {
                cm.askMenu("嘿，队长！你要去哪儿啊？回总部你说一声就行。#b\r\n#L0# 前往上层#l\r\n#L1# 回到远征队本部#l", 4, 9401058)
            } else {
                cm.warp(867147001, 3, false);
                cm.dispose()
            }
        } else {
            if (b == 0) {
                cm.warp(cm.getMapId() - 100, "AbyssDown")
            } else {
                cm.warp(867147001, 3, false)
            }
            cm.dispose()
        }
    }
};