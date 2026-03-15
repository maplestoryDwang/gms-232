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
            cm.sendNormalTalk("搞什么。怎么这么迟才来。", 0, 9390235, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("啊，对不起，出了点小事。", 2, 9390235, true, true)
            } else {
                if (status === a++) {
                    cm.askYesNo("小事儿？嗯，算了。赶紧上船吧。都准备好了吧？这次离开很长时间回不来的，需要的东西可都带齐了。", 0, 9390235)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("好了，我作为船长有事要处理就先进去了。", 32, 9390235, false, true)
                    } else {
                        if (status === a++) {
                            cm.forceStartQuest(17641, "");
                            cm.sendNormalTalk_Bottom("没问题。去吧。", 56, 9390235, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("喔啦啦，这真巧啊。", 36, 9390204, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("……………………", 56, 9390235, true, true)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/17641.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("你在这儿干嘛呢？", 32, 9390204, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("…………………………", 56, 9390204, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("啊，你说过是要讨伐海盗还是什么的对吧。", 32, 9390204, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("…………………………", 56, 9390204, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("可是你能做到吗？看上去佣兵人数也不多，而且没个能值得信赖的人……", 32, 9390204, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("…………走吧。", 56, 9390204, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("哎？走吧？走去哪儿？", 32, 9390204, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("都到这时候了你就直接说吧。想一起去。", 56, 9390204, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("…………虽然我是个大忙人，但是你坚持需要帮助的话，我就答应你吧。走吧。", 32, 9390204, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("…………这女孩到底干嘛的呀。可是……我随便接收下来没问题吗。让她跟莱文说一声他会看着办的吧。", 56, 9390204, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.forceCompleteQuest(17641);
                                                    cm.dispose();
                                                    cm.warp(865010001, 0)
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