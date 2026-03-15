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
            cm.sendNormalTalk("(我把所有的情况都告诉了汉斯。)", 16, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("是这样啊。你没法继续调查……看样子是强力结界在阻挡着异邦人。", 5, 1032001, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("我想，绯红里一定还有需要我们去了解的事情。希望将来能有机会去调查结界另一头的情况……", 5, 1032001, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("总而言之，多亏了你，我才可以获得部分关于之前一直不为人知的绯红的情况。不管是作为冒险岛世界的居民，还是联盟的成员，或是一名学者，我都对那地方很好奇。", 5, 1032001, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("等日后有了调查的方法，我会再行联系的……那我就先行告辞了。\r\n#i1142619##b#t1142619##k\r\n#i2433815##b1个#k\r\n#i2433816##b1个#k", 5, 1032001, true, true)
                        } else {
                            if (status === a++) {
                                cm.forceStartQuest(31259, "");
                                cm.forceCompleteQuest(31259);
                                cm.finishAchievement(1163);
                                cm.gainItem(1142619, 1);
                                cm.gainItem(2433815, 1);
                                cm.gainItem(2433816, 1);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/31259.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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