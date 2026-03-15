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
            cm.askMenu("欢迎来到#e#b新服务器#n#k！作为开放纪念活动，我为你准备了以下福利。先来看看吧！\r\n\r\n#L0##b 我想知道新服务器开放福利。\r\n#L1##b 我想领取今天的经验值券。\r\n", 0, 9010000)
        } else {
            if (status === a++) {
                cm.updateInfoQuest(64752, "date=19/12/01;1=0;2=0;set=1;exp=0");
                cm.askMenu("#b#e新服务器#n#k的特别福利！我这就把#e经验值券#n送给你。你可以根据需要分批领取！\r\n\r\n#e[领取经验值券]#n#b\r\n#L1##i2450135:# #b#t2450135#（0/5个）#l#k", 0, 9010000)
            } else {
                if (status === a++) {
                    cm.dispose()
                }
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