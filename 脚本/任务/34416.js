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
            cm.askAcceptDecline("#b（递上大火娱乐的名片，试着挖角阿米？）#k", 2, 1052211)
        } else {
            if (status === a++) {
                cm.forceStartQuest(34416, "");
                cm.forceCompleteQuest(34416);
                cm.sendNormalTalk("#b（向阿米递上大火娱乐的名片，建议她成为新人歌手候选人。）#k", 3, 1052211, false, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("……这里是，阿赫的？这么说来你是……", 1, 1052211, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("……原来是这样啊，知道了。", 1, 1052211, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("#b（阿米朝着阿赫的办公室走去，现在阿赫请我帮忙的四个人已经找齐了，回到办公室吧。）#k", 3, 1052211, true, true)
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
            var e = cm.getQuest();
            cm.askYesNo("这个任务的结束脚本还没有修复哦。它的脚本位于： #b /脚本/任务/#e" + e + "#n.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻完成这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceCompleteQuest();
                cm.dispose()
            }
        }
    }
};