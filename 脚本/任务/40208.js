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
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, true, true);
            cm.inGameDirectionEvent_MoveAction(0);
            cm.inGameDirectionEvent_AskAnswerTime(500)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("喂，#p2400006#，你连句话都不说就跑出来怎么可以……", 41, 2400005, false, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("…………", 41, 2400006, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("#face1#好啦好啦！我知道了！按照你的意思做不就行了！先救出#p2430000#就行了吧？", 41, 2400005, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("#face10#……真的吗？真的要救出#p2430000#吗？", 41, 2400006, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("是啊……你真要这样我也没办法。但是这种事情下不为例，以后不能再这样了。", 41, 2400005, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("……那可未必。", 41, 2400006, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("#face1#喂喂！你真是……唉……算了……", 41, 2400005, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("#face4#…………", 41, 2400006, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("好了，走吧。干嘛待在这种地方发呆啊？", 41, 2400005, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("#face5#嗯。", 41, 2400006, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("还有……", 41, 2400005, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk("#face4#嗯？什么？", 41, 2400006, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk("#face1#对不起。", 41, 2400005, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk("嗯？", 41, 2400006, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk("#face1#快走吧！", 41, 2400005, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.forceCompleteQuest(40208);
                                                                            cm.setInGameDirectionMode(false, true, false);
                                                                            cm.gainExp(2801800);
                                                                            cm.dispose();
                                                                            cm.warp(323090120, 2, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/40208.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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