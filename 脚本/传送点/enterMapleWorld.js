function enter() {
    var b = cm.getPortal().getId();
    var a = cm.getPortal().getName();
    if (cm.isQuestFinished(40801) && cm.getQuestStatus(40805) == 0) {
        cm.warp(940040000, 0, false)
    } else {
        cm.openNpc(2400025)
    }
}
var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

function action(e, c, b) {
    if (status == 0 && e == 0) {
        cm.dispose();
        return
    }(e == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            var d = "可以移动到冒险岛世界的传送门。要去哪里呢？\r\n#b#L0#射手村#l \r\n#b#L1#神木村#l ";
            if (cm.getQuestStatus(40805) > 0) {
                d += "\r\n#b#L2#万神殿#l"
            }
            cm.askMenu(d, 0, 2400025)
        } else {
            if (status === a++) {
                if (selectionLog[1] == 0) {
                    cm.sendNormalTalk("移动到射手村。", 1, 2400025, false, true)
                } else {
                    if (selectionLog[1] == 1) {
                        cm.sendNormalTalk("移动到神木村。", 1, 2400025, false, true)
                    } else {
                        cm.sendNormalTalk("移动到万神殿。", 1, 2400025, false, true)
                    }
                }
            } else {
                if (status === a++) {
                    if (cm.getNumberFromQuestCustomData(40068) == 0) {
                        cm.forceStartQuest(40068, "1")
                    }
                    cm.dispose();
                    if (selectionLog[1] == 0) {
                        cm.warp(100000000, 2, false)
                    } else {
                        if (selectionLog[1] == 1) {
                            cm.warp(240000000, 2, false)
                        } else {
                            cm.warp(400000000, 0, false)
                        }
                    }
                }
            }
        }
    }
};