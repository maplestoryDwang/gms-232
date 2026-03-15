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
            cm.sendNext("回到金银岛……将难民们安置好之后……我回到村里去看过。紧闭的门……封印……")
        } else {
            if (status == a++) {
                cm.sendNextS("\r\n#b#L0#那是在解开诅咒之前，防止其他人闯入村子的封印……我还没来得及告诉你。#l")
            } else {
                if (status == a++) {
                    cm.sendNext("我在几百年时间里一直过去看，但是封印……一直没有消失……因为无法进入，我只能在外面默默流泪……但是总有一天……我们的村子一定会和以前一样……")
                } else {
                    if (status == a++) {
                        cm.sendNextS("\r\n#b#L0#虽然现在还没恢复原状……#l")
                    } else {
                        if (status == a++) {
                            cm.askAcceptDecline("我一直相信……能像以前一样……见到你……我相信我们一定会再见面的……对不起，我忍不住眼泪。")
                        } else {
                            if (status == a++) {
                                cm.forceStartQuest();
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
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/24070.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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