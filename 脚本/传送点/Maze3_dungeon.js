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
            if (cm.isQuestActive(35727)) {
                cm.askMenu("进去前面的祭坛看看吧？\r\n#r\r\n※需要20分钟，中途无法离开。#k\r\n\r\n#b#L0#挑战觉醒希拉#l#k\r\n#L1#现在不去。#l", 24, 0)
            } else {
                if (cm.getParty() == null) {
                    cm.PartyAutoOn()
                }
                if (cm.isQuestActive(35730)) {
                    cm.dispose();
                    cm.openNpc(3003810, "觉醒希拉_剧情模式")
                } else {
                    cm.dispose();
                    cm.openNpc(3003810, "BOSS_觉醒希拉入场")
                }
            }
        } else {
            if (status === b++) {
                if (c == 0) {
                    var a = cm.getEventManager("痛苦迷宫_核心东边");
                    a.startInstance(cm.getParty(), cm.getMap());
                    cm.dispose()
                } else {
                    cm.dispose()
                }
            }
        }
    }
};