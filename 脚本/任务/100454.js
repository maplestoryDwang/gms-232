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
            cm.sendNormalTalk("苏菲莉亚，我从地狱木马那儿找到了这个。", 2, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("这是……？这不是#b我的照片#k吗？", 4, 9062243, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("为什么忧郁的假面……", 4, 9062243, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("看来忧郁的假面……应该是认识我的人。\r\n从他知道这个房间和地狱木马的真实身份来看也是……", 4, 9062243, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("等一下……中央走廊那里传来了奇怪的声音？", 2, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("这是……！是假面绅士放出的幽灵！", 4, 9062243, true, true)
                            } else {
                                if (status === a++) {
                                    cm.askYesNo("必须避开幽灵到客房4才行。\r\n#h0#，千万不能被发现！", 4, 9062243)
                                } else {
                                    if (status === a++) {
                                        cm.dispose();
                                        cm.warp(993175700, 0, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/100454.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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