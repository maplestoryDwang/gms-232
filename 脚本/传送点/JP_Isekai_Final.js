function enter() {
    var a = cm.getMapId();
    if (a >= 867131800 && a <= 867131880 || cm.getMap().getNumMonsters() == 0) {
        cm.openScriptNpc()
    } else {
        cm.playerMessage(-1, "还有怪物没有消灭干净。");
        cm.playerMessage(5, "还有怪物没有消灭干净。")
    }
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
            cm.curNodeEventEnd(true);
            cm.eventSKill(0);
            cm.setInGameDirectionMode(true, false, true);
            cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) * 12);
            cm.gainExp(Math.pow(cm.getLevel(), 3) * 12);
            cm.inGameDirectionEvent_AskAnswerTime(5000)
        } else {
            if (status === a++) {
                cm.addNumberForQuestInfo(500827, "QuestCount", 1);
                if (map >= 867131800 && map <= 867131880) {
                    cm.forceCompleteQuest(64672)
                } else {
                    cm.forceCompleteQuest(64671)
                }
                cm.eventSKill(0);
                cm.warp(867131600, 3, false);
                cm.setInGameDirectionMode(false, true, false);
                cm.dispose()
            }
        }
    }
};