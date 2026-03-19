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
            cm.updateInfoQuest(33267, "dir=1");
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, true);
            cm.inGameDirectionEvent_AskAnswerTime(1000)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("(为了结束战斗，我们必须先追踪到#b格里梅尔#k。)", 57, 0, false, true)
            } else {
                if (status === a++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                } else {
                    if (status === a++) {
                        cm.setInGameDirectionMode(false, true, false);
                        cm.dispose()
                    }
                }
            }
        }
    }
};