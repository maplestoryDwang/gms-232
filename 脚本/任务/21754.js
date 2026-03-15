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
            cm.sendNormalTalk("战神……战神，我就知道一定会再见到你的。因为你是个信守诺言的人。我相信你什么时候一定会来找我的，所以一直在等着你……", 8, 1012100, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#b(#p2131000#幸福地笑了。)#k", 2, 1012100, true, true)
            } else {
                if (status === a++) {
                    cm.askAcceptDecline("那时没能给你的信，终于可以交给你了。过了这么长时间，信已经很旧了……但应该还可以看。", 0, 1012100)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(21754, "");
                        cm.sendNormalTalk("我虽然很想和你多说会儿话，但现在我担任转职官的功能工作，所以没有时间。你以后再来找我把。", 9, 1012100, false, true)
                    } else {
                        if (status === a++) {
                            cm.gainItem(4032328, 1);
                            cm.sendNormalTalk("能帮上你的忙，我感到很高兴。我的朋友……", 9, 1012100, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("#b（从#p2131000#那里收到了信……信里是什么内容呢？和#p1002104#一起看看吧。）#k", 3, 1012100, true, true)
                            } else {
                                if (status === a++) {
                                    cm.dispose();
                                    cm.warp(104000004, 0, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/21754.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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