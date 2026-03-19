function enter() {
    if (cm.getMap().getNumMonsters() == 0) {
        cm.openScriptNpc()
    } else {
        cm.playerMessage(-1, "还有目标没有消灭干净。");
        cm.playerMessage(5, "还有目标没有消灭干净。")
    }
}
var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

function action(d, c, b) {
    if (d === 0) {
        status--
    } else {
        status++
    }
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false);
            cm.setStandAloneMode(true);
            cm.fieldEffect_PlayFieldSound("Sound/Field.img/masteryBook/EnchantSuccess");
            cm.fieldEffect_KinesisEXP(600);
            cm.updateInfoQuest(22700, "V01=1;V02=1;kinetuto=1;kinetuto2=1;E1=1;E2=1");
            cm.gainExp(600);
            cm.effect_Voice("Voice3.img/Kinesis/guide_08");
            cm.inGameDirectionEvent_AskAnswerTime(2500)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(22711);
                cm.forceCompleteQuest(22714);
                cm.forceStartQuest(22715, "");
                cm.warp(331001000, 2);
                cm.setStandAloneMode(false);
                cm.setInGameDirectionMode(false, true);
                cm.dispose()
            } else {
                cm.dispose()
            }
        }
    }
};