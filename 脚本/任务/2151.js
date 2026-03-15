var status = -1;

function start(c, b, a) {
    cm.sendNext("Thank you so much.");
    cm.forceCompleteQuest();
    cm.dispose()
}

function end(c, b, a) {
    cm.dispose()
};