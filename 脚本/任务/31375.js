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
            cm.forceCompleteQuest(31375);
            cm.updateInfoQuest(31389, "ex=5");
            cm.sendNormalTalk("回来得还挺快的，\r\n那这个就还给你。", 1, 2192018, false, true);
            cm.gainItem(4036094, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("希望你能在梦幻主题公园有一番惊险刺激的体验。\r\n\r\n#fs10#不过我们很快会再相见的。", 1, 2192018, true, false)
            } else {
                if (status === a++) {
                    cm.dispose()
                }
            }
        }
    }
};