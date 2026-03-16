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
            cm.showMapEffect(true, 5120026, "需在3分钟内所有队员通过障碍物，进入天空巢穴!", 15, false);
            cm.dispose()
        }
    }
};