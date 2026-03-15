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
            cm.sendNormalTalk("哎呀……这不是我们的英雄#h0#吗？呵呵，能在村里见到你，真让人高兴。虽然自由和和平被夺走了，但这里还是最美的地方。", 0, 2151004, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("现在身体好一点了吗？", 2, 2151004, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("是的，#p2151003#的药很管用，我已经好多了。几乎已经完全恢复到以前的状态了。不过有一个很大的问题。", 0, 2151004, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("又有什么问题？难道黑色之翼又在策划什么阴谋？", 2, 2151004, true, true)
                    } else {
                        if (status === a++) {
                            cm.askYesNo("这次的问题不是别的……就是你！你太强了我的作用都变弱了。不过我可是教授反抗者机械的老师，居然比徒弟还弱……所以我要给你更难的课题。", 0, 2151004)
                        } else {
                            if (status === a++) {
                                cm.updateInfoQuest(1073, "3500=10;3510=201;3511=201;3512=201");
                                cm.forceStartQuest(56726, "EventCheck");
                                cm.changeJob(3512);
                                cm.sendNormalTalk("我已经让你转职了。同时把我可以制作的最强的机器人送给了你。那些东西连我都无法完全控制，无法完全发挥出它们的能力……不过我想你一定可以做到。因为你是反抗者最强的机械师。", 0, 2151004, false, true)
                            } else {
                                if (status === a++) {
                                    cm.gainItem(1142245, 1);
                                    cm.forceCompleteQuest(23054);
                                    cm.forceCompleteQuest(29944);
                                    cm.sendNormalTalk("现在我的课程……已经快要结束了。但是现在还不会结束。虽然你确实比我强了，但是你还有很多要向我学习的地方。我们下次课程再见吧。虽然不知道下次课程什么时候会开始……", 0, 2151004, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("在那之前，希望你能以反抗者的身份，继续努力。", 0, 2151004, true, false);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/23054.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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