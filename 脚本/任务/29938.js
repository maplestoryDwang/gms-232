var status = -1;

function start(c, b, a) {
    if (cm.getPlayer().getLevel() >= 10 && ((cm.getPlayer().getJob() / 100) | 0) == 22) {
        if (cm.canHold(1142156, 1) && !cm.haveItem(1142156, 1)) {
            cm.gainItem(1142156, 1)
        }
        cm.forceStartQuest();
        cm.forceCompleteQuest()
    }
    cm.dispose()
}

function end(c, b, a) {
    if (cm.getPlayer().getLevel() >= 10 && ((cm.getPlayer().getJob() / 100) | 0) == 22) {
        if (cm.canHold(1142156, 1) && !cm.haveItem(1142156, 1)) {
            cm.gainItem(1142156, 1)
        }
        cm.forceStartQuest();
        cm.forceCompleteQuest()
    }
    cm.dispose()
};