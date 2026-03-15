var status = -1;

function end(c, b, a) {
    if (c == 0) {
        if (status == 0) {
            cm.sendNext("This is an important decision to make.");
            cm.dispose();
            return
        }
        status--
    } else {
        status++
    }
    if (status == 0) {
        cm.sendNext("(This oughtta get us off of this rock...)")
    } else {
        if (status == 1) {
            cm.sendNextSNoESC("#b(I've got the Master Key. What am I waiting for?！I should get back to #eBurke.)")
        } else {
            if (status == 2) {
                cm.warp(552000022);
                cm.forceCompleteQuest(53247);
                cm.dispose()
            }
        }
    }
};