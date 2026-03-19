function enter() {
    cm.openScriptNpc()
}
var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

function action(c, b, a) {
    if (status == 0 && c == 0) {
        cm.dispose();
        return
    }
    if (eim.getNumberProperty("core") < 2) {
        cm.playerMessage(-1, "门被锁住了。");
        cm.playerMessage(5, "门被锁住了。")
    } else {
        if (cm.getMapId() == 940500000) {
            cm.warp(993063033, 0, false)
        } else {
            if (cm.getMapId() == 940400000) {
                cm.warp(993063036, 0, false)
            } else {
                if (cm.getMapId() == 940300000) {
                    cm.warp(993063004, 0, false)
                }
            }
        }
    }
    cm.dispose()
};