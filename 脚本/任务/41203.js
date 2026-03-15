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
            cm.sendNormalTalk("美丽的乐迪安，你可以嫁给我吗？", 4, 2450016, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("……这事也太突然了……能不能给我时间让我考虑一下？", 0, 2450015, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("当然，我等你的好消息。", 4, 2450016, true, true)
                } else {
                    if (status === a++) {
                        cm.updateInfoQuest(41203, "");
                        cm.forceStartQuest(41203, "");
                        cm.sendNormalTalk("收到了这么大的钻戒，但是也开心不起来呢。#b阿岚#k，这男人知不知道别人向我求婚呢？恐怕现在还在忙着开发机器人吧。", 0, 2450015, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("我们约定结婚都已过了10年，但是他却什么话都不说。我虽然很爱他，但是拖了这么长时间，我也逐渐失去信心了。#b阿岚#k到底想不想和我结婚呢？", 0, 2450015, true, false)
                        } else {
                            if (status === a++) {
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/41203.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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