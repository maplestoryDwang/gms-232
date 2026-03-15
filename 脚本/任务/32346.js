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
            cm.sendNormalTalk("你是谁？什么来头？你为何要摧毁守护机器人，快回答我。", 0, 1520048, false, true)
        } else {
            if (status === a++) {
                cm.askMenu("(一共有3个问题，要回答哪个问题呢？)\r\n#b#L0# 姓名#l\r\n#b#L1# 来历#l\r\n#b#L2# 摧毁机器人的理由#l", 0, 1520048)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("我的名字叫#h0#。", 2, 1520048, false, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("#h0#.......我是夜光法师。", 0, 1520048, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("那么，你为何来到这里？", 0, 1520048, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("(太好了，这次只有1个问题……)我是来找夜光法师请求帮助的。", 2, 1520048, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("你是来见我的？", 0, 1520048, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("(看来他喜欢以提问的方式和人对话……。总之，把事情的前前后后和夜光法师做了说明。)", 2, 1520048, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("黑魔法师，把冒险岛……。", 0, 1520048, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.forceCompleteQuest(32346);
                                                cm.gainExp(250000);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/32346.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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