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
            cm.askYesNo_Bottom("#face2#来，那就前往#b走廊103#k吧~", 36, 2052009)
        } else {
            if (status === a++) {
                cm.forceStartQuest(3581, "");
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
            cm.sendNormalTalk_Bottom("#face2#到了啊~", 36, 2052009, false, true)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(3581);
                cm.dispose()
            }
        }
    }
};