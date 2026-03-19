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
            cm.dispose();
            if (cm.getQuestStatus(100441) == 1) {
                cm.warp(993175570, 2, false)
            }
            if (cm.getQuestStatus(100442) == 1) {
                cm.npc_ChangeController(9062243, "oid=441544", 148, 135, 1, 98, 198, 1, false, 0, false);
                cm.OnStartNavigation(993175550, 0, "pt_go993175570", 0)
            }
            if (cm.getQuestStatus(100442) == 1) {
                cm.warp(993175570, 1, false)
            }
        }
    }
};