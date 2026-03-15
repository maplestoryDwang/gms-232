function start(c, b, a) {
    cm.dispose()
}

function end(c, b, a) {
    if (cm.getQuestStatus(50012) == 0) {
        cm.forceStartQuest()
    } else {
        cm.forceCompleteQuest(50015);
        cm.forceCompleteQuest()
    }
    cm.dispose()
};