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
            cm.sendNext("好久不见。我知道你在研究玛瑙龙，我有个好消息要告诉你。我的朋友——在神木村照顾幼龙的哈夫林村长塔塔曼说知道有关玛瑙龙的事情。")
        } else {
            if (status == a++) {
                cm.sendNextS("\r\n#b#L0#他可以辨认玛瑙龙吗？#l")
            } else {
                if (status == a++) {
                    cm.sendNext("当然，只要有一片鳞片，就能分辨出什么龙。他对龙非常熟悉……")
                } else {
                    if (status == a++) {
                        cm.sendNextS("\r\n#b#L0#那他知道玛瑙龙灭绝的原因吗？#l")
                    } else {
                        if (status == a++) {
                            cm.sendNext("他知道但可能不会告诉你，他连我都不会告诉……就好像会有某种负罪感一样……")
                        } else {
                            if (status == a++) {
                                cm.sendNextS("\r\n#b#L0#那我该怎么做？#l")
                            } else {
                                if (status == a++) {
                                    cm.askAcceptDecline("这个嘛……你还是先给他一片玛瑙龙的鳞片，也许他会为了知道你从哪里得到的，而把故事讲给你听。")
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/22562.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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