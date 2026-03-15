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
            cm.sendNormalTalk("大事不好了。这可怎么办呢。", 0, 9390217, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("你有什么事情吗？", 2, 9390217, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("你还没走啊？别提了。我把这次的交易物品寄放在交易所，结果物品都神不知鬼不觉地消失了！", 0, 9390217, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("神不知鬼不觉地消失了，你是指被偷了？", 2, 9390217, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("嗯，没错！是被偷了。但说 '我'是小偷，这太荒唐了……", 0, 9390217, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("我只是说被偷了，什么时候说你是小偷了？你什么意思啊？你是有双胞胎兄弟，还是刚刚出现的是幽灵？", 2, 9390217, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("我没有双胞胎兄弟。你说得没错！幽灵！他们说有个跟我长得一样的家伙出现，拿走了交易品。但是我发誓，绝对不是我！但是居然说我拿走了。是幽灵。现在该怎么办？谁会相信我说的话呢。我肯定会被炒鱿鱼的。", 0, 9390217, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.askYesNo("#b(他到底在说什么啊，我怎么一点都不懂。等下…… 说不定这是个机会。说不定能趁这次机会进入达尼尔拉商团。再调查一下？)#k", 2, 9390217)
                                    } else {
                                        if (status === a++) {
                                            cm.forceStartQuest(17616, "");
                                            cm.sendNormalTalk("#b(先去交易所，了解下事情的详细经过吧。)#k", 2, 9390217, false, true)
                                        } else {
                                            if (status === a++) {
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
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/17616.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("欢迎光临。我能帮你什么吗？", 0, 9390220, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("听说达尼尔拉商团的交易品丢了，我能了解下详细情况吗？", 2, 9390220, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("你是说达尼尔拉商团的交易品啊。几天前，达尼尔拉商团的人在这寄放了大量的交易品，不久前，他又来拿走了。", 0, 9390220, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("你知道是谁来拿走的吗？", 2, 9390220, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("嗯，和把东西寄放过来的是同一个人。", 0, 9390220, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("嗯…… 真是奇怪。是怎么回事呢。", 2, 9390220, true, true)
                            } else {
                                if (status === a++) {
                                    cm.forceCompleteQuest(17616);
                                    cm.dispose()
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};