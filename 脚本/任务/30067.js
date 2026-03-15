var status = -1;

function start(d, c, b) {
    (d == 1) ? status++ : status--;
    var a = -1;
    cm.warp(106031504, 0);
    cm.forceStartQuest();
    cm.dispose()
}

function end(d, c, b) {
    (d == 1) ? status++ : status--;
    var a = -1;
    cm.dispose()
};