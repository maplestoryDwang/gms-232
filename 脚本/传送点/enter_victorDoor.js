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
            cm.askMenu("这里是维克特的工坊。你要入场吗？#b\r\n#b#L0#入场。#l\r\n#L1#不入场。#l", 0, 3001025)
        } else {
            if (status === a++) {
                cm.dispose();
                cm.openNpc("暴君城堡_维克特的工坊")
            }
        }
    }
};