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
            cm.sendNormalTalk_Bottom("#face1#啊,有好多石头做成的怪物……\r\n路被挡住了。它,它们好像想攻击我们,呃啊！", 36, 1013350, false, true, 1)
        } else {
            if (status === a++) {
                cm.askAcceptDecline_Bottom("#face1#勇士,好像没办法继续往前走了。\r\n如果能消灭掉#b50个#k#r#o2300207##k,应该就能把路打通……", 36, 1013350, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#在一边等着,小孩。我来搞定那些东西。", 36, 1013358, false, true, 1)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(35924, "");
                        cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/35924.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("#face0#路打通了,勇士。\r\n我这就把你带到传来声音的地方去。好了,请跟我来。", 36, 1013350, false, true, 1)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(35924);
                cm.dispose();
                cm.warp(100051042, 1, false)
            }
        }
    }
};