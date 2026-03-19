function enter() {
    if (cm.getMap().getNumMonsters() == 0) {
        cm.openScriptNpc()
    } else {
        cm.playerMessage(-1, "还有怪物没有消灭干净。");
        cm.playerMessage(5, "还有怪物没有消灭干净。")
    }
}
var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

function action(g, d, c) {
    if (status == 0 && g == 0) {
        cm.dispose();
        return
    }(g == 1) ? status++ : status--;
    selectionLog[status] = c;
    var b = -1;
    if (status <= b++) {
        cm.dispose()
    } else {
        if (status === b++) {
            var f = cm.getNumberFromQuestInfo(15180, "exp");
            var a = new Date().getDay();
            var e = 2434745 + a;
            cm.sendNormalTalk("\r\n怪物公园好玩吗？奖励已经给你了，呵呵。\r\n\r\n#b#e每日奖励：#i" + e + ":# #t" + e + ":# 1个\r\n经验值奖励：" + cm.formatNumberWithComma(f) + "\r\n已经使用了1次今天的免费闯关次数。", 5, 9071000, false, true)
        } else {
            if (status === b++) {
                cm.sendNormalTalk("那希望你再来哦~", 5, 9071000, true, true)
            } else {
                if (status === b++) {
                    var f = cm.getNumberFromQuestInfo(15180, "exp");
                    var a = new Date().getDay();
                    var e = 2434745 + a;
                    cm.updateInfoQuest(15180, "exp=0");
                    cm.addNumberForQuestInfo(18805, "count", 1);
                    cm.addNumberForQuestInfo(15179, "day", 1);
                    cm.gainItem(e, 1);
                    cm.updateInfoQuest(7901, "");
                    cm.gainExp(f);
                    if (cm.isQuestActive(100422)) {
                        cm.addNumberForQuestInfo(100417, "mp", 1)
                    }
                    cm.dispose();
                    cm.warp(951000000, 0, false)
                }
            }
        }
    }
};