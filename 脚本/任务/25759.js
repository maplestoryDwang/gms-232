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
            cm.sendNext("狂龙战士，现在最好让贝德罗斯一个人待着。")
        } else {
            if (status == a++) {
                cm.sendNextS("\r\n#b迪奥，你哪里受伤了吗？#k")
            } else {
                if (status == a++) {
                    cm.sendNext("啊，这……这个？只不过是不小心摔倒了。你也知道，我一向都冒冒失失的。")
                } else {
                    if (status == a++) {
                        cm.sendNextS("#b这不像是摔伤啊……#k")
                    } else {
                        if (status == a++) {
                            cm.sendNext("啊，对了。狂龙战士，你没事吧？你不是受到麦格纳斯的攻击了吗？")
                        } else {
                            if (status == a++) {
                                cm.sendNextS("\r\n#b 虽然受了点伤，但很快就会没事的。你是怎么知道我被麦格纳斯打伤的？#k")
                            } else {
                                if (status == a++) {
                                    cm.askAcceptDecline("嗯……嗯？哈哈哈，是你和贝德罗斯说话的时候我在旁边听到的，哈哈哈。贝德罗斯好像受了很大的打击。什么？你没有战胜麦格纳斯的自信？别太自责了。谁都有弱的时候。")
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/25759.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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