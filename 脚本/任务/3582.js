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
            cm.sendNormalTalk_Bottom("#face0#阿亮和小俊到了。", 37, 2052003, false, true)
        } else {
            if (status === a++) {
                cm.askYesNo_Bottom("#face0#来，那就前往#b走廊202#k吧！", 36, 2052000)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(3582, "");
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
            cm.sendNormalTalk_Bottom("#face0#真希望就是这个通风口。", 36, 2052000, false, true)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(3582);
                cm.dispose()
            }
        }
    }
};