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
            cm.sendNormalTalk("还以为只要帮着送盒饭就行了，没想到比想象的要麻烦。收到礼物之后，难道不应该答谢吗？", 16, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#b#h0##k！糟了！", 4, 2159405, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("怎么了？", 16, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("集中精神。#p2159391#就在附近。", 4, 2159405, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("……真的。好像在往这边走。", 16, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("距离还有点远。怎么办。要像上次一样战斗吗？", 4, 2159405, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("不能在这里战斗。很容易把其他人给卷进来。", 16, 0, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("那趁他还没过来，我们快逃吧。没想到这么难缠，下次一定要走得远一点。", 4, 2159405, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("等等，不是有从#p1012111#那里得到的东西吗？必须把它交给#p1012106#。", 16, 0, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("在这种情况下，我还有心情管那个吗……没办法了。不能再拖延时间了。快去找#p1012106#吧。", 4, 2159405, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.askAcceptDecline("知道了。先到明明女士那里去吧。", 16, 0)
                                                } else {
                                                    if (status === a++) {
                                                        cm.forceStartQuest(23650, "");
                                                        cm.dispose();
                                                        cm.warp(100000000, 15, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/23650.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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