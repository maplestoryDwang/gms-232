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
            cm.sendNormalTalk("我说莱文，普赛依是谁", 2, 9390262, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("嗯？你竟然不知道 #r海盗王普赛依#k？", 0, 9390262, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("哎，你不是忘记了我是从别的地方来的了吧。", 2, 9390262, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("嗯。你来到这里时间不长，不知道也是正常的。如果你有兴趣的话要听我说说吗？", 4, 9390203, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("凯梅尔兹不是以贸易为主而是以渔业为主的国家，这个我已经跟你说过了吧。", 4, 9390203, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("是的，那个已经听说了。", 2, 9390262, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("是的。从那时起至今凯梅尔兹沿岸一直受海盗骚扰。那些家伙小群小群地来抢掠。", 4, 9390203, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("可是，凯梅尔兹正式开始做贸易的同时为了减小受海盗的迫害有组织性的利用了这一点。", 4, 9390203, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("开始的时候还是有效果的。但是，海盗们也许也觉得再那样下去可不行，于是就以最厉害的海盗为中心团结起来，结果形成一个庞大的海盗团。", 4, 9390203, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("那最厉害的海盗就是那叫普赛依的家伙吗？", 2, 9390262, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk("就是那样。结果回到了原点。", 4, 9390203, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.forceCompleteQuest(17636);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/17636.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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