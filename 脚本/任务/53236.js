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
            cm.sendNext("Thoi gian kho luyen the nao " + cm.getPlayer().getName() + ", thu vi chu?", 1072008)
        } else {
            if (status == 1) {
                cm.sendNextSNoESC("Cam on Kyrin, toi thay minh cung manh len kha kha. Toi can 1 suc manh lon hon!")
            } else {
                if (status == 2) {
                    cm.sendNext("Toi nhin thay dieu do trong mat cau. Hay tim gap #p9270091#, anh ta se giup cau. Anh ay da sua giup toi khau sung, that tot bung ^^!", 1072008)
                } else {
                    if (status == 3) {
                        cm.sendNext("Toi se dua cau di gap anh ta. The nao, di luon nhe!", 1072008)
                    } else {
                        if (status == 4) {
                            cm.sendNextSNoESC("Oh, vay thi tot qua. Cam on co Kyrin.")
                        } else {
                            if (status == 5) {
                                cm.forceStartQuest();
                                cm.warp(552000071, 1);
                                cm.dispose()
                            }
                        }
                    }
                }
            }
        }
    }
}

function end(c, b, a) {
    cm.forceCompleteQuest();
    cm.dispose()
};