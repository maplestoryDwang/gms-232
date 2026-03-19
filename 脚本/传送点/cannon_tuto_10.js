function enter() {
    cm.openScriptNpc()
}
var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

function action(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.npc_ChangeController(1096006, "oid=226772", -145, 150, 25, -195, -95, 1, false, 0, false);
            cm.npc_ChangeController(1096004, "oid=226773", 10, 93, 15, 10, 60, 1, false, 0, false);
            cm.curNodeEventEnd(true);
            cm.eventSKill(0);
            cm.setInGameDirectionMode(false, true, false);
            cm.setStandAloneMode(false);
            cm.dispose()
        }
    }
};