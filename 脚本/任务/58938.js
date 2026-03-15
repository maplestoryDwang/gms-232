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
            cm.sendNormalTalk(" 去哪儿了呢……似乎发生了什么事情，不然他也不会那么快就逃走。", 16, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("我得尽快追上去阻止他。", 16, 0, true, true)
            } else {
                if (status === a++) {
                    cm.forceStartQuest(58938, "");
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
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/58938.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("为什么奇怪的鲤鱼……", 16, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("那个少年会在建筑里吗？其实那个少年可能不重要……总之先进去看看吧。", 16, 0, true, true)
            } else {
                if (status === a++) {
                    cm.forceCompleteQuest(58938);
                    cm.dispose()
                }
            }
        }
    }
};