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
            if (b != null && b.getProperty("boss") != null && b.getProperty("boss").equals("0")) {
                var a = b.getEventManager();
                for (var c = 9800119; c < 9800125; c++) {
                    b.registerMonster(boss);
                    cm.getMap().spawnMonsterOnGroundBelow(a.getMonster(c), new java.awt.Point(cm.getMap().getPortal(2).getPosition()))
                }
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