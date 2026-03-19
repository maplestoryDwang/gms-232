function enter() {
    var b = cm.getPortal().getId();
    var a = cm.getPortal().getName();
    if (cm.haveItem(4009324)) {
        cm.warp(350051450, 2, true)
    } else {
        cm.addPopupSay(1540451, 1500, "怪物脖子上挂的东西好像正是我们所需要的. 先拿到了再离开吧.", "", 0)
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
            cm.sendOk("这个传送点的脚本尚未修复。\r\n脚本位于： 脚本/传送点/goto_maze1450.js ", 0)
        } else {
            cm.dispose()
        }
    }
};