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
            cm.askYesNo("[向导任务]回城卷轴\r\n#b - 目标：使用回城卷轴\r\n\r\n#k（点击“是”时，在听完相关说明之后，开始向导任务。）", 4, 9010000)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("回城卷轴是指将角色移动至\r\n#b与当前位置距离最近的村庄#k的卷轴。", 4, 9010000, false, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("在广阔的冒险岛世界中，如果能了解简便的移动方法，培养角色的时候就会更加得心应手。\r\n回城卷轴就是这样的简便移动方法之一。", 4, 9010000, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("代表性的简便移动方法有以下几种。#b\r\n\r\n- 通过向导移动\r\n- 村庄中的出租车\r\n- 回城卷轴", 4, 9010000, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("#b#e<通过向导移动>#k#n\r\n\r\n点击向导中的各种内容，\r\n可以立即移动之相关区域。", 4, 9010000, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("#b#e<通过向导移动>#k#n\r\n\r\n只要该内容的推荐等级和角色等级相符，\r\n就能不受限制地随时移动。\r\n此外，在达到各个内容的图章获得条件并获得完成图章后，就能在#r不受等级限制#k的情况下随时移动。", 4, 9010000, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("#b#e<村庄的出租车>#k#n\r\n\r\n你是否在冒险岛世界的村庄中见过待客的#b出租车#k？\r\n通过村庄的出租车，可以立即移动到出租车运营的地区。", 4, 9010000, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("#b#e<村庄的出租车>#k#n\r\n\r\n#b黄色中巴#k在该大陆的村庄与村庄之间移动，\r\n#b黑色快速出租车#k可以把你送到该大陆被指定为危险地区的狩猎场。\r\n由于快速出租车在运营时需要承受风险，因此乘坐时必须支付费用。", 4, 9010000, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("#b#e<回城卷轴>#k#n\r\n\r\n只需双击使用，就能让角色移动到\r\n附近村庄的#b回城卷轴#k！\r\n#b各个村庄的杂货店#k都有#r出售#k，价格非常便宜。\r\n在狩猎过程中，如果想要休息或处理从怪物身上获得的战利品，就必须返回村庄。那就需要用到回城卷轴！", 4, 9010000, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("此外还有次元传送口、次元之镜、世界地图传送等高级移动手段，\r\n建议看一下主页的向导“甜蜜小贴士：大陆移动”！", 4, 9010000, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("通过回城卷轴，可以节约在大陆各地移动的时间~", 4, 9010000, true, false);
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
            cm.sendNormalTalk("[向导任务]回城卷轴\r\n#b - 目标：使用回城卷轴\r\n\r\n#k勇士，你已经达到了本次向导任务\r\n的#r完成条件#k。\r\n\r\n这是我的一点心意。", 5, 9010000, false, true)
        } else {
            if (status === a++) {
                cm.gainExp(21500);
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
            cm.askYesNo("[向导任务]回城卷轴\r\n#b - 目标：使用回城卷轴\r\n\r\n#k已经#r完成的向导任务#k。\r\n\r\n#k（点击“是”时，可以再听一遍说明。）", 4, 9010000)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("回城卷轴是指将角色移动至\r\n#b与当前位置距离最近的村庄#k的卷轴。", 4, 9010000, false, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("在广阔的冒险岛世界中，如果能了解简便的移动方法，培养角色的时候就会更加得心应手。\r\n回城卷轴就是这样的简便移动方法之一。", 4, 9010000, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("代表性的简便移动方法有以下几种。#b\r\n\r\n- 通过向导移动\r\n- 村庄中的出租车\r\n- 回城卷轴", 4, 9010000, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("#b#e<通过向导移动>#k#n\r\n\r\n点击向导中的各种内容，\r\n可以立即移动之相关区域。", 4, 9010000, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("#b#e<通过向导移动>#k#n\r\n\r\n只要该内容的推荐等级和角色等级相符，\r\n就能不受限制地随时移动。\r\n此外，在达到各个内容的图章获得条件并获得完成图章后，就能在#r不受等级限制#k的情况下随时移动。", 4, 9010000, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("#b#e<村庄的出租车>#k#n\r\n\r\n你是否在冒险岛世界的村庄中见过待客的#b出租车#k？\r\n通过村庄的出租车，可以立即移动到出租车运营的地区。", 4, 9010000, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("#b#e<村庄的出租车>#k#n\r\n\r\n#b黄色中巴#k在该大陆的村庄与村庄之间移动，\r\n#b黑色快速出租车#k可以把你送到该大陆被指定为危险地区的狩猎场。\r\n由于快速出租车在运营时需要承受风险，因此乘坐时必须支付费用。", 4, 9010000, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("#b#e<回城卷轴>#k#n\r\n\r\n只需双击使用，就能让角色移动到\r\n附近村庄的#b回城卷轴#k！\r\n#b各个村庄的杂货店#k都有#r出售#k，价格非常便宜。\r\n在狩猎过程中，如果想要休息或处理从怪物身上获得的战利品，就必须返回村庄。那就需要用到回城卷轴！", 4, 9010000, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("此外还有次元传送口、次元之镜、世界地图传送等高级移动手段，\r\n建议看一下主页的向导“甜蜜小贴士：大陆移动”！", 4, 9010000, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("通过回城卷轴，可以节约在大陆各地移动的时间~", 4, 9010000, true, false);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/39376.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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