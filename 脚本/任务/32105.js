var status = -1;

function start(c, b, a) {
    cm.forceStartQuest();
    cm.warp(101070010, 0);
    cm.dispose()
}

function end(c, b, a) {
    if (c == 1) {
        status++
    } else {
        status--
    }
    if (status == 0) {
        cm.forceCompleteQuest();
        cm.dispose()
    }
};