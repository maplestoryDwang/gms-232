var status = -1;

function start(c, b, a) {
    if (cm.getPlayer().getLevel() >= 10 && (cm.getPlayer().getJob() / 100) | 0 == 22) {
        cm.forceStartQuest();
        cm.forceCompleteQuest()
    }
    cm.dispose()
}

function end(c, b, a) {
    if (cm.getPlayer().getLevel() >= 10 && (cm.getPlayer().getJob() / 100) | 0 == 22) {
        cm.forceStartQuest();
        cm.forceCompleteQuest()
    }
    cm.dispose()
};