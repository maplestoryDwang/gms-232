var status = -1;
var selectionLog = [];
function start() {
    action(1, 0, 0);
}
function action(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return;
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose();
    } else {
        if (status === a++) {
            if (cm.isQuestActive(34752)) {
                cm.setPartner(1, 3002110, 80002360, 0);
            }
            if (cm.isQuestActive(39566)) {
                cm.spawnNpc(3001683);
                cm.setPartner(1, 3001683, 80002800, 0);
            }
            if (cm.getNumberFromQuestInfo(39566, 'gochi1') > 0) {
                cm.setPartner(1, 3001668, 80002806, 0);
            }
            if (cm.getNumberFromQuestInfo(39566, 'gochi2') > 0) {
                cm.setPartner(1, 3001649, 80002807, 0);
            }
            cm.dispose();
        }
    }
}