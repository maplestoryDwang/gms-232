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
            if (cm.getInfoQuest(32344).equals("0")) {
                cm.updateInfoQuest(32344, "1")
            } else {
                if (cm.getInfoQuest(32344).equals("1")) {
                    cm.updateInfoQuest(32344, "2")
                } else {
                    if (cm.getInfoQuest(32344).equals("2")) {
                        cm.updateInfoQuest(32344, "3")
                    } else {
                        if (cm.getInfoQuest(32344).equals("3")) {
                            cm.updateInfoQuest(32344, "4")
                        } else {
                            if (cm.getInfoQuest(32344).equals("4")) {
                                cm.dispose();
                                cm.warp(910142200, 1, false);
                                return
                            }
                        }
                    }
                }
            }
            cm.dispose()
            cm.warp(910142200, 1, false);
        }
    }
};