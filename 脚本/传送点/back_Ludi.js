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
            cm.askMenu("你要去梦幻主题公园度过一段欢乐时光吗？现在就要回到玩具城吗？\r\n#b#L0#是，我现在就要立刻返回玩具城。#l\r\n#b#L1#我打算继续留在这里。#l#k", 4, 2192002)
        } else {
            if (status === a++) {
                cm.dispose();
                if (b == 0) {
                    cm.warp(220000000, 13, false);
                    cm.playerMessage(5, "前往玩具城。")
                }
            }
        }
    }
};