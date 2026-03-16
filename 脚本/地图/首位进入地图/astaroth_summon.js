var status = -1;
var selectionLog = [];

function action(f, e, d) {
    if (status == 0 && f == 0) {
        cm.dispose();
        return
    }(f == 1) ? status++ : status--;
    selectionLog[status] = d;
    var c = -1;
    if (status <= c++) {
        cm.dispose()
    } else {
        if (status === c++) {
            var b = cm.getEventInstance();
            if (b != null) {
                var a = b.getEventManager();
                cm.getMap().spawnMonsterOnGroundBelow(a.getMonster(9400633), new java.awt.Point(600, -26))
            }
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