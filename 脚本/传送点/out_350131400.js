function enter() {
    if (cm.getMap().getNumMonsters() == 0) {
        var a = cm.getMapId();
        if (a == 350131600) {
            cm.openScriptNpc()
        } else {
            cm.warp(a + 100, 1)
        }
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
                    cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) * 2);
                    cm.forceCompleteQuest(34004);
                    cm.gainExp(Math.pow(cm.getLevel(), 3) * 2);
                    cm.updateInfoQuest(33963, "34001=1;34002=1;34003=1;34004=1");
                    cm.inGameDirectionEvent_AskAnswerTime(3000);
                    cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100)
                } else {
                    if (status === a++) {
                        cm.dispose();
                        cm.setInGameDirectionMode(false, true, false);
                        cm.warp(350131650, 0, false)
                    }
                }
            }
        }
    }
};