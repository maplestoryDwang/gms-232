var status = -1;
var t1 = new Date().getTime();
var t2 = new Date().getTime();
var time = 0;

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
            cm.setInGameDirectionMode(true);
            delay(2000);
            cm.sendDirectionInfo("Effect/DirectionNewPirate.img/effect/tuto/monAttack0");
            delay(2000);
            cm.sendDirectionInfo("Effect/DirectionNewPirate.img/effect/tuto/monAttack1");
            delay(5000);
            cm.sendNext("Hay ra khoi day ngay truoc khi qua muon!", 9270092)
        } else {
            if (status == 1) {
                cm.sendNext(cm.getPlayer().getName() + " di di...", 9270092)
            } else {
                if (status == 2) {
                    cm.sendNextSNoESC("Hay roi khoi day cung toi, Burke. Co gang len")
                } else {
                    if (status == 3) {
                        cm.sendNext("Toi da sai lam. Toi da muon suc manh cua cau. Toi da muon giet cau！Chung...", 9270092)
                    } else {
                        if (status == 4) {
                            cm.sendNext("Chung biet tat ca ve #bThe core#k. Toi da nham khi nghi rang toi co the co duoc suc manh tu chung！Xin loi " + cm.c.getPlayer().getName(), 9270092)
                        } else {
                            if (status == 5) {
                                cm.sendNextSNoESC("Vay tai sao anh de toi song, Burke?")
                            } else {
                                if (status == 6) {
                                    cm.sendNext("Toi cam han suc manh do, khong phai anh!", 9270092)
                                } else {
                                    if (status == 7) {
                                        cm.sendNext("Chay di, toi se o lai ngan chung lai, chung dinh hoi sinh...", 9270092)
                                    } else {
                                        if (status == 8) {
                                            cm.sendDirectionInfo("Effect/DirectionNewPirate.img/newPirate/balloonMsg2/25");
                                            delay(2000);
                                            cm.sendDirectionInfo("Effect/DirectionNewPirate.img/newPirate/balloonMsg2/23");
                                            cm.sendNext("#bThe core#k thuc su o #m240010300#, hay den do...", 9270092)
                                        } else {
                                            if (status == 9) {
                                                cm.sendDirectionInfo("Effect/DirectionNewPirate.img/newPirate/balloonMsg2/17");
                                                delay(3000);
                                                cm.removeNpc(552000074, 9270092);
                                                cm.removeNpc(552000074, 9270090);
                                                cm.forceCompleteQuest();
                                                cm.setInGameDirectionMode(false);
                                                cm.warp(240000000);
                                                cm.dispose()
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

function delay(a) {
    t1 = new Date().getTime();
    t2 = new Date().getTime();
    t2 += a;
    while (true) {
        if (t1 < t2) {
            t1 = new Date().getTime()
        } else {
            return
        }
    }
};