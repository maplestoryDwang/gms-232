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
            if (cm.isQuestActive(35706) || cm.isQuestActive(35708)) {
                cm.askMenu("进去痛苦迷宫看看吧？\r\n#r\r\n※需要20分钟，中途无法离开。\r\n※只能在单人状态下进入副本。#k\r\n\r\n#b#L0#进入痛苦迷宫内部副本#l#k\r\n#L1#现在不去。#l", 24, 0)
            } else {
                cm.warp(450011430, 1);
                cm.dispose()
            }
        } else {
            if (status === a++) {
                if (b == 0) {
                    cm.getEventManager("痛苦迷宫_外围").startInstance(cm.getPlayer(), cm.getMap());
                    cm.playerMessage(5, "前往痛苦迷宫。");
                    cm.dispose()
                } else {
                    cm.dispose()
                }
            }
        }
    }
};