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
            cm.askYesNoNoESC_Bottom("#face0#（要暂时回避一下吗？）", 3001500 + cm.getPlayer().getGender())
        } else {
            cm.dispose();
            cm.warp(402000615, 0)
        }
    }
};