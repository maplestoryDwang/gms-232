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
            cm.askYesNo("你用怪物蛋填充了怪物收藏啊？", 0, 9010000)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(7269);
                cm.updateInfoQuest(18822, "q7269=end");
                cm.sendNormalTalk("消灭怪物，或使用怪物蛋就可以完成怪物收藏，如果对怪物收藏有任何疑问，都可以使用收藏册的帮助重新查看确认，日后也请多多使用哦。", 0, 9010000, false, true)
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