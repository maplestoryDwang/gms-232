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
            cm.askYesNo("氧想要离开吗，我可以送你去安全的地方。", 9020004)
        } else {
            if (status === a++) {
                cm.warp(923040000, 0, false);
                cm.dispose()
            }
        }
    }
};