function enter() {
    if (cm.getNumberFromQuestInfo(33247, "on") == 0) {
        cm.cameraSwitch_PushSwitchMoveInfo("pt_lookup", 2000);
        cm.addPopupSay(1540451, 2000, "如果操作控制杆, 就能使用踏板了. ", "", 0);
        cm.updateInfoQuest(33247, "on=1")
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
            cm.sendOk("这个传送点的脚本尚未修复。\r\n脚本位于： 脚本/传送点/pt_q33247.js ", 0)
        } else {
            cm.dispose()
        }
    }
};