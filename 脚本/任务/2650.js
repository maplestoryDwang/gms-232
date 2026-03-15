var status = -1;

function start(c, b, a) {
    if (c == 1) {
        status++
    } else {
        cm.dispose();
        return
    }
    if (status == 0) {
        cm.askYesNo("Do you want to go Kerning Square now?")
    } else {
        if (status == 1) {
            cm.warp(103040000, 0);
            cm.forceCompleteQuest();
            cm.dispose()
        }
    }
}

function end(c, b, a) {
    cm.dispose()
};