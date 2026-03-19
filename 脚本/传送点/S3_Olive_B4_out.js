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
            cm.updateInfoQuest(63508, "d=1;e=1");
            cm.updateInfoQuest(63506, "LastClear=ATB4c");
            cm.curNodeEventEnd(true);
            cm.eventSKill(0);
            cm.setInGameDirectionMode(true, false, true);
            cm.setStandAloneMode(true);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
            cm.fieldEffect_ScreenMsg("mirrorDungeon/clear");
            cm.inGameDirectionEvent_AskAnswerTime(3200)
        } else {
            if (status === a++) {
                cm.updateInfoQuest(64949, "O_ATB1=1;O_ATB2=1;O_ATB3=1;O_ATB4=0");
                cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) * 2);
                cm.updateInfoQuest(64949, "O_ATB1=1;O_ATB2=1;O_ATB3=1;O_ATB4=1");
                cm.gainExp(Math.pow(cm.getLevel(), 3) * 2);
                cm.inGameDirectionEvent_AskAnswerTime(2200);
                cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100)
            } else {
                if (status === a++) {
                    cm.setStandAloneMode(false);
                    cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                    cm.eventSKill(0);
                    cm.warp(867142003, 0, false);
                    cm.setInGameDirectionMode(false, true, false);
                    cm.forceStartQuest(64915, "");
                    cm.updateInfoQuest(64935, "olive=1");
                    cm.updateInfoQuest(63481, "s10=1");
                    cm.updateInfoQuest(63484, "connect=-1");
                    cm.updateInfoQuest(64950, "check2=b2_03;check3=b3_03;check4=out;check=b1_03");
                    cm.dispose()
                }
            }
        }
    }
};