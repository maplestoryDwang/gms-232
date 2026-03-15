var status = -1;

function start() {
    action(1, 0, 0)
}

function start(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNormalTalk_Bottom("啊，对了。你没看见阿丽莎吗？", 56, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("那位姑娘说要去山里找什么野兽，就走掉了。\r\n我劝她太危险了不要过去，但是她不听我的。", 36, 2550007, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("她说自己是什么#b超越者#k……\r\n是不是精神不太正常啊？", 36, 2550007, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("噗，是啊。你就理解她一下吧。", 56, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.askYesNo_Bottom("爬到#b上面#k就能见到那位姑娘了。", 36, 2550007)
                        } else {
                            if (status === a++) {
                                cm.forceStartQuest(32686, "");
                                cm.OnStartNavigation(306040100, 0, "", 0);
                                cm.sendNormalTalk_Bottom("啊，队长。最近积雪越来越厚了，你要小心啊。\r\n一个不好就可能引发#b雪崩#k。", 36, 2550007, false, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("雪崩？嗯，我会注意的。", 56, 0, true, false);
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
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNormalTalk_Bottom("嘘，小声一点！", 36, 2550004, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("怎么了？", 56, 0, true, true)
            } else {
                if (status === a++) {
                    cm.forceCompleteQuest(32686);
                    cm.gainExp(186336);
                    cm.dispose()
                }
            }
        }
    }
};