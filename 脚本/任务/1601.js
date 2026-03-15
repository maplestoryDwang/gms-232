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
            cm.sendNormalTalk("他们马上就要发起攻击了！不只是我，你也会陷入危险之中的。请击退他们！！", 1, 9073000, false, true)
        } else {
            if (status === a++) {
                cm.spawnMobLimit(9300470, 1, -509, -5, 100);
                cm.spawnMobLimit(9300470, 1, -104, -5, 100);
                cm.spawnMobLimit(9300470, 1, 2, -5, 100);
                cm.spawnMobLimit(9300470, 1, -209, -5, 100);
                cm.spawnMobLimit(9300470, 1, -312, -5, 100);
                cm.spawnMobLimit(9300470, 1, -408, -5, 100);
                cm.spawnMobLimit(9300470, 1, 78, -5, 100);
                cm.forceStartQuest(1601, "");
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