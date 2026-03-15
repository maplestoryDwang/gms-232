var status = -1;

function start(c, b, a) {
    cm.sendNext("Wow. Hold on while I translate this..");
    if (cm.haveItem(4032032, 1)) {
        cm.gainItem(4032032, -1);
        cm.forceStartQuest()
    }
    cm.dispose()
}

function end(c, b, a) {
    cm.sendNext("Here you are!");
    if (cm.canHold(4032018, 1)) {
        cm.gainItem(4032018, 1);
        cm.forceCompleteQuest()
    }
    cm.dispose()
};