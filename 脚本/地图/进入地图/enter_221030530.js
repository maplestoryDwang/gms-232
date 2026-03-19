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
            if (cm.getQuestStatus(3478) > 0 && !cm.isQuestFinished(3487)) {
                cm.setPartner(1, 2052032, 80002245, 0)
            }
            if (cm.isQuestActive(39564)) {
                cm.spawnNpc(3001683);
                cm.setPartner(1, 3001683, 80002800, 0)
            }
            cm.dispose()
        }
    }
}

function start() {
    status = -1;
    action(1, 0, 0)
};