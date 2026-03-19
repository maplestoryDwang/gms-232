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
            cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#(先了解下这附近的情况吧。)", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1)
        } else {
            cm.dispose()
        }
    }
};