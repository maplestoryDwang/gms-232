function enter() {
    if (cm.getQuestStatus(37311) == 0) {
        cm.startQuestScript(0, 37311)
    } else {
        cm.openNpc("荣耀_大世无界_世界之泪")
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
            cm.sendOk("这个传送点的脚本尚未修复。\r\n脚本位于： 脚本/传送点/east_993134000.js ", 0)
        } else {
            cm.dispose()
        }
    }
};