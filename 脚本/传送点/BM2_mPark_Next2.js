function enter() {
    if (eim.getNumberProperty("clear") == 1) {
        if (cm.getMapId() == 993068600) {
            cm.warp(993068700, 1, false)
        } else {
            if (cm.getMapId() == 993068700) {
                cm.forceCompleteQuest(35716);
                cm.gainExp(341342713);
                cm.warp(450011220, 4, true)
            } else {
                if (cm.getMapId() == 993069000) {
                    cm.warp(993069100, 1, false)
                } else {
                    if (cm.getMapId() == 993069100) {
                        cm.gainExp(341342713);
                        cm.warp(993063010, 0, false)
                    } else {
                        if (cm.getMapId() == 993069300) {
                            cm.warp(993069400, 1, false)
                        } else {
                            if (cm.getMapId() == 993069400) {
                                cm.forceCompleteQuest(35720);
                                cm.gainExp(341342713);
                                cm.updateInfoQuest(35757, "enter=993063032;do=end");
                                cm.updateInfoQuest(35750, "01=h0;11=h0;02=h0;21=h2;03=h1;22=h2;04=h0;23=h2;14=h0;05=h5;06=h1;15=h1;17=h0;09=h0;79=h1");
                                cm.warp(450011220, 5, false)
                            } else {
                                if (cm.getMapId() == 993069600) {
                                    cm.warp(993069700, 1, false)
                                } else {
                                    if (cm.getMapId() == 993069700) {
                                        cm.forceCompleteQuest(35723);
                                        cm.gainExp(341342713);
                                        cm.warp(450011220, 4, false)
                                    } else {
                                        if (cm.getMapId() == 993069900) {
                                            cm.warp(993063800, 1, false)
                                        } else {
                                            if (cm.getMapId() == 993063800) {
                                                cm.warp(993063900, 1, false)
                                            } else {
                                                if (cm.getMapId() == 993063900) {
                                                    cm.forceCompleteQuest(35728);
                                                    cm.gainExp(341342713);
                                                    cm.warp(450011320, 1, false)
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
    } else {
        cm.playerMessage(-1, "怪物还没有清理干净。");
        cm.playerMessage(5, "怪物还没有清理干净。")
    }
}
var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

function action(mode, type, selection) {
    var reactor = "action" + cm.getMapId();
    eval(reactor)(mode, type, selection)
}

function action993070100(d, c, b) {
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
            cm.sendOk("这个传送点的脚本尚未修复。\r\n脚本位于： 脚本/传送点/BM2_mPark_Next2.js ", 0)
        } else {
            cm.dispose()
        }
    }
}

function action993070200(d, c, b) {
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
            cm.sendOk("这个传送点的脚本尚未修复。\r\n脚本位于： 脚本/传送点/BM2_mPark_Next2.js ", 0)
        } else {
            cm.dispose()
        }
    }
}

function action993070300(d, c, b) {
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
            cm.sendOk("这个传送点的脚本尚未修复。\r\n脚本位于： 脚本/传送点/BM2_mPark_Next2.js ", 0)
        } else {
            cm.dispose()
        }
    }
};