function enter() {
    var c = cm.getPortal().getId();
    var a = cm.getPortal().getName();
    var b = cm.getMapId();
    if (b == 350055400) {
        cm.onSetBackEffect("bh_554_3", 1, 0, 0, 0);
        cm.地图特效_开关落脚点([47], [1]);
        cm.onSetBackEffect("bh_554_5", 1, 1, 0, 0);
        cm.地图特效_开关落脚点([42], [0]);
        cm.npc_LeaveField("oid=47364")
    } else {
        cm.onSetBackEffect("bh_542_3", 1, 0, 0, 0);
        cm.地图特效_开关落脚点([74], [1]);
        cm.setNumberForQuestInfo(33242, "savePt", c)
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
            cm.sendOk("这个传送点的脚本尚未修复。\r\n脚本位于： 脚本/传送点/bh_d3_ptDis4.js ", 0)
        } else {
            cm.dispose()
        }
    }
};