var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

function action(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.spawnMobLimit(8880006, 1, 1350, -1380, 100);
            cm.obstacleFallRepeat(4, 1, 3, 5);
            cm.dispose()
        }
    }
};