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
            cm.sendNormalTalk("#b(他说那些是自己通过正当途径挣来的宝物……阿尔玛因是在撒谎吗？我得去找刚才那人问清楚。)", 3, 0, false, true)
        } else {
            if (status === a++) {
                cm.forceStartQuest(63101, "");
                cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/63101.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("看样子你已经见过阿尔玛因了。我没说错吧，是不是白跑一趟？", 5, 9400314, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#b唔……阿尔玛因说那些是他自己正当赚取的财物。", 3, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("我早料到是这样。阿尔玛因肯定会这么说。", 5, 9400314, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("#b你能不能再详细点跟我说说阿尔玛是怎么掠夺大家的财物的？", 3, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("怎么？你觉得我在撒谎吗？", 5, 9400314, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("#b不，我不是这个意思……", 3, 0, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("行了。阿尔玛因提议要跟我们打赌。一开始听到时我们都觉得很简单，而且看起来也有胜算。", 5, 9400314, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("然而，我们渐渐发现有点不对劲。这场打赌从一开始就注定了阿尔玛因绝对会赢。", 5, 9400314, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("可赌局已经开始了，我们没法反悔。就这样，我们一个接一个地全都中了他的圈套。", 5, 9400314, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("唉，现在来发牢骚又能怎样，事情已经发生了。以后只能注意点别让剩下的财物也被他抢走了。", 5, 9400314, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("说起过去的事，又感到十分的懊悔了。我先告辞了。", 5, 9400314, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.askMenu("#b(唔……原来大家是被不正当的赌局夺去了财物。现在该怎么办。)  \r\n\r\n#b#L0#既然是用不正当的方法攫取的财物，应该还给大家。\r\n\r\n#b#L1#虽说是通过不正当手段获得的，但要阿尔玛因散尽财物，有点太残忍了。", 16, 0)
                                                    } else {
                                                        if (status === a++) {
                                                            selectionLog[100] = b;
                                                            if (selectionLog[100] == 0) {
                                                                cm.sendNormalTalk("#b通过不正当手段夺取的财物不能算作他的财产。得分还给大家。", 3, 0, false, true)
                                                            } else {
                                                                cm.sendNormalTalk("#b虽说是通过不正当手段获得的，但要阿尔玛因散尽财物，有点太残忍了吧。把不应得的财富还回去就行。", 3, 0, false, true)
                                                            }
                                                        } else {
                                                            if (status === a++) {
                                                                if (selectionLog[100] == 0) {
                                                                    cm.sendNormalTalk("#b现在问题是要怎么把那些宝物弄下来……", 3, 0, true, true)
                                                                } else {
                                                                    cm.sendNormalTalk("#b现在问题是要怎么把那些宝物弄下来……", 3, 0, true, true)
                                                                }
                                                                cm.updateInfoQuest(63101, "select=1")
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk("#b#b能不能扔点什么东西给它砸下来？", 3, 0, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.forceCompleteQuest(63101);
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
            }
        }
    }
};