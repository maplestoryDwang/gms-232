var status = -1;
var selectionLog = [];

function start(mode, type, selection) {
    if (cm.getNumberFromQuestInfo(cm.getQuest(), "q") == 0 && cm.has4thSkillReach30()) {
        cm.updateInfoQuest(cm.getQuest(), "q=1")
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
            cm.askYesNo("[向导任务]技能精通\r\n#b - 目标：4转技能达到30级\r\n\r\n#k（点击“是”时，在听完相关说明之后，开始向导任务。）", 4, 9010000)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("达到100级的勇士！你完成4转了吗？", 4, 9010000, false, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("完成4转后，可以学习比之前更强的技能。\r\n\r\n更重要的是！4转技能中包含的攻击技，在5转之后也可以继续在战斗中使用！", 4, 9010000, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("也就是说，一个技能都不会被浪费~\r\n所以4转技能比其他转职次数的技能构成更加多样。", 4, 9010000, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("4转技能的另一个特点是#b可以提升可强化等级#k。根据指定的技能，可以通过投入SP（技能点）强化到\r\n#r最高30级#k。", 4, 9010000, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("提高4转技能可强化等级的方法如下。\r\n\r\n- 在福克罗曼NPC那里购买并使用#r能手册20、能手册30#k\r\n- 获得并使用作为部分主题副本通关奖励发放的#r融会贯通箱#k\r\n（请在向导中查看#b110级以上主题副本的主要奖励#k。）", 4, 9010000, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("请使用能手册和融会贯通箱，扩展4转技能的可强化等级，掌握30级技能~", 4, 9010000, true, false)
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
            cm.sendNormalTalk("[向导任务]技能精通\r\n#b - 目标：4转技能达到30级\r\n\r\n#k勇士，你已经达到了本次向导任务\r\n的#r完成条件#k。\r\n\r\n这是我的一点心意。", 5, 9010000, false, true)
        } else {
            if (status === a++) {
                cm.gainExp(672420);
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
            cm.askYesNo("[向导任务]技能精通\r\n#b - 目标：4转技能达到30级\r\n\r\n#k已经#r完成的向导任务#k。\r\n\r\n#k（点击“是”时，可以再听一遍说明。）", 4, 9010000)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("达到100级的勇士！你完成4转了吗？", 4, 9010000, false, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("完成4转后，可以学习比之前更强的技能。\r\n\r\n更重要的是！4转技能中包含的攻击技，在5转之后也可以继续在战斗中使用！", 4, 9010000, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("也就是说，一个技能都不会被浪费~\r\n所以4转技能比其他转职次数的技能构成更加多样。", 4, 9010000, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("4转技能的另一个特点是#b可以提升可强化等级#k。根据指定的技能，可以通过投入SP（技能点）强化到\r\n#r最高30级#k。", 4, 9010000, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("提高4转技能可强化等级的方法如下。\r\n\r\n- 在福克罗曼NPC那里购买并使用#r能手册20、能手册30#k\r\n- 获得并使用作为部分主题副本通关奖励发放的#r融会贯通箱#k\r\n（请在向导中查看#b110级以上主题副本的主要奖励#k。）", 4, 9010000, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("请使用能手册和融会贯通箱，扩展4转技能的可强化等级，掌握30级技能~", 4, 9010000, true, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/39382.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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