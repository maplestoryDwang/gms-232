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
            cm.sendNext("Oh, chang phai" + cm.getPlayer().getName() + " day sao!")
        } else {
            if (status == 1) {
                cm.sendNextPrev("Tot lam, ban da chung to duoc suc manh cua minh. Tuy nhien quang duong van con dai")
            } else {
                if (status == 2) {
                    cm.sendNextPrev("Hay chuan bi hoan thanh nhiem vu cua minh!")
                } else {
                    if (status == 3) {
                        cm.sendNext("Doi toi mot chut nhe...")
                    } else {
                        if (status == 4) {
                            cm.changeJob(2410);
                            cm.forceStartQuest();
                            cm.gainItem(1142376, 1);
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
}

function end(c, b, a) {};