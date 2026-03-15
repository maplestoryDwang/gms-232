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
            cm.sendNormalTalk("你好！我是#b鬼怪商团#k的#b盖子#k。", 0, 9062229, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("我们鬼怪商团在世界各处购买各种各样的物品，然后再将这些物品卖出去！", 0, 9062229, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("刚好听说最近正是这个村的节前销售旺季，所以趁此在这开了一个非常大的市场！", 0, 9062229, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("就是#e#b<满月鬼怪夜市>#k#n！", 0, 9062229, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("不知道你有没有听说过，我们鬼怪的东西是出了名的特别和不一般。", 0, 9062229, true, true)
                        } else {
                            if (status === a++) {
                                cm.askYesNo("如何？你要不要来看看？", 0, 9062229)
                            } else {
                                if (status === a++) {
                                    cm.forceCompleteQuest(100375);
                                    cm.sendNormalTalk("哦哦！真是个豪爽的朋友！", 0, 9062229, false, true)
                                } else {
                                    if (status === a++) {
                                        cm.askYesNo("那现在立刻到#b#e满月鬼怪夜市#k#n去吧？", 0, 9062229)
                                    } else {
                                        if (status === a++) {
                                            cm.dispose();
                                            cm.updateInfoQuest(100376, "rMap=" + cm.getMapId());
                                            cm.warp(993123100, 10, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/100375.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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