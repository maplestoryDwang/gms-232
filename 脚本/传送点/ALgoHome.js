function enter() {
    var a = cm.getMapId();
    if (a == 867113210) {
        cm.warp(cm.getMapId() - 10, 3, false)
    } else {
        if (a == 867113310) {
            if (cm.getNumberFromQuestInfo(63071, "wall") >= 5) {
                cm.warp(cm.getMapId() - 8, 2, false)
            } else {
                cm.warp(cm.getMapId() - 10, 1, false)
            }
        } else {
            if (a == 867113410) {
                cm.warp(cm.getMapId() - 10, 3, false)
            } else {
                cm.warp(cm.getMapId() - 10, 2, false)
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
            cm.sendOk("这个传送点的脚本尚未修复。\r\n脚本位于： 脚本/传送点/ALgoHome.js ", 0)
        } else {
            cm.dispose()
        }
    }
};