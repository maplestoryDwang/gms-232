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
            cm.sendNormalTalk("这里就是玩具城？……时间停止的村庄。多亏了你们，我们才能有这奇妙的经历。真没想到我们能见到女神……", 44, 2400005, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#face5#女神…… 很美吧。", 44, 2400006, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("#face5#去了冒险岛世界的话，我们就能见到女神了吗？女神已经被封印，所以见不到了吗？那么打破封印救出女神就可以了吧。", 44, 2400005, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("#face4#嗯。", 44, 2400006, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("那走吧？赫尔和梅拉…… 女神之泪竟然说有要做的事，让我们听听是什么事吧。", 44, 2400005, true, true)
                        } else {
                            if (status === a++) {
                                cm.updateInfoQuest(40600, "");
                                cm.forceStartQuest(40600, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/40600.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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