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
            cm.askYesNo_Bottom("要回到原先所在的地图吗？", 56, 0)
        } else {
            if (status === a++) {
                cm.playerMessage(5, "前往操纵室。");
                cm.dispose();
                cm.warp(221030900, 0, false)
            }
        }
    }
};