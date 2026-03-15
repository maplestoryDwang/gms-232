var status = -1;

function start(c, b, a) {
    cm.sendNext("Find Elder Ashes.");
    cm.forceStartQuest();
    cm.dispose()
}

function end(c, b, a) {
    cm.dispose()
};