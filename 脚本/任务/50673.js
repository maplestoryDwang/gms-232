var status = -1;

function start(c, b, a) {
    cm.sendNext("Come to El Nath.");
    cm.forceCompleteQuest();
    cm.dispose()
}

function end(c, b, a) {
    cm.dispose()
};