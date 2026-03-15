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
            cm.sendNormalTalk("夜光法师，我已经将秘宝力量全部收集来了。", 1, 1032209, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("现在利用这种力量，就能将夜光法师身体内的黑暗与光明融合在一起。", 1, 1032209, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("别忘了。无论秘宝力量有多强大，最终还是要靠夜光法师你去战胜它。", 1, 1032209, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("不要担心。我对自己的承受力有信心。", 3, 1032209, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("记住这句话。#b<最黑暗的时候，光芒最盛。>#k一定会有帮助的。开始啦。嘿啊啊呀！", 1, 1032209, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("哇呀呀呀呀！", 3, 1032209, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("成功了！我就知道这样，不愧是夜光法师。", 1, 1032209, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("(流淌在我体内的气息不太一样了。有种光与黑暗融为一体的感觉……)", 3, 1032209, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("刚才应该消耗了不少力气，先休息休息吧。关于你现在的情况，我一会和你细说。", 1, 1032209, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.updateInfoQuest(1073, "2700=10;2710=201;2711=201");
                                                cm.teachSkill(20040219, 1, 1);
                                                cm.forceCompleteQuest(25511);
                                                cm.changeJob(2711);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/25511.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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