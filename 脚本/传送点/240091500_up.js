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
            if (cm.getQuestStatus(31342) > 0) {
                cm.askYesNo("你想爬到更高的地方去吗？", 4, 2210004)
            } else {
                cm.sendNormalTalk("上山的道路还没打通呢！", 1, 2210004, false, false);
                cm.dispose()
            }
        } else {
            if (status === a++) {
                cm.warp(240091600, 0, false);
                cm.dispose()
            }
        }
    }
};