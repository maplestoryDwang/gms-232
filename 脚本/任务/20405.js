var status = -1;

function start(c, b, a) {
    cm.sendNext("Go back to Erev to report about the situation.");
    cm.forceStartQuest();
    cm.forceCompleteQuest();
    cm.dispose()
}

function end(c, b, a) {
    cm.forceStartQuest();
    cm.forceCompleteQuest();
    cm.dispose()
};