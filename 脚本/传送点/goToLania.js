function enter() {
    cm.openScriptNpc()
}
var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

function action(e, c, b) {
    if (status == 0 && e == 0) {
        cm.dispose();
        return
    }(e == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            var d = cm.getJob();
            if (d == 2004 || d == 2700 || d == 2710 || d == 2711 || d == 2712) {
                cm.warp(101000101, 2)
            } else {
                cm.playerMessage(-1, "只有夜光法师才能进入。")
            }
            cm.dispose()
        }
    }
};