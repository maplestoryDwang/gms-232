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
            cm.sendNormalTalk("如果能最终让贝勒德的头部瘫痪，就能让他的力量减半。", 0, 9390120, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("不过那并不容易。他的四肢在保护他，要躲开四肢，让头部瘫痪并不容易。", 0, 9390120, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("如果能先破坏掉他的右肩，他就会变弱很多。右肩瘫痪之后，保护他的灵气就会变弱，体力就会减半。当然，他也没办法在头部受到攻击的时候用右手来攻击你了。", 0, 9390120, true, true)
                } else {
                    if (status === a++) {
                        cm.askYesNo("怎么样？你想试试看吗？", 0, 9390120)
                    } else {
                        if (status === a++) {
                            cm.forceStartQuest(17525, "");
                            cm.sendNormalTalk("如果能先让他的右肩瘫痪，就能更容易地制服贝勒德。", 0, 9390120, false, true)
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