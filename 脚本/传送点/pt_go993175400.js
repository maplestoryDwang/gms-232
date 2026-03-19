function enter() {
    cm.openScriptNpc()
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
            cm.dispose();
            if (cm.getQuestStatus(100434) == 1) {
                cm.warp(993175400, 11, false)
            } else {
                if (cm.getQuestStatus(100435) == 1) {
                    cm.warp(993175400, 14, false);
                    cm.OnStartNavigation(993175400, 1, "9062244", 0)
                } else {
                    if (cm.getQuestStatus(100437) == 1) {
                        cm.warp(993175400, 9, false)
                    } else {
                        if (cm.getQuestStatus(100439) == 1) {
                            cm.warp(993175400, 10, false)
                        } else {
                            if (cm.getQuestStatus(100441) == 1) {
                                cm.warp(993175400, 10, false)
                            } else {
                                if (cm.getQuestStatus(100442) == 1) {
                                    cm.warp(993175400, 6, false)
                                } else {
                                    if (cm.getQuestStatus(100444) == 1) {
                                        cm.warp(993175400, 11, false)
                                    } else {
                                        if (cm.getQuestStatus(100446) == 1) {
                                            cm.warp(993175400, 8, false)
                                        } else {
                                            if (cm.getQuestStatus(100448) == 1) {
                                                cm.warp(993175400, 7, false)
                                            } else {
                                                if (cm.getQuestStatus(100450) == 1) {
                                                    cm.warp(993175400, 7, false)
                                                } else {
                                                    if (cm.getQuestStatus(100453) == 1) {
                                                        cm.warp(993175462, 0, false)
                                                    } else {
                                                        if (cm.getQuestStatus(100456) == 2 && cm.getQuestStatus(100457) == 0) {
                                                            cm.warp(993175400, 14, false)
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