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
            cm.sendNormalTalk_Bottom("队长！真的好厉害！我们是不是已经快要到达尽头了？", 36, 9401032, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("虽然有许多队员的实力都比我强，说出这种请求有些不好意思，但……我也可以和你下去吗？", 36, 9401032, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("洛尼也要一起！虽然他性格不怎么样，但真的很厉害。嘿嘿。", 36, 9401032, true, true)
                } else {
                    if (status === a++) {
                        cm.askAcceptDecline_Bottom("洛尼也要一起！虽然他性格不怎么样，但真的很厉害。嘿嘿。", 36, 9401032)
                    } else {
                        if (status === a++) {
                            cm.forceStartQuest(64786, "");
                            cm.sendNormalTalk_Bottom("果然！谢谢队长！队长最棒了！", 36, 9401032, false, true)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/64786.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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