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
            cm.sendNormalTalk_Bottom("#face4#额！额啊啊啊啊……", 37, 2074151, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("哎哟……好不容易才熄灭了所有的火，\r\n现在应该可以不用再担心了……", 37, 2074105, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("……哦，你？鬼怪？你是鬼怪吗？", 37, 2074105, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face4#朴，大，爷！你这个混账东西！", 37, 2074151, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face4#你这个混蛋！\r\n你倒是亲口说说是怎么回事。", 37, 2074151, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("鬼怪你，这段时间都去哪儿了，\r\n还有，你让我说什么啊？", 37, 2074105, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face3#你亲口说说，到底对九尾狐说了有关宝玉的什么事情！", 37, 2074151, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("我不过是……不希望它碰到那东西所以就说了……", 37, 2074105, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face3#你到底说了什么！", 37, 2074151, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("我说有可能会变得和原来的自己完全不一样……", 37, 2074105, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.dispose();
                                                    cm.warp(224000064, 0)
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