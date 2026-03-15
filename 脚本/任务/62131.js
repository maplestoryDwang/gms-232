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
            cm.dispose()
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
            cm.sendNormalTalk_Bottom("啊！！！！！这里，这里！", 37, 9310564, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("啊！真是好久没有人从这里经过了！真是谢谢你了。", 37, 9310564, true, true)
            } else {
                if (status === a++) {
                    cm.forceCompleteQuest(62131);
                    cm.updateInfoQuest(62131, "chk=1");
                    cm.addNumberForQuestInfo(62109, "yuyuanPoint", 3);
                    cm.dispose()
                }
            }
        }
    }
};