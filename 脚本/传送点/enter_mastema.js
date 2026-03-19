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
            if (cm.isQuestActive(23210)) {
                cm.warp(931050100, 1, false);
                cm.getPlayer().scheduleWarpTask(1 * 1 * 18, cm.getMap(931050110));
                cm.addPopupSay(0, 5000, "击杀后等待时间结束。")
            } else {
                if (cm.isQuestActive(23213)) {
                    cm.warp(931050110, 1, false)
                }
            }
            cm.dispose()
        }
    }
};