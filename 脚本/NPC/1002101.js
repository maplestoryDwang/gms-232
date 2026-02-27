var status = -1;

function start() {
    action(1, 0, 0)
}

function action(c, b, a) {
    if (c == 1) {
        status++
    } else {
        if (status == 0) {
            cm.dispose()
        }
        status--
    }
    if (status == 0) {
        cm.askYesNo("Would you like to head back?")
    } else {
        if (status == 1) {
            cm.warp(193000000);
            cm.dispose()
        }
    }
};