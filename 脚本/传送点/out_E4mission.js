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
            if (cm.canCompleteQuest(9062209) || cm.canCompleteQuest(9062209)) {
                cm.askYesNo("你完成任务了。辛苦了。\r\n要离开这里吗？", 4, 9062203)
            } else {
                cm.askYesNo("任务还没有完成。现在就要离开这里吗？", 4, 9062203)
            }
        } else {
            if (status === a++) {
                cm.eventSKill(0);
                cm.dispose();
                cm.warp(993173500, 0, false)
            }
        }
    }
};