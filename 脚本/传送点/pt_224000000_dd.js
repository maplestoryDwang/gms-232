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
        cm.dispose()
    } else {
        if (status === a++) {
            if (cm.isQuestFinished(30412)) {
                cm.sendNormalTalk("似乎是村里唯一的厕所。", 2, 0, false, false)
            } else {
                cm.sendNormalTalk("厕所里似乎有人。", 2, 0, false, false)
            }
        } else {
            cm.dispose()
        }
    }
};