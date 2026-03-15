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
            cm.sendNormalTalk("最后就剩下黄色坛子了。", 4, 9130107, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("之前已经很辛苦了……不过你能最后帮我一次吗？", 4, 9130107, true, true)
            } else {
                if (status === a++) {
                    cm.askYesNo("真的……绝对是……最后一次。只要这次做完，盟军士兵们就都能得到安息了。", 4, 9130107)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(58933, "");
                        cm.sendNormalTalk("第3个坛子，消灭200个#m811000017:#的 #o9450033:#就行了。", 4, 9130107, false, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("咻，真不知道盟军士兵怎么就变成这样了。", 4, 9130107, true, true)
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
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/58933.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("谢谢！多亏了#h0#，坛子都装满了。", 4, 9130107, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("现在我们得好好保管这些坛子。", 4, 9130107, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("请你等一下再和我对话。", 4, 9130107, true, true)
                } else {
                    if (status === a++) {
                        cm.forceCompleteQuest(58933);
                        cm.dispose()
                    }
                }
            }
        }
    }
};