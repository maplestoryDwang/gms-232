var status = -1;

function start(c, b, a) {
    if (!cm.canHold(4031894, 1)) {
        cm.sendNext("Please make some space..")
    } else {
        cm.gainItem(4031894, 1);
        cm.forceCompleteQuest()
    }
    cm.dispose()
}

function end(c, b, a) {
    if (!cm.canHold(4031894, 1)) {
        cm.sendNext("Please make some space..")
    } else {
        cm.gainItem(4031894, 1);
        cm.forceCompleteQuest()
    }
    cm.dispose()
};