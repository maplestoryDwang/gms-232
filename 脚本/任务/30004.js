var status = -1;

function start(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.forceStartQuest();
            cm.dispose()
        } else {
            cm.dispose()
        }
    }
}

function end(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.sendNormalTalk("确认了吗？", 0, 1064001, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("这次的卷轴也什么问题都没有。", 2, 1064001, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("这次又失败了……我真的没办法出去吗……？", 0, 1064001, true, true)
                } else {
                    if (status === a++) {
                        cm.forceCompleteQuest(30004);
                        cm.dispose()
                    }
                }
            }
        }
    }
};