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
            cm.sendNormalTalk("到这里之后就消失了。还没过几个小时，应该走不了太远……哎呀！！", 4, 1013401, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("（草丛里传来了悉悉索索的声音！！）", 2, 1013402, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("感觉到了！那些危险的人散发出的恐怖气息！我，我要回去了！想活命的话，你也快逃吧！", 4, 1013401, true, true)
                } else {
                    if (status === a++) {
                        cm.dispose();
                        cm.warp(910090420, 0)
                    }
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
            cm.sendNormalTalk("怎么样了？", 4, 1013447, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("（说明情况。）", 2, 1013403, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("嗯，看来黑魔法师并不存在。\r\n果然不出我所料。", 4, 1013447, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("……", 2, 1013403, true, true)
                    } else {
                        if (status === a++) {
                            cm.forceCompleteQuest(35957);
                            cm.gainExp(713849);
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
};