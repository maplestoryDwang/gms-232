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
            cm.sendNormalTalk_Bottom("喂？你能听见我说话吗，#h0#同学？puing-puing！", 37, 1530020, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("……？", 57, 1530020, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("……对不起。听说这个世界流行这种打招呼方式，所以我才这么做的。不过你也不至于那么一本正经吧。", 37, 1530020, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("你问我有什么事？诶，我们之间干嘛这么严肃嘛。现在咱俩可是统一战线的呢！", 37, 1530020, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("你问什么意思？我已经决定了，以后会在这个世界帮助你的。我总不能把事情拜托给你就撒手不管了吧。", 37, 1530020, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("你问我在哪？你到学校正门来，就可以找到我了。我就在这儿等你！\r\n\r\n#b（前往神兽国际学校正门去找埃尔文吧。）#k", 37, 1530020, true, true)
                            } else {
                                if (status === a++) {
                                    cm.forceStartQuest(32722, "");
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
            cm.sendNormalTalk_Bottom("汪汪！\r\n你在那儿东张西望什么呢？我在这儿呢。", 37, 1530030, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("埃尔文？ 你为什么要乔装成一条狗呢？让我都认不出来了。", 57, 1530031, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("你不知道吗？在这个世界，动物可比人受欢迎多了。", 37, 1530030, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("我刚才就在这儿老实站着，就有好几个漂亮的女同学抚摸我呢。难道狗天生就这么好命吗？", 37, 1530030, true, true)
                    } else {
                        if (status === a++) {
                            cm.gainExp(Math.pow(cm.getLevel(), 3));
                            cm.forceCompleteQuest(32722);
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
};