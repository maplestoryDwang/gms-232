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
            if (cm.getMapId() == 240060102) {
                cm.spawnMobLimit(8810201, 1, -350, 230, 100)
            } else {
                if (cm.getMapId() == 240060100) {
                    cm.spawnMobLimit(8810001, 1, -350, 230, 100)
                } else {
                    if (cm.getMapId() == 240060101) {
                        cm.spawnMobLimit(8810101, 1, -350, 230, 100)
                    }
                }
            }
            cm.dispose()
        }
    }
};