var status = -1;

function start(c, b, a) {}

function end(c, b, a) {
    if (cm.canHold(1142137, 1) && !cm.haveItem(1142137, 1)) {
        cm.gainItem(1142137, 1);
        cm.forceStartQuest();
        cm.forceCompleteQuest()
    }
    cm.dispose()
};