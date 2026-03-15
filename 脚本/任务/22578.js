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
            cm.sendNormalTalk("主人，主人～这次的事情也完成了吗？这样就能帮助到冒险岛世界的人吗？", 0, 1013000, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#b消灭僵尸的话，一定会对#m211000000#地区起到帮助。", 2, 1013000, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("嘿嘿，是吗～怪物消灭得越多越好。但是那个#t4032471#是什么啊？", 0, 1013000, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("#b这个嘛？我也不知道。他们是个好团体，应该是用来做什么好事的吧。", 2, 1013000, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("是吗？但是那个团体为什么要秘密行动呢？这样的话，做的好事别人就不可能知道了啊？", 0, 1013000, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("#b不是有句话说“左手施惠，不让右手知道”吗？", 2, 1013000, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("左手，右手？那是什么意思？是要孤立右手吗？", 0, 1013000, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("#b……不，不是这个意思……是说做好事不应该到处宣扬，要默默地做。", 2, 1013000, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.askAcceptDecline("嗯？我希望别人能知道。这可真奇怪。太小心谨慎了。虽然很有意思，但我没办法理解。主人可以理解吗？\r\n\r\n#fUI/UIWindow2.img/QuestIcon/8/0# 50000 exp ", 0, 1013000)
                                        } else {
                                            if (status === a++) {
                                                cm.gainExp(50000);
                                                cm.forceStartQuest(22578, "");
                                                cm.forceCompleteQuest(22578);
                                                cm.updateInfoQuest(22606, "564=2;565=2;567=2;578=2");
                                                cm.sendNormalTalk("#b我也不是没有想到……一定是另有深意。不过不管怎样，反正是好事。有问题的话，等下次接到任务的时候再问吧。问问他们到底是什么团体。", 2, 1013000, false, false);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/22578.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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