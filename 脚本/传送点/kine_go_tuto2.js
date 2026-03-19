function enter() {
    cm.openScriptNpc()
}
var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

function action(e, d, c) {
    if (e === 0) {
        status--
    } else {
        status++
    }
    var b = -1;
    if (status <= b++) {
        cm.dispose()
    } else {
        if (status === b++) {
            cm.curNodeEventEnd(true);
            cm.eventSKill(0);
            cm.setInGameDirectionMode(true, false, true);
            cm.setStandAloneMode(true);
            cm.fieldEffect_PlayFieldSound("Sound/Field.img/masteryBook/EnchantSuccess", 100);
            cm.fieldEffect_KinesisEXP(350);
            cm.updateInfoQuest(22700, "V01=1;V02=1;E1=1");
            cm.gainExp(350);
            cm.inGameDirectionEvent_AskAnswerTime(2500);
            cm.effect_Voice("Voice3.img/Kinesis/guide_04", 100)
        } else {
            if (status === b++) {
                cm.dispose();
                cm.setStandAloneMode(false);
                var a = cm.getEventManager("超能力者_教学");
                a.startInstance(cm.getPlayer(), cm.getMap());
                cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                cm.eventSKill(0);
                cm.setInGameDirectionMode(false, true, false)
            }
        }
    }
};