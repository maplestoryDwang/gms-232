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
            cm.obstacleFallRepeat(14, 33, 34, 10);
            cm.getMap().getReactorById(3012001).setDelay(0);
            cm.getMap().getReactorById(3012002).setDelay(0);
            cm.getMap().getReactorById(3012003).setDelay(0);
            cm.getPlayer().scheduleWarpTask(5 * 60, 301000000, 0);
            cm.dispose()
        }
    }
}

function start() {
    status = -1;
    action(1, 0, 0)
};