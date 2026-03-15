var status = -1;

function start(c, b, a) {
    if (cm.getPlayer().getJob() % 10 > 0 && cm.getPlayer().getJob() < 1000) {
        cm.forceStartQuest()
    }
    cm.dispose()
}

function end(c, b, a) {
    if (cm.canHold(1142109, 1) && !cm.haveItem(1142109, 1) && cm.getPlayer().getJob() % 10 > 0 && cm.getPlayer().getJob() < 1000) {
        cm.gainItem(1142109, 1);
        cm.forceStartQuest();
        cm.forceCompleteQuest()
    }
    cm.dispose()
};