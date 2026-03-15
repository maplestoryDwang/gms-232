function start(c, b, a) {
    cm.gainItemPeriod(4033611, 5, 24, true);
    cm.forceStartQuest();
    cm.forceCompleteQuest();
    cm.dispose()
}

function end(c, b, a) {
    cm.forceCompleteQuest();
    cm.dispose()
};