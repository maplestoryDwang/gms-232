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
            cm.sendNormalTalk("你来得正好。这里的情况#b美迪莎#k会告诉你的。让我们来谈谈任务吧。", 0, 2183002, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("在我们阿斯旺，#b通往地上的通道#k除了这里最上层之外，还有其他几个地方也有。\r\n\r\n外部人员好像找到了那些通道。", 0, 2183002, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("不过很遗憾，身为最上层的居民，我们却并不知道其他通道的位置。虽然知道大概的位置，但是因为时间过去了太久，已经记不太清楚了。", 0, 2183002, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("在寻找通道的时候如果遇到了外部人员，请你把他们赶出去。\r\n拜托你了。", 0, 2183002, true, true)
                    } else {
                        if (status === a++) {
                            cm.askAcceptDecline("如果你接受，我马上把你送到阿斯旺下层去。\r\n\r\n你也可以先确认一下位置，然后通过右边的传送口进入。", 0, 2183002)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("希拉和她的士兵们现在逃到了阿斯旺的深处，应该不会有什么危险的事。", 0, 2183002, false, true)
                            } else {
                                if (status === a++) {
                                    cm.forceStartQuest(31053, "");
                                    cm.dispose();
                                    cm.warp(926200001, 0)
                                }
                            }
                        }
                    }
                }
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