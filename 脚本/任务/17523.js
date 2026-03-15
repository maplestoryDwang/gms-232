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
            cm.sendNormalTalk("你是谁？", 0, 9390120, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("很多人都曾来过这里，但大多数都失败了。你的力量好像在他们之上。", 0, 9390120, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("在幻影林地发生变化之前，我曾经是守护心树的守护者。", 0, 9390120, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("但是，就像幻影林地因为愤怒而迷失了方向一样，在光之魔法师苏巴尼打败纳里肯并将其封印起来的时候，释放出的能量使绯红之地沉入了海底，克拉齐亚文明从此消失得无影无踪。那股强大的力量同时也污染了心树的心脏，让过去克拉齐亚人崇拜的神树变得堕落。", 0, 9390120, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("之后，心树变成了黑暗君主。这已经是很久以前的事情了。", 0, 9390120, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("现在已经没有人再记得他那高贵的名字。现在人们称他为只手遮天的大君主贝勒德。", 0, 9390120, true, true)
                            } else {
                                if (status === a++) {
                                    cm.askAcceptDecline("我会为你打开通向贝勒德之路。请摧毁贝勒德邪恶的身体，让他的心脏重新变得洁净。", 1, 9390120)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("现在已经没有人再记得他那高贵的名字。现在人们称他为只手遮天的大君主贝勒德。", 0, 9390120, false, true)
                                    } else {
                                        if (status === a++) {
                                            cm.forceStartQuest(17523, "");
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
            cm.sendNormalTalk("我在你的灵魂中注入了可以净化贝勒德的气息。", 0, 9390120, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("总有一天他心脏中的灵魂一定会得到净化。", 0, 9390120, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("现在我该消失了。通过我为你打开的这条路，你可以随时再见到我。", 0, 9390120, true, true)
                } else {
                    if (status === a++) {
                        cm.forceCompleteQuest(17523);
                        cm.dispose()
                    }
                }
            }
        }
    }
};