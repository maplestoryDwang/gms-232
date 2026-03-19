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
            if (cm.isQuestActive(64929)) {
                cm.sendNormalTalk_Bottom("我要去找斯卡伊了。\r\n他肯定在这附近……", 56, 0, 0, 1)
            } else {
                cm.sendNormalTalk_Bottom("先看看这里的情况吧。", 56, 0, 0, 1);
                return
            }
        } else {
            if (status === a++) {
                cm.dispose();
                cm.warp(867142016, 0, false)
            }
        }
    }
};