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
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, true, true);
            cm.sendNormalTalk("#face4#终于…………觉醒成了真正的时间超越者。我们做到了吧？", 41, 2400005, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#face5#嗯…… 那我们现在前往冒险岛世界吧。", 41, 2400006, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("#face5#是的。我们已经完全接纳了镜世界。因此接下来，也该接纳冒险岛世界了。有信心吧？", 41, 2400005, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("#face4#嗯！", 41, 2400006, true, true)
                    } else {
                        if (status === a++) {
                            cm.updateInfoQuest(40801, "");
                            cm.forceStartQuest(40801, "");
                            cm.forceCompleteQuest(40801);
                            cm.forceCompleteQuest(40980);
                            cm.inGameDirectionEvent_AskAnswerTime(500);
                            cm.gainItem(1142635, 1);
                            cm.forceStartQuest(32019, "");
                            cm.forceCompleteQuest(32019)
                        } else {
                            if (status === a++) {
                                cm.setInGameDirectionMode(false, true, false);
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/40801.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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