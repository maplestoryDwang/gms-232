function enter() {
    cm.updateInfoQuest(35718, "16_2=1;order=gabdcehf;enter=1");
    cm.updateInfoQuest(35718, "16_2=1;order=gabdcehf;enter=1;MapID=993063016");
    cm.updateInfoQuest(35718, "16_2=1;Pt=2;order=gabdcehf;enter=1;MapID=993063016");
    cm.warp(993063022, 1, false)
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
            cm.sendOk("这个传送点的脚本尚未修复。\r\n脚本位于： 脚本/传送点/pt_993063016_1.js ", 0)
        } else {
            cm.dispose()
        }
    }
};