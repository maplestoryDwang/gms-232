function enter() {
    cm.openScriptNpc()
}
var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

function action(e, d, c) {
    if (status == 0 && e == 0) {
        cm.dispose();
        return
    }(e == 1) ? status++ : status--;
    selectionLog[status] = c;
    var b = -1;
    if (status <= b++) {
        cm.dispose()
    } else {
        if (status === b++) {
            if (cm.isQuestActive(35724)) {
                cm.askMenu("进去痛苦迷宫看看吧？\r\n#r\r\n※需要20分钟，中途无法离开。#k\r\n\r\n#b#L0#进入痛苦迷宫中心副本#l#k\r\n#L1#现在不去。#l", 24, 0)
            } else {
                cm.dispose();
                cm.warp(450011540, 1, false)
            }
        } else {
            if (status === b++) {
                cm.dispose();
                if (c == 0) {
                    cm.playerMessage(5, "前往痛苦迷宫。");
                    var a = cm.getEventManager("痛苦迷宫_中心");
                    a.startInstance(cm.getPlayer(), cm.getMap())
                }
            }
        }
    }
};