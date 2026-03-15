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
            cm.sendNormalTalk("就像我之前说的那样，如果能让贝勒德的头瘫痪，就能打倒他。", 0, 9390120, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("还有，如果能破坏掉3个主要部位，即双肩和肚脐部位的主要的核，就能很容易地制服贝勒德。", 0, 9390120, true, true)
            } else {
                if (status === a++) {
                    cm.askYesNo("我要交给你一个任务。你能去破坏掉贝勒德的3个主要部位，然后让他的头瘫痪吗？怎么样？你想试试看吗？", 0, 9390120)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(17529, "");
                        cm.updateInfoQuest(17533, "ing=1");
                        cm.updateInfoQuest(17533, "ing=1;1=0");
                        cm.sendNormalTalk("很好。请你去破坏掉贝勒德的所有部位，然后会来找我。", 0, 9390120, false, true)
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