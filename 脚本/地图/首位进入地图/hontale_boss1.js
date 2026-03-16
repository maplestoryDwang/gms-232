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
            cm.killAllMob();
            if (cm.getMapId() == 240060002) {
                cm.spawnMobLimit(8810200, 1, 880, 230, 100)
            } else {
                if (cm.getMapId() == 240060000) {
                    cm.spawnMobLimit(8810000, 1, 880, 230, 100)
                } else {
                    if (cm.getMapId() == 240060001) {
                        cm.spawnMobLimit(8810100, 1, 880, 230, 100)
                    }
                }
            }
            cm.dispose()
        }
    }
};