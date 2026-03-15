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
            cm.forceStartQuest();
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
            cm.forceCompleteQuest(31378);
            cm.updateInfoQuest(31389, "ex=3");
            cm.sendNormalTalk("额，天啊，又来客人了。", 0, 2192023, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("你能过会儿再来找我吗？", 1, 2192023, true, false)
            } else {
                if (status === a++) {
                    cm.dispose()
                }
            }
        }
    }
};