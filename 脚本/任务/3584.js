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
            cm.askYesNo_Bottom("#face0#还是先前往#b操纵室1#k处……滋滋……比较好……", 36, 2052006)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("我知道了，走吧，阿琳。", 56, 0, false, true)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(3584, "");
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
            cm.sendNormalTalk_Bottom("#face5#……", 36, 2052027, false, true)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(3584);
                cm.dispose()
            }
        }
    }
};