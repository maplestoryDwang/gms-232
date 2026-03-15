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
            cm.sendNormalTalk_Bottom("#face0#伊利温，近来可好啊？是这样，与我们冒险岛世界联盟结盟的诺巴向我们寻求帮助。", 36, 1540451, false, true, 1)
        } else {
            if (status === a++) {
                cm.askAcceptDecline_Bottom("如果有空，可以去拜访一下格兰蒂斯大陆万神殿地区的议会长贝尔德大人吗？", 36, 1540451, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#当然啦。身为联盟的一员，我一定全力帮忙。", 37, 3001354, false, true, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#可是主人，万神殿地区的议会长贝尔德，不就是我们逃离阿叙隆时遇到的那位吗？", 37, 3001300, true, true, 1)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#万神殿地区的议会长贝尔德……啊！", 37, 3001354, true, true, 1)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#抱歉，这次只能拒绝你了。", 37, 3001354, true, true, 1)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#诺巴相信达尔莫尔是因平民翼人才觉醒的……身为议会长的贝尔德特别讨厌我们平民翼人……上次访问万神殿之时，他就对我们表现出了极大的敌对情绪。", 37, 3001354, true, true, 1)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#啊，还有这样的隐情啊。嗯……那好吧。现在只能向联盟的其他成员求助了。下次有机会再联系。", 37, 1540451, true, true, 1)
                                    } else {
                                        if (status === a++) {
                                            cm.forceStartQuest(34839, "");
                                            cm.forceCompleteQuest(34839);
                                            cm.updateInfoQuest(34839, "exp=1");
                                            cm.gainExp(353121);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/34839.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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