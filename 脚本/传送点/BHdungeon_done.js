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
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, true, true);
            cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) / 5);
            cm.forceCompleteQuest(33136);
            cm.gainExp(Math.pow(cm.getLevel(), 3) / 5);
            cm.inGameDirectionEvent_AskAnswerTime(3200);
            cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100)
        } else {
            if (status === a++) {
                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                cm.inGameDirectionEvent_AskAnswerTime(500)
            } else {
                if (status === a++) {
                    cm.dispose();
                    cm.warp(350011400, 0, false);
                    cm.setInGameDirectionMode(false, true, false)
                }
            }
        }
    }
};