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
            cm.sendNormalTalk("这里就是射手村啊。人好多。", 16, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("今后为了摆脱格里梅尔的追踪，你必须融入这里的人群之中。不然的话，我们躲到这种人多的地方来就没有意义了。", 4, 2159405, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("知道了。那现在该怎么办呢？", 16, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("必须像普通人一样行动，像普通人一样说话。为此，最好去找这里知识最渊博的人，去征询他的建议。去找在这里生活了最长时间，知道最多的人。", 4, 2159405, true, true)
                    } else {
                        if (status === a++) {
                            cm.askAcceptDecline("生活了最长时间的人……埃德尔斯坦知识最渊博的人是佩尔迪校长。应该去找射手村年纪看上去最大的人吗？", 16, 0)
                        } else {
                            if (status === a++) {
                                cm.forceStartQuest(23643, "");
                                cm.OnStartNavigation(100000000, 1, "1012003", 23643);
                                cm.updateInfoQuest(3847, "NResult=complete");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/23643.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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