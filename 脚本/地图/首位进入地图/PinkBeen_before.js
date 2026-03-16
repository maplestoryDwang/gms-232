var status = -1;
var selectionLog = [];

function start() {
    status = -1;
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
            var d = cm.getMap();
            d.resetFully();
            d.spawnNpc(2141000, new java.awt.Point(-190, -42))
        }
    }
    cm.dispose()
};