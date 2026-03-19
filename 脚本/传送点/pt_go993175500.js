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
            if (cm.getMapId() == 993175510) {
                cm.warp(993175500, 2, false);
                cm.OnStartNavigation(993175500, 0, "pt_go993175400", 0)
            } else {
                if (cm.getQuestStatus(100435) == 1) {
                    cm.OnStartNavigation(993175500, 0, "pt_go993175510", 0)
                }
                cm.warp(993175500, 0, false)
            }
            cm.dispose()
        }
    }
};