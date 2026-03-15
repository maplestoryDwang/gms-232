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
            cm.sendNormalTalk("啊，来啦。我拜托的东西呢？", 0, 9390262, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("嗯，可是我在杂货店听说可以送货的呀。", 2, 9390262, true, true)
            } else {
                if (status === a++) {
                    cm.askYesNo("嗯，可以那样的啊。船员们和佣兵们都已经到齐了。好像可以出发了。如何？", 0, 9390262)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(17640, "");
                        cm.sendNormalTalk("(这家伙竟调转话题。) 嗯，我也准备好了。", 2, 9390262, false, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("好的，那就在码头见吧。", 0, 9390262, true, true)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/17640.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("好了，我也现在就去码头吧。", 56, 9390204, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("哎呀，又遇见了呢。", 32, 9390204, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("呃啊！吓了我一大跳！！干嘛呀，在别人背后干嘛呢！", 56, 9390204, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("就是路过的时候看见了而已。", 32, 9390204, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("原来如此。那么就请继续路过吧。我很忙失陪……", 56, 9390204, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("你要去讨伐海盗吗？", 32, 9390204, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("是的，是那样的。怎么了？你感兴趣吗？", 56, 9390204, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("哦呵呵，怎么会呢。我怎么会对那种低俗又野蛮的事情感兴趣呢。那我就告辞了", 32, 9390204, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("…………低俗？野蛮？这人真是……算了。赶紧去码头吧。", 56, 9390204, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.forceCompleteQuest(17640);
                                                cm.forceCompleteQuest(17730);
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
};