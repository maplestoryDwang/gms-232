var status = -1;

function start(c, b, a) {
    if (c == -1) {
        cm.dispose()
    } else {
        if (c == 1) {
            status++
        } else {
            status--
        }
        if (status == 0) {
            cm.sendNext("Cac gia lang van dang chim sau trong giac ngu," + cm.getPlayer().getName() + "!")
        } else {
            if (status == 1) {
                cm.sendNextPrev("Hay tap luyen them nua, 1 ngay nao do hay cuu ho...")
            } else {
                if (status == 2) {
                    cm.sendNext("Mercedes...")
                } else {
                    if (status == 3) {
                        cm.forceStartQuest();
                        cm.changeJob(2310);
                        cm.gainItem(1142337, 1);
                        cm.dispose()
                    }
                }
            }
        }
    }
}

function end(c, b, a) {};