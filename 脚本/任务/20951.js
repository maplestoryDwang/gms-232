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
            cm.sendNormalTalk("那人为什么要袭击圣地？女皇在这里，圣地有什么可贪图的……难道是陷阱？可我方聚集了这么多骑士，任他是多么强大的敌人，也不敢小瞧我们吧。", 0, 1104312, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("只能认为他们的目标不是女皇了。那他们的目标到底是什么呢？世界树？还是其他的什么东西？为了世界树而和神兽战斗，怎么看都是得不偿失的事情……", 0, 1104312, true, true)
            } else {
                if (status === a++) {
                    cm.askAcceptDecline("现在的情报太少了。我们快到圣地去吧！", 0, 1104312)
                } else {
                    if (status === a++) {
                        cm.forceCompleteQuest(20951);
                        cm.dispose();
                        cm.warp(913032000, 0, false)
                    }
                }
            }
        }
    }
}

function stage0(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/20951.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceStartQuest();
                cm.dispose()
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