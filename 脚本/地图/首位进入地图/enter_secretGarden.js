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
            if (cm.isQuestActive(31146)) {
                cm.spawnMobLimit(8610016, 1, -480, 130, 100);
                cm.spawnMobLimit(8610016, 1, -400, 130, 100);
                cm.spawnMobLimit(8610016, 1, -320, 130, 100);
                cm.spawnMobLimit(8610016, 1, -240, 130, 100);
                cm.spawnMobLimit(8610016, 1, -160, 130, 100);
                cm.spawnMobLimit(8610016, 1, -80, 130, 100);
                cm.spawnMobLimit(8610016, 1, -40, 130, 100);
                cm.spawnMobLimit(8610016, 1, 80, 130, 100);
                cm.spawnMobLimit(8610016, 1, 160, 130, 100);
                cm.spawnMobLimit(8610016, 1, 240, 130, 100);
                cm.spawnMobLimit(8610016, 1, 320, 130, 100);
                cm.spawnMobLimit(8610016, 1, 400, 130, 100);
                cm.spawnMobLimit(8610016, 1, 480, 130, 100);
                cm.spawnMobLimit(8610016, 1, 560, 130, 100);
                cm.spawnMobLimit(8610016, 1, 640, 130, 100);
                cm.getMap().startSimpleMapEffect("消灭南哈特周围的怪物，救出南哈特！", 5120025)
            }
            cm.dispose()
        }
    }
};