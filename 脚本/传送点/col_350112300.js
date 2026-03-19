function enter() {
    cm.updateInfoQuest(33905, "check2=1;check3=1;check5=1;check7=1;check=1");
    cm.Hidden_background("AF_Tuto", 1, 1, 0, 0)
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
            cm.sendOk("这个传送点的脚本尚未修复。\r\n脚本位于： 脚本/传送点/col_350112300.js ", 0)
        } else {
            cm.dispose()
        }
    }
};