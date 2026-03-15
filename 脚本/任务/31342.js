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
            cm.askYesNo("好的，现在出发吗？乘坐升降机，可以沿着岩壁巨人的身体爬上去。他的身体非常巨大，爬上去需要一些时间。请做好充分的准备。", 0, 2210004)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("也许会受到虫子的袭击。那种时候最好是使用枪。\r\n\r\n#r(枪可以通过鼠标点击使用。)#k", 1, 2210004, false, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("#fMob/9307006.img/fly/0# \r\n黄蜂冲过来的话，一定要毫不犹豫地把它们消灭掉。当然，时间和子弹是有限制的，一定要记住。", 1, 2210004, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("#fMob/9307008.img/fly/0# \r\n如果有毒黄蜂飞过来，绝对不能开枪。如果毒素顺着风飘过来，就会造成致命的危害。", 1, 2210004, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("#fMob/9307009.img/fly/0# \r\n黄蜂将军飞在很高的地方，大多数情况下看不太清楚。不过如果能消灭掉黄蜂将军，其他的黄蜂就会被吓跑。", 1, 2210004, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("好了，长话短说，我们快出发吧。", 1, 2210004, true, true)
                            } else {
                                if (status === a++) {
                                    cm.dispose();
                                    cm.openNpc("岩壁巨人_升降突破")
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/31342.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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