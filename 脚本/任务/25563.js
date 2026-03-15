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
            cm.sendNext("初次见面。找我有什么事吗？\r\n\r\n#b#L0#嗯，先从什么问起呢……你听说过黑魔法师吗？#l", 1032100)
        } else {
            if (status == a++) {
                cm.sendNext("黑魔法师据说在几百年前被五位勇士击败了。\r\n\r\n#b#L0#已经过去几百年了吗？那你听说过一个名叫欧罗拉的组织吗？#l", 1032100)
            } else {
                if (status == a++) {
                    cm.sendNext("欧罗拉？名字不错，但我好像没印象。\r\n\r\n#b#L0#我离开之后，只剩下两个人。其中一个受了重伤，随时都会死去，不可能活几百年时间。好吧，就当是从头开始把。#l", 1032100)
                } else {
                    if (status == a++) {
                        cm.askAcceptDecline("从刚才开始，你就一直在我面前说些莫名其妙的话。感觉怪怪的。", 1032100)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/25563.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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