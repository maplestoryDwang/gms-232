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
            cm.sendNext("原来在这里啊。让我找了好久。我从克洛乌那里收到了报告，说#h #你救了谢丽尔。")
        } else {
            if (status == a++) {
                cm.sendNextPrevS("那是必须要做的事情。对了，阿卡伊勒好像到封印黑魔法师的过去的时间神殿去了。")
            } else {
                if (status == a++) {
                    cm.sendNextPrev("是吗？……已经找到阿卡伊勒的痕迹了吗……比我预想的还要快。")
                } else {
                    if (status == a++) {
                        cm.sendNextPrevS("……格莱特？")
                    } else {
                        if (status == a++) {
                            cm.sendNextPrev("呵呵，我不能让你这样卑贱的东西跟在阿卡伊勒后面。这里将是你的坟墓！")
                        } else {
                            if (status == a++) {
                                cm.forceStartQuest();
                                cm.forceStartQuest(31187, 1);
                                cm.spawnMob(9300487, 345, 2);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b %SCRIPT_PATH%#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNext("谢谢你。你能把我们最后的孩子交给我吗？")
        } else {
            if (status == a++) {
                cm.sendOk("等弗里德醒来之后，我会让他带着蛋到安全的地方去。虽然对弗里德非常抱歉，但这是朋友的委托，他一定会用一生去保护他的。这样，我们的希望就能延续到未来。")
            } else {
                if (status == a++) {
                    cm.dispose();
                    cm.forceCompleteQuest()
                }
            }
        }
    }
};