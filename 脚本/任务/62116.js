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
            cm.askAcceptDecline("#h0#！你好，你在豫园里的生活怎么样？#h0#的善举已经传遍了豫园。\r\n我有话要和你说，你有时间吗？", 0, 9310532)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("啊！谢谢！你应该知道，我就在九曲桥前面。如果你有空，就请过来吧~！", 3, 0, false, true)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(62116, "");
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
            cm.sendNormalTalk_Bottom("你来了啊！#h0#！", 37, 9310532, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("发生了什么事？", 57, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("啊，不是什么坏事。自从#h0#来了以后，豫园变得安全了许多，问题也少了。其实……所以，我想说的是……", 37, 9310532, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("我和豫园居民们讨论后，把#h0#拥戴成了英雄。你应该不会觉得有负担吧？", 37, 9310532, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("那倒没有……", 57, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("那就请你收下这个吧！这是成为豫园英雄的证物！", 37, 9310532, true, true)
                            } else {
                                if (status === a++) {
                                    cm.forceCompleteQuest(62116);
                                    cm.sendNormalTalk_Bottom("虽然应该给你一些更好的东西，不过我们能给你的也只有这个了。请你今后为了豫园更加努力！\r\n啊，你千万不要觉得有负担啊！", 37, 9310532, true, false);
                                    cm.gainItem(3700312, 1)
                                } else {
                                    if (status === a++) {
                                        cm.updateInfoQuest(19019, "expired=0;date=2079/01/01 00:00:00:000;id=3700312");
                                        cm.dispose()
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};