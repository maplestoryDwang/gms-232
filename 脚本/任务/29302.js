var status = -1;

function start(c, b, a) {
    if (cm.getPlayer().getLevel() >= 200 && ((cm.getPlayer().getJob() / 100) | 0) == 3) {
        cm.forceStartQuest()
    }
    cm.dispose()
}

function end(c, b, a) {
    if (cm.canHold(1142011, 1) && !cm.haveItem(1142011, 1) && cm.getPlayer().getLevel() >= 200 && ((cm.getPlayer().getJob() / 100) | 0) == 3) {
        cm.gainItem(1142011, 1);
        cm.forceStartQuest();
        cm.forceCompleteQuest()
    }
    cm.dispose()
};