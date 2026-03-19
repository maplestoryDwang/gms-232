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
            cm.askMenu_Bottom("要前往新叶都市想办法帮助这位可怜的战士吗？\r\n#b#L0#走。#l\r\n#L1#等会儿。#l", 56, 0)
        } else {
            cm.dispose();
            if (b == 0) {
                cm.openNpc("克拉齐亚_第一幕_战斗2")
            }
        }
    }
};