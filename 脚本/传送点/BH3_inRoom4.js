function enter() {
    var b = cm.getPortal().getId();
    var a = cm.getPortal().getName();
    cm.openScriptNpc()
}
var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

function action(e, c, b) {
    if (status == 0 && e == 0) {
        cm.dispose();
        return
    }(e == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            var d = cm.getNumberFromQuestInfo(33181, "army");
            if (d < 7) {
                cm.sendNormalTalk_Bottom("去2号宿舍看看吧！", 36, 1540624, false, true);
                cm.dispose()
            } else {
                if (d < 9) {
                    cm.sendNormalTalk_Bottom("去3号宿舍看看吧！", 36, 1540624, false, true);
                    cm.dispose()
                } else {
                    cm.curNodeEventEnd(true);
                    cm.setInGameDirectionMode(true, false, true);
                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(500)
                }
            }
        } else {
            if (status === a++) {
                cm.dispose();
                cm.warp(350031500, 0, true)
            }
        }
    }
};