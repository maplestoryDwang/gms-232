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
            cm.askMenu_Bottom("跟踪苏巴尼。\r\n#b#L0#走。#l\r\n#L1#等等。#l", 56, 0)
        } else {
            if (status === a++) {
                cm.dispose();
                if (b == 0) {
                    cm.playerMessage(5, "你必须消灭所有怪兽才能前往下一区域。");
                    cm.openNpc("克拉齐亚_第二幕_战斗4")
                }
            }
        }
    }
};