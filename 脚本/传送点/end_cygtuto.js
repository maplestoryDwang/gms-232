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
            if (cm.isQuestActive(20839)) {
                cm.warp(130030006, 3, false);
                cm.playerMessage(5, "移动到小桥。")
            } else {
                cm.addPopupSay(0, 2000, "好像还有任务没有完成。")
            }
            cm.dispose()
        }
    }
};