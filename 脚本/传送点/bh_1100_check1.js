function enter() {
    var b = cm.getPortal().getId();
    var a = cm.getPortal().getName();
    cm.addPopupSay(1540454, 1500, "这边墙上的烟尘……你们不觉得奇怪吗?", "", 0);
    cm.addPopupSay(1540455, 3000, "噢!如果像电影那样, 推动墙壁, 发现这儿有秘密门就好了!", "", 0)
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
            cm.sendOk("这个传送点的脚本尚未修复。\r\n脚本位于： 脚本/传送点/bh_1100_check1.js ", 0)
        } else {
            cm.dispose()
        }
    }
};