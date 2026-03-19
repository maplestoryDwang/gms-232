function enter() {
    if (cm.isQuestActive(30002)) {
        cm.updateInfoQuest(30002, "outportal=2");
        cm.openScriptNpc()
    } else {
        if (cm.isQuestActive(30003)) {
            cm.warp(105010200, 0)
        } else {
            cm.warp(105010000, 0)
        }
    }
    return true
}
var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

function action(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNextSNoESC("果然有出口。应该把这一事实告诉少女。");
            cm.dispose()
        } else {
            cm.dispose()
        }
    }
};