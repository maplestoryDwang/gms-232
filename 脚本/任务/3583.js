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
            cm.sendNormalTalk_Bottom("#face0#这里是本部，这里是本部。\r\n嗯，通讯好像已经修复好了，辛苦大家了。", 36, 2052006, false, true)
        } else {
            if (status === a++) {
                cm.askYesNo_Bottom("#face0#A组前往C-1\r\nB组前往G-3\r\nC组前往#bD-4区#k。", 36, 2052006)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(3583, "");
                    cm.dispose()
                }
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
            cm.sendNormalTalk_Bottom("好像是这里。", 36, 2052014, false, true)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(3583);
                cm.dispose()
            }
        }
    }
};