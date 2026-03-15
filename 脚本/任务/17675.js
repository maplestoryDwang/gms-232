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
            cm.sendNormalTalk_Bottom("……。那么我先告辞了。", 36, 9390240, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("莱文。", 56, 9390256, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("嗯？啊，你来啦。我听首领说了。准备好的话……", 32, 9390256, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("怎么回事。两人是什么关系啊。", 56, 9390256, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("嗯？啊……你是说克莱尔小姐吧？", 32, 9390256, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("怎么回事……怎么回事怎么回事……称呼从#r特来敏小姐#k变成了#b克莱尔小姐#k了呢。这是怎么回事。两人究竟发生了什么事。", 56, 9390256, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("啊……哈哈……不就是更亲近了一些而已嘛。", 32, 9390256, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("就算是那样眼神也非比寻常啊。好好把握吧。", 56, 9390256, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("少来了。我现在还有好多事要做好多东西要学呢。我知道我自己在很多方面都非常不足以至于还不能够对另一个人的人生负责。", 32, 9390256, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("(结婚……我还没说到结婚呢……)", 56, 9390256, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.askYesNo_Bottom("啊，对了，离出航貌似还有一些时间。不忙的话能拜托你件事吗？", 32, 9390256)
                                                } else {
                                                    if (status === a++) {
                                                        cm.forceStartQuest(17675, "");
                                                        cm.sendNormalTalk_Bottom("这种情况下有事拜托我。说吧什么事。", 56, 9390256, false, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("呃，呃嗯。其实刚刚我想把这封信给克莱尔小姐的，但是丢了魂了结果没把信给她。你替我转交给她吧。可能又马上要去海本王国了，你得赶紧了。", 32, 9390256, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("你亲手交给她去岂不更好？现在被拖去海本王国的话，就不知道什么时候能再见了。", 56, 9390256, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("我当然也想亲手交给她啦。刚刚分手我就已经开始想她了。", 32, 9390256, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("(呃哦……)", 56, 9390256, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("但是现在还不是时候。我要变成更帅的男人再出现在她面前。还有，两人各在远方思念对方也很浪漫不是吗？哈哈", 32, 9390256, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk_Bottom("啊啊，好吧，我知道了。我会支持你的，你这家伙。", 56, 9390256, true, true)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/17675.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("克莱尔，请稍等。", 56, 9390240, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("嗯？啊…那……", 32, 9390240, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("是#h0#。如此看来我还没介绍过我的名字呢。", 56, 9390240, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("啊，是的，#h0#。有什么事吗？找我有事吗？", 32, 9390240, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("啊，这是莱文让我转交给你的。", 56, 9390240, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("啊，好的。谢谢你了。辛苦你了。", 32, 9390240, true, true)
                            } else {
                                if (status === a++) {
                                    cm.forceCompleteQuest(17675);
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