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
            cm.askAcceptDecline_Bottom("#face0#虽然说了要帮你的忙，但我能做的事情毕竟有限，只能用#b#m807000000##k少得有限的物资修建了一座临时练兵所。只要你肯用这些训练人偶从头开始锻炼，就一定能够回忆起该如何使用自己的力量。", 37, 9130006)
        } else {
            if (status === a++) {
                cm.forceStartQuest(57404, "");
                cm.OnStartNavigation(807030000, 0, "", 0);
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
            cm.sendNormalTalk_Bottom("#face0#感觉如何呢？", 37, 9130006, false, true)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(57404);
                cm.updateInfoQuest(15710, "lasttime=19/11/27/16/23");
                cm.gainExp(1242);
                cm.dispose()
            }
        }
    }
};