var status = -1;

function end(c, b, a) {
    cm.forceCompleteQuest();
    if (cm.getJob() == 400) {
        cm.changeJob(430);
        cm.resetStats(4, 25, 4, 4);
        cm.expandInventory(1, 4);
        cm.expandInventory(2, 4);
        cm.expandInventory(3, 4);
        cm.expandInventory(4, 4);
        cm.gainItem(1342000, 1);
        cm.sendNext("You are now a Dual Blader.")
    }
    cm.dispose()
}

function start(c, b, a) {
    cm.dispose()
};