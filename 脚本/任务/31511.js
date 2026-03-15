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
            cm.sendNormalTalk("跟#b#p3001100#联系。", 16, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("嗯，你有事吗？你试过进入#r特雷格罗#k的房间了？", 4, 3001100, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("#b嗯，好像可以正常进去。", 16, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("太好了。不过从现在开始，你就要准备迎战#r特雷格罗#k。", 4, 3001100, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("他会使用各种各样的试剂发动会造成状态异常的攻击，另外房间里很可能会有化学装置。", 4, 3001100, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("我没让你马上去挑战他。请你做好一切准备，觉得差不多能对付他时，再去消灭#r特雷格罗#k。", 4, 3001100, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("你有信心吗？去消灭#r特雷格罗#k吧？", 4, 3001100, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.askAcceptDecline("(现在我准备好挑战#r特雷格罗#k了吗？)", 16, 0)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("你做好一切准备后，就向特雷格罗的房间进攻吧。如果有可能，希望能使他恢复原来的状态，但根据情况，你可以不惜使用残酷的手段消灭他。", 4, 3001100, false, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("祝你好运，我等你的好消息。", 4, 3001100, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.forceStartQuest(31511, "");
                                                    cm.forceStartQuest(31544, "1");
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
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/31511.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("经过一番苦战，终于消灭了特雷格罗。返回#b#p3001100##k那里报告吧。", 16, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("另外，消灭特雷格罗时，获得了龙爪形的印章。跟#b#p3001100##k说说这个印章吧。", 16, 0, true, true)
            } else {
                if (status === a++) {
                    cm.forceCompleteQuest(31511);
                    cm.gainExp(2250000);
                    cm.gainItem(4033405, 1);
                    cm.dispose();
                    cm.warp(401040000, 0, false)
                }
            }
        }
    }
};