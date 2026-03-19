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
            if (cm.isQuestFinished(37602)) {
                cm.dispose();
                cm.warp(450014010, 2, false)
            } else {
                if (cm.isQuestFinished(37601)) {
                    cm.sendNormalTalk_Bottom("好像从这里进去就行了。", 56, 0, false, true, 1)
                } else {
                    cm.sendNormalTalk_Bottom("这里看上去没有路了。", 56, 0, false, false, 1);
                    cm.dispose()
                }
            }
        } else {
            if (status === a++) {
                cm.dispose();
                cm.warp(450014010, 0, false)
            }
        }
    }
};