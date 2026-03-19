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
            cm.askYesNo_Bottom("还是先撤退吧，先从这里出去。", 36, 1540880)
        } else {
            cm.dispose();
            cm.openNpc("冒险岛英雄_Act3_逃离博物馆")
        }
    }
};