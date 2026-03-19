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
            cm.addPopupSay(9201537, 2000, "噢，很好！\r\n看来你平安到达了。", "", 0);
            cm.inGameDirectionEvent_AskAnswerTime(4200)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("哇哦，你吓我一跳！\r\n你在哪呢，狐智？", 57, 0, false, true)
            } else {
                if (status === a++) {
                    cm.eventSKill(0);
                    cm.setInGameDirectionMode(false, true, false);
                    cm.dispose()
                }
            }
        }
    }
};