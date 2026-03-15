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
                cm.sendNextPrev("Tot lam, ban da chung to duoc suc manh cua minh.")
            } else {
                if (status == 2) {
                    cm.sendNext("Hay den gap #p1101000# va nhan phan thuong cho huyen thoai!")
                } else {
                    if (status == 3) {
                        cm.forceStartQuest();
                        cm.gainItem(1142336, 1);
                        cm.dispose()
                    }
                }
            }
        }
    }
}

function end(c, b, a) {};