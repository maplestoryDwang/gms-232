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
            cm.sendNormalTalk("哎呀……这不是我们的英雄#h0#吗？呵呵，能在村里见到你，真让人高兴。虽然我们村被黑色之翼占领了，但我们村还是最美的。不是吗？", 0, 2151001, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("身体现在没事了吧？", 2, 2151001, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("嗯，#p2151003#的本事很好，我已经没事了。现在已经完全恢复到了过去的状态。不过还有一个问题。", 0, 2151001, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("又有什么问题？难道黑色之翼又在策划什么阴谋？", 2, 2151001, true, true)
                    } else {
                        if (status === a++) {
                            cm.askYesNo("不，这次的问题就是…你！你变得太强大了，居然做到了连我都做不到的事情。这可太让我羞愧了！所以我要给你一个更难的课题！", 0, 2151001)
                        } else {
                            if (status === a++) {
                                cm.updateInfoQuest(1073, "3200=10;3210=201;3211=201;3212=201");
                                cm.forceStartQuest(56726, "EventCheck");
                                cm.changeJob(3212);
                                cm.sendNormalTalk("我已经让你转职了。同时我把我知道的，但又无法熟练掌握的所有最高的技能传授给了你。虽然我没能完全掌握它们，但我相信你一定可以做到。你是我们反抗者中的最强者！还有什么做不到的呢？", 0, 2151001, false, true)
                            } else {
                                if (status === a++) {
                                    cm.gainItem(1142245, 1);
                                    cm.forceCompleteQuest(23052);
                                    cm.forceCompleteQuest(29944);
                                    cm.sendNormalTalk("这是我的最后一项课程了吗……不，不可能。我可是很有能力的反抗者。现在你比我强，但你还有能跟我学习的吧？所以……下个课程见吧。虽然不知道什么时候能开始。", 0, 2151001, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("在那之前，希望你能以反抗者的身份，继续努力。", 0, 2151001, true, false);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/23052.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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