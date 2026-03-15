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
            cm.askYesNo("[向导任务]星之力强化\r\n#b - 目标：通过UI进行星之力强化\r\n\r\n#k（点击“是”时，在听完相关说明之后，开始向导任务。）", 4, 9010000)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#b装备升级次数变为0#k的装备\r\n可以进行#r星之力强化#k。\r\n与使用咒语痕迹进行的卷轴强化一样，同样是对该装备进行强化，区别是星之力强化需要#b使用金币作为材料#k。", 4, 9010000, false, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("星之力强化每次成功时，装备增加1星。如果星之力强化成功了5次，就会成为5星装备。", 4, 9010000, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("星之力装备不仅只有能力值强化效果。\r\n在怪物比普通狩猎场更强、经验值更多的星之力狩猎场中，还可以获得额外效果。#r\r\n\r\n- 造成伤害比例增加，受到伤害比例减少", 4, 9010000, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("因此达到星之力狩猎场要求的星之力数值时，就能进一步提高狩猎效率。\r\n各个星之力狩猎场要求的星之力数值可以在向导和世界地图中查看。\r\n角色的星之力数值是#b当前穿着装备的星之力强化数值总和#k。（套服按2倍计算）", 4, 9010000, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("请通过星之力强化，打造更强的装备吧~", 4, 9010000, true, false)
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
            cm.sendNormalTalk("[向导任务]星之力强化\r\n#b - 目标：通过UI进行星之力强化\r\n\r\n#k勇士，你已经达到了本次向导任务\r\n的#r完成条件#k。\r\n\r\n这是我的一点心意。", 5, 9010000, false, true)
        } else {
            if (status === a++) {
                cm.gainExp(374220);
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
            cm.askYesNo("[向导任务]星之力强化\r\n#b - 目标：通过UI进行星之力强化\r\n\r\n#k已经#r完成的向导任务#k。\r\n\r\n#k（点击“是”时，可以再听一遍说明。）", 4, 9010000)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#b装备升级次数变为0#k的装备\r\n可以进行#r星之力强化#k。\r\n与使用咒语痕迹进行的卷轴强化一样，同样是对该装备进行强化，区别是星之力强化需要#b使用金币作为材料#k。", 4, 9010000, false, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("星之力强化每次成功时，装备增加1星。如果星之力强化成功了5次，就会成为5星装备。", 4, 9010000, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("星之力装备不仅只有能力值强化效果。\r\n在怪物比普通狩猎场更强、经验值更多的星之力狩猎场中，还可以获得额外效果。#r\r\n\r\n- 造成伤害比例增加，受到伤害比例减少", 4, 9010000, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("因此达到星之力狩猎场要求的星之力数值时，就能进一步提高狩猎效率。\r\n各个星之力狩猎场要求的星之力数值可以在向导和世界地图中查看。\r\n角色的星之力数值是#b当前穿着装备的星之力强化数值总和#k。（套服按2倍计算）", 4, 9010000, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("请通过星之力强化，打造更强的装备吧~", 4, 9010000, true, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/39381.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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