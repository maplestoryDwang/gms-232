function enter() {
    if (cm.isQuestActive(58766)) {
        cm.openNpc("蘑菇神社_狐狸峡谷")
    } else {
        cm.sendOk_Bottom("现在不是探索这里的时机。还有其他事情要做。")
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
            cm.sendOk("这个传送点的脚本尚未修复。\r\n脚本位于： 脚本/传送点/pt_onifox.js ", 0)
        } else {
            cm.dispose()
        }
    }
};