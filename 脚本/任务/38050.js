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
            cm.sendNormalTalk("失去了所有的记忆？那么你一定完全不认识我了。", 2, 2159457, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("很抱歉。我也一直在努力寻找记忆，可是丧失的记忆却很难回来。那我们之间是什么关系呢？", 0, 2159457, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("……最后一次见到你，是在去找黑魔法师的路上。你当时受了重伤。不过你说别为你担心。你说相信我，而我也相信你，所以就没有再回头。", 2, 2159457, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("可以放心地把后面的事情交给对方。战士只会让朋友看到自己的背影。你和我是朋友吗？", 0, 2159457, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("朋友……是的，我们是朋友。", 2, 2159457, true, true)
                        } else {
                            if (status === a++) {
                                cm.updateInfoQuest(38050, "");
                                cm.forceStartQuest(38050, "");
                                cm.dispose()
                            }
                        }
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/38050.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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