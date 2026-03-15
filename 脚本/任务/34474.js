var status = -1;

function start() {
    action(1, 0, 0)
}

function start(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.forceStartQuest(34474, "");
            cm.forceStartQuest(34480, "free");
            cm.forceStartQuest(34481, "free");
            cm.forceStartQuest(34482, "free");
            cm.forceStartQuest(34483, "free");
            cm.forceStartQuest(34484, "free");
            cm.forceStartQuest(34485, "free");
            cm.forceStartQuest(34486, "free");
            cm.updateInfoQuest(34474, "fin=0");
            cm.dispose();
            cm.warp(940200250, 3, true)
        }
    }
}

function end(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("它的脚本位于： #b /脚本/任务/#e" + e + "#n.js#k你要立刻完成这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceCompleteQuest();
                cm.dispose()
            }
        }
    }
};