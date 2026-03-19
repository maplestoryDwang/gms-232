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
            cm.askYesNo_Bottom("勇士，魔王皮洛克还没有被打败，现在就要离开吗？", 36, 9062172, 3)
        } else {
            cm.dispose();
            cm.warp(993107701, 0, false)
        }
    }
};