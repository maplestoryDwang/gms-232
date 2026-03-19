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
            cm.onSetMapTagedObjectVisible(1, "pt00", 0);
            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act4/ptin", 100);
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, true);
            cm.inGameDirectionEvent_AskAnswerTime(600)
        } else {
            if (status === a++) {
                cm.inGameDirectionEvent_SetHideEffect(1);
                cm.inGameDirectionEvent_AskAnswerTime(600)
            } else {
                if (status === a++) {
                    cm.setInGameDirectionMode(false, true, false);
                    cm.setPartner(0, 1540785, 0, 0);
                    cm.setPartner(0, 1540780, 0, 0);
                    cm.dispose();
                    cm.warp(350141300, 0, true)
                }
            }
        }
    }
};