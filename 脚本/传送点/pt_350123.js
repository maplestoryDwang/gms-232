function enter() {
    var a = cm.getMap().getNumMonsters();
    var b = parseInt(cm.getMapId());
    if (a <= 0) {
        if (b == 350123500) {
            cm.openScriptNpc()
        } else {
            cm.warp(350123500, 0, false)
        }
    } else {
        cm.getTopMsgFont("还有敌人没有消灭. ", 3, 20, 20, 0)
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
                cm.inGameDirectionEvent_AskAnswerTime(1000)
            } else {
                if (status === a++) {
                    cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) * 3);
                    cm.forceCompleteQuest(33976);
                    cm.gainExp(Math.pow(cm.getLevel(), 3) * 3);
                    cm.updateInfoQuest(33962, "33971=1;33972=1;33973=1;33974=1;33975=1;33976=1");
                    cm.inGameDirectionEvent_AskAnswerTime(3000);
                    cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100)
                } else {
                    if (status === a++) {
                        cm.dispose();
                        cm.warp(350123600, 0, false);
                        cm.setInGameDirectionMode(false, true, false)
                    }
                }
            }
        }
    }
};