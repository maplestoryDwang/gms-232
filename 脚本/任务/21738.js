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
            cm.forceStartQuest();
            cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/21738.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("你有什么事？虽然我并不欢迎不速之客…………但你的身上却散发一种非比寻常的气息…………看来我得听听你的事情了。", 8, 2032001, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#b(讲述关于#o9300347#的事情。)#k", 2, 2032001, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("#o9300347#？虽然这的确是个严峻的问题…………不过到目前为止应该对#m200000000#还造不成影响。等等，你刚才说#o9300347#在哪儿？", 8, 2032001, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("在#m200060001#。", 2, 2032001, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("#m200060001#？#o9300347#居然在那里，那么你是说有人想要入侵#m920030001#？到底为什么呢？是谁？", 8, 2032001, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("#m920030001#？", 2, 2032001, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("…………你到底是什么人竟然来问这样的问题？你先稍等会儿。我要先卜一卦看你是不是值得信任。", 8, 2032001, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("……………………。", 8, 2032001, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("…………………………………………。", 8, 2032001, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("你，你…………不，你…………完全不同于普通人类。那悠久的岁月，那可怕的宇宙，然而你有着再次战胜它们的伟大命运…………你到底是谁？", 8, 2032001, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.forceCompleteQuest(21738);
                                                    cm.gainExp(7604);
                                                    cm.sendNormalTalk("…………不管是谁都好。占卦已经让我把一切都告诉你了。关于#m920030001#的一切…………", 9, 2032001, true, false);
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
};