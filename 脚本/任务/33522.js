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
            cm.sendNormalTalk_Bottom("布吉真的逃走了？", 37, 1530100, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("嘤~如果布吉不在，就没有意义了啊~", 37, 1530607, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("……", 37, 1530090, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("布吉……应该在细雨散步路。", 37, 1530120, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("如果有什么不开心的事情，她就会去那里。", 37, 1530120, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#h0#，你能把布吉找回来吗？我们先去参加彩排。\r\n\r\n#b(去细雨散步路吧。)", 37, 1530120, true, true)
                            } else {
                                if (status === a++) {
                                    cm.forceStartQuest(33522, "");
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
            cm.sendNormalTalk_Bottom("真是不让人休息啊。", 37, 1530050, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#h0#的那些同学，正在这里开派对呢。", 37, 1530050, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("(没时间了，随便应付一下吧。)", 57, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.gainExp(Math.pow(cm.getLevel(), 3));
                        cm.forceCompleteQuest(33522);
                        cm.dispose()
                    }
                }
            }
        }
    }
};