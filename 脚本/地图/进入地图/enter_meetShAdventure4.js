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
            cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
            cm.setInGameDirectionMode(false, true, false);
            cm.dispose()
        }
    }
};