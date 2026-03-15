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
            cm.sendNormalTalk_Bottom("分析完毕……不过没发现什么异常。", 37, 9310541, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("好了，请你拿好这个#t4034647:#！", 37, 9310541, true, true)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(62136, "");
                    cm.gainItem(4034647, 1);
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
            cm.sendNormalTalk_Bottom("啊，你来啦？样本分析结果出来了吧？", 37, 9310535, false, true)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(62136);
                cm.sendNormalTalk_Bottom("啊……没什么异常啊。我以为它们感染了某种特殊的病毒呢……", 37, 9310535, true, false);
                cm.gainItem(4034647, -1)
            } else {
                if (status === a++) {
                    cm.dispose()
                }
            }
        }
    }
};