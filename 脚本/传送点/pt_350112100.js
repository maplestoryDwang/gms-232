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
            cm.askYesNo_Bottom("我能感受到先祖的气息！\r\n#b朝这个方向移动吗？#l", 37, 1540807)
        } else {
            if (status === a++) {
                cm.setPartner(0, 1540784, 0, 0);
                cm.setPartner(0, 1540785, 0, 0);
                cm.setPartner(0, 1540786, 0, 0);
                cm.dispose();
                cm.warp(350112200, 0, false)
            }
        }
    }
};