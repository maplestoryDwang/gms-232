var status = -1;

function start(d, c, b) {
    (d == 1) ? status++ : status--;
    var a = -1;
    cm.forceStartQuest();
    cm.dispose()
}

function end(c, b, a) {
    if (c == 1) {
        status++
    } else {
        status--
    }
    cm.warp(106031002, 0, true);
    cm.forceCompleteQuest();
    cm.gainExp(44000);
    cm.dispose()
};