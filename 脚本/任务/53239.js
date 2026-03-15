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
            cm.sendNext("La cau do sao " + cm.getPlayer().getName() + ", may vien pha le cau dua toi dung tot lam'.")
        } else {
            if (status == 1) {
                cm.sendNextSNoESC("Toi can 1 khau sung moi. Toi da manh len rat nhieu.")
            } else {
                if (status == 2) {
                    cm.sendNext("Cau kha that day. Duoc thoi, hay tim cho toi #z4033252##i4033252# va toi se giup cau.", 9270091)
                } else {
                    if (status == 3) {
                        cm.sendNext("Hay den #m552000073# noi nhung than thoai duoc viet len...", 9270091)
                    } else {
                        if (status == 4) {
                            cm.sendNextSNoESC("(Oh men, lan nay khong biet lai gi nua day. Chep, danh vay)")
                        } else {
                            if (status == 5) {
                                cm.forceStartQuest();
                                cm.warp(552000073, 1);
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
    if (c == -1) {
        cm.dispose()
    } else {
        if (c == 1) {
            status++
        } else {
            status--
        }
        if (status == 0) {
            cm.sendNext("Cau da ve sao. Dua toi nhung vien pha le nao.")
        } else {
            if (status == 1) {
                cm.gainItem(4033252, -30);
                cm.sendNextSNoESC("Ong lam xong sung cho toi roi chu?")
            } else {
                if (status == 2) {
                    cm.sendNext("Dung voi vang cau be, cung sap xong roi. Doi chut di!", 9270091)
                } else {
                    if (status == 3) {
                        cm.sendNextSNoESC("...")
                    } else {
                        if (status == 4) {
                            cm.sendNext("No day roi #z1492142##i1492142#, that tuyet phai khong haha. Day, toi tang cau day.")
                        } else {
                            if (status == 5) {
                                cm.forceCompleteQuest();
                                cm.changeJob(571);
                                cm.gainItem(1492142, 1);
                                cm.dispose()
                            }
                        }
                    }
                }
            }
        }
    }
};