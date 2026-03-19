function enter() {
    var b = pi.getPortal().getId();
    var a = pi.getPortal().getName();
    if (cm.getQuestStatus(40002) > 0) {
        cm.warp(321000400, 0, false)
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
            cm.sendNormalTalk("#face11# #b(还不是离开这里的时机。)", 41, 2410008, true, true)
        } else {
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(false, false, false);
            cm.dispose()
        }
    }
};