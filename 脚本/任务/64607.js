var status = -1;
var selectionLog = [];

function start(e, c, b) {
    if (status == 0 && e == 0) {
        cm.dispose();
        return
    }(e == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var d = cm.getMapId();
            if (d < 871200001 || d > 871200001) {
                cm.sendNormalTalk_Bottom("#b似乎已经完成建造了，回家看看吧。\r\n(※该任务只能在我的小屋内进行。)", 57, 0, false, true);
                cm.dispose()
            } else {
                cm.sendNormalTalk_Bottom("#b这真的是我的房子……", 57, 0, false, true)
            }
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#b今后我就能随心所欲地装饰这个房屋了吗？", 57, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#b太棒了！真是太帅了！", 57, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#b但是……应该从哪里开始呢？……", 57, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#b之前都是因为有埃尔宾和艾米的帮助，我才能轻松地享受装修的乐趣……", 57, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#b他们……以后还会帮助我吗？", 57, 0, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#b请埃尔宾和艾米来当我的管家吧！", 57, 0, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.forceCompleteQuest(64607);
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