var status = -1;

function start(c, b, a) {
    if (c == 1) {
        status++
    } else {
        status--
    }
    cm.dispose()
}

function end(c, b, a) {
    cm.dispose()
};