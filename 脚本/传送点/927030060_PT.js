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
            if (cm.isQuestFinished(38067)) {
                cm.warp(927030070, 0, false)
            } else {
                cm.playerMessage(-1, "完成<黑魔法师的痕迹>任务后才可进行。")
            }
            cm.dispose()
        }
    }
};