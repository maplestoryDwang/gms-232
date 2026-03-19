function enter() {
    var a = cm.getMapId();
    if (a == 350112000) {
        cm.openScriptNpc()
    } else {
        if (cm.getMap().countMonsterById(8240134) == 0) {
            cm.warp(a + 100, 0, false)
        } else {
            cm.playerMessage(5, "还有怪物没有消灭干净。");
            cm.playerMessage(-1, "还有怪物没有消灭干净。")
        }
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
                    cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) * 3);
                    cm.forceCompleteQuest(33923);
                    cm.gainExp(Math.pow(cm.getLevel(), 3) * 3);
                    cm.updateInfoQuest(33960, "33920=1;33921=1;33922=1;33923=1");
                    cm.inGameDirectionEvent_AskAnswerTime(3000);
                    cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100)
                } else {
                    if (status === a++) {
                        cm.setPartner(0, 1540784, 0, 0);
                        cm.setPartner(0, 1540785, 0, 0);
                        cm.setPartner(0, 1540786, 0, 0);
                        cm.dispose();
                        cm.warp(350112100, 0, false);
                        cm.setInGameDirectionMode(false, true, false)
                    }
                }
            }
        }
    }
};