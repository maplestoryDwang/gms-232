function enter() {
    if (cm.getNumberFromQuestInfo(64935, "skyout") > 0) {
        cm.openScriptNpc()
    } else {
        if (cm.isQuestActive(64917)) {
            cm.openNpc("拟真机器人S3_清理仓库")
        } else {
            cm.openScriptNpc()
        }
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
            if (cm.getNumberFromQuestInfo(64935, "skyout") > 0) {
                cm.sendOkS_Bottom("这里已经清理得差不多了。", 0)
            } else {
                cm.sendOkS_Bottom("先了解一下这里的情况吧。", 0)
            }
        } else {
            cm.dispose()
        }
    }
};