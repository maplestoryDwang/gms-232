function enter() {
    var b = cm.getPortal().getId();
    var a = cm.getPortal().getName();
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
            cm.sendOkS("现在不是乱逛的时候，得赶紧抢修好飞机才能出发。")
        } else {
            cm.dispose()
        }
    }
};