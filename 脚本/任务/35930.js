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
            cm.sendNormalTalk_Bottom("啊……你……", 36, 3003658, false, true, 1)
        } else {
            if (status === a++) {
                cm.askAcceptDecline_Bottom("#face0##b(跟师父讲讲这段时间发生的事情吧。\r\n我好像隐隐约约想到了自己要去的地方。)#k", 36, 1013358, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0##b(跟赫丽娜讲述了之前发生的事。\r\n遗物和古代之弓……以及在遗迹中发生的一切。)#k", 36, 1013358, false, true, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("竟然遇到了这种事……还好你平安无事。\r\n那接下来你打算怎么办呢,#b#ho##k？", 36, 3003658, true, true, 1)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face6#意念让我去寻找属于自己的路。\r\n遗物选择我一定存在着某种理由。", 36, 1013358, true, true, 1)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#我觉得我要走的路,就在他所说的话中。\r\n我要通过冒险来找到答案。", 36, 1013358, true, true, 1)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("看来你又成长了,#b#ho##k。\r\n和离开弓箭手培训中心的时候相比,你更像是一个堂堂正正的冒险家了。", 36, 3003658, true, true, 1)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("希望你能找到属于自己的路。\r\n我会一直在这里关注着你。祝你好运。", 36, 3003658, true, true, 1)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face0#我一定会找到属于我的冒险,师父。后会有期。", 36, 1013358, true, true, 1)
                                        } else {
                                            if (status === a++) {
                                                cm.forceCompleteQuest(35930);
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
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/35930.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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