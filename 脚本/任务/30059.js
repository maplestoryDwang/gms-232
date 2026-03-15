var status = -1;

function start(d, c, b) {
    (d == 1) ? status++ : status--;
    var a = -1;
    cm.warp(106030302, 3);
    cm.dispose()
}

function end(c, b, a) {
    if (c == 1) {
        status++
    } else {
        status--
    }
    cm.dispose()
};