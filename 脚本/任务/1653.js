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
            cm.sendNormalTalk("(有封不知从哪里来的信到了我的手里。)这是什么？看上面的十字图案，好像是十字猎人寄来的……打开看看吧。", 16, 9073020, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("你好，如果你看到这封信，就请尽快到我们的据点来吧。之前你成功地完成了任务，令人嘉赏，现在我们需要你的帮忙。详细的内容见面后再说吧。\r\n\r\n - 谢丽尔 -", 0, 9073020, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("附言: 信里放了一张能移动到据点的移动券，你来的时候用它会很方便。得带好了，要是弄丢了，可就得自己想办法过来了。", 0, 9073020, true, true)
                } else {
                    if (status === a++) {
                        cm.askAcceptDecline("到底是多紧急的事情，竟然连移动券都准备好了？去看看吧！", 2, 9073020)
                    } else {
                        if (status === a++) {
                            cm.forceStartQuest(1653, "");
                            cm.sendNormalTalk("这就是那张移动券啊。用这个就能一次性移动到十字猎人据点了。", 17, 9073020, false, true);
                            cm.gainItem(2030026, 1)
                        } else {
                            if (status === a++) {
                                cm.fieldEffect_ScreenMsg("crossHunter/chapter/start3");
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
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b %SCRIPT_PATH%#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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