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
            cm.askYesNo_Bottom("#h0#，你要回到原来的地方吗？", 36, 9401071)
        } else {
            cm.dispose();
            cm.warp(cm.getNumberFromQuestInfo(64939, "map"), 0)
        }
    }
};