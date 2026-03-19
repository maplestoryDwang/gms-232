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
            cm.askMenu_Bottom("你想怎么做？\r\n#b#L0#接受卢坎的礼物。#l\r\n#b#L1#回到故事的开头。#l", 37, 9201533)
        } else {
            if (status === a++) {
                if (b == 0) {
                    if (cm.getNumberFromQuestInfo(61346, "act4") > 0) {
                        cm.sendNormalTalk("看来你已经拥有卢坎的礼物了。", 4, 9201533, false, false);
                        cm.dispose();
                        return
                    }
                    cm.playerMessage(5, "你获得了2500荣耀EXP。");
                    cm.updateInfoQuest(61332, "honor=1");
                    cm.updateInfoQuest(61349, "r1=1;r3=1");
                    cm.updateInfoQuest(61346, "act1=1;act2=1;act3=1;act4=1");
                    cm.forceCompleteQuest(61332);
                    if (cm.getNumberFromQuestInfo(61349, "r1") == 1) {
                        cm.getPlayer().getTopMsgByItem(1662090, "获得");
                        cm.gainItem(1662090, 1)
                    } else {
                        cm.getPlayer().getTopMsgByItem(1662091, "获得");
                        cm.gainItem(1662091, 1)
                    }
                    cm.getPlayer().getTopMsgByItem(3015741, "获得");
                    cm.getPlayer().getTopMsgByItem(1122352, "获得");
                    cm.getPlayer().getTopMsgByItem(1142962, "获得");
                    cm.gainItem(3015741, 1);
                    cm.gainItem(1122352, 1);
                    cm.gainItem(1142962, 1)
                } else {
                    cm.warp(610060000, 0, false)
                }
                cm.dispose()
            }
        }
    }
};