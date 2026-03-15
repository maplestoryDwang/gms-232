var status = -1;

function start(c, b, a) {
    cm.sendNext("Join the Silent Crusade...");
    cm.forceCompleteQuest();
    cm.dispose()
}

function end(c, b, a) {
    cm.dispose()
};