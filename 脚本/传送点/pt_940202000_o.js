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
            if (cm.getNumberFromQuestInfo(34903, "map") <= 0) {
                cm.warp(100000000, 0);
                cm.playerMessage(6, "【存档地图为" + cm.getNumberFromQuestInfo(34903, "map") + " 故传送至射手村】")
            } else {
                cm.warp(cm.getNumberFromQuestInfo(34903, "map"), 0)
            }
            cm.dispose()
        }
    }
};