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
            if (cm.isQuestActive(23043)) {
                cm.warp(931000300, 0, false)
            } else {
                if (cm.isQuestActive(23044)) {
                    cm.warp(931000301, 0, false)
                } else {
                    if (cm.isQuestActive(23045)) {
                        cm.warp(931000302, 0, false)
                    } else {
                        if (cm.isQuestActive(23166)) {
                            cm.warp(931000303, 0, false)
                        } else {
                            cm.warp(310060220, 0)
                        }
                    }
                }
            }
            cm.dispose()
        }
    }
};