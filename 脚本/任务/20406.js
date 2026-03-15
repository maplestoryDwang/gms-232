var status = -1;

function start(c, b, a) {
    cm.sendNext("Maybe you should go back to the cave to see if anyone is there...");
    cm.forceStartQuest();
    cm.forceCompleteQuest();
    cm.dispose()
}

function end(c, b, a) {
    cm.forceStartQuest();
    cm.forceCompleteQuest();
    cm.dispose()
};