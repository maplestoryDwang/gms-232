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
            cm.askYesNo("[向导任务]冒险岛拍卖场\r\n#b - 目标：体验冒险岛拍卖场\r\n\r\n#k（点击“是”时，在听完相关说明之后，开始向导任务。）", 4, 9010000)
        } else {
            if (status === a++) {
                cm.updateInfoQuest(39385, "q=0");
                cm.sendNormalTalk("勇士，你已经装备了自己想要的装备吗？\r\n或者因为缺少装备相关信息，很难知道自己需要什么装备呢？", 4, 9010000, false, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("在这种情况下，可以去#b冒险岛拍卖场#k#r用自己希望的条件搜索装备#k。", 4, 9010000, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("冒险岛拍卖场只要点击游戏画面下方的菜单按钮，然后点击冒险岛拍卖场就能打开。但相关功能#b只能在村庄中#k使用，因此一定要注意。", 4, 9010000, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("在冒险岛拍卖场中可以使用以下功能。#b\r\n\r\n- 通过装备名称直接搜索\r\n- 按照部位/条件搜索对应的装备\r\n- 以指定价格出售我的角色拥有的装备\r\n- 以制定价格购买其他角色拥有的装备", 4, 9010000, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("请通过冒险岛拍卖场，寻找自己的角色需要的装备~", 4, 9010000, true, false);
                                cm.updateInfoQuest(cm.getQuest(), "q=1");
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
            cm.sendNormalTalk("[向导任务]冒险岛拍卖场\r\n#b - 目标：体验冒险岛拍卖场\r\n\r\n#k勇士，你已经达到了本次向导任务\r\n的#r完成条件#k。\r\n\r\n这是我的一点心意。", 5, 9010000, false, true)
        } else {
            if (status === a++) {
                cm.gainExp(3087840);
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
            cm.askYesNo("[向导任务]冒险岛拍卖场\r\n#b - 目标：体验冒险岛拍卖场\r\n\r\n#k已经#r完成的向导任务#k。\r\n\r\n#k（点击“是”时，可以再听一遍说明。）", 4, 9010000)
        } else {
            if (status === a++) {
                cm.updateInfoQuest(39385, "q=0");
                cm.sendNormalTalk("勇士，你已经装备了自己想要的装备吗？\r\n或者因为缺少装备相关信息，很难知道自己需要什么装备呢？", 4, 9010000, false, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("在这种情况下，可以去#b冒险岛拍卖场#k#r用自己希望的条件搜索装备#k。", 4, 9010000, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("冒险岛拍卖场只要点击游戏画面下方的菜单按钮，然后点击冒险岛拍卖场就能打开。但相关功能#b只能在村庄中#k使用，因此一定要注意。", 4, 9010000, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("在冒险岛拍卖场中可以使用以下功能。#b\r\n\r\n- 通过装备名称直接搜索\r\n- 按照部位/条件搜索对应的装备\r\n- 以指定价格出售我的角色拥有的装备\r\n- 以制定价格购买其他角色拥有的装备", 4, 9010000, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("请通过冒险岛拍卖场，寻找自己的角色需要的装备~", 4, 9010000, true, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/39385.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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