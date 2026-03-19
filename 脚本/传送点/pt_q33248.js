function enter() {
    if (cm.getNumberFromQuestInfo(33248, "on") == 0) {
        cm.curNodeEventEnd(true);
        cm.setInGameDirectionMode(true, false, true);
        cm.cameraSwitch_PushSwitchMoveInfo("pt_switch", 2000);
        cm.addPopupSay(1540451, 2000, "控制杆的距离有点远. ", "", 0);
        cm.addPopupSay(1540452, 2000, "就交给我吧。", "", 0);
        cm.updateInfoQuest(33248, "on=1");
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
            cm.sendOk("这个传送点的脚本尚未修复。\r\n脚本位于： 脚本/传送点/pt_q33248.js ", 0)
        } else {
            cm.dispose()
        }
    }
};