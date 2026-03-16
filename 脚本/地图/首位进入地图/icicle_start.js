var status = -1;
var selectionLog = [];

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
            cm.getMap().getReactorById(3032000).setDelay(0);
            cm.obstacleFallRepeat(3, 37, 38, 5);
            cm.dispose()
        } else {
            cm.dispose()
        }
    }
}

function start() {
    status = -1;
    action(1, 0, 0)
};