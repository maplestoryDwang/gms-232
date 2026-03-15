var status = -1;

function end(c, b, a) {
    cm.forceCompleteQuest();
    if (cm.getJob() == 431) {
        cm.changeJob(432);
        cm.gainItem(1132021, 1);
        cm.sendNext("You are now advanced.")
    }
    cm.dispose()
}

function start(c, b, a) {
    cm.dispose()
};