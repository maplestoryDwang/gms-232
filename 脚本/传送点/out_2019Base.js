function enter() {
    cm.openScriptNpc()
}
var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

function action(e, c, b) {
    if (status == 0 && e == 0) {
        cm.dispose();
        return
    }(e == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            var d = "要去哪儿？\r\n#L0# #b返回原本所在地。#l";
            if (cm.getQuestStatus(37301) > 0 && !cm.isQuestFinished(37312)) {
                d += "\r\n#L1# #b荣耀特攻队任务(大世无界)#l"
            }
            if (cm.getQuestStatus(37401) > 0 && !cm.isQuestFinished(37417)) {
                d += "\r\n#L2# #b荣耀特攻队任务(圣地与圣剑)#l"
            }
            if (cm.getQuestStatus(37501) > 0 && !cm.isQuestFinished(37520)) {
                d += "\r\n#L3# #b荣耀特攻队任务(被选中之人)#l"
            }
            cm.askMenu(d, 24, 0)
        } else {
            cm.dispose();
            if (b == 0) {
                cm.warp(cm.getNumberFromQuestInfo(100295, "rMap"), 0)
            } else {
                cm.warp(cm.getNumberFromQuestCustomData(3004300), 0)
            }
        }
    }
};