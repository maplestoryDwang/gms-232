var status = -1;

function start(c, b, a) {
    if (cm.haveItem(1142257, 1) && cm.getPlayer().getLevel() >= 10) {
        cm.forceStartQuest();
        cm.forceCompleteQuest()
    }
    cm.dispose()
}

function end(c, b, a) {
    if (cm.haveItem(1142257, 1) && cm.getPlayer().getLevel() >= 10) {
        cm.forceStartQuest();
        cm.forceCompleteQuest()
    }
    cm.dispose()
};