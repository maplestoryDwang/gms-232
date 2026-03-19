function enter() {
    var b = pi.getPortal().getId();
    var a = pi.getPortal().getName();
    if (cm.isQuestFinished(40000)) {
        cm.warp(321000200, 2, false)
    } else {
        cm.openScriptNpc()
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
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, true);
            cm.sendNormalTalk("#face11# #b(得赶紧把任务接了，才有借口离开这里。)", 41, 2410008, true, true)
        } else {
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(false, false, false);
            cm.dispose()
        }
    }
};