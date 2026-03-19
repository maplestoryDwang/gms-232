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

function action(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.curNodeEventEnd(true);
        cm.setInGameDirectionMode(true, true, true);
        cm.inGameDirectionEvent_AskAnswerTime(500)
    } else {
        if (status === a++) {
            cm.sendNormalTalk("在这门的另一边，能强烈地感受到女神之泪。", 41, 2400006, true, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("那这门应该就是通往玩具城的门吧。走吧。", 41, 2400005, true, true)
            } else {
                if (status === a++) {
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                    cm.setInGameDirectionMode(false, true, false);
                    cm.dispose();
                    cm.warp(327090040, 0, false)
                }
            }
        }
    }
};