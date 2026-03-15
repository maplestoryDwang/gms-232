var status = -1;

function start(c, b, a) {
    cm.sendNext("Go talk to Chief Stan of Henesys.");
    cm.forceCompleteQuest();
    cm.dispose()
}

function end(c, b, a) {
    cm.gainExp(100);
    cm.forceCompleteQuest();
    cm.dispose()
};