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
            if (cm.isQuestActive(23705) && !cm.isQuestActive(23708)) {
                cm.askMenu("请输入暗号。\r\n#b#L0#口令#l\r\n#b#L1#暗号#l\r\n#L2#请打开#l", 5, 2159420)
            } else {
                if (cm.isQuestActive(23705) && cm.isQuestActive(23708) || (cm.isQuestActive(23705) && cm.isQuestFinished(23708))) {
                    cm.dispose();
                    cm.warp(926160001, 0, false)
                } else {
                    cm.playerMessage(-1, "好像上锁了。");
                    cm.dispose()
                }
            }
        } else {
            if (status === a++) {
                if (b == 1) {
                    cm.dispose();
                    cm.warp(926160000, 1, false)
                } else {
                    cm.playerMessage(-1, "答案好像不对。");
                    cm.dispose()
                }
            }
        }
    }
};