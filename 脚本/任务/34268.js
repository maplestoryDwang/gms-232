var status = -1;

function start() {
    action(1, 0, 0)
}

function start(e, d, c) {
    status++;
    var b = -1;
    if (status <= b++) {
        cm.dispose()
    } else {
        if (status == b++) {
            cm.askYesNo_Bottom("(快去消灭阿卡伊勒！)", 56, 0)
        } else {
            if (status === b++) {
                cm.dispose();
                var a = cm.getEventManager("莫拉斯_剧情_战斗2");
                a.startInstance(cm.getPlayer(), cm.getMap());
                cm.playerMessage(5, "消灭区域内的所有怪物后再离开吧。")
            }
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