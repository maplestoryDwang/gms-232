var status = -1;
var selectionLog = [];

function start(mode, type, selection) {
    var reactor = "action" + cm.getNumberFromQuestInfo(cm.getQuest(), "q");
    eval(reactor)(mode, type, selection)
}

function action0(d, c, b) {
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
            cm.askYesNo("[向导任务]强化UI和咒语痕迹\r\n#b - 目标：通过强化UI进行卷轴强化\r\n\r\n#k（点击“是”时，在听完相关说明之后，开始向导任务。）", 4, 9010000)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("请把鼠标放到获得的装备道具图标上。那样就能看到装备的详细信息。", 4, 9010000, false, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("其中有没有见到一个叫“#b可升级次数#k”的项目？升级是指装备强化。如何才能强化呢？\r\n那就是通过#r强化UI#k。", 4, 9010000, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("强化UI可以通过装备强化快捷键（基本型快捷键O）\r\n或在背包栏的其他标签中#b双击咒语痕迹#k打开。", 4, 9010000, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("在背包中点击想要强化的装备后，把鼠标移动到强化UI后再点击一次，就能切换到可以对该装备进行强化的画面。", 4, 9010000, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("在这里点击想要使用的卷轴，然后点击强化按钮，就会根据选择的卷轴种类使用咒语痕迹，并开始强化。一般来说成功概率越低，强化效果越高，需要的咒语痕迹越多。", 4, 9010000, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("请通过强化UI的卷轴强化，打造更强的装备吧~", 4, 9010000, true, false);
                                    cm.updateInfoQuest(cm.getQuest(), "q=0");
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

function action1(d, c, b) {
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
            cm.sendNormalTalk("[向导任务]强化UI和咒语痕迹\r\n#b - 目标：通过强化UI进行卷轴强化\r\n\r\n#k勇士，你已经达到了本次向导任务\r\n的#r完成条件#k。\r\n\r\n这是我的一点心意。", 5, 9010000, false, true)
        } else {
            if (status === a++) {
                cm.gainExp(230580);
                cm.updateInfoQuest(cm.getQuest(), "q=2");
                cm.sendNormalTalk("今后请继续努力！\r\n\r\n如果想再听一遍任务说明，\r\n可以随时重新点击#b该等级段的向导任务按钮#k。\r\n", 4, 9010000, true, false);
                cm.dispose()
            }
        }
    }
}

function action2(d, c, b) {
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
            cm.askYesNo("[向导任务]强化UI和咒语痕迹\r\n#b - 目标：通过强化UI进行卷轴强化\r\n\r\n#k已经#r完成的向导任务#k。\r\n\r\n#k（点击“是”时，可以再听一遍说明。）", 4, 9010000)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("请把鼠标放到获得的装备道具图标上。那样就能看到装备的详细信息。", 4, 9010000, false, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("其中有没有见到一个叫“#b可升级次数#k”的项目？升级是指装备强化。如何才能强化呢？\r\n那就是通过#r强化UI#k。", 4, 9010000, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("强化UI可以通过装备强化快捷键（基本型快捷键O）\r\n或在背包栏的其他标签中#b双击咒语痕迹#k打开。", 4, 9010000, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("在背包中点击想要强化的装备后，把鼠标移动到强化UI后再点击一次，就能切换到可以对该装备进行强化的画面。", 4, 9010000, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("在这里点击想要使用的卷轴，然后点击强化按钮，就会根据选择的卷轴种类使用咒语痕迹，并开始强化。一般来说成功概率越低，强化效果越高，需要的咒语痕迹越多。", 4, 9010000, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("请通过强化UI的卷轴强化，打造更强的装备吧~", 4, 9010000, true, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/39380.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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