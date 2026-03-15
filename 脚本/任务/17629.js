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
            cm.askAcceptDecline("这里也到处都是#b#e#o9390810##k#n！那好！我们来做个了结吧！你来消灭#b#e30只左右#k#n这些家伙！", 0, 9390250)
        } else {
            if (status === a++) {
                cm.forceStartQuest(17629, "");
                cm.sendNormalTalk("加油！没剩多少了。", 0, 9390250, false, false)
            } else {
                if (status === a++) {
                    cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/17629.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("咳咳…… 哎呀…… 这下要完了。它们的数量不断变多。喂，#h0#，你还好吗？", 0, 9390250, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("嗯。唉，还可以。这果然是陷阱。", 2, 9390250, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("虽然是陷阱…… 但我们还是战胜了啊。呼……", 0, 9390250, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("没错。但是刚刚太轻率了。", 2, 9390250, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("呼~ 没关系。好像都结束了。它们应该不会再出现了。如果在这里再碰到它们的话…… 我们就难办了。", 0, 9390250, true, true)
                        } else {
                            if (status === a++) {
                                cm.forceCompleteQuest(17629);
                                cm.dispose()
                            }
                        }
                    }
                }
            }
        }
    }
};