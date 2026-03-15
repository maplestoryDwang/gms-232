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
            cm.sendNormalTalk("你，在哪学的黑暗力量？这东西可不是随便就能掌握的。", 0, 1032001, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("你知道黑暗力量？那就不一样了。把你知道的和我讲讲吧。", 2, 1032001, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("……当然知道了。而且知道的还不少呢。不过我为什么要告诉你？你还把璐璐……", 0, 1032001, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("为了一个小破孩，你不要命了吗？", 2, 1032001, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("你啊。黑暗力量对你的侵蚀比我想象的还严重。虽然我老了，但也不是好对付的。", 0, 1032001, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("黑暗，黑暗力量总是想窜出来。我说的所有攻击型语言，都不是出自真心的。请你理解。我应该怎么办呢？", 2, 1032001, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("……这还差不多。我尽力帮你吧。不过你也得帮我才行。这是我能做的最大让步了。怎么样？", 0, 1032001, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("知道了。告诉我应该怎么做。", 2, 1032001, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("先等一等。我需要思考一下怎么帮你。", 0, 1032001, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("最近魔法密林周围的怪物时常攻击村民。我需要一些时间帮你准备，你就帮我去处理这件事吧。", 0, 1032001, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("(从未见过如此强大的黑暗力量。现在是对我以前不懂事的时候，曾经觊觎过黑暗力量的惩罚吗……璐璐，我一定会救活你的。)", 1, 1032001, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.forceCompleteQuest(25572);
                                                        cm.gainExp(1001);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/25572.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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