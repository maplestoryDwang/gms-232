function enter() {
    cm.openScriptNpc()
}
var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

function action(d, b, a) {
    var c = em.getNumberProperty("state");
    if (c < 10) {
        cm.sendOkS("战斗还没结束，还不能离开。")
    } else {
        if (!cm.isQuestFinished(30070)) {
            if (cm.isQuestActive(30070)) {
                cm.warp(106030000, 0)
            } else {
                cm.sendOkS("我得把蘑菇大臣带回去才行。")
            }
        } else {
            cm.warp(106030600, 0)
        }
    }
    cm.dispose()
};