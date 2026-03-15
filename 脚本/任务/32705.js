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
            cm.askYesNo_Bottom("要开始#b章节5：来路不明的实习老师与危机中的学生们#k吗？", 36, 1530020)
        } else {
            if (status === a++) {
                cm.dispose();
                cm.warp(330002500, 0)
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
            cm.sendNormalTalk_Bottom("所以，旧楼那里究竟有没有鬼呢？\r\n……呃，反正真的假不了，假的真不了。", 37, 1530040, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("这是我的小礼物。以后也要请你多多关照。", 37, 1530040, true, true)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(32871, "");
                    cm.forceCompleteQuest(32871);
                    cm.forceCompleteQuest(32704);
                    cm.finishAchievement(1209);
                    cm.updateInfoQuest(32720, "sms=175");
                    cm.gainItem(4310125, 2);
                    cm.dispose();
                    cm.warp(330002422, 0)
                }
            }
        }
    }
};