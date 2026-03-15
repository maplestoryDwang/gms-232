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
            cm.sendNormalTalk("你似乎在回想什么。这个长矛果然认出了你。那么你肯定就是#b使用长矛的英雄，战神#k了。你想起什么其他的了吗？有关长矛的技能之类……", 8, 1201000, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#b（说技能倒是想起来了几个。）#k", 2, 1201000, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("虽然数量不多，不过也已经很不容易了。现在让我们集中精力来恢复过去的技能吧。虽然你失忆了，但毕竟是以前曾经烂熟于心的东西，要恢复起来应该很快。", 8, 1201000, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("怎么恢复过去的技能？", 2, 1201000, true, true)
                    } else {
                        if (status === a++) {
                            cm.askAcceptDecline("那个…………办法只有一个。就是修炼！修炼！修炼！只有不停地修炼才能找回曾经忘却的身体感觉！", 0, 1201000)
                        } else {
                            if (status === a++) {
                                cm.forceStartQuest(21700, "");
                                cm.forceCompleteQuest(21700);
                                cm.sendNormalTalk("武器要是能使得更熟练就好了。送你一支#b长矛#k。希望你在修炼的时候能够进步得更快。带着这支长矛……", 0, 1201000, false, true)
                            } else {
                                if (status === a++) {
                                    cm.gainItem(1442077, 1);
                                    cm.sendNormalTalk("嗯，等等。那现在要怎么做呢…………", 0, 1201000, true, false);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/21700.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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