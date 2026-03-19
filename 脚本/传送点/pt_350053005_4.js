function enter() {
    var b = cm.getPortal().getId();
    var a = cm.getPortal().getName();
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
            cm.sendNormalTalk_Bottom("总之，在离开这里之前我们要待在一起。", 37, 1540490, false, true)
        } else {
            if (status === a++) {
                cm.updateInfoQuest(33240, "skip6=1;skip8=1;switch=1;skip15=1;act5=350053350");
                cm.dispose();
                cm.warp(350053400, 0, false)
            }
        }
    }
};