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
            if (!cm.isQuestFinished(37701)) {
                cm.dispose();
                return
            } else {
                cm.sendNormalTalk_Bottom("嗯……只要从这里进去就行吗？", 57, 0, false, true, 1)
            }
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(37702);
                cm.gainExp(11264558);
                cm.updateInfoQuest(37700, "02=h1;26=h0");
                cm.dispose();
                cm.warp(450015020, 5, false)
            }
        }
    }
};