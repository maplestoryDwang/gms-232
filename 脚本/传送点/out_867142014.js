function enter() {
    if (cm.isQuestActive(64928)) {
        cm.getPlayer().clearAllBuffs();
        cm.openNpc("拟真机器人S3_重返地面")
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
            cm.sendOkS_Bottom("先观察下这里的情况吧。", 0)
        } else {
            cm.dispose()
        }
    }
};