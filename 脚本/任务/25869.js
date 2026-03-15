var status = -1;
var selectionLog = [];

function start(e, d, c) {
    if (status == 0 && e == 0) {
        cm.dispose();
        return
    }(e == 1) ? status++ : status--;
    selectionLog[status] = c;
    var b = -1;
    if (status <= b++) {
        cm.dispose()
    } else {
        if (status == b++) {
            cm.sendNormalTalk("爆莉萌天使，诺巴族终于迎来逆转战局的机会了。", 0, 3000000, false, true)
        } else {
            if (status === b++) {
                cm.sendNormalTalk("(呃？逆转战局的机会？)什么意思？", 2, 3000000, true, true)
            } else {
                if (status === b++) {
                    cm.sendNormalTalk("狂龙战士提议，将麦格纳斯的军队引入后，再一网打尽。", 0, 3000000, true, true)
                } else {
                    if (status === b++) {
                        cm.sendNormalTalk("(听狂龙战士的作战计划。)", 2, 3000000, true, true)
                    } else {
                        if (status === b++) {
                            cm.sendNormalTalk("所以现在我们要解除保护罩。解除保护罩后，那些幽灵会大举进入，得有人去抵挡它们。", 0, 3000000, true, true)
                        } else {
                            if (status === b++) {
                                cm.sendNormalTalk("这个计划是不是太鲁莽了？", 2, 3000000, true, true)
                            } else {
                                if (status === b++) {
                                    cm.sendNormalTalk("确实有些欠考虑，但如果这个计划成功，就能有希望朝收复赫里希安的目标迈进。", 0, 3000000, true, true)
                                } else {
                                    if (status === b++) {
                                        cm.sendNormalTalk("(既然是狂龙战士的提议，应该有点实践价值……)好吧，我们试试吧。我应该去哪里？", 2, 3000000, true, true)
                                    } else {
                                        if (status === b++) {
                                            cm.askYesNo("入侵的敌人数量最多的地方是南侧，拜托你了！#r(接受后将移动到战场。如果任务失败，请重新开始该任务。)#k", 0, 3000000)
                                        } else {
                                            if (status === b++) {
                                                cm.forceStartQuest(25869, "");
                                                var a = cm.getEventManager("爆莉萌天使_战斗5");
                                                a.startInstance(cm.getPlayer(), cm.getMap());
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/25869.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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