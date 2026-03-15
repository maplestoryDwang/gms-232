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
            cm.sendNormalTalk("喂，你是#b#h0##k吧？呵呵呵，一定想知道我为什么叫你来吧？我叫#b邪摩斯#k。虽然我现在被囚禁在这里，但是我有件重要的事情想拜托你，所以才会叫你过来。对于我，你现在一定有很多疑问吧？呵呵呵。", 0, 2022003, false, true)
        } else {
            if (status === a++) {
                cm.askYesNo("你也看到了，我不是人类，而是侏儒怪。是的，大家都这么叫我。但是我到底是谁？为什么会被关在这里？为什么我记不起小时候的事情？真让人郁闷……你得帮帮我。你能帮帮我这个不幸的人吗？", 0, 2022003)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("马上到我这里来。不知你知不知道，我就在#b冰峰雪域长老公馆地下#k。", 0, 2022003, false, true)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(3116, "");
                        cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/3116.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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