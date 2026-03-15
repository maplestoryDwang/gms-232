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
            cm.sendNext("现在好一点了吗？\r\n\r\n#b#L0#嗯，刚才稍微有点吃惊，但现在没事了。#l", 1032009)
        } else {
            if (status == a++) {
                cm.sendNext("真是让人吃惊。你做到了迄今为止任何人都没有尝试的事情。\r\n\r\n#b#L0#不过还有人让我去做那么危险的事，自己却在一边笑着看。#l", 1032209)
            } else {
                if (status == a++) {
                    cm.sendNext("别开玩笑。你不知道我刚才有多紧张。我正在想要不要用我的灵魂中蕴含的光明的力量来助你一臂之力。\r\n\r\n#b#L0#玩笑就到这里。现在我的状态看上去怎么样？我自己感觉黑暗的力量就像是加在牛奶里的巧克力一样，慢慢地融入了我的身体。#l", 1032209)
                } else {
                    if (status == a++) {
                        cm.sendNext("就像你感觉到一样。现在你可以像使用光明的力量一样，使用黑暗的力量了。也许还能使用光明和黑暗融合在一起创造出的全新的力量。\r\n\r\n#b#L0#这个样子的话，我应该不会再被黑暗力量所控制，伤害其他人了吧？现在应该可以回去见她了。#l", 1032209)
                    } else {
                        if (status == a++) {
                            cm.askAcceptDecline("是的，没错。", 1032209)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/25616.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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