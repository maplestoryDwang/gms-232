function enter() {
    if (cm.getNumberFromQuestInfo(33249, "on") == 0) {
        cm.curNodeEventEnd(true);
        cm.setInGameDirectionMode(true, false, true);
        cm.cameraSwitch_PushSwitchMoveInfo("pt_switch", 2000);
        cm.addPopupSay(1540452, 2000, "这次好像不能用鞭子来拉了. ", "", 0);
        cm.addPopupSay(1540451, 2000, "看来不能操作控制杆, 只能想想其他办法了. ", "", 0);
        cm.addPopupSay(1540451, 2000, "赫丽娜, 你有什么办法吗?", "", 0);
        cm.updateInfoQuest(33249, "on=1");
        cm.setInGameDirectionMode(false, true, false)
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
            cm.sendOk("这个传送点的脚本尚未修复。\r\n脚本位于： 脚本/传送点/pt_q33249.js ", 0)
        } else {
            cm.dispose()
        }
    }
};