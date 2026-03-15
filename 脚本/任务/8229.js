var status = -1;

function start(c, b, a) {
    cm.sendNext("Wow. Get this to Jack!");
    cm.forceStartQuest();
    cm.dispose()
}

function end(c, b, a) {
    cm.sendNext("Thanks!");
    if (cm.haveItem(4032018, 1)) {
        cm.gainItem(4032018, -1);
        cm.forceCompleteQuest()
    }
    cm.dispose()
};