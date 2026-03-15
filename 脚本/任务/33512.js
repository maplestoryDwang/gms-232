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
            cm.sendNormalTalk_Bottom("好，那么……要不要先去王都桑大叔的校服店看看？出发~！", 37, 1530120, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#b(去校服店吧。)#k", 57, 0, true, true)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(33512, "");
                    cm.dispose();
                    cm.warp(330000000, 2)
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
            cm.sendNormalTalk_Bottom("辛苦你了，#h0#。现在我们开始正式练习吧？", 37, 1530120, false, true);
            cm.gainItem(4034346, -10)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(33511);
                cm.dispose();
                cm.warp(330002610, 0)
            }
        }
    }
};