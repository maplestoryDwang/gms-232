var status = -1;
var selectionLog = [];

function start(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.updateInfoQuest(18578, "count=4;miss=0;rewardDay=19/12/29;fixedDay=19/12/29/00/00");
            cm.updateInfoQuest(18578, "count=0;miss=0;rewardDay=19/12/29;fixedDay=19/12/29/00/00");
            cm.forceStartQuest(32418, "");
            cm.forceCompleteQuest(32418);
            cm.sendNormalTalk("我将#b#e#t2450115##k#n送给了许久未来的你做礼物，希望你对能度过愉快的时光。", 0, 9010000, false, true);
            cm.gainItem(2450130, 1);
            cm.gainItem(2450130, 1);
            cm.gainItem(2450130, 1);
            cm.gainItem(2450130, 1)
        } else {
            if (status == a++) {
                cm.dispose()
            }
        }
    }
}

function end(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的结束脚本还没有修复哦。它的脚本位于： #b /脚本/任务/#e" + e + "#n.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻完成这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceCompleteQuest();
                cm.dispose()
            }
        }
    }
};