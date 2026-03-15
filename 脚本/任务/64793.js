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
            cm.sendNormalTalk_Bottom("啊，队长！我正好有话要说！", 36, 9401029, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#b什么话？", 56, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("你还记得陈吗？我们之前救出的那个冒险家。", 36, 9401029, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#b嗯，好的。", 56, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("他曾经说过，武陵道院中有名医与名药，名医好像叫做……陈道人？是吧？", 36, 9401029, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("所以深渊探险结束后，我准备先回一趟家，然后前往武陵。", 36, 9401029, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("哎呀呀！我忘记了。我妈妈联系我了！她说身体稍微好一点了！真是太好了，对吧？", 36, 9401029, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#b那真是太好了。", 56, 0, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("嘿嘿，真可惜……看来生长着永生之花的冒险岛深处并不是这里。不过我不后悔！幸亏来到了这里，让我变得更加强大……身体也是！心理也是！我应该可以更好地保护妈妈了。", 36, 9401029, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("队长，这些都是多亏了队长。谢谢你。", 36, 9401029, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#b要是没有莫妮卡，我也没法完成这些事。谢谢你。", 56, 0, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("嘿嘿……好害羞！", 36, 9401029, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("队长，我们还会再见面的吧？这不是结束，对吧？", 36, 9401029, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("#b当然。", 56, 0, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("好的！剩下的时间里，就让我们不留遗憾地去探索深渊，笑着分别吧！", 36, 9401029, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.forceCompleteQuest(64793);
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
            }
        }
    }
}

function stage0(d, c, b) {
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/64793.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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