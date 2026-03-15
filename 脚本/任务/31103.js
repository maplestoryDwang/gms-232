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
            cm.sendNormalTalk("你是谁！好像从来没见过，你从哪里来的？", 5, 2142003, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("嗯，你是？！制作特殊发型的爱德华！！！\r\n(脑袋还是这么大……)我不是可疑的人。", 3, 2143003, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("你知道我曾经是理发师吗？你先去见见长老阿勒斯吧。", 5, 2142003, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("长老阿勒斯？\r\n(……那个不懂事的阿勒斯成了长老？) ", 3, 2143003, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("快去吧！！", 5, 2142003, true, true)
                        } else {
                            if (status === a++) {
                                cm.forceStartQuest(31103, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/31103.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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