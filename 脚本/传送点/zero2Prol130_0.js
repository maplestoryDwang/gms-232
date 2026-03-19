function enter() {
    var b = cm.getPortal().getId();
    var a = cm.getPortal().getName();
    if (b == 1) {
        cm.warp(321190120, 1, false)
    } else {
        cm.playerMessage(5, "这里没什么好看的了。");
        cm.playerMessage(-1, "这里没什么好看的了。")
    }
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
            cm.sendOk("这个传送点的脚本尚未修复。\r\n脚本位于： 脚本/传送点/zero2Prol130_0.js ", 0)
        } else {
            cm.dispose()
        }
    }
};