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
            cm.sendNormalTalk("哦？#h0#，你怎么回来这里？", 0, 9390258, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("我向统帅请求。我说想作为你的朋友帮助你们。", 2, 9390258, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("我爸那个老顽固居然听了你的话。你还真了不起。不管怎么样，那就拜托你了！", 0, 9390258, true, true)
                } else {
                    if (status === a++) {
                        cm.askAcceptDecline("好，我们来好好玩一场吧！你只要帮我消灭#b30只#o9390808##k#n。剩下的就交给我了。", 0, 9390258)
                    } else {
                        if (status === a++) {
                            cm.forceStartQuest(17626, "");
                            cm.sendNormalTalk("我们来打赌，看谁先结束吧？", 0, 9390258, false, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/17626.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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