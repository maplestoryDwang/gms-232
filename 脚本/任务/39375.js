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
            cm.askYesNo("[向导任务]按键设置和快捷键\r\n#b - 目标：打开快捷键设置画面\r\n\r\n#k（点击“是”时，在听完相关说明之后，开始向导任务。）", 4, 9010000)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("按键设置菜单可以通过点击游戏画面下方的设置菜单，\r\n然后点击快捷键设置进行查看。\r\n该菜单也设置有基本快捷键，可以方便地打开查看。", 4, 9010000, false, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("在快捷键设置画面中点击背包栏的#b消耗道具#k或\r\n技能栏的#b技能图标#k，然后把鼠标放到#r特定快捷键上#k\r\n再点击一次，快捷键就设置完成了。", 4, 9010000, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("把鼠标放到已设置的快捷键上\r\n并#r点击右键#k时，可以#r删除该快捷键的设置#k。", 4, 9010000, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("此外，还能通过更改快捷栏按钮，\r\n指定在游戏画面中显示的快捷键。", 4, 9010000, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("希望通过设置快捷键，能让你更好地\r\n享受战斗~", 4, 9010000, true, false)
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
            cm.sendNormalTalk("[向导任务]按键设置和快捷键\r\n#b - 目标：打开快捷键设置画面\r\n\r\n#k勇士，你已经达到了本次向导任务\r\n的#r完成条件#k。\r\n\r\n这是我的一点心意。", 5, 9010000, false, true)
        } else {
            if (status === a++) {
                cm.gainExp(15120);
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
            cm.askYesNo("[向导任务]按键设置和快捷键\r\n\r\n#k已经#r完成的向导任务#k。\r\n\r\n#k（点击“是”时，可以再听一遍说明。）", 4, 9010000)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("按键设置菜单可以通过点击游戏画面下方的设置菜单，\r\n然后点击快捷键设置进行查看。\r\n该菜单也设置有基本快捷键，可以方便地打开查看。", 4, 9010000, false, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("在快捷键设置画面中点击背包栏的#b消耗道具#k或\r\n技能栏的#b技能图标#k，然后把鼠标放到#r特定快捷键上#k\r\n再点击一次，快捷键就设置完成了。", 4, 9010000, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("把鼠标放到已设置的快捷键上\r\n并#r点击右键#k时，可以#r删除该快捷键的设置#k。", 4, 9010000, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("此外，还能通过更改快捷栏按钮，\r\n指定在游戏画面中显示的快捷键。", 4, 9010000, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("希望通过设置快捷键，能让你更好地\r\n享受战斗~", 4, 9010000, true, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/39375.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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