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
            cm.sendNormalTalk("嗯…", 0, 9390202, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#b(他们表情怎么都那样)#k\r\n早上好，莱文。早上好，吉尔伯特。", 2, 9390202, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("啊！#h0#，你起来啦。", 0, 9390202, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("#b(问问他是不是发生了什么事情好吧？)\r\n#k你睡得好吗，莱文？出了什么事情吗？吉尔伯特和你的表情都不太好。", 2, 9390202, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("其实……发生了一件比较麻烦的事情……虽然和你没什么关系……", 0, 9390202, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("麻烦的事情？", 2, 9390202, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("也不是什么大事。这是我们凯梅尔兹人自己要解决的问题。", 4, 9390203, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("如果可以的话，我想听听事情的详情。", 2, 9390202, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("你听说过叫做#b阿库旁多#k的种族吗？他们是栖息在桑凯梅尔兹运河底下的种族。特别是最近，因为和这些人之间的势力冲突，凯梅尔兹正觉得头疼呢。", 4, 9390203, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("#b(阿库旁多……似乎没听说过啊。总之，他们似乎因为这个问题很头疼。这说不定是个获得吉尔伯特信任的机会，再听听详细情况吧。)#k", 2, 9390202, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.forceCompleteQuest(17624);
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
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/17624.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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