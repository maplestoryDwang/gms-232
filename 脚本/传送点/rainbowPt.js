function enter() {
    if (cm.isQuestFinished(63085)) {
        cm.openScriptNpc()
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
            cm.askAcceptDecline("#b(#p9400222#造出的彩虹桥还在。\r\n走过彩虹桥前往思索之地吧？)", 2, 0)
        } else {
            if (status === a++) {
                cm.dispose();
                cm.warp(867113400, 0, true)
            }
        }
    }
};