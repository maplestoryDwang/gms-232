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
            if (cm.isQuestActive(23970)) {
                cm.forceStartQuest(23982, "1");
                cm.sendNormalTalk("#i3800091#石头中间里好像关着一个小小的生物。虽然试图进去，但门关着。", 0, 2159304, false, true);
                cm.dispose()
            } else {
                if (cm.isQuestActive(23971)) {
                    cm.playerMessage(5, "救出矿石吞噬者宝宝。");
                    cm.warp(931020030, 0, false);
                    cm.dispose()
                } else {
                    cm.dispose()
                }
            }
        }
    }
};