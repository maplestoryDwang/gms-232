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
            cm.sendNormalTalk("你看起来心情好像不太好，是我做错什么了吗？", 2, 9390202, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("嗯？怎么可能~ 很高兴能重新见到你。你打算在桑凯梅尔兹待多久？", 0, 9390202, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("这个么…一时半会好像走不了。我感觉事情不会那么顺利地解决。\r\n#b(拜你所赐……。)#k", 2, 9390202, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("那你在桑凯梅尔兹期间，就住在我们商团吧！明天我带你参观下商团！那你先休息吧~！", 0, 9390202, true, true)
                    } else {
                        if (status === a++) {
                            cm.forceCompleteQuest(17622);
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
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/17622.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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