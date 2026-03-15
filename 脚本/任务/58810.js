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
            cm.sendNormalTalk_Bottom("#face0#什么事？", 37, 9111005, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("我来是想邀请你成为我的同伴。", 57, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#哼，我可是很忙的，没闲工夫陪你过家家，不过……", 37, 9111005, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("不过……？", 57, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#如果你能帮我做件事，我就考虑下你的请求。", 37, 9111005, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#我必须清算一下我跟镰鼬之间的深仇大恨。你帮我转告他：月圆之夜，月下竹林见。", 37, 9111005, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("……只要帮你传话就行了吗……？", 57, 0, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#总之你先把我的话带到吧。", 37, 9111005, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.forceStartQuest(58810, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/58810.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("镰鼬，无头鬼约你月圆之夜，在月下竹林见面。", 57, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#月圆之夜的话……是今天啊？", 37, 9111003, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("镰鼬，你要去吗？", 57, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#当然得去。我跟无头鬼之间有些旧事得了结一下了，一直逃避也不是办法。你也一起去吧。", 37, 9111003, true, true)
                    } else {
                        if (status === a++) {
                            cm.forceCompleteQuest(58810);
                            cm.dispose();
                            cm.warp(800021115, 0, false)
                        }
                    }
                }
            }
        }
    }
};