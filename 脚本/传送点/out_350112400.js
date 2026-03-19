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
            cm.askYesNo_Bottom("赶紧离开！", 36, 1540802)
        } else {
            if (status === a++) {
                cm.setPartner(0, 1540785, 0, 0);
                cm.setPartner(0, 1540781, 0, 0);
                cm.dispose();
                cm.openNpc("冒险岛英雄_Act1_逃离雪龟岛")
            }
        }
    }
};