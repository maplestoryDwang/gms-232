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
            cm.askMenu_Bottom("使用地下通道进入守护者的要塞？那是条捷径。\r\n#b#L0#用吧。#l\r\n#L1#等下。#l", 56, 0)
        } else {
            if (status === a++) {
                cm.playerMessage(5, "你必须消灭所有怪兽才能前往下一区域。");
                cm.dispose();
                cm.openNpc("克拉齐亚_第二幕_战斗1")
            }
        }
    }
};