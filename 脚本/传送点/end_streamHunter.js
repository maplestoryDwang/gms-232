function enter() {
    if (em.getNumberProperty("clear") > 0) {
        return
    }
    em.setProperty("clear", 1);
    cm.fieldEffect_ScreenMsg("detectiveGD/finish");
    eim.schedule("通关", 5 * 1000);
    cm.getPlayer().scheduleWarpTask(12, 993170000, 0, false)
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
            cm.sendOk("这个传送点的脚本尚未修复。\r\n脚本位于： 脚本/传送点/end_streamHunter.js ", 0)
        } else {
            cm.dispose()
        }
    }
};