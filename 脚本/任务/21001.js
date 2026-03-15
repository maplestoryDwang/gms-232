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
            cm.forceCompleteQuest(21000);
            cm.askAcceptDecline("呃呃……吓死我了……快，快带到赫丽娜那边去！", 0, 1209006)
        } else {
            if (status === a++) {
                cm.forceStartQuest(21001, "");
                cm.gainItem(4001271, 1);
                cm.dispose();
                cm.warp(914000500, 1, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/21001.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.askYesNo("呵呵，平安回来了？孩子呢？孩子也带回来了吗？", 0, 1209007)
        } else {
            if (status === a++) {
                cm.forceStartQuest(21001, "");
                cm.forceCompleteQuest(21001);
                cm.sendNormalTalk("太好了……真是太好了。", 9, 1209007, false, true)
            } else {
                if (status === a++) {
                    cm.gainItem(4001271, -1);
                    cm.sendNormalTalk("赶快上船！已经没时间了！", 3, 1209007, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("啊，没错。现在不是感伤的时候。黑魔法师的气息越来越近！似乎他们已经察觉方舟的位置，得赶紧启航，不然就来不及了！", 9, 1209007, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("立刻出发！", 3, 1209007, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("战神！请你也上船吧！我们理解你渴望战斗的心情……不过，现在已经晚了！战斗就交给你的那些同伴吧，和我们一起去金银岛吧！", 9, 1209007, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("不行！", 3, 1209007, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("赫丽娜，你先出发去金银岛。一定要活着，我们一定会再见的。我要和同伴们一起同黑魔法师战斗！", 3, 1209007, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.eventSKill(0);
                                            cm.dispose();
                                            cm.warp(914090010, 0, false)
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