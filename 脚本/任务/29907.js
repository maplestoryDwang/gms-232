var status = -1;

function start(c, b, a) {
    if (cm.getPlayer().getJob() > 1000 && cm.getPlayer().getJob() % 100 > 0 && cm.getPlayer().getJob() < 2000) {
        cm.forceStartQuest()
    }
    cm.dispose()
}

function end(c, b, a) {
    if (cm.canHold(1142067, 1) && !cm.haveItem(1142067, 1) && cm.getPlayer().getJob() > 1000 && cm.getPlayer().getJob() % 100 > 0 && cm.getPlayer().getJob() < 2000) {
        cm.gainItem(1142067, 1);
        cm.forceStartQuest();
        cm.forceCompleteQuest()
    }
    cm.dispose()
};