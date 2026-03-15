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
            cm.sendNormalTalk("#b我能跟你打听一下这尊铜像吗？", 3, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("铜像？你说的是#r投枪铜像#k啊。", 5, 9400214, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("#b铜像的名字叫投枪铜像啊。", 3, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("是的。这铜像是很久很久以前，为了向勇士之地第一位最强勇士表示崇敬而建造的。", 5, 9400214, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("#b原来如此。这尊铜像造得真好，看上去栩栩如生，仿佛马上就要投掷出长枪似的。", 3, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("啊，是的。尽管我们无法看到他真的投掷出长枪的场面，但是那长枪为了方便在危急时刻作为武器使用，是与雕像本体分离的。", 5, 9400214, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("#b这么说那铜像的长枪可以取下来？", 3, 0, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("是的。不过由于放置了太久，可能没法直接使用。", 5, 9400214, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("我觉得给它泼点#r水#k或许能弄下来。", 5, 9400214, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("#b(泼水……。)嗯，谢谢你告诉我这些。", 3, 0, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("#b(泼水……能弄到很多水的地方……)", 3, 0, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.forceCompleteQuest(63102);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/63102.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("#b我能跟你打听一下这尊铜像吗？", 3, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("铜像？你说的是#r投枪铜像#k啊。", 5, 9400214, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("#b铜像的名字叫投枪铜像啊。", 3, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("是的。这铜像是很久很久以前，为了向勇士之地第一位最强勇士表示崇敬而建造的。", 5, 9400214, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("#b原来如此。这尊铜像造得真好，看上去栩栩如生，仿佛马上就要投掷出长枪似的。", 3, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("啊，是的。尽管我们无法看到他真的投掷出长枪的场面，但是那长枪为了方便在危急时刻作为武器使用，是与雕像本体分离的。", 5, 9400214, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("#b这么说那铜像的长枪可以取下来？", 3, 0, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("是的。不过由于放置了太久，可能没法直接使用。", 5, 9400214, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("我觉得给它泼点#r水#k或许能弄下来。", 5, 9400214, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("#b(泼水……。)嗯，谢谢你告诉我这些。", 3, 0, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("#b(泼水……能弄到很多水的地方……)", 3, 0, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.forceCompleteQuest(63102);
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
};