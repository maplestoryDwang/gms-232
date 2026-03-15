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
            cm.sendNormalTalk("#h0#，#h0#。你没事啊。太好了。战胜维丽尔了吗？", 4, 2159405, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("嗯……", 16, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("为什么那样？哪里受伤了吗？", 4, 2159405, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("不是的。嗯，鲁提。维丽尔来抓我，应该是格里梅尔的命令吧？", 16, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("应该是的。为什么？", 4, 2159405, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("我觉得好像不完全是那样，我感觉到了她对我的仇视。除了格里梅尔的命令之外，她本人好像也对我非常讨厌……。", 16, 0, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("怎么可能？一定是你的错觉。她是个没有感情的机器人。没有喜悦和悲伤，也不会有憎恨之类的感情。", 4, 2159405, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("是吗？但是我确实感觉到了……", 16, 0, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("你也还没有完全理解人类的感情，不是吗？是不是把紧张感错当成了其他感觉？不管怎样，那家伙对你确实是个威胁。", 4, 2159405, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("嗯，有道理。看来异次元也不安全。必须得想想别的办法才行。", 16, 0, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("嗯，先一边增强力量，一边寻找别的办法吧。", 4, 2159405, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.forceStartQuest(23657, "");
                                                        cm.forceCompleteQuest(23657);
                                                        cm.gainExp(5000);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/23657.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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