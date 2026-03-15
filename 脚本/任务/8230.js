var status = -1;

function start(c, b, a) {
    cm.sendNext("Find the Crimsonwood Keystone.");
    cm.forceStartQuest();
    if (!cm.isQuestActive(8223) && !cm.isQuestFinished(8223)) {
        cm.forceStartQuest(8223)
    }
    cm.dispose()
}

function end(c, b, a) {
    if (!cm.isQuestFinished(8223)) {
        cm.sendNext("Please, find it!")
    } else {
        cm.forceCompleteQuest();
        cm.sendNext("Good job. Now we can proceed.")
    }
    cm.dispose()
};