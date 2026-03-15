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
            cm.forceStartQuest();
            cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/17653.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("来啦。见到班·特来敏了吗？", 0, 9390203, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("是的，见到了。可是……", 2, 9390203, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("可是？", 0, 9390203, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("那个……虽然我不知道书信的内容，但是其中的议事被断然地拒绝了。说全部都是首领的责任让您自己看着办……", 2, 9390203, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("什么？那是我为了自己好才那样做的吗！！", 0, 9390203, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("说商团的事务繁忙所以没法帮忙。", 2, 9390203, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("他的意思是商团的事情比国家的事情更重要吗？呵呵，没看出来啊，真是可耻的人啊！其实那人一直盯着我的位子呢。果然拒绝帮忙。", 0, 9390203, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("反正我知道了。辛苦你了。赶紧去休息吧。", 0, 9390203, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.forceCompleteQuest(17653);
                                            cm.forceCompleteQuest(17740);
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
};