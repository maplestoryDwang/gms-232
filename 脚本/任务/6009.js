var status = -1;

function start(c, b, a) {}

function end(c, b, a) {
    if (cm.getPlayer().getLevel() >= 200 && cm.getPlayer().getJob() / 100 == 2) {
        cm.gainItem(1902002, 1);
        cm.forceStartQuest();
        cm.forceCompleteQuest()
    }
    cm.dispose()
};