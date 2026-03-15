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
            cm.askYesNo("好了，海盗王也剿灭了，现在可以回程了吧。得赶紧跟爸……首领大人报告这好消息才行。", 0, 9390244)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("调转船头！目的地桑凯梅尔兹！！", 1, 9390244, false, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("是，遵命！！", 5, 9390217, true, true)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(17648, "");
                        cm.dispose();
                        cm.warp(865000000, 5)
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
            cm.askYesNo("好了，海盗王也剿灭了，现在可以回程了吧。得赶紧跟爸……首领大人报告这好消息才行。", 0, 9390244)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("调转船头！目的地桑凯梅尔兹！！", 1, 9390244, false, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("是，遵命！！", 5, 9390217, true, true)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(17648, "");
                        cm.dispose();
                        cm.warp(865000000, 5)
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
            cm.sendNormalTalk("啊……那个……", 4, 9390202, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("我就在此告辞了。", 4, 9390204, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("我还打算问个名字什么的呢……", 4, 9390202, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("嗯？怎么了？问到名字你打算干嘛？", 2, 9390235, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("啊，没，没什么。就那个……赶紧去报告吧。", 4, 9390202, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("真是个奇怪的家伙。嗯？村里怎么这么乱糟糟的呢？", 2, 9390235, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("就是啊。有什么事吗。那有我们商团的船员。去问问他有什么事。", 4, 9390202, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("请问村里在搞什么活动吗？", 2, 9390235, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("哎哟，莱文大人你来了呀。你来得正是时候！", 4, 9390217, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("有什么事么？为什么这么乱糟糟的。", 4, 9390202, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("其实海本王国又派人来了！", 4, 9390217, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk("海本王国？那些傲慢的家伙又打算来说什么可笑的话？", 4, 9390202, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk("你说海本王国。你在说什么啊？", 2, 9390235, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk("啊……#h0#你还不知道啊。你等一小会儿再跟我说话。我整理一下思绪再跟你说明。", 4, 9390202, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk("啊对了，这是在普赛依船上发现的东西。就当作是谢谢你帮助我送你了。", 4, 9390202, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.forceCompleteQuest(17648);
                                                                        cm.forceCompleteQuest(17731);
                                                                        cm.forceStartQuest(17740, "");
                                                                        cm.gainItem(1102718, 1);
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