function enter() {
    cm.openScriptNpc()
}
var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

function action(e, d, c) {
    if (status == 0 && e == 0) {
        cm.dispose();
        return
    }(e == 1) ? status++ : status--;
    selectionLog[status] = c;
    var b = -1;
    if (status <= b++) {
        cm.dispose()
    } else {
        if (status === b++) {
            cm.askYesNo("做好出发的准备了吗？", 5, 9400581)
        } else {
            if (status === b++) {
                cm.sendNormalTalk_Bottom("#face0#先头出发！", 37, 9400581, false, true)
            } else {
                cm.dispose();
                var a = cm.getNumberFromQuestInfo(64006, "Ec");
                if (a > 0) {
                    cm.warp(867200550, a - 1)
                } else {
                    cm.warp(867200551, 0)
                }
            }
        }
    }
};