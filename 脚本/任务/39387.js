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
            cm.askYesNo("[向导任务]浏览V核心\r\n#b - 目标：打开V矩阵UI的制作模式，查看适用于自己的V核心\r\n\r\n#k（点击“是”时，在听完相关说明之后，开始向导任务。）", 4, 9010000)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("有没有感觉5转后通过核心宝石获得的V核心种类太多了？", 4, 9010000, false, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("通过V矩阵UI的制作模式，可以查看#b你的角色的V核心#k。\r\n\r\n1. 去找神秘河村的V核心大师。\r\n2. 与V核心大师对话，打开V矩阵UI。\r\n3. V在矩阵UI内点击右下方的“制作模式”按钮。", 4, 9010000, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("像这样#r打开制作模式#k后，可以按照以下类别看到你拥有的V核心。\r\n\r\n- #b蓝色#k方格的技能核心：新技能核心\r\n- 黑色方格的技能核心：超级技能之前的强化核心\r\n- #r紫色#k方格的技能核心：特殊条件功能的特殊核心", 4, 9010000, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("请通过V矩阵UI的制作模式，查看角色的V核心~", 4, 9010000, true, false)
                        } else {
                            if (status === a++) {
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
            cm.sendNormalTalk("[向导任务]浏览V核心\r\n#b - 目标：打开V矩阵UI的制作模式，查看适用于自己的V核心\r\n\r\n#k勇士，你已经达到了本次向导任务\r\n的#r完成条件#k。\r\n\r\n这是我的一点心意。", 5, 9010000, false, true)
        } else {
            if (status === a++) {
                cm.gainExp(11515980);
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
            cm.askYesNo("[向导任务]浏览V核心\r\n#b - 目标：打开V矩阵UI的制作模式，查看适用于自己的V核心\r\n\r\n#k已经#r完成的向导任务#k。\r\n\r\n#k（点击“是”时，可以再听一遍说明。）", 4, 9010000)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("有没有感觉5转后通过核心宝石获得的V核心种类太多了？", 4, 9010000, false, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("通过V矩阵UI的制作模式，可以查看#b你的角色的V核心#k。\r\n\r\n1. 去找神秘河村的V核心大师。\r\n2. 与V核心大师对话，打开V矩阵UI。\r\n3. V在矩阵UI内点击右下方的“制作模式”按钮。", 4, 9010000, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("像这样#r打开制作模式#k后，可以按照以下类别看到你拥有的V核心。\r\n\r\n- #b蓝色#k方格的技能核心：新技能核心\r\n- 黑色方格的技能核心：超级技能之前的强化核心\r\n- #r紫色#k方格的技能核心：特殊条件功能的特殊核心", 4, 9010000, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("请通过V矩阵UI的制作模式，查看角色的V核心~", 4, 9010000, true, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/39387.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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