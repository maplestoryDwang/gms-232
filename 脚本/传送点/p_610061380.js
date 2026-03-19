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
            cm.addPopupSay(9201537, 2000, "这些东西看来是没那么容易罢手啊！", "", 0);
            cm.inGameDirectionEvent_AskAnswerTime(4200)
        } else {
            if (status === a++) {
                cm.addPopupSay(9201537, 2000, "别忘了，你想要继续阅读记忆，就得先消灭它们。", "", 0);
                cm.inGameDirectionEvent_AskAnswerTime(4200)
            } else {
                if (status === a++) {
                    cm.playerMessage(5, "你必须消灭所有怪兽才能前往下一区域。");
                    cm.eventSKill(0);
                    cm.dispose();
                    cm.openNpc("克拉齐亚_第一幕_战斗5");
                    cm.setInGameDirectionMode(false, true, false);
                    cm.npc_LeaveField("oid=2846889");
                    cm.npc_LeaveField("oid=2846889")
                }
            }
        }
    }
};