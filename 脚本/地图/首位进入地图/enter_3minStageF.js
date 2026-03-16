var status = -1;
var selectionLog = [];

function action(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }
    cm.getMap().resetFully();
    var a = cm.getMapId();
    if (a == 867110150 || a == 867110350 || a == 867110600 || a == 867110650) {
        cm.spawnMobLimit(9410883, 1, 0, 116, 1)
    } else {
        cm.spawnMobLimit(9410883, 1, 0, 46, 1)
    }
    cm.dispose()
}

function start() {
    status = -1;
    action(1, 0, 0)
};