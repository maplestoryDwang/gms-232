var status = -1;

function start(c, b, a) {
    if (cm.canHold(1142130, 1) && !cm.haveItem(1142130, 1) && cm.getPlayer().getLevel() >= 30 && ((cm.getPlayer().getJob() / 100) | 0) == 21) {
        cm.gainItem(1142130, 1);
        cm.forceStartQuest();
        cm.forceCompleteQuest()
    }
    cm.dispose()
}

function end(c, b, a) {
    if (cm.canHold(1142130, 1) && !cm.haveItem(1142130, 1) && cm.getPlayer().getLevel() >= 30 && ((cm.getPlayer().getJob() / 100) | 0) == 21) {
        cm.gainItem(1142130, 1);
        cm.forceStartQuest();
        cm.forceCompleteQuest()
    }
    cm.dispose()
};