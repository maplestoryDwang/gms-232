function enter() {
    var b = cm.getPortal().getId();
    var a = cm.getPortal().getName();
    if (cm.getMapId() > 350056000) {
        cm.warp(350056000, 1, false)
    } else {
        if (cm.getMapId() > 350055000) {
            cm.warp(350055000, 1, false)
        } else {
            cm.warp(350054000, 1, false)
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
            cm.sendOk("这个传送点的脚本尚未修复。\r\n脚本位于： 脚本/传送点/bh_d3_back.js ", 0)
        } else {
            cm.dispose()
        }
    }
};