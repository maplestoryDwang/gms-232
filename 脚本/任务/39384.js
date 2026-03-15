var status = -1;
var selectionLog = [];

function start(mode, type, selection) {
    if (cm.getNumberFromQuestInfo(cm.getQuest(), "q") == 0) {
        var sum = 0;
        for (var i = 80000400; i <= 80000417; i++) {
            sum += cm.getPlayer().getSkillLevel(i)
        }
        if (sum > 0) {
            cm.updateInfoQuest(cm.getQuest(), "q=1")
        }
    }
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
            cm.askYesNo("[向导任务]超级属性\r\n#b - 目标：超级属性达到1级以上\r\n\r\n#k（点击“是”时，在听完相关说明之后，开始向导任务。）", 4, 9010000)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("超级属性是该角色达到140级后可以获得的额外属性。", 4, 9010000, false, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("通过升级时发放的#b超级属性点数#k，\r\n可以对各个超级属性进行#b升级#k。", 4, 9010000, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("点击游戏画面下方的角色按钮，然后点击能力值，就能在超级属性区域查看超级属性的详细项目。", 4, 9010000, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("不同等级获得的超级属性点数量各不相同，\r\n升级各种超级属性所需的超级属性点数量也各不相同，因此在分配到各个超级属性上时必须谨慎考虑。", 4, 9010000, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("通过#b重设按钮#k，可以对投入的超级属性进行#r初始化#k。初始化需要#r消耗金币#k，这一点一定要记住。", 4, 9010000, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("快去升级超级属性，把角色培养得更强吧~", 4, 9010000, true, false);
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
            cm.sendNormalTalk("[向导任务]超级属性\r\n#b - 目标：超级属性达到1级以上\r\n\r\n#k勇士，你已经达到了本次向导任务\r\n的#r完成条件#k。\r\n\r\n这是我的一点心意。", 5, 9010000, false, true)
        } else {
            if (status === a++) {
                cm.gainExp(1543920);
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
            cm.askYesNo("[向导任务]超级属性\r\n#b - 目标：超级属性达到1级以上\r\n\r\n#k\r\n\r\n#k已经#r完成的向导任务#k。\r\n\r\n#k（点击“是”时，可以再听一遍说明。）", 4, 9010000)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("超级属性是该角色达到140级后可以获得的额外属性。", 4, 9010000, false, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("通过升级时发放的#b超级属性点数#k，\r\n可以对各个超级属性进行#b升级#k。", 4, 9010000, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("点击游戏画面下方的角色按钮，然后点击能力值，就能在超级属性区域查看超级属性的详细项目。", 4, 9010000, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("不同等级获得的超级属性点数量各不相同，\r\n升级各种超级属性所需的超级属性点数量也各不相同，因此在分配到各个超级属性上时必须谨慎考虑。", 4, 9010000, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("通过#b重设按钮#k，可以对投入的超级属性进行#r初始化#k。初始化需要#r消耗金币#k，这一点一定要记住。", 4, 9010000, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("快去升级超级属性，把角色培养得更强吧~", 4, 9010000, true, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/39384.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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