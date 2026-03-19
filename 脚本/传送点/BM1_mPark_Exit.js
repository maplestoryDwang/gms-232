function enter() {
    var a = cm.getMapId();
    if (a >= 993060800 && a <= 993061000) {
        cm.warp(993060001, 0, false)
    } else {
        if (a >= 993060100 && a <= 993060300) {
            cm.warp(993060010, 0, false)
        } else {
            if (a >= 993060500 && a <= 993060700) {
                cm.warp(993060013, 0, false)
            } else {
                if (a == 993060400) {
                    cm.warp(993060017, 0, false)
                } else {
                    if (a >= 993061400 && a <= 993061600) {
                        cm.warp(993060038, 0, false)
                    } else {
                        if (a >= 993061700 && a <= 993061900) {
                            cm.warp(993060041, 0, false)
                        } else {
                            if (a == 993067400) {
                                cm.warp(993060046, 0, false)
                            } else {
                                if (a >= 993065300 && a <= 993065500) {
                                    cm.warp(993060050, 0, false)
                                } else {
                                    if (a >= 993065900 && a <= 993066100) {
                                        cm.warp(993060058, 0, false)
                                    } else {
                                        if (a >= 993066500 && a <= 993066700) {
                                            cm.warp(993060066, 0, false)
                                        } else {
                                            if (a >= 993066800 && a <= 993067000) {
                                                cm.warp(993060068, 0, false)
                                            } else {
                                                if (a == 993067100) {
                                                    cm.warp(993060077, 0, false)
                                                } else {
                                                    cm.warp(a - 100, 0, false)
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
var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

function action(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.sendOk("这个传送点的脚本尚未修复。\r\n脚本位于： 脚本/传送点/BM1_mPark_Exit.js ", 0)
        } else {
            cm.dispose()
        }
    }
};