var status = -1;
var selectionLog = [];
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
            if (cm.isQuestActive(3489)) {
                cm.setPartner(0, 2052036, 80002246, 1);
            } else {
                if (cm.isQuestFinished(3489) && !cm.isQuestFinished(3490)) {
                    cm.setPartner(0, 2052037, 80002246, 1);
                }
            }
            cm.dispose();
        }
    }
}
function start() {
    status = -1;
    action(1, 0, 0);
}