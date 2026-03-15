var status = -1;

function start(c, b, a) {
    cm.sendNext("Find someone to translate this.");
    if (cm.canHold(4032032, 1)) {
        cm.gainItem(4032032, 1);
        cm.forceCompleteQuest()
    }
    cm.dispose()
}

function end(c, b, a) {
    cm.dispose()
};