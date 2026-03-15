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
            cm.sendNext("我想以你的力量，应该不难做到。不过那种黑暗的力量，你是不是感觉很难控制？\r\n\r\n#b#L0#……你是怎么知道的？#l", 1032001)
        } else {
            if (status == a++) {
                cm.sendNext("现在重要的是这个吗？我必须阻止你的那种力量波及魔法密林的居民。所以你先按我说的做，即使自己能够控制的黑暗力量。\r\n\r\n#b#L0#好吧，这也是我希望的。但是别忘了，你也得答应我的请求。#l", 1032001)
            } else {
                if (status == a++) {
                    cm.sendNext("那当然。你想要什么？\r\n\r\n#b#L0#关于黑暗力量的情报，以及欧罗拉的情报，两个我都需要，一个都不能少。#l", 1032001)
                } else {
                    if (status == a++) {
                        cm.askAcceptDecline("知道了。需要消灭的怪物我已经写下来了，你快去吧。我也要到图书馆里去查资料了。", 1032001)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/25573.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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