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
            cm.forceCompleteQuest(58776);
            cm.curNodeEventEnd(true);
            cm.eventSKill(0);
            cm.setInGameDirectionMode(true, false, true);
            cm.sendNormalTalk_Bottom("#face0#抓到啦！", 37, 9111023, false, true)
        } else {
            if (status === a++) {
                cm.inGameDirectionEvent_AskAnswerTime(1500)
            } else {
                if (status === a++) {
                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(500)
                } else {
                    if (status === a++) {
                        cm.eventSKill(0);
                        cm.warp(800024004, 0, true);
                        cm.setInGameDirectionMode(false, true, false);
                        cm.dispose()
                    }
                }
            }
        }
    }
};