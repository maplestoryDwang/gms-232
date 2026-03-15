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
            cm.sendNormalTalk_Bottom("#face0#托你的福，竹野子恢复了健康，我们也度过了危机。", 36, 9111008, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#对了，樱之岛披风好用吗？", 36, 9111008, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#……为了让你能激发出樱之岛披风的真正力量，我要对你进行训练。", 36, 9111008, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#内容就是你已经参与过一次的乌鸦的试炼……\r\n详细情况我们到#b#m800026000##k再说。", 36, 9111008, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#如果你现在过去，我就直接帮你传送到#b#m800026000##k。", 36, 9111008, true, true)
                        } else {
                            if (status === a++) {
                                cm.askYesNo("(现在立即前往#b#m800026000##k吗？)", 4, 9111008)
                            } else {
                                if (status === a++) {
                                    cm.forceStartQuest(58790, "");
                                    cm.dispose();
                                    cm.warp(800026000, 0, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/58790.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("#face0#你来了。", 36, 9113000, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#我为你准备的训练是乌鸦的试炼。", 36, 9113000, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#正如我之前所说，通过试炼后，我就帮你强化缘分之力，让你可以施展出#b缘分之翼#k的真正威力。", 36, 9113000, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#之前我有让你几招，现在你已经可以使用樱之岛的缘分之力，我就不再让着你了。", 36, 9113000, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#不过，我允许你找#b6个#k跟你一样具备资格的勇士一起进行挑战。", 36, 9113000, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#虽说要挑战多少次是你的自由，但我也是会累的。所以你#b每天完成5次以上的挑战#k后，请让我休息一下，第二天再继续。", 36, 9113000, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#好了，#h0#，出招吧！", 36, 9113000, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.forceCompleteQuest(58790);
                                        cm.updateInfoQuest(58790, "complete=1");
                                        cm.updateInfoQuest(58791, "RewardCount=0");
                                        cm.teachSkill(80000409, 5, 15);
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
};