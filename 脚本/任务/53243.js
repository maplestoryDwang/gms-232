var status = -1;

function start(c, b, a) {
    cm.forceStartQuest();
    cm.dispose()
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
        if (cm.getQuestStatus(53243) != 1) {
            if (status == 0) {
                cm.sendNext("Hay mang nhung thu nay den cho #p2111008#. Anh ta o gan day thoi #m261010000#.")
            } else {
                if (status == 1) {
                    cm.sendNextSNoESC("(Co ve day se la nguoi minh can tim...)")
                } else {
                    if (status == 2) {
                        cm.forceStartQuest();
                        cm.dispose()
                    }
                }
            }
        } else {
            if (cm.getQuestStatus(53243) == 1) {
                if (status == 0) {
                    cm.sendNext("Ai, ai do??!.")
                } else {
                    if (status == 1) {
                        cm.sendNextSNoESC("Binh tinh nao. #p2111007# da bao toi den day")
                    } else {
                        if (status == 2) {
                            cm.sendNext("Phu`...tu khi nhan viec nay toi khong the ngu noi!")
                        } else {
                            if (status == 3) {
                                cm.sendNextSNoESC("Trong anh co ve rat met moi!")
                            } else {
                                if (status == 4) {
                                    cm.sendNext("Phai cong nhan rang de lam ra no rat kho. Va luon suc manh la khong the tin noi. Toi bat dau thay hoi so...No co the pha huy 1 vien da khong o Maple Word!")
                                } else {
                                    if (status == 5) {
                                        cm.sendNextSNoESC("(1 co may co the pha huy hon da...Nghe that la lung va minh khong thich no cho lam)")
                                    } else {
                                        if (status == 6) {
                                            cm.sendNextSNoESC("Day la nhung nguyen lieu anh can.")
                                        } else {
                                            if (status == 7) {
                                                cm.gainItem(4000357, -50);
                                                cm.gainItem(4000358, -50);
                                                cm.gainItem(4000364, -50);
                                                cm.sendNext("Ak phai roi cam on cau. Doi toi 1 chut thoi, se xong ngay")
                                            } else {
                                                if (status == 8) {
                                                    cm.sendNext("Ka me zo ko banh do banh che tra da xoi ngo................")
                                                } else {
                                                    if (status == 9) {
                                                        cm.sendNext("hm. No day roi.");
                                                        cm.gainItem(4033250, 1)
                                                    } else {
                                                        if (status == 10) {
                                                            cm.sendNext("Hay mang no den Ariant #m260020620#, khach hang dang doi o phia trong #m552000074#", 2111007)
                                                        } else {
                                                            if (status == 11) {
                                                                cm.forceCompleteQuest();
                                                                cm.forceCompleteQuest(53244);
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
            }
        }
    }
};