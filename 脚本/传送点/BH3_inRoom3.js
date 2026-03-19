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
            if (cm.isQuestFinished(33184)) {
                cm.effect_NormalSpeechBalloon("得去监狱看看情况。", 1, 0, 0, 2000, 0, 0, 0, 0, 4, 0, cm.getPlayer().getId());
                cm.dispose()
            } else {
                if (d < 7) {
                    cm.sendNormalTalk_Bottom("去2号宿舍看看吧！", 36, 1540624, false, true);
                    cm.dispose()
                } else {
                    if (d >= 9) {
                        cm.sendNormalTalk_Bottom("这里已经清空了，得去其他房间看看！", 36, 1540624, false, true);
                        cm.dispose()
                    } else {
                        cm.updateInfoQuest(33183, "check=1");
                        cm.curNodeEventEnd(true);
                        cm.setInGameDirectionMode(true, false, true);
                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(500)
                    }
                }
            }
        } else {
            cm.dispose();
            cm.warp(350031400, 1, true)
        }
    }
};