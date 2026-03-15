function start(c, b, a) {
    cm.getPlayer().dropMessage(5, "test");
    cm.dispose()
}

function end(c, b, a) {
    cm.forceCompleteQuest();
    cm.dispose()
};