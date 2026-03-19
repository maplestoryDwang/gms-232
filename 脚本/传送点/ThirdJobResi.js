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
            if (cm.getPlayerCount(931000200) == 0) {
                if (cm.isQuestActive(24090)) {
                    cm.warp(931040010, 0, false)
                } else {
                    if (cm.isQuestActive(23033) || cm.isQuestActive(23034) || cm.isQuestActive(23035) || cm.isQuestActive(23164)) {
                        cm.warp(931000200, 0, false);
                        cm.killAllMob();
                        cm.spawnMobLimit(9001032, 1, 666, 18, 100)
                    }
                }
            } else {
                cm.getTopMsgFont("里面有人了请稍等一会。", 3, 20, 4, 0, 0)
            }
            cm.dispose()
        }
    }
};