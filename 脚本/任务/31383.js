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
            cm.sendNormalTalk("多檀智……呜呜，这全都是，全都是因为我……呜呜，就为了提升心跳，是我太胡来了。", 0, 2192010, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#b(询问等多檀智醒过来再表达自己的真心如何。)#k", 2, 2192010, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("呜呜……？", 0, 2192010, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("#b(回想)#k\r\n#i3801184#\r\n我觉得旋转木马是天底下最~酷炫的了，这里有不少风景可以观看呢！", 0, 2192010, true, true)
                    } else {
                        if (status === a++) {
                            cm.askAcceptDecline("好吧，这全都是我的错，等多檀智醒过来，我得去道歉。还有，我会正式表白的，#h0#，最后再麻烦你这一次。", 0, 2192010)
                        } else {
                            if (status === a++) {
                                cm.forceCompleteQuest(31383);
                                cm.updateInfoQuest(31389, "ex=0");
                                cm.sendNormalTalk("谢谢！这个心跳测量仪现在已经不需要了。", 1, 2192010, false, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("那现在该怎么做呢？", 3, 2192010, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("那！便是！", 1, 2192010, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("便是！", 1, 2192010, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("啊……该怎么做呢？", 1, 2192010, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("那个……", 5, 2192024, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("不好意思我插一嘴，请问#b多檀智#k小姐的监护人是？？", 5, 2192024, true, false)
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