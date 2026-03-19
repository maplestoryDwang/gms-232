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
            cm.curNodeEventEnd(true);
            cm.eventSKill(0);
            cm.setInGameDirectionMode(true, false, true);
            cm.addPopupSay(9201537, 2000, "又有记忆尘埃来了！", "", 0);
            cm.inGameDirectionEvent_AskAnswerTime(3200)
        } else {
            if (status === a++) {
                cm.addPopupSay(9201537, 2000, "你得尽快解决掉它们，我还等着看下一段记忆呢。", "", 0);
                cm.inGameDirectionEvent_AskAnswerTime(6200)
            } else {
                if (status === a++) {
                    cm.playerMessage(5, "你必须消灭所有怪兽才能前往下一区域。");
                    cm.eventSKill(0);
                    cm.dispose();
                    cm.openNpc("克拉齐亚_第一幕_战斗6");
                    cm.setInGameDirectionMode(false, true, false)
                }
            }
        }
    }
};