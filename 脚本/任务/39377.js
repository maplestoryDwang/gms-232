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
            cm.askYesNo("[向导任务]内在能力\r\n#b - 目标：重设内在能力\r\n（拥有A级以上内在能力时也可完成）\r\n\r\n#k（点击“是”时，在听完相关说明之后，开始向导任务。）", 4, 9010000)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("内在能力是指隐藏在角色内在的能力。\r\n内在能力最初处于锁定状态，必须先解放能力。#b\r\n\r\n- 50级以上的角色\r\n- 点击画面左侧的提示按钮\r\n- 执行发现内在能力任务", 4, 9010000, false, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("内在能力拥有各种能力值增加效果。\r\n按照B级/A级/S级/SS级顺序，能力值增加效果逐渐提高。\r\n我为你解放的第一个内在能力是B级基本能力值，经过重设之后可以在战斗中发挥很大的作用。", 4, 9010000, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("内在能力可以通过两种方法重设。#b\r\n\r\n- 角色信息窗详细属性下方的重设按钮：需要声望\r\n- 使用还原器道具", 4, 9010000, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("声望可以通过以下方法获得。\r\n\r\n- 角色#b升级#k\r\n- 使用#b荣誉勋章#k：\r\n   * 荣誉勋章可以通过消灭怪物、任务奖励等获得", 4, 9010000, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("进行重设时，不想重设的内在能力以及内在能力等级可以#r设置锁定#k。\r\n但#b根据内在能力等级的种类和数量，所需的声望各不相同#k，因此必须注意。", 4, 9010000, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("请通过重设内在能力，寻找效果更强的内在能力~", 4, 9010000, true, false);
                                    if (cm.hasAInnerSkill()) {
                                        cm.updateInfoQuest(cm.getQuest(), "q=1")
                                    } else {
                                        cm.updateInfoQuest(cm.getQuest(), "q=0")
                                    }
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
            cm.sendNormalTalk("[向导任务]内在能力\r\n#b - 目标：重设内在能力\r\n（拥有A级以上内在能力时也可完成）\r\n\r\n#k勇士，你已经达到了本次向导任务\r\n的#r完成条件#k。\r\n\r\n这是我的一点心意。", 5, 9010000, false, true)
        } else {
            if (status === a++) {
                cm.gainExp(32760);
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
            cm.askYesNo("[向导任务]内在能力\r\n#b - 目标：重设内在能力\r\n\r\n#k已经#r完成的向导任务#k。\r\n\r\n#k（点击“是”时，可以再听一遍说明。）", 4, 9010000)
        } else {
            if (status === a++) {
                cm.updateInfoQuest(39377, "q=0");
                cm.sendNormalTalk("内在能力是指隐藏在角色内在的能力。\r\n内在能力最初处于锁定状态，必须先解放能力。#b\r\n\r\n- 50级以上的角色\r\n- 点击画面左侧的提示按钮\r\n- 执行发现内在能力任务", 4, 9010000, false, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("内在能力拥有各种能力值增加效果。\r\n按照B级/A级/S级/SS级顺序，能力值增加效果逐渐提高。\r\n我为你解放的第一个内在能力是B级基本能力值，经过重设之后可以在战斗中发挥很大的作用。", 4, 9010000, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("内在能力可以通过两种方法重设。#b\r\n\r\n- 角色信息窗详细属性下方的重设按钮：需要声望\r\n- 使用还原器道具", 4, 9010000, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("声望可以通过以下方法获得。\r\n\r\n- 角色#b升级#k\r\n- 使用#b荣誉勋章#k：\r\n   * 荣誉勋章可以通过消灭怪物、任务奖励等获得", 4, 9010000, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("进行重设时，不想重设的内在能力以及内在能力等级可以#r设置锁定#k。\r\n但#b根据内在能力等级的种类和数量，所需的声望各不相同#k，因此必须注意。", 4, 9010000, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("请通过重设内在能力，寻找效果更强的内在能力~", 4, 9010000, true, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/39377.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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