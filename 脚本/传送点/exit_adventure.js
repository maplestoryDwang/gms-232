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
            if (cm.getMapId() == 912090000) {
                if (cm.isQuestFinished(32265) || cm.isQuestFinished(32255)) {
                    cm.warp(104020000, 8, false)
                } else {
                    cm.sendNormalTalk("有关的事件还没有解决。", 16, 0, false, false)
                }
            } else {
                if (cm.getMapId() == 910090100) {
                    if (cm.isQuestFinished(32268) || cm.isQuestActive(32272)) {
                        cm.warp(104020000, 8, false)
                    } else {
                        cm.sendNormalTalk("还不能出去。", 16, 0, false, false)
                    }
                } else {
                    if (cm.getMapId() == 211040401) {
                        cm.warp(211040300, 6, false)
                    } else {
                        if (cm.getMapId() == 910090200) {
                            if (cm.isQuestFinished(32296)) {
                                cm.warp(100000000, 0, false)
                            } else {
                                cm.sendNormalTalk("还不能出去。", 16, 0, false, false)
                            }
                        } else {
                            if (cm.getMapId() == 927020200) {
                                if ((cm.isQuestFinished(32308) && !cm.isQuestFinished(32312)) || cm.isQuestFinished(32313)) {
                                    cm.warp(270000000, 7, false)
                                } else {
                                    cm.sendNormalTalk("还不能出去。", 16, 0, false, false)
                                }
                            } else {
                                if (cm.getMapId() == 910400200) {
                                    if (cm.isQuestActive(32243) || (cm.isQuestFinished(32243) && !cm.isQuestFinished(32245))) {
                                        cm.warp(105000000, 8, false)
                                    } else {
                                        if (cm.isQuestActive(32253) || (cm.isQuestFinished(32253) && !cm.isQuestFinished(32255))) {
                                            cm.warp(912090000, 0, false)
                                        } else {
                                            if (cm.isQuestActive(32253) || cm.isQuestActive(32263)) {
                                                cm.warp(912090000, 0, false)
                                            } else {
                                                if (cm.isQuestFinished(32245)) {
                                                    cm.warp(100000000, 0, false)
                                                } else {
                                                    cm.sendNormalTalk("还不能出去。", 16, 0, false, false)
                                                }
                                            }
                                        }
                                    }
                                } else {
                                    cm.sendNormalTalk("还不能出去。", 16, 0, false, false)
                                }
                            }
                        }
                    }
                }
            }
            cm.dispose()
        }
    }
};