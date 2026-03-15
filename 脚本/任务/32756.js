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
            cm.dispose();
            cm.openNpc("副本_好友故事_Act1_贪婪闹事者")
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
            cm.sendNormalTalk_Bottom("呃嗯……神兽集团是我的……是我的……", 37, 1530520, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("她没事吗？看样子状态不是很好啊。", 57, 1530524, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("没事。这个大婶的状态一直都不是很好。", 37, 1530050, true, true)
                } else {
                    if (status === a++) {
                        cm.forceCompleteQuest(32753);
                        cm.forceCompleteQuest(32756);
                        cm.forceForfeitQuest(33036);
                        cm.dispose();
                        cm.warp(330002119, 0)
                    }
                }
            }
        }
    }
};