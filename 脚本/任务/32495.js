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
            cm.sendNormalTalk("你拿来的金属里面好像蕴含着魔法的气息。要进行透彻的分析还需要一段时间，那么……。除了那个金属之外，你还有别的事情吧？", 0, 2232006, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("(向比阿特丽斯讲述这段时间发生的事情。虽然为了调查克里蒂亚斯而来到这里，可不知怎的，总感觉时间段似乎有些错位。)", 2, 2232006, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("……自从遭到黑魔法师的侵略以后，克里蒂亚斯就变得非常奇怪了。我们各自了解的事情有出入，说不定也是由那个所致。总之从那天起，那座城就漂在空中了。", 0, 2232006, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("你是说那座城并不是从一开始就漂浮在空中的？", 2, 2232006, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("是的，不知道你有没有看到村庄里的一处#b废墟#k呢？那里本来是王宫所在的位置。真不知道为何会发生那种事情，真是太令人吃惊了。", 0, 2232006, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("是黑魔法师所为吗？", 2, 2232006, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("那种可能性很大。幸亏我身后的建筑--岚哈因魔法大学已经发动了保护魔法。岚哈因魔法大学可是魔法技术发达的克里蒂亚斯中研究最高级别魔法的地方。因此决不能让那里落入黑魔法师的魔掌。", 0, 2232006, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.askAcceptDecline("从现在开始，我要真正开始调查。这应该将会花费很多时间。在这期间，你可以向村里其他人打听情况。", 0, 2232006)
                                    } else {
                                        if (status === a++) {
                                            cm.forceStartQuest(32495, "");
                                            cm.sendNormalTalk("这附近应该有一个叫#b陈#k的学生。虽然那孩子并非王室出生，不过他是因为学习的缘故而在此逗留。总之，他好像非常担心。拜托你把外围的情况告诉他吧。", 0, 2232006, false, false)
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