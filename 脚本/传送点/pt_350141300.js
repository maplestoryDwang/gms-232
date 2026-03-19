function enter() {
    if (cm.getMap().countMonsterById(8240179, 8240180, 8240181) == 0) {
        cm.openScriptNpc()
    } else {
        cm.playerMessage(5, "还有怪物没有消灭干净。");
        cm.playerMessage(-1, "还有怪物没有消灭干净。")
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
            cm.setInGameDirectionMode(true, false, true);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
            cm.inGameDirectionEvent_AskAnswerTime(500)
        } else {
            if (status === a++) {
                cm.inGameDirectionEvent_AskAnswerTime(500)
            } else {
                if (status === a++) {
                    cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) * 4);
                    cm.forceCompleteQuest(34013);
                    cm.gainExp(Math.pow(cm.getLevel(), 3) * 4);
                    cm.updateInfoQuest(33964, "34011=1;34012=1;34013=1");
                    cm.inGameDirectionEvent_AskAnswerTime(3000);
                    cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100)
                } else {
                    if (status === a++) {
                        cm.dispose();
                        cm.warp(350142000, 0, true)
                    }
                }
            }
        }
    }
};