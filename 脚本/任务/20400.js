var status = -1;

function start(c, b, a) {
    cm.sendNext("Please go find Jane in El Nath for more information.");
    cm.forceStartQuest();
    cm.forceCompleteQuest();
    cm.dispose()
}

function end(c, b, a) {
    cm.forceStartQuest();
    cm.forceCompleteQuest();
    cm.dispose()
};