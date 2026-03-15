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
            cm.sendNext("我之前真的很犹豫。当时冒险岛的时间已经过了数百年这件事让你受到了很大的冲击，我实在不敢告诉你下面这件事。所以，我一直在等待你认可并接受现在的状况。我觉得现在应该可以告诉你了。不，我必须要告诉你。", 1012100)
        } else {
            if (status == a++) {
                cm.sendNext("你一直想见到的那位朋友，弗里德…… 虽然我还不能确认，不过他或许已经死了呢。他或许是……", 1012100)
            } else {
                if (status == a++) {
                    cm.sendNextS("…等下，你现在在说什么呢？你说那些家伙受到了黑魔法师的诅咒，被囚禁在冰块之中？", 1012100)
                } else {
                    if (status == a++) {
                        cm.sendNext("没错。但是弗里德躲过了诅咒。准确地说，是玛瑙龙和阿弗利埃代他受到了诅咒。因此，弗里德才没有被囚禁在冰块之中…… 我想你也知道，他不是精灵，只是平凡的人类。", 1012100)
                    } else {
                        if (status == a++) {
                            cm.sendNextS("……你是说他现在死了？", 1012100)
                        } else {
                            if (status == a++) {
                                cm.sendNext("……或许吧。其他的英雄被囚禁在冰块里之后，他就到世界各处，把其他英雄的事迹告诉世人。不过，不知道为什么我没有听到有关你的事迹。总之，那也是数百年前的事情了。就算他是再厉害的魔法师，也无法逃避岁月的流逝。", 1012100)
                            } else {
                                if (status == a++) {
                                    cm.sendNextS("（死了？那个家伙？没办法再见面了？那傻瓜一样的笑容……现在见不到……了吗……？）", 1012100)
                                } else {
                                    if (status == a++) {
                                        cm.askAcceptDecline("代弗里德受到诅咒的阿弗利埃从诅咒中苏醒了…… 失去契约者的玛瑙龙会变成什么样，身为弗里德朋友的你应该更清楚吧。你要去见见阿弗利埃吗？阿弗利埃说不定会知道些什么呢。", 1012100)
                                    } else {
                                        if (status == a++) {
                                            cm.warp(914100011, 0, false);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/38037.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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