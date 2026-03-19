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
            cm.sendNormalTalk("#h0#，你来晚了。捉迷藏现在开始。既然已经到了大人不许来的地方，就应该好好玩玩。", 0, 2159001, false, true)
        } else {
            if (status === a++) {
                cm.askYesNo("你来晚了，你来找我们。我们现在躲起来。你到前面的大树那里数到10。", 0, 2159001)
            } else {
                if (status === a++) {
                    cm.dispose();
                    cm.warp(931000001, 1, false)
                }
            }
        }
    }
};