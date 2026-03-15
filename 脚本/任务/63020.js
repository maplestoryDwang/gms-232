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
            cm.sendNormalTalk("#fs12#那边有#fs11#人#fs10#吗？", 4, 9400200, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#fs10#有没有人听见我说话#fs11#……？", 4, 9400200, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("#b是谁在求助？你在哪里？", 2, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("#fs12#谁#fs11#来#fs12#帮帮#fs13#我！#fs14##e有没有人啊？！", 4, 9400200, true, true)
                    } else {
                        if (status === a++) {
                            cm.askAcceptDecline("#b(看样子他听不见我的声音。情况似乎很危急……循着声音过去看看吧？)", 2, 0)
                        } else {
                            if (status === a++) {
                                cm.playerMessage(-1, "该内容只有在1024*768以上的分辨率下才能正常进行。");
                                cm.sendNormalTalk("#b(嗯，我不能对陷入危机的人坐视不管！)", 3, 0, false, true)
                            } else {
                                if (status === a++) {
                                    cm.updateInfoQuest(63260, "DnN=0;weather=0;buff=0;color=0;enterD=1");
                                    cm.updateInfoQuest(63099, "enterQ=4");
                                    cm.updateInfoQuest(867113690, cm.getMapId());
                                    cm.playerMessage(5, "循着紧急求助的声音向蝙蝠怪所在的林中之城移动。");
                                    cm.forceCompleteQuest(63020);
                                    cm.dispose();
                                    cm.warp(867113630, 0, false)
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
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/63020.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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