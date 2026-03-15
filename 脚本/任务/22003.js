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
            cm.askAcceptDecline("去农场干活的时候，#b爸爸#k忘了把便当带过去了。你能去#b#m100030300##k给爸爸#b送便当#k吗？", 0, 1013100)
        } else {
            if (status === a++) {
                cm.forceStartQuest(22003, "");
                cm.sendNormalTalk("呵呵，小不点果然是个好孩子～#b从家里出去之后，往左边走#k。爸爸一定饿极了，你最好快点给他送过去。", 0, 1013100, false, true)
            } else {
                if (status === a++) {
                    cm.gainItem(4032448, 1);
                    cm.sendNormalTalk("如果不小心把便当弄丢了，就马上回来。我再给你包一份。", 0, 1013100, true, true)
                } else {
                    if (status === a++) {
                        cm.onScriptMessage_显示教程引导图片(["UI/tutorial/evan/5/0"])
                    } else {
                        if (status === a++) {
                            cm.OnStartNavigation(100030300, 1, "1013103", 22003);
                            cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/22003.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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