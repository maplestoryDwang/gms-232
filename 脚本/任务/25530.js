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
            cm.sendNormalTalk("夜光法师，不用觉得抱歉。这又不是夜光法师的错。", 0, 1032205, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("不是的。夜光法师就是不对喵。夜光法师坏喵！", 4, 1032206, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("嗯。#p1032206#说得对，是我的错。这几年和你在一起实在太幸福了，我就忽略了这重要的事。(既然我能从封印里出来，黑魔法师应该也能……我想的太简单了。)", 2, 1032205, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("夜光法师……我真的不介意。请不要因为这件事而离开我。我真的很喜欢和夜光法师一起生活。", 0, 1032205, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("现在的离开，是为了以后更好的和你在一起生活。如果不能驱散我体内的黑暗，总有一天会伤到你。到那时候，可能比现在危险百倍千倍。我向你保证，一解决问题就立刻回来。", 2, 1032205, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("……真的吗？你保证？", 0, 1032205, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("夜光法师，不用觉得抱歉。这又不是夜光法师的错。", 0, 1032205, false, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("不是的。夜光法师就是不对喵。夜光法师坏喵！", 4, 1032206, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("嗯。#p1032206#说得对，是我的错。这几年和你在一起实在太幸福了，我就忽略了这重要的事。(既然我能从封印里出来，黑魔法师应该也能……我想的太简单了。)", 2, 1032205, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("夜光法师……我真的不介意。请不要因为这件事而离开我。我真的很喜欢和夜光法师一起生活。", 0, 1032205, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("现在的离开，是为了以后更好的和你在一起生活。如果不能驱散我体内的黑暗，总有一天会伤到你。到那时候，可能比现在危险百倍千倍。我向你保证，一解决问题就立刻回来。", 2, 1032205, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("……真的吗？你保证？", 0, 1032205, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk("当然了。和你在一起的日子我很开心。佩妮，拜托你照顾拉尼娅。", 2, 1032205, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk("别担心。我可和某个坏家伙不同喵。", 4, 1032206, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk("嗯。我相信你。那，我走啦。(不知道为什么，想起过去离开希利尼提的时候……这次不同。这次一定……！)", 2, 1032205, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.forceCompleteQuest(25530);
                                                                        cm.gainExp(480);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/25530.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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