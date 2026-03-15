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
            cm.askYesNo("[向导任务]装备套装效果\r\n#b - 目标：收集包含在同一套装中的3个以上的装备/饰品部件，体验套装效果\r\n\r\n#k（点击“是”时，在听完相关说明之后，开始向导任务。）", 4, 9010000)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("把鼠标放到获得的装备上，可以通过工具提示查看该装备的详细信息。这你应该知道吧？", 4, 9010000, false, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("但是你看到过在装备信息工具提示#b右侧显示套装效果#k的情况吗？\r\n这样的装备就是拥有#r套装效果#k的装备。", 4, 9010000, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("收集构成同一套装达到不同部位，#b一起装备在身上，就会发动套装效果#k。每个套装发动套装效果所需的装备部位数量和效果各不相同，请仔细和擦看工具提示。", 4, 9010000, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("显示有与当前装备进行比较的工具提示，因此如果无法看到套装效果，可以#r点击鼠标右键#k。那样就会切换成套装效果工具提示。", 4, 9010000, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("请收集拥有套装效果的装备，获取套装效果~", 4, 9010000, true, false)
                            } else {
                                if (status === a++) {
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
            cm.sendNormalTalk("[向导任务]装备套装效果\r\n#b - 目标：收集包含在同一套装中的3个以上的装备/饰品部件，体验套装效果\r\n\r\n#k勇士，你已经达到了本次向导任务\r\n的#r完成条件#k。\r\n\r\n这是我的一点心意。", 5, 9010000, false, true)
        } else {
            if (status === a++) {
                cm.gainExp(1136520);
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
            cm.askYesNo("[向导任务]装备套装效果\r\n#b - 目标：收集包含在同一套装中的3个以上的装备/饰品部件，体验套装效果\r\n\r\n#k已经#r完成的向导任务#k。\r\n\r\n#k（点击“是”时，可以再听一遍说明。）", 4, 9010000)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("把鼠标放到获得的装备上，可以通过工具提示查看该装备的详细信息。这你应该知道吧？", 4, 9010000, false, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("但是你看到过在装备信息工具提示#b右侧显示套装效果#k的情况吗？\r\n这样的装备就是拥有#r套装效果#k的装备。", 4, 9010000, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("收集构成同一套装达到不同部位，#b一起装备在身上，就会发动套装效果#k。每个套装发动套装效果所需的装备部位数量和效果各不相同，请仔细和擦看工具提示。", 4, 9010000, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("显示有与当前装备进行比较的工具提示，因此如果无法看到套装效果，可以#r点击鼠标右键#k。那样就会切换成套装效果工具提示。", 4, 9010000, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("请收集拥有套装效果的装备，获取套装效果~", 4, 9010000, true, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/39383.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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