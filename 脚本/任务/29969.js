var status = -1;

function start(c, b, a) {
    if (cm.getQuestStatus(25111) == 2 && cm.getJob() == 2410) {
        if (c == -1) {
            cm.dispose()
        } else {
            if (c == 1) {
                status++
            } else {
                status--
            }
            if (status == 0) {
                cm.sendNext("Lai la " + cm.getPlayer().getName() + " do ak?")
            } else {
                if (status == 1) {
                    cm.sendNextPrev("Ban da trai qua 1 doan duong dai de den day. Sao, thu vi chu?")
                } else {
                    if (status == 2) {
                        cm.sendNextPrev("Toi biet ban den day vi suc manh. No nam ben trong ban, gio toi se danh thuc no len 1 tam cao moi...")
                    } else {
                        if (status == 3) {
                            cm.askMenu("Ban thuc su manh me. Hay su dung suc manh de giup do ban be...va hay cuu co ay...")
                        } else {
                            if (status == 4) {
                                cm.forceStartQuest();
                                cm.dispose()
                            }
                        }
                    }
                }
            }
        }
    }
}

function end(c, b, a) {};