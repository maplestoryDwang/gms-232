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
            cm.sendNormalTalk("夜光法师，不好了。找到黑魔法师的痕迹了。", 0, 1032212, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("在什么地方？我现在马上过去。", 2, 1032212, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("那地方……在拉尼娅的家附近。", 0, 1032212, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("什么？！", 2, 1032212, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("我们也是刚从工作员O那里收到紧急联络，还不清楚详细情况。我们的工作员很快会向那里出发，请夜光法师也赶快过去吧。", 0, 1032212, true, true)
                        } else {
                            if (status === a++) {
                                cm.forceStartQuest(25659, "");
                                cm.dispose();
                                cm.warp(910142080, 0, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/25659.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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