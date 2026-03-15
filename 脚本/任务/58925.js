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
                    cm.forceStartQuest(58925, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/58925.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("为什么大家都在这里呢……她分明是有什么阴谋。", 16, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("进入建筑里面看看。", 16, 0, true, true)
            } else {
                if (status === a++) {
                    cm.forceCompleteQuest(58925);
                    cm.dispose()
                }
            }
        }
    }
};