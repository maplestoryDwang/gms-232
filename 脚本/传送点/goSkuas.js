function enter() {
    cm.openScriptNpc()
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
        if (status === a++) {
            if (cm.getMapId() == 867202600) {
                cm.askMenu_Bottom("#face0#木材还不太够，你有急事吗？#b\r\n#L0#继续狩猎。#l\r\n#L1#先返回村庄。#l", 36, 9400589)
            } else {
                if (cm.isQuestActive(64107) && cm.haveItem(4036389, 50) && !cm.isQuestFinished(64108)) {
                    cm.dispose();
                    cm.warp(867202652, 0)
                } else {
                    cm.dispose();
                    cm.warp(867202200, 2)
                }
            }
        } else {
            if (status === a++) {
                if (b == 0) {
                    cm.dispose()
                } else {
                    cm.playerMessage(5, "返回斯库亚斯入口。");
                    cm.sendNormalTalk_Bottom("#face0#没办法了，还是先回去吧。", 36, 9400589, false, true)
                }
            } else {
                if (status === a++) {
                    cm.warp(867202200, 2, false);
                    cm.dispose()
                }
            }
        }
    }
};