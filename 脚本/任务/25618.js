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
            cm.sendNormalTalk("啊……夜光法师。我不是出现幻觉了吧？", 0, 1032205, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("不是幻觉。过得好吗？", 2, 1032205, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("我醒来后，看到房子着火了，却没有见到夜光法师你，知道我有多担心吗？早知道你是这样的家伙，我当初就不应该带你回来！", 0, 1032205, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("真对不起。那时候我失去了理智。", 2, 1032205, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("……我不是想让夜光法师你道歉，才说的。我是希望，你以后不要再让我担心了。", 0, 1032205, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("我保证。再也不会丢下你一个人。", 2, 1032205, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("呵呵。夜光法师你也不要担心。我很健康哦。房子也很快就修好了。佩妮帮了我很多呢。", 0, 1032205, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("哼。对那种坏蛋好有什么用喵。", 4, 1032206, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("佩妮生气了呢。别忘了约好的事情，一定要买给它哦。", 0, 1032205, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("知道了。谢谢你。", 3, 1032205, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.forceCompleteQuest(25618);
                                                    cm.gainExp(15000);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/25618.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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