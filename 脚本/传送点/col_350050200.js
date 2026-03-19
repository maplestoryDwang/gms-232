function enter() {
    cm.updateInfoQuest(33222, "save=2;col4=0");
    cm.addPopupSay(1540704, 1000, "你穿的是裙子吗?", "", 0);
    cm.addPopupSay(1540451, 1000, "严格地说……\r\n与裙子有些类似……", "", 0)
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
            cm.sendOk("这个传送点的脚本尚未修复。\r\n脚本位于： 脚本/传送点/col_350050200.js ", 0)
        } else {
            cm.dispose()
        }
    }
};