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
            cm.sendNormalTalk_Bottom("哇，你真了不起。\r\n我还以为是什么杂技团呢。", 37, 2155104, false, true)
        } else {
            if (status === a++) {
                cm.dispose();
                cm.warp(310070484, 0, false)
            }
        }
    }
};