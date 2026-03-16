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
            if (cm.getMapId() == 1130020) {
                if (cm.isQuestFinished(32359)) {
                    cm.forceStartQuest(17900, "1");
                    cm.forceCompleteQuest(17900);
                    cm.playerMessage(5, "冒险之书任务已完成。");
                    cm.playerMessage(-1, "冒险之书任务已完成。");
                    cm.effect_OnUserEff("Effect/OnUserEff.img/RecordClear_BT/clear");
                    cm.warp(50000, 4, false);
                    cm.dispose()
                } else {
                    cm.playerMessage(-1, "还不能离开");
                    cm.dispose()
                }
            } else {
                cm.playerMessage(-1, "还不能离开");
                cm.dispose()
            }
        }
    }
};