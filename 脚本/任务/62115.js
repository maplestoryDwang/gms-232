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
            cm.askAcceptDecline("#h0#！你好，我有话要对你说，你能来我这一下吗？", 0, 9310532)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("啊！谢谢。我随时都在九曲桥前面，只要你方便，随时都能来找我。", 3, 0, false, true)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(62115, "");
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
            cm.sendNormalTalk_Bottom("啊！你来了？我正在等你呢。", 37, 9310532, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("有什么事吗？", 57, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("也不是什么大事，#h0#来到村子后，帮了居民们很多忙，居民们对#h0#的评价改善了许多。", 37, 9310532, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("我和其他的居民们商量了一下，决定让#h0#成为豫园居民！\r\n所以就联系了你，打算把豫园居民的证物给你。", 37, 9310532, true, true)
                    } else {
                        if (status === a++) {
                            cm.forceCompleteQuest(62115);
                            cm.sendNormalTalk_Bottom("这是一点小小心意，请你一定要收下。啊，你千万不要觉得有负担！", 37, 9310532, true, false);
                            cm.gainItem(3700311, 1)
                        } else {
                            if (status === a++) {
                                cm.dispose()
                            }
                        }
                    }
                }
            }
        }
    }
};