var status = -1;

function start(c, b, a) {
    cm.dispose()
}

function end(c, b, a) {
    if (c == 0 && b == 0) {
        status--
    } else {
        if (c == -1) {
            cm.dispose();
            return
        } else {
            status++
        }
    }
    if (status == 0) {
        cm.sendOk("多亏了你，我们一族才找回了和平。我会一辈子记着你的恩情的。")
    } else {
        if (status == 1) {
            cm.gainExp(510000);
            cm.forceCompleteQuest();
            cm.dispose()
        } else {
            cm.dispose()
        }
    }
};