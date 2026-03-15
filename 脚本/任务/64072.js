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
            if (!cm.isQuestFinished(64062)) {
                cm.sendNormalTalk_Bottom("#b(托尔逊好像有话要说，先问问他吧。) ", 57, 0, false, true)
            } else {
                if (!cm.isQuestFinished(64064)) {
                    cm.sendNormalTalk_Bottom("#b(士兵们好像有话要说，先问问他们吧。) ", 57, 0, false, true)
                } else {
                    if (!cm.isQuestFinished(64067)) {
                        cm.sendNormalTalk_Bottom("#b(艾丽卡她们好像有忙可以帮，先问问她们吧。) ", 57, 0, false, true)
                    } else {
                        cm.sendNormalTalk_Bottom("#b（我已经知道小屋的位置了，现在就出发吧。）", 57, 0, false, true);
                        cm.forceStartQuest()
                    }
                }
            }
        } else {
            if (status == a++) {
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