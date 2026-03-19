function enter() {
    if (cm.getNumberFromQuestInfo(63485, "connecting") == 0) {
        cm.playerMessage(-1, "没有和机器人连接，前往下一层。")
    } else {
        cm.openScriptNpc()
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
            cm.updateInfoQuest(63510, "d=1;e=2");
            cm.updateInfoQuest(63506, "LastClear=ATB2c");
            cm.curNodeEventEnd(true);
            cm.eventSKill(0);
            cm.setInGameDirectionMode(true, false, true);
            cm.setStandAloneMode(true);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
            cm.fieldEffect_ScreenMsg("monsterPark/stageEff/stage");
            cm.fieldEffect_ScreenMsg("monsterPark/stageEff/number/2");
            cm.fieldEffect_ScreenMsg("monsterPark/clear");
            cm.inGameDirectionEvent_AskAnswerTime(3200)
        } else {
            if (status === a++) {
                cm.updateInfoQuest(64949, "O_ATB1=1;O_ATB2=0");
                cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) * 2);
                cm.updateInfoQuest(64949, "O_ATB1=1;O_ATB2=1");
                cm.gainExp(Math.pow(cm.getLevel(), 3) * 2);
                cm.inGameDirectionEvent_AskAnswerTime(2200);
                cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100)
            } else {
                if (status === a++) {
                    cm.setStandAloneMode(false);
                    cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                    cm.warp(867142400, 0, false);
                    cm.eventSKill(0);
                    cm.setInGameDirectionMode(false, true, false);
                    cm.updateInfoQuest(64950, "check2=b2_03;check3=b3_00;check=b1_03");
                    cm.dispose()
                }
            }
        }
    }
};