function enter() {
    if (cm.getMapId() < 993071300) {
        cm.warp(450012010, 3)
    } else {
        if (cm.getMapId() < 993072000) {
            cm.warp(450012120, 3)
        } else {
            if (cm.getMapId() < 993072000) {
                cm.warp(450012410, 3)
            } else {
                if (cm.getMapId() < 993072300) {
                    cm.warp(450012410, 3)
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
            cm.sendOk("这个传送点的脚本尚未修复。\r\n脚本位于： 脚本/传送点/BM3_mPark_Exit.js ", 0)
        } else {
            cm.dispose()
        }
    }
};