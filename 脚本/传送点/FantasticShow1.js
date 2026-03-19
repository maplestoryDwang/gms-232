function enter() {
    var b = cm.getPortal().getId();
    var a = cm.getPortal().getName();
    if (cm.isQuestActive(31382)) {
        cm.openNpc("副本_梦幻主题乐园_Boss_剧情")
    } else {
        cm.openNpc("BOSS_心疤狮王入场")
    }
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
            var f = cm.getPortal().getId();
            var a = cm.getPortal().getName();
            cm.sendOk("这个传送点 [" + f + " : " + a + "] 的脚本尚未修复。\r\n脚本位于： 脚本/传送点/FantasticShow1.js ", 0)
        } else {
            cm.dispose()
        }
    }
};