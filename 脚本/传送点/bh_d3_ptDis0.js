function enter() {
    var c = cm.getPortal().getId();
    var a = cm.getPortal().getName();
    var b = cm.getMapId();
    if (b == 350055400) {
        cm.onSetBackEffect("bh_554_1", 1, 1, 0, 0);
        cm.地图特效_开关落脚点([38], [0]);
        cm.onSetBackEffect("bh_554_2", 1, 0, 0, 0);
        cm.地图特效_开关落脚点([49], [1]);
        cm.onSetBackEffect("bh_554_3", 1, 0, 0, 0);
        cm.地图特效_开关落脚点([47], [1]);
        cm.onSetBackEffect("bh_554_4", 1, 0, 0, 0);
        cm.地图特效_开关落脚点([48], [1]);
        cm.onSetBackEffect("bh_554_5", 1, 0, 0, 0);
        cm.地图特效_开关落脚点([42], [1]);
        cm.onSetBackEffect("bh_554_6", 1, 0, 0, 0);
        cm.地图特效_开关落脚点([46], [1]);
        cm.onSetBackEffect("bh_554_7", 1, 0, 0, 0);
        cm.地图特效_开关落脚点([43, 45, 51], [1, 1, 1])
    } else {
        cm.spawnMobLimit(8240088, 1, -391, 2194, 3);
        cm.spawnMobLimit(8240088, 1, -377, 2194, 3);
        cm.spawnMobLimit(8240088, 1, -460, 2194, 3);
        cm.onSetBackEffect("bh_542_1", 1, 1, 0, 0);
        cm.地图特效_开关落脚点([72], [0]);
        cm.onSetBackEffect("bh_542_2", 1, 0, 0, 0);
        cm.地图特效_开关落脚点([73], [1]);
        cm.onSetBackEffect("bh_542_3", 1, 0, 0, 0);
        cm.地图特效_开关落脚点([74], [1]);
        cm.onSetBackEffect("bh_542_4", 1, 0, 0, 0);
        cm.地图特效_开关落脚点([75], [1]);
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
            cm.sendOk("这个传送点的脚本尚未修复。\r\n脚本位于： 脚本/传送点/bh_d3_ptDis0.js ", 0)
        } else {
            cm.dispose()
        }
    }
};