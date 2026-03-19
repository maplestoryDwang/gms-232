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
            cm.dispose();
            if (!cm.isQuestFinished(30058)) {
                cm.sendOkS("再往前就要出城了，这个时候就不要乱跑了。")
            } else {
                if (cm.isQuestFinished(30063)) {
                    cm.warp(106030102, 1)
                } else {
                    if (cm.isQuestFinished(30059)) {
                        cm.warp(106030101, 1)
                    } else {
                        cm.warp(106031200, 0)
                    }
                }
            }
        }
    }
};