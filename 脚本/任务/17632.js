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
            cm.sendNormalTalk("莱文，我们回去吧。", 2, 9390234, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("等下。", 0, 9390234, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("嗯？为什么？什么事？", 2, 9390234, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("不是什么事啦…… 我想再四处转转。", 0, 9390234, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("四处转转。刚刚的事情还没让你清醒吗？", 2, 9390234, true, true)
                        } else {
                            if (status === a++) {
                                cm.askYesNo("不是，不是追阿库旁多。我只是…… 想再四处转转。如果你累的话，你就先回去吧。", 0, 9390234)
                            } else {
                                if (status === a++) {
                                    cm.forceStartQuest(17632, "");
                                    cm.sendNormalTalk("哎呀。我知道了。现在还很危险，我陪你一起吧。", 2, 9390234, false, true)
                                } else {
                                    if (status === a++) {
                                        cm.dispose();
                                        cm.warp(865020300, 3)
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
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/17632.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("这是什么。", 0, 9390250, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("像是什么结界。", 2, 9390250, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("是连接哪里的结界呢。会和阿库旁多有关联吗？", 0, 9390250, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("有那个可能。但是我绝不会赞成进入那里面的。", 2, 9390250, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("嗯，我也不是很想进去。就跟统帅报告下吧。", 0, 9390250, true, true)
                        } else {
                            if (status === a++) {
                                cm.forceCompleteQuest(17632);
                                cm.dispose()
                            }
                        }
                    }
                }
            }
        }
    }
};