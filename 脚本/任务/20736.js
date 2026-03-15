var status = -1;

function start(c, b, a) {
    cm.forceStartQuest();
    cm.dispose();
    cm.warp(270000100, 0)
}

function end(c, b, a) {
    cm.forceCompleteQuest();
    cm.dispose()
};