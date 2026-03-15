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
            cm.sendNormalTalk("你有什么话要说吗？我看你好像有话要说。", 0, 1032205, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("你最近有没有发现什么奇怪的现象？比如感觉附近有什么阴暗邪恶的东西。", 2, 1032205, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("这是什么话啊？没发生什么特别的事啊。虽然我去买东西的时候，经过了几次森林，但没感觉到有什么异常啊。", 0, 1032205, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("(看来黑魔法师还没来过这里。但是这也无法打消我的担心。)", 2, 1032205, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("夜光法师？出什么事了吗？", 0, 1032205, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("事情还没完全结束。害我变成这样把你打伤的元凶就藏在某个地方。虽然我克服了黑暗力量，但他有很多被黑暗力量控制的手下。我担心他们趁我不在欺负你，所以才问的。", 2, 1032205, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("如果是这样就不用担心了。这里人迹罕见，也不是什么值得来的地方。", 0, 1032205, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("总之要以防万一。你没事实在太好了。", 2, 1032205, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("(得采取些方法才行。跟追踪黑魔法师的痕迹相比，确保拉尼娅的安全更重要……)", 17, 1032205, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.forceCompleteQuest(25619);
                                                cm.gainExp(11801);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/25619.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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