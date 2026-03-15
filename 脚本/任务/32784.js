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
            cm.sendNormalTalk_Bottom("#h0#，看来你是个很了不起的咨询专家呢。", 37, 1530050, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("跟你聊过之后，奥尔卡的阴暗内心已经平息很多了。我就是因为很担心，所以才一直关注她的，多亏了你，这次应该不会产生闹事者了。", 37, 1530050, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("那真是万幸。", 56, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.askYesNo_Bottom("不管怎样，现在应该回医务室了吧？弗朗西斯一定已经等得望眼欲穿了。", 37, 1530050)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("看到我昨天拍的照片，一定会让他精神大振的。\r\n\r\n#b（返回医务室的弗朗西斯那里吧。）#k", 37, 1530050, false, true)
                        } else {
                            if (status === a++) {
                                cm.forceStartQuest(32784, "");
                                cm.updateInfoQuest(32720, "sms=71");
                                cm.dispose()
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
            cm.sendNormalTalk_Bottom("哎呦喂，我要死了……你把照片带回来了吗？", 37, 1530140, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("没错，我想要的正是这个！竟然是雨中的奥尔卡……实在是太棒了~！", 37, 1530140, true, true)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(32784, "");
                    cm.forceCompleteQuest(32784);
                    cm.dispose()
                }
            }
        }
    }
};