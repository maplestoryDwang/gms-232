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
            cm.sendNormalTalk_Bottom("#face0#你果然和其他人一样选择了左边的路。要走这边吗？", 37, 3003770, false, true)
        } else {
            if (status === a++) {
                cm.dispose();
                cm.warp(993063012, 1, false)
            }
        }
    }
};