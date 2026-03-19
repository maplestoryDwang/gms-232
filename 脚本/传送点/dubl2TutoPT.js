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
            if (cm.isQuestActive(2600)) {
                cm.warp(103050910, 0, false)
            } else {
                cm.getTopMsgFont("先和红雅谈话，然后再开始你的旅程。", 3, 20, 4, 0, 0)
            }
            cm.dispose()
        }
    }
};