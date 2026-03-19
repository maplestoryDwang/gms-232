function enter() {
    cm.openScriptNpc()
}
var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

function action(e, d, c) {
    if (cm.getPlayer().getGender() == 0) {
        var a = 1531000
    } else {
        var a = 1531052
    }
    if (status == 0 && e == 0) {
        cm.dispose();
        return
    }(e == 1) ? status++ : status--;
    selectionLog[status] = c;
    var b = -1;
    if (status <= b++) {
        cm.dispose()
    } else {
        if (status === b++) {
            if (!cm.isQuestFinished(22751)) {
                cm.dispose()
            } else {
                if (cm.getMapId() == 331001000) {
                    cm.askYesNo_Bottom("要去冒险岛世界吗？", 36, a)
                } else {
                    cm.askYesNo_Bottom("要回都市吗？", 36, a)
                }
            }
        } else {
            if (status === b++) {
                if (cm.getMapId() == 331001000) {
                    cm.warp(101020400, 5, false)
                } else {
                    cm.warp(331001000, 4, false)
                }
                cm.dispose()
            }
        }
    }
};