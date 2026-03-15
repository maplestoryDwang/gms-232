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
            cm.sendNormalTalk("夜光法师，还不到放心的时候。现在只不过是暂时阻止夜光法师你被黑暗力量侵蚀罢了。", 0, 1032209, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("嗯，在完全摆脱这种力量之前，还不能掉以轻心。", 2, 1032209, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("直到把它变成夜光法师自己的力量。", 0, 1032209, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("黑暗力量，变成我的？可能吗？", 2, 1032209, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("刚才不是说了，黑暗力量只是光之力量的另一种形态。我坚信，夜光法师你一定可以做到的。而且老师留下的遗训会给我们很大帮助的。", 0, 1032209, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("老师为此特别留下了什么吗？", 2, 1032209, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("嗯。他说过#r'想要克服黑暗的人啊，去收集散落的秘宝，揭示光明吧。'#k 。还给我留下了秘宝的位置。看来我们回欧罗拉之前，他已经放置在世界各地了。", 0, 1032209, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("老师……那就先找秘宝吧。", 2, 1032209, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("秘宝共有5个。必须要先搜集到除具有特殊力量的最后秘宝之外的其余#b4个秘宝中的2个#k。然后再找到最后秘宝就行了。", 1, 1032209, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.forceCompleteQuest(25588);
                                                cm.gainExp(1529);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/25588.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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