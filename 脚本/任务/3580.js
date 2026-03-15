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
            cm.askYesNo_Bottom("#face0#那现在就前往#b鲁斯韦尔草原3#k。", 36, 2052007)
        } else {
            if (status === a++) {
                cm.forceStartQuest(3580, "");
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
            cm.sendNormalTalk_Bottom("你到了啊~", 36, 2052007, false, true)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(3580);
                cm.dispose()
            }
        }
    }
};