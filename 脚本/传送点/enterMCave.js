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
            if (cm.isQuestActive(21201)) {
                cm.forceStartQuest(21203, "0");
                cm.playerMessage(5, "找回过去的记忆吧！");
                cm.warp(914021000, 0, false);
                cm.dispose()
            } else {
                if (cm.isQuestActive(21302)) {
                    cm.warp(914022100, 2, false);
                    cm.forceStartQuest(21203, "1");
                    cm.dispose()
                }
            }
        }
    }
};