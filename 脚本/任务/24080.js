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
            cm.sendNextS("\r\n#b#L0#有一个带着斗笠，脸上蒙着布，看不见长相。衣服和武陵的服饰很像。说话有点古朴，但不是我们那个时代的人。除此之外……对了，虽然他穿着黑衣服，很难发现，但是我看见衣服上有翅膀装饰……#l")
        } else {
            if (status == a++) {
                cm.sendNext("那样的话，那个男人就是黑色之翼的成员……！一定是他们在打你的注意！")
            } else {
                if (status == a++) {
                    cm.sendNextS("\r\n#b#L0#就是那些人吗……？但是有点奇怪。他们应该对我不是很熟悉，但是听唔明说话的口气，好像对我很了解。还有，他提到的那个人……到底是谁呢？#l")
                } else {
                    if (status == a++) {
                        cm.askAcceptDecline("嗯？但是……呼，好吧。能阻止你的人……只有阿斯迪拉。不过阿斯迪拉应该不会阻止你……好吧，你能到勇士部落对那个无名男子进行调查吗？")
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/24080.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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