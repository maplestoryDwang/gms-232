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
            cm.sendNormalTalk_Bottom("弗朗西斯制作的药。怎么有种危险的气味……把它拿给#b正门#k的#b麦格纳斯#k吧。#k", 57, 1530508, false, true);
            cm.gainItem(4034152, 1)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(32838);
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
            cm.warp(330002323, 0);
            cm.dispose()
        }
    }
};