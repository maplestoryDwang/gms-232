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
            cm.askYesNo("#b（被奇妙的气息所包围的石头。长老是让摸这块石头吧……要摸一下充满了寒冷气息的石头吗？）", 0, 2030006)
        } else {
            if (status === a++) {
                cm.dispose();
                cm.warp(910540000, 0, false)
            }
        }
    }
};