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
            cm.sendNext("Cau da den roi day ak " + cm.getPlayer().getName() + ", Kyrin co noi voi toi ve cau.", 9270091)
        } else {
            if (status == 1) {
                cm.sendNextSNoESC("Kyrin noi rang ong la mot nguoi lam sung rat gioi, va chuyen loi cam on ve khau sung voi ong.")
            } else {
                if (status == 2) {
                    cm.sendNext("Oh khong co gi. Toi la tho lam sung gioi nhat o day. Neu cau muon 1 khau sung tot, toi se lam giup cau. Cau hay tim cho toi 1 vai thu truoc nhe?", 9270091)
                } else {
                    if (status == 3) {
                        cm.sendNext("Nguoi ta noi rang muon tim vien pha le mau xanh thi phai den #m552000072# ma toi lai khong co thoi gian de den 1 noi toi tam am thap nhu the. ", 9270091)
                    } else {
                        if (status == 4) {
                            cm.sendNextSNoESC("Khong van de gi. Hay dua toi den do")
                        } else {
                            if (status == 5) {
                                cm.forceStartQuest();
                                cm.warp(552000072, 1);
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