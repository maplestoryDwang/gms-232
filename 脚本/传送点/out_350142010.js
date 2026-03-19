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
            cm.askYesNo_Bottom("#face3#做好充足的准备！戴米安应该就在前面等着！\r\n#b(点击是进入堕落世界树顶端。)#k", 36, 1540805)
        } else {
            cm.dispose();
            cm.openNpc("冒险岛英雄_Act4_决战戴米安")
        }
    }
};