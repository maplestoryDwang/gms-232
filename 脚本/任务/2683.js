var status = -1;

function start(c, b, a) {
    if (c == 1) {
        status++
    } else {
        cm.dispose();
        return
    }
    if (status == 0) {
        cm.forceStartQuest();
        cm.warp(100000201, 0);
        cm.dispose()
    }
}

function end(c, b, a) {
    cm.forceCompleteQuest();
    cm.dispose()
};