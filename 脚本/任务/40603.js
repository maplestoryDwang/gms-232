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
            cm.forceCompleteQuest(40962);
            cm.sendNormalTalk("……？你是说在时间碎片生成的空间中…… 找出女神所在的空间？……恩。当然可以。但是很危险。", 32, 2470000, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("时间碎片是在玩具城时间停止时意外产生的…… 虽说在这其中能找到女神所在的空间，但我们无法知道那个空间的情况。", 32, 2470000, true, true)
            } else {
                if (status === a++) {
                    cm.askYesNo("你们也可能去到女神正处于危险状况的空间。即使这样，你们还是想去见女神吗？那么，我就把你们送到女神所在的空间吧。", 32, 2470000)
                } else {
                    if (status === a++) {
                        cm.updateInfoQuest(40603, "");
                        cm.forceStartQuest(40603, "");
                        cm.dispose();
                        cm.warp(327090310, 0, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/40603.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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