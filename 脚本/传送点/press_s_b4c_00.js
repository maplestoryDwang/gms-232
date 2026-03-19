function enter() {
    var a = cm.getPortal().getName();
    if (cm.getNumberFromQuestInfo(63485, a) == 0) {
        cm.setNumberForQuestInfo(63485, a, 1);
        cm.getMap().onSyncDynamicFoothold(["press_s_b4c_00"], [0], [2], [-13436], [-119]);
        cm.dynamicObjMove(-13436, -119, -12693, -119, -13436, -119, 1, 30, 0, "press_s_b4c_00")
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
            cm.sendOk("这个传送点的脚本尚未修复。\r\n脚本位于： 脚本/传送点/press_s_b4c_00.js ", 0)
        } else {
            cm.dispose()
        }
    }
};