var status = -1;

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
        cm.forceCompleteQuest();
        cm.gainItem(2431132, 1);
        cm.gainItem(3994650, 1);
        cm.dispose()
    }
};