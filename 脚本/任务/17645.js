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
            cm.sendNormalTalk("果然是受了普赛依的指挥的家伙们更有组织性了！", 4, 9390235, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("谢谢你的称赞。", 0, 9390209, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("你是海盗王普赛依！！", 4, 9390202, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("能把我们赶到这里，实力还算是够可以得啦。但是玩笑就开到这为止了。", 0, 9390209, true, true)
                    } else {
                        if (status === a++) {
                            cm.askYesNo("到底谁不行等着瞧就知道了！#h0#！准备好了吗！？", 4, 9390235)
                        } else {
                            if (status === a++) {
                                cm.forceStartQuest(17645, "");
                                cm.sendNormalTalk("把海盗们从这海峡赶出去！！", 5, 9390235, false, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("好的，痛快地干一场吧！！", 5, 9390235, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.spawnMobLimit(9390815, 1, 850, -75, 100);
                                        cm.spawnMobLimit(9390815, 1, 850, -75, 100);
                                        cm.spawnMobLimit(9390815, 1, 850, -75, 100);
                                        cm.spawnMobLimit(9390815, 1, 850, -75, 100);
                                        cm.spawnMobLimit(9390815, 1, 850, -75, 100);
                                        cm.spawnMobLimit(9390815, 1, 850, -75, 100);
                                        cm.spawnMobLimit(9390815, 1, 850, -75, 100);
                                        cm.spawnMobLimit(9390815, 1, 850, -75, 100);
                                        cm.spawnMobLimit(9390815, 1, 850, -75, 100);
                                        cm.spawnMobLimit(9390815, 1, 850, -75, 100);
                                        cm.spawnMobLimit(9390815, 1, 765, -35, 100);
                                        cm.spawnMobLimit(9390815, 1, 765, -35, 100);
                                        cm.spawnMobLimit(9390815, 1, 765, -35, 100);
                                        cm.spawnMobLimit(9390815, 1, 765, -35, 100);
                                        cm.spawnMobLimit(9390815, 1, 765, -35, 100);
                                        cm.spawnMobLimit(9390815, 1, 765, -35, 100);
                                        cm.spawnMobLimit(9390815, 1, 765, -35, 100);
                                        cm.spawnMobLimit(9390815, 1, 765, -35, 100);
                                        cm.spawnMobLimit(9390815, 1, 765, -35, 100);
                                        cm.spawnMobLimit(9390815, 1, 765, -35, 100);
                                        cm.spawnMobLimit(9390815, 1, 700, -5, 100);
                                        cm.spawnMobLimit(9390815, 1, 700, -5, 100);
                                        cm.spawnMobLimit(9390815, 1, 700, -5, 100);
                                        cm.spawnMobLimit(9390815, 1, 700, -5, 100);
                                        cm.spawnMobLimit(9390815, 1, 700, -5, 100);
                                        cm.spawnMobLimit(9390815, 1, 700, -5, 100);
                                        cm.spawnMobLimit(9390815, 1, 700, -5, 100);
                                        cm.spawnMobLimit(9390815, 1, 700, -5, 100);
                                        cm.spawnMobLimit(9390815, 1, 700, -5, 100);
                                        cm.spawnMobLimit(9390815, 1, 700, -5, 100);
                                        cm.spawnMobLimit(9390815, 1, -280, 149, 100);
                                        cm.spawnMobLimit(9390815, 1, -280, 149, 100);
                                        cm.spawnMobLimit(9390815, 1, -280, 149, 100);
                                        cm.spawnMobLimit(9390815, 1, -280, 149, 100);
                                        cm.spawnMobLimit(9390815, 1, -280, 149, 100);
                                        cm.spawnMobLimit(9390815, 1, -250, 149, 100);
                                        cm.spawnMobLimit(9390815, 1, -250, 149, 100);
                                        cm.spawnMobLimit(9390815, 1, -250, 149, 100);
                                        cm.spawnMobLimit(9390815, 1, -250, 149, 100);
                                        cm.spawnMobLimit(9390815, 1, -250, 149, 100);
                                        cm.spawnMobLimit(9390815, 1, -200, 149, 100);
                                        cm.spawnMobLimit(9390815, 1, -200, 149, 100);
                                        cm.spawnMobLimit(9390815, 1, -200, 149, 100);
                                        cm.spawnMobLimit(9390815, 1, -200, 149, 100);
                                        cm.spawnMobLimit(9390815, 1, -200, 149, 100);
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
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/17645.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("呜哦！岂有此理，这么厉害的家伙我真是很久没遇到了！", 0, 9390209, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("彼此彼此。果然是和海盗小毛头有些不一样啊。", 2, 9390209, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("呼。但是还没结束呢。", 0, 9390209, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("你打算搞什么鬼。不管你做什么现在对你来说都毫无胜算了。", 2, 9390209, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("来吧，还是乖乖地束手就擒吧。", 4, 9390235, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("你知道我是怎么坐上海盗王之位的吗。", 0, 9390209, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("现在说那些有什么用。", 2, 9390209, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("比其他海盗佣兵技术更好？射击技术更高？都不是的。我能成为海盗王是因为……", 0, 9390209, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("我对情况判断和我的腿脚比较快而已。", 0, 9390209, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.forceCompleteQuest(17645);
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
};