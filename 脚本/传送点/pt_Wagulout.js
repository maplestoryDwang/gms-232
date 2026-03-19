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
            cm.sendNormalTalk_Bottom("你的#r#e热闹监视塔#k#n盖到#r#e" + cm.getNumberFromQuestInfo(16192, "level") + "层#k#n了YO！\r\n再接再厉往上盖吧！\r\n这都是为了锻炼你的集中力YO！", 37, 9062175, false, true, 3)
        } else {
            if (status === a++) {
                cm.dispose();
                cm.warp(993110000, 24, false)
            }
        }
    }
};