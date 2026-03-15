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
            cm.askYesNo("[向导任务]BOSS练习模式\r\n#b - 目标：体验BOSS练习模式\r\n\r\n#k（点击“是”时，在听完相关说明之后，开始向导任务。）", 4, 9010000)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("冒险岛世界的强大怪物！#rBOSS怪物#k！！\r\n他们比其他怪物拥有#b更强的力量和更高的体力#k。\r\n虽然很难对付，但#b拥有价值更高的装备作为奖励#k，因此有无数勇士正在努力挑战。", 4, 9010000, false, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("在向导最大化的状态下点击#rBOSS内容标签#k，\r\n可以查看BOSS怪物的信息。", 4, 9010000, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("当然，每个BOSS怪物都拥有特有的技能，战斗方式和战斗场所也各不相同，因此要想击败他们需要付出大量的时间和努力。\r\n\r\n为了减少勇士们的困难，我们推荐\r\n先参加#bBOSS练习模式#k。", 4, 9010000, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("与普通入场模式一样，可以在#b各个BOSS怪物的入场菜单中选择练习模式#k入场。\r\n在这个模式下挑战失败造成的损失会最小化，因此可以毫无压力地进行练习。\r\n例如，死亡后复活时，即使使用增益冷藏器，该道具也不会消失。但只有在拥有#b增益冷藏器1个以上#k的状态下才能使用，这一点千万不要忘记。", 4, 9010000, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("练习模式什么都好，但因为是练习，所以没有奖励~", 4, 9010000, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("请进入BOSS练习模式，挑战各个BOSS怪物~", 4, 9010000, true, false)
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
            cm.sendNormalTalk("[向导任务]BOSS练习模式\r\n#b - 目标：体验BOSS练习模式\r\n\r\n#k勇士，你已经达到了本次向导任务\r\n的#r完成条件#k。\r\n\r\n这是我的一点心意。", 5, 9010000, false, true)
        } else {
            if (status === a++) {
                cm.gainExp(6175680);
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
            cm.askYesNo("[向导任务]BOSS练习模式\r\n#b - 目标：体验BOSS练习模式\r\n\r\n#k已经#r完成的向导任务#k。\r\n\r\n#k（点击“是”时，可以再听一遍说明。）", 4, 9010000)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("冒险岛世界的强大怪物！#rBOSS怪物#k！！\r\n他们比其他怪物拥有#b更强的力量和更高的体力#k。\r\n虽然很难对付，但#b拥有价值更高的装备作为奖励#k，因此有无数勇士正在努力挑战。", 4, 9010000, false, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("在向导最大化的状态下点击#rBOSS内容标签#k，\r\n可以查看BOSS怪物的信息。", 4, 9010000, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("当然，每个BOSS怪物都拥有特有的技能，战斗方式和战斗场所也各不相同，因此要想击败他们需要付出大量的时间和努力。\r\n\r\n为了减少勇士们的困难，我们推荐\r\n先参加#bBOSS练习模式#k。", 4, 9010000, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("与普通入场模式一样，可以在#b各个BOSS怪物的入场菜单中选择练习模式#k入场。\r\n在这个模式下挑战失败造成的损失会最小化，因此可以毫无压力地进行练习。\r\n例如，死亡后复活时，即使使用增益冷藏器，该道具也不会消失。但只有在拥有#b增益冷藏器1个以上#k的状态下才能使用，这一点千万不要忘记。", 4, 9010000, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("练习模式什么都好，但因为是练习，所以没有奖励~", 4, 9010000, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("请进入BOSS练习模式，挑战各个BOSS怪物~", 4, 9010000, true, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/39386.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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