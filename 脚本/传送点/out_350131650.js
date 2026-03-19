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
            cm.askMenu_Bottom("两张门禁卡都已经到手了，\r\n那，现在就开门进去吧？\r\n#b#L0#开门。#l\r\n#L1#不开门。#l", 37, 1540879)
        } else {
            if (status === a++) {
                cm.dispose();
                cm.warp(350131700, 0, false)
            }
        }
    }
};