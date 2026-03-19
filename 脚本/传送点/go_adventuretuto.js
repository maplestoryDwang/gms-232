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
            if (cm.getMapId() == 4000012) {
                if (cm.isQuestFinished(32204)) {
                    cm.warp(4000013, 0, false);
                    return
                } else {
                    cm.sendNormalTalk("完成任务后再离开吧。", 16, 0, false, true)
                }
            } else {
                if (cm.getMapId() == 4000013) {
                    if (cm.isQuestFinished(32207)) {
                        cm.warp(4000014, 0, false);
                        return
                    } else {
                        cm.sendNormalTalk("完成任务后再离开吧。", 16, 0, false, true)
                    }
                } else {
                    if (cm.getMapId() == 4000014) {
                        if (cm.isQuestActive(32210) || cm.isQuestFinished(32210)) {
                            cm.warp(4000020, 0, false);
                            return
                        } else {
                            cm.sendNormalTalk("完成任务后再离开吧。", 16, 0, false, true)
                        }
                    }
                }
            }
            cm.dispose()
        }
    }
};