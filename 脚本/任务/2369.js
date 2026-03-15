var status = -1;

function end(c, b, a) {
    if (cm.getJob() == 430) {
        cm.changeJob(431);
        cm.sendNext("You are now advanced.")
    }
    cm.forceCompleteQuest();
    cm.dispose()
}

function start(c, b, a) {
    cm.dispose()
};