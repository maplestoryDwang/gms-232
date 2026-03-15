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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/40500.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("#b(怎么样？这次……会是真的女神之泪吗？)", 44, 2400005, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#b(不清楚。从外表来看，阿尔杉也和沙马尔、拉尔汉，还有伍龚没什么区别……)", 44, 2400006, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("#b(得接触之后才知道……我们先静静观察下吧。)", 44, 2400005, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("#b(嗯……)", 44, 2400006, true, true)
                    } else {
                        if (status === a++) {
                            cm.gainExp(14190000);
                            cm.forceCompleteQuest(40500);
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
};